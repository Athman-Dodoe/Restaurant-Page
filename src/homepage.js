import SpaghettiCarbonara from './images/spaghetti.png';
import chicken from './images/chicken.png';
import tiramisu from './images/tiramisu.jpg';
import person1 from './images/person1.png';
import person2 from './images/person2.jpg';
import person3 from './images/person3.png';
 
export function loadHomePage() {
    const content = document.querySelector('#content');

    const homePage = document.createElement('div');
    homePage.className = 'home-page';

    const welcomeSection = document.createElement('div');
    welcomeSection.className = 'welcome-section';
   
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant';
    const welcomeParagraph = document.createElement('p');
    welcomeParagraph.textContent = 'Experience the finest dining with a blend of exquisite flavors and a warm ambiance. Our restaurant is dedicated to providing you with an unforgettable culinary journey.';

    welcomeSection.appendChild(headline);
    welcomeSection.appendChild(welcomeParagraph);
    homePage.appendChild(welcomeSection);

    const featuredDishesSection = document.createElement('div');
    featuredDishesSection.className = 'featured-dishes-section';

    const featuredHeadline = document.createElement('h2');
    featuredHeadline.textContent = 'Featured Dishes';
    featuredDishesSection.appendChild(featuredHeadline);

    const featuredDishes = document.createElement('div');
    featuredDishes.className = 'featured-dishes';
    featuredDishesSection.appendChild(featuredDishes);

    const dishes = [
        { 
            name: 'Spaghetti Carbonara', 
            description: 'Creamy pasta with pancetta and Parmesan.', 
            imgSrc: SpaghettiCarbonara 
        },
        { 
            name: 'Crockpot Italian Chicken', 
            description: 'Crockpot Italian Chicken Pasta is shredded chicken and pasta tossed together in a creamy tomato sauce. Set it, forget it and enjoy!', 
            imgSrc: chicken
        },
        { 
            name: 'Tiramisu', 
            description: 'Tiramisu is a no-bake Italian dessert combining espresso-dipped ladyfingers and a creamy, lightly sweetened mascarpone cream.', 
            imgSrc: tiramisu 
        },
    ];

    dishes.forEach(dish => {
        const dishDiv = document.createElement('div');
        dishDiv.className = 'featured-dish';

        const dishImg = document.createElement('img');
        dishImg.src = dish.imgSrc;
        dishImg.alt = dish.name;

        const dishTitle = document.createElement('h3');
        dishTitle.textContent = dish.name;

        const dishDescription = document.createElement('p');
        dishDescription.textContent = dish.description;

        dishDiv.appendChild(dishImg);
        dishDiv.appendChild(dishTitle);
        dishDiv.appendChild(dishDescription);
        featuredDishes.appendChild(dishDiv);

    });
    
    homePage.appendChild(featuredDishesSection);

    const testimonialsSection = document.createElement('div');
    testimonialsSection.className = 'testimonials-section';
    
    const testimonialsHeadline = document.createElement('h2');
    testimonialsHeadline.textContent = 'Customer Testimonials';
    testimonialsSection.appendChild(testimonialsHeadline);

    const testimonialsContainer = document.createElement('div');
    testimonialsContainer.className = 'testimonials-container';


    const testimonials = [
        { 
            name: 'John Doe', 
            text: 'The best dining experience I\'ve ever had! The food was amazing and the service was top-notch.',
            imgSrc:person2

        },
        { 
            name: 'Jane Smith', 
            text: 'A wonderful place with delicious food and a cozy atmosphere. Highly recommended!',
            imgSrc: person1
        },

        { 
            name: 'Jane Smith', 
            text: 'A wonderful place with delicious food and a cozy atmosphere. Highly recommended!',
            imgSrc: person3
        },
    ];

    testimonials.forEach(testimonial => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'testimonial';

        const testimonialsContent = document.createElement('div');
        testimonialsContent.className = 'testimonial-content';

        const personImg = document.createElement('img');
        personImg.src = testimonial.imgSrc;
        personImg.alt = testimonial.name;

        const testimonialName = document.createElement('h3');
        testimonialName.textContent = testimonial.name;

        const testimonialText = document.createElement('p');
        testimonialText.textContent = testimonial.text;

        testimonialDiv.appendChild(personImg);
        testimonialsContent.appendChild(testimonialName);
        testimonialsContent.appendChild(testimonialText);
        testimonialsSection.appendChild(testimonialDiv);
        testimonialsSection.appendChild(testimonialsContainer);
        testimonialsContainer.appendChild(testimonialDiv);
        testimonialDiv.appendChild(testimonialsContent);
    });

    homePage.appendChild(testimonialsSection);


    content.appendChild(homePage);

}