FROM node:19-slim

WORKDIR /client

COPY . . 

RUN yarn install

CMD yarn start

EXPOSE 3000

