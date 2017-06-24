window.AFRAME.registerComponent('handle-events', {
    init: function () {
        const el = this.el;
        el.addEventListener('mouseenter', function () {
            el.setAttribute('color', '#24CAFF');
        });
        el.addEventListener('mouseleave', function () {
            el.setAttribute('color', '#EF2D5E');
        });
        el.addEventListener('click', function () {
            el.setAttribute('scale', { x: 2, y: 1, z: 2 });
        });
    }
});