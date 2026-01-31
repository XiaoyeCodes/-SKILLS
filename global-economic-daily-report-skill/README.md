# 🌍 全球经济日报生成器

> Claude Code Skill - 自动生成专业的全球经济日报HTML报告

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](package.json)
[![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org)

## 📖 简介

这是一个专为 Claude Code 设计的 Skill，能够自动生成专业的全球经济日报 HTML 报告。报告包含全球主要股市指数、市场深度分析、经济形势展望和投资策略建议。

### ✨ 特性

- 📊 **全面的市场数据**：覆盖美股、A股、港股、欧股、亚太市场
- 🎨 **精美的HTML格式**：渐变色背景、卡片式布局、响应式设计
- 🔍 **深度市场分析**：当日核心亮点、各市场详细解读
- 💰 **大宗商品追踪**：黄金、白银、原油价格动态
- 🎯 **投资策略建议**：配置策略、操作建议
- 🤖 **智能数据聚合**：从多个权威财经网站自动收集数据

## 🚀 快速开始

### 安装

#### 方式一：手动安装

1. 克隆或下载此仓库
2. 复制所有文件到你的 Claude Code skills 目录：

```bash
# Windows
Copy-Item -Recurse global-economic-daily-report-skill $env:USERPROFILE\.claude\skills\global-economic-daily-report

# macOS/Linux
cp -r global-economic-daily-report-skill ~/.claude/skills/global-economic-daily-report
```

#### 方式二：使用安装脚本

```bash
npm install global-economic-daily-report-skill
# 或
npm run install
```

### 使用

在 Claude Code 对话中直接调用：

```
生成今日的全球经济日报
```

或指定日期：

```
生成2026年1月31日的全球经济日报
```

### 输出

报告将自动保存到桌面，文件名格式：`全球经济日报_YYYY年MM月DD日.html`

可以直接在浏览器中打开查看。

## 📂 项目结构

```
global-economic-daily-report-skill/
├── src/                          # 源代码目录
│   ├── skill.md                  # Skill执行逻辑
│   ├── config.json               # 配置文件
│   └── generator.js              # HTML生成器
├── templates/                    # 模板文件
│   └── report-template.html      # HTML模板
├── examples/                     # 示例文件
│   └── 全球经济日报_2026年1月31日.html  # 示例报告
├── scripts/                      # 脚本目录
│   ├── install.js                # 安装脚本
│   ├── test.js                   # 测试脚本
│   └── demo.js                   # 演示脚本
├── README.md                     # 说明文档
├── LICENSE                       # 许可证
└── package.json                  # 包配置
```

## 📊 报告内容

生成的报告包含以下板块：

### 1. 全球主要股市指数
- 🇺🇸 **美国市场**：道琼斯、标普500、纳斯达克
- 🇨🇳 **中国市场**：上证指数、深证成指、创业板指、恒生指数
- 🇪🇺 **欧洲市场**：德国DAX、法国CAC、英国富时100
- 🇯🇵 **亚太市场**：日经225、韩国KOSPI、台湾加权

### 2. 市场行情深度分析
- 🔥 当日核心亮点
- 🔍 整体市场概况
- 各区域市场详细分析
- 💰 大宗商品动态

### 3. 经济形势展望
- 全球经济核心判断
- 关键投资主线
- 风险提示

### 4. 投资策略建议
- 配置建议
- 操作建议
- 近期关注重点

## 🎨 设计特点

- **渐变色背景**：紫色渐变主题，专业大气
- **卡片式布局**：信息层次清晰
- **涨跌颜色标识**：涨绿跌红，一目了然
- **响应式设计**：适配桌面和移动设备
- **精美排版**：专业的视觉呈现

## 📚 数据来源

报告数据来源于以下权威机构：

- 📈 英为财情 (Investing.com) - 全球股指实时行情
- 💹 东方财富网 - 中国市场数据
- 📰 财联社 - 全球财经快讯
- 📊 新浪财经 - 美股市场数据
- 📰 证券时报 - 亚太市场数据
- 💎 同花顺期货 - 大宗商品数据

## ⚙️ 配置选项

### 参数说明

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| date | string | 否 | 指定日期，格式：YYYY年MM月DD日，默认为今日 |
| template_path | string | 否 | 自定义模板HTML文件路径 |

### 示例

```
// 生成今日报告
生成今日的全球经济日报

// 生成指定日期报告
生成2026年1月31日的全球经济日报

// 使用自定义模板
使用模板 C:\path\to\template.html 生成经济日报
```

## 🔧 开发

### 运行测试

```bash
npm test
```

### 运行演示

```bash
npm run demo
```

### 自定义模板

你可以基于 `templates/report-template.html` 创建自定义模板，然后通过 `template_path` 参数指定。

## 📝 更新日志

### v1.0.0 (2026-01-31)

- ✨ 首次发布
- 📊 支持全球主要股市指数
- 🎨 精美的HTML格式输出
- 🤖 智能数据聚合
- 📈 深度市场分析
- 💡 投资策略建议

## ⚠️ 免责声明

本报告生成的内容仅供参考，不构成任何投资建议。投资有风险，入市需谨慎。数据来源于公开渠道，可能存在延迟或误差。

## 📄 许可证

[MIT License](LICENSE)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

- 作者：Claude Code
- 项目地址：[GitHub](https://github.com/yourusername/global-economic-daily-report-skill)

## 🙏 致谢

感谢所有为财经数据提供支持的机构和网站。

---

**Made with ❤️ by Claude Code**
