const express = require("express");
const cors = require("cors");
const { body, check, validationResult } = require("express-validator");
const { append } = require("express/lib/response");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8000, () => {
  console.log("Running");
});

app.get("/", (req, res) => {
  res.send("<H1>Input ellenőrzés</H1>");
});

app.post(
  "/reg",
  body("username").blacklist("<>()/\'\"").isLength({ min: 4, max: 20 }).withMessage("A username min 4 karakter hosszú legyen!").escape(),
  body("email").isEmail().withMessage("E-mail címet kell megadni!"),
  body("password").isLength({ min: 5 }).withMessage("A jelszó min. 5 karakter"),
  body("lakcim").blacklist("<>()/\'\"").isLength({ min: 10, max: 100 }).withMessage("A lakcím min 10. karakter!").escape(),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ Hibák: errors.array() });
    } else {
      const username = req.body.username;
      const email = req.body.email;
      const lakcim = req.body.lakcim;
      res.send(
        "<p>" +username +"</p>" +
          "<p>" +email +"</p>" +
          "<p>" +lakcim +"</p>"
      );
    }
  }
);

app.get('/marka/:marka/kor/:kor',
    check('marka').isLength({min:2}).withMessage("Min 2 karakter!"),
    check('kor').isInt({min:1,max:40}).withMessage("Számot kell megadni!")
    ,(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ Hibák: errors.array() });
    } else {
    res.json({"márka":req.params.marka,"kor":req.params.kor});
    }

});
