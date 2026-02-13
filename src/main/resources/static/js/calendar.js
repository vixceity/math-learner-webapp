

const calendar = document.querySelector(".calendar");
const dateEl = document.querySelector(".date");
const daysContainer = document.querySelector(".days");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const todayBtn = document.querySelector(".today-btn");

const addEventBtn = document.querySelector(".add-event");
const addEventWrapper = document.querySelector(".add-event-wrapper");
// safer: close button inside wrapper (some pages have multiple ".close")
const addEventCloseBtn = addEventWrapper?.querySelector(".close");

const addEventTitle = document.querySelector(".event-name");
const addEventFrom = document.querySelector(".event-time-from");
const addEventTo = document.querySelector(".event-time-to");
const addEventSubmit = document.querySelector(".add-event-btn");

const eventDayEl = document.querySelector(".event-day");
const eventDateEl = document.querySelector(".event-date");
const eventsContainer = document.querySelector(".events");

let today = new Date();
let activeDay = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let eventsArr = [];


function getEvents() {
    const raw = localStorage.getItem("events");
    if (!raw) return;

    try {
        eventsArr = JSON.parse(raw) || [];
    } catch {
        eventsArr = [];
        return;
    }


    eventsArr.forEach((dayObj) => {
        (dayObj.events || []).forEach((ev) => {
            // If old format only has ev.time like "13:00 - 14:00" or "1:00 PM - 2:00 PM"
            if ((!ev.start || !ev.end) && ev.time) {
                const parts = String(ev.time).split("-").map(p => p.trim());
                if (parts.length === 2) {
                    const s = parseAnyTo24(parts[0]);
                    const e = parseAnyTo24(parts[1]);
                    if (s && e) {
                        ev.start = s;
                        ev.end = e;
                    }
                }
            }

            if (ev.start && ev.end) {
                ev.time = `${formatTime12(ev.start)} - ${formatTime12(ev.end)}`;
            }
        });
    });
}

function saveEvents() {
    localStorage.setItem("events", JSON.stringify(eventsArr));
}


function escapeHTML(str) {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function normalizeTime24(raw) {
    if (raw == null) return null;
    let t = String(raw).trim().replace(/\s+/g, "");
    if (!t) return null;

    // typed like 930 or 1530
    if (/^\d{3,4}$/.test(t)) {
        if (t.length === 3) t = "0" + t; // 930 -> 0930
        t = `${t.slice(0, 2)}:${t.slice(2, 4)}`;
    }

    const m = t.match(/^(\d{1,2}):(\d{2})$/);
    if (!m) return null;

    const hh = parseInt(m[1], 10);
    const mm = parseInt(m[2], 10);
    if (Number.isNaN(hh) || Number.isNaN(mm)) return null;
    if (hh < 0 || hh > 23 || mm < 0 || mm > 59) return null;

    return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
}

// Accepts "1:05 PM", "01:05PM", "12:00 am" -> returns "HH:MM" or null
function parseTime12(raw) {
    if (!raw) return null;
    const s = String(raw).trim().toUpperCase().replace(/\s+/g, " ");
    const m = s.match(/^(\d{1,2}):(\d{2})\s?(AM|PM)$/);
    if (!m) return null;

    let hh = parseInt(m[1], 10);
    const mm = parseInt(m[2], 10);
    const ap = m[3];

    if (hh < 1 || hh > 12 || mm < 0 || mm > 59) return null;

    if (ap === "AM") {
        if (hh === 12) hh = 0;
    } else {
        if (hh !== 12) hh += 12;
    }

    return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
}

function parseAnyTo24(raw) {
    return normalizeTime24(raw) || parseTime12(raw);
}

function formatTime12(hhmm) {
    const [hhStr, mm] = hhmm.split(":");
    let hh = parseInt(hhStr, 10);
    const ampm = hh >= 12 ? "PM" : "AM";
    hh = hh % 12;
    if (hh === 0) hh = 12;
    return `${hh}:${mm} ${ampm}`;
}

function timeToMinutes(hhmm) {
    const [h, m] = hhmm.split(":").map(Number);
    return h * 60 + m;
}

// ---------- Calendar rendering ----------
function initCalendar() {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);

    const prevDaysCount = prevLastDay.getDate();
    const lastDate = lastDay.getDate();

    const startWeekday = firstDay.getDay(); // 0 Sun ... 6 Sat
    const nextDaysCount = 7 - lastDay.getDay() - 1;

    dateEl.textContent = `${months[month]} ${year}`;

    let daysHTML = "";

    // previous month fillers
    for (let x = startWeekday; x > 0; x--) {
        daysHTML += `<div class="day prev-date">${prevDaysCount - x + 1}</div>`;
    }

    // current month days
    for (let i = 1; i <= lastDate; i++) {
        const hasEvent = eventsArr.some(ev =>
            ev.day === i && ev.month === month + 1 && ev.year === year && (ev.events?.length > 0)
        );

        const isToday =
            i === new Date().getDate() &&
            year === new Date().getFullYear() &&
            month === new Date().getMonth();

        const isActive = i === activeDay;

        const classes = [
            "day",
            isToday ? "today" : "",
            isActive ? "active" : "",
            hasEvent ? "event" : ""
        ].filter(Boolean).join(" ");

        daysHTML += `<div class="${classes}">${i}</div>`;
    }

    // next month fillers
    for (let j = 1; j <= nextDaysCount; j++) {
        daysHTML += `<div class="day next-date">${j}</div>`;
    }

    daysContainer.innerHTML = daysHTML;

    getActiveDay(activeDay);
    updateEvents(activeDay);
    addDayClickListener();
}

