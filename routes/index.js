var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Enquiry = require("../models/enquiry");

// Use body-parser middleware to parse JSON and URL-encoded form data
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new', { title: 'Express' });
});

// router.get('/new', function(req, res, next) {
//   res.render('new', { title: 'Express' });
// });

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

// POST route for form submission
router.post('/contact', async (req, res) => {
    const enquiry = await Enquiry.create(req.body);
    // console.log(enquiry);
    if (enquiry) {
        res.status(201).json({
            success: true,
            // data: enquiry
        });
    }else{
        res.status(201).json({
            success: true,
            data: req.body
        });
    }
});

router.get('/u23eyey-u9lRtKw-eKpA3G-e283ye-gyt45yt-vzN7jP2-QtVtRb-g8u', function(req, res, next) {
  res.render('thank_you', { title: 'Express' });
});

module.exports = router;
