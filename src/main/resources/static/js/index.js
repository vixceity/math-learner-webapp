const navbar = document.getElementById("navbar");
const openSidebarButton = document.getElementById("open-sidebar-button");
const closeSidebarButton = document.getElementById("close-sidebar-button");

function openSidebar() {
    navbar.classList.add("show");
}

function closeSidebar() {
    navbar.classList.remove("show");
}
