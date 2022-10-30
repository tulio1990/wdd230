const imagesUpdates = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
    img.onload = () => {
        img.removeAttribute("data-src");
    }
    img.src = src;
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 10px 0px"
};

const imgShowing = new IntersectionObserver((entries,imgShowing) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgShowing.unobserve(entry.target);
        }
    })
}, imgOptions);

imagesUpdates.forEach((image) => {
    imgShowing.observe(image);
});






