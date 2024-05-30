let users = [];

function showCreateForm() {
    document.getElementById('createForm').style.display = 'block';
}

function hideForm(formId) {
    document.getElementById(formId).style.display = 'none';
}

function addUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    const newUser = { id, name, email };
    users.push(newUser);

    renderUsers();
    hideForm('createForm');
}

function renderUsers() {
    const userList = document.getElementById('userList');
    let html = '';

    users.forEach(user => {
        html += `<tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button onclick="showEditForm(${user.id})">Edit</button>
                    <button onclick="deleteUser(${user.id})">Delete</button>
                </td>
            </tr>`; });

    userList.innerHTML = html;
}

function showEditForm(id) {
    const user = users.find(user => user.id === id);
    document.getElementById('editId').value = user.id;
    document.getElementById('editName').value = user.name;
    document.getElementById('editEmail').value = user.email;

    document.getElementById('updateForm').style.display = 'block';
}

function updateUser() {
    const id = document.getElementById('editId').value;
    const name = document.getElementById('editName').value;
    const email = document.getElementById('editEmail').value;

    const index = users.findIndex(user => user.id === parseInt(id));
    users[index] = { id: parseInt(id), name, email };

    renderUsers();
    hideForm('updateForm');
}

function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    renderUsers();
}
