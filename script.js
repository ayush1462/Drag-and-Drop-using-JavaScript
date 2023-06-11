// Select all elements with the class name "list"
let lists = document.getElementsByClassName("list");

// Select the "right" element by its ID
let rightBox = document.getElementById("right");

// Select the "left" element by its ID
let leftBox = document.getElementById("left");

// Select the "clear" element by its ID
let clear = document.getElementById("clear");

// Loop through each element in the "lists" collection
for (list of lists) {
  // Add a "dragstart" event listener to each element
  list.addEventListener("dragstart", (e) => {
    // Store the currently dragged element in the "selected" variable
    let selected = e.target;

    // Add a "dragover" event listener to the "rightBox" element
    rightBox.addEventListener("dragover", (e) => {
      // Prevent the default behavior of the browser when a dragged element is being dragged over the "rightBox"
      e.preventDefault();
    });

    // Add a "drop" event listener to the "rightBox" element
    rightBox.addEventListener("drop", () => {
      // Append the selected element to the "rightBox"
      rightBox.appendChild(selected);

      // Reset the "selected" variable to null to remove the element from its original position
      selected = null;
    });
  });
}

// Add a "click" event listener to the "clear" element
clear.addEventListener("click", () => {
  // Reload the current page
  location.reload();
});
