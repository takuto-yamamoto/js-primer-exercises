import { program } from 'commander';
import * as fs from 'node:fs/promises';

// コマンドライン引数をcommanderでparseする
program.parse(process.argv);

// ファイルパスをprogram.argsから取り出す
const filePath = program.args[0];
console.log(filePath);

// ファイルを非同期で読み込む
fs.readFile(filePath, { encoding: 'utf-8' })
  .then((file) => {
    console.log(file);
  })
  .catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
