const dataContainer = document.getElementById('data-container');
const entryForm = document.getElementById('entry-form');

// Load the JSON data
fetch('data.json')
.then(response => response.json())
.then(data => {
// Render the existing data
renderData(data);
})
.catch(error => {
console.error('Error loading data:', error);
});

function renderData(data) {
dataContainer.innerHTML = '';
data.forEach(entry => {
const entryDiv = document.createElement('div');
entryDiv.innerHTML = `
    <p>Name: ${entry.name}</p>
    <p>Email: ${entry.email}</p>
    <button class="edit-button">Edit</button>
    <button class="delete-button">Delete</button>
`;
dataContainer.appendChild(entryDiv);

// Attach event listeners for edit and delete buttons
const editButton = entryDiv.querySelector('.edit-button');
editButton.addEventListener('click', () => {
    // Handle edit logic
});

const deleteButton = entryDiv.querySelector('.delete-button');
deleteButton.addEventListener('click', () => {
    // Handle delete logic
});
});
}

// Handle form submission
entryForm.addEventListener('submit', (event) => {
event.preventDefault();
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;

// Create a new entry and update the JSON file
const newEntry = { name, email };
fetch('data.json', {
method: 'POST',
headers: {
    'Content-Type': 'application/json'
},
body: JSON.stringify(newEntry)
})
.then(response => response.json())
.then(data => {
    // Render the updated data
    renderData(data);
})
.catch(error => {
    console.error('Error saving data:', error);
});
});