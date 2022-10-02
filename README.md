# crc32-ts

This is a modern implementation of the CRC-32 algorithm standard in JS (for the browser and nodejs). Heavily inspired by https://github.com/SheetJS/js-crc32 with the goal to use modern features.

## Usage

1. Import the module

```ts
import crc32 from 'crc32-ts'
```

2. Call the crc32 function with a buffer

```ts
const buf = Buffer.from([0x00, 0x73, 0x75, 0x70, 0x20, 0x62, 0x72, 0x6f, 0x00])
const out = crc32(buf)
console.log(out)
// -1805997238
```

## Support

This package only supports node >=14.16 as it uses the esm standard.