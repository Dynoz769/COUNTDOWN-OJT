// Tetapkan tarikh mula OJT (16 March 2026, 09:00 waktu semasa komputer)
const ojtStart = new Date("2026-03-16T09:00:00");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const messageEl = document.getElementById("message");

function formatNumber(value) {
    return value.toString().padStart(2, "0");
}

function updateCountdown() {
    const now = new Date();
    const diff = ojtStart.getTime() - now.getTime();

    if (diff <= 0) {
        clearInterval(interval);
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        messageEl.textContent = "OJT bermula hari ini. Semoga berjaya!";
        messageEl.classList.add("started");
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysEl.textContent = formatNumber(days);
    hoursEl.textContent = formatNumber(hours);
    minutesEl.textContent = formatNumber(minutes);
    secondsEl.textContent = formatNumber(seconds);

    messageEl.textContent = `Masa berbaki hingga OJT: ${days} hari ${hours} jam ${minutes} minit.`;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
