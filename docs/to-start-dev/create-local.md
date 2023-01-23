---
sidebar_position: 4
---

# 4. unipp 環境構築手順書

unipp の個人開発環境をを構築するための手順書

## 前提

- [開発準備 step1 ~ 3](../category/開発準備)を終わらせてください

---

## 対象リポジトリ

**unipp: https://github.com/ylab-dev/Unipp**

## step1.Docker-destop のインストール

### windows の場合

> windows の場合は WSL2 をインストールインストールしてから、Docker-desktop をインストールしてください

1. [WSL2](https://chigusa-web.com/blog/wsl2-win11/) のインストール
2. [Docker-desktop](https://www.docker.com/products/docker-desktop/) のインストール

### mac の場合

1. [Docker-desktop](https://www.docker.com/products/docker-desktop/) のインストール

## 2.リポジトリのクローン

VScode>Teriminal でターミナルを開き、以下のコマンドを入力する

```
git clone https://github.com/ylab-dev/Unipp.git
```

## サービスの構築

VScode>Teriminal でターミナルを開き、以下のコマンドを入力する

```bash
docker-compose build
docker-compose run --rm next yarn install
```

## コンテナの立ち上げ

```bash
docker-compose up
```

## 動作確認

web ブラウザ(google chrome 推奨)上で以下のページにアクセス

```
http://localhost:3000/
```
