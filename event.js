﻿/**
 * Возвращает объект Event
 *
 * @param {Object} requiredParams    Обязательные параметры
 * @param {Object} optionalParams    Дополнительные параметры
 * 
 * @example
 * 		var required = {
 *			start: new Date('10-26-2012 02:12'),
 *			end: new Date('10-27-2012'),
 *			name: 'Поездка на озеро Тургояк',
 *			isNotify: 'true',
 *			notify: new Date('10-26-2012')
 *		};
 * 		var optional = {
 *			description: 'Отличная возможность отдохнуть и насладиться природой',
 *			place: 'Озеро Тургояк',
 *			importance: 'h',
 *			url: 'http://www.turgoyak.com/'
 *		};
 *    	getEvent(required, optional);
 *
 * @return {Object}
 */
function getEvent(required, optional) {
"use strict";
if (requiredParams.start > requiredParams.end) {
    throw new Error("Время начала мероприятия не может быть позже времени окончания!");
    }
var imp = optionalParams.importance;
if (!(imp == 'h' || imp == 'l' || imp == 'm')) {
    imp = 'm';
}
return {
    start: new Date(+requiredParams.start),
    end: new Date(+requiredParams.end),
    name: requiredParams.name || "Событие",
    isNotify: !!requiredParams.isNotify || false,
    notify: +requiredParams.notify,
    description: optionalParams.description || "",
    place: optionalParams.place || "",
    importance: imp,
    url: optionalParams.url
    };   
}