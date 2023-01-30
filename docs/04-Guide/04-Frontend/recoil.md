# Recoil のデータの流れ

ここでは、Recoil で状態管理したいデータのセットから UI で利用するまでの流れを書きます

## 1.データストアにファイルを作成

`unipp/src/store`に`xxx.ts`を作成する(xxx は任意)

- 今回は例のために user の名前(状態)をを管理として、`userName.ts`を作成します

## 2.Atoms を作る

Atoms はデータストアのことです。
以下のように記述することで、

> ようはデータを一元管理するところ

```ts
// userName.ts

import { atom } from "recoil";

export const userName = atom({
  default: {
    name: "",
  },
});
```

## 3.データをセットする

このままでは、データの中身が`空`なので、データを取得するタイミングでデータを、さっきのデータストアに保存します

```jsx
import { userName } from "store/userName";

import { useSetRecoilState } from "recoil";
import { userName } from "store/userName";

const DataGetter = () => {
  const setUserName = useSetRecoilState(userName);
  const gotName = "hogehoge";
  setUserName({
    //
    name: gotName,
  });
};
```

## 4.データを使いたい UI でデータを利用する

```jsx
import { useRecoilValue } from "recoil";
import { userName } from "store/userName";

const DisplayName = () => {
  const userName = useRecoilValue(userName);
  return (
    <>
      <h1>自己紹介</h1>
      <p>彼の名前は{userName.name}</p>
    </>
  );
};
```
