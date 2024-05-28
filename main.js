document.addEventListener("DOMContentLoaded", () => {
    // Função para adicionar animação ao rolar a página
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1
    });

    // Seleciona todas as seções que devem ter animação ao aparecer
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Lógica de envio do formulário com validação
    document.getElementById("contato_formulario").addEventListener("submit", function(event) {
        event.preventDefault(); 

        // Obter os valores dos campos
        var nome = document.getElementById("nome").value.trim();
        var email = document.getElementById("email").value.trim();
        var assunto = document.getElementById("assunto").value.trim();
        var mensagem = document.getElementById("mensagem").value.trim();

        // Validação básica dos campos
        var valid = validateForm(nome, email, assunto, mensagem);

        if (!valid) {
            return;
        }

        // Criar um objeto com os dados do formulário
        var formData = {
            nome: nome,
            email: email,
            assunto: assunto,
            mensagem: mensagem
        };

        var enviadoComSucesso = true; // Simulação de envio bem-sucedido

        if (enviadoComSucesso) {
            // Mensagem de enviado com sucesso
            alert("Obrigado! Seu formulário foi enviado com sucesso.");
        } else {
            // Mensagem de erro ao enviar
            alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.");
        }

        // Armazenar o objeto em um array 
        var formArray = [];
        formArray.push(formData);

        // Exibir os dados no console
        console.log(formArray);

        // Limpar os campos do formulário após o envio 
        document.getElementById("contato_formulario").reset();
    });
});

