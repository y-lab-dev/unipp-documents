---
sidebar_position: 2
---

# unipp で用いられている技術と概要

ここには unipp で用いられている技術の一覧をを書いていきます。

```
  ## [技術名]
    - 概要
    - unippでの使われ方
    - 公式ページ
```

## 開発ツール

unipp で用いる技術の一覧です。

### Git

- コードのバージョン管理のため
- コードのバージョン管理のための管理のためのツール
- 参考:https://backlog.com/ja/git-tutorial/

### Github

- コードの共有・公開・のためのサービス
- unipp

### Docker

- unipp では環境構築のために利用している
- docker を用いることで、OS に依存せずに開発できるようにしていうｒ
- 参考:https://docs.docker.jp/

## フロントエンド

### TypeScript

- JavaScript の上位互換であり、静的にコードをを解析するため、実行せずにエラーを検知可能で、バグの予防につながる
- 参考:https://typescript-jp.gitbook.io/deep-dive/

### React.js

- Meta(旧: facebook)が開発した UI 構築のための JavaScript ライブラリ
- 参考:https://ja.reactjs.org/
- chakra-UI
  - React 向けの UI コンポーネントライブラリ
  - 参考:https://chakra-ui.com/

### Next.js

### Chakra-UI

### Recoil

## バックエンド

バックエンドは主に Firebase で構成されています。ここでは、unipp で用いている Firebase のサービスを書いていきます。

### Cloud Firestore

- NoSQL 型の DB
- アプリ内で用いるデータを保管
- 参考:https://firebase.google.com/docs/firestore

### Cloud Storage for Firebase

- 写真や動画等の Raw データは Firestore で保存できないため、Cloud Storage で管理している
- 参考: https://firebase.google.com/docs/storage

### Firebase Authentication

- ユーザのアカウント作成, ログイン認証などをを実装するために利用
- 参考: https://firebase.google.com/docs/auth

### vercel

- unipp のデプロイ先
- main ブランチにコードを push すると、自動でデプロイされるようになっている
- 参考: https://vercel.com/
