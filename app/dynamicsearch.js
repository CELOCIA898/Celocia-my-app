document.getElementById('searchInput').addEventListener('input', function() {
    var searchValue = this.value.toLowerCase();
    var listItems = document.querySelectorAll('#searchList li');
    
    listItems.forEach(function(item) {
        if (item.textContent.toLowerCase().indexOf(searchValue) !== -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});