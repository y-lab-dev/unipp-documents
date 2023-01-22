# 🚫Recoil

ストアの構成要素は４つ
・アプリケーションのステート(State)
・ステートの一部や、ステートから計算された値を返すゲッター(Getter)
・ステートを更新するミューテーション(Mutation)
・主に Ajax リクエストのような非同期処理や、Localstrage への読み書きのような外部 API とのやりとりを行うアクション(Action)
[https://gyazo.com/4659e61e2ca69f3c92217a2f243d6713]
Getter
Mutation
→ 必ず同期的処理、store.commit で呼び出す、
第一引数にステート、第二引数にペイロード（payload)…何らかの値を与えられる
→store.commit('increment', {amount : 5})
Action
→ 非同期処理 OK、store.dispatch で呼び出す
第一引数にコンテキストというオブジェクト、第二引数にペイロード（payload)…何らかの値を与えられる
※コンテキストは以下のものが含まれる
・state 　例：データのロード中にはアクションの処理を行わないというような、現在の状況（true,false）に応じてアクションの処理を切り替えるときに使う
・getters 　例：state と同じ
・dispatch 　例：すでに定義してある他のアクションを呼び出せる　
　　　　　　注意…これによって共通の処理を一つのアクションにまとめることができるが、使いすぎると複雑性が増すために気をつける必要がある
・commit 　例：ミューテーションを実行するのに使う、最も頻度が多い
Nuxt.js では 2 つのモードのストア がある

◎ モジュールモード: store ディレクトリ内のすべての \*.js ファイルが 名前空間付きモジュール に変換される（index はルートモジュールとして存在する）
✕ クラシックモード (廃止予定): store/index.js がストアインスタンスを返す
モードに関わらず、サーバーサイドで不要な共有状態を避けるため、state の値は常に function でなければならない

「参考文献」
・Vuex ストア
https://ja.nuxtjs.org/guide/vuex-store/
・Vue.js + Vuex でデータが循環する全体像を図解してみた
https://qiita.com/m_mitsuhide/items/f16d988ec491b7800ace
・vue.js の状態管理 Vuex がわかる mapState,mapMutations など
https://reffect.co.jp/vue/vue-js-vuex-map-helper
・Vuex とは何か？
https://vuex.vuejs.org/ja/

「参考にしていきたい文献」
・Vuex を用いた開発プロジェクト用にガイドラインを作成した話
https://qiita.com/HayatoKamono/items/eb6d253a1c73ab001659
