let blackThroughTimeAndSpace = [
    "https://www.barnorama.com/wp-content/uploads/2019/05/beautiful_women_12.jpg",
    "http://atlantablackstar.com/wp-content/uploads/2013/09/Garifuna-Woman-KENIA-MARTINEZ-Miss-Honduras-2010-Contestant-for-Miss-Universe.jpg",
    "http://atlantablackstar.com/wp-content/uploads/2014/10/Sigail-Currie-600x600.jpg",
    "http://cdn.cavemancircus.com//wp-content/uploads/images/2018/july/beautiful_black_women/beautiful_black_women_1.jpg",
    "https://www.barnorama.com/wp-content/uploads/2019/05/beautiful_women_03.jpg",
    "https://www.stylevore.com/wp-content/uploads/2019/04/1556356915_655_notitle.jpg",
    "https://netstorage-tuko.akamaized.net/images/0fgjhs36nflcdmdo9.jpg?imwidth=900",
    "https://i.pinimg.com/originals/71/38/54/71385477859ae0e77b6bb31028f16822.jpg",
    "https://pbs.twimg.com/profile_images/1186791037928378369/Ni5CAqw5.jpg",
    "https://avatars.githubusercontent.com/u/88138569?s=400&u=c323f2140120fcca7448b058207d818eeb619e57&v=4"
];

const imageList = document.getElementsByTagName("img");

for(let i = 0; i < imageList.length; i++) {
    const randomImage = Math.floor(Math.random() * blackThroughTimeAndSpace.length);
    imageList[i].src = blackThroughTimeAndSpace[randomImage];
}

const headerList = document.getElementsByTagName("h2");

for(let i = 0; i < headerList.length; i++) {
    headerList[i].innerText = "Ebony Groove";
}

// Get Extension Form Data
const wrapper = document.querySelector(".wrapper"),
    form = wrapper.querySelectorAll(".registration-form"),
    submitInput = form[0].querySelector("input[type='submit'")

function getFormData(e) {
    e.preventDefault();

    var formData = new FormData(form[0]);

    var rating = formData.get('rate');
    
    alert(rating);
}

document.addEventListener('DOMContentLoaded', function(){

submitInput.addEventListener('click', getFormData, false);

}, false);