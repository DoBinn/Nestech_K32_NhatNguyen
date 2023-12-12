let banKinh = parseFloat(prompt("Nhập bán kính của hình tròn:"));
let dienTich = Math.PI * Math.pow(banKinh, 2);

document.write("Diện tích của hình tròn là: " + dienTich.toFixed(2));