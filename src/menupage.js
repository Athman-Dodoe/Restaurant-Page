import spaghetti from './images/spaghetti.png';

export function loadMenuPage () {
    const menuPage = document.createElement('div');
    menuPage.className = 'menu-page';

    const heading = document.createElement('h1');
    heading.textContent = 'our Menu';
    menuPage.appendChild(heading);

    const description = document.createElement('p');
    description.textContent = 'Explore our delicious range of authentic Italian dishes, crafted with love and the finest ingredients.';
    menuPage.appendChild(description);

    const menuItemsContainer = document.createElement('div');
    menuItemsContainer.className = 'menu-items';
    menuPage.appendChild(menuItemsContainer);

    const menuItems = [
        {
            imgSrc: spaghetti,
            title: 'Spaghetti Aglio e Olio', 
            description: 'Aglio e olio is a deliciously simple Italian dish of fresh garlic, olive oil, and Parmesan cheese tossed with freshly cooked spaghetti pasta.',
            price: '$12'
        },
        {
            imgSrc: spaghetti,
            title: 'Spaghetti Aglio e Olio', 
            description: 'Aglio e olio is a deliciously simple Italian dish of fresh garlic, olive oil, and Parmesan cheese tossed with freshly cooked spaghetti pasta.',
            price: '$12'
        },
        {
            imgSrc: spaghetti,
            title: 'Spaghetti Aglio e Olio', 
            description: 'Aglio e olio is a deliciously simple Italian dish of fresh garlic, olive oil, and Parmesan cheese tossed with freshly cooked spaghetti pasta.',
            price: '$12'
        },

        {
            imgSrc: spaghetti,
            title: 'Spaghetti Aglio e Olio', 
            description: 'Aglio e olio is a deliciously simple Italian dish of fresh garlic, olive oil, and Parmesan cheese tossed with freshly cooked spaghetti pasta.',
            price: '$12'
        },

        {
            imgSrc: spaghetti,
            title: 'Spaghetti Aglio e Olio', 
            description: 'Aglio e olio is a deliciously simple Italian dish of fresh garlic, olive oil, and Parmesan cheese tossed with freshly cooked spaghetti pasta.',
            price: '$12'
        },
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';


        const img = document.createElement('img');
        img.src = item.imgSrc;
        img.alt = item.title;

        const title = document.createElement('h2');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = item.price;


        menuItem.appendChild(img);
        menuItem.appendChild(title);
        menuItem.appendChild(description);
        menuItem.appendChild(price);

        menuItemsContainer.appendChild(menuItem);
    })

    const content = document.getElementById('content');
    content.appendChild(menuPage);

}