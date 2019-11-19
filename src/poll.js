import { wait } from './utils'

export async function poll(fn, fnCondition, ms) {
  let result = await fn()
  while (fnCondition(result)) {
    await wait(ms)
    result = await fn()
  }
  return result
}
