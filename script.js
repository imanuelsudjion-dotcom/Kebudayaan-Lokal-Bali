/* ===== AUDIO AUTOPLAY FIX ===== */
const audio = document.getElementById("kecakAudio");
audio.volume = 0.65;

document.addEventListener("click", () => {
    audio.play().catch(()=>{});
}, { once:true });

/* ===== GOOGLE MAP OPEN ===== */
function openMap(q) {
    window.open(https://www.google.com/maps/search/${encodeURIComponent(q)}, "_blank");
}

/* ===== PARTICLES API ===== */
const particles = document.getElementById("particles");
const pctx = particles.getContext("2d");

function resizeParticles() {
    particles.width = innerWidth;
    particles.height = innerHeight;
}
resizeParticles();
addEventListener("resize", resizeParticles);

class Ember {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * innerWidth;
        this.y = innerHeight + Math.random() * 200;
        this.r = Math.random() * 3 + 1;
        this.v = Math.random() * 1.3 + 0.4;
        this.a = Math.random() * 0.4 + 0.2;
    }
    update() {
        this.y -= this.v;
        if (this.y < -10) this.reset();
    }
    draw() {
        pctx.fillStyle = rgba(255,100,0,${this.a});
        pctx.beginPath();
        pctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        pctx.fill();
    }
}

let fire = Array.from({length:150}, () => new Ember());
function animateFire() {
    pctx.clearRect(0,0,innerWidth,innerHeight);
    fire.forEach(f => { f.update(); f.draw(); });
    requestAnimationFrame(animateFire);
}
animateFire();

/* ===== CURSOR TRAIL ===== */
const trail = document.getElementById("cursorTrail");
const tctx = trail.getContext("2d");

function resizeTrail() {
    trail.width = innerWidth;
    trail.height = innerHeight;
}
resizeTrail();
addEventListener("resize", resizeTrail);

let mouse = { x: innerWidth/2, y: innerHeight/2 };
addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

const drops = [];
function tickTrail() {
    tctx.fillStyle = "rgba(0,0,0,0.1)";
    tctx.fillRect(0,0,trail.width,trail.height);

    drops.push({ x:mouse.x, y:mouse.y, r:2+Math.random()*3, a:1 });

    if(drops.length > 60) drops.shift();

    drops.forEach(d => {
        d.a -= 0.03;
        tctx.fillStyle = rgba(255,80,0,${d.a});
        tctx.beginPath();
        tctx.arc(d.x, d.y, d.r, 0, Math.PI*2);
        tctx.fill();
    });

    requestAnimationFrame(tickTrail);
}
tickTrail();

/* ===== PARALLAX HERO ===== */
const heroBg = document.querySelector(".hero-bg");
addEventListener("mousemove", e => {
    const x = (e.clientX / innerWidth - 0.5) * 16;
    const y = (e.clientY / innerHeight - 0.5) * 12;
    heroBg.style.transform = translate(${x}px,${y}px) scale(1.1);
});

/* ===== REVEAL SCROLL ===== */
const reveals = document.querySelectorAll(".reveal");
function revealScroll(){
    const vh = innerHeight;
    reveals.forEach(el =>{
        if(el.getBoundingClientRect().top < vh - 80){
            el.classList.add("show");
        }
    });
}
addEventListener("scroll", revealScroll);
revealScroll();