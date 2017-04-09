FROM node:7.7.3
EXPOSE 8080
EXPOSE 9229

WORKDIR /app
RUN npm install --global typescript

COPY ./third_party ./third_party
RUN cd ./third_party/applicationinsights && npm install && cd ../..
RUN cd ./third_party/ai-thirdparty && npm install && npm run prepublish && cd ../..

# node_modules ignored via .dockerignore
COPY . .
RUN npm install

CMD ["node","--inspect=0.0.0.0:9229","./bootstrap.js"]

