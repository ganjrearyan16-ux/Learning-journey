function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  // Finish this function
  if (views < 1000000) {
    viewsno = views / 1000 + "k";
  } else if (views > 1000000) {
    viewsno = views / 100000 + "M";
  } else {
    viewsno = views / 1000 + "K";
  }

  let html = `<div class="card">
    <div class="img">
      <img
        src="${thumbnail}"
        alt=""
      />
    </div>
    <div class="text">
      <h1>${title}</h1>
      <p>
        ${cName} . ${viewsno}views . ${monthsOld}
      </p>
    </div>
  </div>`;


  document.querySelector.apply(".container").innerHTML=html

}

createCard(
  "Muniba Mazari Motivational Video, English speechSynthesis,727k views, 2months ago",
  "https://i.ytimg.com/vi/fBnAMUkNM2k/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuALzGA==&rs=AOn4CLBVAXEOfS0jzJec1AVWqe0pCkXLIQ",
);
