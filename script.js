const isStatus = document.querySelector("h3");
const friend = document.querySelector("#add");
const msg = document.querySelector("#msg");

let frnd = false;

friend.addEventListener("click", function () {
  if (frnd == false) {
    friend.innerHTML = "Remove";
    isStatus.innerHTML = "Friends";
    isStatus.style.textAlign = "center";
    friend.style.backgroundColor = "red";
    msg.style.display = "block";
    // msg.classList.add("msg");
    frnd = true;
  } else {
    friend.innerHTML = "Add Friend";
    isStatus.innerText = "Stranger";
    friend.style.backgroundColor = "green";
    msg.style.display = "none";
    frnd = false;
  }
});
