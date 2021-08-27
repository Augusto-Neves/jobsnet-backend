const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    identity: { type: String, unique: true, required: true },
    cpf: { type: String, unique: true, required: true },
    name: { type: String, unique: false, required: true },
    birthDate: { type: String, unique: false, required: true },
    phone: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    gender: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    street: { type: String, unique: false, required: true },
    number: { type: String, unique: false, required: true },
    neighborhood: { type: String, unique: false, required: true },
    city: { type: String, unique: false, required: true },
    state: { type: String, unique: false, required: true },
    maritalStatus: { type: String, unique: false, required: true },
    hasVehicle: { type: Boolean, unique: false, required: true },
    hasLicence: { type: Boolean, unique: false, required: true }

}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);