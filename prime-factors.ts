export default function calculatePrimeFactors(n: number) {
  if (n === 1) return []

  const factors = []

  while (n > 1) {
    for (let prime of primeNumbers()) {
      if (n % prime === 0) {
        factors.push(prime)
        n /= prime
        break
      }
    }
  }

  return factors
}

function* primeNumbers() {
  yield 2

  const primes = [2]

  for (let i = 3; ; i++) {
    let isPrime = true

    for (const j of primes) {
      if (i % j === 0) {
        isPrime = false
        break
      }
    }

    if (isPrime) {
      primes.push(i)
      yield i
    }
  }
}
