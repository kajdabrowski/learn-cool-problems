import assert from 'assert'
import even from './even.js'

const xs = [1, 2, 3, 4, 5]

describe('#even', function() {
    it('[2, 4]', () => assert.deepStrictEqual(even(xs), [2, 4]))
})
