const searchBtn = document.getElementById('searchBtn');
const settingsBtn = document.getElementById('settings');
const weatherBtn = document.getElementById('weather');
const greeting = document.getElementById('greeting');

searchBtn.addEventListener('click', function(e){
    let query = document.getElementById('searchTerm');
    console.log(query.value);
    e.preventDefault();
});

settingsBtn.addEventListener('click', function(){
    alert('this does nothing');
});

weatherBtn.addEventListener('click', function(){
    alert('this does nothing');
});

document.addEventListener('DOMContentLoaded', function(){
    updateGreeting();
});

function updateGreeting(){
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    if(currentHour >=0 && currentHour < 6){
        greeting.textContent = "good early morning";
    } else if (currentHour >= 6 && currentHour < 12){
        greeting.textContent = "good morning";
    } else if (currentHour >= 12 && currentHour < 18){
        greeting.textContent = "good afternoon";
    } else{
        greeting.textContent = "good evening";
    }

    greeting.textContent += " sir/madam";
}