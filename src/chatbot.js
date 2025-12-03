
export function initializeChatbot(idPrefix) {
    const toggleButton = document.getElementById(`${idPrefix}-toggle`);
    const widget = document.getElementById(`${idPrefix}-widget`);
    const closeButton = document.getElementById(`${idPrefix}-close`);
    const messagesContainer = document.getElementById(`${idPrefix}-messages`);
    const inputForm = document.getElementById(`${idPrefix}-input-form`);
    const inputField = document.getElementById(`${idPrefix}-input`);
    const suggestionsContainer = document.getElementById(`${idPrefix}-suggestions`);

    const WELCOME_MESSAGE = idPrefix === 'lua' 
        ? "Olá! Eu sou a Luá, sua assistente de viagens. Como posso te ajudar a planejar sua próxima aventura?"
        : "Olá! Eu sou o Victor, especialista em parcerias. Como posso ajudar a impulsionar o seu negócio em nossa plataforma?";

    const SUGGESTIONS = idPrefix === 'lua'
        ? [
            'Quais os destinos mais procurados?',
            'Quero uma viagem para a praia',
            'Ideias de roteiro para a família',
            'Quanto custa viajar para o Jalapão?'
        ]
        : [
            'Como anunciar meu negócio?',
            'Quais são os planos e preços?',
            'Vantagens do plano Premium',
            'Como falar com um consultor?'
        ];

    // Função para adicionar uma mensagem ao chat
    function addMessage(sender, text, isHTML = false) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', `chat-message-${sender}`);
        
        if (isHTML) {
            messageElement.innerHTML = text;
        } else {
            messageElement.textContent = text;
        }
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Função para exibir sugestões
    function showSuggestions() {
        suggestionsContainer.innerHTML = '';
        SUGGESTIONS.forEach(suggestion => {
            const button = document.createElement('button');
            button.className = 'chat-suggestion-btn';
            button.textContent = suggestion;
            button.onclick = () => {
                inputField.value = suggestion;
                inputForm.dispatchEvent(new Event('submit'));
            };
            suggestionsContainer.appendChild(button);
        });
    }

    // Abrir e fechar o widget
    toggleButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpening = widget.classList.contains('hidden');
        
        document.querySelectorAll('[id$="-widget"]').forEach(w => {
            if (w.id !== widget.id) {
                w.classList.add('hidden', 'scale-95', 'opacity-0');
                w.classList.remove('scale-100', 'opacity-100');
            }
        });

        widget.classList.toggle('hidden');
        
        setTimeout(() => {
            if (isOpening) {
                widget.classList.remove('scale-95', 'opacity-0');
                widget.classList.add('scale-100', 'opacity-100');
                inputField.focus();
                 if (messagesContainer.children.length === 0) {
                    addMessage('bot', WELCOME_MESSAGE);
                    showSuggestions();
                }
            } else {
                 widget.classList.remove('scale-100', 'opacity-100');
                 widget.classList.add('scale-95', 'opacity-0');
            }
        }, 10);
    });

    closeButton.addEventListener('click', () => {
         widget.classList.remove('scale-100', 'opacity-100');
         widget.classList.add('scale-95', 'opacity-0');
         setTimeout(() => widget.classList.add('hidden'), 300);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !widget.classList.contains('hidden')) {
            closeButton.click();
        }
    });

    document.addEventListener('click', (e) => {
        if (!widget.contains(e.target) && !toggleButton.contains(e.target) && !widget.classList.contains('hidden')) {
            closeButton.click();
        }
    });

    // Lidar com o envio de mensagens
    inputForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = inputField.value.trim();
        if (!message) return;

        addMessage('user', message);
        inputField.value = '';
        suggestionsContainer.innerHTML = '';

        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('chat-message', 'chat-message-bot', 'typing-indicator');
        typingIndicator.innerHTML = '<span></span><span></span><span></span>';
        messagesContainer.appendChild(typingIndicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // SIMULAÇÃO DE RESPOSTA - A lógica real do backend será chamada aqui
        setTimeout(() => {
            messagesContainer.removeChild(typingIndicator);
            addMessage('bot', `Resposta para: "${message}"`); 
        }, 1000);
    });
}
