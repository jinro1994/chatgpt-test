# Reversi Lab — Web版

本フォルダはリバーシ解析ツールのGitHub Pages公開用です。既存の宝塚 Data Labとは独立しています。

- [アプリを開く](./index.html)
- **盤面入力**: 対局モードは合法手をタップ、盤面編集モードでは石の配置を直接変更できます。
- **解析**: 序・中盤は近似評価、終盤は制限時間内に終了した場合のみ完全探索結果を表示します。
- **動作**: WebAssembly内蔵の単一HTMLで解析を端末内実行。初回読み込み後のオフライン利用に対応します。

GitHub Pagesが未設定の場合はリポジトリの Settings → Pages で Deploy from a branch、Branch: main、Folder: / (root) を設定してください。
公開予定URL: https://jinro1994.github.io/chatgpt-test/reversi-lab/
