'use server';
/**
 * @fileOverview Flow to send a message to a Telegram chat.
 *
 * - sendTelegramMessage - A function that sends a message to a Telegram chat.
 * - SendTelegramMessageInput - The input type for the sendTelegramMessage function.
 * - SendTelegramMessageOutput - The return type for the sendTelegramMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import TelegramBot from 'node-telegram-bot-api';

const SendTelegramMessageInputSchema = z.string().describe("The message text to send.");
export type SendTelegramMessageInput = z.infer<typeof SendTelegramMessageInputSchema>;

const SendTelegramMessageOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type SendTelegramMessageOutput = z.infer<typeof SendTelegramMessageOutputSchema>;

export async function sendTelegramMessage(
  input: SendTelegramMessageInput
): Promise<SendTelegramMessageOutput> {
  return sendTelegramMessageFlow(input);
}

const sendTelegramMessageFlow = ai.defineFlow(
  {
    name: 'sendTelegramMessageFlow',
    inputSchema: SendTelegramMessageInputSchema,
    outputSchema: SendTelegramMessageOutputSchema,
  },
  async (message) => {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      const errorMessage = 'Telegram Bot Token or Chat ID are not set in environment variables.';
      console.error(errorMessage);
      return { success: false, message: errorMessage };
    }

    try {
      const bot = new TelegramBot(token);
      await bot.sendMessage(chatId, message);
      return { success: true, message: 'Message sent successfully.' };
    } catch (error: any) {
      console.error('Error sending Telegram message:', error);
      return { success: false, message: `Failed to send message: ${error.message}` };
    }
  }
);
