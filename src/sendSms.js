require('dotenv').config();

async function sendSms(body) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);
    // const myPhoneNumber = process.env.MY_PHONE_NUMBER;
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
    const partnersPhoneNumber = process.env.PARTNERS_PHONE_NUMBER;

    try {
        client.messages
            .create({
                body,
                from: `${twilioPhoneNumber}`,
                to: `${partnersPhoneNumber}`,
        })
        .then(() => console.log(body));
    } catch(err) {
        console.log("Failed to send text message => ", err);
    }
}

module.exports = (message) => sendSms(message);
