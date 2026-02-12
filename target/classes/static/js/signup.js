document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const registerBtn = document.querySelector(".register-btn");
    const loginBtn = document.querySelector(".login-btn");

    // Safety check
    if (!container) return;

    // Button toggles (your existing behavior)
    registerBtn?.addEventListener("click", () => {
        container.classList.add("active");
    });

    loginBtn?.addEventListener("click", () => {
        container.classList.remove("active");
    });

    // URL-based behavior
    const params = new URLSearchParams(window.location.search);

    // If registration failed (server returned Signup with registerError),
    // keep register panel visible (so you can SEE the error)
    const hasRegisterError = document.querySelector("[data-register-error]") !== null;
    if (hasRegisterError) {
        container.classList.add("active");
    }

    // If user just registered successfully, animate to login panel
    if (params.has("registered")) {
        container.classList.add("active");      // start register
        setTimeout(() => {
            container.classList.remove("active"); // slide to login
        }, 150);
    }

    // If login failed, stay on login panel
    if (params.has("error")) {
        container.classList.remove("active");
    }
});
