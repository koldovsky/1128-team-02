const recommendationsProducts = [
    {
        id: '1',
        title: 'DOGGY Fun Set',
        image: "img/doggy-fun-set.png",
        price: '6,00',
        alt: 'doggy-fun-set'
    },
    {
        id: '2',
        title: 'DUNA Pillow Bed',
        image: 'img/duna-pillow-bed.png',
        price: '10,00',
        alt: 'duna-pillow-bed'
    },   
    {
        id: '3',
        title: 'AGA Retractable Leash',
        image: 'img/aga-retractable-leash.png',
        price: '33,00',
        alt: 'aga-retractable-leash'
    },
    {
        id: '4',
        title: 'DOGGY 2-Bunch Toy',
        image: 'img/doggy-bunch-toy.png',
        price: '5,00',
        alt: 'doggy-bunch-toy'
    }
]

function renderProducts(products) {
    let productsDomString = '';
    for (const product of products) {
        productsDomString += `
        <article class="product-card">
        <a href="item-card-page.html" class="product-card__image-link">
            <img src="${product.image}" alt="${product.alt}" class="product-card__image">
        </a>
        <p class="product-card__name">
            <a href="item-card-page.html" class="product-card__name-link">${product.title}</a>
        </p>
        <p class="product-card__price">$${product.price}</p>
        <button class="product-card__button">Add to Cart</button>
    </article>`;
    }
    document.querySelector('.product-cards').innerHTML = productsDomString; 
}

renderProducts(recommendationsProducts);