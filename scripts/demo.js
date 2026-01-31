#!/usr/bin/env node

/**
 * 全球经济日报生成器 - 演示脚本
 * 展示如何使用这个skill
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function showDemo() {
  log('\n' + '='.repeat(60), 'cyan');
  log('🌍 全球经济日报生成器 - 使用演示', 'cyan');
  log('='.repeat(60) + '\n', 'cyan');

  log('📖 这个skill可以帮助你快速生成专业的全球经济日报HTML报告。\n', 'blue');

  log('✨ 主要功能:', 'yellow');
  log('  • 📊 收集全球主要股市指数数据', 'reset');
  log('  • 📈 提供深度市场分析', 'reset');
  log('  • 💰 跟踪大宗商品价格', 'reset');
  log('  • 🎯 给出投资策略建议', 'reset');
  log('  • 🎨 生成精美HTML报告', 'reset');
  log('');

  log('🚀 使用方法:', 'yellow');
  log('');
  log('  方法1: 生成今日报告', 'green');
  log('    在Claude Code对话中说:', 'yellow');
  log('    "生成今日的全球经济日报"', 'cyan');
  log('');
  log('  方法2: 生成指定日期报告', 'green');
  log('    在Claude Code对话中说:', 'yellow');
  log('    "生成2026年1月31日的全球经济日报"', 'cyan');
  log('');
  log('  方法3: 使用自定义模板', 'green');
  log('    在Claude Code对话中说:', 'yellow');
  log('    "使用模板 C:\\path\\to\\template.html 生成经济日报"', 'cyan');
  log('');

  log('📂 报告结构:', 'yellow');
  log('  1. 全球主要股市指数', 'reset');
  log('     • 美国市场（道琼斯、标普500、纳斯达克）', 'reset');
  log('     • 中国市场（上证、深证、创业板、恒生）', 'reset');
  log('     • 欧洲市场（德国DAX、法国CAC、英国富时）', 'reset');
  log('     • 亚太市场（日经225、韩国KOSPI、台湾加权）', 'reset');
  log('');
  log('  2. 市场行情深度分析', 'reset');
  log('     • 当日核心亮点', 'reset');
  log('     • 各市场详细解读', 'reset');
  log('     • 大宗商品动态', 'reset');
  log('');
  log('  3. 经济形势展望', 'reset');
  log('     • 全球经济预测', 'reset');
  log('     • 关键投资主线', 'reset');
  log('     • 风险提示', 'reset');
  log('');
  log('  4. 投资策略建议', 'reset');
  log('     • 配置建议', 'reset');
  log('     • 操作建议', 'reset');
  log('');

  log('📊 数据来源:', 'yellow');
  log('  • 英为财情 (Investing.com)', 'reset');
  log('  • 东方财富网', 'reset');
  log('  • 财联社', 'reset');
  log('  • 新浪财经', 'reset');
  log('  • 证券时报', 'reset');
  log('  • 同花顺期货', 'reset');
  log('');

  log('💡 示例输出:', 'yellow');
  log('  报告将保存到桌面:', 'reset');
  log('  全球经济日报_2026年1月31日.html', 'cyan');
  log('');

  log('⚠️  注意事项:', 'yellow');
  log('  • 报告内容仅供参考，不构成投资建议', 'reset');
  log('  • 数据可能存在延迟，以实际收盘数据为准', 'reset');
  log('  • 投资有风险，入市需谨慎', 'reset');
  log('');

  log('🎨 设计特点:', 'yellow');
  log('  • 渐变色背景，专业大气', 'reset');
  log('  • 卡片式布局，信息清晰', 'reset');
  log('  • 涨跌颜色标识，一目了然', 'reset');
  log('  • 响应式设计，适配多设备', 'reset');
  log('');

  log('='.repeat(60), 'cyan');
  log('📚 更多信息请查看 README.md', 'cyan');
  log('='.repeat(60) + '\n', 'cyan');

  // 显示配置信息
  try {
    const configPath = path.join(__dirname, '..', 'src', 'config.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

    log('📋 Skill配置信息:', 'yellow');
    log(`  名称: ${config.skill.title}`, 'reset');
    log(`  版本: ${config.skill.version}`, 'reset');
    log(`  分类: ${config.skill.category}`, 'reset');
    log(`  标签: ${config.skill.tags.join(', ')}`, 'reset');
    log('');
  } catch (error) {
    log('⚠️  无法读取配置文件', 'yellow');
  }

  log('✨ 开始使用:', 'green');
  log('  在Claude Code中对话并说 "生成今日的全球经济日报"\n', 'cyan');
}

// 运行演示
showDemo();
