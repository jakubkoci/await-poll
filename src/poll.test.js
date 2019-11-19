import { poll } from './poll.js'

describe('poll', () => {
  it('returns result of the last call', async () => {
    const fn = createApiStub()
    const fnCondition = result => result < 3
    const finalResult = await poll(fn, fnCondition, 1000)
    expect(finalResult).toEqual(3)
  })

  it('calls api many times while condition is satisfied', async () => {
    const fn = createApiStub()
    const fnCondition = result => result < 3
    await poll(fn, fnCondition, 1000)
    expect(fn).toHaveBeenCalledTimes(3)
  })

  function createApiStub() {
    let counter = 0
    const testApi = () => {
      console.log('calling api', counter)
      counter++
      return counter
    }
    return jest.fn(() => testApi())
  }
})