function addDayClickListener() {
    const allDays = document.querySelectorAll(".day");

    allDays.forEach((dayEl) => {
        dayEl.addEventListener("click", () => {
            allDays.forEach(d => d.classList.remove("active"));

            const clicked = dayEl;
            const dayNum = Number(clicked.textContent);

            if (clicked.classList.contains("prev-date")) {
                prevMonth();
                setTimeout(() => {
                    const newDay = [...document.querySelectorAll(".day:not(.prev-date):not(.next-date)")]
                        .find(d => Number(d.textContent) === dayNum);
                    if (newDay) {
                        newDay.classList.add("active");
                        activeDay = dayNum;
                        getActiveDay(activeDay);
                        updateEvents(activeDay);
                    }
                }, 0);
                return;
            }

            if (clicked.classList.contains("next-date")) {
                nextMonth();
                setTimeout(() => {
                    const newDay = [...document.querySelectorAll(".day:not(.prev-date):not(.next-date)")]
                        .find(d => Number(d.textContent) === dayNum);
                    if (newDay) {
                        newDay.classList.add("active");
                        activeDay = dayNum;
                        getActiveDay(activeDay);
                        updateEvents(activeDay);
                    }
                }, 0);
                return;
            }

            clicked.classList.add("active");
            activeDay = dayNum;
            getActiveDay(activeDay);
            updateEvents(activeDay);
        });
    });
}

function getActiveDay(dayNum) {
    const d = new Date(year, month, dayNum);
    eventDayEl.textContent = d.toLocaleString("en-US", { weekday: "long" });
    eventDateEl.textContent = `${dayNum} ${months[month]} ${year}`;
}

// ---------- Events rendering ----------
function updateEvents(dayNum) {
    let eventsHTML = "";

    const dayObj = eventsArr.find(ev =>
        ev.day === dayNum && ev.month === month + 1 && ev.year === year
    );

    if (dayObj && Array.isArray(dayObj.events) && dayObj.events.length) {
        // Sort by start time (stored as 24h in ev.start)
        dayObj.events.sort((a, b) => {
            const aStart = a.start || parseAnyTo24((a.time || "").split("-")[0]?.trim()) || "00:00";
            const bStart = b.start || parseAnyTo24((b.time || "").split("-")[0]?.trim()) || "00:00";
            return timeToMinutes(aStart) - timeToMinutes(bStart);
        });

        dayObj.events.forEach((ev) => {
            eventsHTML += `
        <div class="event">
          <div class="title">
            <i class='bx bx-circle'></i>
            <h3 class="event-title">${escapeHTML(ev.title)}</h3>
          </div>
          <div class="event-time">
            <span class="event-time">${escapeHTML(ev.time)}</span>
          </div>
        </div>
      `;
        });
    } else {
        eventsHTML = `
      <div class="no-event">
        <h3>No Events</h3>
      </div>
    `;
    }

    eventsContainer.innerHTML = eventsHTML;
}

