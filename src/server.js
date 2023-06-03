import express from "express";

const PORT = 8000;
const app = express();

const handlePage = (req, res) => {
    return res.send({ message : "This is home"})
}
app.get('/', handlePage)

const handleLogin = (req, res) => {
    return res.send({ message : 'This is Login Page'})
}
app.get('/login', handleLogin)

const handleServer = () => console.log(`💫 Server listening on port http://localhost:${PORT} 🔥`)

app.listen(PORT, handleServer)