// Import the mailgun sdk
const mailgun = require("mailgun-js");

// Create a config object and initialise the mailgun SDK
const emailConfig = {
	apiKey: "52da277d243041b15493009492ccf194-19806d14-72f48f08",
	domain: "sandbox8134d27aa8f4495c9cc44d850600e041.mailgun.org"
};
const mg = mailgun(emailConfig);

// Get the name and email of the newly created user from Appwrite's environment variable
const payload = JSON.parse(process.env.APPWRITE_FUNCTION_EVENT_DATA)
const name = payload['name']
const email = payload['email']

// Create your email 
const data = {
	from: 'Welcome to My Awesome App <welcome@my-awesome-app.io>',
	to: email,
	subject: `Welcome on board ${name}!`,
	text: `Hi ${name}\nGreat to have you with us. ! 😍`
};

// Send the email! ❤️
mg.messages().send(data, function (error, body) {
	console.log(body);
});
