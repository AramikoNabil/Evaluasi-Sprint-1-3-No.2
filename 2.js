let nilaiSantri = [50, 90, 65, 67, 89, 80, 50, 97, 84];

var total = 0;

for (i = 0; i < nilaiSantri.length; i++) {
  total += nilaiSantri[i];
}
document.write("Nilai Rata-Rata nya adalah ", total / nilaiSantri.length);
