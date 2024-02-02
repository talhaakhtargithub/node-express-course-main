const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')








// Sure, here are some different flags that can be used with the `writeFileSync` method:
// 1. `'w'`: Opens the file for writing. If the file already exists, its contents are overwritten. If the file does not exist, it's created.
// 2. `'wx'`: Exclusive write. Similar to `'w'`, but it fails if the path exists.
// 3. `'a'`: Opens the file for writing. If the file exists, the new data is appended to the end of the file. If the file does not exist, it's created.
// 4. `'ax'`: Exclusive append. Similar to `'a'`, but it fails if the path exists.
// 5. `'w+'`: Opens the file for reading and writing. If the file already exists, its contents are overwritten. If the file does not exist, it's created.
// 6. `'r+'`: Opens the file for reading and writing. The file pointer is placed at the beginning of the file.
// 7. `'a+'`: Opens the file for reading and appending. The file is created if it does not exist.
// 8. `'wx+'`: Exclusive read/write. Similar to `'w+'`, but it fails if the path exists.
// 9. `'ax+'`: Exclusive read/append. Similar to `'a+'`, but it fails if the path exists.
// These flags provide different behaviors when writing to files based on whether the file already exists and whether exclusive access is required.