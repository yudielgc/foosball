(function () {
    'use strict';

    var Ball = function () {
        var velocity = [-1, -1],
            position = [300, 300],
            element = $('#ball'),
            paused = false;

        return {
            update: _update,
            pause: _pause,
            start: _start
        };

        function _move(t) {
            console.log('t', t, position);
            position[0] += velocity[0] * t;
            position[1] += velocity[1] * t;

            element.css('left', position[0] + 'px');
            element.css('top', position[1] + 'px');
        }

        function _update(t) {
            if (!paused) {
                _move(t);
            }
        }

        function _pause() {
            paused = true;
        }

        function _start() {
            paused = false;
        }

    };

    function update(time) {
        var t = time - lastUpdate;

        lastUpdate = time;
        ball.update(t);
        requestAnimationFrame(update);        
    }

    var ball;
    var lastUpdate;
    $(document).ready(function () {
        lastUpdate = 0;
        ball = Ball();

        requestAnimationFrame(update);
    });

})();
