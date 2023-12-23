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

// Chame as funções quando o documento estiver pronto
$(document).ready(function() {
    handleLimitedText();
    handleExperienceDetails();
});
