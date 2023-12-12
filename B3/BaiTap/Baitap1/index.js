let sinhvien = prompt("Nhap ten sinh vien");
let vatly = prompt("Nhap diem vat ly :");
let hoahoc = prompt("Nhap diem hoa hoc :");
let sinhhoc= prompt("Nhap diem sinh hoc :");

sinhhoc = parseInt(sinhhoc)
vatly = parseInt(vatly)
hoahoc = parseInt(hoahoc)
let diemtrungbinh = (vatly + hoahoc + sinhhoc) / 3 ;
document.write(" Diem trung binh cua " + sinhvien + " la "  + diemtrungbinh );
