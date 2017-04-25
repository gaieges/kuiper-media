FROM node:7

# Put node_modules in root because its very container specific,
# and should be built in the container itself and stored there.
# this way we can do local development by overriding the /app dir

ADD package.json /package.json
ENV NODE_PATH=/node_modules
RUN cd / && npm install


ADD . /app
WORKDIR /app

EXPOSE 3000

ENV IPFS_PATH /ipfs
VOLUME /ipfs

CMD ["node", "index.js"]
