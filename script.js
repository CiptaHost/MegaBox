document.addEventListener("DOMContentLoaded", function () {
            const loginForm = document.getElementById("login-form");
            const errorMessage = document.getElementById("error-message");

            loginForm.addEventListener("submit", function (e) {
                e.preventDefault();

                const username = document.getElementById("username").value;
                const password = document.getElementById("password").value;

                // Definisikan pasangan username dan password yang valid.
                const validCredentials = [
                    { username: "admin", password: "adminwebsite2023" },
                    { username: "admin2", password: "adminwebsite2023" }
                ];

                // Periksa apakah kombinasi username dan password ada dalam daftar yang valid.
                const isValid = validCredentials.some(credential => {
                    return credential.username === username && credential.password === password;
                });

                if (isValid) {
                    window.location.href = "https://app.matchboxid.my.id/user";
                } else {
                    errorMessage.textContent = "Username atau password salah.";
                }
            });
        });
