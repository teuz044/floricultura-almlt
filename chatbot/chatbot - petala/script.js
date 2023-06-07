document.addEventListener("DOMContentLoaded", function() {
  const chatIcon = document.getElementById("chat-icon");
  const chatContainer = document.getElementById("chat-container");
  const closeButton = document.getElementById("close-button");

  function showMessage(message, sender) {
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message", sender);
    messageContainer.innerHTML = `<p>${message}</p>`;
    const chatBody = document.getElementById("chat-body");
    chatBody.appendChild(messageContainer);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function processQuestion(question) {
    let answer;

    switch (question) {
      case "Verificar disponibilidade de produtos.":
        answer = "Temos uma grande variedade de flores tropicais disponíveis. Confira nosso catálogo online para ver todas as opções disponíeis!";
        break;
      case "Informações sobre entrega e envio.":
        answer = "Oferecemos entrega gratuita para pedidos acima de R$100,00, enviamos para todo o Brasil e para o exterior.";
        break;
      case "Tirar dúvidas sobre cuidados com as flores.":
        answer = "Existem algumas coisas que você deve se atentar para manter suas flores saudáveis: a iluminação, a rega, a umidade, temperatura, podas, limpeza das folhas, proteção contra pragas, entre outras.";
        break;
      case "Verificar promoções e descontos especiais.":
        answer = "Confira nossas promoções e decontos no site";
        break;
      default:
        answer = "Desculpe, não entendi sua pergunta. Por favor, selecione uma das opções disponíveis.";
        break;
    }

    showMessage(question, "sent");
    setTimeout(function() {
      showMessage(answer, "received");
    }, 500);
  }

  function createQuestionButtons() {
    const questionButtons = document.querySelectorAll(".question-buttons-container");
  
    questionButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const question = button.textContent;
        processQuestion(question);
      });
    });
  }

  function openChatbot() {
    chatContainer.style.display = "block";
    createQuestionButtons();
  }

  function closeChatbot() {
    chatContainer.style.display = "none";
  }

  chatIcon.addEventListener("click", openChatbot);
  closeButton.addEventListener("click", closeChatbot);
});