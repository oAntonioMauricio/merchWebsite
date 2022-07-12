// Validação formulário dos contactos
document.getElementById("botaoEmail").onclick = function () {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let message = document.getElementById("message").value;

    let regMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regName = /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g;
    let regContact = /^\d{9}$/;

    if (name.match(regName) && name.length >= 1 && email.match(regMail) && contact.match(regContact) && message.length <= 400) {
        alert(`
        O teu nome é ${name}. 
        O teu email é ${email}. 
        O teu telemóvel é ${contact}. 
        A tua mensagem é ${message}.
        
        A tua mensagem foi enviada 😁`);
    } else if (!name.match(regName) || name.length < 1) {
        alert ("Nome Inválido");
        document.getElementById("name").focus();
    } else if (!email.match(regMail)) {
        alert ("Email Inválido");
        document.getElementById("email").focus();
    } else if (!contact.match(regContact)) {
        alert ("Contacto Inválido");
        document.getElementById("contact").focus();
    } else if (!message.length <= 400) {
        alert ("A mensagem não pode ultrapssar os 400 caracteres.");
        document.getElementById("message").focus();
    }
}