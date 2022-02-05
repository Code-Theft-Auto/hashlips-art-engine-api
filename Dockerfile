FROM alpine
WORKDIR /usr/src/app
RUN apk add nodejs
COPY package.json ./
COPY . .
EXPOSE 8080
CMD [ "node", "index.js" ]