function toggleContent(category) {
    const allCategories = document.querySelector('.treats__category');
    allCategories.forEach( category => category.style.display = 'none');
    var content = document.querySelector('.treats-category--' + category);
    content.style.display = 'grid';
}
var headers = document.querySelectorAll('.category-header');

headers.forEach(function(header) {
    header.addEventListener('click', function() {
        var category = header.dataset.category;
        toggleContent(category);
    });
});

