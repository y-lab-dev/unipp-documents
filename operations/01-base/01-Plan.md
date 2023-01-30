# 企画書

unipp の企画書です

# アプリ名

unipp (university + union + application)

## アプリコンセプト

全国の学生に、キャンパスライフを便利に過ごすための情報流通プラットフォームを提供する。遊橋研究室でプラットフォーマーとしてのポジションを獲得して先行優位を築くと共に、永続的にプラットフォームビジネスの実習をおこなう環境の構築を目指す。

## 概要

大学生のキャンパスライフをサポートするアプリです。通っている大学や周辺地域のイベント情報を投稿・閲覧することができます。

## 機能一覧

スマートフォン-PC 対応アプリで、利用環境は Web アプリとする。

- LP
- 認証（メール認証）
  - アプリインストール時に,大学を選択。ベースカラーと大学名表記を大学毎に変更。
  - 新規登録では、各大学のメールアドレスを取得し、パスワードメールを送信する。メールアドレスとパスワードの組み合わせで認証する。2 回目以降のアクセスはログインなしで利用可能とする。ただし機種変更時にはログインが必要。また、パスワード忘れには、パスワード再設定メールを再送する。
  - 各大学のメールアドレスを利用することで、学生であることを担保する。
  - 全国を 9 地域(北海道・東北・関東甲信・北陸・東海・近畿・中国・四国・九州)に分ける。
  - 「大学メール一覧取得先」日本の大学ドメイン
    [https://so-zou.jp/software/tech/network/domain/ac-jp.htm](https://so-zou.jp/software/tech/network/domain/ac-jp.htm)
    「大学カラーコード取得先（一部）」スクールカラー
    [https://www.weblio.jp/wkpja/content/%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E3%82%AB%E3%83%A9%E3%83%BC\_%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E3%82%AB%E3%83%A9%E3%83%BC%E3%81%AE%E6%A6%82%E8%A6%81](https://www.weblio.jp/wkpja/content/%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E3%82%AB%E3%83%A9%E3%83%BC_%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E3%82%AB%E3%83%A9%E3%83%BC%E3%81%AE%E6%A6%82%E8%A6%81)
- イベント登録、閲覧
  - 大学内のイベント(セミナーなど)および部活・サークルの学外イベントを告知できる。イベント情報は学生から投稿・修正できる。ただし、不適切な利用に備えて運営側から削除する手段も確保する。新しい情報から上位に表示する。

## 使い方

**Step1: 登録**

大学名を選択して、メールアドレスとユーザー名とパスワードを登録する。登録したアドレスに届いたメールから認証を行い、登録が完了する。

**Step2: 探索・投稿**

イベント情報を見て、興味のあるイベントを見つける。自分の大学内イベントや学外のイベント、部活動やサークルなどを通じてコミュニティが広がる。また、投稿も自由にできる。

**Step3: 参加**

参加したいイベントにコンタクトを取り、参加する。

## 対応大学

[https://docs.google.com/document/d/10VlVGlahwYiXOdug7041zrCWzv5eAG6mouuu2EJYHv0/edit?usp=sharing](https://docs.google.com/document/d/10VlVGlahwYiXOdug7041zrCWzv5eAG6mouuu2EJYHv0/edit?usp=sharing)

「大学メール一覧取得先」

・日本の大学ドメイン

[https://so-zou.jp/software/tech/network/domain/ac-jp.htm](https://so-zou.jp/software/tech/network/domain/ac-jp.htm)

## よくある質問

**Q.  無料で使えますか？**

A.  はい、すべて無料でお使いいただけます。

**Q.  ユーザー登録ができません。**

A.  大学から発行されたメールアドレスでのみご登録いただけます。大学名選択後に表示されるメールアドレスが異なっていた場合は、お手数ですがお問い合わせください。

**Q.  対応大学一覧に自分の大学がありません。**

A.  お手数ですが、大学名を記載してお問い合わせをお願いします。

## システム構成

- インフラ
  - Docker, Docker-compose
- フロント
  - Next.js, TypeScript, Vercel
- バックエンド
  - Firebase(Firestore, Firebase Authentication, Cloud Storage)

[https://lh5.googleusercontent.com/uvQ8bEQzyShl_HIx_kI5ROZGnMVsCwvz_vnYP7IwxSCE7u2EMpbC0d1MJTpPu7sla0l7OnRRnsKhBZCTvK3yvcIIYTZ8bv5FnXNcshHXI-vx0GAXNFjjXrdUvm_UeToQ8bSVpI--](https://lh5.googleusercontent.com/uvQ8bEQzyShl_HIx_kI5ROZGnMVsCwvz_vnYP7IwxSCE7u2EMpbC0d1MJTpPu7sla0l7OnRRnsKhBZCTvK3yvcIIYTZ8bv5FnXNcshHXI-vx0GAXNFjjXrdUvm_UeToQ8bSVpI--)

## 画面遷移図

![Unipp画面遷移図.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/68dedeea-2cbd-4640-9c49-335f2b9f1183/Unipp画面遷移図.png)

## 運営環境

「メンバー」

- 先端
- 研究室

「SNS」

- Twitter
- Instagram

## ドメイン

- GoogleDomains ([https://domains.google/intl/ja_jp/](https://domains.google/intl/ja_jp/))
- [お名前.com](http://お名前.com)

## 未実装機能

- アプリロゴ
- 利用規約

## TODO リスト（リリース前確認）

- [ ] \***\*表示崩れの確認\*\***
- [ ] \***\*文字のフォントや間隔の調整\*\***
- [ ] \***\*CSS\*\***
- [ ] \***\*画像\*\***
- [ ] \***\*meta タグ(SEO)\*\***
- [ ] \***\*OGP 画像(SEO)\*\***
- [ ] **画像（パフォーマンス）**
- [ ] **動作（パフォーマンス）**

## 今後の予定

2 月

- 未実装機能

3 月

- アプリロゴ
- 利用規約
- リリース前確認
- 運営環境

## 今後の方針

- 名古屋のベンチャーキャピタル
- 名古屋のアプリ開発企業
