# Firestore の Timestamp と Date の相互変換

createdAt などで取得している Timestamp を利用してイベントの条件分岐は難しいので toDate()を使ってあげるといい。

```js
 {
    createdAt:timestamp.toDate(),
    updatedAt:timestamp.toDate(),
 }
```

## 表示の際

- これを更に ライブラリ の dayjs を使うことで表示がしやすくなる。

## 参考

[firebase のドキュメント -Timestamp-](https://firebase.google.com/docs/reference/android/com/google/firebase/Timestamp)
