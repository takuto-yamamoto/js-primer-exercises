# ajaxapp

JS Primer の Ajax 通信ハンズオン
[Ajax 通信](https://jsprimer.net/use-case/ajaxapp/)

## How to use

- コンテナを起動

イメージのビルドおよび内容は[http-server-practice の README.md](../http-server-practice/README.md)を参照

```
# コンテナ起動
$ docker run -it \
  --name ajaxapp
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
