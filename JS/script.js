const draggables = document.querySelectorAll('.draggable img');
const imagenContenedor = document.getElementById('imagen');
const medio = document.getElementById('medio');
const camiseta = document.getElementById('camiseta');
const radios = document.querySelectorAll('input[name="color"]');
const tituloInput = document.getElementById('tituloInput');
const titulo = document.getElementById('titulo');
const slider1 = document.getElementById('slider1');
const slider2 = document.getElementById('slider2');
const invertido = document.getElementById('invertido');

slider1.value = parseInt(titulo.style.top) || 50;
slider2.value = parseInt(titulo.style.left) || 50;

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.src);
    });
});

imagenContenedor.addEventListener('dragover', (event) => {
    event.preventDefault();
});

imagenContenedor.addEventListener('drop', (event) => {
    event.preventDefault();
    const imgSrc = event.dataTransfer.getData('text/plain');
    medio.innerHTML = `<img src="${imgSrc}" style="width:130px;height:130px;">`;
    const imgName = imgSrc.substring(imgSrc.lastIndexOf('/') + 1, imgSrc.lastIndexOf('.'));
    const imgNameDiv = document.createElement('div');
    imgNameDiv.textContent = imgName; 
    medio.appendChild(imgNameDiv);
    const imgInvertida = document.createElement('img');
    imgInvertida.src = imgSrc;
    imgInvertida.style.transform = 'scaleX(-1)'; 
    imgInvertida.style.width = '65px';
    imgInvertida.style.height = '65px';
    invertido.innerHTML = ''; 
    invertido.appendChild(imgInvertida);
});

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        const selectedValue = radio.value;
        camiseta.src = `img/camiseta/${selectedValue}.png`;
    });
});

tituloInput.addEventListener('blur', () => {
    titulo.textContent = tituloInput.value;
});

const RangoMaximo = 250;

slider1.addEventListener('input', () => {
    const valorSlider = parseInt(slider1.value, 10);
    titulo.style.top = `${RangoMaximo - valorSlider}px`;
});

slider2.addEventListener('input', () => {
    const valorSlider = parseInt(slider2.value, 10);
    titulo.style.left = `${RangoMaximo - valorSlider}px`;
});
