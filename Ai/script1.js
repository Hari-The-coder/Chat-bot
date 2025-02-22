
let prompt  = document.querySelector("#prompt");
let chatcontainer  = document.querySelector(".chat-box");
let info = document.querySelector(".chat_ai");
let Message = info.innerHTML;
let imgbtn =  document.querySelector("#image");
let imageinput =document.querySelector("#image input")


const Api_url ="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBO23YdRDN2xstDiwxBGk78JBbDN24YS0E"
// creating an object 
let user = {
  datas :null,
  file:{
      mime_type : null,
          data: null
  }
}
async function genrateResponse(chatcontainer){
  let text =chatcontainer.querySelector(".chat_ai");
 let  RequestOption ={
  method:"POST",
  header :{'Content-Type': 'application/json'},
  body:JSON.stringify({
    "contents": [{
    "parts":[{"text":user.datas},(user.file.data?[{"inline_data":user.file}]:[])]
    }]
  })
 }
 try{

   let response = await fetch (Api_url,RequestOption);
   let datas = await response.json();
   let apiResponse =datas.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"1").trim()
  //  console.log(apiResponse);
  text.innerHTML = apiResponse;
   
 }
 catch(error){
  console.log(error);
 }
finally{
  chatcontainer.scrollTo({top:chatcontainer.scrollHeight,behavior:"smooth"})
}

}


// creating element 
function creatChatbox(html,classes){
  let div =document.createElement("div")
  div.innerHTML=html
  div.classList.add(classes)
 
  return div
}
function  HandlechatResponse(userMessage){
  user.datas= userMessage;
     
  // console.log(e);
  let userchatbox =creatChatbox(userMessage,"chat-box")
  userMessage:{user.file.data?'<img scr="data:${user.file.mime_type};base64,${userData.file.data "class="chooseimg"/>':"" };
  prompt.value="";
  chatcontainer.appendChild(userchatbox);

  chatcontainer.scrollTo({top:chatcontainer.scrollHeight,behavior:"smooth"});

  setTimeout(()=>{
     text = '<div class="chat_ai" >   <img class="img" src="Fading circles.gif" alt="loading page"> <div>';
  let Aichatbox=creatChatbox(text,"chat_ai");
  // console.log(m);
  chatcontainer.appendChild(Aichatbox);
  genrateResponse(Aichatbox);
  
 
  },600);
  
}  
// to push your chats in chat section 
prompt.addEventListener("keydown",(e)=>{
  if(e.key =="Enter"){
  HandlechatResponse(prompt.value);
  prompt.value="";
  
    // console.log(prompt.value);
  }

  // console.log(e);
});

let sendmessage = document.querySelector("#send");
sendmessage.addEventListener("click",(e)=>{
 console.log("hi");
 HandlechatResponse(prompt.value);
});

imageinput.addEventListener("change",()=>{
  const  file = imageinput.files[0];
  if(!file) {return}
  let reader =new FileReader();
  reader.onload=(e)=>{
  //  console.log(e);
  let base64string = e.target.result.split(",")[1];
  user.file={
    mime_type : file.type,
        data: base64string 
}
  }
  reader.readAsDataURL(file);

})

imgbtn.addEventListener("click",()=>{
  imgbtn.querySelector("input").click();
})