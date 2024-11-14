// Função para exibir a seção correspondente
/*
function showSection(sectionId) {
    // Esconde todas as seções
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Exibe a seção escolhida
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

// Exibir a seção "home" por padrão quando a página carregar
document.addEventListener("DOMContentLoaded", function() {
    showSection('home');
});
*/
  document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os links da navbar
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();

        // Obtém o valor do atributo data-section do link clicado
        const sectionToShow = this.getAttribute("data-section");

        // Oculta todas as seções
        sections.forEach(section => {
          section.classList.remove("active");
        });

        // Exibe a seção correspondente ao link clicado
        document.getElementById(sectionToShow).classList.add("active");

        // Atualiza a aparência do link ativo
        navLinks.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
      });
    });
  });