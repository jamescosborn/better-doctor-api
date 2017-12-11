var apiKey = require("./../.env");

export class MedicalInfo {

  static getDoctor(doctorid, callback) {
    $.get({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&skip=0&limit=10&user_key=${apiKey}`,
      type: "GET",
      data: {
        format: "json"
      },
      success: function(response) {
        callback(data.practices.name)
      },
      error: function(error) {
        callback(false, error)
      }
    })
  }

  static searchSymptom(symptomid, callback) {
    $.get({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptomName}&skip=0&limit=10&user_key=${apiKey}`,
      type: "GET",
      data: {
        format: "json"
      },
      success: function(response) {
        let doctorNames = data.practices.name;
        let doctors = {};
        doctorNames.forEach(function(summary) {
          doctors[summary.doctorid] = new MedicalInfo(summary);
        })
      },

      error: function(error) {
        callback(false, error)
      }
    });
  }
  constructor(info) {
    this.summary = info;
  }
}
