const express = require('express');
const dotenv = require('dotenv'); // Import dotenv
dotenv.config(); // Load environment variables from .env file
const app = express();
const port = 7777;

app.get('/', (req, res) => {
  res.send(process.env.RESPONSE_TEXT);
});

if (require.main === module) {
  const server = app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
    console.log(`Response text is: ${process.env.RESPONSE_TEXT || 'Default'}`); // Log out the RESPONSE_TEXT
  });
}

module.exports = app;
