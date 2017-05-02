FROM node:7.7.3
EXPOSE 8080
EXPOSE 9229

WORKDIR /app
RUN npm install --global typescript

COPY ./third_party ./third_party
RUN cd ./third_party/applicationinsights && npm install --unsafe-perm && cd ../..
RUN cd ./third_party/node-diagnostic-source && ./install.sh && cd ../..

# node_modules ignored via .dockerignore
COPY . .
RUN npm install --unsafe-perm
RUN cp -r ./node_modules/applicationinsights/out/* ./node_modules/applicationinsights/

CMD ["node","--inspect=0.0.0.0:9229","./bootstrap.js"]

