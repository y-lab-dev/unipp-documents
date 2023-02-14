# ドキュメント改定のルールと方法

ドキュメントは、継続的に改善されていくものです。  
しかし、勝手にドキュメントの加筆、修正を修正してしまうと、誤った情報を記載する可能性があります。

## ルール

1. 新しく加筆・修正することがあった時は気付いた人が issue に概要を記載する([リンクはこちら](https://github.com/y-lab-dev/unipp-documents/issues))
2. issue を作成した人がドキュメントを書く
3. 後期の活動が終了してから次の年度の活動が開始までの間にドキュメントををリーダーを含めた数人で見直す

## 改定方法

### unipp-documents を書き変える方法

以下のリンクにアクセスしてください。unipp-documents をローカルで変更する方法が書かれています。  
https://github.com/y-lab-dev/unipp-documents#readme

### ドキュメントを作成・修正する手順

ドキュメントを改定する場合は以下の手順に従ってください。
新しく作成するのか、修正するのかで issue の書き方が変わります。  
それ以外は同じ流れです。

1. 新しく書くドキュメント・作成するドキュメントに気付く
2. [Issue](https://github.com/y-lab-dev/unipp-documents/issues)を作成する

   - [新規作成時参考 Issue](https://github.com/y-lab-dev/unipp-documents/issues/12)
   - [修正時参考 Issue](https://github.com/y-lab-dev/unipp-documents/issues/11)

3. ローカルでドキュメントを編集する(必ずブランチを切る)
4. [Pull Request](https://github.com/y-lab-dev/unipp-documents/compare)を出す
   1. Assigness に自分を assign する
   2. 本文に 2 で作成した Issue を紐付ける ([参考 PullRequest](https://github.com/y-lab-dev/unipp-documents/pull/13))
5. 自分以外の人にレビューもらってから、main にマージする (自動でデプロイされます)
