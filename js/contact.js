function submitWithJS() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var formData = {
        name: name,
        email: email,
        message: message
    };

    localStorage.setItem('formDataJS', JSON.stringify(formData));

    window.location.href = 'form-data.html';
}