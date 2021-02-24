const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', function(e){
    let query = document.getElementById('searchTerm');
    console.log(query.value);
    e.preventDefault();
})