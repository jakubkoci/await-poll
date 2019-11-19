export function wait(ms = 1000) {
  return new Promise(resolve => {
    console.log(`waiting ${ms} ms...`)
    setTimeout(resolve, ms)
  })
}
