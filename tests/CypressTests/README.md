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

## troubleshooting
- "Warning: Cannot Connect Base Url Warning Cypress could not verify that this server is running: https://undefined"
  - run the command `source defineCypressVars.sh` before running cypress

## config files
- cypress.config.js contains configuration for cypress tests
- tsconfig.json contains configuration for typescript
- webpack.config.js contains configuration for webpack
- plugins/index.js contains configuration for cypress plugins