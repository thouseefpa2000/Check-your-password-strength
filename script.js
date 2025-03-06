document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const checkBtn = document.getElementById("checkBtn");
    const strengthMessage = document.getElementById("strengthMessage");

    checkBtn.addEventListener("click", function () {
        const password = passwordInput.value;
        let strength = checkPasswordStrength(password);

        strengthMessage.textContent = strength.message;
        strengthMessage.style.color = strength.color;
    });

    function checkPasswordStrength(password) {
        let strength = {
            message: "Weak Password 😞",
            color: "red"
        };

        if (password.length >= 8) {
            if (/[A-Z]/.test(password) && /\d/.test(password) && /[@$!%*?&]/.test(password)) {
                strength.message = "Strong Password 💪";
                strength.color = "green";
            } else if (/[A-Za-z\d@$!%*?&]/.test(password)) {
                strength.message = "Medium Password 😐";
                strength.color = "orange";
            }
        }

        return strength;
    }
});
