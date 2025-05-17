import express, { Request, Response } from "express";

const app = express();

app.get("/api/hello", (req: Request, res: Response) => {
	res.send("Hello from App Engine!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
