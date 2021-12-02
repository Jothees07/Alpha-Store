// $(".button_select").click(function(event){
//     var z = this.id;
//     var y = document.getElementById(z + "_i").innerHTML ;                   
//     $("#cart_items").append(y);
//     $("#cart_items .button_select").hide();
//     let w = Number(document.getElementById("total").innerHTML);
//     let u = Number(document.getElementById(z+ "_qty").value);
//     let x = Number(document.getElementById(z+ "_p").innerHTML);
//     let t = u*x;
//     let v = w+t;
//     document.getElementById("total").innerHTML=v;
//     var n = z+"_qty";
//     $("#cart_items #" + n).val(u) ;
    
//   });

var sno=0;

$(".add_cart_button").click(function(event){
    var product = this.id;
    var product_item = document.getElementById(product + "_i").innerHTML ; 
    var qty = Number(document.getElementById(product+ "_qty").value);
    var product_price = Number(document.getElementById(product+ "_p").textContent);
    var product_item_name = document.getElementById(product + "_n").textContent ;
    var total_price = Number(document.getElementById("total_price").innerHTML);
    sno = sno+1;

    let price_each_prod = qty*product_price;
    let total = total_price+price_each_prod;

    $("#cart_items").append(product_item); 
    $("#cart_items .add_cart_button").hide();
    // $("#cart_items .add_cart_button").innerHTML("Remove item");
    // $("#cart_items .add_cart_button").css("backgroundColor", "red");
    var product_qty = product+"_qty";
    $("#cart_items #" + product_qty).val(qty) ;

    $("#cart_details button").css("display", "block");

    $("#cart_details table tr:last").after("<tr> <td>"+sno+"</td> <td>"+product_item_name+"</td> <td>"+qty+"</td> <td>"+product_price*qty+"</td> </tr>");
    document.getElementById("total_price").innerHTML = total;
});

$("#proceed").click(function(event){
    alert("The function is under progress");
});

$("#clear_cart").click(function(event){
    document.getElementById("total_price").innerHTML = "";
    document.getElementById("cart_items").innerHTML = ""; 
    $("#cart_details table tr:not(:first)").remove();
    $("#cart_details button").css("display", "none");

});

