let count = 0;
let progress = document.querySelector(".progress .fill")

setInterval(function() {
    if (count < 100) {
        count++;
        progress.style.width = count + '%';
    }
}, 30);
