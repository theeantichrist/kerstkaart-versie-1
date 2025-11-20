const canvas = document.getElementById('canvasId');
const ctx = canvas.getContext('2d');

function drawChristmasTree(x, y, size) {
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 50 * size, y + 100 * size);
    ctx.lineTo(x + 50 * size, y + 100 * size);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'brown';
    ctx.fillRect(x - 15 * size, y + 100 * size, 30 * size, 50 * size);
}

function drawOrnaments(x, y, size) {
    const colors = ['red', 'yellow', 'blue', 'purple', 'orange'];

    for (let i = 0; i < colors.length; i++) {
        const ornamentX = x + (i - 2) * 25 * size;
        const ornamentY = y + (i + 1) * 25 * size;
        ctx.fillStyle = colors[i];
        ctx.beginPath();
        ctx.arc(ornamentX, ornamentY, 10 * size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawStar(x, y, size) {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    const starRadius = 20 * size;
    const spikes = 5;
    const step = Math.PI / spikes;

    for (let i = 0; i < 2 * spikes; i++) {
        const angle = i * step;
        const radius = i % 2 === 0 ? starRadius : starRadius / 2;

        const xPos = x + Math.cos(angle) * radius;
        const yPos = y - Math.sin(angle) * radius;
        if (i === 0) {
            ctx.moveTo(xPos, yPos);
        } else {
            ctx.lineTo(xPos, yPos);
        }
    }
    ctx.closePath();
    ctx.fill();
}

function drawHouse(x, y) {
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, 100, 100);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.strokeRect(x, y, 100, 100);

    ctx.fillStyle = 'brown';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y - 50);
    ctx.lineTo(x + 100, y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = 'yellow';
    ctx.fillRect(x + 35, y + 60, 30, 40);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.strokeRect(x + 35, y + 60, 30, 40);

    ctx.fillStyle = 'blue';
    ctx.fillRect(x + 10, y + 10, 20, 30);
    ctx.fillRect(x + 70, y + 10, 20, 30);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.strokeRect(x + 10, y + 10, 20, 30);
    ctx.strokeRect(x + 70, y + 10, 20, 30);
}

function drawSnowman(x, y) {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, Math.PI * 2);
    ctx.arc(x, y - 60, 30, 0, Math.PI * 2);
    ctx.arc(x, y - 100, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x - 8, y - 110, 3, 0, Math.PI * 2);
    ctx.arc(x + 8, y - 110, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.moveTo(x, y - 105);
    ctx.lineTo(x, y - 98);
    ctx.lineTo(x + 10, y - 100);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'red';
    ctx.fillRect(x - 35, y - 80, 70, 10);
    ctx.fillRect(x + 25, y - 70, 10, 20);

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.strokeRect(x - 35, y - 80, 70, 10);
    ctx.strokeRect(x + 25, y - 70, 10, 20);

    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x, y - 70, 4, 0, Math.PI * 2);
    ctx.arc(x, y - 50, 4, 0, Math.PI * 2);
    ctx.fill();
}

function drawText() {
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText("Merry Christmas", 250, 500);
}

function drawCard() {
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawChristmasTree(400, 150, 1);  
    drawOrnaments(400, 150, 1);
    drawStar(400, 150, 1);
    drawHouse(300, 250);
    drawSnowman(600, 350);
    drawText();
}

drawCard();
