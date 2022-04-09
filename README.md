# Hotel Availability Rooster

Alarm your partner when a specific hotel room is available. Renders a web page headlessly, checks every 10 minutes for specific HTML content (i.e. "Book This"), and sends a text message if that content exists.

## Prerequisites

1. Node.js
2. [Sign up for Twilio and Get a Twilio Phone Number](https://www.twilio.com/docs/sms/quickstart/node#sign-up-for-twilio-and-get-a-twilio-phone-number)
3. In your Twilio console, verify your partner's phone number

## Execution

1. Clone this repo
2. In root, run `npm install`
3. In root, copy `.env.sample` and rename it to `.env`
4. Replace the values in `.env` with their respective phone numbers and info from your Twilio console
5. `npm run start`
