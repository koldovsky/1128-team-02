const articlesTitles = document.querySelectorAll('.articles__title');
const articlesLinks = document.querySelectorAll('.articles__link');

articlesTitles.forEach(function (articlesTitle) {
    articlesTitle.addEventListener('mouseover', function () {
        articlesTitle.innerText = 'First Project';
    });

    articlesTitle.addEventListener('mouseout', function () {
        articlesTitle.innerText = 'Our News & Articles';
    });
});

articlesLinks.forEach(function (articlesLink) {
    articlesLink.addEventListener('mouseover', function () {
        articlesLink.style.fontSize = '30px';
    });

    articlesLink.addEventListener('mouseout', function () {
        articlesLink.style.fontSize = '15px';
    });

    articlesLink.addEventListener('click', function (event) {
        event.preventDefault();
        const linkHref = articlesLink.getAttribute('href');
        window.open(linkHref, '_blank');
    });
});

const articlesImages = document.querySelectorAll('.articles__image');

articlesImages.forEach(function (articlesImage) {
    articlesImage.addEventListener('mouseover', function () {
        articlesImage.style.transform = 'scale(1.05)'; // Збільшення на 5%
    });

    articlesImage.addEventListener('mouseout', function () {
        articlesImage.style.transform = 'scale(1)'; 
    });
});
