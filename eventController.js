// eventController.js
// Import event model
Event = require('./eventModel');
// Handle index actions
exports.index = function (req, res) {
    Event.get(function (err, events) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Events retrieved successfully",
            data: events
        });
    });
};
// Handle view event info
exports.view = function (req, res) {
    Event.findById(req.params.event_id, function (err, event) {
        if (err)
            res.send(err);
        res.json({
            message: 'Event details loading..',
            data: event.eventDesc
        });
    });
};
// Handle event search
exports.eventsearch = function (req, res) {
    Event.findOne({ 'postcodes': req.params.searchcriteria}, function (err, event) {
        if (err)
            res.send(err);
        res.json({
            message: 'Searching...',
            data: event.eventDesc
        });
    });
};
