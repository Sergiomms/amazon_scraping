// Import required modules
const express = require('express')
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

// Create an Express app
const app = express()
const port = 3000

app.use(cors());

// Define a route for scraping Amazon
app.get('/api/scrape', async (req, res) => {
  try {
    // Extract the keyword from the query parameter
    const keyword = req.query.keyword;

    // Check if the keyword is provided
    if (!keyword) {
      return res.status(400).json({ error: 'Please provide a valid keyword.' });
    }

    // Construct the Amazon search URL with the encoded keyword
    const amazonURL = `https://www.amazon.com.br/s?k=${encodeURIComponent(keyword)}`;

    // Make an HTTP GET request to the Amazon search results page
    const response = await axios.get(amazonURL);
    const html = response.data;

    // Load the HTML content into Cheerio for parsing
    const $ = cheerio.load(html);

    const products = [];
    // Extract product details from the search results
    $('.s-result-item').each((index, element) => {
      const title = $(element).find('h2 span').text().trim();
      const rating = $(element).find('.a-icon-star-small .a-icon-alt').text().trim();
      const reviews = $(element).find('.a-size-small .a-link-normal').text().trim();
      const image = $(element).find('img.s-image').attr('src');

      products.push({
        title,
        rating,
        reviews,
        price1,
        price2,
        image,
      });
    });

    // Respond with the extracted data in JSON format
    res.json({ keyword, products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

// Start the Express server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})