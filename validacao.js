document.getElementById('contato_formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para realizar a validação
    let isValid = true;

    // Limpa mensagens de erro anteriores
    document.getElementById('erro_nome').textContent = '';
    document.getElementById('erro_email').textContent = '';
    document.getElementById('erro_assunto').textContent = '';
    document.getElementById('erro_mensagem').textContent = '';

    // Validação do campo Nome
    const nome = document.getElementById('nome').value;
    if (nome.trim() === '') {
        document.getElementById('erro_nome').textContent = 'Por favor, preencha seu nome.';
        isValid = false;
    }

    // Validação do campo Email
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
        document.getElementById('erro_email').textContent = 'Por favor, preencha seu email.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('erro_email').textContent = 'Por favor, insira um email válido.';
        isValid = false;
    }

    // Validação do campo Assunto
    const assunto = document.getElementById('assunto').value;
    if (assunto.trim() === '') {
        document.getElementById('erro_assunto').textContent = 'Por favor, preencha o assunto.';
        isValid = false;
    }

    // Validação do campo Mensagem
    const mensagem = document.getElementById('mensagem').value;
    if (mensagem.trim() === '') {
        document.getElementById('erro_mensagem').textContent = 'Por favor, escreva sua mensagem.';
        isValid = false;
    }

    if (isValid) {
        // Se todos os campos são válidos, pode enviar o formulário 
        this.submit();
    }
});
