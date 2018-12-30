'use strict'

import {expect} from 'chai'

import crc32 from '../src'

describe('Right checksums', () => {
  it('should output right checksums', () => {
    let buf1 = Buffer.from([0x00, 0x73, 0x75, 0x70, 0x20, 0x62, 0x72, 0x6f, 0x00])
    let buf2 = Buffer.from('I shall be summed', 'ascii')
    let buf3 = Buffer.from('SheetJS')
    expect(crc32(buf1)).to.eq(-1805997238)
    expect(crc32(buf1, true)).to.eq(2488970058)
    expect(crc32(buf2)).to.eq(-476443423)
    expect(crc32(buf3)).to.eq(-1647298270)
  })

  it('should output right checksums with seed', () => {
    let buf2 = Buffer.from('I shall be summoned', 'ascii')
    expect(crc32(buf2, false, 666)).to.eq(-823676065)
  })
})
