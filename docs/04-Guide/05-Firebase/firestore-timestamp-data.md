# Firestore の Timestamp と Date の相互変換

createdAt などで取得している Timestamp を利用してイベントの条件分岐がしたかったので。
解決策：　
code:day.js

```
 {....
    createdAt:timestamp.toDate(),
    updatedAt:timestamp.toDate(),
 }
```

これを更に dayjs 使ってフォーマットすると条件分岐しやすい。
参考
https://firebase.google.com/docs/reference/android/com/google/firebase/Timestamp
