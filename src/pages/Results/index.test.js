import { queryParams } from './index'

describe('The function to format queryParams', () => {
  it('should work', () => {
    const params = { a1: 1, a2: 0, a3: 1, a4: 0 }
    const expectedOutput = 'a1=1&a2=0&a3=1&a4=0'
    expect(queryParams(params)).toEqual(expectedOutput)
  })

  it('should really work', () => {
    const params = { a1: 0, a2: 0, a3: 1, a4: 0 }
    const expectedOutput = 'a1=0&a2=0&a3=1&a4=0'
    expect(queryParams(params)).toEqual(expectedOutput)
  })
})
