
$(document).ready(function () {
  $('.table-tailwindcss ').DataTable();
});

const shorcut = () => {
  document.addEventListener('keydown', (e) => {
    if(e.key === '+'){
      addItem();
    }else if(e.key === 'Enter'){
      checkout();
    }
  })
}

shorcut();

const updateData = (data) => {
  Swal.fire({
    title: 'Data telah diubah!',
    icon: 'success',
    confirmButtonColor: '#2563eb',
    confirmButtonText: 'Tutup',
  })
  closeModal(data);
}

const saveData = () => {
  Swal.fire({
    title: 'Data telah tersimpan!',
    icon: 'success',
    confirmButtonColor: '#2563eb',
    confirmButtonText: 'Tutup',

  })
}

const checkout = () => {
  Swal.fire({
    title: 'Anda yakin sudah betul?',
    text: "Ketika setuju berarti berhasil membeli?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#2563eb',
    cancelButtonColor: '#dc2626',
    confirmButtonText: 'Ya, bayar!',
    cancelButtonText: 'Tidak, batalkan!',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Transaksi berhasil!',
        'Data berhasil disimpan',
        'success'
      )
    }
  })
}

const confirmDelete = () => {
  Swal.fire({
    title: 'Anda yakin?',
    text: "Ketika klik hapus maka data tidak bisa kembali",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#2563eb',
    cancelButtonColor: '#dc2626',
    confirmButtonText: 'Ya, hapus!',
    cancelButtonText: 'Tidak, batalkan!',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Terhapus!',
        'Data berhasil dihapus',
        'success'
      )
    }
  })
}


const openModal = (modalId) => {
  const modal = document.getElementById(modalId);
  modal.classList.remove('hidden');
}

const closeModal = (modalId) => {
  const modal = document.getElementById(modalId);
  modal.classList.add('hidden');
}

const toggleSidebar = () => {
  $('#sidebar').toggle();
}

const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.bg-gray-200');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});
