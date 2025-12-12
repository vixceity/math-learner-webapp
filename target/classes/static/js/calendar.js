const calendar = document.querySelector(".calendar"),
    date = document.querySelector(".date"),
    daysContainer = document.querySelector(".days"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    todayBtn = document.querySelector(".today-btn"),
    addEventBtn = document.querySelector(".add-event"),
    addEventWrapper = document.querySelector(".add-event-wrapper"),
    addEventCloseBtn = document.querySelector(".close"),
    addEventTitle = document.querySelector(".event-name"),
    addEventFrom = document.querySelector(".event-time-from"),
    addEventTo = document.querySelector(".event-time-to"),
    eventDay = document.querySelector(".event-day"),
    eventDate = document.querySelector(".event-date"),
    eventsContainer = document.querySelector(".events"),
    addEventSubmit = document.querySelector(".add-event-btn");
/* test */
let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Events array to store events
let eventsArr = [];

// Function to get events from local storage
function getEvents() {
    if (localStorage.getItem("events") === null) {
        return;
    }
    eventsArr = JSON.parse(localStorage.getItem("events"));
}

// Function to save events in local storage
function saveEvents() {
    localStorage.setItem("events", JSON.stringify(eventsArr));
}

// Function to convert time to 12-hour format with AM/PM
function convertTime(time) {
    let timeArr = time.split(":");
    let timeHour = parseInt(timeArr[0]);
    let timeMin = timeArr[1];
    let timeFormat = timeHour >= 12 ? "PM" : "AM";
    timeHour = timeHour % 12 || 12; // Convert 0 to 12 for 12 AM
    return `${timeHour}:${timeMin} ${timeFormat}`;
}

// Function to initialize the calendar
function initCalendar() {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDaysCount = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay(); // 0 for Sunday, 1 for Monday, etc.
    const nextDaysCount = 7 - lastDay.getDay() - 1;

    date.innerHTML = months[month] + " " + year;

    let days = "";

    // Days from previous month
    for (let x = day; x > 0; x--) {
        days += `<div class="day prev-date">${prevDaysCount - x + 1}</div>`;
    }

    // Days for current month
    for (let i = 1; i <= lastDate; i++) {
        let event = false;
        eventsArr.forEach((eventObj) => {
            if (
                eventObj.day === i &&
                eventObj.month === month + 1 &&
                eventObj.year === year
            ) {
                event = true;
            }
        });

        if (i === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth()) {
            activeDay = i; // Set activeDay to today's date
            getActiveDay(i);
            updateEvents(i);

            if (event) {
                days += `<div class="day today active event">${i}</div>`;
            } else {
                days += `<div class="day today active">${i}</div>`;
            }
        } else {
            if (event) {
                days += `<div class="day event">${i}</div>`;
            } else {
                days += `<div class="day">${i}</div>`;
            }
        }
    }

    // Days from next month
    for (let j = 1; j <= nextDaysCount; j++) {
        days += `<div class="day next-date">${j}</div>`;
    }

    daysContainer.innerHTML = days;
    addDayClickListener();
}

// Function to add click listener to days
function addDayClickListener() {
    const days = document.querySelectorAll(".day");
    days.forEach((day) => {
        day.addEventListener("click", (e) => {
            // Remove active class from all days
            days.forEach((d) => {
                d.classList.remove("active");
            });

            if (e.target.classList.contains("prev-date")) {
                prevMonth();
                setTimeout(() => {
                    const newDays = document.querySelectorAll(".day");
                    newDays.forEach((newDay) => {
                        if (
                            !newDay.classList.contains("prev-date") &&
                            Number(newDay.innerHTML) === Number(e.target.innerHTML)
                        ) {
                            newDay.classList.add("active");
                            activeDay = Number(newDay.innerHTML);
                            getActiveDay(activeDay);
                            updateEvents(activeDay);
                        }
                    });
                }, 100);
            } else if (e.target.classList.contains("next-date")) {
                nextMonth();
                setTimeout(() => {
                    const newDays = document.querySelectorAll(".day");
                    newDays.forEach((newDay) => {
                        if (
                            !newDay.classList.contains("next-date") &&
                            Number(newDay.innerHTML) === Number(e.target.innerHTML)
                        ) {
                            newDay.classList.add("active");
                            activeDay = Number(newDay.innerHTML);
                            getActiveDay(activeDay);
                            updateEvents(activeDay);
                        }
                    });
                }, 100);
            } else {
                e.target.classList.add("active");
                activeDay = Number(e.target.innerHTML);
                getActiveDay(activeDay);
                updateEvents(activeDay);
            }
        });
    });
}

// Function to get active day details
function getActiveDay(date) {
    const day = new Date(year, month, date);
    const dayName = day.toLocaleString("en-US", { weekday: "long" });
    eventDay.innerHTML = dayName;
    eventDate.innerHTML = `${date} ${months[month]} ${year}`;
}

// Function to update events for active day
function updateEvents(date) {
    let eventsHTML = "";
    eventsArr.forEach((eventObj) => {
        if (
            eventObj.day === date &&
            eventObj.month === month + 1 &&
            eventObj.year === year
        ) {
            eventObj.events.forEach((event) => {
                eventsHTML += `
                <div class="event">
                    <div class="title">
                        <i class='bx bx-circle'></i>
                        <h3 class="event-title">${event.title}</h3>
                    </div>
                    <div class="event-time">
                        <span class="event-time">${event.time}</span>
                    </div>
                </div>
                `;
            });
        }
    });

    if (eventsHTML === "") {
        eventsHTML = `
        <div class="no-event">
            <h3>No Events</h3>
        </div>`;
    }
    eventsContainer.innerHTML = eventsHTML;
}

// Function to go to previous month
function prevMonth() {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    initCalendar();
}

// Function to go to next month
function nextMonth() {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    initCalendar();
}

// Event Listeners for month navigation
prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

// Event Listener for today button
todayBtn.addEventListener("click", () => {
    today = new Date();
    month = today.getMonth();
    year = today.getFullYear();
    initCalendar();
});

// Event Listeners for add event button and close button
addEventBtn.addEventListener("click", () => {
    addEventWrapper.classList.toggle("active");
});

addEventCloseBtn.addEventListener("click", () => {
    addEventWrapper.classList.remove("active");
});

// Close add event wrapper when clicking outside
document.addEventListener("click", (e) => {
    if (e.target !== addEventBtn && !addEventWrapper.contains(e.target) && !addEventBtn.contains(e.target)) {
        addEventWrapper.classList.remove("active");
    }
});

// Input field character limits and formatting
addEventTitle.addEventListener("input", (e) => {
    addEventTitle.value = addEventTitle.value.slice(0, 60);
});
addEventFrom.addEventListener("input", (e) => {
    addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, "");
    if (addEventFrom.value.length === 2) {
        addEventFrom.value += ":";
    }
    if (addEventFrom.value.length > 5) {
        addEventFrom.value = addEventFrom.value.slice(0, 5);
    }
});
addEventTo.addEventListener("input", (e) => {
    addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, "");
    if (addEventTo.value.length === 2) {
        addEventTo.value += ":";
    }
    if (addEventTo.value.length > 5) {
        addEventTo.value = addEventTo.value.slice(0, 5);
    }
});

