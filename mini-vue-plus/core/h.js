// 创建一个虚拟节点 vdom vnode
export function h(tag, props, children) {
  return {
    tag,
    props,
    children,
  };
}
