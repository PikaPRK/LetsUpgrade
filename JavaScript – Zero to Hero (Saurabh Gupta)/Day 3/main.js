// Make 2 Input Fields (Name & City) & Print their Values when Clicked

function respond(){
    // console.log("I'm Working Fine");

    // document.querySelector("#area").innerHTML="PikaPRK";

    let name=document.querySelector("#name").value;
    let city=document.querySelector("#city").value;

    document.querySelector("#area").innerHTML=`Name: <strong>${name}</strong>  |  City: <strong>${city}</strong>`;
}