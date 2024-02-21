`use strict`;
function slugify(title) {
    let srt = title.toLowerCase().split(" ").join("-");
   
    return srt
}

slugify("Arrays for begginers")
slugify("English for developer")
slugify("Ten secrets of JavaScript")
slugify("How to become a JUNIOR developer in TWO WEEKS")

console.log(slugify("Arrays for begginers")); 
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));