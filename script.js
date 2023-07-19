//dom selections
// document.getElementById() >> elemnt
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "grey";
// judul.innerHTML = "HALO MONYET";

// document.getElementsByTagName()
// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }
// p[1].innerHTML = "aku kiki";

// const p1 = document.getElementsByClassName("p1");
// p1[0].innerHTML = "ini diubah dari javascript";

//qurySelector()
// const a = document.querySelector("#b p");
// a.style.color = "green";
// a.style.fontWeight = "900";

// const p = document.querySelectorAll("p");
// p[2].style.color = "red ";
// p[3].style.color = "red";

// const ubah = document.getElementsByTagName("p");
// ubah[1].innerHTML = "wahyu";
// ubah[1].style.backgroundColor = "orange";

// function ObjectCreate(nama, kelas, NIM) {
//   this.nama = nama;
//   this.kelas = kelas;
//   this.NIM = NIM;
//   return;
// }
// let mhs = new ObjectCreate("wahyu", 12, 123456);
// const pbaru = document.createElement("p");
// const textpbaru = document.createTextNode("halo ini p baru");

// pbaru.appendChild(textpbaru);

// const sectionA = document.getElementById("a");
// sectionA.appendChild(pbaru);

// const link = sectionA.getElementsByTagName("a")[0];

// sectionA.removeChild(link);
// const p = document.querySelector("section#b p");

// const ul = document.querySelector("section#b ul");
// // const li2 = ul.querySelector("li:nth-child(2)");
// // ul.insertBefore(pbaru2, li2);
// // ul.replaceChild(pbaru, pbaru2);
// // ul.innerHTML = "<li>kiki</li>";
// p.addEventListener("click", function () {
//   const pbaru2 = document.createElement("p");
//   const isi = document.createTextNode("ini p baru ke 2");
//   pbaru2.appendChild(isi);
//   ul.appendChild(pbaru2);
// });
// p.addEventListener("dblclick", function () {
//   const pbaru2 = document.createElement("p");
//   ul.removeChild(pbaru2);
// });
const p2 = document.getElementById("p2");
const p1 = document.getElementById("p1");
p1.addEventListener("click", function () {
  p2.classList.toggle("hide");
});
