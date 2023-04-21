const scrollElms = document.querySelectorAll(".scroll-js");
const elemetInView = (el, div = 1) => {
    const elmTop = el.getBoundingClientRect().top;

    return (
        elmTop <= window.innerHeight / div
    );
}
const display = (elm) => {
    elm.classList.add("scroll");
}

const handleScrollAnimation = () => {
    scrollElms.forEach((el) => {
        if(elemetInView(el, 1.25)) {
            display(el);
        }
    })
}
window.addEventListener("scroll", () => {
    handleScrollAnimation();
})