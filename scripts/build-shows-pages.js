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

    // Set the formatted date as text content
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

// function loadShowsFallback() {
//   const fallbackShows = [
//     {
//       date: "Mon Sept 09 2024",
//       venue: "Ronald Lane",
//       location: "San Francisco, CA",
//     },
//     {
//       date: "Tue Sept 17 2024",
//       venue: "Pier 3 East",
//       location: "San Francisco, CA",
//     },
//     {
//       date: "Sat Oct 12 2024",
//       venue: "View Lounge",
//       location: "San Francisco, CA",
//     },
//     {
//       date: "Sat Nov 16 2024",
//       venue: "Hyatt Agency",
//       location: "San Francisco, CA",
//     },
//     {
//       date: "Fri Nov 29 2024",
//       venue: "Monscow Center",
//       location: "San Francisco, CA",
//     },
//     {
//       date: "Wed Dec 18 2024",
//       venue: "Press Club",
//       location: "San Francisco, CA",
//     }
//   ];

//   loadShows(fallbackShows);
// }

function buildShowsPage() {
  newShowsList();
}

buildShowsPage();
// import runApi from './band-site-api.js'

// const shows=[];

// async function newShowsList (){
//   try {
//     const newShows = await runApi.getShows();
//     console.log(newShows);
//     loadshows(newShows);
//     return loadshows

//   } catch (error){
//     console.log (error)
//   }
//   newShowsList()
// }

// //dont change the following

// const showList = document.querySelector(".shows__list");

// function loadshows (shows){
//   const eachShow = document.createElement("tr");
//     const dateHead = document.createElement("h3");
//     dateHead.innerText = "DATE";
//     eachShow.appendChild(dateHead);

//     const dateEl = document.createElement ('p');
//     dateEl.classList.add ("datefield");
//     dateEl.textContent = shows.date;
//     eachShow.appendChild(dateEl);

//     const venueHead = document.createElement("h3");
//     venueHead.innerText = "VENUE";
//     eachShow.appendChild(venueHead);

//     const venueEl = document.createElement ('p');
//     venueEl.classList.add ("venuefield");
//     venueEl.textContent = shows.venue;
//     eachShow.appendChild(venueEl);

//     const locationHead = document.createElement("h3");
//     locationHead.innerText = "LOCATION";
//     eachShow.appendChild(locationHead);

//     const locationEl = document.createElement ('p');
//     locationEl.classList.add ("locationfield");
//     locationEl.textContent = shows.location;
//     eachShow.appendChild(locationEl);

//     const buyButton = document.createElement("button");
//     buyButton.classList.add("buyTickets");
//     buyButton.innerText = "BUY TICKETS";
//     eachShow.appendChild(buyButton);

//     eachShow.classList.add("each-event");
//     showList.appendChild(eachShow);
// }

// function buildShowsPage(){
//   newShowsList();
// shows.forEach(loadshows);
// }
// buildShowsPage();
