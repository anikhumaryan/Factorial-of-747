var n = 747
function factorial(n) {
    if (n < 0n) {
        return "undefined"
    }else if (n == 0n , n == 1n) {
        return 1n
    } else {
        return n * factorial(n-1n)
    }
  }

let result = factorial(BigInt(n))

console.log(n+"!"+" = "+ result)
