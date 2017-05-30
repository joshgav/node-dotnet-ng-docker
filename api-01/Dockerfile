FROM node:latest
EXPOSE 8080
EXPOSE 9229

WORKDIR /app
COPY . .
RUN npm install --quiet

CMD ["node","--inspect=0.0.0.0:9229","./bootstrap.js"]

