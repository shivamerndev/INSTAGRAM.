// DAY 1

FROM node:20

COPY ./package.json ./

RUN npm install

COPY . .

CMD ["node","./server/server.js"]





// DAY 2

FROM node:20

WORKDIR /app

COPY ./package.json /app

RUN npm install

COPY . /app

CMD ["node","server.js"]


// DAY 3 - docker-compose.yml

docker compose up

