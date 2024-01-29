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
        articlesLink.style.fontSize = '50px';
    });

    articlesLink.addEventListener('mouseout', function () {
        articlesLink.style.fontSize = '15px';
    });
});