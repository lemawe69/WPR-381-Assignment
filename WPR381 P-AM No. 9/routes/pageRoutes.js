// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

const { gamingEvents } = require('../data/events');
const { teamMembers } = require('../data/team');

let messages = [];

router.get('/', (req, res) => {
  const sortedEvents = gamingEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
  const upcomingEvents = sortedEvents.slice(0, 3);
  res.render('pages/home', { pageTitle: 'Home - Game Community Portal', upcomingEvents });
});

router.get('/about', (req, res) => {
    res.render('pages/about', {  pageTitle: 'About Us - Game Community Portal', teamMembers })
});

router.get('/events', (req, res) => {
    res.render('pages/events', {pageTitle: 'Events - Game Community Portal', gamingEvents })
});
router.get("/event/:id", (req, res)=>{
    const event = gamingEvents.find(e => e.id == req.params.id);
    if(!event){
        return res.status(404).send("Event not found");
    }
    res.render('pages/eventDetail', { event });
})

router.get('/contact', (req, res) => {
    res.render('pages/contact', { pageTitle: 'Contact Us - Game Community Portal', messages});
});

router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    messages.push({name, email, message});
    res.redirect(`/thankyou?name=${encodeURIComponent(name)}`);
});

router.get('/thankyou', (req, res) => { 
    const { name } = req.query;
    res.render ('pages/thankyou', { pageTitle: 'Thank You - Game Community Portal', name})
});

module.exports = router;
