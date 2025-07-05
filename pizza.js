let order=document.getElementById("order")
order.addEventListener("click",function(e)){
    e.preventDefault();
    //Select Pizza
    let pizza=document.getElementById("pizza");
    let pizzaOpt=pizza.options[pizza.selectIdex];
    //Select size
    let size=document.getElementById("size");
    let sizeOpt=size.options[pizza.selectIndex];
    //Select Crust
    let crust=document.getElementById("crust");
    let crustOpt=size.options[size.selectIndex];
    //Select Toppings
    let toppings=document.getElementById("toppings");
    let toppingsOpt=toppings.options[toppings.selectIndex];
    //Quatity
    let quatity=document.getElementById("quantity");
    //Message Paragraph
    let message=document.getElementById("message");
    let message =document.getElementById("success");
    //total 
    let total=
    parseInt(sizeOpt.value)*parselnt(quantity.value)+par
}
