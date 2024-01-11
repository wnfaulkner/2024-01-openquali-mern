// FILES ROUTER

const express = require('express');
const router = express.Router();
const filesCtrl = require('../../controllers/api/files');

router.post('/upload', (req, res) => {
  //console.log('Received login request at:', req.originalUrl);
  filesCtrl.upload(req, res);
});

module.exports = router;