import { program } from 'commander';
import * as fs from 'node:fs/promises';
import { marked } from 'marked';

// gfmオプションを定義する
program.option('--gfm', 'GFMを有効にする');

// コマンドライン引数をcommanderでparseする
program.parse(process.argv);

// オプションをオブジェクトとして取得
const options = program.opts();
const cliOptions = {
  gfm: options.gfm ?? false,
};

// ファイルパスをprogram.argsから取り出す
const filePath = program.args[0];
console.log(filePath);

// ファイルを非同期で読み込む
fs.readFile(filePath, { encoding: 'utf-8' })
  .then((file) => {
    const html = marked.parse(file, cliOptions);
    console.log(html);
  })
  .catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
