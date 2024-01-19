var btn =document.getElementsByClassName("plus");
var check=document.getElementsByClassName("check");
var delete_elm=document.getElementsByClassName("delete");
var like_elm=document.getElementsByClassName("like")
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click',function (event) {
    // console.log(event)
   const btn_plus=event.target
   const div_el=btn_plus.parentElement;
   const val_tag=div_el.querySelector('p')
   var quan_val=Number(val_tag.innerHTML);
   quan_val++;
   val_tag.innerHTML=quan_val
   const tr_el=div_el.parentElement.parentElement
//    console.log(tr_el)
   const price_un=Number(tr_el.querySelector(".unitprice").innerHTML)
   const price_tag=tr_el.querySelector('.price')
//    console.log(price_tag)
   var price_value=Number(price_tag.innerHTML)
    price_value=quan_val*price_un
   // console.log(price_value)
   price_tag.innerHTML=price_value
// //    console.log(price_un)
// //    const unit_pr=tr_el.querySelector=".unitprice".innerTEXT;
// //     console.log(unit_pr)
// // 
    
  });
  check[i].addEventListener('click',function(event){
   const check_btn=event.target
   // console.log(check_btn)
   var total_elem=document.getElementById("total");
   var total_value=Number(total_elem.innerHTML)
   //  console.log(total_value)
   const tr_elem=check_btn.parentElement.parentElement
    const price_tag=tr_elem.querySelector('.price')
   //  console.log(price_tag)
    const price_value=Number(price_tag.innerHTML)
    const btn_plus=check_btn.parentElement.parentElement.querySelector(".plus")
    const btn_minus=check_btn.parentElement.parentElement.querySelector(".minus")
   //  console.log(btn_plus)
   if (check_btn.checked===true) {
      total_value=total_value+price_value
   //  console.log(total_value)
    total_elem.innerHTML=total_value
    btn_plus.setAttribute("disabled",true);
    btn_minus.setAttribute("disabled",true);
   }else{

      total_value=total_value-price_value
      //  console.log(total_value)
      total_elem.innerHTML=total_value;
      btn_plus.removeAttribute("disabled")
      btn_minus.removeAttribute("disabled")
   }
   
  })
  delete_elm[i].addEventListener('click',function(event){
   // console.log(event)
    const btn_del=event.target
   //  console.log(btn_del)
   const tr_del=btn_del.parentElement.parentElement.parentElement.parentElement.remove()
   // console.log(tr_del)
  })
  like_elm[i].addEventListener('click',function(event){
   const btn_like=event.target
   console.log(btn_like.style)
   if(btn_like.style.color===""){

      btn_like.style.color="red"
   }
   else if(btn_like.style.color==="red"){
      btn_like.style.color=""
   }
   // console.log(color)
   // btn_like.style.color="red"
      
   
})}
var btn =document.getElementsByClassName("minus");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click',function (event) {
    // console.log(event)
    
   const btn_plus=event.target
   const div_el=btn_plus.parentElement;
   const val_tag=div_el.querySelector('p')
   var quan_val=Number(val_tag.innerHTML);
   quan_val--;
   val_tag.innerHTML=quan_val
    
   const tr_el=div_el.parentElement.parentElement
//    console.log(tr_el)
   const price_un=Number(tr_el.querySelector(".unitprice").innerHTML)
   const price_tag=tr_el.querySelector('.price')
//    console.log(price_tag)
   var price_value=Number(price_tag.innerHTML)
   if(quan_val>=0){
      price_value=quan_val*price_un
  
     price_tag.innerHTML=price_value}
   else 
   quan_val=0;
   val_tag.innerHTML=quan_val
   
// //    console.log(price_un)
// //    const unit_pr=tr_el.querySelector=".unitprice".innerTEXT;
// //     console.log(unit_pr)
// // 
    
  });
  

}
