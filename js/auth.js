function registerStudent(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

auth.createUserWithEmailAndPassword(email,password)

.then((userCredential)=>{

let user = userCredential.user;

db.collection("users").doc(user.uid).set({
name:name,
email:email,
role:"student",
approved:false
});

alert("Registration Successful. Wait for admin approval");

})
.catch((error)=>{
alert(error.message);
});

}



function loginStudent(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

auth.signInWithEmailAndPassword(email,password)

.then((userCredential)=>{

let user = userCredential.user;

db.collection("users").doc(user.uid).get()

.then((doc)=>{

let data = doc.data();

if(data.approved){

window.location="student.html";

}else{

alert("Wait for admin approval");

}

});

})
.catch((error)=>{
alert(error.message);
});

}