# 🚫 ディレクトリ構造

Nuxt ディレクトリ構造
assets・・・コンパイルが行われていない SASS, LESS や Font などを保存
middleware・・・layout やページがレンダリングする前に実行されるカスタム関数を保存。ユーザ認証などに使うことができます。
plugins・・・Vue インスタンスが起動する前にロードする JavaScript プラグインを保存
static・・・robots.text, favicon、画像ファイルを保存されています。もし image.png を保存すると/image.png でアクセスすることが可能です。
store・・・Vuex Store に関するファイルが保存されています。
.nuxt・・・コンパイルを実行すると作成されます。
node_modelues・・・next.js で使われる JavaScript のパッケージが保存されています。

【参考文献】
Nuxt.js のディレクトリ構造
https://qiita.com/sychocola1/items/6aa185960a9f4e40d3d0#nuxtのディレクトリ構造
https://reffect.co.jp/vue/nuxt-js-first-step#Nuxtjs-5
