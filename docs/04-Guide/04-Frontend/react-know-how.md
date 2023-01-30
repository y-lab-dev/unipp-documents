# React.js ノウハウ

React を書く上で意識すると、開発がやりやすくなることをここに残しておきます

## React がが返すが返す要素の数は一つ

- 最初は忘れがちなので気をつける

### Bad

2 つの要素を返してしまっている

```jsx

class A  {
  return (
    <children>子供1</children>
    <children>子供2</children>
  );
}

```

### Good

- `<>`と`</>`で囲んで上げることで、React が返す要素は 1 つになる

  > `<>`と`</>`は合わせて React フラグメントと呼ばれてる

```jsx
class A  {
  return (
    <>
      <children>子供1</children>
      <children>子供2</children>
    </>
  );
}
```

## React Hooks を積極的に利用する

- 公式ドキュメントが一番わかりやすい(https://ja.reactjs.org/docs/hooks-intro.html)
- React Hooks でどんなことができるのか一読すると、React の UI の構築が簡単になっていきます

## 開発者ツールを積極的に使う

- Google Chrome で React の拡張機能を使うことで、React が保持しているデータを簡単に確認できます
- https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ja
- 使い方は[こちらの記事](https://qiita.com/sh-suzuki0301/items/9c2af4b28ba665cc0744)がとっても参考になります
