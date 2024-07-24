export const DATA = {
  key: '354',
  mempelai: {
    keduaMempelai: 'iqbal & lisa',
    story:
      'pagi ketemu, siang dilamar, malem dilamar, pagi dilamar, malam dilamar, paginya lagi ke undangan temen',

    laki: {
      nama: 'muhammad iqbal ramadhan',
      panggilan: 'iqbal',
      ortu: 'Bapak Suratno\n & Ibu Rospinah'
    },
    perempuan: {
      nama: 'rosalia tsuraya',
      panggilan: 'lisa',
      ortu: 'Bapak Albert Lo Siento\n & Ibu Vladimir Aizel'
    }
  },

  resepsi: {
    alamat:
      'Jl. Bukit Indah Blok B5 No. 6, RT 002/ RW 005, Kel. Serua, Kec. Ciputat, Kota Tangerang selatan, Banten 15414',
    maps: 'https://maps.app.goo.gl/Lp7L8CwkehvC3GUp8',
    tanggal: '02-AUG-2024 10:00:00 GMT+0700', //FORMAT: DD-MMM-YYYY HH:mm:ss GMT+0700
    waktu: '09:00 - 17:00 WIB',
    link: 'https://www.google.com/calendar/render?action=TEMPLATE&sf=true&output=xml&text=Pernikahan%20Iqbal%20&%20Lisa&location=Jl.%20Bukit%20Indah%20Blok%20B5%20No.%206,%20RT%20002/%20RW%20005,%20Kel.%20Serua,%20Kec.%20Ciputat,%20Kota%20Tangerang%20selatan,%20Banten%2015414&details=The%20Wedding%20of%20Iqbal%20&%20Lisa%0A%0AJumat,%2002%20Agustus%202024&dates=20240802T030000Z/20240801T220000Z'
  },

  akad: {
    alamat:
      'Jl. Siliwangi No.2, Pamulang Bar., Kec. Pamulang, Kota Tangerang Selatan, Banten 15417',
    maps: 'https://g.co/kgs/ReT8rxQ',
    tanggal: '01-AUG-2024 09:00:00 GMT+0700',
    waktu: '10:00 - 11:00 WIB'
  },

  kado: {
    penerima: 'Muhammad Iqbal Ramadhan',
    nomer: '081286765654',
    alamat:
      'Jl. Siliwangi No.2, Pamulang Bar., Kec. Pamulang, Kota Tangerang Selatan, Banten 15417',
    rekening: [
      { nomor: '39428347293', gambar: '/mandiri.svg', atasNama: 'Muhammad Iqbal Ramadhan' },
      { nomor: '829137', gambar: '/bsi.svg', atasNama: 'Rosalia Tsuraya' }
    ]
  }
} as const
