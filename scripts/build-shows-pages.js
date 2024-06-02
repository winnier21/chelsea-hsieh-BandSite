import runApi from "./band-site-api.js";

async function newShowsList() {
  try {
    const newShows = await runApi.getShows();
    console.log(newShows);
    loadShows(newShows);
  } catch (error) {
    console.error(error);
  }
}
newShowsList();

const showList = document.querySelector(".shows__list");

function loadShows(showsList) {
  showList.innerHTML = ""; // Clear previous shows

  showsList.forEach((show) => {
    const eachShow = document.createElement("tr");

    const dateHead = document.createElement("h3");
    dateHead.innerText = "DATE";
    eachShow.appendChild(dateHead);

    const dateEl = document.createElement("p");
    dateEl.classList.add("datefield");
    const dateObj = new Date(show.date);
    const options = {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    };
    const formattedDate = dateObj.toLocaleDateString("en-US", options).replace(/,/, '');
    dateEl.textContent = formattedDate;

    eachShow.appendChild(dateEl);

    const venueHead = document.createElement("h3");
    venueHead.innerText = "VENUE";
    eachShow.appendChild(venueHead);

    const venueEl = document.createElement("p");
    venueEl.classList.add("venuefield");
    venueEl.textContent = show.place;
    eachShow.appendChild(venueEl);

    const locationHead = document.createElement("h3");
    locationHead.innerText = "LOCATION";
    eachShow.appendChild(locationHead);

    const locationEl = document.createElement("p");
    locationEl.classList.add("locationfield");
    locationEl.textContent = show.location;
    eachShow.appendChild(locationEl);

    const buyButton = document.createElement("button");
    buyButton.classList.add("buyTickets");
    buyButton.innerText = "BUY TICKETS";
    eachShow.appendChild(buyButton);

    eachShow.classList.add("each-event");
    showList.appendChild(eachShow);
  });
}


function buildShowsPage() {
  newShowsList();
}

buildShowsPage();
