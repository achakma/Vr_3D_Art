AFRAME.registerComponent('color-change-on-keypress', {
  schema: {
    key: {default: 'L'}
  },

  init: function() {
    const isArtist = this.el.getAttribute('user-role') === 'artist';

    window.addEventListener('keydown', (e) => {
      if (e.key === this.data.key) {
        if (isArtist) {
          const newColor = prompt("Enter new color:"); // prompt the artist for a new color
          if (newColor) { // if a new color was entered
            const box = document.getElementById('box');
            box.setAttribute('material', 'color', newColor);
          }
        } else {
          const box = document.getElementById('box');
          box.setAttribute('material', 'color', 'blue');
        }
      }
    });
  }
});
