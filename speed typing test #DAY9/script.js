let inputField = document.getElementById("input-field");
let paragraphContainer = document.querySelector(".container p");

document.addEventListener("keydown", function () {
  return inputField.focus();
});

paragraph.split("").forEach((e) => {
  let SpanTag = document.createElement("span");
  SpanTag.append(e);
  paragraphContainer.append(SpanTag);
});

function Color() {
  let arr = inputField.value.split("");
  let Spans = document.querySelectorAll("p span");
  if (Number(document.getElementById("time").innerHTML) < 60) {
    for (let i = 0; i < Spans.length; i++) {
      if (arr[i] === Spans[i].innerHTML) {
        Spans[i].classList.add("green");
      } else {
        Spans[arr.length - 1].classList.add("red");
        Spans[arr.length].classList.add("blue")
        Spans[arr.length - 1].classList.remove("blue")
      }
    }
  }
}

inputField.addEventListener("input", Color);

function InfoContainer() {
  Time = setInterval(function time() {
    let time = document.getElementById("time");
    if (Number(time.innerHTML) < 60) {
      time.innerHTML = Number(time.innerHTML) + 1;
    }
  }, 1000);
  setTimeout(function () {
    let WPM = 0;
    let result = document.getElementById("result");
    inputField.value.split("").forEach((e) => {
      if (e === " ") {
        WPM++;
      }
    });
    result.innerHTML = WPM;
  }, 60000);
  document.onkeydown = function () {
    let CPM = document.getElementById("cpm");
    CPM.innerHTML = Number(CPM.innerHTML) + 1;
  };
}

inputField.addEventListener("focus", InfoContainer);

let TryAgain = document.getElementById("try-again");

TryAgain.onclick = function () {
  inputField.value = "";
  document.querySelectorAll("p span").forEach((e) => {
    e.classList.remove("red");
    e.classList.remove("green");
    e.classList.remove("blue")
  });
  document.getElementById("time").innerHTML = 0;
  clearInterval(Time);
  document.getElementById("result").innerHTML = 0;
  document.getElementById("cpm").innerHTML = 0;
};