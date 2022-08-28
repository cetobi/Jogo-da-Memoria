let numId = 0
function criandoCarta(num) {
    numId++
    const area = document.querySelector('[area-jogo]')
    const carta = document.createElement('div')

    const tagP = document.createElement('p')
    const numero = num.split('n')
    numero[1]<10 ? numero[1]='0'+numero[1] : numero[1]
    tagP.innerHTML = numero[1]

    carta.className = 'carta'
    carta.setAttribute('onclick', `call(this)`)
    carta.setAttribute('id', numId)
    carta.appendChild(tagP)
    area.appendChild(carta)
}

function criarTabela(){
    const numerosSorteados1 = []
    let a = numerosSorteados1.length

    while(a <= 49){
        let num = Math.floor(Math.random() * (25 - 1 + 1)) + 1
        a = numerosSorteados1.length
        for(let i=0; i<=a; i++){
            if(num === numerosSorteados1[i]){
                for(let j=i+1; j<=a; j++){
                    if(num === numerosSorteados1[j]){
                        break
                    }
                    else if(j === a){
                        numerosSorteados1.push(num)
                        criandoCarta('n'+num)
                    }
                }
                break
            }
            else if(i === a){
                numerosSorteados1.push(num)
                criandoCarta('n'+num)
            }
        }
    }
}

let card1='', card2='', count=0, timer=0, doubleCard = []
function call(elemento){
    elemento.querySelector('p').setAttribute('true', 'true')
    if(card1==''){
        card1 = elemento.querySelector('p').innerText
        doubleCard.push(elemento)
    }
    else if(card2=='' && elemento.id!=doubleCard[0].id){
        card2 = elemento.querySelector('p').innerText
        doubleCard.push(elemento)
    }else if(elemento.id!=doubleCard[0].id){
        doubleCard.push(elemento)
    }

    if(doubleCard.length>1){
        if(card1 != card2){
            const t = setInterval(() => {
                doubleCard.forEach((e) => {
                    e.querySelector('p').removeAttribute('true', 'true')
                })
                doubleCard = []
                card1 = ''
                card2 = ''
                clearInterval(t)
            }, 500)
        }else{
            if(!elemento.classList.contains('check')){
                doubleCard.forEach((e) => {
                    e.classList.add('check')
                })
                count++
                doubleCard = []
                card1 = ''
                card2 = ''
            }
        }
    }
    document.getElementById('count').innerHTML = count;  
}

let minute=0, hour=0
function Timer(){
    Timer = function(){}
    const A = setInterval(() => {
        if(count===25){
            clearInterval(A)
        }
        timer++
        timer<10 ? timer='0'+timer : timer
        document.getElementById('seg').innerHTML = timer
        if(document.getElementById('seg').innerText > 59){
            document.getElementById('seg').innerHTML = '00'
            timer = 0
            minute++
            minute<10 ? minute='0'+minute : minute
            document.getElementById('min').innerHTML = minute
        }
        if(document.getElementById('min').innerText > 59){
            document.getElementById('min').innerHTML = '00'
            minute = 0
            hour++
            hour<10 ? hour='0'+hour : hour
            document.getElementById('hour').innerHTML = hour
        }
    }, 1000);
}

criarTabela()

document.querySelector('[area-jogo]').onclick = function(){Timer()}

// função dos botoes de testes
// function showHide(i){
//     const p = document.querySelectorAll('p')

//     if(i===1){
//         p.forEach((e) => {
//             e.removeAttribute('true', 'true')
//         })
//     }
//     if(i===0){
//         p.forEach((e) => {
//             e.setAttribute('true', 'true')
//         })
//     }
// }
// document.getElementById('hide').onclick = function(){showHide(1)}
<<<<<<< HEAD
// document.getElementById('show').onclick = function(){showHide(0)}
=======
// document.getElementById('show').onclick = function(){showHide(0)}
>>>>>>> 7d64b157847388cda4abf8976b6f4d8dba444e76
