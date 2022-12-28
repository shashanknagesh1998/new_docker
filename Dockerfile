FROM node
COPY . /html_service
WORKDIR /html_service/source
CMD ["node","httpserver.js"]
