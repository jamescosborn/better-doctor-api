import { MedicalInfo } from "./../js/doctor-lookup.js";

// For asynchronous API call
let displayName = function(result) {
  $('#name-output').append(result.name);
};

$(document).ready(function() {
  let medicalInfo = new MedicalInfo();

  $('#nameSearch').click(function() {
    // event prevent default not required because of no form?
    let doctorName = $('#doctorName').val();
    medicalInfo.getDoctor(userInput, displayName);
  });
});
