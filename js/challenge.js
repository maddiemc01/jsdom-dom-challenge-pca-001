document.addEventListener("DOMContentLoaded", function() {
  let counter = document.getElementById("counter");

  let countNumber = setInterval(function () {counter.innerText++}, 1000);

  const minusButton = document.getElementById("minus")

  minusButton.addEventListener("click", function(event) {
    counter.innerText--;
  });

  const plusButton = document.getElementById("plus")

  plusButton.addEventListener("click", function(event) {
    counter.innerText++;
  });

  const heartButton = document.getElementById("heart")
  const likesNumber = document.getElementById(".likes")

  heartButton.addEventListener("click", function(event) {
    let numberLiked = document.getElementById(`${counter.innerText}`);
    numberLiked ? numberLiked.children[0].innerText++ :
    likesNumber.innerHTML += `<li id=${counter.innerText}>
      ${counter.innerText} is liked
      <span id=${counter.innerText}>
      1
      </span>
      times.
      </li>`
    });


  const pauseButton = document.getElementById("pause")
  const  submitButton = document.getElementById("submit")

  pauseButton.addEventListener("click", function(event) {
    if (pauseButton.innerText === "pause"){
      pauseButton.innerText = "resume"
      clearInterval(countNumber)

      plusButton.disabled = true;
      minusButton.disabled = true;
      heartButton.disabled = true;
      submitButton.disabled = true;
  }
  else {
      count = setInterval(function () {counter.innerText++;}, 1000);
      pauseButton.innerText = "pause"

      plusButton.disabled = false;
      minusButton.disabled = false;
      heartButton.disabled = false;
      submitButton.disabled = false;
    }
  });

  const commentList = document.getElementById("list")

  submitButton.addEventListener("click", function(event){
    event.preventDefault();
    let comment = document.getElementById("comment-input").value
    commentList.innerHTML += `<li>${comment}</li>`
    document.getElementById("comment-form").reset();
  });

});

