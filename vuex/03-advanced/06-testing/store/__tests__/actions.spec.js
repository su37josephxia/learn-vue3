// 使用 require 语法处理内联 loaders。
// inject-loader 返回一个允许我们注入 mock 依赖的模块工厂
import { expect } from "chai";
// const inject = require('inject-loader!./hello.js')
// const actionsInjector = require("inject-loader!../actions");

// 使用 mocks 创建模块
// const actions = actionsInjector({
//   "../../api/shop": {
//     getProducts(cb) {
//       setTimeout(() => {
//         cb([
//           /* mocked response */
//         ]);
//       }, 100);
//     },
//   },
// });
// import sinon from 'sinon'
// import actions from "../actions";

// describe("actions", () => {
//   it("getAllProducts", () => {
//     const commit = sinon.spy();
//     const state = {};

//     actions.getAllProducts({ commit, state });

//     expect(commit.args).to.deep.equal([
//       ["REQUEST_PRODUCTS"],
//       [
//         "RECEIVE_PRODUCTS",
//         {
//           /* mocked response */
//         },
//       ],
//     ]);
//   });
// });

// // 用指定的 mutations 测试 action 的辅助函数
// const testAction = (action, args, state, expectedMutations, done) => {
//   let count = 0;

//   // 模拟提交
//   const commit = (type, payload) => {
//     const mutation = expectedMutations[count];

//     try {
//       expect(mutation.type).to.equal(type);
//       expect(mutation.payload).to.deep.equal(payload);
//     } catch (error) {
//       done(error);
//     }

//     count++;
//     if (count >= expectedMutations.length) {
//       done();
//     }
//   };

//   // 用模拟的 store 和参数调用 action
//   action({ commit, state }, ...args);

//   // 检查是否没有 mutation 被 dispatch
//   if (expectedMutations.length === 0) {
//     expect(count).to.equal(0);
//     done();
//   }
// };

// describe("actions", () => {
//   it("getAllProducts", (done) => {
//     testAction(
//       actions.getAllProducts,
//       [],
//       {},
//       [
//         { type: "REQUEST_PRODUCTS" },
//         {
//           type: "RECEIVE_PRODUCTS",
//           payload: {
//             /* mocked response */
//           },
//         },
//       ],
//       done
//     );
//   });
// });
