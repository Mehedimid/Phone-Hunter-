const loadPhone = async (searchText, isShow) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await response.json();
  const phones = data.data;
  displayPhone(phones, isShow);
};
const displayPhone = (phones, isShow) => {
  // get card container div
  const cardContainer = document.getElementById("card-container");

  // clear fld after search any phone
  cardContainer.textContent = "";

  //show more btn condition
  const showBtnContainer = document.getElementById("show-btn-container");
  if (phones.length > 10 && !isShow) {
    showBtnContainer.classList.remove("hidden");
  } else {
    showBtnContainer.classList.add("hidden");
  }
  // slice to keep only 10 phone
  if (!isShow) {
    phones = phones.slice(0, 10);
  }
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
      <button class="btn btn-primary" onclick="detailsHandler('${phone.slug}')">Details</button>
    </div>
  </div>
</div>
        `
    cardContainer.appendChild(phoneCard);
    loading(false);
  });
};
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//details button
const detailsHandler = async (id) => {
const response  = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
const data = await response.json();
const phone = data.data
// display Phone modal 
details_modal.showModal()
const div = document.getElementById("more_details")
div.innerHTML =`
<div class="flex justify-center mb-8"><img src="${phone.image}"></div>
<div class="ml-6 ">
<h3 class="font-bold text-2xl my-4">${phone.name}</h3>
<p class="text-lg"><span class="font-semibold">Storage :</span> ${phone.mainFeatures?.storage || 'no storage data'}</p>
<p class="text-lg my-2"><span class="font-semibold">Display Size :</span> ${phone.mainFeatures?.displaySize}</p>
<p class="text-lg "><span class="font-semibold">ID :</span> ${phone.slug}</p>
<p class="text-lg my-2"><span class="font-semibold">Release Date :</span> ${phone.releaseDate}</p>
<p class="text-lg "><span class="font-semibold">GPS :</span> ${phone}</p>
<p class="text-lg my-2"><span class="font-semibold">Memory :</span> ${phone.mainFeatures?.memory || 'data is not available'}</p>
<p class="text-lg "><span class="font-semibold">Chipset :</span> ${phone.mainFeatures?.chipSet || 'data is not available'}</p>

</div>
`

console.log(phone)
};







// search button
const searchBtn = (isShow) => {
  loading(true);
  const searchFld = document.getElementById("search-field");
  const searchText = searchFld.value;
  loadPhone(searchText, isShow);
};

const loading = (isLoading) => {
  const loadingContainer = document.getElementById("loading-container");
  if (isLoading) {
    loadingContainer.classList.remove("hidden");
  } else {
    loadingContainer.classList.add("hidden");
  }
};

const showBtn = () => {
  searchBtn(true);
};
