FROM node:16.7.0

LABEL version="1.0"
LABEL description="This is the production docker image for vega-web server"

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 8000

CMD ["npm", "run-script", "start-prd"]
