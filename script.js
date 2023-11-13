const swatches = document.querySelectorAll(".swatch > div");
const images = document.querySelectorAll(".gallery img");

swatches.forEach((swatch, index) => {
    swatch.addEventListener("mouseover", () => {
        swatches.forEach((swatch) => swatch.classList.remove("active"));
        swatch.classList.add("active");
        images.forEach((image) => (image.style.opacity = 0));
        images[index].style.opacity = 1;
    });
});
