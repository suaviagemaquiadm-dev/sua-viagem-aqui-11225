'use server';
import { config } from 'dotenv';
config();

import '@/ai/flows/generate-personalized-itineraries.ts';
import '@/ai/flows/create-subscription.ts';
import '@/ai/flows/send-telegram-message.ts';
import '@/ai/flows/generate-sophia-response.ts';
import '@/ai/flows/generate-vitor-response.ts';
