FROM node:16.7.0

LABEL version="1.0"
LABEL description="This is the base docker image for the Venus application frontend"

WORKDIR /app


ARG WEBSERVER_URL
ENV REACT_APP_WEBSERVER_URL=${WEBSERVER_URL}

RUN echo $WEBSERVER_URL
RUN echo $REACT_APP_WEBSERVER_URL

#COPY ["package.json", "package-lock.json", "./"]
COPY [".", "./"]

RUN npm install serve -g
RUN npm install --production
RUN npm run build

COPY . .

EXPOSE 3000

CMD ["serve", "-p", "3000", "-s", "build"]
