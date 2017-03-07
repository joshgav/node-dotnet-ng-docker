FROM node:latest
EXPOSE 8080
EXPOSE 9229

WORKDIR /app
COPY ./third_party/app-insights ./third_party/app-insights
RUN cd ./third_party/app-insights && npm run prepublish && cd /app
COPY . .
RUN npm install

CMD ["node","--inspect","./bootstrap.js"]

