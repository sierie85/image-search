# Blank NextJS 14x (uses pages-router,ts,tailwind)

follow instructions or clone this repo.

## Install

```bash
npx create-next-app@latest
```

Following settings where made

| option | setting |
| --- | --- |
| ts | yes |
| eslint | yes |
| tailwind | yes |
| src dir | yes |
| app router | no |
| default import | no |

## Setup Docker

copy 'Dockerfile' and '.dockerignore' from this repo or go to official example: <https://github.com/vercel/next.js/tree/canary/examples/with-docker>

edit nextconfig (next.config.mjs) add this line to config:

```js
const nextconfig = {
  ...
  output: "standalone"
}
```

after this you can build and run the docker-container

```bash
docker build -t CONTAINER_NAME .
docker run -p 3000:3000 CONTAINER_NAME
```

## Config other packages etc

### SASS

install via npm / follow official instructions <https://nextjs.org/docs/app/building-your-application/styling/sass>

```bash
npm install --save-dev sass
```

after install you can use sass.
e.g. rename global.css to scss (change also by import) - this should direct work!

### todo add more package examples

## Testing

### Jest

run the comments (or follow official instructios <https://nextjs.org/docs/app/building-your-application/testing/jest>)

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
npm init jest@latest
```

on the init process the config is written - this is obsulte becouse we will rewrite everything in the next steps.

config and setup on the official instructions are not complete! but there example on github <https://github.com/vercel/next.js/tree/canary/examples/with-jest>

copy 'jest.config.js' and 'jest.setup.js' edit tsconfig include "__tests__"

### add E2E testinglib instructions

## Folder-Structure

```bash
├── __tests__
│   ├── Home.test.tsx
├── public
│   ├── logo.png
├── src
│   ├── components
│   │   ├── Input.tsx
│   │   ├── Form.tsx
│   │   ├── Button.tsx
│   ├── pages
│   │   ├── contact/subpages
│   │   │   ├── index.tsx
│   │   ├── about.tsx
│   │   ├── index.tsx
│   │   ├── _app_.tsx
│   │   ├── _document_.tsx
│   ├── styles
│   │   ├── *.scss
│   ├── types
│   │   ├── TYPE-INTERFACE.ts
│   │   ├── ...
├── node_modules
├── package.json
└── ...
```

## Simple Template (with Tailwind and modified nextjs template)

modified from [nextly-template](https://github.com/web3templates/nextly-template)

makes use of <https://headlessui.com/> unstyled (React)UI Components (from makers of Tailwind)

```bash
npm install @headlessui/react@latest
```

makes use of <https://heroicons.com/> icons (from makers of Tailwind)

```bash
npm install @heroicons/react
```

makes use of <https://react-hook-form.com/>

```bash
npm install react-hook-form
```

makes use of <https://github.com/pacocoursey/next-themes> An abstraction for themes ~easy darkmode

```bash
npm install next-themes
```
