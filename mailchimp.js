// const mailchimp = require('mailchimp');

// const client = mailchimp.createClient({
//   apiKey: 'fd7189dbbe6e496da8bd46707b83327d-us8'
// });

// client.post('/lists/03396e57ca40/members', {
//   email_address: 'accennovate.office@gmail.com'
// })
// .then((response) => {
//   console.log('Successfully added subscriber to mailing list');
// })
// .catch((error) => {
//   console.log('Failed to add subscriber to mailing list:', error);
// });

// ####################################################################

// const mailchimp = require('mailchimp');

// const client = mailchimp.createClient({
//   apiKey: 'fd7189dbbe6e496da8bd46707b83327d'
// //   apiKey: 'fd7189dbbe6e496da8bd46707b83327d-us8'
// });

// async function sendEmail(userEmail, campaignLink) {
//   const campaignId = campaignLink.split('/')[4];

//   const response = await client.post(`/campaigns/${campaignId}/actions/send`, {
//     recipients: [
//       {
//         email_address: userEmail
//       }
//     ]
//   });

//   if (response.status === 'sent') {
//     console.log('Email sent to user');
//   } else {
//     console.error('Failed to send email to user:', response.error);
//   }
// }

// // Get the user's email address from the contact form submission.
// // const userEmail = request.body.email;
// const userEmail = "mahodar.majgaonkar@gmail.com";

// // Send the email to the user using the Mailchimp campaign link.
// sendEmail(userEmail, 'https://mailchi.mp/03396e57ca40/thank-you-for-contacting-accennovate-tech-solutions');

const mailchimpClient = require("@mailchimp/mailchimp_transactional")(
    "fd7189dbbe6e496da8bd46707b83327d"
  );
  
  const run = async () => {
    const response = await mailchimpClient.messages.sendTemplate({
      template_name: "thank-you-for-contacting-accennovate-tech-solutions",
      template_content: [{}],
      message: {},
    });
    console.log(response);
  };
  
  run();
  