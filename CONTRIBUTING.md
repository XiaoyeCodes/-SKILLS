# 贡献指南

感谢你有兴趣为全球经济日报生成器做出贡献！

## 🤝 如何贡献

### 报告问题

如果你发现了bug或有功能建议：

1. 检查 [Issues](https://github.com/yourusername/global-economic-daily-report-skill/issues) 是否已有相同问题
2. 如果没有，创建新的Issue，详细描述：
   - 问题描述
   - 复现步骤
   - 预期行为
   - 实际行为
   - 环境信息（操作系统、Node版本等）
   - 截图或错误日志（如适用）

### 提交代码

1. **Fork 项目**
   ```bash
   # 在GitHub上点击Fork按钮
   git clone https://github.com/your-username/global-economic-daily-report-skill.git
   cd global-economic-daily-report-skill
   ```

2. **创建分支**
   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-bug-fix
   ```

3. **进行修改**
   - 遵循现有代码风格
   - 添加必要的注释
   - 更新相关文档

4. **测试修改**
   ```bash
   npm test
   ```

5. **提交更改**
   ```bash
   git add .
   git commit -m "feat: 添加某功能"
   # 或
   git commit -m "fix: 修复某问题"
   ```

6. **推送到你的Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **创建 Pull Request**
   - 在GitHub上创建Pull Request
   - 填写PR模板
   - 等待审核

## 📝 提交信息规范

使用语义化提交信息：

- `feat:` 新功能
- `fix:` Bug修复
- `docs:` 文档更新
- `style:` 代码格式（不影响功能）
- `refactor:` 代码重构
- `test:` 测试相关
- `chore:` 构建/工具链更新

示例：
```
feat: 添加港股指数支持
fix: 修复日期格式化问题
docs: 更新README安装说明
```

## 🎨 代码风格

- 使用2空格缩进
- 使用UTF-8编码
- 文件末尾保留一个空行
- 避免行尾空格
- 使用有意义的变量和函数名

## 📋 开发环境设置

1. 克隆项目
2. 安装依赖：
   ```bash
   npm install
   ```

3. 运行测试：
   ```bash
   npm test
   ```

4. 运行演示：
   ```bash
   npm run demo
   ```

## 🧪 测试

提交PR前确保：
- 所有测试通过
- 代码符合项目风格
- 添加了必要的文档
- 更新了CHANGELOG.md（如适用）

## 📚 文档

如果修改了功能或添加了新功能，请更新相关文档：
- README.md
- CHANGELOG.md
- 代码注释

## 🌐 数据源

添加新的数据源时：
1. 确保数据源的可靠性和合法性
2. 在src/config.json中添加数据源信息
3. 更新README.md的数据源列表
4. 测试数据获取是否正常

## 🎯 功能开发

建议新功能前：
1. 先创建Issue讨论
2. 等待维护者反馈
3. 获得批准后再开发

## 📧 联系方式

如有问题：
- 提交Issue
- 发送邮件到：[your-email@example.com]

## 📜 许可证

提交代码即表示你同意将代码以MIT许可证发布。

---

**感谢你的贡献！** 🙏
