import express,{Application,Request,Response} from 'express';
import {Client}  from 'africastalking-ts';

const africasTalking = new Client({
    apiKey:"your_api_key",
    username:"sandbox"
});

const app:Application = express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.get('/send-a-message', async (req:Request, res:Response) => {
    try{
        await africasTalking.sendSms({
            to:["your_phone_number"],
            message:"Hello there, I am just testing here....",
            from:"your-shortcode"
        });
        return res.status(200).json({message:"Message sent successfully"});
    }catch(error){
        return res.status(500).json({message:"An error occured"});
    }    
});

app.post('/incoming-messages',(req:Request,res:Response) => {
    const data = req.body;
    console.log(`Received message `,data);
    res.sendStatus(200);
});

app.post('/delivery-reports',(req:Request,res:Response) => {
    const data = req.body;
    console.log(`Received delivery report `,data);
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});