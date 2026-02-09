const navbar = document.getElementById('navbar');

function openSidebar() {
    navbar.classList.add('show');
}

function closeSidebar() {
    navbar.classList.remove('show');
}
const url = `https:math-learner-webapp.onrender.com';
const interval = 30000; // Interval in milliseconds (30 seconds)
//Reloader Function
function reloadWebsite() {
  axios.get(url)
    .then(response => {
      console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
    })
    .catch(error => {
      console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
    });
}

setInterval(reloadWebsite, interval);