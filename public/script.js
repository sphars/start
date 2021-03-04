/* Elements */
const searchBar = document.getElementById('searchbar');
// const settingsBtn = document.getElementById('settings');
// const weatherBtn = document.getElementById('weather');
const message = document.getElementById('message');

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

function search(event){
    let key = event.key;
    if (key == "Enter"){
        event.preventDefault();
        let text = searchBar.value;
        let url = "https://duckduckgo.com/?q=" + text;
        window.open(url, '_self');
    }
}

/* Events */

// settingsBtn.addEventListener('click', function(){
//     alert('this does nothing');
// });

// weatherBtn.addEventListener('click', function(){
//     alert('this does nothing');
// });

// run when document ready
document.addEventListener('DOMContentLoaded', function(){
    
    // update greeting
    message.textContent = getGreeting();
});
