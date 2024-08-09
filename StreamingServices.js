document.querySelector('form').addEventListener('submit', function(event) {
    if (document.getElementById('Music').checked) {
        window.location.href = 'file:///C:/Users/tripat/Streaming%20Websites%20Ranked/Music%20websites.html';
        event.preventDefault(); 
    }
    if (document.getElementById('Movies').checked) {
        window.location.href = 'https://example-music-site.com';
        event.preventDefault(); 
    }
    if (document.getElementById('TVShows').checked) {
        window.location.href = 'https://example-music-site.com';
        event.preventDefault(); 
    }
})