### Africa's talking SMS API using Node.js and TypeScript

Install the dependencies:

```bash
npm install
```

Start development server:

```bash
npm start
```

Start ngrok server:

```bash
npm run ngrok
```

Send a message: *http://localhost:3000/send-a-message*.

Copy your *https* URL logged  by ngrok and add as incoming messages [callback url](https://account.africastalking.com/apps/sandbox/sms/inbox/callback) appending */incoming-messages* at the end.


Copy your *https* URL logged  by ngrok and add as delivery reports [callback url](https://account.africastalking.com/apps/sandbox/sms/dlr/callback) appending */delivery-reports* at the end.
