# wanted-pre-onboarding-challenge-fe-2

## [🔗 사전과제 링크](https://ziya312.github.io/wanted-pre-onboarding-challenge-fe-2/)

## 👋 소개

안녕하세요 김민지입니다:)
JsDoc이라는 문서 생성기를 처음 사용해보기도하고 TypeScript에 대해서 더 앍고 싶어 챌린지를 신청하게 되었습니다!

## JSDoc이란?

JSDoc은 자바스크립트 API 문서 생성기다. 자바스크립트 소스코드에 JSDoc 형식의 주석을 추가하면 API를 설명하는 HTML 문서를 생성할 수 있다. JSDoc 주석은 /\*_ ... _/ 사이에 기술한다. 일반적인 자바스크립트 주석 /_ ... _/은 무시된다.

## JSDoc 시작하기
### 터미널에 아래 명령어를 수행한다.
```
npm init -y
```

```
npm i -D jsdoc
```
### 루트 디렉토리에 jsdoc.json 파일 생성
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

### package.json 파일 수정
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "docs": "jsdoc -c jsdoc.json"
  },
```

### 루트 디렉터리에 src/index.js 파일 생성 및 doc 명령어 수행
```
npm run doc
```

## 📝 Requirements

### 필수 요구사항

> 아래의 Todo 앱 요구사항을 참고하여

- [x] 필요한 데이터를 모두 모델링한다.
- [x] 사용되는 모든 함수를 선언부만 만든다.
- [x] 함수 및 클래스의 내부는 구현하지 않습니다.
- [x] JSDoc을 활용해 문서화한다.
- [x] GitHub Page를 활용해 JSDoc 정적 페이지를 배포한다.

### Todo

```js
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}
```

#### CREATE

- 할 일을 추가할 수 있다.
- 내용없이 추가할 수 없다.

#### READ

- 모든 할 일을 조회할 수 있다.
- ID를 기반으로 특정 할 일을 조회할 수 있다.

#### UPDATE

- ID를 제외한 모든 속성을 수정할 수 있다.
- 특정 할 일의 특정 태그를 수정할 수 있다.

#### DELETE

- ID를 기반으로 특정 할 일을 삭제할 수 있다.
- 모든 할 일을 제거할 수 있다.
- 특정 할 일의 특정 태그를 삭제할 수 있다.
- 특정 할 일의 모든 태그를 제거할 수 있다.

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
