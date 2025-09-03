const favCount = document.querySelector('#favCount');

const heartIcons = document.querySelectorAll(".love-icon");

for(const icon of heartIcons){
    icon.addEventListener('click', function(){

        favCount.textContent = parseInt(favCount.textContent) + 1;
    })
}