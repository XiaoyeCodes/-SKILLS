#!/usr/bin/env node

/**
 * 全球经济日报生成器 - 测试脚本
 * 验证skill配置和文件完整性
 */

const fs = require('fs');
const path = require('path');

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

function checkFile(filePath, description) {
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    log(`✅ ${description}: 存在 (${stats.size} bytes)`, 'green');
    return true;
  } else {
    log(`❌ ${description}: 不存在`, 'red');
    return false;
  }
}

function checkJSON(filePath, description) {
  if (!fs.existsSync(filePath)) {
    log(`❌ ${description}: 不存在`, 'red');
    return false;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    JSON.parse(content);
    log(`✅ ${description}: 有效JSON`, 'green');
    return true;
  } catch (error) {
    log(`❌ ${description}: 无效JSON - ${error.message}`, 'red');
    return false;
  }
}

function runTests() {
  log('🧪 全球经济日报生成器 - 测试套件\n', 'blue');

  const rootDir = path.dirname(__dirname);
  let allPassed = true;

  // 测试项目结构
  log('\n📁 检查项目结构...\n', 'yellow');

  const files = [
    { path: path.join(rootDir, 'package.json'), desc: 'package.json' },
    { path: path.join(rootDir, 'README.md'), desc: 'README.md' },
    { path: path.join(rootDir, 'src/skill.md'), desc: 'src/skill.md' },
    { path: path.join(rootDir, 'src/config.json'), desc: 'src/config.json' },
    { path: path.join(rootDir, 'scripts/install.js'), desc: 'scripts/install.js' },
    { path: path.join(rootDir, 'scripts/test.js'), desc: 'scripts/test.js' },
    { path: path.join(rootDir, 'scripts/demo.js'), desc: 'scripts/demo.js' }
  ];

  files.forEach(({ path: filePath, desc }) => {
    if (!checkFile(filePath, desc)) {
      allPassed = false;
    }
  });

  // 测试JSON文件
  log('\n📋 检查JSON文件...\n', 'yellow');

  const jsonFiles = [
    { path: path.join(rootDir, 'package.json'), desc: 'package.json' },
    { path: path.join(rootDir, 'src/config.json'), desc: 'src/config.json' }
  ];

  jsonFiles.forEach(({ path: filePath, desc }) => {
    if (!checkJSON(filePath, desc)) {
      allPassed = false;
    }
  });

  // 测试skill配置
  log('\n⚙️  检查skill配置...\n', 'yellow');

  try {
    const configPath = path.join(rootDir, 'src/config.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

    log(`✅ Skill名称: ${config.skill.name}`, 'green');
    log(`✅ Skill版本: ${config.skill.version}`, 'green');
    log(`✅ Skill分类: ${config.skill.category}`, 'green');
    log(`✅ 触发词数量: ${config.skill.trigger.length}`, 'green');

    // 检查必需字段
    const requiredFields = ['name', 'title', 'version', 'category', 'trigger'];
    const missingFields = requiredFields.filter(field => !config.skill[field]);

    if (missingFields.length > 0) {
      log(`❌ 缺少字段: ${missingFields.join(', ')}`, 'red');
      allPassed = false;
    } else {
      log(`✅ 所有必需字段存在`, 'green');
    }

    // 检查市场配置
    const marketCount = Object.keys(config.markets || {}).length;
    log(`✅ 配置的市场数量: ${marketCount}`, 'green');

  } catch (error) {
    log(`❌ 配置检查失败: ${error.message}`, 'red');
    allPassed = false;
  }

  // 总结
  log('\n' + '='.repeat(50) + '\n', 'blue');

  if (allPassed) {
    log('✅ 所有测试通过！\n', 'green');
    return 0;
  } else {
    log('❌ 部分测试失败，请检查上述错误\n', 'red');
    return 1;
  }
}

// 运行测试
process.exit(runTests());
