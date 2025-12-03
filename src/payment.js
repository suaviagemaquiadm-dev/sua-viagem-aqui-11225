
import { getFunctions, httpsCallable } from "firebase/functions";
import { showAlert } from "./ui/alert";
import firebaseConfig from "./firebase-config";
import { initializeApp } from "firebase/app";

// Inicializa o app do Firebase para poder obter o restante da configuração
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app, "southamerica-east1");

// Globais para armazenar a chave e o objeto do MP
let mpPublicKey = null;
let mercadoPago = null;

/**
 * Busca a chave pública do Mercado Pago no backend e a armazena.
 */
async function initializeMercadoPago() {
  if (mpPublicKey) return; // Já inicializado

  try {
    const getFrontendConfig = httpsCallable(functions, 'getFrontendConfig');
    const result = await getFrontendConfig();
    mpPublicKey = result.data.mercadoPagoPublicKey;

    if (mpPublicKey) {
      mercadoPago = new MercadoPago(mpPublicKey, {
        locale: 'pt-BR',
      });
    } else {
      throw new Error("A chave pública do Mercado Pago não foi recebida do servidor.");
    }
  } catch (error) {
    console.error("Erro ao inicializar o Mercado Pago:", error);
    showAlert("Não foi possível carregar o sistema de pagamento. Tente novamente mais tarde.", "error");
  }
}

/**
 * Cria a preferência de pagamento e redireciona para o checkout do Mercado Pago.
 * @param {string} title - Título do item (ex: "Assinatura Viajante Plus")
 * @param {number} price - Preço do item
 * @param {string} userId - ID do usuário logado
 * @param {string} email - Email do usuário
 * @param {string} transactionType - Tipo de transação (ex: "USER_SUBSCRIPTION")
 */
export async function createCheckout(title, price, userId, email, transactionType) {
  await initializeMercadoPago(); // Garante que o MP esteja inicializado

  if (!mercadoPago) {
    showAlert("O sistema de pagamento não está disponível. Tente mais tarde.", "error");
    return;
  }

  const createMercadoPagoPreference = httpsCallable(functions, 'createMercadoPagoPreference');
  
  try {
    const result = await createMercadoPagoPreference({
      title,
      price,
      userId,
      email,
      transactionType
    });
    
    const preferenceId = result.data.preferenceId;
    if (preferenceId) {
      // Redireciona para o checkout do Mercado Pago
      mercadoPago.checkout({
        preference: {
          id: preferenceId,
        },
        autoOpen: true,
      });
    } else {
      throw new Error("ID de preferência não recebido.");
    }
  } catch (error) {
    console.error("Erro ao criar a preferência de pagamento:", error);
    showAlert("Ocorreu um erro ao iniciar o pagamento. Por favor, tente novamente.", "error");
  }
}
