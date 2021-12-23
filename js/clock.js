(function() {
    function updateClock() {
        const clockContainer = document.querySelector('.clock');
        clockContainer.innerText = new Date().toLocaleTimeString();
        // clockContainer.style.color = 'red';
        // clockContainer.classList.add()
        // clockContainer.classList.remove()
        // clockContainer.classList.toggle()
    }
    updateClock();
    setInterval(updateClock, 1000);
})();
