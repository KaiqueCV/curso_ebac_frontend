document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;

    if (campoB > campoA) {
        document.getElementById('msg').textContent = 'Sucess';
        document.getElementById('msg').classList.remove('error');
    } else {
        document.getElementById('msg').textContent = 'The value of field B must be greater than field A';
        document.getElementById('msg').classList.remove('success');
    }
});