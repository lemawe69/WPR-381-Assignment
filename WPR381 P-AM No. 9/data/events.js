const gamingEvents = [
  {
    id: "event_valorant_2025",
    title: "Valorant Champions 2025",
    date: new Date("2025-06-15T10:00:00"),
    location: "Los Angeles",
    game: "Valorant",
    genre: "FPS",
    image: "valorant.jpg",
    registrationOpen: true,
    registrationDeadline: new Date("2025-06-01T23:59:59"),
    description: "The ultimate Valorant tournament where the best teams from around the world battle for the championship title."
  },
  {
    id: "event_lol_champ_2025",
    title: "League of Legends World Championship",
    date: new Date("2025-07-20T12:00:00"),
    location: "Online",
    game: "League of Legends",
    genre: "MOBA",
    image: "league-of-legends.jpg",
    registrationOpen: false,
    registrationDeadline: new Date("2025-07-01T23:59:59"),
    description: "The most prestigious tournament in the world of League of Legends, featuring top teams from every region."
  },
  {
    id: "event_cod_champ_2025",
    title: "Call of Duty League Championship 2025",
    date: new Date("2025-06-26T09:30:00"),
    location: "Kitchener, Canada",
    game: "Call of Duty",
    genre: "FPS",
    image: "Call-of-Duty-Black-Ops-6.jpeg",
    registrationOpen: true,
    registrationDeadline: new Date("2025-06-15T23:59:59"),
    description: "The Call of Duty League's annual championship event, bringing together the best COD players to compete for the title."
  },
  {
    id: "event_esports_world_cup_2025",
    title: "Esports World Cup 2025",
    date: new Date("2025-07-24T15:45:00"),
    location: "Riyadh, Saudi Arabia",
    game: "Call of Duty",
    genre: "FPS",
    image: "Esports_2025.png",
    registrationOpen: false,
    registrationDeadline: new Date("2025-07-10T23:59:59"),
    description: "A global esports event where top teams from various games, including Call of Duty, compete for the prestigious World Cup title."
  },
];

module.exports = { gamingEvents };
