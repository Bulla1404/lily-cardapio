// Formulário de newsletter — feedback visual ao cadastrar o e-mail
document.addEventListener('DOMContentLoaded', function () {
  const newsForm = document.querySelector('.news-form');

  if (newsForm) {
    newsForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const button = newsForm.querySelector('button');
      button.textContent = 'Cadastrado ✓';
    });
  }
});