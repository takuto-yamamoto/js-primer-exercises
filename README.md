# js-primer-exercises

[JS Primer](https://jsprimer.net/use-case/) の演習

## How to use

- Dockerfile をビルドしコンテナを起動

```
# イメージのビルド
$ docker build -t js-primer

# コンテナ起動
$ docker run -it \
  -p 8080:3000 \
  -v ${PWD}:/usr/src/app \
  js-primer /bin/sh
```

- コンテナ内で http サーバを起動

```
$ cd public
$ npx --yes @js-primer/local-server

js-primerのサーバーを起動しました。
次のURLをローカルブラウザで開いてください。
k
  URL: http://localhost:8080
```
