# Planet X Backend

to run the server in ther docker container for development
run the following command:

```bash
$ docker compose watch
```

this configures the docker container to run in watch mode where it sync file changes between server and the container including generated files like node_modules, prisma generated folders, and prisma migrations. 