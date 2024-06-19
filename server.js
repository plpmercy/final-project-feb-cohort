const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let patients = [
    { id: 1, firstName: 'John', lastName: 'Doe', dob: '1980-01-01', phone: '1234567890', email: 'john.doe@example.com', address: '123 Main St, City, Country' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', dob: '1990-05-15', phone: '9876543210', email: 'jane.smith@example.com', address: '456 Elm St, City, Country' }
];

let outpatientVisits = [];
let inpatientVisits = [];

// Register a new patient
app.post('/patients', (req, res) => {
    const { firstName, lastName, dob, phone, email, address } = req.body;
    const newPatient = { id: patients.length + 1, firstName, lastName, dob, phone, email, address };
    patients.push(newPatient);
    res.status(201).json(newPatient);
});

// Get all patients
app.get('/patients', (req, res) => {
    res.json(patients);
});

// Save outpatient visit details
app.post('/outpatient', (req, res) => {
    const { visitReason, visitDate, medication, lastRefill, medicationChange, notes } = req.body;
    const newVisit = { visitReason, visitDate, medication, lastRefill, medicationChange, notes };
    outpatientVisits.push(newVisit);
    res.status(201).json(newVisit);
});

// Get all outpatient visits
app.get('/outpatient', (req, res) => {
    res.json(outpatientVisits);
});

// Save inpatient visit details
app.post('/inpatient', (req, res) => {
    const { admissionReason, admissionDate, dischargeDate, medication, lastRefill, medicationChange, notes } = req.body;
    const newVisit = { admissionReason, admissionDate, dischargeDate, medication, lastRefill, medicationChange, notes };
    inpatientVisits.push(newVisit);
    res.status(201).json(newVisit);
});

// Get all inpatient visits
app.get('/inpatient', (req, res) => {
    res.json(inpatientVisits);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


