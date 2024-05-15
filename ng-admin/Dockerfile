# Dockerfile
FROM node:12.22.12-alpine

WORKDIR /usr/src/app

COPY  . /usr/src/app

RUN npm install -g @angular/cli@9
RUN npm install


CMD ["ng", "serve", "--host", "0.0.0.0"]

