const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/abc', (req, res) => {
  res.send('api works aaftab');
});

module.exports = router;
