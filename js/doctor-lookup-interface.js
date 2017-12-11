import { MedicalInfo } from "./../js/doctor-lookup.js";

// For asynchronous API calls
let displayName = function(result) {
  $('#name-output').append(result.name);
};

let displaySymptom = function(result) {
  $('#symptom-output').append(result.symptom);
};

// For displaying info on HTML
$(document).ready(function() {
  let medicalInfo = new MedicalInfo();

  $('#nameSearch').click(function() {
    // event prevent default not required because of no form?
    let userInput = $('#doctorName').val();
    medicalInfo.getDoctor(userInput, displayName);
  });

  $('#symptomSearch').click(function() {
    let userInput2 = $('#symptomName').val();
    medicalInfo.getSymptom(userInput2, displaySymptom);
  })
});