// ---------- Month navigation ----------
function prevMonth() {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    initCalendar();
}

function nextMonth() {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    initCalendar();
}

prevBtn?.addEventListener("click", prevMonth);
nextBtn?.addEventListener("click", nextMonth);

todayBtn?.addEventListener("click", () => {
    today = new Date();
    month = today.getMonth();
    year = today.getFullYear();
    activeDay = today.getDate();
    initCalendar();
});

// ---------- Add Event UI ----------
addEventBtn?.addEventListener("click", () => {
    addEventWrapper.classList.toggle("active");
});

addEventCloseBtn?.addEventListener("click", () => {
    addEventWrapper.classList.remove("active");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    if (!addEventWrapper) return;
    const clickedAddBtn = addEventBtn?.contains(e.target);
    const clickedInsideWrapper = addEventWrapper.contains(e.target);
    if (!clickedAddBtn && !clickedInsideWrapper) {
        addEventWrapper.classList.remove("active");
    }
});

// Title limit only
addEventTitle?.addEventListener("input", () => {
    addEventTitle.value = addEventTitle.value.slice(0, 60);
});

// Add event (input can be 24h or 12h; display is ALWAYS 12h)
addEventSubmit?.addEventListener("click", () => {
    const title = addEventTitle.value.trim();
    const from24 = parseAnyTo24(addEventFrom.value);
    const to24 = parseAnyTo24(addEventTo.value);

    if (!title || !from24 || !to24) {
        alert("Please fill all fields. Time examples: 13:30 or 1:30 PM");
        return;
    }

    if (timeToMinutes(to24) < timeToMinutes(from24)) {
        alert("End time must be after start time.");
        return;
    }

    // Duplicate title check for that day
    const dayObj = eventsArr.find(ev =>
        ev.day === activeDay && ev.month === month + 1 && ev.year === year
    );
    if (dayObj && dayObj.events.some(ev => ev.title === title)) {
        alert("Event already added");
        return;
    }

    const newEvent = {
        title,
        start: from24, // stored 24h
        end: to24,     // stored 24h
        time: `${formatTime12(from24)} - ${formatTime12(to24)}` // displayed 12h
    };

    if (dayObj) {
        dayObj.events.push(newEvent);
    } else {
        eventsArr.push({
            day: activeDay,
            month: month + 1,
            year,
            events: [newEvent],
        });
    }

    // Clear + close
    addEventWrapper.classList.remove("active");
    addEventTitle.value = "";
    addEventFrom.value = "";
    addEventTo.value = "";

    // Update UI
    updateEvents(activeDay);
    document.querySelector(".day.active")?.classList.add("event");

    saveEvents();
});

// ---------- Delete event ----------
eventsContainer?.addEventListener("click", (e) => {
    const eventEl = e.target.closest(".event");
    if (!eventEl) return;

    if (!confirm("Are you sure you want to delete this event?")) return;

    const title = eventEl.querySelector(".event-title")?.textContent;
    if (!title) return;

    const idx = eventsArr.findIndex(ev =>
        ev.day === activeDay && ev.month === month + 1 && ev.year === year
    );
    if (idx === -1) return;

    eventsArr[idx].events = eventsArr[idx].events.filter(ev => ev.title !== title);

    if (eventsArr[idx].events.length === 0) {
        eventsArr.splice(idx, 1);
        document.querySelector(".day.active")?.classList.remove("event");
    }

    updateEvents(activeDay);
    saveEvents();
});

// ---------- Boot ----------
getEvents();
initCalendar();
