// ===============================
// Selecting popup elements
// ===============================

// Popup box (form container)
var popupBox = document.querySelector(".popup-box");

// Dark overlay behind popup
var popupoverlay = document.querySelector(".popup-overlay");

// Main container that holds all books
var container = document.querySelector(".container");


// ===============================
// Selecting form input fields
// ===============================

// Book title input
var bookTitle = document.getElementById("book-title");

// Author name input
var bookAuthor = document.getElementById("book-author");

// Book description textarea
var bookDescription = document.getElementById("book-description");


// ===============================
// Function to open popup form
// ===============================
function openForm() {
    // Show popup box
    popupBox.style.display = "flex";

    // Show dark overlay
    popupoverlay.style.display = "block";
}


// ===============================
// Function to close popup form
// ===============================
function closeForm() {
    // Hide popup box
    popupBox.style.display = "none";

    // Hide overlay
    popupoverlay.style.display = "none";
}


// ===============================
// Function to add a new book
// ===============================
function addBook(event) {
    // Prevent page refresh on form submit
    event.preventDefault();

    // Create a new div for the book
    var div = document.createElement("div");

    // Add class for styling
    div.classList.add("book-container");

    // Insert book details inside the div
    div.innerHTML = `
        <h2>${bookTitle.value}</h2>
        <h3>by ${bookAuthor.value}</h3>
        <p>${bookDescription.value}</p>
        <button onclick="deleteBook(this)">Delete</button>
    `;

    // Add the new book to the main container
    container.appendChild(div);

    // Clear input fields after adding book
    bookTitle.value = "";
    bookAuthor.value = "";
    bookDescription.value = "";

    // Close the popup after adding
    closeForm();
}


// ===============================
// Function to delete a book
// ===============================
function deleteBook(button) {
    // Remove the parent book container
    button.parentElement.remove();
}
