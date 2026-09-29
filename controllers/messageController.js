
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
const createMessage=(req,res)=>{
    const messageUser=req.body.authorName;
    const messageText=req.body.message;
    messages.push( {text: messageText, user: messageUser, added: new Date() });
    res.redirect('/');
}
module.exports={
    getMessages,
    getAMessage,
    getForm,
    createMessage
}