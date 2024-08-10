const url = "https://api.thecatapi.com/v1/images/search";

const randomizeCat = document.querySelector(".randomButton");
const randomCatImg = document.querySelector(".randomCatImage");

randomizeCat.addEventListener("click", (evt) => {
  fetch(url, {
    headers: {
      "x-api-key":
        "live_ZUirgxan8zSBQxPLib3gOyeteSgxcn6CDmtYzPHEBOYNbjQnT3kq0aHnpM8jLb69",
    },
  })
    .then((res) => res.json())

    .then((data) => (randomCatImg.src = data[0].url));
});
