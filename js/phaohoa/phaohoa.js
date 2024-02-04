var canvas, ctx, w, h, particles = [],
    probability = 0.4,
    xPoint = 0,
    yPoint = 0;

    var words = ["Long", "Yeu", "Thanh Tuyen","❤️","😘"];

window.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    w = window.innerWidth;
    h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;

    updateFirework();
}

function updateFirework() {
    update();
    paint();
    setTimeout(updateFirework, 1000 / 60);
    // Use requestAnimationFrame for smoother animations
    // requestAnimationFrame(updateFirework);
}

function paint() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";

    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';

    for (var i = 0; i < particles.length; i++) {
        if (particles[i].move()) {
            particles[i].paint(ctx);
        }
    }
}

function update() {
    if (particles.length < 450) {
        createFirework();
    }

    var fireArrays = [];

    for (var i = 0; i < particles.length; i++) {
        if (particles[i].move()) {
            fireArrays.push(particles[i]);
        }
    }

    particles = fireArrays;
}

function createFirework() {
    xPoint = Math.random() * (w - 200) + 100;
    yPoint = Math.random() * (h - 200) + 100;

    var nFire = Math.random() *50+100;
    var randomColor = "rgb(" + (~~(Math.random() * 200 + 55)) + "," + (~~(Math.random() * 200 + 55)) + "," + (~~(Math.random() * 200 + 55)) + ")";
    var randomWord = words[Math.floor(Math.random() * words.length)];
    for (var i = 0; i < nFire; i++) {
        var particle = new Particle(xPoint, yPoint, randomColor,randomWord);
        var vy = Math.sqrt(25 - particle.vx * particle.vx);
        if (Math.abs(particle.vy) > vy) {
            particle.vy = particle.vy > 0 ? vy : -vy;
        }
        particles.push(particle);
    }
}

function Particle(x, y, color,word) {
    this.w = 6;
    this.h = 6;

    this.x = x + this.w / 2;
    this.y = y + this.h / 2;

    this.vx = (Math.random() - 0.5) * 10;
    this.vy = (Math.random() - 0.5) * 10;

    this.alpha = Math.random() * 0.5 + 0.5;
    this.color = color;
    this.word = word;
}

Particle.prototype = {
    move: function () {
        this.x += this.vx;
        this.vy+=.05
        this.y += this.vy;
        this.alpha -= 0.01;

        return this.alpha > 0;
    },
    paint: function (c) {
        c.save();
        c.beginPath();
        c.translate(this.x, this.y);
        c.arc(0, 0, this.w, 0, Math.PI * 2);
        c.fillStyle = this.color;
        
        c.font = "10px Arial";
        c.fillText(this.word, this.x, this.y);
        c.globalAlpha = this.alpha;
        c.fill();
        c.closePath();
        c.restore();
    }
};
