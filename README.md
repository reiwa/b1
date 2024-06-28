# Bun + D1 + Drizzle

CloudflareのREST APIとDrizzleのHTTP Proxyを用いてD1にクエリする。
とても遅い。

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run app/main.ts
```

This project was created using `bun init` in bun v1.1.12. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## 準備

- ファイル「wrangler.toml」の「database_id」を変更する
- ファイル「.env.local」を追加する

### .env

環境変数を書き込む。

```
CLOUDFLARE_API_TOKEN=""
CLOUDFLARE_ACCOUNT_ID=""
CLOUDFLARE_DATABASE_ID=""
```

#### CLOUDFLARE_API_TOKEN

Cloudflareの右上の「My Profile」からトークンを発行する。

```
My Profile > API Tokens > Create Token > Create Custom Token
```

Permissionsに2つを追加してトークンを作成する。

```
Account / D1 / Edit
Account / D1 / Read
```

#### CLOUDFLARE_ACCOUNT_ID

以下のURLにアクセスしてAccount IDを取得する。

```
Workers > Overview > Account ID
```

#### CLOUDFLARE_DATABASE_ID

データベースの詳細ページに記載されている。

## データベースを初期化する

ファイル「wrangler.toml」の「database_id」を変更してから実行する。

```
bunx wrangler d1 migrations apply b1 --remote
```
