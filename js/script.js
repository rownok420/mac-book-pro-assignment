// all target element

const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('extra-memory-cost');
const storageCost = document.getElementById('extra-storage-cost');
const deliveryCharge = document.getElementById('delivery-charge');
const allCost = document.getElementById('total-price');
const total = document.getElementById('total');
const pomoInput = document.getElementById('pomo-input');


// function for Total Price 

function totalPrice(){
    const totalCost = parseInt(bestPrice.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCharge.innerText);
    allCost.innerText = totalCost;
    return totalCost;
}



// event linstener for Memory

document.getElementById('free-memory').addEventListener('click',function(){
    memoryCost.innerText = '0';
    totalPrice();
    total.innerText = totalPrice();
})

document.getElementById('cost-memory').addEventListener('click',function(){
    memoryCost.innerText = '180';
    totalPrice();
    total.innerText = totalPrice();
})


// event linstener for Storage

document.getElementById('ssd-256gb').addEventListener('click',function(){
    storageCost.innerText = '0'
    totalPrice();
    total.innerText = totalPrice();
})

document.getElementById('ssd-512gb').addEventListener('click',function(){
    storageCost.innerText = '100'
    totalPrice();
    total.innerText = totalPrice();
})

document.getElementById('ssd-1tb').addEventListener('click',function(){
    storageCost.innerText = '180'
    totalPrice();
    total.innerText = totalPrice();
})


// event linstener for delivery option

document.getElementById('free-delivery').addEventListener('click',function(){
    deliveryCharge.innerText = '0';
    totalPrice();
    total.innerText = totalPrice();
})

document.getElementById('cost-delivery').addEventListener('click',function(){
    deliveryCharge.innerText = '20';
    totalPrice();
    total.innerText = totalPrice();
})


// total calculation with pomo code

function pomoCode(){
    const pomoValue = pomoInput.value;
    // console.log(pomoValue)
    if(pomoValue == 'stevekaku'){
        total.innerText = (parseInt(total.innerText) * 20) / 100;
        pomoInput.value = '';
    }else{
        alert('Please Enter Correct Pomo Code')
    }
   
}
