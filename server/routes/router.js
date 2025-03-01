const express = require("express");
const router = new express.Router();
const userdb = require("../models/userSchema");
const Contact = require("../models/contactSchema"); // Import the contact schema
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

//api to store user data in our database
//user registration
//we will get a body from frontend which will contain user data /reg will give this

router.post("/register", async (req, res) => {
  //get the data from frontend
  const { fname, email, password, cpassword } = req.body;
  //check if the data is valid
  if (!fname || !email || !password || !cpassword) {
    res.status(422).json({ error: "Please fill all the fields" });
  }
  try {
    //if email already exit  then error one field and one entered by the user
    const preuser = await userdb.findOne({ email: email });
    if (preuser) {
      res.status(422).json({ error: "Email already exist" });
    } else if (password !== cpassword) {
      res
        .status(422)
        .json({ error: "Password and confirm password should be same" });
    } else {
      //if all data is valid then we will store the data in our database
      const finalUser = new userdb({
        fname,
        email,
        password,
        cpassword,
      });
      //password hasing user schema
      const storeData = await finalUser.save();
      res.status(201).json({ status: 201, storeData });
      //console.log(storeData)
    }
  } catch (error) {
    res.status(422).json({ error: "error in registration" });
    console.log(error);
  }
});

//user login api creation
router.post("/login", async (req, res) => {
  //console.log(req.body);
  //now since the login req should handeled here
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).json({ error: "Please fill all the fields" });
  }
  try {
    const userValid = await userdb.findOne({ email: email });

    if (userValid) {
      const isMatch = await bcrypt.compare(password, userValid.password);
      if (!isMatch) {
        res.status(422).json({ error: "Invalid password" });
      } else {
        //if pass matches generate a token
        //function defination in the userschema
        const token = await userValid.generateAuthtoken();
        //console.log(token);

        //cookie generation
        res.cookie("usercookie", token, {
          expires: new Date(Date.now() + 90000000), //expire in 1hr
          httpOnly: true,
        });
        const result = {
          userValid,
          token,
        };
        res.status(201).json({ status: 201, result });
      }
    }
  } catch {
    res.status(401).json({ error: "Invalid email or password" });
  }
});
//user valid
router.get("/validuser", authenticate, async (req, res) => {
  //onsole.log(req.user);
  console.log("this user is valid")
  try {
    const ValidUserOne = await userdb.findOne({ _id: req.userId });
    res.status(201).json({ status: 201, ValidUserOne });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

// New route for handling contact form submission
router.post("/contact", async (req, res) => {
  const { name, email, phone, address, wasteType } = req.body;

  if (!name || !email || !phone || !address || !wasteType) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      address,
      wasteType,
    });

    const savedContact = await newContact.save();
    res.status(201).json({ status: 201, savedContact });
  } catch (error) {
    res.status(500).json({ error: "Failed to save contact data" });
  }
});

//we will get the email and password from frontend

module.exports = router;
