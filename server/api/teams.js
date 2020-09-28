const express = require('express');
const router = express.Router();

let teams = [
    { id: 0, name: "Development" },
    { id: 1, name: "Quality Assurance" },
    { id: 2, name: "Human Resources" },
];
let next_id = teams.length;

router.get("/", async (req, res) => {
    res.json(teams);
});

router.post("/", async (req, res) => {
    let team = { id: next_id++, name: req.body.name };
    teams = [
        ...teams,
        team
    ];
    res.status(201).json(team);
});

module.exports = router;