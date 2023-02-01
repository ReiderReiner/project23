import './index.css';
import App from "./src/modules/app.js"
const donates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
    ]
const app = new App(donates)
app.run()