function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const category = document.getElementById("category").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !contact || !category || !message) {
        alert("Please fill in all fields.");
        return false;
    }
    alert(`Form Submitted! \nName: ${name} \nEmail: ${email} \nContact: ${contact} \nCategory: ${category} \nMessage: ${message}`);
    return false; // for demonstration, prevent actual submission
}