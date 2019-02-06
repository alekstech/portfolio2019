<template>
  <canvas
    ref="canvas"
    class="canvas"
  />
</template>

<script>
import {
  FontLoader,
  Mesh,
  MeshLambertMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  TextGeometry,
  WebGLRenderer
} from 'three';
import OrbitControls from 'three-orbitcontrols';

export default {
  name: 'RotatingText',
  mounted() {
    var gl =
      this.$refs.canvas.getContext('webgl') ||
      this.$refs.canvas.getContext('experimental-webgl');
    if (gl && gl instanceof WebGLRenderingContext) {
      this.load();
    }
  },
  methods: {
    load() {
      var scene = new Scene();
      var camera = new PerspectiveCamera(
        75,
        this.$refs.canvas.width / this.$refs.canvas.height,
        0.1,
        50
      );
      camera.position.z = 30;

      var renderer = new WebGLRenderer({
        canvas: this.$refs.canvas,
        antialias: true
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(this.$refs.canvas.width, this.$refs.canvas.height);
      renderer.setClearColor(0xfcfbeb, 1);

      var orbit = new OrbitControls(camera, renderer.domElement);
      // orbit.enableZoom = false;

      var lights = [];
      lights[0] = new PointLight(0xfcfbeb, 0.9, 0);
      lights[1] = new PointLight(0xfcfbeb, 0.85, 0);
      lights[2] = new PointLight(0xfcfbeb, 0.9, 0);

      lights[0].position.set(0, 200, -100);
      lights[1].position.set(100, 200, 100);
      lights[2].position.set(-100, -200, 100);

      scene.add(lights[0]);
      scene.add(lights[1]);
      scene.add(lights[2]);

      var text;
      var font;
      function addText() {
        var cubeMat = new MeshLambertMaterial({ color: 0xa0f0ed });
        var geometry3 = new TextGeometry('{ }', {
          font,
          size: 20,
          height: 1,
          curveSegments: 4
        });
        geometry3.computeBoundingBox();
        geometry3.center();
        geometry3.computeVertexNormals();
        text = new Mesh(geometry3, cubeMat);
        scene.add(text);

        render();
      }

      var loader = new FontLoader();
      loader.load('./Pacifico_Regular.json', function(f) {
        font = f;
        addText();
      });

      let xRotation = 0.0005;
      let yRotation = 0.0005;
      var render = function() {
        requestAnimationFrame(render);

        text.rotation.x += xRotation;
        text.rotation.y += yRotation;
        if (text.rotation.x.toPrecision(1) % 0.5 === 0) {
          xRotation = -xRotation;
        }
        if (text.rotation.y.toPrecision(1) % 0.5 === 0) {
          yRotation = -yRotation;
        }

        renderer.render(scene, camera);
      };

      const _this = this;
      window.addEventListener(
        'resize',
        function() {
          camera.aspect = _this.$refs.canvas.width / _this.$refs.canvas.height;
          camera.updateProjectionMatrix();

          renderer.setSize(_this.$refs.canvas.width, _this.$refs.canvas.height);
        },
        false
      );
    }
  }
};
</script>

<style scoped>
.canvas {
  pointer-events: none;
  max-width: 100%;
  max-height: 100px;
}
</style>
