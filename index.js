async function getData() {
  
    let res = await fetch(
        "https://corona.lmao.ninja/v3/covid-19/countries");
      let data = await res.json();
      data = JSON.parse(JSON.stringify(data))
      for (var key in data) {
        console.log(key, data[key]);
     }
    // //   console.log(data)
    //   for (let i = 0; i < data.length; i++) {
    //     if (!data) console.log( {});
    //     if (typeof data === 'object') console.log(data);;
    //     if (typeof data === 'string') console.log( JSON.parse(data));
    //       const element = data[i];
    //       console.log(element)
    //   }
    // //   foo(data)
    
  

  
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

