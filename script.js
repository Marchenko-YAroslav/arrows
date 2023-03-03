let up = document.getElementById('arrowTop')
let down = document.getElementById('arrowDown')

up.onclick = function() {
window.scrollTo(pageXOffset, 0);
};

window.addEventListener('scroll', function() {
arrowTop.hidden = (pageYOffset < 700);
});


down.onclick = function() {
window.scrollTo(pageXOffset, 2000);
};

window.addEventListener('scroll', function() {
arrowDown.hidden = (pageYOffset >= 700);
});