// Main models
// green model
var scene1 = new THREE.Scene();
scene1.background = new THREE.Color(0x1d3122);

var camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer1 = new THREE.WebGLRenderer();
renderer1.setSize(window.innerWidth-47, window.innerHeight);
document.getElementById("goodeco").appendChild(renderer1.domElement);
camera1.position.z = 6;
camera1.position.y = 1.5;
camera1.position.x = 0.01;

// Добавление Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Мягкий свет
scene1.add(ambientLight);

// Добавление Point Light (имитация лампы)
const pointLight = new THREE.PointLight(0xffaa00, 1, 10); // Цвет, интенсивность, радиус
pointLight.position.set(0, 5, 5); // Задайте позицию
scene1.add(pointLight);


// Загрузка модели для первой сцены
var loader1 = new THREE.GLTFLoader();
var model1;
loader1.load('./models/2objonescene/модель_для_сайта.gltf', function (gltf) {
  model1 = gltf.scene;
  model1.scale.set(1, 1, 1);
  scene1.add(model1);
}, undefined, function (error) {
  console.error(error);
});

// Создание источника света для первой сцены
var lightscene1 = new THREE.DirectionalLight(0xffffff, 0.01);
lightscene1.position.set(0, 5, 0).normalize();
var lightscene2 = new THREE.DirectionalLight(0xffffff, 0.1);
lightscene2.position.set(0, 2, 3).normalize();
scene1.add(lightscene1);
scene1.add(lightscene2);
// Переменные для управления вращением
var rotationSpeed = 0.001; // Скорость вращения
var currentAngle = 0; // Текущий угол поворота
var maxAngle = Math.PI / 5; // Максимальный угол (180 градусов)
var direction = 1; // Направление вращения (1 - вперед, -1 - назад)

// Анимационный цикл для первой сцены
function animate1() {
  requestAnimationFrame(animate1);

  if (model1) {
    // Обновляем угол поворота
    currentAngle += rotationSpeed * direction;

    // Меняем направление, если достигли максимального угла
    if (Math.abs(currentAngle) >= maxAngle) {
      direction *= -1; // Меняем направление вращения
    }

    // Применяем вращение
    model1.rotation.y = currentAngle;
  }

  renderer1.render(scene1, camera1);
}
animate1();

// additional models
var scene2 = new THREE.Scene();
scene2.background = new THREE.Color(0x3e3e3e)
var camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer2 = new THREE.WebGLRenderer();
renderer2.setSize(window.innerWidth * 0.9, window.innerHeight * 0.9);
document.getElementById("small_model").appendChild(renderer2.domElement);
var controls2 = new THREE.OrbitControls(camera2, renderer2.domElement);
camera2.position.z = 0;
camera2.position.y = 5;
camera2.position.x = 12;

var scene3 = new THREE.Scene();
scene3.background = new THREE.Color(0x3e3e3e)
var camera3 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer3 = new THREE.WebGLRenderer();
renderer3.setSize(window.innerWidth * 0.9, window.innerHeight * 0.9);
document.getElementById("large_model").appendChild(renderer3.domElement);
var controls3 = new THREE.OrbitControls(camera3, renderer3.domElement);
camera3.position.z = 0;
camera3.position.y = 5;
camera3.position.x = 12;



var loader2 = new THREE.GLTFLoader();
var model2;
loader2.load('./models/obloshka_malenkii/obloshka.gltf', function (gltf) {
  model2 = gltf.scene;
  model2.scale.set(1.5, 1.5, 1.5);
  scene2.add(model2);
}, undefined, function (error) {
  console.error(error);
});
var light2 = new THREE.DirectionalLight(0xffffff, 0.7);
light2.position.set(-5, 3, 3).normalize();
scene2.add(light2);
var light21 = new THREE.DirectionalLight(0xffffff, 1.2);
light21.position.set(5, 3, -3).normalize();
scene2.add(light21);
var light22 = new THREE.DirectionalLight(0xffffff, 0.7);
light22.position.set(0, -5, 0).normalize();
scene2.add(light22);
function animate2() {
  requestAnimationFrame(animate2);
  renderer2.render(scene2, camera2);
  controls2.update();
}
animate2();





var loader3 = new THREE.GLTFLoader();
var model3;
loader3.load('./models/sitebigmodel/obloshka_big.gltf', function (gltf) {
  model3 = gltf.scene;
  model3.scale.set(1.5, 1.5, 1.5);
  scene3.add(model3);
}, undefined, function (error) {
  console.error(error);
});
var light3 = new THREE.DirectionalLight(0xffffff, 0.7);
light3.position.set(-5, 3, 3).normalize();
scene3.add(light3);
var light31 = new THREE.DirectionalLight(0xffffff, 1);
light31.position.set(5, 3, -3).normalize();
scene3.add(light31);
var light32 = new THREE.DirectionalLight(0xffffff, 0.7);
light32.position.set(0, -5, 0).normalize();
scene3.add(light32);
function animate3() {
  requestAnimationFrame(animate3);
  renderer3.render(scene3, camera3);
  controls3.update();
}
animate3();


