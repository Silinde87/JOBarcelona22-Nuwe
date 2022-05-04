# JOBarcelona'22 / Nuwe by Pau Rodríguez

![](https://img.shields.io/github/deployments/Silinde87/JOBarcelona22-Nuwe/production?label=Vercel&logo=Vercel&logoColor=white)
![](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fjobarcelona22-nuwe.vercel.app%2F)


This library of React components is developed as a part of task for JOBarcelona'22 Hackaton arranged by Nuwe.
To main goal is to develop a reusable component that shows many giftlists.


## How it looks

🔗 [Live Demo](https://jobarcelona22-nuwe.vercel.app/)

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
| typescript           |  4.1.2  |
| styled-components    |  5.2.1  |
| jest/testing-library | 5.11.10 |
| storybook & addons   | 6.4.22  |
| eslint               | 7.22.0  |
| prettier             | 2.2.1   |
| jsdoc                | 3.6.10  |

## Output

```
.
├── README.md
├── package.json
├── babel.config.json
├── jest-setup.ts
├── jest.config.js
├── jsdoc.conf.json
├── tsconfig.json
├── tsconfig.path.json
├── .gitignore
├── .eslintrc.js
├── .prettierrc
├── node_modules
├── docs                            # Documentation generated
├── .storybook                      # Required storybook files
└── src                             # React App folder
    ├── atoms                       # The smallest components
    │   ├── Card
    │   ├── Tag
    │   └── Typography
    ├── molecules                   # A combination of atoms components
    │   └── Gift
    ├── organisms                   # The most complex components
    │   └── GiftList
    ├── shared                      # Shared utilites and files such as utils or rules
    ├── themes                      # The color palette used by the components
    ├── index.ts
    └── setupTests.js
```

---

## Author

👤 **Pau Rodríguez**

- Website: https://www.linkedin.com/in/paurodriguezmolina/
- Github: [@Silinde87](https://github.com/Silinde87)
- LinkedIn: [@paurodriguezmolina](https://linkedin.com/in/paurodriguezmolina)
- Twitter: [@Silinde87](https://twitter.com/Silinde87)

## License
[GNU General Public License](https://opensource.org/licenses/gpl-license)
