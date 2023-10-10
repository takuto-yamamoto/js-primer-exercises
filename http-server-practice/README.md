# http-server-practice

JS Primer の HTTP サーバ起動ハンズオン
[アプリケーション開発の準備](https://jsprimer.net/use-case/setup-local-env/)

## How to use

- Dockerfile をビルドしコンテナを起動

```
# イメージのビルド
$ docker build -t js-primer

# http-server-practiceディレクトリに移動
$ cd http-server-practice

# コンテナ起動
$ docker run -it \
  --name http-server
  -p 8080:3000 \
  -v ${PWD}:/usr/src/app \
  js-primer /bin/sh
```

- コンテナ内で http サーバを起動

```
$ npx --yes @js-primer/local-server

js-primerのサーバーを起動しました。
次のURLをローカルブラウザで開いてください。
k
  URL: http://localhost:8080
```
