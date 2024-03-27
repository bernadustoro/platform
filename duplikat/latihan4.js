var home = document.getElementById('pills-home-tab');
var newsBtn = document.getElementById('pills-news-tab');
var scheduleBtn = document.getElementById('pills-schedule-tab');
var memBtn = document.getElementById('pills-contact-tab');

var kontenhome = document.getElementById('pills-home');
var kontennews = document.getElementById('pills-news');
var kontenschedule = document.getElementById('pills-schedule');
var kontenmem = document.getElementById('pills-member');

var homecopy = kontenhome.cloneNode(true);
newsBtn.addEventListener('click', function() {
    kontenhome.innerHTML = kontennews.innerHTML;
});

home.addEventListener('click', function() {
    kontenhome.innerHTML = homecopy.innerHTML;
});

scheduleBtn.addEventListener('click', function() {
    kontenhome.innerHTML = kontenschedule.innerHTML;
});
memBtn.addEventListener('click', function() {
    kontenhome.innerHTML = kontenmem.innerHTML;
});