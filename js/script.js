// Tworzenie płótna
var canvas = document.getElementById("animation");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Tworzenie tablicy cząsteczek
var particles = [];
for (var i = 0; i < 100; i++) {
  particles.push(new Particle());
}

// Funkcja animacji
function animate() {
  requestAnimationFrame(animate);

  // Czyszczenie płótna
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Rysowanie cząsteczek
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
}

// Definiowanie klasy cząsteczki
function Particle() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.vx = Math.random() * 2 - 1;
  this.vy = Math.random() * 2 - 1;
  this.size = Math.random() * 3 + 1;
}

// Definiowanie metod klasy cząsteczki
Particle.prototype.update = function() {
  this.x += this.vx;
  this.y += this.vy;

  // Zawijanie cząsteczek wokół krawędzi ekranu
  if (this.x < 0) {
    this.x = canvas.width;
  }
  if (this.x > canvas.width) {
    this.x = 0;
  }
  if (this.y < 0) {
    this.y = canvas.height;
  }
  if (this.y > canvas.height) {
    this.y = 0;
  }
}

Particle.prototype.draw = function() {
  ctx.fillStyle = "rgba(208,173,167,0.1)";
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
}

// Rozpoczęcie animacji
animate();