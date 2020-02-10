// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var eventSchema = mongoose.Schema({
    ID: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    eventType: String,
    eventNotice: String,
    closed: String,
    planned: String,
    dateStarted: {
        type: Date,
        default: Date.now
    },
    dateClosed: String,
    eventDesc: String,
    eventUpdated: String,
    geojson: String,
    ne: String,
    sw: String,
    postcodes: String
});
// Export Contact model
var Event = module.exports = mongoose.model('event', eventSchema);
module.exports.get = function (callback, limit) {
    Event.find(callback).limit(limit);
}