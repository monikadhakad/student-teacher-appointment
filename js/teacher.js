db.collection("appointments")
.where("status","==","pending")
.onSnapshot((snapshot)=>{

let list = document.getElementById("appointments");

list.innerHTML="";

snapshot.forEach((doc)=>{

let data = doc.data();

list.innerHTML+=`
<li>
${data.message}

<button onclick="approve('${doc.id}')">Approve</button>
<button onclick="cancel('${doc.id}')">Cancel</button>

</li>
`;

});

});


function approve(id){

db.collection("appointments").doc(id).update({
status:"approved"
});

}


function cancel(id){

db.collection("appointments").doc(id).update({
status:"cancelled"
});

}