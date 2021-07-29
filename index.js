async function getData() {
  let res = await fetch(
    "https://covid-api.mmediagroup.fr/v1/cases?country=India");
  let data = await res.json();
  data = JSON.parse(data)
  data.forEach((element) => {
      console.log(element)
  });
//   foo(data)
  console.log(data);

  
}

getData();

function foo(data) {
    let container = document.createElement("div");
    container.setAttribute("class", "container");

    let row = document.createElement("div");
    row.setAttribute("class", "row");


    data.forEach((element) => {
        let col = document.createElement("div");
        col.setAttribute("class", "col-4 mb-3");

        let card = document.createElement("div");
        card.setAttribute("class", "card h-100");

      

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        let cardTitle = document.createElement("div");
        cardTitle.setAttribute("class", "h2");
        cardTitle.innerHTML = element.confirmed;

        let cardText = document.createElement("p");
        cardText.setAttribute("class", "card-text");
        cardText.innerHTML = "Recovered: "+ element.recovered + " Death: " 
        + element.deaths + " Updated: " + element.updated;

        cardBody.append(cardTitle, cardText);
        card.append(cardBody);
        col.append(card)
        row.append(col);
    });

    container.append(row);
    document.body.append(container);
}

