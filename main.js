
let foodorder=new Promise((resolve,reject)=>{
    let tf=prompt("enter true or false");


    if(tf=="true"){
      resolve()
    }

    else{
      reject()
    }
    
})

foodorder.then(success).catch(failure)

function success(){

alert(`Robin order the Pizza`);
  alert(`The app notes down the order`);

    setTimeout(()=>{
      // preparefood(food);
      alert(`PizzaHub Prepare the Pizza, and it is ready after a while`);

      setTimeout(()=>{
        // confirmfood(food);
        alert(`Confirming the Pizza is on the way.`);

        setTimeout(()=>{
          // ordersuccess();
          alert(`Your order delivered successfully`);

        },10000)
    
      },10000)

    },10000)
}


function failure(){
 document.write("your order cancelled")
}