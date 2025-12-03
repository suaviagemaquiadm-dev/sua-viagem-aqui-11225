"use server";

import { generatePersonalizedItinerary } from '@/ai/flows/generate-personalized-itineraries';
import { z } from 'zod';

const ItinerarySchema = z.object({
  prompt: z.string().min(10, { message: "A descrição precisa ter pelo menos 10 caracteres." }),
});

type ItineraryState = {
  itinerary?: string;
  error?: string;
  success?: boolean;
}

export async function generateItineraryAction(
  prevState: ItineraryState,
  formData: FormData
): Promise<ItineraryState> {
  
  const validatedFields = ItinerarySchema.safeParse({
    prompt: formData.get('prompt'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.prompt?.[0] || 'Entrada inválida.',
    };
  }
  
  const { prompt } = validatedFields.data;

  try {
    const result = await generatePersonalizedItinerary(prompt);
    
    if (result.itinerary) {
      // A responsabilidade de salvar no Firestore foi movida para o client-side (ItineraryBuilder)
      return { itinerary: result.itinerary, success: true };
    } else {
      return { error: 'Não foi possível gerar um roteiro com a informação fornecida.' };
    }
  } catch (error) {
    console.error("Error generating itinerary:", error);
    return { error: 'Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.' };
  }
}
