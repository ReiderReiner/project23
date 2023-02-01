import './index.css';
import App from "./src/modules/app.js"
let state = {donates: [{amount: 4, date: new Date()}], totalAmount: 0}
const app = new App(state)
app.run()
