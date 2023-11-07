var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Enquiry = require("../models/enquiry");

const axios = require('axios');

const apiKey = process.env.MAIL_API; // Replace with your environment variable name
const apiUrl = 'https://api.elasticemail.com/v2/email/send';

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
  res.render('contact');
});

router.get('/service', function(req, res, next) {
  res.render('service');
});

// POST route for form submission
router.post('/contact', async (req, res) => {
    const enquiry = await Enquiry.create(req.body);
    // console.log(enquiry);
    if (enquiry) {

      const emailData = {
        apikey: apiKey,
        subject: 'Your Email Subject',
        from: 'info@accennovate.com',
        to: 'recipient1@example.com,recipient2@example.com',
        bodyHtml: '<html><body>Your HTML email content</body></html>',
        bodyText: 'Your plain text email content',
        isTransactional: true,
      };

      axios.post(apiUrl, emailData)
        .then(response => {
          console.log('Email sent successfully:', response.data);
          // Handle the success response here
        })
        .catch(error => {
          console.error('Error sending email:', error);
          // Handle the error response here
        });


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
