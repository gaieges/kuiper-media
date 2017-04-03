FROM node:7

ADD . /app
WORKDIR /app

# Put node_modules in root because its very container specific,
# and should be built in the container itself and stored there.
# this way we can do local development by overriding the /app dir

ENV NODE_PATH=/node_modules
RUN npm install && mv /app/node_modules /

EXPOSE 4001
EXPOSE 8080

ENV IPFS_PATH /ipfs

VOLUME /ipfs

CMD ["node", "index.js"]
