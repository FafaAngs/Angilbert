// Get all the dots and categories
        const dots = document.querySelectorAll('.dot');
        const categories = document.querySelectorAll('.category');

        // Function to remove highlighting from all dots and categories
        function removeHighlight() {
            dots.forEach(dot => {
                dot.classList.remove('highlighted');
            });
            categories.forEach(category => {
                category.classList.remove('highlighted');
            });
        }

        // Function to highlight the next dot and corresponding category
        let currentIndex = 0;
        function highlightNext() {
            removeHighlight(); // Remove highlighting from previous dot and category
            dots[currentIndex].classList.add('highlighted'); // Highlight current dot
            categories[currentIndex].classList.add('highlighted'); // Highlight corresponding category
            currentIndex = (currentIndex + 1) % dots.length; // Move to the next dot
        }

        // Highlight the next dot and category every 3 seconds
        setInterval(highlightNext, 3000);


        