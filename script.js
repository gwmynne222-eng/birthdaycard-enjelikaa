const candle = document.getElementById("candle");
const flame = document.querySelector(".flame");
const introCard = document.getElementById("introCard");
const mainCard = document.getElementById("mainCard");
const music = document.getElementById("bg-music");

// BUKU TAMU (localStorage)
const form = document.getElementById("guestForm");
const guestbook = document.getElementById("guestbook");
let messages = JSON.parse(localStorage.getItem("guestbook")) || [];

function renderMessages() {
  guestbook.innerHTML = "";
  messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = "guest-item";
    div.innerHTML = `<strong>${msg.name}</strong><br>${msg.wish}`;
    guestbook.prepend(div);
  });
}
renderMessages();

// Klik lilin event
candle.addEventListener("click", () => {

  // MATIKAN API
  if (flame) flame.style.display = "none";

  // tampilkan kartu utama
  introCard.classList.add("hidden");
  mainCard.classList.remove("hidden");

  // putar musik
  music.play().catch(e => {
    // require user interaction
  });

  // confetti 🎉
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });

});

// submit buku tamu
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const wish = document.getElementById("wish").value;

  messages.push({ name, wish });
  localStorage.setItem("guestbook", JSON.stringify(messages));
  renderMessages();
  form.reset();
});
