/*global QUnit, Voltage*/
QUnit.test(
    'hasBattery true',
    function (assert) {
        'use strict';
        this.stub(
            Voltage,
            'getBatteryManager',
            function (callback) {
                callback();
            }
        );
        var done = assert.async();
        Voltage.hasBattery(
            function (hasBattery) {
                assert.ok(hasBattery);
                done();
            }
        );
    }
);

QUnit.test(
    'hasBattery false',
    function (assert) {
        'use strict';
        this.stub(
            Voltage,
            'getBatteryManager'
        ).throws();
        var done = assert.async();
        Voltage.hasBattery(
            function (hasBattery) {
                assert.notOk(hasBattery);
                done();
            }
        );
    }
);

QUnit.test(
    'getLevel',
    function (assert) {
        'use strict';
        this.stub(
            Voltage,
            'getBatteryManager',
            function (callback) {
                callback({ level: 100 });
            }
        );
        var done = assert.async();
        Voltage.getLevel(
            function (level) {
                assert.equal('number', typeof level);
                done();
            }
        );
    }
);

QUnit.test(
    'getLevel error',
    function (assert) {
        'use strict';
        this.stub(
            Voltage,
            'getBatteryManager'
        ).throws();
        assert.throws(Voltage.getLevel, "Can't get battery manager", '');
    }
);


QUnit.test(
    'getChargingTime',
    function (assert) {
        'use strict';
        this.stub(
            Voltage,
            'getBatteryManager',
            function (callback) {
                callback({ chargingTime: 0 });
            }
        );
        var done = assert.async();
        Voltage.getChargingTime(
            function (time) {
                assert.equal('number', typeof time);
                done();
            }
        );
    }
);

QUnit.test(
    'getDischargingTime',
    function (assert) {
        'use strict';
        this.stub(
            Voltage,
            'getBatteryManager',
            function (callback) {
                callback({ dischargingTime: 0 });
            }
        );
        var done = assert.async();
        Voltage.getDischargingTime(
            function (time) {
                assert.equal('number', typeof time);
                done();
            }
        );
    }
);

QUnit.test(
    'isCharging',
    function (assert) {
        'use strict';
        this.stub(
            Voltage,
            'getBatteryManager',
            function (callback) {
                callback({ charging: false });
            }
        );
        var done = assert.async();
        Voltage.isCharging(
            function (isCharging) {
                assert.equal('boolean', typeof isCharging);
                done();
            }
        );
    }
);
