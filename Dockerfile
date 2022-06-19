FROM node:16.7.0 as build-deps

LABEL version="1.0"
LABEL description="This is the base docker image for the Venus application frontend"

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]


ARG REACT_APP_WEBSERVER_URL
ENV REACT_APP_WEBSERVER_URL=$REACT_APP_WEBSERVER_URL

RUN npm install --production
RUN npm install -g serve

COPY . .

RUN npm run build

EXPOSE 80

CMD ["serve", "-s", "build", "-l", "80"]

#FROM httpd:latest
##COPY --from=build-deps /app/build/ /usr/local/apache2/htdocs/
#COPY --from=build-deps /app/build/** /usr/local/apache2/htdocs/
#EXPOSE 80
#CMD ["find", "./usr/local/apache2/htdocs/"]
#
#EXPOSE 3000

#CMD ["npm", "start"]
