const enviarEmail = (addressee, subject, body) => {
  if (!addressee) {
    return {
      status: "Error",
      message: "Um destinatário precisa ser fornecido ao enviar um e-mail.",
    };
  }

  if (!subject) {
    return {
      status: "Error",
      message:
        "O campo de assunto não deveria estar vazio ao enviar um e-mail.",
    };
  }

  if (!body) {
    return {
      status: "Error",
      message: "O corpo da mensagem precisa ser fornecido ao enviar um e-mail.",
    };
  }

  console.log(
    `
        De: news@carstore.com
        Para: ${addressee}
        Assunto: ${subject}
        
        ${body}
        
        CarStore - Aqui você encontra o seu carro novo
      `
  );

  return { status: "Sucess", message: "E-mail enviado com sucesso!" };
};

let emails = [];

// função para verificar o dia da semana
function verifyDay() {
  let now = new Date();
  let weekDay = now.getDay();
  let days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  return days[weekDay];
}

// função para enviar o form
function formSubmit(event) {
  event.preventDefault();
  event.stopPropagation();
  const email = document.getElementById('email').value;
  const marketing = document.querySelector('input[name="marketing"]:checked').value;

  if (email === '') {
    alert('Por favor, preencha todos os campos.');
    return false;
  } else {
    emails.push({email: email, marketing: marketing});
  }
};

// função para criar o e-mail
function createEmail(reveiver) {
  return `Olá ${reveiver}! Gostaríamos de informá-lo sobre as atualizações desta semana.`;
}

// função para enviar os e-mails
function sendEmails() {
  if(verifyDay() === 'Segunda-feira') {
    emails.forEach((email) => {
      if(email.marketing === 'yes') {
        const emailBody = createEmail(email.email);
        const result = enviarEmail(email.email, 'Marketing', emailBody);
        if(result.status === 'Error') {
          console.log(result.message);
        }
      }
    })
  }
};
