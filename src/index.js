import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Human } from './super.js';

$(document).ready(function() {
  $("#planet-form").submit(function(event) {
    event.preventDefault();
    const userHuman = parseInt($("#userAge").val());
    const newHuman = new Human(userHuman);
    $("#mercuryYears").text(newHuman.mercuryAge()); 
    $("#venusYears").text(newHuman.venusAge()); 
    $("#marsYears").text(newHuman.marsAge()); 
    $("#jupiterYears").text(newHuman.jupiterAge());
      if (userHuman < 73) {
        $("#notYet").text(newHuman.lifeLeft(userHuman));
      } else {
          return $("#alreadySurpassed").text(newHuman.lifeLeft(userHuman));
      }
  });
});