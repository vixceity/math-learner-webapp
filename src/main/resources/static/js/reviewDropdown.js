
document.addEventListener("click", (e) => {
    const btn = e.target.closest(".extra-btn");
    if (!btn) return;

    const buttonsRow = btn.closest(".unit-buttons");
    if (!buttonsRow) return;

    const panel = buttonsRow.nextElementSibling;
    if (!panel || !panel.classList.contains("extra-panel")) return;

    const wrapper = panel.querySelector(".video-wrapper");
    if (!wrapper) return;

    const isOpen = !panel.hasAttribute("hidden");


    if (isOpen) {
        panel.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");


        const iframe = wrapper.querySelector("iframe");
        if (iframe) iframe.src = "";
        return;
    }


    panel.removeAttribute("hidden");
    btn.setAttribute("aria-expanded", "true");


    const raw = btn.dataset.videoId || "";
    const videoId = raw.split("&")[0].split("?")[0];


    const start = parseInt(btn.dataset.start || "0", 10);
    const startParam = Number.isFinite(start) && start > 0 ? `?start=${start}` : "";

    if (!videoId) {
        wrapper.innerHTML = `<p class="extra-placeholder">Extra video coming soon.</p>`;
        return;
    }

    let iframe = wrapper.querySelector("iframe");
    if (!iframe) {
        wrapper.innerHTML = "";

        iframe = document.createElement("iframe");
        iframe.allowFullscreen = true;
        iframe.loading = "lazy";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

        wrapper.appendChild(iframe);
    }

    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}${startParam}`;
});