# コンポーネント設計「共通方針」

また、全てのレベルのコンポーネントに共通する方針として、コンポーネント自身に CSS の position やコンポーネントの外側への margin を持たさず、コンポーネントを使う側でそれらは指定する

-------------------------------------リファクタリング時に今後参考にしていきたい----------------------------------------------------------
「Container Component と Presentational Component」
React コミュニティーでは、Dan Abramov の Presentational and Container Components で有名になった Container Component と Presentational Component を分けて実装するパターンがお馴染み

[* 目的の共有]

・可読性・保守性の向上
→ データや振る舞いに関心を持つ Container Component と、見た目に関心を持つ Presentational Component に分離することで、どこに何が書かれているかが分かりやすくなり、アプリケーションのコードの理解がしやすくなるし、既存コードに機能追加や修正を行なう際には、どこに何を追加・変更すれば良いかが分かりやすくなる。また、１ファイル内のコード量も減るため、コードの見通しも良くなる

・再利用性の向上
→Container Component と Presentational Component に分けることで、Presentional Component が特定の Vuex 側で持っている状態に依存しなくなり、他の異なるデータソースに差し替えても使い回しが出来るようになる。また、同様に Container Component 自体も同じデータや振る舞いに関心を持つ Presentational Component に対して、使い回しが効くようになる

---

「スロットコンテンツの利用」
[https://gyazo.com/e8439f44189fd8e6ead42b963d3883ed]
[https://gyazo.com/ec40866e38a14443edd761852bd9e3bb]
Your Profile のとこに任意の HTML タグを書くことができるが、[* Atom の中では文字列のみ]にする

[* いつ data/props/$emit を使うのか]
Vuex があっても data/props/$emit を使う場面はたくさんある

・そのコンポーネントでしか使わないデータ
・セレクトボックスやモーダルウィンドウの開閉のような揮発性の情報
・親子間 2 層だけで情報を受け渡す
・単機能のコンポーネントを使う、作る

上記の場合でも何らかの方法(localStorage や Firebase)で該当のデータを永続化する必要があるなら Vuex を使いたい

慣れると非常に便利な機能なんですが、常に全てのデータを Vuex で管理すれば良いというわけではない
あらゆる機能には適材適所があり、アプリの規模、チームの技術力、コンポーネントの数によっても Vuex を使うかどうか判断すべき

必須の props には required を true にする
[https://gyazo.com/566323d19aca4f0a630b853a69024a93]
任意の props には default を設定する
[https://gyazo.com/ac196b08803211dbf5c3f7bc7bf19427]
データ型を指定する
[https://gyazo.com/58ee6e25fe8d0ef29800f58c3141397c]
