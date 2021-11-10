import assert from 'assert'
import { sum1toN } from './sum1toN.js'

describe('#sum1toN', () => {
    it('[3], 6', function () {
        assert.equal(sum1toN(4), 10);
    })
})
