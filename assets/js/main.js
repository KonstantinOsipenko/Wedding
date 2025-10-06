document.addEventListener("DOMContentLoaded", function () {
  const calendarContainer = document.getElementById('calendar-wrap');
  const weddingDate = 28;
  const monthName = 'Жовтень';
  const year = 2025;

  const startDay = new Date(`${year}-10-01`).getDay(); // 3 = середа
  const daysInMonth = 31;
  const dayNames = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'];

  let html = `<h2>${monthName} ${year}</h2><div class="calendar-grid">`;

  dayNames.forEach(day => {
    html += `<div class="day-name">${day}</div>`;
  });

  const offset = (startDay + 6) % 7;
  for (let i = 0; i < offset; i++) {
    html += `<div class="day empty"></div>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    if (day === weddingDate) {
      html += `
        <div class="day heart-cell">
          <div class="heart"></div>
          <span class="heart-label">${day}</span>
        </div>
      `;
    } else {
      html += `<div class="day">${day}</div>`;
    }
  }

  html += `</div>`;
  calendarContainer.innerHTML = html;
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    once: false,         // анімація спрацьовує кожного разу при вході у в'юпорт
    mirror: true,        // дозволяє анімацію при скролі назад
    duration: 1000,      // тривалість анімації
    easing: 'ease-in-out',
    offset: 120,         // відстань до активації (у px)
    anchorPlacement: 'top-bottom' // коли верх елемента торкається низу в'юпорта
  });
});

// timer
document.addEventListener("DOMContentLoaded", function () {
  const targetDate = new Date("2025-10-28T14:00:00").getTime();

  const updateTimer = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.getElementById("timer").innerHTML = "<p>Вже настало! 💍</p>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  };

  updateTimer();
  setInterval(updateTimer, 1000);
});
