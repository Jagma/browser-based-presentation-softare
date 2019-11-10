FROM node:10-alpine

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /usr/src/app

#Copy Files into docker image
COPY . .

#install app dependencies
RUN npm set progress=false & npm install --save vue-fullscreen vue-shortkey

# Makes port 8080 available
EXPOSE 8080

# Run Hamr app
CMD ["npm", "run", "hamr"]