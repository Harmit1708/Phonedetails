document.body.innerHTML = `
<div class="headings"><h1>Phone Details</h1>
<img class="img" src="/Images/oneplus9.jpg" width="350px" height="250px" alt="img">
</div>
<div id="mainContainer" class="sub-container"></div>
`;

let x = document.getElementById("mainContainer");

let i = 0;

function getdata() {
  fetch("https://api-mobilespecs.azharimm.site/v2/top-by-fans")
    .then((response) => response.json())
    .then((obj) => {
      //   console.log(obj);

      obj.data.phones.forEach((element) => {
        x.innerHTML += `
            <div class="container">
                <h3 class="items">Phone Name:${element.phone_name}</h3>
                <p class="items"><span>Slug:${element.slug}</p>
                <p class="items">Favorites:${element.favorites}</p>
                <p class="items">Details:${element.detail}</p>
            </div>         
            `;
      });
    })
    .catch((error) => error);
}

getdata();
