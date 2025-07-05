let order=document.getElementById("order");
order.addEventListener("click",function(e)){ 
    e.preventDefault();
    //Select Pizza
    let pizza=document.getElementById("pizza");
    let pizzaOpt=pizza.options[pizza.selectedqindex];
    //Select Size
    let size=document.getElementById("size");
    let sizeOpt=size.Option[pizza.selectedindex];
    //Select Crust
    let crust=document.getElementById("crust")
    let crustOpt=crust.option[crust.selectindex];
    //Select Toppings
    let topping=document.getElementById("topping")
    let toppingOpt=topping.options[topping.selectedindex];
    //Quality
    let quantity=document.getElementById("quality");
    //Message Paragraph
    let message=document.getElementById("message");
    let success=document.getElementById("success");
    //Total
    let total=
    parselnt(sizeOpt.value)*parseInt(Quality.value)+parseInt(crustOpt.value)+parselnt(toppingOpt.value);

    $(document).read(function ()){
        if(pizzaOpt.text=="Select Pizza"){
            message.style.display="block";
            message.innerText="Please select a valid pizza";
        }else if(sizeOpt.text=="Select Pizza Size"){
            messsage.style.display="block";
            message.innerText="Place select pizza size";
        }else if(quality.value==""){
            message.style.display="block";
            message.innerText="Please select pizza quality";
        }else if(crustOpt.text=="Select Pizza Crust"){
            message.style.display="block";
            message.innerText="Please select pizza crust";
        }else if(toppingsOpt.text=="Select Pizza Toppings"){
            message.style.display="block";
            message.innerText="Please select pizza toppings";
        }else{
            $("tbody").append("<tr><td>"+
                quality.value+"</td>"+"<td>"+
                pizzaOpt.text+ "</td>"+"<td>"+
                sizeOpt.text+"</td>"+"<td>"+
                crustOpt.text+"</td>"+"<td>"+
                toppingsOpt.text+"</td>" +"<td>"+
                total+ "</td></tr>"
            );
            message.style.display="none";
            success.style.display="block";
            success.innerText="Oder added successfully";
    }
}
//alert(total);
let cimplete=document.getElementById("complete");
complete.addEventListener("click",function(e)){
    e.preventDefault();
    //Select Delivery
    let delivery=document.getElementById("delivery-selection");
    let deliveryOpt=delivery.options[delivery.selectedindex];
    let deliveryLocation=document.getElementById("delivery-location");
    if(deliveryOpt.text=="i want delivery"){
        meso=prompt("Please Enter Your delivery location");
        alert(`Your order will be delivered at${meso}for an extra Ksh200`);
        else if(deliveryOpt.text=="i dont want delivery"){
            alert("Thank you for shopping with Pizza Up");
        }
        //alert("completed")
    }
}
}


