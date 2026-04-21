# use node image
FROM node:20

WORKDIR /app

# copy package files first (for caching)
COPY package*.json ./
COPY client/package*.json ./client/


RUN npm install
RUN npm install --prefix client


COPY . .

# build react client
RUN npm run build --prefix client

# start server
CMD ["npm", "start"]