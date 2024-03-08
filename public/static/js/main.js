import TimeModule from './modules/time.js';
import DateModule from './modules/date.js';
import EntropiaLeaksModule from './modules/entropialeaks.js';
import EventsModule from './modules/events.js';
import WeatherModule from './modules/weather.js';
import TramDepartureModule from './modules/tram-departure.js';
import { config } from './config.js';

new TimeModule(config.time);
new DateModule(config.date);
new EntropiaLeaksModule(config.entropialeaks);
new EventsModule(config.events);
new WeatherModule(config.weather);
new TramDepartureModule(config.tram);
