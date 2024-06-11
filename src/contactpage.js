export function loadContactPage () {
    const contactPage = document.createElement('div');
    contactPage.className = 'contact-page';

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    contactPage.appendChild(heading);

    const description = document.createElement('p');
    description.textContent = 'Get in touch with us for reservations, catering, or any other inquiries. We look forward to hearing from you!';
    contactPage.appendChild(description);

    const contactDetails = document.createElement('div');
    contactDetails.className = 'contact-details';
    contactPage.appendChild(contactDetails);

    const address = document.createElement('p');
    address.innerHTML = '<strong>Address:</strong> 123 Main Street, Anytown, AN 12345';
    contactDetails.appendChild(address);

    const phone = document.createElement('p');
    phone.innerHTML = '<strong>Phone:</strong> (123) 456-7890';
    contactDetails.appendChild(phone);

    const email = document.createElement('p');
    email.innerHTML = '<strong>Email:</strong> contact@restaurant.com';
    contactDetails.appendChild(email);

    const contactForm = document.createElement('form');
    contactForm.className = 'contact-form';


    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    contactForm.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.required = true;
    contactForm.appendChild(nameInput);

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    contactForm.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.required = true;
    contactForm.appendChild(emailInput);

    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message:';
    contactForm.appendChild(messageLabel);

    const messageInput = document.createElement('textarea');
    messageInput.name = 'message';
    messageInput.required = true;
    contactForm.appendChild(messageInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Send Message';
    contactForm.appendChild(submitButton);

    contactPage.appendChild(contactForm);


    const content = document.querySelector('#content');
    content.appendChild(contactPage);

}