# 🚫next SSR ライフサイクルフック

[https://gyazo.com/0eea9b5cfe9029af2cc3ba77e2d6e19c]

Nuxt.js で SSR を使う場合は、

初回の描画時のみ SSR
それ以降は CSR

[https://gyazo.com/fb3a9487270c9f4f869f1c3b65169609]

↓ こっちのｈ
[https://gyazo.com/c6c893a5e852b3604533502498675fcb]

【SSR と CSR の実行順序】
「実際の例コード」

````<template>

  <div>
    <h1>SAMPLE</h1>
    <nuxt-link to="/blue">リンク</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'top',
  data() {
    console.log('data / server: ' + process.server)
    return {
      value: ''
    }
  },
  asyncData() {
    console.log('asyncData / server: ' + process.server)
  },
  fetch() {
    console.log('fetch / server: ' + process.server)
  },
  beforeCreate() {
    console.log('beforeCreate / server: ' + process.server)
  },
  created() {
    console.log('created / server: ' + process.server)
  },
  beforeMount() {
    console.log('beforeMount / server: ' + process.server)
  },
  mounted() {
    console.log('mounted / server: ' + process.server)
  }
}
</script>```

「実行結果」
(SSR) asyncData
(SSR) beforeCreate _
(SSR) data _
(SSR) created \*
(SSR) fetch

(CSR) beforeCreate _
(CSR) data _
(CSR) created _
(CSR) beforeMount
(CSR) mounted
→ 初回描画時は、SSR -> CSR という順番でライフサイクルフックが実行され、
beforeCreate data created(_)はどちらでも実行されていることが分かります。
※data のなかで関数を実行するとエラー吐く

【asyncData fetch】
・asyncData()
→ ページがロードされる前（Vue インスタンスが作成される前）に呼び出される関数で、通常 API 呼び出しなどの非同期処理を記述する。結果は Vue インスタンスの data とマージされ、同じキーが存在する場合は asyncData の結果で上書きされる
→Page コンポーネントのデータを取り込むために使用（オブジェクトを返すとレンダリングの前にデータの出力とマージされる
※asyncData メソッド内の this を通してコンポーネントのインスタンスにアクセスすることは できない。それはコンポーネントが インスタンス化される前に このメソッドが呼び出されるから

・fetch()
→asyncData と同様、ページがロードされる前に呼び出され、非同期処理を記述するための関数。
asyncData との違いは、結果を Vue インスタンスの data とマージしないという点
→Vuex Store を作成するために使用（プロミスを返すと、Nuxt はレンダリングされる前にプロミスが解決されるまで待機する
（※Vue インスタンス（クライアントサイド）、コンテキスト（サーバーサイド）→vuex のコンテキストとは意味が違うはず？）

asyncData との違いにも書きましたが
API 通信の結果を Vuex の store に格納するものです 🧸
※this が使えない
this を通してコンポーネントのインスタンスに
アクセスすることができません 💥

使用箇所
pages 内コンポーネントのみ使用可能

※asyncData：インスタンス作成前
fetch：インスタンス作成後

9/9
たぶん、ayncsData は SSR なので、普通に記述してもデータとかはとってこれない
よくある例だと、axios を利用して http 通信を行って API のデータを取得している

・Nuxt.js の asyncData と fetch は何が違うのか
https://qiita.com/Tsuyoshi84/items/2e47b7f5e7fb8c0c3c66

【検討事項】
環境依存のない処理は、一度しか実行されないことを保証してくれる asyncData や fetch に記述するのがセオリー
→localStorage やブラウザに保存された認証情報を利用するサードパーティ API のようなクライアントサイドでしか実行できない処理は、必ずクライアントで実行される created や mounted で記述する必要がある

１．セッション管理はどのタイミング（SSRorCSR）で発火するか
２．データベース読み込みは created でいいか？SSR でやったら速度上がる？

【まとめ】
・初回描画時のみ SSR、それ以降は CSR
・初回描画時のライフサイクルは、asyncData -> beforeCreate _ -> data _ -> created * -> fetch -> beforeMount -> mounted
(*SSR でも CSR でも実行される)
・window オブジェクトと DOM にアクセスできるのは、beforeMount 以降、インスタンスがマウントされた後(ディレクティブやムスタシェ)なら mounted
・Nuxt.js で SSR を使う時は、SSR と CSR どちらでも動作するユニバーサルなコードを書く必要がある
【参考文献】
・Nuxt.js のライフサイクル覚書
http://lab.astamuse.co.jp/entry/2019/05/29/114500
・Vue.js と Nuxt.js のライフサイクル早引きメモ
https://qiita.com/japboy/items/b67bae0bac1aeefb2680
・Nuxt.js ｜ SSR のライフサイクル
https://koz2020.hatenablog.com/entry/2020/05/10/085120
・Vue.js の SSR では created が 2 回実行される!?
https://medium.com/veltra-engineering/in-ssr-vue-js-is-created-twice-7f9122de9b77
````
