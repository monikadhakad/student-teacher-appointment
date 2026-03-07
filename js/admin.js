function addTeacher(){

let name = document.getElementById("tname").value;
let dept = document.getElementById("dept").value;
let subject = document.getElementById("subject").value;

db.collection("teachers").add({
name:name,
department:dept,
subject:subject
});

alert("Teacher Added");

}

function updateTeacher(id){

let newName = prompt("Enter new teacher name");
let newDept = prompt("Enter new department");
let newSubject = prompt("Enter new subject");

db.collection("teachers").doc(id).update({

name: newName,
department: newDept,
subject: newSubject

})
.then(()=>{

alert("Teacher Updated");

});

}
function deleteTeacher(id){

if(confirm("Are you sure to delete this teacher?")){

db.collection("teachers").doc(id).delete()

.then(()=>{

alert("Teacher Deleted");

});

}

}

// SHOW ALL TEACHERS
db.collection("teachers").onSnapshot((snapshot)=>{

let list = document.getElementById("teacherList");

list.innerHTML = "";

snapshot.forEach((doc)=>{

let data = doc.data();

list.innerHTML += `
<li>
${data.name} - ${data.department} - ${data.subject}

<button onclick="updateTeacher('${doc.id}')">Update</button>

<button onclick="deleteTeacher('${doc.id}')">Delete</button>

</li>
`;

});

});

db.collection("users")
.where("approved","==",false)
.onSnapshot((snapshot)=>{

let list = document.getElementById("studentList");

list.innerHTML="";

snapshot.forEach((doc)=>{

let data = doc.data();

list.innerHTML+=`
<li>
${data.name} - ${data.email}
<button onclick="approveStudent('${doc.id}')">Approve</button>
</li>
`;

});

});


function approveStudent(id){

db.collection("users").doc(id).update({
approved:true
});

alert("Student Approved");

}