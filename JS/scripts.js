document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert('Obrigado por se inscrever, ' + email + '!');
    window.location.href = 'thankyou.html';
});
