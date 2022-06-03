const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItem = [];
const URL = "https://randomuser.me/api/?results=50";

// Fetching Data
const fetchData = async () => {
  const response = await fetch(URL);
  const { results } = await response.json();

  results.innerHTML = "";

  results.forEach((user) => {
    // console.log(user);
    const li = document.createElement("li");
    // console.log(li);
    listItem.push(li);
    li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}" />
        <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;
    result.appendChild(li);
  });
};

fetchData();

// Filter Search

filter.addEventListener("input", (e) => filterData(e.target.value));

const filterData = (term) => {
  listItem.forEach((item) => {
    // console.log(item.innerText);
    if (item.innerText.toLowerCase().includes(term.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
};
