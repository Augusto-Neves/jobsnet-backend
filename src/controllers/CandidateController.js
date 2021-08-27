const Candidate = require('../models/Candidate');

module.exports = {
    async register(req, res) {
        const {
            identity,
            cpf,
            name,
            birthDate,
            phone,
            email,
            gender,
            cep,
            street,
            number,
            neighborhood,
            city,
            state,
            maritalStatus,
            hasVehicle,
            hasLicence,
        } = req.body;

        const newCandidate = new Candidate();

        newCandidate.identity = identity;
        newCandidate.cpf = cpf;
        newCandidate.name = name;
        newCandidate.birthDate = birthDate;
        newCandidate.phone = phone;
        newCandidate.email = email;
        newCandidate.gender = gender;
        newCandidate.cep = cep;
        newCandidate.street = street;
        newCandidate.number = number;
        newCandidate.neighborhood = neighborhood;
        newCandidate.city = city;
        newCandidate.state = state;
        newCandidate.maritalStatus = maritalStatus;
        newCandidate.hasVehicle = hasVehicle;
        newCandidate.hasLicence = hasLicence;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }
            return res.status(200).send(savedCandidate);
        })
    }
};