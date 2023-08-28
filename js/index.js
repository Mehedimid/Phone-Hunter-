const phoneCardMaking = async () =>{
    const response = await fetch("https://openapi.programming-hero.com/api/phones?search=iphone");
    const data = await response.json();
    const phones = data.data;
    phoneCard(phones)

}
const phoneCard = (phones) => {
    const cardContainer = document.getElementById('card-container')
    phones.forEach(phone => {
        const phoneCard = document.createElement('div')
        phoneCard.innerHTML=`
        <div class="card w-80 bg-gray-300 shadow-xl">
        <figure class="mt-2">
          <img
            src="${phone.image}"
            alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title mx-auto mb-2">${phone['phone_name']}</h2>
          <div class="card-actions justify-end">
            <button class="btn btn-primary mx-auto ">Buy Now</button>
          </div>
        </div>
      </div>
        `
        cardContainer.appendChild(phoneCard)
    });
}
phoneCardMaking()