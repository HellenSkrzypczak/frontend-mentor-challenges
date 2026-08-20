# Frontend Mentor - IP Address Tracker Solution

This is a solution to the [IP Address Tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0).
Frontend Mentor challenges help developers improve their coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
- [Author](#author)

---

## Overview

### The Challenge

Users should be able to:

- View the user's IP address on page load
- Search for any IP address or domain and see the results
- See their location on the map
- See their own IP address on the map on the initial page load
- View the optimal layout depending on their device's screen size

### Links

- Solution URL: [add your Frontend Mentor solution link here]
- Live Site URL: [add your deployed project link here]

---

## Running Locally

This project uses the [ipify Geolocation API](https://geo.ipify.org/), which requires a free API key.

1. Clone the repository
2. Copy `config.example.js` and rename the copy to `config.js`
3. Sign up at [geo.ipify.org](https://geo.ipify.org/) and get your own free API key
4. Paste your key into `config.js`
5. Open `index.html` in your browser

> `config.js` is listed in `.gitignore` and is never committed — each person running this project locally needs their own key.

---

## My Process

### Built With

- Semantic HTML5 markup
- CSS3
- Flexbox
- JavaScript (ES6+)
- Fetch API
- [Leaflet.js](https://leafletjs.com/) for the interactive map
- [ipify Geolocation API](https://geo.ipify.org/) for IP lookup data

### What I Learned

- How to work with external APIs using `fetch`
- How to handle asynchronous JavaScript with `async/await`
- How to dynamically update the DOM based on API responses
- How to integrate a mapping library (Leaflet.js) and update markers dynamically
- How to build a fully responsive layout around a data-driven component

#### Example API Request

```js
async function getIpData(ip) {
  const response = await fetch(`API_URL&ipAddress=${ip}`);
  const data = await response.json();
  return data;
}
```

### Continued Development

I want to continue improving:

- Error handling for invalid IP/domain input
- Loading states while data is being fetched
- Accessibility of the search form and map

---

## Author

- Frontend Mentor - [@HellenSkrzypczak](https://www.frontendmentor.io/profile/HellenSkrzypczak)
- GitHub - [@HellenSkrzypczak](https://github.com/HellenSkrzypczak)