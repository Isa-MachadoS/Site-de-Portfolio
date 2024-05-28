function validateForm(nome, email, assunto, mensagem) {
    var valid = true;

    if (nome === '') {
        document.getElementById("erro_nome").textContent = 'O nome é obrigatório';
        valid = false;
    } else {
        document.getElementById("erro_nome").textContent = '';
    }

    if (email === '') {
        document.getElementById("erro_email").textContent = 'O email é obrigatório';
        valid = false;
    } else if (!validateEmail(email)) {
        document.getElementById("erro_email").textContent = 'Formato de email inválido';
        valid = false;
    } else {
        document.getElementById("erro_email").textContent = '';
    }

    if (assunto === '') {
        document.getElementById("erro_assunto").textContent = 'O assunto é obrigatório';
        valid = false;
    } else {
        document.getElementById("erro_assunto").textContent = '';
    }

    if (mensagem === '') {
        document.getElementById("erro_mensagem").textContent = 'A mensagem é obrigatória';
        valid = false;
    } else {
        document.getElementById("erro_mensagem").textContent = '';
    }

    return valid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

