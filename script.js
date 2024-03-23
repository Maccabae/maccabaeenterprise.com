// script.js

document.addEventListener('DOMContentLoaded', function() {
    // JavaScript code goes here
});
// Add this JavaScript to script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Simulate form submission (replace this with your actual form submission logic)
        const formData = new FormData(form);
        console.log('Form data:', Object.fromEntries(formData.entries()));

        // Display confirmation message
        alert('Your message has been submitted. We will get back to you soon!');
        form.reset(); // Reset form fields
        document.addEventListener('DOMContentLoaded', function() {
            const prevBtn = document.querySelector('.pagination .prev');
            const nextBtn = document.querySelector('.pagination .next');
            const pages = document.querySelectorAll('.pagination li:not(.prev):not(.next) a');
        
            // Add event listeners to pagination links
            pages.forEach(page => {
                page.addEventListener('click', function(event) {
                    event.preventDefault();
                    // Load blog posts for the selected page
                    // Add your logic here
                    console.log('Load blog posts for page:', this.innerText);
                });
            });
        
            // Add event listener for previous button
            prevBtn.addEventListener('click', function(event) {
                event.preventDefault();
                // Load previous page of blog posts
                // Add your logic here
                console.log('Load previous page of blog posts');
            });
        
            // Add event listener for next button
            nextBtn.addEventListener('click', function(event) {
                event.preventDefault();
                // Load next page of blog posts
                // Add your logic here
                console.log('Load next page of blog posts');
            });
        });
        
    });
});
