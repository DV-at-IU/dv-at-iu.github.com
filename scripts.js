document.addEventListener('DOMContentLoaded', function() {
  // Add class to show text and button after 1 second
  setTimeout(function() {
    document.querySelector('.hero-text').classList.add('show-text');
    document.querySelector('.cta-button').classList.add('show-button');
  }, 1000); // 1000ms = 1 second
});

// JavaScript to add 'active' class to current page link and update text color
document.addEventListener("DOMContentLoaded", function() {
    var currentLocation = window.location.pathname;
    var navItems = document.querySelectorAll("nav ul li a");

    navItems.forEach(function(item) {
        var itemPath = item.getAttribute("href");

        // Check if current page link matches the href attribute of the item
        if (currentLocation.includes(itemPath)) {
            item.classList.add("active");
            item.style.color = "#1e2b3d"; // Change text color for active link
        } else {
            item.classList.remove("active");
            item.style.color = ""; // Reset text color for other links
        }
    });

    // JavaScript for hero text and button animation
    var heroText = document.querySelector(".hero-text");
    var ctaButton = document.querySelector(".cta-button");

    // Check if elements exist (for non-home pages)
    if (heroText && ctaButton) {
        setTimeout(function() {
            heroText.classList.add("show-text");
        }, 500);

        setTimeout(function() {
            ctaButton.classList.add("show-button");
        }, 1000);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Add class to show text and button after 1 second
    setTimeout(function() {
        document.querySelector('.hero-text').classList.add('show-text');
        document.querySelector('.cta-button').classList.add('show-button');
    }, 1000); // 1000ms = 1 second

    // Update page title with " | DV at IU"
    var pageTitle = document.title;
    var pageName = pageTitle.split(' | ')[0]; // Extract current page name

    // Update title dynamically
    document.title = `${pageName} | DV at IU`;

    // Function to style specific words within a paragraph
    function styleWordsInParagraph(selector, words, color) {
        var paragraph = document.querySelector(selector);
        if (paragraph) {
            var content = paragraph.innerHTML;
            words.forEach(function(word) {
                var regex = new RegExp(`\\b(${word})\\b`, 'gi');
                content = content.replace(regex, `<span style="color: ${color}; font-weight: bold;">$1</span>`);
            });
            paragraph.innerHTML = content;
        }
    }

    // Style words in "About Us" paragraph
    styleWordsInParagraph('.card:nth-child(1) p', ['data manipulation', 'visualization skills', 'weekly meetings'], '#1fb590');

    // Style words in "Our Mission" paragraph
    styleWordsInParagraph('.card:nth-child(2) p', ['unique skillset', 'competitive advantage'], '#1fb590');
});
