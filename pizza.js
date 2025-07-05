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
    let success=document.getElementById("success");
    //total 
    let total=
    parseInt(sizeOpt.value)*parselnt(quantity.value)+parselnt(toppingsOpt.value);
    $(document).ready(function()){
        if(pizzaOpt.text=="Select Pizza"){
            message.style.display="block";
            message.innerText="Please select a valid pizza";
        }else if(sizeOpt.text=="Select Pizza Size"){
            message.style.display="block";
            message.innerText="Please Select Pizza size";
        }else if(Quality.value==""){
            message.style.display="block";
            message.innerText="Please select pizza quality";
        }else if(crustOpt.text=="Select Pizza Crust"){
            message.style.display="block";
            message.innerText="Please select pizza crust";
        }else if(toppingsOpt.text=="Select Pizza Toppings"){
            message.style.display="block";
            message.innerText="Please select pizza topping";
        }else{
            $("tbody").append("<tr><td>"+
                quantity.value+"</td>"+"<td>"+
                pizzaOpt.text+"</td>"+"<td>"+
                sizeOpt.text+"</td>"+"<td>"+
                toppingsOpt.text+"</td>"+"<td>"+
                total+
                "</td></tr>"
            )
            message.style.display="none";
            success.style.display="block";
            success.innerText="Order added successfully";
        }
    }
    // altert(total);
}
let complete=document.getElementById("complete");
complete.addEventListener("click",function(e)){
    e.preventDefault();
    //Select Delivery
    let delivery=document.getElementById("delivery-selection");
    let deliveryOpt=delivery.options[delivery.selectIdex];
    let deliveryLocation=document.getElementById("delivery-location");
    if(deliveryOpt=="i want delivery"){
        meso=prompt("Please Enter Your delivery location");
        alert(`Your order will be dellivered at $ {meso}for an extra Ksh200`);
    }else if(deliveryOpt.text=="i dont want delivery"){
        alert("Thank you for shopping with Pizza Up");
    }
    //alert("Completed")
}