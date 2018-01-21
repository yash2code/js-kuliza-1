 "use strict"; 

const id = document.getElementById('id');
const name = document.getElementById('name');
const gender = document.getElementById('gender');
const email = document.getElementById('email');

let flag='a';

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function reset() {
    while (id.firstChild) {
        id.removeChild(id.firstChild);
        name.removeChild(name.firstChild);
        gender.removeChild(gender.firstChild);
        email.removeChild(email.firstChild);
    }
}

function fetch_data(flag) {
fetch("https://api.myjson.com/bins/ebwqx")
    .then(response => response.json())
    .then(data => {
        if(flag=='a' || flag==null){
            reset();
        var all=data;
        }

        if(flag=='m') {
            reset();
         var all = data.filter(m => m.gender == 'Male');
        }

        if (flag == 'f') {
            reset();
            var all = data.filter(m => m.gender == 'Female');
        }

       
        
        //console.log(all);
        let d = all.map((q) => {
            let id_li = createNode('li');
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
        
        return d;
    }).catch((error) => console.log(error));

}


const male = document.getElementById("male");
male.addEventListener("click", () => {
   flag='m';
    fetch_data(flag);
}, false);

const female = document.getElementById("female");
female.addEventListener("click", () => {
    flag = 'f';
    fetch_data(flag);
}, false);

const def = document.getElementById("all");
def.addEventListener("click", () => {
    flag = 'a';
    fetch_data(flag);
}, false);
