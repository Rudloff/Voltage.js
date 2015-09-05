/*jslint browser: true*/
var Voltage = (function () {
    'use strict';
    function getBatteryInfo(callback, info) {
        try {
            Voltage.getBatteryManager(function (battery) {
                callback(battery[info]);
            });
        } catch (e) {
            throw ("Can't get battery manager");
        }
    }
    return {
        getLevel: function (callback) {
            getBatteryInfo(callback, 'level');
        },
        isCharging: function (callback) {
            getBatteryInfo(callback, 'charging');
        },
        getChargingTime: function (callback) {
            getBatteryInfo(callback, 'chargingTime');
        },
        getDischargingTime: function (callback) {
            getBatteryInfo(callback, 'dischargingTime');
        },
        hasBattery: function (callback) {
            try {
                Voltage.getBatteryManager(
                    function () {
                        callback(true);
                    }
                );
            } catch (e) {
                callback(false);
            }
        },
        getBatteryManager: function (callback) {
            if (navigator.getBattery) {
                navigator.getBattery().then(
                    function (battery) {
                        callback(battery);
                    }
                );
            } else if (navigator.battery) {
                callback(navigator.battery);
            } else {
                throw ('Battery API unavailable');
            }
        }
    };
}());
