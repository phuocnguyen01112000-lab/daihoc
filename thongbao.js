document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top > 0 && rect.top < window.innerHeight * 0.7) {
            sec.classList.add("fade-in");
        }
    });
});

