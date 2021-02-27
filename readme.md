# Description
Web App to  build contact list using [mailchimp](https://mailchimp.com/) and get user to subscribed to our dummy news- Letter. \
To access web page [News-Letter-Subscription](https://whispering-cove-46927.herokuapp.com/)\
This repo contain code for learning purpose Only.


## Working
Access web app using [Link](https://whispering-cove-46927.herokuapp.com/)\
If you want to locally use it Clone this repo, then  install dependencies specified in [package.json](package.json) \
 Create config.js file in root folder and add the following code
```
 module.exports.apiData = {
   apiKey: //api_key,
   listId: //List_id
 };
 ```
Get api_key and list_id from [mailchimp](https://mailchimp.com/)
then comment line 38 and 42 in [app.js](app.js)\
and uncomment line 5, 37 and 41 in [app.js](app.js)
## Learning
* Nodejs and express
* External API usage
* Deployment of Web app using Heroku
* Post request Handling
