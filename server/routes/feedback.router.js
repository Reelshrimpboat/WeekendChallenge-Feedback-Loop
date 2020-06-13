const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET Route
router.get('/', (req, res) => {
    //res.send(galleryItems);
    const sqlText = `SELECT * FROM feedback ORDER BY "id";`;

    pool.query(sqlText)
        .then((result) => {
            ///console.log(`Returned from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    const feeling = req.body.feelingsRating
    const understanding = req.body.understandingRating
    const support = req.body.supportedRating
    const comments = req.body.otherComments
    //console.log("data received, feeling:", feeling, "understanding:", understanding, "support:", support, "comments:", comments);

    sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES (${feeling}, ${understanding}, ${support}, '${comments}');`

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

// DELETE Route
router.delete('/:id', (req, res) => {
    let id = req.params.id; // id of the thing to delete
    //console.log('Delete route called with id of', id);

    //query to send to database
    let queryText = `
    DELETE FROM "feedback"
    WHERE id = ${id}
    `;

    //database request
    pool.query(queryText)
        .then((result) => {
            console.log('Delete has worked!', result);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('Delete has failed.', err);
            res.sendStatus(500);
        });

}); // END DELETE Route

// PUT Route
router.put('/flag/:id', (req, res) => {
    const feedbackID = req.params.id;
    const flaggedStatus = req.body.flaggedStatus;

    console.log('In flag, feedbackID:', feedbackID, 'flaggedStatus:', flaggedStatus )

    sqlText = `UPDATE "feedback" SET flagged=$1 WHERE id=$2`

    pool.query(sqlText, [flaggedStatus , feedbackID])
        .then((result) => {
            console.log('PUT Success', result);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
}); // END PUT Route

module.exports = router;