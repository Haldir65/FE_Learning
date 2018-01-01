const Folder = '../../assets'
const fs = require('fs')

export function scandir () {
//   fs.readdir(Folder, (err, files) => {
//     if (err) {
//       console.log(err)
//     }
//     files.forEach(file => {
//       console.log(file)
//     })
//   })
  fs.readdirSync(Folder).forEach(file => {
    console.log(file)
  })
}
