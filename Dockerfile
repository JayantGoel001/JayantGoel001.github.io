# Stage 1: Compile and Build angular codebase

FROM node:alpine as build

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app

RUN npm install -f

COPY . /app
RUN npm run build

# Stage 2: Serve app with nginx server

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

LABEL org.opencontainers.image.source https://github.com/JayantGoel001/JayantGoel001.github.io
LABEL org.opencontainers.image.description Docker Image of my Personal Portfolio.

EXPOSE 80
