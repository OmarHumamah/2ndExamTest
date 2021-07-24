'use strict'
let ordersArray = [];

function Order (name, drinkType, milk){
    this.name = name,
    this.drinkType = drinkType,
    this.milk = milk,
    ordersArray.push(this)
}
let order = document.getElementById('order');
order.addEventListener('submit', handler);
function handler(event){
   // event.preventDefault();
    let newName = event.target.name.value;
    let newDrinkType = '';
    if(event.target.tea.checked){
        newDrinkType= 'Tea'
    }else if (event.target.nescaffe.checked){
        newDrinkType = 'Nescafe'
    }else if (event.target.coffeBlack.checked){
        newDrinkType = 'CafeBlack'
    }
    let newMilk = '';
    if (event.target.milk.checked){
        newMilk = 'With milk'
    }else{
        newMilk = 'Without milk'
    }
    console.log(newName);
    console.log(newDrinkType);
    console.log(newMilk);
    console.log(event);
    list.textContent = '';
    new Order (newName, newDrinkType, newMilk);
    save();
    console.log(ordersArray);

    renderList()
}

let list = document.getElementById('ulist');
function renderList (){ 
for (let i = 0; i < ordersArray.length; i++) {
    let li = document.createElement('li');
    list.appendChild(li);
    list.insertBefore(li , list.firstChild);
    li.textContent = `Customer ${ordersArray[i].name} has ordered ${ordersArray[i].drinkType}, ${ordersArray[i].milk}`
    
}
}

function save(){
    let savedList = JSON.stringify(ordersArray)
localStorage.setItem('key', savedList)
}
let savedOrderArray = localStorage.getItem('key');

function getSavedList() {
    ordersArray = JSON.parse(savedOrderArray);
    renderList()
}

if (savedOrderArray){
    getSavedList();
}