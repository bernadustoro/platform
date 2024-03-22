var home = document.getElementById('pills-home-tab');
var tentangBtn = document.getElementById('pills-news-tab');
var kontenhome = document.getElementById('pills-home');
var kontennews = document.getElementById('pills-news');

var homecopy = kontenhome.cloneNode(true);
tentangBtn.addEventListener('click', function() {
    kontenhome.innerHTML = kontennews.innerHTML;
});

home.addEventListener('click', function() {
    kontenhome.innerHTML = homecopy.innerHTML;
});