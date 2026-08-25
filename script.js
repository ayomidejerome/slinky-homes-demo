/* =========================================================
   EMARV HOMES & PROPERTIES
   Demo Website JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       PROPERTY SEARCH
    ===================================================== */

    const searchButton =
        document.querySelector(".search-button");

    const locationSelect =
        document.querySelector("#location");

    const propertyTypeSelect =
        document.querySelector("#property-type");

    const purposeSelect =
        document.querySelector("#purpose");


    if (
        searchButton &&
        locationSelect &&
        propertyTypeSelect &&
        purposeSelect
    ) {

        searchButton.addEventListener("click", function () {

            const location =
                locationSelect.value;

            const propertyType =
                propertyTypeSelect.value;

            const purpose =
                purposeSelect.value;


            alert(
                `Searching for ${propertyType.toLowerCase()} properties to ${purpose.toLowerCase()} in ${location}.`
            );

        });

    }


    /* =====================================================
       SMOOTH SCROLLING
    ===================================================== */

    const navigationLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId === "#" ||
                targetId === ""
            ) {
                return;
            }


            const targetElement =
                document.querySelector(targetId);


            if (targetElement) {

                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener("scroll", function () {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(15, 15, 15, 0.94)";

            navbar.style.padding =
                "18px 0";

        } else {

            navbar.style.background =
                "transparent";

            navbar.style.padding =
                "28px 0";

        }

    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const mobileMenuButton =
        document.querySelector(
            ".mobile-menu-button"
        );

    const navigation =
        document.querySelector(".nav-links");


    if (
        mobileMenuButton &&
        navigation
    ) {

        mobileMenuButton.addEventListener(
            "click",
            function () {

                navigation.classList.toggle(
                    "mobile-open"
                );

            }
        );


        const mobileLinks =
            navigation.querySelectorAll("a");


        mobileLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navigation.classList.remove(
                        "mobile-open"
                    );

                }
            );

        });

    }


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.querySelector("#contact-form");

    const formMessage =
        document.querySelector("#form-message");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document
                        .querySelector("#name")
                        .value
                        .trim();


                const email =
                    document
                        .querySelector("#email")
                        .value
                        .trim();


                const interest =
                    document
                        .querySelector("#interest")
                        .value;


                const message =
                    document
                        .querySelector("#message")
                        .value
                        .trim();


                if (
                    !name ||
                    !email ||
                    !interest ||
                    !message
                ) {

                    formMessage.textContent =
                        "Please complete all fields before sending.";

                    formMessage.style.color =
                        "#b33a3a";

                    return;

                }


                formMessage.textContent =
                    `Thank you, ${name}. Your enquiry has been received. We'll be in touch shortly.`;


                formMessage.style.color =
                    "#8a6a32";


                contactForm.reset();

            }
        );

    }

});