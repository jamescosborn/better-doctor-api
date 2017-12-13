import { MedicalInfo } from "./../js/doctor-lookup.js";


let displayName = function(result) {
  $('#showName').append(`The doctor's full name: ${result.data.practices.name}`);
  $('#showAddress').append(`Address: ${result.data.practices.visit_address.street}`);
  $('#showPhoneNumber').append(`Phone Number: ${result.data.practices.phones.number}`);
  $('#showAvailability').append(`Accepts New Patients: ${result.data.practices.accepts_new_patients}`);
};

let displaySymptom = function(result) {
  $('#symptom-output').append(result.symptom);
};

$(document).ready(function() {
  let medicalInfo = new MedicalInfo();
  $('#nameSearch').submit(function() {
    let userInput = $('#doctorName').val();
    medicalInfo.getDoctor(userInput, displayName);
  });

  $('#symptomSearch').submit(function() {
    let userInput2 = $('#symptomName').val();
    medicalInfo.getSymptom(userInput2, displaySymptom);
  })
});
