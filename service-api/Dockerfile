FROM node:7.7.3
EXPOSE 8080
EXPOSE 9229

WORKDIR /app

COPY ./third_party ./third_party
RUN cd ./third_party/applicationinsights && npm install --unsafe-perm --quiet && cd ../..

# node_modules ignored via .dockerignore
COPY . .
RUN npm install --unsafe-perm --quiet

CMD ["node","--inspect=0.0.0.0:9229","./bootstrap.js"]

