const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve the feedback form
app.get('/', (req, res) => {
    res.render('feedback');
});

// Handle form submission and send the thank-you email
app.post('/send-feedback', (req, res) => {
    const { name, email, feedback } = req.body;

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'karthikkadimi21@', // Replace with your email
            pass: 'Chinu@2004'   // Replace with your email password or app-specific password
        }
    });

    // Set up the email options
    const mailOptions = {
        from: 'karthikkadimi21@gmail.com',
        to: email,
        subject: 'Thank You for Your Feedback!',
        text: `Dear ${name},\n\nThank you for your feedback! We appreciate your input.\n\nBest regards,\nYour Company Name`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('An error occurred while sending the email.');
        } else {
            console.log('Email sent:', info.response);
            res.send('Thank you for your feedback! A confirmation email has been sent to you.');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});