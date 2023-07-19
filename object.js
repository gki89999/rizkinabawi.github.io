function Angkot(sopir, trayek, penumpang, kas) {
  this.ongkos = 3000;
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangTurun = function (nama, uang) {
    if (this.penumpang.length === 0) {
      alert("angkot masih kosong");
      return false;
    } else {
      for (var i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == nama) {
          this.penumpang[i] = undefined;
          if (uang == this.ongkos) {
            kas += uang;
            alert("penumpang bernama" + nama + " berhasil turun ");
          } else if (uang < this.ongkos) {
            alert("maaf uang anda adalah" + uang + " tidak cukup ,ongkos trayek adalah" + this.ongkos);
            return false;
          } else if (uang > this.ongkos) {
            this.kembalian = uang - this.ongkos;
            this.kas += this.ongkos;
            alert("penumpang " + nama + " berhasil turun ,dan kembalian nya aalah " + this.kembalian);
            return penumpang;
          }
          s;
        }
      }
      return this.penumpang;
    }
  };
}
var Angkot1 = new Angkot("dimas", ["cibiru", "upi"], [], 0);
var Angkot2 = new Angkot("agus", ["cibiru", "malapikii"], [], 0);

function Mhs(nama, umur, NIM) {
  this.nama = nama;
  this.umur = umur;
  this.NIM = NIM;
}
Mhs.prototype.Data = function () {
  return `mahasiswa bernama ${this.nama} ,ada kok `;
};
Mhs.prototype.Tahunlahir = function () {
  return `tahun lahir dari ${this.nama} adalah ${2023 - this.umur}`;
};
Angkot.prototype.penumpangNaik = function (nama, uang) {
  this.penumpang.push(nama);
  this.kas += uang;
};
