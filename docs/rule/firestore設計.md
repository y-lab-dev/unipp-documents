# firestore 設計

「firestore 設計ルール　検討ポイント」
・一緒に表示するものは同じドキュメントに入れる
・サイズはちょうど良い大きさにする
・一部を検索する必要があったり、今後数が増える可能性があるデータはコレクションとして保持しておく
（一覧画面で再検索を行なった際に Review のデータも全て取得してしまうのでデータ量が多くなる）
悪い例
![image](https://gyazo.com/dccf86dcbe8e19ca1f07bcc1203f0bbb)

・逆にそのデータから親階層のデータを検索するようなケースがある場合は親階層に Map として保持しておく
・Map を使うもう 1 つの例として関連が深いデータのまとまりをまとめておくと名前の衝突なども避けられて良い(住所情報、位置情報など)
・フラグ（true,false）として使用する複数の項目は Array としてまとめておくと良い
・ Model は updatedAt, createdAt を保持する
・Model 内の Array を活用する

「参考文献」
・【Firebase】Cloud Firestore のデータ構造の決め方を Firebase の動画から学ぶ
https://qiita.com/shiz/items/5f4c8ae19083ccdd46b2
