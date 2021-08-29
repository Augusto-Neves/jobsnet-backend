const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    identity: { type: String, unique: true, required: true },
    cpf: { type: String, unique: true, required: true },
    name: { type: String, unique: false, required: true },
    jobOpportunity: {type: String, unique: false, required: true},
    birthDate: { type: String, unique: false, required: true },
    phone1: { type: String, unique: false, required: false },
    phone2: { type: String, unique: false, required: false },
    cellPhone: {type: String, unique: true, required: true},
    linkedin: {type: String, unique: false, required: false},
    email: { type: String, unique: true, required: true },
    gender: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    street: { type: String, unique: false, required: false },
    number: { type: String, unique: false, required: true },
    neighborhood: { type: String, unique: false, required: false },
    city: { type: String, unique: false, required: false },
    state: { type: String, unique: false, required: false },
    maritalStatus: { type: String, unique: false, required: false },
    hasLicence: { type: Boolean, unique: false, required: false },
    hasVehicle: { type: Boolean, unique: false, required: false }

}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);