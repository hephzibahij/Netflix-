document.addEventListener('DOMContentLoaded', function () {
    // FAQ Accordion Functionality
    const accordions = document.querySelectorAll('.accordion input[type="radio"]');
    
    function updateAccordionBehavior() {
        accordions.forEach((accordion) => {
            accordion.addEventListener('change', function () {
                accordions.forEach((item) => {
                    const content = item.nextElementSibling.nextElementSibling;
                    if (item.checked) {
                        content.style.maxHeight = content.scrollHeight + "px";
                    } else {
                        content.style.maxHeight = null;
                    }
                });
            });
        });
    }

    updateAccordionBehavior();

    // Adjust FAQ accordion behavior for screen size
    function adjustForScreenSize() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 768) { // Mobile or tablet size
            accordions.forEach((item) => {
                item.nextElementSibling.nextElementSibling.style.maxHeight = null;
            });
        } else {
            accordions.forEach((item) => {
                if (item.checked) {
                    item.nextElementSibling.nextElementSibling.style.maxHeight = item.nextElementSibling.nextElementSibling.scrollHeight + "px";
                }
            });
        }
    }

    window.addEventListener('resize', adjustForScreenSize);
    adjustForScreenSize();

    // Email Signup Form Submission
    const signupForms = document.querySelectorAll('.email-signup');
    
    signupForms.forEach((form) => {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            const emailValue = emailInput.value;

            if (emailValue) {
                alert(`Thank you for signing up with the email: ${emailValue}`);
                emailInput.value = ''; // Clear the input field
            } else {
                alert('Please enter a valid email address.');
            }
        });
    });
});
