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









# Multi Stage Build

#Stage 1: Build the frontend
FROM node:20 as frontend_builder

WORKDIR /client

COPY ./client/package*.json /client

RUN npm install

COPY ./client /client

RUN npm run build


FROM node:20

WORKDIR /server

COPY ./server/package*.json /server

RUN npm install

COPY ./server /server

COPY --from=frontend_builder /client/dist /server/public

CMD [ "node","server.js" ]



// DAY 3 - docker-compose.yml

docker compose up

