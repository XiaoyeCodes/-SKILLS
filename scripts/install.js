#!/usr/bin/env node

/**
 * 全球经济日报生成器 - 安装脚本
 * 自动将skill安装到Claude Code的skills目录
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

// 颜色输出
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function getClaudeSkillsPath() {
  const platform = os.platform();
  const homeDir = os.homedir();

  if (platform === 'win32') {
    return path.join(homeDir, '.claude', 'skills');
  } else {
    return path.join(homeDir, '.claude', 'skills');
  }
}

function installSkill() {
  log('🚀 开始安装全球经济日报生成器...\n', 'blue');

  // 获取源路径和目标路径
  const currentDir = __dirname;
  const rootDir = path.dirname(currentDir);
  const targetDir = getClaudeSkillsPath();
  const skillDir = path.join(targetDir, 'global-economic-daily-report');

  // 创建目标目录
  if (!fs.existsSync(targetDir)) {
    log(`📁 创建Claude skills目录: ${targetDir}`, 'yellow');
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // 如果skill已存在，先删除
  if (fs.existsSync(skillDir)) {
    log(`🗑️  删除已存在的skill目录`, 'yellow');
    fs.rmSync(skillDir, { recursive: true, force: true });
  }

  // 创建skill目录
  fs.mkdirSync(skillDir, { recursive: true });

  // 复制文件
  const filesToCopy = [
    { src: 'src/skill.md', dest: 'skill.md' },
    { src: 'src/config.json', dest: 'config.json' },
    { src: 'templates/report-template.html', dest: 'template.html' }
  ];

  filesToCopy.forEach(({ src, dest }) => {
    const srcPath = path.join(rootDir, src);
    const destPath = path.join(skillDir, dest);

    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      log(`✅ ${src} -> ${dest}`, 'green');
    } else {
      log(`⚠️  警告: ${src} 不存在`, 'yellow');
    }
  });

  // 创建README
  const readmeContent = `# 全球经济日报生成器

## 安装日期
${new Date().toLocaleString('zh-CN')}

## 使用方法
在Claude Code对话中说：
- "生成今日的全球经济日报"
- "生成2026年1月31日的全球经济日报"

## 更多信息
查看完整文档: ${rootDir}
`;

  fs.writeFileSync(path.join(skillDir, 'README.md'), readmeContent);
  log(`✅ README.md`, 'green');

  log('\n✨ 安装完成！\n', 'green');
  log(`Skill已安装到: ${skillDir}`, 'blue');
  log('\n📖 使用方法:', 'yellow');
  log('  在Claude Code对话中说 "生成今日的全球经济日报"\n', 'reset');
}

// 运行安装
try {
  installSkill();
} catch (error) {
  log(`\n❌ 安装失败: ${error.message}`, 'red');
  console.error(error);
  process.exit(1);
}
