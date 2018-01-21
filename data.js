/* "use strict"; */

const id = document.getElementById('id');
const name = document.getElementById('name');
const gender = document.getElementById('gender');
const email = document.getElementById('email');

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

fetch("https://api.myjson.com/bins/ebwqx")
    .then(response => response.json())
    .then(data => {
        return data.map((q) => {
            let id_li=createNode('li');
            id_li.innerHTML = `${q.id}`;
            append(id, id_li);

            let name_li = createNode('li');
            name_li.innerHTML = `${q.first_name} ${q.last_name}`;
            append(name, name_li);

            let g_li = createNode('li');
            g_li.innerHTML = `${q.gender}`;
            append(gender, g_li);

            let e_li = createNode('li');
            e_li.innerHTML = `${q.email}`;
            append(email, e_li);

        })
    }).catch((error) => console.log(error));

