const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Nav
document.querySelector('nav a:first-of-type').textContent = (siteContent["nav"]["nav-item-1"]);
document.querySelector('nav a:nth-of-type(2)').textContent = (siteContent["nav"]["nav-item-2"]);
document.querySelector('nav a:nth-of-type(3)').textContent = (siteContent["nav"]["nav-item-3"]);
document.querySelector('nav a:nth-of-type(4)').textContent = (siteContent["nav"]["nav-item-4"]);
document.querySelector('nav a:nth-of-type(5)').textContent = (siteContent["nav"]["nav-item-5"]);
document.querySelector('nav a:last-of-type').textContent = (siteContent["nav"]["nav-item-6"]);
// // Green nav links
document.querySelectorAll('nav a').forEach(e => e.style.color = "green");
// append to links
const hiThere = document.createElement("a");
const helloNode = document.createTextNode("Hello!")
hiThere.appendChild(helloNode);
document.querySelector('nav').appendChild(hiThere);
// prepend to links
const whatsUp = document.createElement("a");
const whatsUpText = document.createTextNode("Nice to see you!")
whatsUp.appendChild(whatsUpText);
document.querySelector('nav').prepend(whatsUp);

// CTA
// update H1 text]
document.querySelector('.cta-text h1').textContent = (siteContent["cta"]['h1']);
// update button text
document.querySelector('.cta button').textContent = (siteContent["cta"]['button']);
// add circle header image
document.querySelector('.cta #cta-img').setAttribute('src', siteContent["cta"]["img-src"]);

// Main Content
// Top Content

// Features
document.querySelector('.main-content .top-content:first-child h4').textContent = (siteContent["main-content"]["features-h4"]);
document.querySelector('.main-content .top-content:first-child p').textContent = (siteContent["main-content"]["features-content"]);

// About
document.querySelector('.top-content .text-content:last-child h4').textContent = (siteContent["main-content"]["about-h4"]);
document.querySelector('.top-content .text-content:last-child p').textContent = (siteContent["main-content"]["about-content"]);

// Middle Image
document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);
// console.log(middleImg);

// Bottom Content
// Services
document.querySelector('.bottom-content .text-content:first-child h4').textContent = (siteContent["main-content"]["services-h4"]);
document.querySelector('.bottom-content .text-content:first-child p').textContent = (siteContent["main-content"]["services-content"]);

// Product
document.querySelector('.bottom-content .text-content:nth-child(2) h4').textContent = (siteContent["main-content"]["product-h4"]);
document.querySelector('.bottom-content .text-content:nth-child(2) p').textContent = (siteContent["main-content"]["product-content"]);

// Vision
document.querySelector('.bottom-content .text-content:last-child h4').textContent = (siteContent["main-content"]["vision-h4"]);
document.querySelector('.bottom-content .text-content:last-child p').textContent = (siteContent["main-content"]["vision-content"]);

// Contact 
document.querySelector('.contact h4').textContent = (siteContent["contact"]["contact-h4"]);
document.querySelector('.contact p:first-of-type').textContent = (siteContent["contact"]["address"]);
document.querySelector('.contact p:nth-of-type(2)').textContent = (siteContent["contact"]["phone"]);
document.querySelector('.contact p:last-of-type').textContent = (siteContent["contact"]["email"]);

// Footer
document.querySelector('footer p').textContent = (siteContent["footer"]["copyright"]);
const addInfo = document.createElement("p");
const addInfoText = document.createTextNode("Coding is Cool!");
addInfo.appendChild(addInfoText);
document.querySelector('footer p').prepend(addInfo);
