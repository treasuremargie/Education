let order = document.getElementById("order");

order.addEventListener("click", function(e) {
  e.preventDefault();
  //   Select Pizza
  let pizza = document.getElementById("pizza");
  let pizzaOpt = pizza.options[pizza.selectedIndex];
  // Select Size
  let size = document.getElementById("size");
  let sizeOpt = size.options[size.selectedIndex];
  // Select Crust
  let crust = document.getElementById("crust");
  let crustOpt = crust.options[crust.selectedIndex];
  // Select Toppings
  let toppings = document.getElementById("toppings");
  let toppingsOpt = toppings.options[toppings.selectedIndex];
  // Quantity
  let quantity = document.getElementById("quantity");
  //   Message Paragraph
  let message = document.getElementById("message");
  let success = document.getElementById("success");

  //   Total
  let total =
    parseInt(sizeOpt.value) * parseInt(quantity.value) +
    parseInt(crustOpt.value) +
    parseInt(toppingsOpt.value);

  $(document).ready(function() {
    if (pizzaOpt.text == "Select Pizza") {
      message.style.display = "block";
      message.innerText = "Please select a valid pizza";
    } else if (sizeOpt.text == "Select Pizza Size") {
      message.style.display = "block";
      message.innerText = "Please select pizza size";
    } else if (quantity.value == "") {
      message.style.display = "block";
      message.innerText = "Please select pizza quantity";
    } else if (crustOpt.text == "Select Pizza Crust") {
      message.style.display = "block";
      message.innerText = "Please select pizza crust";
    } else if (toppingsOpt.text == "Select Pizza Toppings") {
      message.style.display = "block";
      message.innerText = "Please select pizza topping";
    } else {
      $("tbody").append(
        "<tr><td>" +
          quantity.value +
          "</td>" +
          "<td>" +
          pizzaOpt.text +
          "</td>" +
          "<td>" +
          sizeOpt.text +
          "</td>" +
          "<td>" +
          crustOpt.text +
          "</td>" +
          "<td>" +
          toppingsOpt.text +
          "</td>" +
          "<td>" +
          total +
          "</td></tr>"
      );
      message.style.display = "none";
      success.style.display = "block";
      success.innerText = "Order added successfully";
    }
  });

  //   alert(total);
});

let complete = document.getElementById("complete");

complete.addEventListener("click", function(e) {
  e.preventDefault();
  //   Select Delivery
  let delivery = document.getElementById("delivery-selection");
  let deliveryOpt = delivery.options[delivery.selectedIndex];
  let deliveryLocation = document.getElementById("delivery-location");
  if (deliveryOpt.text == "I want delivery") {
    meso = prompt("Please Enter Your delivery location");
    alert(`Your order will be delivered at ${meso} for an extra Ksh 200`);
  } else if (deliveryOpt.text == "I don't want delivery") {
    alert("Thank you for shopping with Pizza Up");
  }
  // alert("Completed")
});