document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("hamburger").addEventListener("click", function () {
        document.getElementById("nav").classList.toggle("h-0");
    });
});