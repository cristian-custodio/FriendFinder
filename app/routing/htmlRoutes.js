
// ================== DEPENDENCIES =========================

// Need to include path NPM package to get the correct file path for our html
var path = require("path");

// ================== ROUTING ==============================

module.exports = function(app) {

    // GET Route that leads to "survey.html" and displays the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Get Route that leads to "home.html" and displays the home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};