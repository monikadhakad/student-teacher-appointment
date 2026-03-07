db.collection("teachers").get().then((snapshot)=>{

let list = document.getElementById("teacherList");
let select = document.getElementById("teacher");

snapshot.forEach((doc)=>{

let data = doc.data();

list.innerHTML += `<li>${data.name} (${data.subject})</li>`;

select.innerHTML += `<option value="${doc.id}">${data.name}</option>`;

});

});



function bookAppointment(){

let teacher = document.getElementById("teacher").value;
let message = document.getElementById("message").value;

let user = auth.currentUser;

db.collection("appointments").add({

student:user.uid,
teacher:teacher,
message:message,
status:"pending"

});

alert("Appointment Sent");

}