const wave = document.getElementById("wave");
const percent = document.getElementById("percent");

let progress = 0;
let phase = 0;

function drawWave() {

    const width = 1200;
    const height = 400;

    const level = height - (progress / 100) * height;

    let d = `M 0 ${height} `;

    for (let x = 0; x <= width; x += 10) {

        const y =
            level +
            Math.sin((x * 0.02) + phase) * 12;

        d += `L ${x} ${y} `;

    }

    d += `L ${width} ${height}`;
    d += `L 0 ${height}`;
    d += "Z";

    wave.setAttribute("d", d);

    phase += 0.08;

    requestAnimationFrame(drawWave);

}

drawWave();

const loading = setInterval(() => {

    progress++;

    percent.innerHTML = progress + "%";

    if(progress>=100){

        clearInterval(loading);

        setTimeout(()=>{

            document.querySelector(".loader").style.opacity="0";
            document.querySelector(".loader").style.transition=".8s";

        },600);

    }

},40);