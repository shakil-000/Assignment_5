const LoveLogoCount = document.querySelector('#LoveCount');

const heartIcons = document.querySelectorAll(".love-icon");

for(const icon of heartIcons){
    icon.addEventListener('click', function(){

        let CountingNumber = parseInt(LoveLogoCount.innerText);
        CountingNumber++;
        LoveLogoCount.innerText = CountingNumber;
    }) 
}


//calling related 
const NumberOfCoins = document.getElementById('coinCount')
const callButtons = document.getElementsByClassName('call-btn')

const historyList = document.getElementById('historyListing')

for(const btn of callButtons){
    btn.addEventListener('click', function(){

        const card = btn.closest('.card');
        const serviceName = card.querySelector('.card-name').innerText
        const serviceNumber = card.querySelector('.card-number').innerText
        
        let UpdatedCoins = parseInt(NumberOfCoins.innerText);

        if(UpdatedCoins < 20){
            alert("Not enough coins to make a call!");
            return;
        }
        else{
            alert("Calling "+serviceName +" "+serviceNumber+" .....")
            NumberOfCoins.innerText = UpdatedCoins - 20; 
            
            //history related
            const li = document.createElement('li')
            const PresentTime = new Date();
            const LocalTime = PresentTime.toLocaleTimeString();

            li.innerHTML = `<div class = "flex justify-between items-center bg-gray-200 p-2 rounded-md">
            <div>
             <p class = "font-medium">${serviceName}</p>
             <p class = "text-gray-500 text-sm">${serviceNumber}</p>
             </div>
             <div class = "text-gray-500 text-sm">${LocalTime}</div>
             </div> `;

            li.classList.add('mb-2')
            historyList.appendChild(li);   
            
        }


    })
}


  //clear history related
document.getElementById('clearHistory')
.addEventListener('click', function(){

    historyList.style.display = 'none' ;
})


//Copy Button Related
const copyNumbers = document.getElementById('copy-number')
const copyButtons = document.getElementsByClassName('copy-btn')

for(const button of copyButtons){
    button.addEventListener('click', function(){

       const card = button.parentElement.parentElement;
       const CopiedNumbers = card.getElementsByClassName('card-number')[0].innerText;
       
       alert("Copied "+ CopiedNumbers + " to clipboard!")

       navigator.clipboard.writeText(CopiedNumbers);

      let NumberCount = parseInt(copyNumbers.innerText)
      NumberCount++;
      copyNumbers.innerText = NumberCount;

    })
}




