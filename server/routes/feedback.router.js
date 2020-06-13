const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET Route
router.get('/', (req, res) => {
    //res.send(galleryItems);
    const sqlText = `SELECT * FROM feedback ORDER BY "id";`;

    pool.query(sqlText)
        .then((result) => {
            console.log(`Returned from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    //console.log(req.body);
    const feeling = req.body.feelingsRating
    const understanding = req.body.understandingRating
    const support = req.body.supportedRating
    const comments = req.body.otherComments
    console.log("data received, feeling:", feeling, "understanding:", understanding, "support:", support, "comments:", comments);

    // {feelingsRating: "", understandingRating: "", supportedRating: "", otherComments: ""}

    sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES (${feeling}, ${understanding}, ${support}, ${comments});`

    pool.query(sqlText)
        .then((result) => {
            console.log('POST Success', result);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })

}); // END POST Route

module.exports = router;