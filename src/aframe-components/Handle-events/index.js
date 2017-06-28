window.AFRAME.registerComponent('set-image', {
    schema: {
        on: { type: 'string' },
        target: { type: 'string' },
        src: { type: 'string' },
        dur: { type: 'number', default: 300 },
    },
    init: function() {
            const el = this.el;
            const data = this.data;
            el.addEventListener('click', function () {
              const target = document.querySelector(data.target);
              target.setAttribute('material','src',data.src);
            });
        }
    });