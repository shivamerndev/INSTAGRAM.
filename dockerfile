FROM node:20-alpine As frontend_builder

WORKDIR /client

COPY ./client/package*.json /client

RUN npm install

COPY ./client /client

RUN npm run build

# Stage 2

FROM node:20-alpine

WORKDIR /server

COPY ./server/package*.json /server

RUN npm install

COPY ./server /server

COPY --from=frontend_builder /client/dist /server/public

CMD [ "node","server.js" ]