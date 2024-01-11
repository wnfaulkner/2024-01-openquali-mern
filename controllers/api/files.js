// FILES CONTROLLER

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const File = require('../../models/file.js')

module.exports = {
  upload,
};

async function upload(req, res) {
  try {
    const newfile = new File({
      data: req.file.buffer,
      contentType: req.file.mimetype,
    })
    await newFile.save();
    res.status(201).send('File uploaded successfully');
  } catch (err) {
    // Client will check for non-2xx status code 
    // 400 = Bad Request
    res.status(400).send(err.message);
    res.status(500).send(err.message);
  }
}
