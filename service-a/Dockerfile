FROM node:latest
EXPOSE 80
EXPOSE 9229

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD ["node","--inspect","./server.js"]

