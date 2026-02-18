document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    if (!container) return;

    // Attach to ALL register/login buttons (desktop + mobile)
    document.querySelectorAll(".register-btn").forEach((btn) => {
        btn.addEventListener("click", () => container.classList.add("active"));
    });

    document.querySelectorAll(".login-btn").forEach((btn) => {
        btn.addEventListener("click", () => container.classList.remove("active"));
    });

    const params = new URLSearchParams(window.location.search);

    // If registration failed, keep register panel visible
    const hasRegisterError = document.querySelector("[data-register-error]") !== null;
    if (hasRegisterError) container.classList.add("active");


    if (params.has("registered")) {
        container.classList.add("active");
        const url = new URL(window.location.href);
        url.searchParams.delete("registered");
        window.history.replaceState({}, "", url);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setTimeout(() => container.classList.remove("active"), 120);
            });
        });
    }




    if (params.has("error")) {
        container.classList.remove("active");
    }
});
