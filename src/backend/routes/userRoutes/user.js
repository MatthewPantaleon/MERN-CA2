/**
 * @Date:   2020-02-06T14:56:20+00:00
 * @Last modified time: 2020-02-06T15:02:19+00:00
 */

const passport = require('passport');
const settings = require('../../config/passport')(passport);
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const body_parser = require("body-parser");



module.exports = router;
