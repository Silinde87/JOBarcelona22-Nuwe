# JOBarcelona'22 / Nuwe by Pau RodrΓ­guez

![](https://img.shields.io/github/deployments/Silinde87/JOBarcelona22-Nuwe/production?label=Vercel&logo=Vercel&logoColor=white)
![](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fjobarcelona22-nuwe.vercel.app%2F)


This library of React components is developed as a part of task for JOBarcelona'22 Hackaton arranged by Nuwe.
To main goal is to develop a reusable component that shows many giftlists.


## How it looks

π [Live Demo](https://jobarcelona22-nuwe.vercel.app/)

<p align="center">
    <img src="https://github.com/Silinde87/repo-media/blob/main/images/jobarcelona22.gif?raw=true" width="600" alt="Demo video showing the usage of the application" />
</p>

---

## Avaiable scripts in the application

### yarn install

> **Install app dependencies**

### yarn storybook

> **Runs the app** in the development mode. Open http://localhost:6006 to view it in the browser.

### yarn test

> **Launches the unit test runner** (Jest/RTL) in the interactive watch mode.

### yarn test:ci

> **Launches the unit test runner** (Jest/RTL) and shows a report of testing **coverage**

### yarn build

> **Generates a build version ready for deploy**.

### yarn build:lib

> **Generate files ready to be used inside another reat project**.

### yarn docs

> **Generates de documentation of the project** (JSDocs). Open `./src/docs/index.html` to see it.

---

## Stack

| Package              | Version |
| -------------------- | ------- |
| React & react-dom    | 17.0.2  |
| typescript           | Β 4.1.2  |
| styled-components    | Β 5.2.1  |
| jest/testing-library | 5.11.10 |
| storybook & addons   | 6.4.22  |
| eslint               | 7.22.0  |
| prettier             | 2.2.1   |
| jsdoc                | 3.6.10  |

## Output

```
.
βββ README.md
βββ package.json
βββ babel.config.json
βββ jest-setup.ts
βββ jest.config.js
βββ jsdoc.conf.json
βββ tsconfig.json
βββ tsconfig.path.json
βββ .gitignore
βββ .eslintrc.js
βββ .prettierrc
βββ node_modules
βββ docs                            # Documentation generated
βββ .storybook                      # Required storybook files
βββ src                             # React App folder
    βββ atoms                       # The smallest components
    β   βββ Card
    β   βββ Tag
    β   βββ Typography
    βββ molecules                   # A combination of atoms components
    β   βββ Gift
    βββ organisms                   #Β The most complex components
    β   βββ GiftList
    βββ shared                      # Shared utilites and files such as utils or rules
    βββ themes                      # The color palette used by the components
    βββ index.ts
    βββ setupTests.js
```

---

## Author

π€ **Pau RodrΓ­guez**

- Website: https://www.linkedin.com/in/paurodriguezmolina/
- Github: [@Silinde87](https://github.com/Silinde87)
- LinkedIn: [@paurodriguezmolina](https://linkedin.com/in/paurodriguezmolina)
- Twitter: [@Silinde87](https://twitter.com/Silinde87)

## License
[GNU General Public License](https://opensource.org/licenses/gpl-license)
