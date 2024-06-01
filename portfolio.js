document.getElementById('showDetails').addEventListener('click', function() {
    var details = document.getElementById('personalDetails');
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
});
document.getElementById('showExp').addEventListener('click', function() {
    var details = document.getElementById('Experience');
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
});
document.getElementById('showCirtification').addEventListener('click', function() {
    var details = document.getElementById('cirtification');
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
});