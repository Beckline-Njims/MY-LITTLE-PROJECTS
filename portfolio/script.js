// JavaScript to show and hide the "Scroll to Top" button
window.onscroll = function () {
    const topButton = document.getElementById("topBtn");

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
