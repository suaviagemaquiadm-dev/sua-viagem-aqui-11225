'use server';
/**
 * @fileOverview Flow to create a Mercado Pago subscription.
 *
 * - createSubscription - A function that creates a recurring subscription plan.
 * - CreateSubscriptionInput - The input type for the createSubscription function.
 * - CreateSubscriptionOutput - The return type for the createSubscription function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { configure, preapproval } from 'mercadopago';

const CreateSubscriptionInputSchema = z.object({
  userEmail: z.string().email('Formato de e-mail inválido.'),
  price: z.number().positive('O preço deve ser um número positivo.'),
  reason: z.string(),
});
export type CreateSubscriptionInput = z.infer<typeof CreateSubscriptionInputSchema>;

const CreateSubscriptionOutputSchema = z.object({
  init_point: z.string().describe("URL de checkout do Mercado Pago."),
});
export type CreateSubscriptionOutput = z.infer<typeof CreateSubscriptionOutputSchema>;

// Configure o Mercado Pago com seu Access Token.
// Lembre-se de adicionar seu Access Token ao arquivo .env
configure({
  access_token: process.env.MP_ACCESS_TOKEN || '',
});

export async function createSubscription(
  input: CreateSubscriptionInput
): Promise<CreateSubscriptionOutput> {
  return createSubscriptionFlow(input);
}

const createSubscriptionFlow = ai.defineFlow(
  {
    name: 'createSubscriptionFlow',
    inputSchema: CreateSubscriptionInputSchema,
    outputSchema: CreateSubscriptionOutputSchema,
  },
  async (input) => {
    const preapprovalRequest = {
      reason: input.reason,
      auto_recurring: {
        frequency: 1,
        frequency_type: 'months' as const,
        transaction_amount: input.price,
        currency_id: 'BRL',
      },
      payer_email: input.userEmail,
      back_url: process.env.NEXT_PUBLIC_APP_URL ? `${process.env.NEXT_PUBLIC_APP_URL}/painel` : 'http://localhost:9002/painel',
    };

    try {
      const response = await preapproval.create(preapprovalRequest);
      
      if (response.body.init_point) {
        return {
          init_point: response.body.init_point,
        };
      } else {
        throw new Error('init_point não foi retornado pelo Mercado Pago.');
      }
    } catch (error: any) {
      console.error('Erro ao criar assinatura no Mercado Pago:', error);
      throw new Error(`Falha ao se comunicar com a API do Mercado Pago: ${error.message}`);
    }
  }
);
