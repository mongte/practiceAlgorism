class FlipInt {
  reverse = (n:number):number => {
    let digit: number = 0
    let result: number = 0

    while(n){
        digit = n % 10  //  Get right-most digit. Ex. 123/10 → 12.3 → 3
        result = (result * 10) + digit  //  Ex. 123 → 1230 + 4 → 1234
        n = n / 10 | 0  //  Remove right-most digit. Ex. 123 → 12.3 → 12
    }  

    return result
  }
}

