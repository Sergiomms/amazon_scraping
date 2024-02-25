# Amazon Scraper

## Overview

This project is a simple web application that allows users to initiate web scraping on Amazon search results for a given keyword. The backend, built with Node.js, uses Express, Axios, and Cheerio to fetch and parse the HTML content from Amazon. The frontend, implemented with HTML and JavaScript, provides a user-friendly interface to enter a search keyword and display the scraped results.

## Setup Instructions

### Backend

1. Open a terminal and navigate to the `backend` directory.

2. Install dependencies using npm:


  npm install

3. Run the Node.js server:

  node index.js

The server will be running on http://localhost:3000.

### Frontend

1. Open a new terminal and navigate to the frontend directory.

2.  Open the index.html file in a web browser or use a simple server to serve the HTML file. For example, you can use the following Python command to start a simple server:

  python -m http.server

Then, open http://localhost:8000 in your web browser.

### How to Use

1. Enter a search keyword in the input field on the webpage.
2. Click the "Scrape" button to initiate the scraping process.
3. View the scraped results displayed on the webpage.

### Notes

* The provided code is a basic example and may need adjustments based on changes in website structures.


