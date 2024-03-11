### 技术栈拆解
1. 中间件 - simple task 就是一个个的中间件 所以就需要一个 (compose) 函数，由于某些 task 还是异步获取用户输入，等待发布结果等，所以还需要支持异步
   - 理解 / 掌握
2. 更新版本 - 版本号的变化如何响应，交给用户自己决定，所以需要一个可以转换版本类型且供用户选择的库
   + 转换版本类型（semver） 会用就行
   + 供用户选择（inquirer） 会用就行
3. 同异步执行脚本命令（child_process) 会用就行
4. 日志信息打印/反馈（ora,chalk) 暂时就想到这么多，后续有用到再补充
5. 提交规范

### plan
1. middleware
2. task - 

预计时间节点 3.17