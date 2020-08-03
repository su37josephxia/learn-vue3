'use strict'

module.exports = {
  template: `<div>
  <div v-for="n in 1000">
  <ul >
    <li>kkb</li>
    <li>kkb</li>
    <li>kkb</li>
    <li>kkb</li>
    <li>kkb</li>
    <li>kkb</li>
    <li v-for="todo in todos" >{{n}}--{{todo}}</li>
  </ul>
  </div>
  </div>`,
  data(){
    return {
      todos:['吃饭','睡觉']
    }
  }
}


// const self = (global || root)

// self.performance = {
//   now: function () {
//     var hrtime = process.hrtime()
//     return ((hrtime[0] * 1000000 + hrtime[1] / 1000) / 1000)
//   }
// }

// function generateGrid (rowCount, columnCount) {
//   var grid = []

//   for (var r = 0; r < rowCount; r++) {
//     var row = { id: r, items: [] }
//     for (var c = 0; c < columnCount; c++) {
//       row.items.push({ id: (r + '-' + c) })
//     }
//     grid.push(row)
//   }

//   return grid
// }

// const gridData = generateGrid(100, 5)

// module.exports = {
//   template: '<div><h1>{{ Math.random() }}</h1><my-table></my-table></div>',
//   components: {
//     myTable: {
//       data: function () {
//         return {
//           grid: gridData
//         }
//       },
//       // template: '<table><tr v-for="row in grid"><th>123</th><td v-for="item in row.items">{{ item.id }}</td></tr></table>',
//       template: '<table width="100%" cellspacing="2"><row v-for="row in grid" :key="row.id" :row="row"></row></table>',
//       components: {
//         row: {
//           props: ['row'],
//           template: '<tr><th>{{ Math.random() }}</th><column :key="item.id" v-for="item in row.items"></column></tr>',
//           components: {
//             column: {
//               template: '<td class="item">' +
//                 // 25 plain elements for each cell
//                 '<ul class="yoyo">' +
//                   `<li v-for="i in 5" :class="'hihi' + i" :key="i">` +
//                     `<span :id="i + '_' + j" v-for="j in 5">fsefs</span>` +
//                     '</li>' +
//                 '</ul>' +
//               '</td>'
//             }
//           }
//         }
//       }
//     }
//   }
// }
