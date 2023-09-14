//DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

//method
async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
}

async function listUsers() {
    const users = await getUsers();

    function addList(user) {
        const list = document.createElement("li");
        list.innerText = user.name;
        lists.appendChild(list);
    }
    users.forEach(addList);
};

//event
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);
