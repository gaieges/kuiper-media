FROM node:7

ADD . /app
WORKDIR /app

RUN npm install -g coffee-script \
 && npm install \
 && coffee -c *.coffee

ENTRYPOINT ["node", "index.js"]
