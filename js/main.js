const images = document.querySelectorAll('.open-case__img');
let popup = document.querySelector('.popup');
let popup__link = document.querySelector('.popup-block__link');
const popup_title = document.querySelectorAll('.popup-title');


const LINK = 'https://t.me/+EMVvvHhlb7BlYjQ6';

function startRandomAnimation() {

    if (images.length === 0) {
        console.error("No images found with the class 'image'.");
        return;
    }

    images.forEach(img => img.classList.remove('animated'));

    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    if (randomImage) {
        randomImage.classList.add('animated');
    }

    setTimeout(startRandomAnimation, Math.random() * 2000 + 1000);
}

// startRandomAnimation();



images.forEach(function(el) {
    el.addEventListener('click', () => {
        const imageSelect = parseInt(el.getAttribute('data-popup'));

        if (imageSelect === 1) {
            popup_title[0].innerHTML = 'Поздравляю! Ты выйграл Бойца Мипл:';
            popup.classList.add('df');

        } else if (imageSelect === 2) {
            popup_title[0].innerHTML = 'Поздравляю! Ты выйграл Базз Лайтера:';
            popup.classList.add('df');

        } else if (imageSelect === 3) {
            popup_title[0].innerHTML = 'Поздравляю! Ты выйграл Бойца Олли:';
            popup.classList.add('df');

        }
    });
});



document.querySelector('.popup-close').addEventListener('click', function() {
    popup.classList.remove('df');
});


popup__link.href = LINK;
