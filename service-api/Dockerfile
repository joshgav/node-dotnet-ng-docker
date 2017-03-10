FROM node:latest
EXPOSE 8080
EXPOSE 9229

WORKDIR /app
RUN npm install --global typescript
COPY ./third_party/app-insights ./third_party/app-insights
RUN cd ./third_party/app-insights && npm install && npm run prepublish && cd /app
COPY . .
RUN npm install

CMD ["node","--inspect=0.0.0.0:9229","./bootstrap.js"]

