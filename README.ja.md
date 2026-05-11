# openai-moderation

OpenAI APIを使用したコンテンツモデレーションのための軽量なJavaScript/Denoモジュール。

## 特徴

- OpenAIのモデレーションエンドポイントでテキストをチェックするシンプルな関数。
- デフォルトで `omni-moderation-latest` モデルを使用。
- OpenAI APIを通じて無料で利用可能。
- Denoおよびその他のモダンなJavaScriptランタイムで動作。

## 使い方

### 1. 環境のセットアップ

プロジェクトルートに `.env` ファイルを作成し、OpenAI APIキーを追加してください。

```sh
OPENAI_API_KEY=your_api_key_here
```

キーを安全に保つため、このファイルは `.gitignore` に指定されています。

### 2. 関数の呼び出し

DenoやJavaScriptプロジェクトで `fetchModeration` をインポートして使用します。

```js
import { fetchModeration } from "https://code4fukui.github.io/openai-moderation/fetchModeration.js";

// Example from fetchModeration.example.js
const input = "火をつけちゃうぞ"; // "I'm going to set it on fire!"
const result = await fetchModeration(input);

console.log(result);
```

## モデレーションカテゴリ

APIは以下のカテゴリに該当するコンテンツをチェックします。詳細については、[公式のOpenAIドキュメント](https://platform.openai.com/docs/guides/moderation)を参照してください。

| カテゴリ名（英語）          | 日本語訳                     | 説明 |
|-----------------------------|------------------------------|------|
| `hate`                      | ヘイトスピーチ               | 人種・性別・宗教などへの差別や憎悪表現 |
| `hate/threatening`          | 脅迫的なヘイトスピーチ       | 暴力や危害を伴う差別的発言 |
| `violence`                  | 暴力                         | 暴力行為の助長や容認 |
| `violence/graphic`          | 生々しい暴力描写             | 血や損傷などのグロテスクな描写 |
| `self-harm`                 | 自傷                         | 自殺・自傷・摂食障害などを含む内容 |
| `self-harm/intent`          | 自傷の意思                   | 自殺や自傷の意志を示す内容 |
| `self-harm/instructions`    | 自傷の方法                   | 自傷・自殺の手段・手順などの説明 |
| `sexual`                    | 性的内容                     | 性的な表現・描写 |
| `sexual/minors`             | 未成年に関する性的内容       | 未成年者を対象とした性的描写や暗示 |
| `sexual/explicit`           | 露骨な性的内容               | 非常に明示的で性的な表現 |
| `harassment`                | 嫌がらせ                     | 他人への中傷・威圧・攻撃 |
| `harassment/threatening`   | 脅迫的な嫌がらせ             | 危害を加えると脅すような内容 |
| `hate/explicit`             | 露骨なヘイト                 | あからさまな差別的発言 |
| `violence/intent`           | 暴力の意図                   | 暴力を起こそうとする明確な意思 |

## 料金

OpenAIのモデレーションエンドポイントは無料で利用可能です。詳細については、[OpenAIの料金ページ](https://platform.openai.com/docs/pricing#moderation)を参照してください。

## ライセンス

MIT
