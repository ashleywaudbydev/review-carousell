    //-----------LIST OF OBJECTS FOR EACH REVIEW----------\\
let reviews = [
    {
        id: 1,
        name: "Ashley Waudby",
        job: "Web Developer",
        img: "./images/ash.jpg" ,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab alias optio esse sapiente dolorum maiores ex minus neque? Asperiores, qui!."
    },
    {
        id: 2,
        name: "Bridie Chapman",
        job: "Full Time Mum",
        img: "./images/bridie.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab alias optio esse sapiente dolorum maiores ex minus neque? Asperiores, qui!."
    },
    {
        id: 3,
        name: "Jarron Barnes",
        job: "Delivery Driver",
        img: "./images/jazz.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab alias optio esse sapiente dolorum maiores ex minus neque? Asperiores, qui!."
    },
    {
        id: 4,
        name: "Michelle Waudby",
        job: "Unemployed",
        img: "./images/michelle.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab alias optio esse sapiente dolorum maiores ex minus neque? Asperiores, qui!."
    }
]

/*----------SELECT THE DOM ELEMENTS OF THE REVIEW----------*/
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const img = document.getElementById("person-img");
/*----------SELECT THE 3 BUTTONS----------*/
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
/*----------REVIEW STARTING POSITION----------*/
let currentItem = 0;

 /*----------LOAD INITIAL ITEM----------*/
 window.addEventListener("DOMContentLoaded", function () {
    showPerson[currentItem]
});

/*----------FUNCTION THAT GETS THE DATA TO SHOW PERSON----------*/
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

}

/*----------SHOW NEXT PERSON----------*/
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

    /*----------SHOW PREV PERSON----------*/
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0  ){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
})
/*----------SHOW RANDOM PERSON----------*/
    randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem);
})