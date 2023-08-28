const loadPhone = async (searchText) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await response.json();
  const phones = data.data;
  displayPhone(phones);
};
const displayPhone = (phones) => {
    // get card container div
    const cardContainer = document.getElementById("card-container")

    // clear fld after search any phone 
    cardContainer.textContent = ''

    // condition 
    const showBtnContainer = document.getElementById("show-btn-container")
    if(phones.length>5){
       showBtnContainer.classList.remove('hidden')
    }
    else{
        showBtnContainer.classList.add('hidden')
    }
    // slice to keep only 10 phone 
    phones = phones.slice(0, 10)

//   phone loop 
  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.innerHTML = `
        <div class="card bg-green-200 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="${phone.image}" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title mb-2">${phone.phone_name}</h2>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        `

        cardContainer.appendChild(phoneCard)

  });
};


const searchBtn = () =>{
    const searchFld = document.getElementById("search-field");
    const searchText = searchFld.value ;
    loadPhone(searchText);
}

const showBtn = (target) => {

}
