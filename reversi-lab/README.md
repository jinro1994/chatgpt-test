# Reversi Lab — Web版 v1.2

リバーシ解析ツール。GitHub Pages上で公開しています。宝塚 Data Lab（リポジトリ直下）とは独立しています。

**[アプリを開く](https://jinro1994.github.io/chatgpt-test/reversi-lab/)**

## 主な機能

- 合法手表示、盤面編集、手番の切り替え、手戻し
- WebAssemblyエンジンによる端末内解析
- 序盤・中盤の近似評価、終盤の完全読み（処理が完了した場合のみ確定結果を表示）
- PVS探索、転置表拡張、解析時間／深度設定
- 60手の棋譜読み込み・再生・途中局面解析
- 対局棋譜例: `d3c3c4e3d2b4f4c2c5e6d6f3e2f1e1g4b5d1c1b1f2f6a4b3f5g1d7g3h5e7e8g6g5h4h6c6b6a6h3a5a3a2b2a7g2a1b7h1h2b8a8c8d8h7g7g8h8c7f8f7`

## 使用上の注意

- 「近似評価」は最善手や勝利を保証しません。「勝敗確定」「最終石差確定」は終局探索が完了した場合に限ります。
- v1.2の強度評価は暫定的な小規模試験に基づき、上級AIに勝てることを保証しません。
- GitHub Pagesは `main` ブランチの `/ (root)` から配信します。公開サイトは `reversi-lab/index.html` の単一HTML版です。
- 旧バージョンが出る場合はSafariでページを再読み込みしてください。
