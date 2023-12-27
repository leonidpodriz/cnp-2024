document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("hamburger").addEventListener("click", function () {
        document.getElementById("nav").classList.toggle("h-0");
    });

    const timer = document.getElementById("timer");

    const targetYear = timer.getAttribute("data-year");
    const targetMonth = timer.getAttribute("data-month");
    const targetDay = timer.getAttribute("data-day");
    const targetHour = timer.getAttribute("data-hour");
    const targetMinute = timer.getAttribute("data-minute");

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    setInterval(function () {
        const now = new Date();
        const target = new Date(+targetYear, +targetMonth - 1, +targetDay, +targetHour, +targetMinute);

        const diff = target - now;

        if (diff < 0) {
            days.innerHTML = "00";
            hours.innerHTML = "00";
            minutes.innerHTML = "00";
            seconds.innerHTML = "00";
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const m = Math.floor(diff / (1000 * 60)) % 60;
        const s = Math.floor(diff / 1000) % 60;

        days.innerHTML = d.toString().padStart(2, "0");
        hours.innerHTML = h.toString().padStart(2, "0");
        minutes.innerHTML = m.toString().padStart(2, "0");
        seconds.innerHTML = s.toString().padStart(2, "0");
    }, 500);

    const map = L.map('map').setView([50.513171, 30.4915147], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.marker([50.513171, 30.4915147]).addTo(map);
});