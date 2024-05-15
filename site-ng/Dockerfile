# Dockerfile
FROM node:20.12.2-alpine

WORKDIR /usr/src/app

COPY  . /usr/src/app

RUN npm install -g @angular/cli@17
RUN npm install


CMD ["ng", "serve", "--host", "0.0.0.0"]

