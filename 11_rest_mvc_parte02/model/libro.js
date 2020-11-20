
const libri = [{ id:0 , titolo: "Titolo 0" },
               { id:1 , titolo: "Titolo 1" }];


module.exports = class Libro {

  constructor(l) { this.book=l }

  insert() {
    let newid=libri.length
    this.book.id=newid
    libri[newid]=this.book
     return newid;
  }

  static fetchAll(l) {
    return libri;
  }

  static fetchById(idx) {
    if (libri[idx]) {
      return libri[idx];
    } else {
      return undefined;
    }
  }
  static deleteByID(idx) {
    return 0; // 0 OK, 1 KO
  }

  static updateByID(idx,libro) {
    return 0;  // 0 OK, 1 KO
  }

}

