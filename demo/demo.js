/*jslint browser: true*/
/*global Voltage*/
window.addEventListener(
    'load',
    function () {
        'use strict';
        Voltage.hasBattery(function (hasBattery) {
            if (hasBattery) {
                document.getElementById('charging-text').textContent = 'Charging';
                Voltage.getLevel(
                    function (level) {
                        document.getElementById('icon-level').dataset.icon = 'battery-' + Math.round(level * 10);
                        document.getElementById('level').textContent = Math.round(level * 100) + ' %';
                    }
                );
                Voltage.isCharging(
                    function (charging) {
                        var element = document.getElementById('charging');
                        if (charging) {
                            element.style.display = 'block';
                        } else {
                            element.style.display = 'none';
                        }
                    }
                );
            } else {
                document.getElementById('wrapper').textContent = 'Could not get battery information, sorry.';
            }
        });
    }
);
