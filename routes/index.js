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
    console.log(enquiry);
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
  // const formData = req.body;
  // console.log(req.body);
  // // Handle the form data as needed, e.g., save it to a database or send an email
  // // console.log(formData);
  // // console.log(formData.name);
  // var data = {
  //   name: formData.name,
  //   phone: formData.phone,
  //   whatsapp: formData.whatsapp,
  //   email: formData.email,
  //   businessName: formData.businessName,
  //   // Add more fields as needed
  // }
  // console.log('Form data -----');
  // console.log(data);
  // // Simulate a response, assuming it was successful
  // const response = {
  //   ok: true
  // };

  // if (response.ok) {
  //   // Request was successful
  //   res.status(200).send('Form submitted successfully');
  // } else {
  //   // Request failed
  //   res.status(500).send('Form submission failed');
  // }
});


module.exports = router;
