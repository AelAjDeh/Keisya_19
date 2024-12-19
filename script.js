let users = [];

function addData() {
  const name = document.getElementById("name").value;
  const no = document.getElementById("no").value;
  const email = document.getElementById("email").value;
  const alamat = document.getElementById("alamat").value;
  const jenis = document.getElementById("jenis").value;
  const deskripsi = document.getElementById("deskripsi").value;
  const fotoFile = document.getElementById("foto").files[0];
  const jumlah = document.getElementById("jumlah").value;
  const harga = document.getElementById("harga").value;

  if (name && no && email && alamat && jenis && deskripsi && fotoFile && jumlah && harga) {
    const fotoURL = URL.createObjectURL(fotoFile);

    users.push({
      name,
      no,
      email,
      alamat,
      jenis,
      deskripsi,
      fotoURL,
      jumlah,
      harga
    });

    document.getElementById("name").value = '';
    document.getElementById("no").value = '';
    document.getElementById("email").value = '';
    document.getElementById("alamat").value = '';
    document.getElementById("jenis").selectedIndex = 0;
    document.getElementById("deskripsi").value = '';
    document.getElementById("foto").value = '';
    document.getElementById("jumlah").value = '';
    document.getElementById("harga").value = '';

    displayData();
  } else {
    alert("Harap isi semua data");
  }
}

function displayData() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  users.forEach((user, index) => {
    tableBody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.no}</td>
        <td>${user.email}</td>
        <td>${user.alamat}</td>
        <td>${user.jenis}</td>
        <td>${user.deskripsi}</td>
        <td><img src="${user.fotoURL}" alt="Foto Sampah" style="width: 100px; height: auto; border-radius: 10px;"></td>
        <td>${user.jumlah}</td>
        <td>${user.harga}</td>
        <td>
          <button onclick="editData(${index})">Edit</button>
          <button onclick="deleteData(${index})">Hapus</button>
        </td>
      </tr>
    `;
  });
}

function editData(index) {
  const user = users[index];
  document.getElementById("name").value = user.name;
  document.getElementById("no").value = user.no;
  document.getElementById("email").value = user.email;
  document.getElementById("alamat").value = user.alamat;
  document.getElementById("jenis").value = user.jenis;
  document.getElementById("deskripsi").value = user.deskripsi;
  document.getElementById("jumlah").value = user.jumlah;
  document.getElementById("harga").value = user.harga;

  deleteData(index);
}

function deleteData(index) {
  users.splice(index, 1);
  displayData();
}
