const express = require("express");

const router = express.Router();

router.get("/country", async (req, res) => {
  try {
    console.log(req.body);
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const data = response.data;

    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data from external API" });
  }
});

module.exports = router;
