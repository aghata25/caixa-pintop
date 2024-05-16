let numPerguntaAtual = 1;
let estrelaSelecionada = false;
let questOneSelected = false;
let questTwoSelected = false;

const ratingValue = document.querySelector('.rating-value');
const buttonsOne = document.querySelectorAll('.button-one');
const buttonsTwo = document.querySelectorAll('.button-two');
const stars = document.querySelectorAll('.star');

document.addEventListener("DOMContentLoaded", function() {

    buttonsOne.forEach(button => {
        button.addEventListener('click', () => {
            buttonsOne.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    buttonsTwo.forEach(button => {
        button.addEventListener('click', () => {
            buttonsTwo.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    stars.forEach(function(star) {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            ratingValue.value = rating;
            highlightStars(rating);
            estrelaSelecionada = true;
        });

        star.addEventListener('mouseover', function() {
            const rating = this.getAttribute('data-rating');
            highlightStars(rating);
        });

        star.addEventListener('mouseout', function() {
            const rating = ratingValue.value;
            highlightStars(rating);
        });
    });

    function highlightStars(rating) {
        stars.forEach(function(star) {
            if (parseInt(star.getAttribute('data-rating')) <= parseInt(rating)) {
                star.style.color = 'orange';
            } else {
                star.style.color = '#ccc';
            }
        });
    }
});

const avancarPergunta = (numPergunta) => {
    if (!estrelaSelecionada) {
        alert("Por favor, selecione uma estrela antes de avançar.");
        return;
    }
    if(!questOneSelected || !questTwoSelected) {
        alert("Por favor selecione as duas perguntas antes de avançar.")
        return;
    }

    ratingValue.value = 0;
    stars.forEach(function(star) {
        star.style.color = '#ccc';
    });
    estrelaSelecionada = false;
    questOneSelected = false;
    questTwoSelected = false;
    if(numPerguntaAtual >= 6) {
        estrelaSelecionada = true;
        questOneSelected = true;
        questTwoSelected = true;
    }
    document.getElementById('pergunta' + numPerguntaAtual).style.display = 'none';
    console.log(numPerguntaAtual)
    numPerguntaAtual = numPergunta + 1;
    if(numPerguntaAtual === 8) {
        document.getElementById('main').style.display = 'none';
    }
    document.getElementById('pergunta' + numPerguntaAtual).style.display = '';
};

const buttonOne = () => {
    questOneSelected = true;
};

const buttonTwo = () => {
    questTwoSelected = true;
};

