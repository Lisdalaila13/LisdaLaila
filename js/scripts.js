/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const instagramButton = document.getElementById('instagramButton');

    // Nama pengguna Instagram yang dituju
    const instagramUsername = 'lisdalaila13';

    instagramButton.addEventListener('click', function () {
        openInstagramProfile();
    });

    function openInstagramProfile() {
        const instagramUrl = `https://www.instagram.com/${instagramUsername}`;
        window.open(instagramUrl, '_blank');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const whatsappButton = document.getElementById('whatsappButton');

    // Nomor WhatsApp yang dituju
    const phoneNumber = '62859131090020';

    whatsappButton.addEventListener('click', function () {
        openWhatsAppChat();
    });

    function openWhatsAppChat() {
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, '_blank');
    }
});
