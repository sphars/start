/* Elements */
const searchBtn = document.getElementById('searchBtn');
const settingsBtn = document.getElementById('settings');
const weatherBtn = document.getElementById('weather');
const greeting = document.getElementById('greeting');

/* Functions */
function getGreeting(){
    let currentHour = new Date().getHours();
    let msg = "";
    if(currentHour >=0 && currentHour < 6){
        msg = "good early morning";
    } else if (currentHour >= 6 && currentHour < 12){
        msg = "good morning";
    } else if (currentHour >= 12 && currentHour < 18){
        msg = "good afternoon";
    } else{
        msg = "good evening";
    }

    msg += " sir/madam";
    return msg;
}

/* Events */
searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    let query = document.getElementById('searchTerm');
    console.log(query.value);
});

settingsBtn.addEventListener('click', function(){
    alert('this does nothing');
});

weatherBtn.addEventListener('click', function(){
    alert('this does nothing');
});

// run when document ready
document.addEventListener('DOMContentLoaded', function(){
    
    // update greeting
    greeting.textContent = getGreeting();
});
