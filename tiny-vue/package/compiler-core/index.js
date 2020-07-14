module.exports.createCompiler = ({ parser, transfer, generator }) => (template) => {
    //  模板字符串 -> AST(Abstract Syntax Treee)抽象语法树
    let ast = parser(template)
    // 转换处理 譬如 v-bind v-if v-for的转换
    ast = transfer(ast)
    // AST -> 渲染函数
    return generator(ast)
}