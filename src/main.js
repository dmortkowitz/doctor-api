import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from './doctor';

$(document).ready(function() {

  // let newDoctor = new Doctor();

  $("#docForm").submit(function(event) {
    event.preventDefault();
    let searchTerm = $('doc-form').val();
    let newDoctor = new Doctor();
    let promise = newDoctor.getDoctor(searchTerm);
    // $("#results").html("");

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);

    $('#results').append(`<p>Your Doctors ${searchTerm}:</p>`);
    if(body.data.length === 0){
      $('#results').append('<p>There are no doctors for your search. Please try again.</p>');
    } else {
      for (let i = 0; i<body.data.length; i++) {
        $('#results').append(`<h2><br>${body.data[i].profile.first_name} `+`${body.data[i].profile.last_name}`+`<br></h2><br><h4>Gender: </h4> ${body.data[i].profile.gender}`+` <br> <h4>Phone number:</h4>
          ${body.data[i].practices[0].phones[0].number}<br> <h4> Address: </h4>`+`
          ${body.data[i].practices[0].visit_address.street}<br>`+`
          ${body.data[i].practices[0].visit_address.city}<br>`+`<h4> Web-Site:</h4> `+`
          ${body.data[i].practices[0].website} `+` <h4>Accepting New Patients:</h4> `+` ${body.data[i].practices[0].accepts_new_patients}`);
      }
    }
    }, function(error) {
      $("#errors").append(`<p>There was an error processing your request: ${error.message}</p>`);
    });
  });

  $("#sickForm").submit(function(event) {
    event.preventDefault();
    let searchAil = $('sick-form').val();
    let newDoctor = new Doctor();
    let promise = newDoctor.getAilment(searchAil);

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);

    $('results').append(`<p>Doctors that work with ${searchAil}:</p>`);
    if(body.data.length === 0){
      $('#results').append('<p>No Doctors work with this issue. Please try again.')
    } else {
      for (let i = 0; i<body.data.length; i++) {
        $('#results').append(`<h2><br>${body.data[i].profile.first_name} `+`${body.data[i].profile.last_name}`+`<br></h2><br><h4>Gender: </h4> ${body.data[i].profile.gender}`+` <br> <h4>Phone number:</h4>
          ${body.data[i].practices[0].phones[0].number}<br> <h4> Address: </h4>`+`
          ${body.data[i].practices[0].visit_address.street}<br>`+`
          ${body.data[i].practices[0].visit_address.city}<br>`+`<h4> Web-Site:</h4> `+`
          ${body.data[i].practices[0].website} `+` <h4>Accepting New Patients:</h4> `+` ${body.data[i].practices[0].accepts_new_patients}`);
      }
    }
    }, function(error) {
      $("#errors").append(`<p>There was an error processing your request: ${error.message}</p>`);
    });
  });
})
