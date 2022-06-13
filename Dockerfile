# Stage 1: Compile and Build angular codebase

FROM node:latest as build
RUN mkdir -p /app

WORKDIR /app
COPY package.json /app

RUN npm install -f

COPY . /app
RUN npm run build

LABEL org.opencontainers.image.source="https://github.com/JayantGoel001/JayantGoel001.github.io"

# Stage 2: Serve app with nginx server

FROM nginx:latest

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80