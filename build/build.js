'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const childProcess = require('child_process')
const exec = childProcess.exec
const target = process.env.TARGET
// var STAGE = process.env.STAGE
const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }
    
     // 添加版本日志 命令字符串
    let gitv =
     'echo "$(date +%F_%T)|$(git rev-parse HEAD|cut -c 1-8)|$(git symbolic-ref --short HEAD)|$(git log -1 --pretty=format:%ce)|$(hostname -i)" >> ./dist/' +
     target +
     '/build.txt'
        // 添加版本日志
    exec(gitv, function (err, stdout, stderr) {
      if (err) {
        console.log('添加版本日志 error')
        console.log(err)
        process.exit()
      } else {
        console.log('添加版本日志 successed')
      }
    })

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
