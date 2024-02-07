const products = [
    {
        id: '1',
        title: 'Natural Beef-2$',
        image: 'img/dog-beef.webp',
        description: 'Meat And Bone Meal, Corn Gluten Meal, Animal Fat, Soybean Meal, Natural Flavor',
        category: 'dogs',

    },
    {
        id: '2',
        title: 'Natural chicken-3$',
        image: 'img/dog-chicken.webp',
        description: 'Deboned Chicken, Chicken Meal, Brown Rice, Corn, Corn Gluten Meal, Natural Flavor.',
        category: 'dogs',

    },
    {
        id: '3',
        title: 'Natural Pork-2$',
        image: 'img/dog-pork.webp',
        description: 'Deboned Lamb, Chicken Meal, Split Peas, Lentils, Chicken Fat, Pork Meal, Dried Chicken, Pea.',
        category: 'dogs',

    },
    {
        id: '4',
        title: 'Turkey Pate-1$',
        image: 'img/cats-turkey.webp',
        description: 'Deboned Turkey, Turkey Broth, Turkey Liver, Dried Egg Product, Cranberries, Calcium Carbonate.',
        category: 'cats',

    },
    {
        id: '5',
        title: 'Tuna & Salmon-2$',
        image: 'img/cats-tuna-salmon.webp',
        description: 'Chicken, Poultry Broth, Liver, Meat By-Products, Salmon, Tuna, Guar Gum, Minerals.',
        category: 'cats',

    },
    {
        id: '6',
        title: 'Chicken Slice-1$',
        image: 'img/cats-chicken-slice.webp',
        description: 'Wheat Gluten, Liver, Chicken, Meat By-Products, Tomatoes, Carrots, Shrimp, Soy Flour, Salt.',
        category: 'cats',

    },
    {
        id: '7',
        title: 'Grain & Nuts-3$',
        image: 'img/other-grain.webp',
        description: 'Whole Brown Rice, Oat Groats, Wheat Bran, Wheat, Soybean Meal, Soybean Hulls.',
        category: 'other',

    },
    {
        id: '8',
        title: 'Fish Food-5$',
        image: 'img/other-fish.webp',
        description: 'Dried Yeast, Ground Brown Rice, Shrimp Meal, Dried Fish Protein Digest, Wheat Gluten.',
        category: 'other',

    },
    {
        id: '9',
        title: 'Parrots Food-7$',
        image: 'img/other-parrots.webp',
        description: 'Canary Grass Seed, White Millet, Oat Groats, Ground Corn, Red Millet, Flax Seed.',
        category: 'other',

    },
];

function renderProducts(products, container, category) {
    let productsDomString = '';
    const filteredProducts = products.filter(product =>
        product.category === category);
    for (const product of filteredProducts) {
        const [title, price] = product.title.split('-');
        productsDomString += `
        <div class="product">
        <img class="treats__photo" src="${product.image}" alt="${product.description}" width="60">
            <div class="product-details">
                <p class="treats__names">${title}<span class="price">${price}</span></p>
                <p class="treats__description">${product.description}</p>
            </div>
        </div>
        `;
    }
    container.innerHTML = productsDomString;
}

renderProducts(products, document.querySelector('.cats__products'), 'cats');
renderProducts(products, document.querySelector('.dogs__products'), 'dogs');
renderProducts(products, document.querySelector('.other__products'), 'other');
