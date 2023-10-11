# nodeclu

JS Primer の Node.js CLI ハンズオン
[Node.js で CLI アプリ](https://jsprimer.net/use-case/nodecli/)

## How to use

- コンテナを起動

イメージのビルドおよび内容は[http-server-practice の README.md](../http-server-practice/README.md)を参照

```
# nodecliディレクトリに移動
$ cd nodecli

# コンテナ起動
$ docker run -it \
  --name nodecli
  -p 8080:3000 \
  -v ${PWD}:/usr/src/app \
  js-primer /bin/sh
```

- package.json の作成と commander の install

```
# package.jsonの作成
$ npm init

# commanderのinstall
$ npm install commander@9.0
```

- ECMAScript モジュール定義

```
# npm pkg コマンドで type フィールドの値をセットする
$ npm pkg set type=module
```

- marked パッケージを install

```
$ npm install marked@4.0
```
