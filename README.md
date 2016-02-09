Training app to learn and test AngularJS (using TypeScript, OOP-like approach, controllerAs instead of $scope).

1. Download simple server http-server (https://www.npmjs.com/package/http-server), e.g. with npm:
<br>"npm install http-server –g"
2. Run it with command "http-server" (uses port 8000 by default), or "http-server –p 1234" (or whatever user defined port).
3. In browser, go to localhost:8000 (or whatever port).

Changes to the code:
- Change only TS files and compile them.
- Compilation can be done automatically on save if you go to the project root and run "tsc-w" (there is a small delay between save and the compilation, below a second though).