const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const box = document.getElementById('box');
const code = document.getElementById('code');

function update() {
    const $c1 = color1.value;
    const $c2 = color2.value;
    
    const gradient = `linear-gradient(to right, ${$c1}, ${$c2})`;
    
    box.style.background = gradient;
    code.textContent = gradient + ';';
}

color1.addEventListener('input', update);
color2.addEventListener('input', update);

update();

