const tag = document.querySelector(".tag");
const horozontal = document.querySelector(".horozontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");

document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    tag.innerHTML = `
        ${x}px, ${y}px
    `;
    vertical.style.left = `${x}px`;
    horozontal.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
});