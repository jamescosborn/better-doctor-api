var apiKey = require("./../.env").apiKey;

export class MedicalInfo {

  static getDoctor(doctorName, callback) {
    $.get({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`,
      type: "GET",
      data: {
        format: "json"
      },
      success: function(response) {
        callback(response);
      },
      error: function(error) {
        callback(false, error);
      }
    });
  }

  static searchSymptom(symptomName, callback) {
    $.get({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptomName}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`,
      type: "GET",
      data: {
        format: "json"
      },
      success: function(response) {
        callback(response);
      },

      error: function(error) {
        callback(false, error);
      }
    });
  }
  constructor(info) {
    this.summary = info;
  }
}

// let doctorNames = data.practices.name;
// let doctors = {};
// doctorNames.forEach(function(summary) {
//   doctors[summary.doctorid] = new MedicalInfo(summary);
