# mern-starter


## Flags

```json
--create, -c create a project
--open, -o open a project
--list, -l list projects
--args, -a arguments for the vscode open command, path to file or folder you want to open

```

## Downloading the tool:

To download the npm tool, use the following command in a new terminal window

```json
npm i -g @kikimorgan/portable-cli
```

## Using the tool:

To create a portable version of vs code with a mern project folder, use the create flag + project name

```json
portable-cli --create projectName
```

## Running the MERN app:

### Locally:

Start local version of mongodb 

CD into MERN project root folder

```json
cd ~/Desktop/vscPortable/projectName/mern-starter
```

Install Dependencies

```json
yarn run install:all
```

Run app

```json
yarn run dev
```

### In a docker container:

** need the latest version of docker or you will get the following error: Version in “./docker-compose.yml” is unsupported

Start local docker desktop tool

CD into project root folder

```json
cd ~/Desktop/vscPortable/projectName/mern-starter
```

Build & run docker containers

```json
docker-compose up
```

Open up web browser and navigate to web app

```json
http://localhost:3000
```

### Remote Container extension:

The vscode remote development tool requires the frontend and backend to be open in separate containers, which means separate vscode windows. one window that controls the frontend and another that controls the backend

CD into backend folder

```json
cd ~/Desktop/vscPortable/projectName/mern-starter/backend
```

Use portable-cli tool to open backend folder in vs code portable

```json
portable-cli -o projectName -a .
```

In the bottom left corner should be a small button

![readme%20for%20vscode%2050db2db3c8ac4633b0a706c08cdbbce5/Untitled.png](https://code.visualstudio.com/assets/docs/remote/common/remote-dev-status-bar.png)

Clicking on it will open the remote container menu, click on “Reopen In Container”

- or run the **Remote-Containers: Open Reopen In Container**... command from the Command Palette

** The first time running this command will take some time as docker builds all the necessary containers

After a successful installation, open the integrated terminal  and start the backend

```json
yarn run dev:docker
```

CD into frontend folder

```json
cd ~/Desktop/vscPortable/projectName/mern-starter/client
```

Use portable-cli tool to open frontend folder in vs code portable

```json
portable-cli -o projectName -a .
```

Repeat steps above to reopen in container

After a successful installation, open the integrated terminal  and start the frontend

```json
yarn start:docker
```
