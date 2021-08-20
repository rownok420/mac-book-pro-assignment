


// event linstener for Memory

document.getElementById('free-memory').addEventListener('click',function(){
    const memoryCost = document.getElementById('extra-memory-cost');
    memoryCost.innerText = '0';
})

document.getElementById('cost-memory').addEventListener('click',function(){
    const memoryCost = document.getElementById('extra-memory-cost');
    memoryCost.innerText = '180';
})


// event linstener for Storage

document.getElementById('ssd-256gb').addEventListener('click',function(){
    const storageCost = document.getElementById('extra-storage-cost');
    storageCost.innerText = '0'
})

document.getElementById('ssd-512gb').addEventListener('click',function(){
    const storageCost = document.getElementById('extra-storage-cost');
    storageCost.innerText = '100'
})

document.getElementById('ssd-1tb').addEventListener('click',function(){
    const storageCost = document.getElementById('extra-storage-cost');
    storageCost.innerText = '180'
})


// event linstener for delivery option

document.getElementById('free-delivery').addEventListener('click',function(){
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = '0';
})

document.getElementById('cost-delivery').addEventListener('click',function(){
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = '20';
})
