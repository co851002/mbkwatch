# VM Custom Template

## Instructions

### clone and set directory
git clone <url> & cd into folder

### npm start
Starts the development servers that have hot module reloading so you can
develop without restarting the server.
This command has a npm i check before starting the app, so no need to run it separately.

### npm run test
Runs the unit tests of the application.

### npm build
Builds project to dist

## File structure
The application lives in the src folder.

The src folder contains the following structure.

```
src
|- sass
|- index.pug
|- index.ts
|- components
```

### components
Folder containing creative components used within the ad.

Has the following structure.

```
components
|- presentational
|- containers
|- hoc
```

#### presentational
Contain components which do not contain any logic. All properties are passed down from the container or high order component.

#### hoc
Contain High Order Components. A Higher Order Component is just a Component that wraps another one. These components enhance the wrapped one and add logic or extra functionalities to it.
They can be used in order to share common functionalities across the application.
They can also be decorated with the connect function of Redux.

#### containers
Components that contain several presentational components and are used to lift the state.

# Debugging front end in VS Code  

 - Follow steps in https://medium.com/@auchenberg/live-edit-and-debug-your-react-apps-directly-from-vs-code-without-leaving-the-editor-3da489ed905f
 - In webpack.common.js, change devtool to 'cheap-module-eval-source-map'
 - Edit launch.json to be  
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:3000",
            "sourceMaps": true,
            "webRoot": "${workspaceRoot}/*",
            "sourceMapPathOverrides": {
                "webpack:///*": "${workspaceRoot}/*"
            }
        }
    ]
}
```
