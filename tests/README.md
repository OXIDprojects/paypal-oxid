# cypress
## quick start
- install cypress if you haven't already
  - `npm install cypress`
- copy environment variables
  - `cp defineCypressVars.sh.dist defineCypressVars.sh`
- before running cypress tests you need to define the environment variables in the shell in which you run cypress
  - run `source defineCypressVars.sh`
- open cypress
  - `npx cypress open`
- or just run cypress tests
  - `npx cypress run`

## config files
- cypress.config.js contains configuration for cypress tests
- tsconfig.json contains configuration for typescript
- webpack.config.js contains configuration for webpack
- cypress/plugins/index.js contains configuration for cypress plugins