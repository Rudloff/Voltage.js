# Voltage.js
Small library providing information about the device's battery status

##Usage
###Get battery level

    Voltage.getLevel(callback);

###Is battery charging?

    Voltage.isCharging(callback);

###Get charging time

    Voltage.getChargingTime(callback);

###Get discharging time

    Voltage.getDischargingTime(callback);


##Quick example
The functions are asynchronous so you need to use a callback:

    Voltage.getLevel(
        function (level) {
            console.log(level);
        }
    );

##Credits
The demo uses Firefox OS [Gaia Icons](https://github.com/gaia-components/gaia-icons).
