// function to sorting the items 

function sort(){
    var veg_sort = document.getElementById("veg_sort");
    var fruit_sort = document.getElementById("fruit_sort");
    var dairy_sort = document.getElementById("dairy_sort");
    var range_checkbox = document.getElementById("price_sort_option");
    var range = document.getElementById("price_range_sort").value;
    var search_txt = document.getElementById("search").value;
    var Vegetables = document.getElementsByClassName("Vegetables");
    var fruits = document.getElementsByClassName("fruits");
    var dairy = document.getElementsByClassName("dairy");
    
    
    if (search_txt != "") {
        
    
    
    $('.Vegetables').hide();
    $('.fruits').hide();
    $('.dairy').hide();

    for(var i = 0; i < Vegetables.length; i++){
        var search_veg = Vegetables[i].getElementsByClassName("product_name");
        for(var j = 0; j < search_veg.length; j++){
            
            if(search_veg[j].textContent.toLowerCase() == search_txt.toLowerCase()){
                document.getElementsByClassName("Vegetables")[i].style.display="block";
                document.getElementById("search").value = "";
            }else{
                for(var k = 0; k < fruits.length; k++){
                    var search_fruit = fruits[k].getElementsByClassName("product_name");
                    for(var l = 0; l < search_fruit.length; l++){
            
                        if(search_fruit[l].textContent.toLowerCase() == search_txt.toLowerCase()){
                            document.getElementsByClassName("fruits")[k].style.display="block";
                            document.getElementById("search").value = "";
                        }else{
                            for(var m = 0; m < dairy.length; m++){
                                var search_dairy = dairy[m].getElementsByClassName("product_name");
                                for(var n = 0; n < search_dairy.length; n++){
            
                                    if(search_dairy[n].textContent.toLowerCase() == search_txt.toLowerCase()){
                                        document.getElementsByClassName("dairy")[m].style.display="block";
                                        document.getElementById("search").value = "";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    } else {
        
    
    
    if(veg_sort.checked == true && fruit_sort.checked == false && dairy_sort.checked == false){
        $('.Vegetables').show();
        $('.fruits').hide();
        $('.dairy').hide();
    }else if(veg_sort.checked == false && fruit_sort.checked == true && dairy_sort.checked == false){
        $('.Vegetables').hide();
        $('.fruits').show();
        $('.dairy').hide();
    }else if(veg_sort.checked == false && fruit_sort.checked == false && dairy_sort.checked == true){
        $('.Vegetables').hide();
        $('.fruits').hide();
        $('.dairy').show();
    }else if(veg_sort.checked == true && fruit_sort.checked == true && dairy_sort.checked == false){
        $('.Vegetables').show();
        $('.fruits').show();
        $('.dairy').hide();
    }else if(veg_sort.checked == false && fruit_sort.checked == true && dairy_sort.checked == true){
        $('.Vegetables').hide();
        $('.fruits').show();
        $('.dairy').show();
    }else if(veg_sort.checked == true && fruit_sort.checked == false && dairy_sort.checked == true){
        $('.Vegetables').show();
        $('.fruits').hide();
        $('.dairy').show();
    }else{
        $('.Vegetables').show();
        $('.fruits').show();
        $('.dairy').show();
    }

    }  

    // if(range_checkbox.checked == true){
    //     for(var i = 0; i < Vegetables.length; i++){
    //     var search_p_veg = Vegetables[i].getElementsByClassName("price");
    //     for(var j = 0; j < search_p_veg.length; j++){
            
    //         if(parseInt(search_p_veg[j].textContent) <= parseInt(range)){
    //             document.getElementsByClassName("Vegetables")[i].style.display="block";
    //         }else{
    //             for(var k = 0; k < fruits.length; k++){
    //                 var search_p_fruit = fruits[k].getElementsByClassName("price");
    //                 for(var l = 0; l < search_p_fruit.length; l++){
            
    //                     if(parseInt(search_p_fruit[l].textContent) <= parseInt(range)){
    //                         document.getElementsByClassName("fruits")[k].style.display="block";
    //                     }else{
    //                         for(var m = 0; m < dairy.length; m++){
    //                             var search_p_dairy = dairy[m].getElementsByClassName("price");
    //                             for(var n = 0; n < search_p_dairy.length; n++){
            
    //                                 if(parseInt(search_p_dairy[n].textContent) <= parseInt(range)){
    //                                     document.getElementsByClassName("dairy")[m].style.display="block";
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
        
    //}
}

// function to sorting the items 

function sort_pp(){
    var veg_sort_pp = document.getElementById("veg_sort_pp");
    var fruit_sort_pp = document.getElementById("fruit_sort_pp");
    var dairy_sort_pp = document.getElementById("dairy_sort_pp");
    var range_checkbox_pp = document.getElementById("price_sort_option_pp");
    var range_pp = document.getElementById("price_range_sort_pp").value;
    var search_txt_pp = document.getElementById("search_pp").value;
    var Vegetables_pp = document.getElementsByClassName("Vegetables");
    var fruits_pp = document.getElementsByClassName("fruits");
    var dairy_pp = document.getElementsByClassName("dairy");
    
    
    if (search_txt_pp != "") {
        
    
    
    $('.Vegetables').hide();
    $('.fruits').hide();
    $('.dairy').hide();

    for(var i = 0; i < Vegetables_pp.length; i++){
        var search_veg_pp = Vegetables_pp[i].getElementsByClassName("product_name");
        for(var j = 0; j < search_veg_pp.length; j++){
            
            if(search_veg_pp[j].textContent.toLowerCase() == search_txt_pp.toLowerCase()){
                document.getElementsByClassName("Vegetables")[i].style.display="block";
                document.getElementById("search_pp").value = "";

            }else{
                for(var k = 0; k < fruits_pp.length; k++){
                    var search_fruit_pp = fruits_pp[k].getElementsByClassName("product_name");
                    for(var l = 0; l < search_fruit_pp.length; l++){
            
                        if(search_fruit_pp[l].textContent.toLowerCase() == search_txt_pp.toLowerCase()){
                            document.getElementsByClassName("fruits")[k].style.display="block";
                            document.getElementById("search_pp").value = "";
                        }else{
                            for(var m = 0; m < dairy_pp.length; m++){
                                var search_dairy_pp = dairy_pp[m].getElementsByClassName("product_name");
                                for(var n = 0; n < search_dairy_pp.length; n++){
            
                                    if(search_dairy_pp[n].textContent.toLowerCase() == search_txt_pp.toLowerCase()){
                                        document.getElementsByClassName("dairy")[m].style.display="block";
                                        document.getElementById("search_pp").value = "";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    } else {
        
    
    
    if(veg_sort_pp.checked == true && fruit_sort_pp.checked == false && dairy_sort_pp.checked == false){
        $('.Vegetables').show();
        $('.fruits').hide();
        $('.dairy').hide();
    }else if(veg_sort_pp.checked == false && fruit_sort_pp.checked == true && dairy_sort_pp.checked == false){
        $('.Vegetables').hide();
        $('.fruits').show();
        $('.dairy').hide();
    }else if(veg_sort_pp.checked == false && fruit_sort_pp.checked == false && dairy_sort_pp.checked == true){
        $('.Vegetables').hide();
        $('.fruits').hide();
        $('.dairy').show();
    }else if(veg_sort_pp.checked == true && fruit_sort_pp.checked == true && dairy_sort_pp.checked == false){
        $('.Vegetables').show();
        $('.fruits').show();
        $('.dairy').hide();
    }else if(veg_sort_pp.checked == false && fruit_sort_pp.checked == true && dairy_sort_pp.checked == true){
        $('.Vegetables').hide();
        $('.fruits').show();
        $('.dairy').show();
    }else if(veg_sort_pp.checked == true && fruit_sort_pp.checked == false && dairy_sort_pp.checked == true){
        $('.Vegetables').show();
        $('.fruits').hide();
        $('.dairy').show();
    }else{
        $('.Vegetables').show();
        $('.fruits').show();
        $('.dairy').show();
    }

    }  

    // if(range_checkbox.checked == true){
    //     for(var i = 0; i < Vegetables.length; i++){
    //     var search_p_veg = Vegetables[i].getElementsByClassName("price");
    //     for(var j = 0; j < search_p_veg.length; j++){
            
    //         if(parseInt(search_p_veg[j].textContent) <= parseInt(range)){
    //             document.getElementsByClassName("Vegetables")[i].style.display="block";
    //         }else{
    //             for(var k = 0; k < fruits.length; k++){
    //                 var search_p_fruit = fruits[k].getElementsByClassName("price");
    //                 for(var l = 0; l < search_p_fruit.length; l++){
            
    //                     if(parseInt(search_p_fruit[l].textContent) <= parseInt(range)){
    //                         document.getElementsByClassName("fruits")[k].style.display="block";
    //                     }else{
    //                         for(var m = 0; m < dairy.length; m++){
    //                             var search_p_dairy = dairy[m].getElementsByClassName("price");
    //                             for(var n = 0; n < search_p_dairy.length; n++){
            
    //                                 if(parseInt(search_p_dairy[n].textContent) <= parseInt(range)){
    //                                     document.getElementsByClassName("dairy")[m].style.display="block";
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
        
    //}


    document.getElementById('sort_popup').style.display = "none";

}