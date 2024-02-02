const coffee = require('../models/coffee');
const aboutData = require('../models/about');

const home = (req, res, next) => {
    res.render('index', { title: 'The Website Homepage' });
}

const recs = (req, res, next) => {
    res.render('recs', coffee);
}

const about = (req, res, next) => {
    res.render('about', aboutData);
}

module.exports = {
    home,
    recs,
    about
}