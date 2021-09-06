const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

module.exports = mongoose.model('Classroom', mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    buildings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Building'
    }]
}), 'classrooms');


ClassroomSchema.plugin(idValidator);

