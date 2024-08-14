let pronoun = ["the", "our", "a"];
let adj = ["great", "big", "scary"];
let noun = ["jogger", "racoon", "dragon"];
let extension = [".com", ".net", ".es", ".io"];

function generator(arr1, arr2, arr3, arr4) {
  let domArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let x = 0; x < arr2.length; x++) {
      let domX = arr1[i] + arr2[x];
      for (let y = 0; y < arr3.length; y++) {
        let domY = domX + arr3[y];
        for (let z = 0; z < arr4.length; z++) {
          let domZ = domY + arr4[z];
          domArray.push(domZ);
        }
      }
    }
  }

  domArray.forEach(e => {
    let li = document.createElement("li");
    li.textContent = e;
    document.getElementById("generator").appendChild(li);
  });
}

window.onload = function domGenerator() {
  generator(pronoun, adj, noun, extension);
};
