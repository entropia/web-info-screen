FROM php:8-apache

COPY public/ /var/www/html/
COPY modules/ /var/www/modules/
