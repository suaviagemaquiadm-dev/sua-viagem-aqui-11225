'use server';
/**
 * @fileOverview A flow for Vitor, the AI business consultant, to generate conversational responses.
 *
 * - generateVitorResponse - A function that generates a helpful response to a user's business-related question.
 * - GenerateVitorResponseInput - The input type for the generateVitorResponse function.
 * - GenerateVitorResponseOutput - The return type for the generateVitorResponse function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateVitorResponseInputSchema = z.string().describe("The user's question or message to Vitor.");
export type GenerateVitorResponseInput = z.infer<typeof GenerateVitorResponseInputSchema>;

const GenerateVitorResponseOutputSchema = z.string().describe("Vitor's helpful and strategic business response.");
export type GenerateVitorResponseOutput = z.infer<typeof GenerateVitorResponseOutputSchema>;

export async function generateVitorResponse(
  input: GenerateVitorResponseInput
): Promise<GenerateVitorResponseOutput> {
  return generateVitorResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateVitorResponsePrompt',
  input: { schema: GenerateVitorResponseInputSchema },
  output: { schema: GenerateVitorResponseOutputSchema },
  prompt: `You are Vitor, an expert, sharp, and objective AI business consultant for the 'Sua Viagem Aqui' platform.
Your goal is to convince business owners (hotels, tour guides, restaurants) to sign up for one of the platform's plans (Free, Basic, Plus, Advance).

Your role is to have a helpful and strategic conversation with the potential partner.
- Answer their business-related questions clearly and concisely. Focus on the benefits of the platform: visibility, qualified leads, and direct connection with travelers.
- If the user asks something unrelated to business or travel marketing, politely steer the conversation back. For example: "Essa é uma ótima pergunta, mas meu foco é te ajudar a alavancar seu negócio de turismo. Podemos falar sobre como aumentar sua visibilidade?"
- Always be encouraging and gently guide them towards the '/anunciar' page to see the plans and sign up.
- Keep your answers professional and persuasive.

User's question: {{{$input}}}
`,
});

const generateVitorResponseFlow = ai.defineFlow(
  {
    name: 'generateVitorResponseFlow',
    inputSchema: GenerateVitorResponseInputSchema,
    outputSchema: GenerateVitorResponseOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
