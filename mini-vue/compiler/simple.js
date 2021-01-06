const startTag = /<([a-zA-Z_][\w\-\.]*)((?:\s+([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))*)\s*(\/?)>/;

const endTag = /<\/([a-zA-Z_][\w\-\.]*)>/;

const attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g;
const bufArray = [];
function parser(html) {
  while (html && last !== html) {
    if (html.indexOf("</") == 0) {
      // 标签结尾
    } else if (html.indexOf("<") == 0) {
      // 标签开头
      match = html.match(startTag);
    }
  }
}
let html = "<div attr1='abc' attr2='abc'>abc</div>";
// const ast = parser(html);
// console.log("ast", ast);
// console.log(html.match(startTag))

var str = 'abcdbce';
str = str.replace(/(b)(c)/g, function() {
    console.log(arguments);
    return '&&';
});
console.log(str);


// match = html.match(startTag);
// if (match) {
//   chars = false;
//   html = html.substring(match[0].length);
//   console.log(match);
//   match[0].replace(startTag, parseStartTag);
//   console.log(match[0], bufArray);
// }

function parseStartTag(tag, tagName, rest) {
  console.log("parseStartTag:", arguments);
  tagName = tagName.toLowerCase();

  // 解析属性
  const attrs = [];
  let unary = !!arguments[7];

  const node = {
    node: "element",
    tag: tagName,
  };

  // 解析属性
  rest.replace(attr, function (match, name) {
    console.log("attr:");

    const value = arguments[2]
      ? arguments[2]
      : arguments[3]
      ? arguments[3]
      : arguments[4]
      ? arguments[4]
      : "";

    console.log("value", value);

    if (name == "class") {
      node.class = value;
    } else {
      attrs.push({
        name,
        value,
      });
    }
  });
  // node.dataset = ds;
  node.attrs = attrs;
  if (!unary) {
    bufArray.push(node);
  } else {
    pushChild(node);
  }
}
