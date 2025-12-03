'use server';
/**
 * @fileOverview A flow for Sophia, the AI travel guide, to generate conversational responses.
 *
 * - generateSophiaResponse - A function that generates a helpful response to a user's travel-related question.
 * - GenerateSophiaResponseInput - The input type for the generateSophiaResponse function.
 * - GenerateSophiaResponseOutput - The return type for the generateSophiaResponse function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateSophiaResponseInputSchema = z.string().describe("The user's question or message to Sophia.");
export type GenerateSophiaResponseInput = z.infer<typeof GenerateSophiaResponseInputSchema>;

const GenerateSophiaResponseOutputSchema = z.string().describe("Sophia's helpful and friendly response.");
export type GenerateSophiaResponseOutput = z.infer<typeof GenerateSophiaResponseOutputSchema>;


export async function generateSophiaResponse(
  input: GenerateSophiaResponseInput
): Promise<GenerateSophiaResponseOutput> {
  return generateSophiaResponseFlow(input);
}


const prompt = ai.definePrompt({
  name: 'generateSophiaResponsePrompt',
  input: { schema: GenerateSophiaResponseInputSchema },
  output: { schema: GenerateSophiaResponseOutputSchema },
  prompt: `You are Sophia, an expert, friendly, and enthusiastic AI travel guide for the 'Sua Viagem Aqui' platform.
Your knowledge is focused on travel, destinations, tour recommendations, and trip planning, especially within Brazil.

Your role is to have a helpful and encouraging conversation with the user.
- Answer their travel-related questions in a concise, friendly, and conversational manner.
- If the user asks something unrelated to travel, politely steer the conversation back to travel. For example: "Essa é uma ótima pergunta, mas meu conhecimento é todo sobre viagens! Que tal eu te ajudar a encontrar um destino incrível para suas próximas férias?"
- Keep your answers relatively short and easy to read.

User's question: {{{$input}}}
`,
});


const generateSophiaResponseFlow = ai.defineFlow(
  {
    name: 'generateSophiaResponseFlow',
    inputSchema: GenerateSophiaResponseInputSchema,
    outputSchema: GenerateSophiaResponseOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
