# Next.js ディレクトリ構造

unipp のディレクトリ構成は以下の通りになっています <br />
このファイルってなんのためにあるんだっけ？？って時は参考にしてください！

```
unipp
├── docker
│   └── next
│       └── Dockerfile *Dockerで作成するコンテナイメージを管理するためのフォルダ*
│
├── docker-compose.yml *Dockerアプリケーションを動かすためのアプリケーション*
│
└── src
    ├── components *unippのUIを構成しているコンポーネントを格納している・フォルダ Atomic-designに則っている*
    │   ├── Layouts
    │   ├── Molecules
    │   ├── Organisms
    │   └── atoms
    ├── datas *ローカルで保存するデータを保持するフォルダ*
    │
    ├── hooks *unippのreact カスタムフックを格納しているフォルダ*
    │   └── firebase *firebase関連のカスタムフックを格納しているフォルダ*
    │
    ├── lib *プログラムのUI以外の部品を格納しているフォルダ*
    │
    ├── next.config.js *nextの設定設定ファイル*
    │
    ├── pages *実際に表示されているファイルを格納しているるフォルダ*
    │
    ├── public *unippのローカルで保持する画像などのファイルを格納するフォルダ*
    │
    ├── store *Recoilの記法に沿って書いたファイルを格納するフォルダ*
    │
    ├── styles *globalなスタイルを設定するときのフォルダ(基本的には使わない)*
    │
    ├── tsconfig.json *TypeScriptの設定ファイル*
    │
    ├── types *TypeScriptの型を格納するファイル*
    │
    ├── package.json *unippが依存するパッケージに関する情報を記録するのに使用するファイル*
    │
    └── yarn.lock *パッケージの正確なバージョンを管理するためのファイル*
```
