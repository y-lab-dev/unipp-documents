---
slug: /tecks
---

# unipp で用いられている技術と概要

ここには unipp で用いられている技術の一覧をを書いていきます。

```
  ## [技術名]
    - 概要
    - unippでの使われ方
    - 参考になるページ
```

## 開発ツール

---

### Git

- コードのバージョン管理のためのツール
- unipp でもコードのバージョン管理のために利用しています
- https://backlog.com/ja/git-tutorial/

### Github

- コードの共有・公開・のためのサービス
- unipp のコードももちろん、GitHub で共有しています
- https://github.co.jp/

### Docker

- コンテナ型の仮想環境を作成、配布、実行するためのプラットフォームです
- unipp では node.js の仮想環境を Docker で作成して開発環境として利用することで、みんなの開発環境を統一しています
- https://docs.docker.jp/

## フロントエンドの技術一覧

---

### TypeScript

- JavaScript の上位互換であり、静的にコードをを解析するため、実行せずにエラーを検知可能で、バグの予防につながる
- unipp のプログラミング言語です。TypeScript を用いることで、予期せぬバグを防ぐことを目的としています
- https://typescript-jp.gitbook.io/deep-dive/

### React.js

- Meta(旧: facebook)が開発した UI 構築のための JavaScript ライブラリ
- unipp の UI は React.js + TypeScript で書いています
- https://ja.reactjs.org/

### chakra-UI

- React 向けの UI コンポーネントライブラリ
- unipp では、chakra-UI を用いることで簡単に css を簡単に書けるようにしています
- https://chakra-ui.com/

### Recoil

- Meta(旧: facebook)社開発の React の状態管理ライブラリ
- unipp でも UI が持つデータ(状態)を一元管理することで、UI から切り離すことで、UI のコードを簡潔にするために利用している
- https://www.happylifecreators.com/blog/20220415/

### Next.js

- Node.js 上に構築されたオープンソースの React ベースの Web アプリケーション構築のためののフレームワーク
- unipp でも web アプリケーションの構築のために利用していて、SSR や SPA などの機能を提供してくれいるため、利用しています。また、vercel へのデプロイも簡単な為です。
- https://www.webstaff.jp/guide/trend/nextjs/

### vercel

- CI/CD と Web サーバーが合わさったサービス。デプロイだけでなく、コードのテストなども自動でおこなってくれる
- unipp でも、GitHub の**main** ブランチにコードを** push **すると、自動でデプロイされるようになっている
- 参考: https://vercel.com/

## バックエンド

---

バックエンドは主に Firebase で構成されています。ここでは、unipp で用いている Firebase のサービスを書いていきます。

### Cloud Firestore

- NoSQL ドキュメント データベース
- unipp ではアプリ内で用いるデータを保管するために利用している
- 参考:https://firebase.google.com/docs/firestore

### Cloud Storage for Firebase

- ユーザーが作成した写真や動画などのコンテンツを迅速かつ簡単に保管するサービス
- unipp では、写真や動画等の Raw データは Firestore で保存できないため、Cloud Storage で管理している
- 参考: https://firebase.google.com/docs/storage

### Firebase Authentication

- ユーザー認証機能を提供し、ユーザ情報をクラウドで保存してくれるサービス
- unipp ではユーザのアカウント作成, ログイン認証などをを実装するために利用
- 参考: https://firebase.google.com/docs/auth
