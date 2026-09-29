const {body,validationResult,matchedData} = require("express-validator");
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
const getMessages= (req,res)=>{
    res.render("index",{
    messages:messages
    })
};

const getAMessage= (req,res)=>{
    res.render("message",{
    message:messages[req.params.id]
  })
};

const getForm=(req,res)=>{
    res.render("form")
};
const validateMessage=[
    body("authorName")
    .trim()
    .notEmpty()
    .withMessage("Author is Required"),

    body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is Required")
    .isLength({max:500})
    .withMessage("Message must be 500 characters or less")

];
const createMessage=[
    validateMessage,
    (req,res)=>{
        const errors=validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("form")
        }
        const {authorName,message} = matchedData(req);
    messages.push( {text: message, user: authorName, added: new Date() });
    res.redirect('/');
}];
module.exports={
    getMessages,
    getAMessage,
    getForm,
    createMessage
}