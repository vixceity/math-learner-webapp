// Get parameters from URL
const params = new URLSearchParams(window.location.search);
const subject = params.get("subject");
const unit = params.get("unit");

// Update title
document.getElementById("notes-title").textContent =
    `${subject.toUpperCase()} — Unit ${unit}`;

// Insert notes content
const contentBox = document.getElementById("notes-content");

if (notesData[subject] && notesData[subject][unit]) {
    contentBox.innerHTML = notesData[subject][unit];
} else {
    contentBox.innerHTML = "<p>No notes found for this unit.</p>";
}

// BACK BUTTON
document.getElementById("back-btn").onclick = () => {
    window.location.href = `../${subject}.html`;
};
