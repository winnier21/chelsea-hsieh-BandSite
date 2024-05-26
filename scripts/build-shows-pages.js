const shows = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Monscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

const showList = document.querySelector(".shows__list");

function loadshows (shows){
    const dateHead = document.createElement("h3");
    dateHead.innerText = "DATE";
    showList.appendChild(dateHead);
    const dateEl = document.createElement ('p');
    dateEl.classList.add ("datefield");
    dateEl.textContent = shows.date;
    showList.appendChild(dateEl);

    const venueHead = document.createElement("h3");
    venueHead.innerText = "VENUE";
    showList.appendChild(venueHead);
    const venueEl = document.createElement ('p');
    venueEl.classList.add ("venuefield");
    venueEl.textContent = shows.venue;
    showList.appendChild(venueEl);

    const locationHead = document.createElement("h3");
    locationHead.innerText = "LOCATION";
    showList.appendChild(locationHead);
    const locationEl = document.createElement ('p');
    locationEl.classList.add ("locationfield");
    locationEl.textContent = shows.location;
    showList.appendChild(locationEl);

    const buyButton = document.createElement("button");
    buyButton.classList.add("buyTickets");
    buyButton.innerText = "Buy Tickets";
    showList.appendChild(buyButton);
}

shows.forEach(loadshows);

