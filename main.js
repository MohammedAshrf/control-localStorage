// select elements
let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

// (e) = events
allSpans.forEach((span) => {
  span.addEventListener("click", (e) => {
    // target == span;
    if (e.target.classList.contains("check-item")) {
      checkItem();
    }
    if (e.target.classList.contains("add-item")) {
      addItem();
    }
    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }
    if (e.target.classList.contains("show-items")) {
      showItems();
    }
  });
});

function showMessage() {
  // if (theInput.value === "") {
  //   results.innerHTML = "input cant be empty";
  // }
  results.innerHTML = "input cant be empty";
}

function checkItem() {
  // console.log("Check");
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      results.innerHTML = `Found Local Storage Item is Called <span>${theInput.value}</span>`;
    } else {
      results.innerHTML = `No Local Storage Item with the name <span>${theInput.value}</span>`;
    }
  } else {
    showMessage();
  }
}

function addItem() {
  // console.log("Check");
  if (theInput.value !== "") {
    localStorage.setItem(theInput.value, "Test");
    results.innerHTML = `Local Storage Item <span>${theInput.value}</span>`;
    theInput.value = "";
  } else {
    showMessage();
  }
}
function deleteItem() {
  // console.log("Check");
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      localStorage.removeItem(theInput.value);
      results.innerHTML = `Local Storage Item <span>${theInput.value}</span> is deleted`;
      theInput.value = "";
    } else {
      results.innerHTML = `No Local Storage Item with the name <span>${theInput.value}</span>`;
    }
  } else {
    showMessage();
  }
}
function showItems() {
  // console.log("Check");
  // localStorage.length => means that there're elements in the local storage
  if (localStorage.length) {
    console.log(`Found elements ${localStorage.length}`);
    results.innerHTML = "";
    for (let [key, value] of Object.entries(localStorage)) {
      results.innerHTML += `<span class="keys">${key}</span>`;
      // we used += not = because this is a loop and we want it to add the
      // elements together not reasign them till just the last one.
    }
  } else {
    results.innerHTML = "Local Storage is empty";
  }
  // ***********************
  // ***********************
  // ***********************
  // if (localStorage.length) {
  //   console.log(`Found Elements ${localStorage.length}`);

  //   results.innerHTML = "";

  //   for (let [key, value] of Object.entries(localStorage)) {
  //     results.innerHTML += `<span class="keys">${key}</span>`;
  //   }
  // } else {
  //   results.innerHTML = `Local Storage Is Empty`;
  // }
}

console.log(localStorage);
