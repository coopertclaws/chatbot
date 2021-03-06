// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

// Import contact controller
var eventController = require('./eventController');
// Contact routes
router.route('/events')
    .get(eventController.index)

router.route('/events/:event_id')
    .get(eventController.view)

router.route('/eventsearch/:searchcriteria')
    .get(eventController.eventsearch)

// Export API routes
module.exports = router;