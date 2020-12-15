/**
 * 返回一个虚拟DOM节点
 * @param {*} type 
 * @param {*} props 
 * @param {*} children 
 */
function h(type, props, children = []) {
  return {
    type,
    props,
    children,
  };
}
