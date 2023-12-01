// Registering component in Target.js

AFRAME.registerComponent("target-coin", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `coin${i}`;

      //position variables
      var posX = Math.random() * 3000 + -1000;
      var posY = Math.random() * 2 + -1;
      var posZ = Math.random() * 3000 + -1000;
      var rotationY = 360

      var position = { x: posX, y: posY, z: posZ };
      var rotation = { x: 0, y: rotationY, z: 90 };

      //call the function
      this.createCoins(id, position, rotation);
    }
  },

  createCoins: function (id, position, rotation) {
    var terrainEl = document.querySelector("#terrain");
    var coinEl = document.createElement("a-entity");

    coinEl.setAttribute("id", id);
    coinEl.setAttribute("material", "color", "#ff9100");
    coinEl.setAttribute("position", position);
    coinEl.setAttribute("rotation", rotation);
    coinEl.setAttribute("geometry", { primitive: "cylinder", radius: 8, height: 3 });

    //set the static body attribute of physics system
    coinEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 2,
    });

    coinEl.setAttribute("game-play", {
      elementId: `#${id}`,
    });

    terrainEl.appendChild(coinEl);
  },
});
