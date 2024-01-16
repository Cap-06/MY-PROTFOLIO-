    // Example: Scroll to the Resume section when the Resume link is clicked
    function scrollToResume() {
        var resumeSection = document.getElementById("resume");
        if (resumeSection) {
            resumeSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    function refreshPage() {
        location.reload();
    }

    function openBlankPage(url) {
        window.open(url, '_blank');
    }
     
    
document.addEventListener("DOMContentLoaded", function () {
    const skillItems = document.querySelectorAll("#skills .skills ul li img");

    skillItems.forEach((item) => {
        item.addEventListener("mouseover", handleMouseOver);
        item.addEventListener("mouseout", handleMouseOut);
    });

    function handleMouseOver(event) {
        event.target.style.transform = "scale(1.1)";
        event.target.style.transition = "transform 0.3s ease-in-out";
    }

    function handleMouseOut(event) {
        event.target.style.transform = "scale(1)";
    }
});

    // Example: Display an alert when the page is loaded
    window.onload = function () {
        alert("Welcome to Kunj Pratap Singh's Portfolio!");
    }