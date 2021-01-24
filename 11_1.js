function countNumbers(){

    let arr1=[1,3,7,8,0,false]
    let perOdd=0
    let perEven=0
    let perOver=0


    for (let i=0;i<arr1.length;i++){
        if (typeof(arr1[i])=="number"){
            if (arr1[i]%2 == 0){
                perEven=perEven+1
            }
            else {
                perOdd=perOdd+1
            }
        }
        else {
            perOver = perOver+1
        }
    }
    console.log("Четные",perEven)
    console.log("Не четные",perOdd)
    console.log("Остальные",perOver)

}

countNumbers()
