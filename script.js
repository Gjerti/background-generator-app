const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const box = document.getElementById('box');
const code = document.getElementById('code');

function update() {
    const c1 = color1.value;
    const c2 = color2.value;
    
    const r1 = parseInt(c1.slice(1, 3), 16);
    const g1 = parseInt(c1.slice(3, 5), 16);
    const b1 = parseInt(c1.slice(5, 7), 16);
    
    const r2 = parseInt(c2.slice(1, 3), 16);
    const g2 = parseInt(c2.slice(3, 5), 16);
    const b2 = parseInt(c2.slice(5, 7), 16);
    
    const gradient = `linear-gradient(to right, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;
    
    box.style.background = gradient;
    code.textContent = gradient + ';';
}

color1.addEventListener('input', update);
color2.addEventListener('input', update);

update();

