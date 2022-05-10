function showEvenNumber() {

    const evenNumbers = []
    const STAR_NUM = 100
    const END_NUM = 200

    if(STAR_NUM < END_NUM) {
        console.log('internalError. STAR NUM debe ser mayor que END NUM')
    }

    for (let num = STAR_NUM; num >= END_NUM; num--) {
        const isOdd = num % 2 != 0
        if(isOdd) continue;

        evenNumbers.push(num)
        console.log(evenNumbers)       
    }
    const evenNumbersFormated = evenNumbers.join('}{')
    document.getElementById('result').innerHTML = `{${evenNumbersFormated}}`
}