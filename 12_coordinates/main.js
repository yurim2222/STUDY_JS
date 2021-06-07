const tag = document.querySelector(".tag");
const horozontal = document.querySelector(".horozontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");

addEventListener('load', () => {
    
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;

    document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;
        tag.innerHTML = `
            ${x}px, ${y}px
        `;
        vertical.style.transform = `translate(${x}px, 0)`;
        horozontal.style.transform = `translate(0, ${y}px)`;
        target.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalfHeight}px)`;
        tag.style.transform = `translate(${x+30}px, ${y+30}px)`;
    });
});