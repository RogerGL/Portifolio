// Função para lidar com os detalhes de cada experiência
function handleExperienceDetails() {
    $('.show-details-btn').on('click', function() {
        var experienceDetailsFull = $(this).closest('.card-body').find('.limited-text').data('full-text');
        $('#modalDetails .experience-details').html(experienceDetailsFull); // Exibir os detalhes da experiência no modal
    });
}

// Altere a função handleLimitedText para armazenar o texto completo em um atributo de dados
function handleLimitedText() {
    var maxLength = 300; // Defina o comprimento máximo desejado para o texto

    $('.limited-text').each(function() {
        var text = $(this).text().trim(); // Obter o texto e remover espaços em branco
        var sanitizedText = text.replace(/(<([^>]+)>)/gi, ''); // Remover tags HTML para contar apenas os caracteres visíveis

        $(this).data('full-text', sanitizedText); // Armazenar o texto completo como um atributo de dados

        if (sanitizedText.length > maxLength) {
            var limitedText = sanitizedText.substr(0, maxLength);
            $(this).html(limitedText.trim() + '...'); // Exibir texto limitado com "..."
            $(this).parent().find('.show-more-btn').removeClass('d-none'); // Exibir botão "Ver detalhes"
        }
    });
}
function changeIcon(theme) {
    const icon = document.getElementById('darkModeIcon');
    if (icon) {
    if (theme === 'dark') {
        // Mude para o ícone da lua
        icon.classList.remove('bi-sun');
        icon.classList.add('bi-moon');
        icon.setAttribute('aria-label', 'Dark Mode');
        
       
    } else {
        // Mude para o ícone do sol
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-sun');
        icon.setAttribute('aria-label', 'Light Mode');
        
        icon.style.fontWeight = 'bold';
    }
}
    // Atualize o background da barra de navegação com base no tema
    const navbar = document.querySelector('.navbar');
    if(navbar) {
    if (theme === 'dark') {
        navbar.classList.remove('bg-dark');
        navbar.classList.add('bg-white');
    } else {
        navbar.classList.remove('bg-white');
        navbar.classList.add('bg-dark');
    }
}   
    // Altere os estilos da seção
    const section = document.querySelector('section');
    if(section) {
    if (theme === 'dark') {
        section.classList.remove('bg-darkmode');
        section.classList.add('bg-light');
    } else {
        section.classList.remove('bg-light');
        section.classList.add('bg-darkmode');
    }
}
    // Altere os estilos do rodapé
    const footer = document.querySelector('footer');
    if(footer){
    if (theme === 'dark') {
        footer.classList.remove('bg-dark');
        footer.classList.add('bg-white');
    } else {
        footer.classList.remove('bg-white');
        footer.classList.add('bg-dark');
    }
}
    const header = document.querySelector('header');
    if(header){
    if (theme === 'dark') {
        header.classList.remove('bg-dark');
        header.classList.add('bg-white');
    } else {
        header.classList.remove('bg-white');
        header.classList.add('bg-dark');
    }
}
    const navlinks = document.querySelectorAll('.nav-link');
    if(navlinks){
    navlinks.forEach(navlink => {
    if (theme === 'dark') {
        navlink.classList.remove('bg-dark');
        navlink.classList.add('bg-white');
    } else {
        navlink.classList.remove('bg-white');
        navlink.classList.add('bg-dark');
    }
    });
    }
    const textMutedInd = document.getElementById('text-muted-index');
    if(textMutedInd){
    if (theme === 'dark') {
        textMutedInd.style.color = '#6c757d';
    } else {
        textMutedInd.style.color = '#b0b7bf';
        
    }
}
    const textMutedIndexFoo = document.getElementById('text-muted-section-foo');
    if(textMutedIndexFoo){
    if (theme === 'dark') {
        textMutedIndexFoo.style.color = '#6c757d';
    } else {
        textMutedIndexFoo.style.color = '#e6e8eb';
        textMutedIndexFoo.style.fontWeight = 'bold';
    }
    }
    const textMutedIndexFooNm = document.getElementById('text-muted-section-nam');
    if(textMutedIndexFooNm){
    if (theme === 'dark') {
        textMutedIndexFooNm.style.color = '#161617';
    } else {
        textMutedIndexFooNm.style.color = '#fcfdff';
        textMutedIndexFooNm.style.fontWeight = 'bold';
    }
}
    const btnProjectsIndex = document.getElementById('btn-projects-index');
    if(btnProjectsIndex){
    if (theme === 'dark') {
        btnProjectsIndex.classList.remove('btn-outline-light');
        btnProjectsIndex.classList.add('btn-outline-dark');
    } else {
        btnProjectsIndex.classList.remove('btn-outline-dark');
        btnProjectsIndex.classList.add('btn-outline-light');
    }
}
    const navLinksText = document.querySelectorAll('.nav-sec-item-text');
    if (navLinksText) {
        navLinksText.forEach(navLinkText => {
            if (theme === 'dark') {
                navLinkText.style.color = '#6c757d';
            } else {
                navLinkText.style.color = '#fcfdff';
            }
        });
    }
    const copyright = document.getElementById('copyright');
    if(copyright){
    if (theme === 'dark') {
        copyright.style.color = '#000000';
    } else {
        copyright.style.color = '#fcfdff';
        copyright.style.fontWeight = 'bold';
    }
}
    const containerResume = document.querySelector('.container-resume');
    if(containerResume){
        if (theme === 'dark') {
            containerResume.classList.remove('bg-darkmode');
            containerResume.classList.add('bg-light');
        } else {
            containerResume.classList.remove('bg-light');
            containerResume.classList.add('bg-darkmode');
        }
    }
   
    

      
    const textResumeInfo = document.querySelectorAll('.text-resume-info');
        if(textResumeInfo){
            textResumeInfo.forEach(textResumeInfo => {
            if (theme === 'dark') {
                textResumeInfo.style.color = '#6c757d ';
            } else {
                textResumeInfo.style.color = '#e6e8eb';
            }
        });
    }

    const textTechAbilits = document.querySelectorAll('.text-tech');
        if(textTechAbilits){
            textTechAbilits.forEach(textTechAbilits => {
            if (theme === 'dark') {
                textTechAbilits.style.color = '#202121 ';
            } else {
                textTechAbilits.style.color = '#e6e8eb';
            }
        });
    }
    const limitedText = document.querySelectorAll('.limited-text');
        if(limitedText){
            limitedText.forEach(limitedText => {
            if (theme === 'dark') {
                limitedText.style.color = '#202121 ';
            } else {
                limitedText.style.color = '#fcfdff';
            }
        });
    }
    const cardEducationTech = document.querySelectorAll('.bg-white-shadow');
        if(cardEducationTech){
            cardEducationTech.forEach(cardEducationTech => {
            if (theme === 'dark') {
                cardEducationTech.classList.remove('bg-dark');
                cardEducationTech.classList.add('bg-white');
            } else {
                cardEducationTech.classList.remove('bg-white');
                cardEducationTech.classList.add('bg-dark');
            }
        });
    }

    const resumeBg = document.querySelectorAll('.resume-text');
    if(resumeBg){
        resumeBg.forEach(resumeBg => {
        if (theme === 'dark') {
            resumeBg.classList.remove('bg-darkmode');
            resumeBg.classList.add('bg-light');
        } else {
            resumeBg.classList.remove('bg-light');
            resumeBg.classList.add('bg-darkmode');
        }
        });
    }
    const textResume = document.querySelectorAll('.text-resume');
    if(textResume){
        textResume.forEach(textResume => {
        if (theme === 'dark') {
            textResume.style.color = '#000000';
        } else {
            textResume.style.color = '#fcfdff';
            textResume.style.fontWeight = 'bold';
        }
    });
}
    if (theme === 'dark') {
        document.getElementById('darkModeIcon').setAttribute('aria-label', 'Light Mode');
        icon.style.color = '#6c757d';
           
    }
    else {
        document.getElementById('darkModeIcon').setAttribute('aria-label', 'Dark Mode');
        icon.style.color = '#ffffff';
        
    }
    const navbarToggle = document.querySelectorAll('.navbar-toggler');
    if(navbarToggle){
        navbarToggle.forEach(navbarToggle => {
        if (theme === 'dark') {
            navbarToggle.classList.remove('bg-darkmode');
            navbarToggle.classList.add('bg-light');
        } else {
            navbarToggle.classList.remove('bg-light');
            navbarToggle.classList.add('bg-darkmode');
        }
        });
    }
    const projects = document.querySelectorAll('.bg-light-shadow-project');
    if(projects){
        projects.forEach(projects => {
            if (theme === 'dark') {
                projects.classList.remove('bg-darkmode');
                projects.classList.add('bg-light');
            } else {
                projects.classList.remove('bg-light');
                projects.classList.add('bg-darkmode');
            }
        });
    }
    
}

function setLightMode() {
    document.documentElement.removeAttribute('data-bs-theme');
    changeIcon('light');
    localStorage.setItem('theme', 'light');
}

function setDarkMode() {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    changeIcon('dark');
    localStorage.setItem('theme', 'dark');
}

function darkMode() {
    const icon = document.getElementById('darkModeIcon');

    icon.addEventListener('click', function () {
        this.classList.toggle('bi-moon');
        this.classList.toggle('bi-sun');
        const theme = document.documentElement.getAttribute('data-bs-theme');

        if (theme === 'dark') {
            setLightMode();
        } else {
            setDarkMode();
        }
    });

    // Verifique se o usuário prefere o tema escuro e atualize os estilos
    const storedTheme = localStorage.getItem('theme'); // Obtenha a preferência do usuário do localStorage
    if (storedTheme) {
        if (storedTheme === 'dark') {
            setDarkMode();
            
        } else {
            setLightMode();
        }
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode();
    } else {
        setLightMode();
    }
}

// Chame as funções quando o documento estiver pronto
$(document).ready(function() {
    handleLimitedText();
    handleExperienceDetails();
    darkMode();
});
