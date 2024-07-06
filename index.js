// index.js
// index.js
import { students } from "./students.js";
import { schools } from "./schools.js";

// Tampilkan data murid di console
console.log("Daftar Murid:");
students.forEach((student) => {
  console.log(student);
});

// Tampilkan data sekolah di console
console.log("\nDaftar Sekolah:");
schools.forEach((school) => {
  console.log(school);
});
