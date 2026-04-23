#Stage 1: Build the frontend
FROM node:20 AS frontend_builder

WORKDIR /app

COPY ./client/package*.json /app

RUN npm install

COPY ./client /app

RUN npm run build
# create an dist /app/dist

#Stage 2: Final Stage
FROM node:20

WORKDIR /app

COPY ./server/package*.json /app

RUN npm install

COPY ./server /app

COPY --from=frontend_builder /app/dist /app/public

CMD ["node","server.js"]