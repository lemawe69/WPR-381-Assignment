function updateCountdown(element, dateString) {
  const targetDate = new Date(dateString).getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      element.innerText = "Event Started";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    element.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  update();
  setInterval(update, 1000);
}

// For cards
document.querySelectorAll('.event-card').forEach(card => {
  const date = card.getAttribute('data-date');
  const countdownEl = card.querySelector('.countdown');
  if (countdownEl && date) {
    updateCountdown(countdownEl, date);
  }
});
