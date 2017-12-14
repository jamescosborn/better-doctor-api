import { MedicalInfo } from "./../js/doctor-lookup.js";


let displayName = function(result) {
  if (result.meta.total > 0) {
    console.log(result.meta);
    console.log(result.data);
    for (var i = 0; i < result.meta.total; i++) {
      $('#output').append(`
        <li>Full name: ${result.data.profile.first_name} ${result.data.profile.last_name}</li>
        <li>Address: ${result.data.practices.visit_address.street}</li>
        <li>Phone Number: ${result.data.practices.phones.number}</li>
        <li>Accepts New Patients: ${result.data.practices.accepts_new_patients}</li>
        <br>`);
    }
  } else if (result.meta.error === true) {
      $('#output').append(`
        <li>Something went wrong. Error code: ${result.meta.error_code}, ${result.meta.message} Please try again.</li>
      `);
  }
};

let displaySymptom = function(response) {
  if (response.meta.total > 0) {
    for (var i = 0; i < response.meta.total; i++) {
      $('#symptom-output').append(`
        <li>Full name: ${response.data.profile.first_name} ${response.data.profile.last_name}</li>
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
