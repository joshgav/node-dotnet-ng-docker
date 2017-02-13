FROM node:latest
EXPOSE 8080
EXPOSE 9229

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD ["node","--inspect","./bootstrap.js"]

