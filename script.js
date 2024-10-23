


// ========== Patient Sign-up (in navbar) ==========


// Signup button functionality
document.getElementById('signup-btn').onclick = function() {
    document.getElementById('signup-modal').style.display = "block"; // Show signup modal
    document.getElementById('signup-name').focus();
}

// Doctor login button functionality
document.getElementById('doctorlogin').onclick = function() {
    location.href = "login.html"; // Redirect to doctor login page
}


// Close signup modal
document.querySelector('.close-signup').onclick = function() {
    document.getElementById('signup-modal').style.display = "none";
    document.getElementById('signup-feedback').style.display = "none"; // Hide feedback
}

// Handle the login form submission (Patient)
document.getElementById('login-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    const user = patients.find(patient => patient.email === username && patient.password === password);

    if (user) {
        alert('Login successful!');
        location.href = "profile.html"; // Redirect to profile page
    } else {
        document.getElementById('login-feedback').textContent = "Invalid email or password.";
        document.getElementById('login-feedback').style.display = "block"; // Show feedback
    }
}

// Handle the signup form submission (Patient)
document.getElementById('signup-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    const patients = JSON.parse(localStorage.getItem('patients')) || [];

    // Check if email already exists
    const existingPatient = patients.find(patient => patient.email === email);
    if (existingPatient) {
        document.getElementById('signup-feedback').textContent = "Email already registered.";
        document.getElementById('signup-feedback').style.display = "block";
    } else {
        // Save new patient data
        const newPatient = { name, email, password };
        patients.push(newPatient);
        localStorage.setItem('patients', JSON.stringify(patients));

        alert('Signup successful! You can now log in.');
        document.getElementById('signup-modal').style.display = "none"; // Close signup modal
        document.getElementById('signup-form').reset(); // Reset form
    }
}

// Close modal when clicking outside it
window.onclick = function(event) {
    if (event.target === document.getElementById('login-modal')) {
        document.getElementById('login-modal').style.display = "none";
        document.getElementById('login-feedback').style.display = "none";
    }
    if (event.target === document.getElementById('signup-modal')) {
        document.getElementById('signup-modal').style.display = "none";
        document.getElementById('signup-feedback').style.display = "none";
    }
}

// Close modal when pressing the "Esc" key
window.onkeydown = function(event) {
    if (event.key === "Escape") {
        document.getElementById('login-modal').style.display = "none";
        document.getElementById('login-feedback').style.display = "none";
        document.getElementById('signup-modal').style.display = "none";
        document.getElementById('signup-feedback').style.display = "none";
    }
}


const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        const patients = JSON.parse(localStorage.getItem('patients')) || [];

        const userExists = patients.find(patient => patient.email === email);

        if (userExists) {
            alert('User with this email already exists!');
        } else {
            const newUser = { name, email, password };
            patients.push(newUser);
            localStorage.setItem('patients', JSON.stringify(patients));

            alert('Signup successful!');
            signupForm.reset();
        }
    });
}

// ========== Patient Login ==========
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const patients = JSON.parse(localStorage.getItem('patients')) || [];

        const user = patients.find(patient => patient.email === email && patient.password === password);

        if (user) {
            alert('Login successful!');
            // Redirect or perform actions after login
        } else {
            alert('Invalid email or password!');
        }
    });
}

// ========== Doctor Login (from login.html) ==========
const loginDoctorForm = document.getElementById('loginDoctorForm');
if (loginDoctorForm) {
    loginDoctorForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('doctorEmail').value;
        const password = document.getElementById('doctorPassword').value;

        const doctors = JSON.parse(localStorage.getItem('doctors')) || [];

        const doctorExists = doctors.find(doctor => doctor.email === email && doctor.password === password);

        if (doctorExists) {
            alert('Login successful as Doctor!');
            // Redirect or perform actions after doctor login
        } else {
            alert('Invalid email or password!');
        }
    });
}

// ========== Sample Data (for doctors) ==========
if (!localStorage.getItem('doctors')) {
    const doctors = [
        { name: 'Dr. Zeus', email: 'zeus@healingledger.com', password: 'zeus123' },
        { name: 'Dr. Athena', email: 'athena@healingledger.com', password: 'athena123' }
    ];
    localStorage.setItem('doctors', JSON.stringify(doctors));
}
