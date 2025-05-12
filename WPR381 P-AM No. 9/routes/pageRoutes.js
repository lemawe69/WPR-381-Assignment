// routes/pageRoutes.js

const express = require('express');
const router = express.Router();


// const teamMembers = [
//   { name: "Jan-Paul", role: "Backend Developer" }
// ];
// const events = [
//   { title: "Tech Expo", date: "2025-06-15", location: "Cape Town" }
// ];

let messages = [];

router.get('/', (req, res) => { 
    res.render("pages/home")
});

router.get('/about', (req, res) => {
    res.render('pages/about')
});

router.get('/events', (req, res) => {
    res.render('pages/events')
});

router.get('/contact', (req, res) => {
    res.render('pages/contact')
});
router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    messages.push({name, email, message});
    res.redirect(`/thankyou?name=${encodeURIComponent(name)}`);
});
router.get('/thankyou', (req, res) => { 
    const { name } = req.query;
    res.render ('pages/thankyou', {name})
});

module.exports = router;
