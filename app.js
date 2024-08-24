(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();



document.getElementById("sendButton").addEventListener("click", function() {
    // Get the values from the input fields
    const name = document.querySelector('.input-control.i-c-2 input[type="text"]').value;
    const email = document.querySelector('.input-control.i-c-2 input[type="email"]').value;
    const subject = document.querySelectorAll('.input-control input[type="text"]')[1].value;
    const message = document.querySelector('.input-control textarea').value;

    const url = `https://api.telegram.org/bot7313223445:AAEzoeZYJ3AJLsQGSAYDKU_Eu9q8PjCkrkw/sendMessage?chat_id=7484829584&text=${encodeURIComponent(jonatish)}&parse_mode=HTML`;

    // Create the message text
    const text = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    // Send the message to the Telegram bot
    fetch(url, { method: 'GET' })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("Message sent successfully!");
        } else {
            alert("Error sending message: " + data.description);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred. Please try again later.");
    });
});

3
