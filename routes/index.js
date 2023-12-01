var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Enquiry = require("../models/enquiry");
require('dotenv').config();
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

// Forgot password testing
// router.get('/new', function(req, res, next) {
//   // console.log(apiKey, apiUrl);
//   res.render('index', { title: 'Express' });
// });

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/service', function(req, res, next) {
  res.render('service');
});

// Service 1 - testing
router.get('/Facebook_Ads_Mastery', function(req, res, next) {
  res.render('Facebook_Ads_Mastery');
}); 

// Service 2 - testing
router.get('/Google_Business_Growth_Partner', function(req, res, next) {
  res.render('Google_Business_Growth_Partner');
}); 

// Service 3 - testing
router.get('/Meta_Platform_Transformation', function(req, res, next) {
  res.render('Meta_Platform_Transformation');
}); 


// POST route for form submission
router.post('/contact', async (req, res) => {
    const enquiry = await Enquiry.create(req.body);
    // console.log(enquiry);
    if (enquiry) {
      // console.log(process.env.MAIL_API);
      // const emailData = {
      //   apikey: process.env.MAIL_API,
      //   subject: 'Confirmation: Your Message Has Been Received',
      //   from: 'info@accennovate.com',
      //   to: req.body.email,
      //   bodyHtml: `
      //   <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0;">
      //       <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px;">
      //           <div style="text-align: center;">
      //               <img src="https://accennovate.com/img/AccennovateLogo.png" alt="Accennovate Logo" style="max-width: 150px; height: auto;">
      //               <h1>Contact Form Submission Confirmation</h1>
      //               <p>Thank you for contacting Accennovate Tech Solutions. We appreciate you taking the time to reach out to us.</p>
      //           </div>
      //           <img src="https://accennovate.com/img/about_img.png" alt="About" style="width: 100%;">
      //           <div style="margin-top: 20px; text-align: center;">
      //               <p>We have received your inquiry and will respond to you as soon as possible. In the meantime, you can find more information about our company and our products and services on our website at <a href="https://accennovate.com/">accennovate.com</a></p>
      //               <p>If you have any further questions, please do not hesitate to <a href="https://accennovate.com/contact">contact us</a></p>
      //           </div>
      //           <div>
      //               <br>
      //               <p>Sincerely,</p>
      //               <p>The Accennovate Team</p>
      //           </div>
      //           <div style="text-align: center;">
      //               <img src="https://accennovate.com/img/AccennovateLogo.png" alt="Accennovate Logo" style="width: 70%; margin: 0 auto;">
      //           </div>
      //           <footer style="text-align: center; color: gray;"><i>Copyright (C) 2023 Accennovate Tech Solutions. All rights reserved.</i></footer>
      //       </div>
      //   </div>`,
      //   // bodyText: 'Your plain text email content',
      //   isTransactional: true,
      // };

      // try {
      //   const response = await axios.post(apiUrl, emailData);
      //   console.log('Email sent successfully:', response.data);
      //   // Handle the success response here
      // } catch (error) {
      //   console.error('Error sending email:', error);
      //   // Handle the error response here
      // }
      
      // axios.post(apiUrl, emailData)
      //   .then(response => {
      //     console.log('Email sent successfully:', response.data);
      //     // Handle the success response here
      //   })
      //   .catch(error => {
      //     console.error('Error sending email:', error);
      //     // Handle the error response here
      //   });


        res.status(201).json({
            success: true,
            data: {
              apiKey: process.env.MAIL_API
            }
        });
    }else{
        res.status(201).json({
            success: true,
            data: req.body
        });
    }
});

router.get('/u23eyey-u9lRtKw-eKpA3G-e283ye-gyt45yt-vzN7jP2-QtVtRb-g8u', function(req, res, next) {
  res.render('thank_you', { title: 'Thank You' });
});

module.exports = router;
