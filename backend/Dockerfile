FROM node:22-slim

ARG _WORKDIR=/usr/src/app

WORKDIR ${_WORKDIR}

COPY . .

ENV PM2_DISABLE_TTY true

USER root

RUN apt-get update -y && apt-get install -y openssl

RUN npm install --quiet --no-optional --no-found --loglevel=error && \
    npm install pm2 -g && \
    npm run build

USER node

CMD ["pm2-runtime", "start", "processes.json", "--only", "guaradata-backend"]
