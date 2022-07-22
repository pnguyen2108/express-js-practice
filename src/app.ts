import express,{Request,Response} from "express";

const app = express();

app.get('/',(_: Request,res: Response) => {
	res.send("Hello World");
});

app.post('/post',() => {
	console.log("Connected to React");
});

const PORT = 5000;

app.listen(PORT,() => {
	console.log(`Server opened on port ${PORT}`);
});