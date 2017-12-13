import { MedicalInfo } from "./../js/doctor-lookup.js";


let displayName = function(result) {
  $('#name-output').append(`The doctor's full name: ${result.name}`);
  $('#name-output').append(result.name);
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
