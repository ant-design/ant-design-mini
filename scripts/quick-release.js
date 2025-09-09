#!/usr/bin/env node

/**
 * Ant Design Mini - 快速发布脚本 (基于 publishInCI.js 改造)
 *
 * 🚀 功能说明:
 * 这是一个增强的本地 NPM 包发布脚本，整合了 publishInCI.js 的所有功能，
 * 支持自动版本生成、环境变量配置等高级特性。
 *
 * 📋 执行流程:
 * 1. 版本管理 - 自动生成或使用指定版本号
 * 2. 环境检查 - 验证 NPM Token 和包信息
 * 3. 安装依赖 - npm install
 * 4. 构建项目 - npm run build
 * 5. NPM 认证 - 配置 .npmrc 文件
 * 6. 发布包   - 发布到 NPM 并创建 Git 标签
 *
 * 🎯 基本使用方法:
 * node scripts/quick-release.js [dist-tag] [version-level]
 *
 * 📝 示例:
 * node scripts/quick-release.js latest         # 发布当前版本到 latest
 * node scripts/quick-release.js beta patch     # 发布 patch 版本到 beta
 * node scripts/quick-release.js alpha minor    # 发布 minor 版本到 alpha
 *
 * 🔧 高级用法 (环境变量):
 * export DIST_TAG=beta                         # 指定发布标签
 * export DIST_VERSION=3.1.7                    # 指定版本号
 * export AUTO_VERSION=true                     # 启用自动版本生成
 * export SETUP_RELEASE=true                    # 仅更新版本号，不发布
 * node scripts/quick-release.js
 *
 * 🔧 命令行参数:
 * --auto-version    启用自动版本生成
 *
 * 📝 版本生成示例:
 * AUTO_VERSION=true node scripts/quick-release.js beta patch    # 生成 patch 版本
 * AUTO_VERSION=true node scripts/quick-release.js alpha minor   # 生成 minor 版本
 * AUTO_VERSION=true node scripts/quick-release.js latest major  # 生成 major 版本
 *
 * 🔧 前置条件:
 * 1. 设置环境变量: export NPM_TOKEN=your_npm_token_here
 * 2. 确保有 NPM 包的发布权限
 * 3. Git 用户信息已配置
 * 4. Node.js 18+ 环境
 *
 * 🔒 安全提醒:
 * - NPM Token 具有发布权限，请妥善保管
 * - 不要将 Token 提交到代码仓库
 *
 * 📚 详细文档: ./quick-release-guide.md
 */

const { execSync } = require('child_process');
const {
  doPublish,
  generateSematicVersion,
  writePkgJson,
  PKG_JSON_PATH,
} = require('./publishUtils');

// 支持从环境变量或命令行参数获取发布标签
let distTag = process.env.DIST_TAG || process.argv[2] || 'latest';
let packageJson = require(PKG_JSON_PATH);

function log(message, type = 'info') {
  const colors = {
    info: '\x1b[36m',    // cyan
    success: '\x1b[32m', // green
    error: '\x1b[31m',   // red
    warning: '\x1b[33m', // yellow
    reset: '\x1b[0m'
  };

  const icons = {
    info: '📢',
    success: '✅',
    error: '❌',
    warning: '⚠️'
  };

  console.log(`${colors[type]}${icons[type]} ${message}${colors.reset}`);
}

function execCommand(command, description) {
  log(`执行: ${description}`);
  try {
    execSync(command, { stdio: 'inherit', cwd: process.cwd() });
    log(`${description} 完成`, 'success');
  } catch (error) {
    log(`${description} 失败: ${error.message}`, 'error');
    throw error;
  }
}

// 支持从环境变量获取版本号，或自动生成新版本
let targetVersion = process.env.DIST_VERSION;
if (!targetVersion) {
  const currentVersion = packageJson.version;
  // 如果指定了版本生成级别，则自动生成新版本
  const versionLevel = process.argv[3] || 'patch'; // 默认为 patch 版本
  if (process.env.AUTO_VERSION === 'true' || process.argv.includes('--auto-version')) {
    targetVersion = generateSematicVersion(distTag, versionLevel, currentVersion);
    log(`自动生成新版本: ${currentVersion} -> ${targetVersion}`, 'info');
  } else {
    targetVersion = currentVersion;
  }
} else {
  log(`使用指定版本: ${targetVersion}`, 'info');
}

async function main() {
  try {
    log('🚀 开始快速发布流程');
    log(`包名: ${packageJson.name}`);
    log(`当前版本: ${packageJson.version}`);
    log(`目标版本: ${targetVersion}`);
    log(`发布标签: ${distTag}`);

    // 如果是仅设置版本模式
    if (process.env.SETUP_RELEASE === 'true') {
      log('📝 仅更新版本号模式');
      const originPkgJson = require(PKG_JSON_PATH);
      originPkgJson.version = targetVersion;
      writePkgJson(JSON.stringify(originPkgJson, null, 2));
      log(`版本号已更新为: ${targetVersion}`, 'success');
      return;
    }

    // 检查NPM token
    if (!process.env.NPM_TOKEN) {
      log('错误: 未设置 NPM_TOKEN 环境变量', 'error');
      log('请运行: export NPM_TOKEN=your_npm_token');
      process.exit(1);
    }

    // 1. 更新版本号 (如果需要)
    if (targetVersion !== packageJson.version) {
      log('1/6 更新版本号');
      const originPkgJson = require(PKG_JSON_PATH);
      originPkgJson.version = targetVersion;
      writePkgJson(JSON.stringify(originPkgJson, null, 2));
      log(`版本号已更新: ${packageJson.version} -> ${targetVersion}`, 'success');
      // 重新读取更新后的 package.json
      delete require.cache[require.resolve(PKG_JSON_PATH)];
      packageJson = require(PKG_JSON_PATH);
    }

    // 2. 安装依赖
    log('2/6 安装依赖');
    execCommand('npm install', '安装依赖');

    // 3. 构建项目
    log('3/6 构建项目');
    execCommand('npm run build', '构建项目');

    // 4. 设置 NPM 认证
    log('4/6 设置 NPM 认证');
    log('NPM 认证配置完成', 'success');

    // 5. 发布包
    log('5/6 发布包');
    doPublish(distTag, targetVersion);
    log('包发布成功', 'success');

    // 6. 创建并推送标签
    log('6/6 处理 Git 标签');
    try {
      // 检查标签是否已存在
      try {
        execSync(`git rev-parse ${targetVersion}`, { stdio: 'ignore' });
        log(`标签 ${targetVersion} 已存在`, 'warning');
      } catch {
        // 创建标签
        execCommand(`git tag ${targetVersion}`, '创建 Git 标签');
        execCommand(`git push origin ${targetVersion}`, '推送标签');
      }
    } catch (error) {
      log(`Git 标签操作失败 (可忽略): ${error.message}`, 'warning');
    }

    // 完成
    log('='.repeat(50));
    log('🎉 发布完成！', 'success');
    log(`包名: ${packageJson.name}`);
    log(`版本: ${targetVersion}`);
    log(`标签: ${distTag}`);
    log(`安装命令: npm install ${packageJson.name}@${distTag}`);
    log('='.repeat(50));

  } catch (error) {
    log(`发布失败: ${error.message}`, 'error');

    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
