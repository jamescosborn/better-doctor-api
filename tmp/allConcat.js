import { MedicalInfo } from "./../js/doctor-lookup.js";


let displayName = function(result) {
  if (response.meta.total > 0) {
    for (var i = 0; i < response.meta.total; i++) {
      $('#output').append(`
        <li>Full name: ${result.data.profile.first_name} ${result.data.profile.last_name}</li>
        <li>Address: ${result.data.practices.visit_address.street}</li>
        <li>Phone Number: ${result.data.practices.phones.number}</li>
        <li>Accepts New Patients: ${result.data.practices.accepts_new_patients}</li>
        <li>Something went wrong. Error code: ${result.meta.error_code}, ${result.meta.message} Please try again.</li>
        <br>`);
    }
  } else if (response.meta.error === true) {
      $('#output').append(`
        <li>Something went wrong. Error code: ${result.meta.error_code}, ${result.meta.message} Please try again.</li>
      `);
  }
};

let displaySymptom = function(result) {
  $('#symptom-output').append(`${result.data.practices.name}`);
};

$(document).ready(function() {
  let medicalInfo = new MedicalInfo();
  $('#nameSearch').submit(function() {
    $('#output').empty();
    let userInput = $('#doctorName').val();
    medicalInfo.getDoctor(userInput, displayName);
  });

  $('#symptomSearch').submit(function() {
    $('#output').empty();
    let userInput2 = $('#symptomName').val();
    medicalInfo.getSymptom(userInput2, displaySymptom);
  });
});
