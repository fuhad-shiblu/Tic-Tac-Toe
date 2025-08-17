const fuhadShiblu_btn   =   document.querySelectorAll('.fuhadShiblu_btn');

const fuhadShiblu_winPattern    = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let turn = true

const fuhadShiblu_arr = Array.from(fuhadShiblu_btn)

fuhadShiblu_arr.map((items)=>{
    items.addEventListener('click' , (e)=>{
        e.preventDefault()
        if(turn){
            items.innerHTML = 'X'
            turn            = false
            items.disabled  = true
            items.style     = 'color:red'
        }else{
            items.innerHTML = 'O'
            turn            = true
            items.disabled  = true
            items.style     = 'color:green'
        }
        fuhadShiblu_winner()
    })
})

function fuhadShiblu_winner(){
        for(let fuhadShiblu_pattern of fuhadShiblu_winPattern){
        let no1 = fuhadShiblu_btn[fuhadShiblu_pattern[0]].innerHTML
        let no2 = fuhadShiblu_btn[fuhadShiblu_pattern[1]].innerHTML
        let no3 = fuhadShiblu_btn[fuhadShiblu_pattern[2]].innerHTML

        if(no1 != '' && no2 != '' && no3 != ''){
            if(no1 === no2 && no2 === no3){
                alert('Winner is X')
            }else{
                alert('Winner is O')
            }
            stopGame()
        }
    }
}

let stopGame =()=>{
    fuhadShiblu_arr.map((items)=>{
        items.disabled = true
    })
}