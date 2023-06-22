let hue = 0;

function createDiv(settings) {

    const div = document.createElement('div');
    div.className = 'obj';
    div.style.backgroundColor = `hsl(${hue},100%,50%)`;
    hue = hue + settings.colorStep;
    if (hue > 360) hue = 0;
    const parentElement = document.getElementById('animation');
    parentElement.appendChild(div);

    const frames = [
        { transform: "scale(1) rotate(0deg)" },
        { transform: `scale(${settings.scale}) rotate(180deg)` }
    ];

    const timing = {
        duration: settings.duration,
        iterations: 1
    };

    div.animate(frames, timing).onfinish = function () {
        div.remove();
    };
    setTimeout(createDiv, settings.frequency, settings);
}

const settings = {
    duration: 6000,
    frequency: 500,
    colorStep: 10,
    scale: 200
}

createDiv(settings);


