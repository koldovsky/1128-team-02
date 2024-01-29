document.addEventListener('DOMContentLoaded', function() {
    function toggleContent(category) {
        var content = document.querySelector('.treats-category--' + category + ' .grid__container');
        content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'grid' : 'none';
    }
    var headers = document.querySelectorAll('.category-header');

    headers.forEach(function(header) {
        header.addEventListener('click', function() {
            var category = header.dataset.category;
            toggleContent(category);
        });
    });
});
