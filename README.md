unipp-documentsを書き換えたい場合は、以下のREAD.meを読んでください


# document-URL

> https://y-lab-dev.github.io/unipp-documents/

## 環境構築

2023 年 1 月段階での実行環境

```bash
node -v
> v16.14.0
```

```bash
yarn -v
> 1.22.19
```

### step.1

```bash
git clone https://github.com/y-lab-dev/unipp-documents.git
```

### step.2

```bash
yarn install
```

### step.3

```
yarn start
```

### done

これで、ドキュメントを書き換えられるようになりました。
後はローカルで作業して、main に PR くれれば ok です。

### デプロイに関して

main にマージされた段階で GitHub Action が走って自動でデプロイされます
