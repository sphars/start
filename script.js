const searchBtn = document.getElementById('searchBtn');
const settingsBtn = document.getElementById('settings');
const weatherBtn = document.getElementById('weather');

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