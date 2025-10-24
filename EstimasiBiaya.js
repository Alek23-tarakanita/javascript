function hitung_biaya() {
	let nama = document.getElementById('nama-customer').value;
	let hargabarang = parseFloat(document.getElementById('harga-barang').value)||0;
	let jumlahbarang = parseFloat(document.getElementById('jumlah-barang').value)||0;

	let totalbiaya = hargabarang*jumlahbarang;
	document.getElementById('hasil').innerHTML =`
		<p><strong>Nama Barang :</strong> ${nama}</p>
		<p><strong>Total Biaya :</strong> Rp ${totalbiaya.toLocaleString()}</p>`;
}

function hapus_data() {
	document.getElementById('nama-customer').value='';
	document.getElementById('harga-barang').value='';
	document.getElementById('jumlah-barang').value='';
	document.getElementById('jenis-minuman').value='--Pilih Jenis Minuman--';

	document.getElementById('hasil').innerHTML='';
}

function update_biayaminuman() {
	const jenisminuman = document.getElementById("jenis-minuman").value;
	let biaya=0;

	//harga minuman akan keluar berdasarkan jenis minuman
	if(jenisminuman==="tehsolo-uk-kecil") biaya =5000;
		else if(jenisminuman==="tehsolo-uk-besar") biaya=7000;
		else if(jenisminuman==="lemon-tea") biaya=8000;
		else if(jenisminuman==="es-jeruk") biaya=8000;

	//isi otomatis ke inputan harga minuman
		document.getElementById("harga-barang").value =biaya;

}