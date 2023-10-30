FROM node:18.12.1 as builder
WORKDIR /usr/app
COPY ./ /usr/app/

ENV NODE_ENV="production"
ENV GATSBY_ENV="production"
ENV GATSBY_API_ENDPOINT="https://brenso-hcp-api.azurewebsites.net"

RUN npm install
RUN npm run build

FROM php:8.1-apache
RUN a2enmod rewrite
RUN a2enmod headers

WORKDIR /var/www/html

COPY --from=builder /usr/app/public/ .
COPY --from=builder /usr/app/static/.htaccess /var/www/html/.htaccess
COPY --from=builder /usr/app/static/robots.txt /var/www/html/robots.txt
COPY --from=builder /usr/app/static/sitemap.xml /var/www/html/sitemap.xml

EXPOSE 80