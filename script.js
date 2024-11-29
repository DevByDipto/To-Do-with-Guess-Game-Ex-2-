const toDoList = document.querySelector(".todo");
const inputOne = document.querySelector(".input_One");
const inputTwo = document.querySelector(".input_Two");
const PostButton = document.querySelector(".post");
const UpdateButton = document.querySelector(".update");
const allPost = document.querySelector(".all_post");
const arr = [];
let indexStore;

const containerOne = document.querySelector(".containerone");
const GuessGame = document.querySelector(".GuessGame");
const firstInput = document.querySelector(".first_input");
const firstBtn = document.querySelector(".first_btn");
const firstError = document.querySelector(".first_error");

const containerTwo = document.querySelector(".containertwo");
const SecondHeading = document.querySelector(".Second_heading");
const chance = document.querySelector(".chance");
const secondInput = document.querySelector(".second_input");
const secondBtn = document.querySelector(".second_btn");
const secondError = document.querySelector(".second_error");
let count = 5;
PostButton.addEventListener("click", function () {
  if (!inputOne.value || !inputTwo.value) {
    return (allPost.innerText = "please fill-up the inputs");
  } else if (!isNaN(inputOne.value)) {
    return GuessGameFun();
  }
  arr.push({
    name: inputOne.value,
    caption: inputTwo.value,
  });
  allPost.innerHTML = "";
  showDisplay();
});

function showDisplay() {
  arr.map((item) => {
    allPost.innerHTML += `<div class="card">
    <h1>${item.name}</h1>
    <p>${item.caption}</p>
    <button class="edit">Edit</button>
    <button class="delete">Dlete</button>
</div>`;
  });

  const DeleteButton = document.querySelectorAll(".delete");
  const ConvertedDeleteButton = Array.from(DeleteButton);

  ConvertedDeleteButton.map((item, index) => {
    item.addEventListener("click", function () {
      arr.splice(index, 1);
      allPost.innerHTML = "";
      showDisplay();
    });
  });

  const EditButton = document.querySelectorAll(".edit");
  const ConvertedEditButton = Array.from(EditButton);

  ConvertedEditButton.map((item, index) => {
    item.addEventListener("click", function () {
      inputOne.value = arr[index].name;
      inputTwo.value = arr[index].caption;

      PostButton.style.display = "none";
      UpdateButton.style.display = "inline-block";

      indexStore = index;
    });
  });

  UpdateButton.addEventListener("click", function () {
    arr[indexStore].name = inputOne.value;
    arr[indexStore].caption = inputTwo.value;
    allPost.innerHTML = "";
    showDisplay();
    PostButton.style.display = "inline-block";
    UpdateButton.style.display = "none";
  });
}

function GuessGameFun() {
  toDoList.style.display = "none";
  GuessGame.style.display = "inline-block";

  firstBtn.addEventListener("click", function () {
    if (!firstInput.value) {
      firstError.innerText = "Please iput a value";
    } else if (isNaN(firstInput.value)) {
      firstError.innerText = "please enter a number";
    } else if (firstInput.value > 10 || firstInput.value < 0) {
      firstError.innerText = "please enter a number under 1 t0 10";
    } else {
      containerOne.style.display = "none";
      containerTwo.style.display = "inline-block";
      chance.innerText =`chance:${count}`
    }

    secondBtn.addEventListener("click", function () {
      if (!secondInput.value) {
        secondError.innerText = "Please iput a value";
      } else if (isNaN(secondInput.value)) {
        secondError.innerText = "please enter a number";
      } else if (secondInput.value > 10 || secondInput.value < 0) {
        secondError.innerText = "please enter a number under 1 t0 10";
      } else {
        secondError.innerText = "";
        if (firstInput.value === secondInput.value) {
          SecondHeading.innerText = "Second Player is wine";
          secondInput.value = "";
          secondBtn.style.display = "none";
          chance.innerText = ""
        } else {
          if (count > 1) {
            count--;
            chance.innerText =`chance:${count}`
          }else{
            SecondHeading.innerText = "First player is wine";
            secondInput.value = "";
            secondBtn.style.display = "none";
 chance.innerText =`chance:0`
          }
        }
      }
    });
  });
}
