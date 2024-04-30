const hamburger = document.querySelector(".hamburguer_icones");
const nav = document.querySelector(".menu_hamburguer");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

document.getElementById("contato_formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Obter os valores dos campos
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    // Criar um objeto com os dados do formulário
    var formData = {
        nome: nome,
        email: email,
        assunto: assunto,
        mensagem: mensagem
    };

    var enviadoComSucesso = true; 

    if (enviadoComSucesso) {
        // Mensagem de enviado com sucesso
        alert("Obrigado! Seu formulário foi enviado com sucesso.");
    } else {
        // Mensagem de erro ao enviar
        alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.");
    };

    // Armazenar o objeto em um array 
    var formArray = [];
    formArray.push(formData);

    // Exibir os dados no console
    console.log(formArray);

    // Limpar os campos do formulário após o envio 
    document.getElementById("contato_formulario").reset();
});
