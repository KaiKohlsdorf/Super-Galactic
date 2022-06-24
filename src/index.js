import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Galactic } from './Super-Galactic.js';

$(document).ready(function() {
  $('#planet-form').submit(function(event) {
    event.preventDefault();
    const response = galactic.checkType();
    $('#response').append("<p>" + response + "</p>");
  });
});