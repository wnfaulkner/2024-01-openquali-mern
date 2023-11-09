// users controller
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../../models/user.js')


module.exports = {
  create,
  login,
};

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string. The client code needs to take this into consideration.
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code 
    // 400 = Bad Request
    res.status(400).json(err);
  }
}

async function login(req, res) {
  console.log('login controller function called')
  try {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
      // User with the specified email not found
      return res.status(400).json({ error: 'User not found' });
    }

    const pwCorrect = await bcrypt.compare(req.body.password, user.password);

    if (pwCorrect) {
      // Passwords match, user is authenticated. 
      const token = createJWT(user);
      res.status(200).json(token);
    } else {
      // Passwords do not match
      res.status(400).json({ error: 'Invalid password' });
    }
    
  } catch (err) {
    // 400 = Bad Request
    res.status(400).json(err);
  }
}

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}