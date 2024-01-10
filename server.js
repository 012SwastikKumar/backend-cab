const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT_N = process.env.PORT || 5000;

app.use(express.json());

const corsOptions = {
  origin: ["http://localhost:5173", "https://glittering-quokka-647c1c.netlify.app", "https://cool-conkies-c4573a.netlify.app", "https://call-audit-fawn.vercel.app"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.post("/api/v1/login", (req, res) => {
  const { userId, password } = req.body;
//   if(userId == process.env.USER_ID){

    //   console.log(`User Id : ${userId}`)
//   }
//   if(password == process.env.PASSWORD){
    //   console.log(`Password : ${password}`)
//   }
  if (userId === process.env.USER_ID && password === process.env.PASSWORD) {
    res.json({ success: true, message: "Authentication successful" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(PORT_N, () => {
  console.log(`Server is running on http://localhost:${PORT_N}`);
});
