




document.addEventListener("DOMContentLoaded", function() {
    var contentSections = document.querySelectorAll(".content-section");

    function checkScroll() {
        contentSections.forEach(function(section) {
            var positionFromTop = section.getBoundingClientRect().top;

            // Adjust this value as needed to control when the animation triggers
            var triggerPosition = window.innerHeight * 0.8;

            if (positionFromTop < triggerPosition) {
                section.querySelector(".content1").classList.add("show-content");
            }
        });
    }

    // Initial check when page loads
    checkScroll();

    // Check again on scroll
    window.addEventListener("scroll", checkScroll);
});


