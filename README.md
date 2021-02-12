# mern-starter

This is an articles app built using MERN stack that allows users to create, read, update, and delete articles 

## Downloading the tool:

You can either download the code zip folder or grab the code using git clone

```json
git clone -b vscode-remote-ex https://github.com/k-morgan22/mern-starter.git
```

## Running the MERN app:

### Locally:

Start local version of mongodb 

CD into mern-starter root folder

```json
cd ~/path/to/mern-starter/folder
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

CD into mern-starter root folder

```json
cd ~/path/to/mern-starter/folder
```

Build & run docker containers

```json
docker-compose up
```

Open up web browser and navigate to web app

```json
http://localhost:3000
```

### VS Code Remote Container extension:

The vscode remote development tool requires the frontend and backend to be open in separate containers, which means separate vscode windows. one window that controls the frontend and another that controls the backend

CD into the mern-starter backend folder

```json
cd ~/path/to/mern-starter/folder/backend
```

open backend folder in vscode

```json
code .
```

In the bottom left corner should be a small button

![vscode-button.png](https://code.visualstudio.com/assets/docs/remote/common/remote-dev-status-bar.png)

Clicking on it will open the remote container menu, click on “reopen in container”

- or run the **Remote-Containers: Open Reopen In Container**... command from the Command Palette

** The first time running this command will take some time as docker builds all the necessary containers

After a successful installation, open the integrated terminal  and start the backend

```json
yarn run dev:docker
```

CD into the mern-starter frontend folder

```json
cd ~/path/to/mern-starter/folder/client
```

Repeat the steps above to open the folder in VSCode and  reopen in container

After a successful installation, open the integrated terminal  and start the frontend

```json
yarn start:docker
```
