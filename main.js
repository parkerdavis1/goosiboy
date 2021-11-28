let park = document.getElementById('park');
let nell = document.getElementById('nell');

const colorify = function(event) {
  event.target.style.filter = "grayscale(0)";
}

park.onclick = colorify;
nell.onclick = colorify;