console.log("Clinet Side JS is Loaded");

const submitForm = document.querySelector("form");
const paragraph = document.querySelector("#quote");
const search = document.querySelector("input");

let rating = 0;
let prev = "";
let analysis = 0;
fetch(
  "https://programming-quotes-api.herokuapp.com/quotes/random/lang/en"
).then((response) => {
  response.json().then((data) => {
    console.log(data);
    prev = data.en;

    paragraph.innerHTML = data.en;
    paragraph.innerHTML += "<br><br>";
    paragraph.innerHTML += "- ";
    paragraph.innerHTML += data.author;
    paragraph.setAttribute("display", "block");
  });
});
submitForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  rating = event.target.elements.message.value;

  if (rating >= 1 && rating <= 5) {
    await fetch(
      "https://programming-quotes-api.herokuapp.com/quotes/random/lang/en"
    ).then((response) => {
      response.json().then((data) => {
        console.log(data);
        prev = data.en;

        paragraph.innerHTML = data.en;
        paragraph.innerHTML += "<br><br>";
        paragraph.innerHTML += "- ";
        paragraph.innerHTML += data.author;
        paragraph.setAttribute("display", "block");
        event.target.elements.message.value = "";
      });
    });
  } else {
    alert("Please Input Valid Rating(1-5)");
  }
  // } else {
  // console.log(rating);
  // console.log(prev);
  // fetch("/quote?rating=" + rating + "&prev=" + prev).then((response) => {
  //   console.log("Similarity Basis");
  // response.json().then((data) => {
  // paragraph.innerHTML = data.en;
  // paragraph.innerHTML += "<br>";
  // paragraph.innerHTML += "- ";
  // paragraph.innerHTML += data.rating;
  // paragraph.setAttribute("display", "block");
  // console.log(data.rating);
  // event.target.elements.message.value = "";
  // });
});
// }
// });
