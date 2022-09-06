'use strict';
console.log("script.js running");
let op = document.querySelector('#output');

getName();
async function getName() {
    const res = await fetch('/name');
    const element = await res.json();
    let output = '<h2 class="mb-4">Profile</h2>';
    let num = Math.floor(Math.random() * element.length);
    output += `
    <ul class="list-group mb-3">
        <li class="list-group-item list-group-item-primary text-black"><img src='${element[num].image}'></li>
        <li class="list-group-item list-group-item-primary text-black">Firstname: ${element[num].firstname}</li>
        <li class="list-group-item list-group-item-primary text-black">Lastname: ${element[num].lastname}</li>
        <li class="list-group-item list-group-item-primary text-black">Gender: ${element[num].gender}</li>
        <li class="list-group-item list-group-item-primary text-black">Age: ${element[num].age}</li>
        <li class="list-group-item list-group-item-primary text-black">Birthday: ${element[num].birthday}</li>
        <li class="list-group-item list-group-item-primary text-black">Username: ${element[num].username}</li>
        <li class="list-group-item list-group-item-primary text-black">Email Address: ${element[num].email}</li>
        <li class="list-group-item list-group-item-primary text-black">Password: ${element[num].password}</li>
    </ul>
    `;
    op.innerHTML = output;
}