// Event listener for adding an event
addEventSubmit.addEventListener("click", () => {
    const eventTitle = addEventTitle.value;
    const eventTimeFrom = addEventFrom.value;
    const eventTimeTo = addEventTo.value;

    if (eventTitle === "" || eventTimeFrom === "" || eventTimeTo === "") {
        alert("Please fill all the fields");
        return;
    }

    // Check correct time format 24 hour
    const timeFromArr = eventTimeFrom.split(":");
    const timeToArr = eventTimeTo.split(":");
    if (
        timeFromArr.length !== 2 ||
        timeToArr.length !== 2 ||
        parseInt(timeFromArr[0]) > 23 ||
        parseInt(timeFromArr[1]) > 59 ||
        parseInt(timeToArr[0]) > 23 ||
        parseInt(timeToArr[1]) > 59
    ) {
        alert("Invalid Time Format");
        return;
    }

    const timeFrom = convertTime(eventTimeFrom);
    const timeTo = convertTime(eventTimeTo);

    // Check if event is already added
    let eventExist = false;
    eventsArr.forEach((eventObj) => {
        if (
            eventObj.day === activeDay &&
            eventObj.month === month + 1 &&
            eventObj.year === year
        ) {
            eventObj.events.forEach((singleEvent) => {
                if (singleEvent.title === eventTitle) {
                    eventExist = true;
                }
            });
        }
    });
    if (eventExist) {
        alert("Event already added");
        return;
    }

    const newEvent = {
        title: eventTitle,
        time: `${timeFrom} - ${timeTo}`,
    };

    let eventAdded = false;
    if (eventsArr.length > 0) {
        eventsArr.forEach((item) => {
            if (
                item.day === activeDay &&
                item.month === month + 1 &&
                item.year === year
            ) {
                item.events.push(newEvent);
                eventAdded = true;
            }
        });
    }

    if (!eventAdded) {
        eventsArr.push({
            day: activeDay,
            month: month + 1,
            year: year,
            events: [newEvent],
        });
    }

    addEventWrapper.classList.remove("active");
    addEventTitle.value = "";
    addEventFrom.value = "";
    addEventTo.value = "";
    updateEvents(activeDay);

    // Select active day and add event class if not added
    const activeDayEl = document.querySelector(".day.active");
    if (activeDayEl && !activeDayEl.classList.contains("event")) {
        activeDayEl.classList.add("event");
    }
    saveEvents(); // Save events after adding
});

// Function to delete event when clicked on event
eventsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("event")) {
        if (confirm("Are you sure you want to delete this event?")) {
            const eventTitle = e.target.children[0].children[1].innerHTML;
            eventsArr.forEach((eventObj) => {
                if (
                    eventObj.day === activeDay &&
                    eventObj.month === month + 1 &&
                    eventObj.year === year
                ) {
                    eventObj.events.forEach((item, index) => {
                        if (item.title === eventTitle) {
                            eventObj.events.splice(index, 1);
                        }
                    });
                    // If no events left in a day then remove that day from eventsArr
                    if (eventObj.events.length === 0) {
                        eventsArr.splice(eventsArr.indexOf(eventObj), 1);
                        // Remove event class from day
                        const activeDayEl = document.querySelector(".day.active");
                        if (activeDayEl && activeDayEl.classList.contains("event")) {
                            activeDayEl.classList.remove("event");
                        }
                    }
                }
            });
            updateEvents(activeDay);
            saveEvents(); // Save events after deleting
        }
    }
});

// Initial calls
getEvents(); // Load events on startup
initCalendar(); // Initialize calendar display
