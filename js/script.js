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

function memoryTest(id, price){
    document.getElementById(id).addEventListener('click',function(){
        memoryCost.innerText = price;
        totalPrice();
        total.innerText = totalPrice();
    })
}

memoryTest('free-memory','0');
memoryTest('cost-memory','180');


// event linstener for Storage

function storageTest(id, price){
    document.getElementById(id).addEventListener('click',function(){
        storageCost.innerText = price;
        totalPrice();
        total.innerText = totalPrice();
    })
}

storageTest('ssd-256gb', '0');
storageTest('ssd-512gb', '100');
storageTest('ssd-1tb', '180');


// event linstener for delivery option

function deliveryTest(id, price){
    document.getElementById(id).addEventListener('click',function(){
        deliveryCharge.innerText = price;
        totalPrice();
        total.innerText = totalPrice();
    })
}

deliveryTest('free-delivery', '0');
deliveryTest('cost-delivery', '20');

// total calculation with pomo code

function pomoCode(){
    const pomoValue = pomoInput.value;
    if(pomoValue == 'stevekaku'){
        const pomoCalculation = (parseInt(allCost.innerText) * 20) / 100;
        total.innerText = parseInt(allCost.innerText) - pomoCalculation;
        pomoInput.value = '';
    }else{
        alert('Please Enter Correct Pomo Code');
    }
   
}
