# Setup

You should read the article for this project first:
https://medium.com/@beuschel.marcel/oauth2-base-project-for-react-e2f138e82a5f

`1.) Add Client ID/Secret to .env`

`2.) npm install`

`3.) npm start`


# Discord-Integration-for-React includes:

## Features

- Errorhandling, provided by 'notistack'
- Routing, provided by 'react-router-dom'
- Route-Protection (Component: PrivateRoute)
- OAuth2-Workflow (Module: \_common/auth/discord)

## Middleware

- Generator-based, asynchronous operations. Provided by 'redux-saga'
- Chrome-DevTools plugin for React. Provided by 'redux-devtools-extension'
- Chrome Tab synchronization. Provided by 'redux-state-sync'

## Layout

- Material-UI component library
- Theming, provided by 'styled-theming'
- Styling, provided by 'styled-components'

## Tests

- React Components tested with 'jest-enzyme'
- Redux-Saga Module '\_common' integration-tested with 'redux-saga-tester/moxios'
- Correct route-redirection tested in component 'PrivateRoute'

## Workflow

- App-Layout for largescale Projects
- Automatic recompilation, provided by 'concurrently'
- Continuous Integration, provided by 'husky'

## License

[MIT](https://choosealicense.com/licenses/mit/)
