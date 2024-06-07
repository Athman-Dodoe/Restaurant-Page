
export function loadHomePage() {
    const content = document.querySelector('#content');

    const homePage = document.createElement('div');
    homePage.className = 'home-page';
   

    const homeContent = document.createElement('div');
    homeContent.className='home-content';
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Experience the finest dining with a blend of exquisite flavors and a warm ambiance. Our restaurant is dedicated to providing you with an unforgettable culinary journey.';



    content.appendChild(homePage);
    homePage.appendChild(homeContent);
    homeContent.appendChild(headline);
    homeContent.appendChild(paragraph);


}