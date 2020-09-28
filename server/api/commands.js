const express = require('express');
const router = express.Router();

let commands = [
    { id: 0, name: "List All" },
    { id: 1, name: "Process List" },
];
let next_id = commands.length;

router.get("/", async (req, res) => {
    res.json(commands);
});

router.post("/", async (req, res) => {
    if (!req.body.name || !req.body.action) {
        res.status(400).json( { error: 'Missing parameter' } );
        return
    }
    let command = { id: next_id++, name: req.body.name, action: req.body.action };
    commands = [
        ...commands,
        command
    ];
    res.status(201).json(command);
});

module.exports = router;