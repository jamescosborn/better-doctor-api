var apiKeys = require("./../.env");
const doctorKey = apiKeys.apiKey;

export class MedicalInfo {

  static getDoctor(doctorid, callback) {
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorid}&skip=0&limit=10&user_key=${doctorKey}`,
      type: "GET",
      data: {
        format: "json"
      },
      success: function(response) {
        callback(response.name)
      },
      error: function(error) {
        callback(false, error)
      }
    })
  }

  static searchSymptom(symptomid, callback) {
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptomid}&skip=0&limit=10&user_key=${doctorKey}`,
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
    })
  }


  }
  constructor(info) {
    this.summary = info
  }
}
