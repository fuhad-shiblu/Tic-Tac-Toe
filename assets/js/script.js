let fuhadShiblu_btn = document.querySelectorAll('.fuhadShiblu_btn')

let fuhadShiblu_winPattern = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6],
]

let fuhadShiblu_turn = true

fuhadShiblu_btn.forEach((items)=>{
     items.addEventListener('click' , (e)=>{
          e.preventDefault()
          if(fuhadShiblu_turn){
               items.innerHTML = 'X'
               fuhadShiblu_turn = false
               items.disabled = true
               items.style = 'color: red'
          }else{
               items.innerHTML = 'O'
               fuhadShiblu_turn = true
               items.disabled = true
               items.style = 'color: green'
          }
          fuhadShiblu_winner()
     })
})

function fuhadShiblu_winner(){
     for (fuhadShiblu_pattern of fuhadShiblu_winPattern){
          for (let fuhadShiblu_btns of fuhadShiblu_btn){
               if(fuhadShiblu_btns != ''){
                    let fuhadShiblu_no1 = fuhadShiblu_btn[fuhadShiblu_pattern[0]].innerHTML
                    let fuhadShiblu_no2 = fuhadShiblu_btn[fuhadShiblu_pattern[1]].innerHTML
                    let fuhadShiblu_no3 = fuhadShiblu_btn[fuhadShiblu_pattern[2]].innerHTML
                    if (
                         fuhadShiblu_no1 !== '' &&
                         fuhadShiblu_no1 === fuhadShiblu_no2 &&
                         fuhadShiblu_no2 === fuhadShiblu_no3
                    ) {
                         alert(`Congratulations! ${fuhadShiblu_no1}. You are winner.`);
                         fuhadShiblu_btn.forEach((btn) => (btn.disabled = true));
                         return;
                    }
               }
          }
     }
}