// function init() {
//   let nama = "sandika"; //locAL variabel
//   function tampilNama() {
//     //inner function (closure)
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();

// function init() {
//   function tampilNama(nama) {
//     //inner function (closure)
//     console.log(nama);
//   }
//   return tampilNama; //disini program tidak bdi eksekusi tapi menegmablikan nilainya untuk di  eksekusi nanati
// }
// var panggilNama = init(); //fungsi init disini di simpan ke dalam variable pangilnama dan karena fungsi di dalam init belum di eksekusi perlu menambahkan ()dan argument di dlamanya

// function Slmt(waktu) {
//   return function (nama) {
//     console.log(`halo ${nama} selamat ${waktu}`);
//   };
// }

// let Selamatpagi = Slmt("pagi");
// let Selamatsiang = Slmt("siang");
// let Selamatmalam = Slmt("malam");
// Selamatpagi("asu");
// Selamatmalam("asu");
// Selamatsiang("asu");
// const card = document.querySelectorAll(".card");
// const i = 1;
const srcBtn = document.querySelector(".button button.Search");
const Btn = document.querySelector(".button button");

srcBtn.addEventListener("click", function () {
  const inputBtn = document.querySelector(".button input.Search2");
  const Btn = document.querySelector(".button button");
  Btn.classList.toggle("stay-left");
  inputBtn.classList.toggle("hide");
});

const pesan = document.querySelector(".pesan");
const exp = document.querySelector("button.Explore");
exp.addEventListener("click", function () {
  pesan.classList.toggle("tampil");
});
pesan.addEventListener("dblclick", function () {
  pesan.classList.toggle("tampil");
});

//cdn greensock
gsap.registerPlugin(MotionPathPlugin, TextPlugin);
gsap.to(".text-hero-1", { duration: 1.5, delay: 1, text: "Most popular <br />Game Around The World" });
