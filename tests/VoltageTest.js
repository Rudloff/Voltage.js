/*global QUnit, Voltage*/
QUnit.test(
    'hasBattery',
    function (assert) {
        'use strict';
        assert.ok(Voltage.hasBattery());
    }
);

QUnit.test(
    'getLevel',
    function (assert) {
        'use strict';
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
    'getChargingTime',
    function (assert) {
        'use strict';
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
        var done = assert.async();
        Voltage.isCharging(
            function (isCharging) {
                assert.equal('boolean', typeof isCharging);
                done();
            }
        );
    }
);
