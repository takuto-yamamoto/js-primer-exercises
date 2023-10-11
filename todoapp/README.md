# todoapp

JS Primer の TODO アプリケーションハンズオン
[Todo アプリ](https://jsprimer.net/use-case/todoapp/)

## How to use

- コンテナを起動

イメージのビルドおよび内容は[http-server-practice の README.md](../http-server-practice/README.md)を参照

```
# todoappディレクトリに移動
$ cd todoapp

# コンテナ起動
$ docker run -it \
  --name todoapp
  -p 8080:3000 \
  -v ${PWD}:/usr/src/app \
  js-primer /bin/sh
```
