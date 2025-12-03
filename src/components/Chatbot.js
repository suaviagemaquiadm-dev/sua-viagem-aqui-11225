
export function ChatbotComponent({ idPrefix, name, avatarUrl, position, placeholderText }) {
    const positionClasses = {
        'bottom-left': {
            toggle: 'bottom-6 left-6',
            widget: 'bottom-24 left-6 origin-bottom-left',
        },
        'bottom-right': {
            toggle: 'bottom-6 right-6',
            widget: 'bottom-24 right-6 origin-bottom-right',
        }
    };
    const pos = positionClasses[position] || positionClasses['bottom-left'];

    return `
        <!-- Botão flutuante para abrir o chat -->
        <button id="${idPrefix}-toggle" class="fixed ${pos.toggle} w-16 h-16 rounded-full shadow-lg flex items-center justify-center z-[9999] transition-transform hover:scale-110" aria-label="Abrir assistente ${name}">
            <img src="${avatarUrl}" alt="Assistente ${name}" class="w-full h-full rounded-full object-cover">
        </button>

        <!-- Janela do Chatbot -->
        <div id="${idPrefix}-widget" class="hidden fixed ${pos.widget} w-full max-w-sm h-[70vh] max-h-[600px] bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700 flex flex-col z-[9998] transition-all duration-300">
            <!-- Cabeçalho -->
            <div class="flex-shrink-0 flex justify-between items-center p-4 border-b border-slate-700">
                <h3 class="text-lg font-bold text-white flex items-center"><img src="${avatarUrl}" class="w-8 h-8 rounded-full mr-3">Assistente ${name}</h3>
                <button id="${idPrefix}-close" class="text-slate-400 hover:text-white" aria-label="Fechar assistente"><i class="fas fa-times text-xl"></i></button>
            </div>

            <!-- Mensagens -->
            <div id="${idPrefix}-messages" class="flex-grow p-4 space-y-4 overflow-y-auto">
                <!-- Mensagens serão inseridas aqui -->
            </div>

            <!-- Sugestões -->
            <div id="${idPrefix}-suggestions" class="flex-shrink-0 p-4 pt-0 flex flex-wrap gap-2">
                <!-- Sugestões de perguntas serão inseridas aqui -->
            </div>

            <!-- Formulário de Input -->
            <div class="flex-shrink-0 p-4 border-t border-slate-700">
                <form id="${idPrefix}-input-form" class="flex items-center gap-2">
                    <input type="text" id="${idPrefix}-input" placeholder="${placeholderText}" class="form-input flex-grow" autocomplete="off" required>
                    <button type="submit" class="bg-amber-500 text-slate-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" aria-label="Enviar mensagem">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>
    `;
}
