'use server';
/**
 * @fileOverview An AI agent for generating personalized trip itineraries.
 *
 * - generatePersonalizedItinerary - A function that generates a personalized trip itinerary.
 * - GeneratePersonalizedItineraryInput - The input type for the generatePersonalizedItinerary function.
 * - GeneratePersonalizedItineraryOutput - The return type for the generatePersonalizedItinerary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedItineraryInputSchema = z.string().describe(
    'A description of the client profile and their travel preferences, e.g., \'Couple on honeymoon, 10 days in Italy. Seeking romance, gastronomy, and private tours. High budget.\''
);
export type GeneratePersonalizedItineraryInput = z.infer<typeof GeneratePersonalizedItineraryInputSchema>;

const GeneratePersonalizedItineraryOutputSchema = z.object({
  itinerary: z.string().describe('The generated personalized trip itinerary.'),
});
export type GeneratePersonalizedItineraryOutput = z.infer<typeof GeneratePersonalizedItineraryOutputSchema>;

export async function generatePersonalizedItinerary(
    input: GeneratePersonalizedItineraryInput
): Promise<GeneratePersonalizedItineraryOutput> {
  return generatePersonalizedItineraryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedItineraryPrompt',
  input: {schema: GeneratePersonalizedItineraryInputSchema},
  output: {schema: GeneratePersonalizedItineraryOutputSchema},
  prompt: `You are an expert travel agent specializing in creating personalized trip itineraries. Based on the client's profile and travel preferences, generate a detailed and compelling itinerary.  The itinerary should be well-structured, including destinations, activities, and estimated costs. Be conversational in tone.

Client Profile and Preferences: {{{$input}}}
`,
});

const generatePersonalizedItineraryFlow = ai.defineFlow(
    {
      name: 'generatePersonalizedItineraryFlow',
      inputSchema: GeneratePersonalizedItineraryInputSchema,
      outputSchema: GeneratePersonalizedItineraryOutputSchema,
    },
    async input => {
      const {output} = await prompt(input);
      return output!;
    }
);
