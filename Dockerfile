FROM node:10.16.3

WORKDIR /usr/src/app

COPY server.js ./
COPY server ./
COPY package.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:production"]