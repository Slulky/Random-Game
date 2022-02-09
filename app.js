function randomGame(){
    let counter = 0
    let timer = setInterval(function(){
        let num = Math.random()
        if (num <= 0.75 ){
            counter++
        }
        else{
            clearInterval(timer)
            console.log(`It took ${counter} tries`)
        }
    }, 1000)
}

randomGame()


