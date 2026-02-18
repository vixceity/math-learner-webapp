

const frames = [];
const frameCount = 20;

for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = `penguinAnimationHome/frame${i}.png`;
    frames.push(img);
}
const canvas = document.getElementById("penguinCanvas");
const ctx = canvas.getContext("2d");

let current = 0;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(frames[current], 0, 0, canvas.width, canvas.height);

    current = (current + 1) % frames.length;
    requestAnimationFrame(animate);
}

window.onload = () => animate();

function getUpcomingEvents(limit = 5) {
    const raw = localStorage.getItem("events");
    if (!raw) return [];

    let data;
    try {
        data = JSON.parse(raw);
    } catch {
        return [];
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const flat = [];

    data.forEach(dayObj => {
        const d = new Date(dayObj.year, dayObj.month - 1, dayObj.day);
        d.setHours(0, 0, 0, 0);

        if (d < today) return;

        (dayObj.events || []).forEach(ev => {
            flat.push({
                date: d,
                title: ev.title || "Untitled",
                time: ev.time || ""
            });
        });
    });

    flat.sort((a, b) => a.date - b.date);
    return flat.slice(0, limit);
}

function formatShortDate(d) {
    return d.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric"
    });
}

function renderDashboardEvents() {
    const list = document.getElementById("dashboard-events-list");
    if (!list) return;

    const events = getUpcomingEvents(6);

    if (events.length === 0) {
        list.innerHTML = `<div class="no-events">No upcoming events yet — add one in <a class="events-link" href="/calendar">Calendar</a>.</div>`;
        return;
    }

    list.innerHTML = events.map(e => `
        <div class="event-row">
            <div class="event-meta">
                <div class="event-title">${e.title}</div>
                <div class="event-date">${formatShortDate(e.date)}</div>
            </div>
            <div class="event-time">${e.time}</div>
        </div>
    `).join("");
}


window.addEventListener("storage", (e) => {
    if (e.key === "events") renderDashboardEvents();
});


document.addEventListener("DOMContentLoaded", () => {
    renderDashboardEvents();
});










let username = "user";

// Update welcome message
document.getElementById("welcome-text").textContent = `Welcome back, ${username}!`;

window.addEventListener("pageshow", (event) => {

    if (event.persisted) window.location.reload();
});


