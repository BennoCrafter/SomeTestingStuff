let canvas = document.getElementById('canvas');
let properties = document.getElementById('properties');
let posX = document.getElementById('posX');
let posY = document.getElementById('posY');
let shapes = document.getElementById('shapes');

let activeShape = null;
let startX = 0;
let startY = 0;

shapes.addEventListener('mousedown', e => {
	let shape = document.createElement('div');
	shape.classList.add('shape');
	shape.style.backgroundColor = e.target.style.backgroundColor;
	if (e.target.id == 'triangle') {
		shape.id = 'triangle';
	} else {
		shape.id = 'rect';
	}
	canvas.appendChild(shape);
	activeShape = shape;
	startX = e.clientX - activeShape.offsetLeft;
	startY = e.clientY - activeShape.offsetTop;
});

canvas.addEventListener('mousedown', e => {
	if (e.target.classList.contains('shape')) {
		activeShape = e.target;
		startX = e.clientX - activeShape.offsetLeft;
		startY = e.clientY - activeShape.offsetTop;
		posX.value = activeShape.offsetLeft;
		posY.value = activeShape.offsetTop;
	}
});

document.addEventListener('mousemove', e => {
	if (activeShape) {
		activeShape.style.left = (e.clientX - startX) + 'px';
		activeShape.style.top = (e.clientY - startY) + 'px';
		posX.value = activeShape.offsetLeft;
		posY.value = activeShape.offsetTop;
	}
});

document.addEventListener('mouseup', e => { oldActiveShape = activeShape; activeShape = null;console.log("sjdsd"); })

posX.addEventListener('change', e => {
    if (activeShape) {
        const newLeft = e.target.value;
        const oldTop = activeShape.offsetTop;
        activeShape.style.left = newLeft + 'px';
        activeShape.style.top = oldTop + 'px';
        activeShape.style.transform = `translate(${newLeft}px, ${oldTop}px)`;
    }
});

posY.addEventListener('change', e => {
    if (activeShape) {
        const newTop = e.target.value;
        const oldLeft = activeShape.offsetLeft;
        activeShape.style.top = newTop + 'px';
        activeShape.style.left = oldLeft + 'px';
        activeShape.style.transform = `translate(${oldLeft}px, ${newTop}px)`;
    }
});

properties.addEventListener('change', e => {
    if (oldActiveShape) {
        activeShape.style.left = posX.value + 'px';
        activeShape.style.top = posY.value + 'px';
    }
});
