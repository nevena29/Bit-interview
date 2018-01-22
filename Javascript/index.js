fetch("http://localhost:3333/api/candidates")
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        console.log("Request successful", response)
        candidatesData(response)
    }).catch(function (error) {
        console.log("Request failed")
    });

function candidatesData(response) {
    for (i = 0; i < response.length; i++) {


        var elementAvatar = response[i].avatar || "http://style.anu.edu.au/_anu/4/images/placeholders/person.png";
        var elementName = response[i].name;
        var elementEmail = response[i].email;
        var elementId = response[i].id;

        var candidateCard = document.createElement("div");
        candidateCard.setAttribute("class", "card col-12 col-md-4");
        candidateCard.setAttribute("style", "width: 18rem");


        var candidateImage = document.createElement("img");
        candidateImage.setAttribute("class", "card-img-top");
        candidateImage.setAttribute("src", elementAvatar);
        candidateImage.setAttribute("alt", "Card iage cap");
        candidateImage.setAttribute("style", "width: 12rem");
        candidateImage.setAttribute("style", "height: 12rem");
        candidateCard.appendChild(candidateImage);
        console.log(candidateImage);

        var candidateCardBody = document.createElement("div");
        candidateCardBody.setAttribute("class", "card-body");
        candidateCard.appendChild(candidateCardBody);

        var candidateName = document.createElement("h5");
        var candidateNameText = document.createTextNode(elementName);
        candidateName.appendChild(candidateNameText);
        candidateName.setAttribute("class", "card-title");

        var candidateNameLink = document.createElement("a");
        candidateNameLink.setAttribute("href", "#");
        candidateNameLink.setAttribute("data-id", elementId);
        candidateNameLink.appendChild(candidateName);
        candidateCardBody.appendChild(candidateNameLink);

        var candidateEmail = document.createElement("p");
        var candidateEmailText = document.createTextNode(elementEmail);
        candidateEmail.appendChild(candidateEmailText);
        candidateName.setAttribute("class", "card-text");
        candidateCardBody.appendChild(candidateEmail);



        var main = document.querySelector(".candidateInfo")

        main.appendChild(candidateCard);



    }
}



{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div> */}