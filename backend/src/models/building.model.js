const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

module.exports = mongoose.model('Building', mongoose.Schema({
    name: {
        type: String
    },
    floors: {
        type: Number
    },
    classrooms: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classroom'
    }]
}), 'buildings');

BuildingSchema.plugin(idValidator);