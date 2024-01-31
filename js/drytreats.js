const products = [
    {
        id: '1',
        title: 'Natural Beef-2$',
        image: 'img/dog-beef.webp',
        description: 'Meat And Bone Meal, Corn Gluten Meal, Animal Fat, Soybean Meal, Natural Flavor',

    },
    {
        id: '2',
        title: 'Natural chicken-3$',
        image: 'img/dog-chicken.webp',
        description: 'Deboned Chicken, Chicken Meal, Brown Rice, Corn, Corn Gluten Meal, Natural Flavor.',

    },
    {
        id: '3',
        title: 'Natural Pork-2$',
        image: 'img/dog-pork.webp',
        description: 'Deboned Lamb, Chicken Meal, Split Peas, Lentils, Chicken Fat, Pork Meal, Dried Chicken, Pea.',

    },
    {
        id: '4',
        title: 'Turkey Pate-1$',
        image: 'img/cats-turkey.webp',
        description: 'Deboned Turkey, Turkey Broth, Turkey Liver, Dried Egg Product, Cranberries, Calcium Carbonate.',

    },
    {
        id: '5',
        title: 'Tuna & Salmonk-2$',
        image: 'img/cats-tuna-salmon.webp',
        description: 'Chicken, Poultry Broth, Liver, Meat By-Products, Salmon, Tuna, Guar Gum, Minerals.',

    },
    {
        id: '6',
        title: 'Chicken Slice-1$',
        image: 'img/cats-chicken-slice.webp',
        description: 'Wheat Gluten, Liver, Chicken, Meat By-Products, Tomatoes, Carrots, Shrimp, Soy Flour, Salt.',

    },
    {
        id: '7',
        title: 'Grain & Nuts-3$',
        image: 'img/other-grain.webp',
        description: '>Whole Brown Rice, Oat Groats, Wheat Bran, Wheat, Soybean Meal, Soybean Hulls.',

    },
    {
        id: '8',
        title: 'Fish Food-5$',
        image: 'img/other-fish.webp',
        description: 'Dried Yeast, Ground Brown Rice, Shrimp Meal, Dried Fish Protein Digest, Wheat Gluten.',

    },
    {
        id: '9',
        title: 'Parrots Food-7$',
        image: 'img/other-parrots.webp',
        description: 'Canary Grass Seed, White Millet, Oat Groats, Ground Corn, Red Millet, Flax Seed.',

    },
];

function renderProducts(products){
    let productsDomString = '';
    for (const product of products){
        productsDomString += `
        <img class="treats__photo" src="${product.image}" alt="${product.description}" width="60">
        <p class="treats__names">${product.title}</p>
        <p class="treats__description">${product.description}</p>

        `;
    }
    document.querySelector('.grid__container').innerHTML = productsDomString;
}

renderProducts(products);





/*function toggleContent(category) {
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
*/
