# wanted-pre-onboarding-challenge-fe-2

## [๐ ์ฌ์ ๊ณผ์  ๋งํฌ](https://ziya312.github.io/wanted-pre-onboarding-challenge-fe-2/)

## ๐ ์๊ฐ

์๋ํ์ธ์ ๊น๋ฏผ์ง์๋๋ค:)
JsDoc์ด๋ผ๋ ๋ฌธ์ ์์ฑ๊ธฐ๋ฅผ ์ฒ์ ์ฌ์ฉํด๋ณด๊ธฐ๋ํ๊ณ  TypeScript์ ๋ํด์ ๋ ์๊ณ  ์ถ์ด ์ฑ๋ฆฐ์ง๋ฅผ ์ ์ฒญํ๊ฒ ๋์์ต๋๋ค!

## JSDoc์ด๋?

JSDoc์ ์๋ฐ์คํฌ๋ฆฝํธ API ๋ฌธ์ ์์ฑ๊ธฐ๋ค. ์๋ฐ์คํฌ๋ฆฝํธ ์์ค์ฝ๋์ JSDoc ํ์์ ์ฃผ์์ ์ถ๊ฐํ๋ฉด API๋ฅผ ์ค๋ชํ๋ HTML ๋ฌธ์๋ฅผ ์์ฑํ  ์ ์๋ค. JSDoc ์ฃผ์์ /\*_ ... _/ ์ฌ์ด์ ๊ธฐ์ ํ๋ค. ์ผ๋ฐ์ ์ธ ์๋ฐ์คํฌ๋ฆฝํธ ์ฃผ์ /_ ... _/์ ๋ฌด์๋๋ค.

## JSDoc ์์ํ๊ธฐ
### ํฐ๋ฏธ๋์ ์๋ ๋ช๋ น์ด๋ฅผ ์ํํ๋ค.
```
npm init -y
```

```
npm i -D jsdoc
```
### ๋ฃจํธ ๋๋ ํ ๋ฆฌ์ jsdoc.json ํ์ผ ์์ฑ
```json
{
  "plugins": ["plugins/markdown"],
  "source": {
    "include": ["src/"],
    "includePattern": ".js$",
    "excludePattern": "(node_modules/|docs)_"
  },
  "sourceType": "module",
  "tags": {
    "allowUnknownTags": true,
    "dictionaries": ["jsdoc", "closure"]
  },
  "templates": {
    "cleverLinks": true,
    "monospaceLinks": false
  },
  "opts": {
    "encoding": "utf8",
    "destination": "./docs/",
    "recurse": true
  }
}
```

### package.json ํ์ผ ์์ 
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "docs": "jsdoc -c jsdoc.json"
  },
```

### ๋ฃจํธ ๋๋ ํฐ๋ฆฌ์ src/index.js ํ์ผ ์์ฑ ๋ฐ doc ๋ช๋ น์ด ์ํ
```
npm run doc
```

## ๐ Requirements

### ํ์ ์๊ตฌ์ฌํญ

> ์๋์ Todo ์ฑ ์๊ตฌ์ฌํญ์ ์ฐธ๊ณ ํ์ฌ

- [x] ํ์ํ ๋ฐ์ดํฐ๋ฅผ ๋ชจ๋ ๋ชจ๋ธ๋งํ๋ค.
- [x] ์ฌ์ฉ๋๋ ๋ชจ๋  ํจ์๋ฅผ ์ ์ธ๋ถ๋ง ๋ง๋ ๋ค.
- [x] ํจ์ ๋ฐ ํด๋์ค์ ๋ด๋ถ๋ ๊ตฌํํ์ง ์์ต๋๋ค.
- [x] JSDoc์ ํ์ฉํด ๋ฌธ์ํํ๋ค.
- [x] GitHub Page๋ฅผ ํ์ฉํด JSDoc ์ ์  ํ์ด์ง๋ฅผ ๋ฐฐํฌํ๋ค.

### Todo

```js
Todo {
  ์์ด๋(required),
  ๋ด์ฉ(required),
  ์๋ฃ์ฌ๋ถ(required),
  ์นดํ๊ณ ๋ฆฌ(required),
  ํ๊ทธ๋ค(optional),
}
```

#### CREATE

- ํ  ์ผ์ ์ถ๊ฐํ  ์ ์๋ค.
- ๋ด์ฉ์์ด ์ถ๊ฐํ  ์ ์๋ค.

#### READ

- ๋ชจ๋  ํ  ์ผ์ ์กฐํํ  ์ ์๋ค.
- ID๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ํน์  ํ  ์ผ์ ์กฐํํ  ์ ์๋ค.

#### UPDATE

- ID๋ฅผ ์ ์ธํ ๋ชจ๋  ์์ฑ์ ์์ ํ  ์ ์๋ค.
- ํน์  ํ  ์ผ์ ํน์  ํ๊ทธ๋ฅผ ์์ ํ  ์ ์๋ค.

#### DELETE

- ID๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ํน์  ํ  ์ผ์ ์ญ์ ํ  ์ ์๋ค.
- ๋ชจ๋  ํ  ์ผ์ ์ ๊ฑฐํ  ์ ์๋ค.
- ํน์  ํ  ์ผ์ ํน์  ํ๊ทธ๋ฅผ ์ญ์ ํ  ์ ์๋ค.
- ํน์  ํ  ์ผ์ ๋ชจ๋  ํ๊ทธ๋ฅผ ์ ๊ฑฐํ  ์ ์๋ค.

#### Modeling (Shape)

```js
Item {
  property(required),
  property(optional),
}
```

#### Reference

- [use JSDoc](https://jsdoc.app)
- [JSDoc Boilerplate](https://github.com/pocojang/jsdoc-boilerplate)
