FROM node:latest
EXPOSE 8080

WORKDIR /app
COPY . .
RUN npm install --quiet

CMD ["node","./bootstrap.js"]

