let text1 = document.createTextNode("John Doe");
let text2 = document.createTextNode("Avid adventurer and nature enthusiast with a passion for exploring new places and capturing the beauty of the world through photography.");
let text3 = document.createTextNode("Skills");
let p= document.querySelector("#txt")
let h1= document.querySelector(".font1");
let h2= document.querySelector(".font2")

h1.appendChild(text1)
p.appendChild(text2);
h2.appendChild(text3)   

let ul = document.querySelector(".list");
let arr = ["Photography", "Hiking", "Camping", "Outdoor Cooking", "Navigation"];

for (let i = 0; i < arr.length; i++) {
  ul.innerHTML += `<li>${arr[i]}</li>`;
}
