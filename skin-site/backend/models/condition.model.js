const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const conditionSchema = new Schema({
    condition: { type: String, required: true },
    symptoms: { type: String, required: true },
    description: { type: String, required: true },
    treatment: { type: String, required: true },

});

const Condition = mongoose.model('Condition', conditionSchema);

module.exports = Condition;