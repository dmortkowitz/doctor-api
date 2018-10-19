import { apiKey } from './../.env';

export class Doctor {
  constructor() {
    this.state = 'wa-seattle';
    this.dataSize;
  }

  getDoctorAilment(search) {
    let searchData = $.ajax ({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${search}&location=${this.state}&skip=0&limit=25&user_key=${apiKey}`,
      type: 'GET',
      async: false,
      searchData: {
        format: 'json'
      },
      success: function(response) {
        console.log(response);
        let data = response.data;
      },
      error: function() {
        $("#errorField").text("There was an error retrieving your information. PLease try again.");
      }
    });
    return searchData;
  }
  getDoctorName(docName) {
    let data = $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&location=${this.state}&skip=0&limit=20&user_key=${apiKey}`,
      type: 'GET',
      async: false,
      data: {
        format: 'json'
      },
      success: function(response, jqXHR, status) {
      console.log(response);
      console.log(jqXHR);
      console.log(status);
      },
      error: function() {
        $('#errorField').text("There was an error retrieving information. Please try again.");
      }
    });
    return data;
  }
}
