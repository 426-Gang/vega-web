FROM node:16.7.0

LABEL version="1.0"
LABEL description="This is the base docker image for the Venus application frontend"

WORKDIR /app


ARG WEBSERVER_URL
ENV REACT_APP_WEBSERVER_URL=${WEBSERVER_URL}

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
