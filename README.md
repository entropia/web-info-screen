# Web Info Screen

A web-based alternative to https://github.com/entropia/entropia-info-beamer

## Motivation & Context

For as long as I can remember, the Entropia club has had monitors with a very old version of info-beamer. Over time, some modules like the tram departure display stopped working due to no longer exisiting data sources. Other modules like the event list would need a general overhaul to look pretty again. The entire setup and the displayed content are also adapted to the 1280x1024 resolution of the monitors, making it hard to replace them by larger screens.

Various plans for further development and improvement of the old setup have not yet led to any visible results. The initiator of this code repository has therefore started a completely new development of an exemplary, web-based infoscreen as it could be implemented nowadays.

The creation of this repository does _not_ imply that the existing info-beamer setup should be replaced, _nor_ does it imply that the initiator should be given permission to install or even maintain a new infoscreen setup in the club.

This repository is nothing more and nothing less than a collection of alternatives to various modules that were previously functional in the club's info-beamer setup, and some new ideas from a web developer using tools and programming languages he is familiar with.

If someone feels motivated and able to migrate parts of this code into the club's existing info-beamer setup or start a whole new project inspired by it, this repository would already have a reason to exist.

## Requirements/Dependencies

* A web server like nginx or Apache
* PHP >= 8.1 (older versions may also work but have not been tested)

## Features & Modules

| Data                                                          | Source              |
|---------------------------------------------------------------|---------------------|
| Current time and date                                         | Local computer      |
| Social media posts including the *#entropialeaks* hashtag     | Mastodon            |
| Upcoming events                                               | Entropia Wiki table |
| Weather forecast for the next couple of hours                 | OpenMeteo           |
| Tram departure from multiple relevant stops close to the club | KVV EFA             |
