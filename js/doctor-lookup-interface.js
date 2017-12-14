import { MedicalInfo } from "./../js/doctor-lookup.js";

let displayName = function(result) {
  if (result.meta.total > 0) {
    console.log(result.meta);
    console.log(result.data);
    $('#output').append(`<h2>Results:</h2>`)
    for (var i = 0; i < result.meta.total; i++) {
      $('#output').append(`<br>
        <li><img src="img/name.png">  Full name: <strong>${result.data[i].profile.first_name} ${result.data[i].profile.last_name}</strong></li>`);
        for (var j = 0; j < result.data[i].practices.length; j++) {
          $('#output').append(`
          <li><img src="img/address.png">  Address: ${result.data[i].practices[j].visit_address.street}</li>
          <li><img src="img/phone.png">  Phone Number: ${result.data[i].practices[j].phones[0].number}</li>
          <li><img src="img/accepting.png">  Accepts New Patients: ${result.data[i].practices[j].accepts_new_patients}</li>
        <br>`);
      }
    }
  } else if (result.meta.total === 0) {
      $('#output').append(`<br><h2>Results:</h2>
        <li>Nothing matched that search. Please try again.</li>
      `);
  } else if (result.meta.error === true) {
    $('#output').append(`
      <li>Error code: ${result.meta.error_code}, ${result.meta.message} Please try again.</li>
    `);
  }
};

// <li>Address: ${result.practices.visit_address.street}</li>
// <li>Phone Number: ${result.practices.phones.number}</li>
// <li>Accepts New Patients: ${result.practices.accepts_new_patients}</li>
let displaySymptom = function(response) {
  if (response.meta.total > 0) {
    for (var i = 0; i < response.meta.total; i++) {
      $('#output').append(`
        <li>Full name: ${response.data[i].profile.first_name} ${response.data[i].profile.last_name}</li>
        `);
    }
  } else if (response.meta.error === true) {
      $('#output').append(`
        <li>Something went wrong. Error code: ${response.meta.error_code}, ${response.meta.message} Please try again.</li>
      `);
  }
};

$(document).ready(function() {
  let medicalInfo = new MedicalInfo();
  $('#nameSearch').submit(function() {
    $('#output').empty();
    let userInput = $('#doctorName').val();
    console.log(userInput);
    MedicalInfo.getDoctor(userInput, displayName);
    event.preventDefault();
  });

  $('#symptomSearch').submit(function() {
    $('#output').empty();
    let userInput2 = $('#symptomName').val();
    MedicalInfo.getSymptom(userInput2, displaySymptom);
  });
});
