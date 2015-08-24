window.addEventListener(
    'load',
    function () {
        document.getElementById('charging-text').textContent = 'Charging';
        Voltage.getLevel(
            function (level) {
                document.getElementById('icon-level').dataset.icon = 'battery-' + Math.round(level * 10);
                document.getElementById('level').textContent = (level * 100) + ' %';
            }
        );
        Voltage.isCharging(
            function (charging) {
                var element = document.getElementById('charging'),
                    textElement = document.getElementById('charging-text');
                if (charging) {
                    element.style.display = 'block';
                } else {
                    element.style.display = 'none';
                }
            }
        );
    }
);
