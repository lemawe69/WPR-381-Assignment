// routes/pageRoutes.js

const express = require('express');
const router = express.Router();


// const teamMembers = [
//   { name: "Jan-Paul", role: "Backend Developer" }
// ];
const events = [
  {
    id: 1,
    title: "Tech Expo",
    date: "2025-06-10T10:00:00", // must be in ISO format
    location: "Cape Town",
    image: "GameDev-Banner.png",
    description: "Explore the future of tech with top industry experts."
  },
  {
    id: 2,
    title: "Hackathon",
    date: "2025-07-15",
    location: "Online",
    image: "GameDev-Contact.jpeg", ///can chjange these to eb more relevant
    description: "Join a 48-hour coding sprint with awesome prizes."
  },
  {
    id: 3,
    title: "Startup Pitch Day",
    date: "2025-08-05",
    location: "Johannesburg",
    // image: "pitch.jpg",
    description: "See the hottest new startups pitch live."
  },
  {
    id: 4,
    title: "Web Dev Workshop",
    date: "2025-08-22",
    location: "Pretoria",
    // image: "workshop.jpg",
    description: "Hands-on workshop on full-stack web development."
  }
];

let messages = [];

router.get('/', (req, res) => {
    const upcomingEvents = events.slice(0, 3);
    res.render('pages/home', { upcomingEvents });
});


router.get('/about', (req, res) => {
    res.render('pages/about')
});

router.get('/events', (req, res) => {
    res.render('pages/events', { events })
});
router.get("/event/:id", (req, res)=>{
    const event = events.find(e => e.id == req.params.id);
    if(!event){
        return res.status(404).send("Event not found");
    }
    res.render('pages/eventDetail', { event });
})
router.get('/contact', (req, res) => {
    res.render('pages/contact', {messages});
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
