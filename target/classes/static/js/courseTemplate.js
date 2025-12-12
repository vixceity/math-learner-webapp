const units = document.querySelectorAll(".unit");

units.forEach(unit => {
    const btn = unit.querySelector(".unit-toggle");
    const content = unit.querySelector(".unit-content");

    btn.addEventListener("click", () => {
        const isOpen = unit.classList.contains("open");

        // Close all units except clicked
        units.forEach(u => {
            u.classList.remove("open");
            u.querySelector(".unit-content").classList.remove("open");
        });

        // Open clicked one
        if (!isOpen) {
            unit.classList.add("open");
            content.classList.add("open");
        }
    });
});
