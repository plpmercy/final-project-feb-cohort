document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const outpatientForm = document.getElementById('outpatient-form');
    const inpatientForm = document.getElementById('inpatient-form');
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');
    const modulesContainer = document.getElementById('modules-container');
    const outpatientContainer = document.getElementById('outpatient-container');
    const inpatientContainer = document.getElementById('inpatient-container');
    const outpatientPatientTable = document.getElementById('outpatient-patient-table').querySelector('tbody');
    const inpatientPatientTable = document.getElementById('inpatient-patient-table').querySelector('tbody');
    const backToModulesButton = document.getElementById('back-to-modules');
    const registerPatientButton = document.getElementById('register-patient-button');
    const switchToInpatientButton = document.getElementById('switch-to-inpatient');
    const switchToOutpatientButton = document.getElementById('switch-to-outpatient');
    const backToModulesFromOutpatientButton = document.getElementById('back-to-modules-from-outpatient');
    const backToModulesFromInpatientButton = document.getElementById('back-to-modules-from-inpatient');
    
    const dummyPatients = [
        { firstName: "John", lastName: "Doe", dob: "1990-01-01", phone: "1234567890", email: "john.doe@example.com", address: "123 Main St" },
        { firstName: "Jane", lastName: "Smith", dob: "1985-05-05", phone: "0987654321", email: "jane.smith@example.com", address: "456 Elm St" }
    ];

    function renderPatients() {
        outpatientPatientTable.innerHTML = '';
        inpatientPatientTable.innerHTML = '';
        dummyPatients.forEach(patient => {
            const patientRow = document.createElement('tr');
            patientRow.innerHTML = `
                <td>${patient.firstName}</td>
                <td>${patient.lastName}</td>
                <td>${patient.dob}</td>
                <td>${patient.phone}</td>
                <td>${patient.email}</td>
                <td>${patient.address}</td>
            `;
            outpatientPatientTable.appendChild(patientRow);
            inpatientPatientTable.appendChild(patientRow.cloneNode(true));
        });
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        loginContainer.style.display = 'none';
        modulesContainer.style.display = 'block';
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newPatient = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            dob: document.getElementById('dob').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value
        };
        dummyPatients.push(newPatient);
        document.getElementById('response-message').textContent = 'Patient registered successfully!';
        renderPatients();
        setTimeout(() => {
            document.getElementById('response-message').textContent = '';
            registerContainer.style.display = 'none';
            modulesContainer.style.display = 'block';
        }, 2000); // Navigate back to modules after 2 seconds
    });

    document.getElementById('outpatient-button').addEventListener('click', () => {
        modulesContainer.style.display = 'none';
        outpatientContainer.style.display = 'block';
        renderPatients();
    });

    document.getElementById('inpatient-button').addEventListener('click', () => {
        modulesContainer.style.display = 'none';
        inpatientContainer.style.display = 'block';
        renderPatients();
    });

    document.getElementById('logout-button').addEventListener('click', () => {
        modulesContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });

    outpatientForm.addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('outpatient-response').textContent = 'Outpatient details saved successfully!';
    });

    inpatientForm.addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('inpatient-response').textContent = 'Inpatient details saved successfully!';
    });

    backToModulesButton.addEventListener('click', () => {
        registerContainer.style.display = 'none';
        modulesContainer.style.display = 'block';
    });

    registerPatientButton.addEventListener('click', () => {
        modulesContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    });

    switchToInpatientButton.addEventListener('click', () => {
        outpatientContainer.style.display = 'none';
        inpatientContainer.style.display = 'block';
    });

    switchToOutpatientButton.addEventListener('click', () => {
        inpatientContainer.style.display = 'none';
        outpatientContainer.style.display = 'block';
    });

    backToModulesFromOutpatientButton.addEventListener('click', () => {
        outpatientContainer.style.display = 'none';
        modulesContainer.style.display = 'block';
    });

    backToModulesFromInpatientButton.addEventListener('click', () => {
        inpatientContainer.style.display = 'none';
        modulesContainer.style.display = 'block';
    });

    renderPatients();
});

