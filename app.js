const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
// const apiData = require('./config.js');

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.emailName;
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };
  const jsonData = JSON.stringify(data);

  // const url = "https://us1.api.mailchimp.com/3.0/lists/" + apiData.apiData.listId;
  const url = "https://us1.api.mailchimp.com/3.0/lists/" + process.env.list_id;
  const options = {
    method: "POST",
    // auth: "sumit:" + apiData.apiData.apiKey
    auth: "sumit:" + process.env.api_key
  }

  const request = https.request(url, options, function(response) {
    if(response.statusCode === 200){
      res.sendFile(__dirname + "/success.html");
    }
    else{
      res.sendFile(__dirname + "/failure.html");
    }

    response.on('data', (data) => {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();

});


app.get("/failure", function(req, res){
  res.redirect('/');
});

app.listen(process.env.PORT||3000, function() {
  console.log("server is running on 3000");
});
