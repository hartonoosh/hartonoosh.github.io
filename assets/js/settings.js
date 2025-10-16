$(document).ready(function () {
  "use strict";
  try {
    var $buythemediv =
      '<div class="buy-theme xs-display-none"><a href="https://1.envato.market/61ORG" target="_blank"><span>Purchase Theme</span></a></div>';
    // $('body').append($buythemediv);

    /* ==========================================================================
         #PieChart For Skills Page
         ========================================================================== */

    $(".chart").easyPieChart({
      easing: "easeOutBounce",
      onStep: function (from, to, percent) {
        $(this.el).find(".percent").text(Math.round(percent));
      },
    });

    /* ==========================================================================
         #Carousel Popup For Portfolio Page
         ========================================================================== */
    $(".owl-carousel").owlCarousel({
      navigation: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true,
      autoPlay: false,
    });

    /* ==========================================================================
         #Text Rotator 
         ========================================================================== */
    $("#rotate").rotaterator({ fadeSpeed: 800, pauseSpeed: 800 });

    /* ==========================================================================
         #Orientation change event
         ========================================================================== */
    $(window).on("orientationchange", function (event) {
      window.location.href = window.location.href;
    });

    //Videos
    $(".content-scroller").fitVids();
  } catch (ex) {}
});

/* ==========================================================================
 #Progress Bar For Skills Page
 ========================================================================== */

progressBar(78, $("#progressBar"));
progressBar(100, $("#progressBar2"));
progressBar(60, $("#progressBar3"));

/* ==========================================================================
 #Mobile Menu
 ========================================================================== */

var $menu = $("#menu1"),
  $menulink = $(".menu-link");
$menulink.click(function () {
  $menulink.toggleClass("active");
  $menu.toggleClass("active");
  return false;
});

$("nav#menu1 a").click(function () {
  $("#menu1").removeClass("active");
});

/* ==========================================================================
 #iPad,iPhone,iPod Keyboard issue with position fixed
 ========================================================================== */
var iPad = navigator.userAgent.toLowerCase().indexOf("ipad");
var iPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
var iPod = navigator.userAgent.toLowerCase().indexOf("ipod");
if (iPad > -1 || iPhone > -1 || iPod > -1) {
  window.onscroll = function () {
    $(".totop-link").css("position", "absolute");
    $(".totop-link").css(
      "top",
      window.pageYOffset + window.innerHeight - 39 + "px"
    );
  };
}

/*
=============================================================================
change language
=============================================================================
*/
$(".language-sidebar").click(function () {
  let language = $("#language-sidebar").attr("alt");
  if (language == "Indonesia") {
    $("#language-sidebar").attr("src", "assets/images/uk.png");
    $("#language-sidebar").attr("alt", "English");
    $("#text-language").text("English");
    /*
				$.ajax({      
					url : HOST_URL + `/change-language`, 
					type: 'POST',
					data: {
						language: 'English'
					},
					dataType: "json",
					success: function(response){
						console.log('language change')
					},
					error: function (xhr, ajaxOptions, thrownError) { 
						console.log('error')
					}
				});
				*/

    // Sidebar
    $("#link_introduction").text("Home");
    $("#link_about").text("About");
    $("#link_skills").text("Skills");
    $("#link_experience").text("Experience");
    $("#link_education").text("Education");
    $("#link_contact").text("Contact");
    // Introduction
    $("#introduction-1").text("Hello, I'm");

    // About
    $("#about-1").text("About");
    $("#about-2").text("Name");
    $("#about-3").text("Phone");
    $("#about-4").text("Age");
    $("#about-5").text("Address");
    $("#about-6").text("Nationality");
    $("#about-7").text("Professional Profile");
    $("#about-8").text(
      "Professional with 4+ years experience in website development and mobile development, Skilled in team collaboration, problem solving and project management."
    );
    $("#about-9").text("Download resume as PDF format");
    // $("#about-10").text("08 June 1996");

    // Skill
    $("#skill-1").text("Skills");
    $("#skill-2").text("Just My Awesome Skills");
    $("#skill-3").text(
      "Some of the professional skills I have in the field of full stack programming and the work I do."
    );
    $("#skill-4").text("Knowledge");
    $("#skill-5").text(
      "Some of the knowledge I learned can help my future work."
    );
    $("#skill-6").text("Language Skills");
    $("#skill-7").text("The language I use to work and communicate every day.");
    // Experience
    $("#experience-1").text("Experience");
    $("#experience-2").text("11 Years Experience!");
    $("#experience-3").text(
      "Various experiences in working for more than 11 years have made me a professional in the field that I am currently working on and will continue to develop over time."
    );
    $("#experience-4").text("Assistant Lecturer");
    $("#experience-5").text("Aug 2022 - Present");
    $("#experience-6").text(
      "Assisting lecturers in teaching students in class."
    );
    $("#experience-7").text("Helping lecturers compile syllabus.");
    $("#experience-8").text("Compile complete exam questions with answers.");
    // $('#experience-9').text('');
    $("#experience-10").text("Feb 2021 - present");
    $("#experience-11").text("Develop and maintain an E-Procurement website for the needs of the Pharmacy purchasing division.");
    $("#experience-12").text("Develop and maintain the E-SKP website to increase pharmacy customer surveys.");
    $("#experience-13").text("Develop and maintain Backoffice websites for the needs of all Pharmacy divisions.");
    $("#experience-43").text("Develop and maintain an E-Document website for the needs of the Legal & HRD division.");
    $("#experience-44").text("Creating API integration for taking stock of pharmacy goods from 3rd parties.");
    $("#experience-45").text("Take part in the development of company technology.");
    $("#experience-14").text("Assistant Lecturer");
    // $('#experience-15').text('');
    $("#experience-16").text(
      "Assisting lecturers in teaching students in class."
    );
    $("#experience-17").text("Helping lecturers compile syllabus.");
    $("#experience-18").text("Compile complete exam questions with answers.");
    $("#experience-19").text("Marketing Supervisor");
    $("#experience-20").text("Jul 2019 - Dec 2020");
    $("#experience-21").text(
      "Planned individual and team activities for target achievements."
    );
    $("#experience-22").text(
      "Supervised and gave direction for team activities."
    );
    $("#experience-23").text(
      "Developed strategies with teams related to target achievements."
    );
    // $('#experience-24').text('');
    // $('#experience-25').text('');
    $("#experience-26").text(
      "Maintained a good relationship between doctor and company."
    );
    $("#experience-27").text("Improved sales performance every month.");
    $("#experience-28").text("Pharmacist Assistant");
    // $('#experience-29').text('');
    $("#experience-30").text("Sold pharmacy products.");
    $("#experience-31").text(
      "Dispensing medicine according to a doctor's prescription."
    );
    
    // $("#experience-32").text("");
    $("#experience-33").text("Okt 2022 - Present");
    $("#experience-34").text("Developing the Ubbu Toko website for marketplace needs.");
    $("#experience-35").text("Developing the Ubbu Niaga website for invoice payment needs.");
    $("#experience-36").text("Developing the Ubbu Kirim website for goods delivery platform needs.");
    $("#experience-37").text("Developing the Ubbu Pay website for online payment platform needs.");
    $("#experience-38").text("Developing the Ubbu Kontak website for notification platform needs for various methods.");
    $("#experience-39").text("Developing the Ubbu Dashboard website for Ubbu website analysis and maintenance needs.");
    $("#experience-40").text("Developing the Fundo website for the company's invoice auction platform needs.");
    $("#experience-41").text("Work as a team using Git Control.");
    $("#experience-42").text("Set the runner and vhost on the Linux server for website connections.");
    // Education
    $("#education-1").text("Education");
    $("#education-2").text("Just My Education");
    $("#education-3").text("The education I took and graduated in that field.");
    $("#education-4").text("Bachelor of Information System");
    $("#education-5").text(
      "Thesis: Android-Based Medical Representative Visit Application"
    );
    $("#education-6").text("Pharmaceutical Marketing");
    // Portofolio
    $("#portofolio-1").text("Portofolio");
    $("#portofolio-2").text("My portfolio features a variety of projects");
    $("#portofolio-3").text(
      "Some of the website creation projects that I have worked on so far."
    );
    $("#portofolio-4").text("Website Job Portal & Training Center");
    $("#portofolio-5").text("Website Company Profile & Manage Member");
    $("#portofolio-6").text("Website Customer Satisfaction Apotek Roxy");
    $("#portofolio-7").text("Website Electronic Document Apotek Roxy");
    $("#portofolio-8").text("Website E-Procurement Product Apotek Roxy");
    $("#portofolio-9").text("Website Maintenance Stock Moving & Non Moving");
    $("#portofolio-10").text("Website Customer Service Proteknik Mega Persada");
    $("#portofolio-11").text(
      "Website helping students find information and location of the nearest school"
    );
    $("#portofolio-12").text("Website Wedding Invitation");
    $("#portofolio-14").text("Website Fintech Funding Platform");
    // $('#portofolio-13').text('');
    // Contact
    $("#contact-1").text("Contact");
    $("#contact-2").text("Let's Keep In Touch");
    $("#contact-3").text(
      "Contact me via the options below to get to know more."
    );
    $("#contact-4").text("Phone");
    $("#contact-5").text("I'm also on Social Networks");
    $("#contact-6").text("Contact me via social networks");
    $("#contact-7").text("Send me message");
    $("#name").attr("placeholder", "Your Name...");
    $("#email").attr("placeholder", "Your Email...");
    $("#message").attr("placeholder", "Your Message...");
    $("#button").val("say hello!");
    // Thankyu
    $("#thankyu-1").text("Awesome");
    $("#thankyu-2").text("Smart Work");
    $("#thankyu-3").text("Good Communication");
  } else {
    $("#language-sidebar").attr("src", "assets/images/id.png");
    $("#language-sidebar").attr("alt", "Indonesia");
    $("#text-language").text("Bahasa");
    /*
				$.ajax({      
					url : HOST_URL + `/change-language`, 
					type: 'POST',
					data: {
						language: 'Indonesia'
					},
					dataType: "json",
					success: function(response){
						console.log('language change')
					},
					error: function (xhr, ajaxOptions, thrownError) { 
						console.log('error')
					}
				});
				*/

    // $('#').text('');
    // Sidebar
    $("#link_introduction").text("Beranda");
    $("#link_about").text("Tentang");
    $("#link_skills").text("Keahlian");
    $("#link_experience").text("Pengalaman");
    $("#link_education").text("Pendidikan");
    $("#link_contact").text("Kontak");
    // Introduction
    $("#introduction-1").text("Hallo, Saya");

    // About
    $("#about-1").text("Tentang");
    $("#about-2").text("Nama");
    $("#about-3").text("Telp");
    $("#about-4").text("Umur");
    $("#about-5").text("Alamat");
    $("#about-6").text("kebangsaan");
    $("#about-7").text("Profil Profesional");
    $("#about-8").text(
      "Seorang profesional dengan 4+ tahun pengalaman dalam pengembangan situs website dan mobile, Terampil dalam kolaborasi tim, pemecahan masalah serta manajemen proyek."
    );
    $("#about-9").text("Unduh Resume PDF");
    // $("#about-10").text("08 Juni 1996");

    // Skill
    $("#skill-1").text("Keahlian");
    $("#skill-2").text("Keahlian yang saya miliki");
    $("#skill-3").text(
      "Beberapa keterampilan profesional yang saya miliki di bidang full stack programming dan pekerjaan."
    );
    $("#skill-4").text("Pengetahuan");
    $("#skill-5").text(
      "Beberapa ilmu yang saya pelajari dapat membantu pekerjaan saya di masa depan."
    );
    $("#skill-6").text("Kemampuan Bahasa");
    $("#skill-7").text(
      "Bahasa yang saya gunakan untuk bekerja dan berkomunikasi setiap hari."
    );
    // Experience
    $("#experience-1").text("Pengalaman");
    $("#experience-2").text("11 Tahun Pengalaman Bekerja!");
    $("#experience-3").text(
      "Berbagai pengalaman dalam bekerja selama lebih dari 11 tahun menjadikan saya seorang profesional dibidang yang saat ini saya geluti dan akan terus berkembang seiring berjalannya waktu."
    );
    $("#experience-4").text("Asisten Dosen");
    $("#experience-5").text("Ags 2022 - Jan 2023");
    $("#experience-6").text(
      "Membantu dosen dalam mengajar mahasiswa di kelas."
    );
    $("#experience-7").text("Membantu dosen menyusun silabus.");
    $("#experience-8").text("Membuat pertanyaan ujian lengkap dengan jawaban.");
    // $('#experience-9').text('');
    $("#experience-10").text("Feb 2021 - Sep 2022");
    $("#experience-11").text("Mengembangkan dan memelihara website E-Procurement untuk kebutuhan divisi pembelian barang Apotek.");
    $("#experience-12").text("Mengembangkan dan memelihara website E-SKP untuk peningkatan survei pelanggan Apotek.");
    $("#experience-13").text("Mengembangkan dan memelihara website Backoffice untuk kebutuhan semua divisi Apotek.");
    $("#experience-43").text("Mengembangkan dan memelihara website E-Document untuk kebutuhan divisi Legal & HRD.");
    $("#experience-44").text("Membuat integrasi API untuk pengambilan stock barang Apotek kepada pihak ke-3.");
    $("#experience-45").text("Turut andil dalam pengembangan teknologi perusahaan.");
    $("#experience-14").text("Asisten Dosen");
    // $('#experience-15').text('');
    $("#experience-16").text(
      "Membantu dosen dalam mengajar mahasiswa di kelas."
    );
    $("#experience-17").text("Membantu dosen menyusun silabus.");
    $("#experience-18").text(
      "Membuat pertanyaan ujian lengkap dengan jawaban."
    );
    $("#experience-19").text("Supervisor Pemasaran");
    $("#experience-20").text("Jul 2019 - Des 2020");
    $("#experience-21").text(
      "Merencanakan aktivitas individu dan tim untuk pencapaian target."
    );
    $("#experience-22").text(
      "Mengawasi dan memberi arahan untuk kegiatan tim."
    );
    $("#experience-23").text(
      "Mengembangkan strategi dengan tim terkait pencapaian target."
    );
    // $('#experience-24').text('');
    // $('#experience-25').text('');
    $("#experience-26").text(
      "Menjaga hubungan baik antara dokter dan perusahaan."
    );
    $("#experience-27").text("Meningkatkan kinerja penjualan setiap bulan.");
    $("#experience-28").text("Asisten Apoteker");
    // $('#experience-29').text('');
    $("#experience-30").text("Menjual produk farmasi.");
    $("#experience-31").text(
      "Membantu meracik obat sesuai dengan resep dokter yang telah tertulis."
    );
    
    // $("#experience-32").text("");
    $("#experience-33").text("Okt 2022 - Sekarang");
    $("#experience-34").text("Mengembangkan website Ubbu Toko untuk kebutuhan marketplace.");
    $("#experience-35").text("Mengembangkan website Ubbu Niaga untuk kebutuhan pembayaran Invoice.");
    $("#experience-36").text("Mengembangkan website Ubbu Kirim untuk kebutuhan platform pengiriman barang.");
    $("#experience-37").text("Mengembangkan website Ubbu Pay untuk kebutuhan platform pembayaran online.");
    $("#experience-38").text("Mengembangkan website Ubbu Kontak untuk kebutuhan platform notifikasi berbagai macam metode.");
    $("#experience-39").text("Mengembangkan website Ubbu Dashboard untuk kebutuhan analisa dan pemeliharaan website Ubbu.");
    $("#experience-40").text("Mengembangkan website Fundo untuk kebutuhan platform lelang invoice perusahaan.");
    $("#experience-41").text("Bekerja secara tim menggunakan Git Control.");
    $("#experience-42").text("Mengatur runner dan vhost pada server linux untuk koneksi website.");
    // Education
    $("#education-1").text("Pendidikan");
    $("#education-2").text("Beberapa Pendidikan Saya");
    $("#education-3").text(
      "Pendidikan yang pernah saya ambil dan telah lulus dibidang tersebut."
    );
    $("#education-4").text("Sarjana Sistem Informasi");
    $("#education-5").text(
      "Skripsi : Aplikasi Kunjungan Medical Representative Berbasis Android"
    );
    $("#education-6").text("Pemasaran Farmasi");
    // Portofolio
    $("#portofolio-1").text("Portofolio");
    $("#portofolio-2").text("Portofolio saya menampilkan berbagai proyek");
    $("#portofolio-3").text(
      "Beberapa proyek pembuatan website yang telah saya kerjakan selama ini."
    );
    $("#portofolio-4").text("Portal Pekerjaan & Pusat Pelatihan");
    $("#portofolio-5").text("Profil Perusahaan & Manajemen Anggota");
    $("#portofolio-6").text("Website Kepuasan Pelanggan Apotek Roxy");
    $("#portofolio-7").text("Website Dokumen Elektronik Apotek Roxy");
    $("#portofolio-8").text("Website E-Procurement Produk Apotek Roxy");
    $("#portofolio-9").text(
      "Website Pemantauan Stok Bergerak & Tidak Bergerak"
    );
    $("#portofolio-10").text(
      "Website Layanan Pelanggan Proteknik Mega Persada"
    );
    $("#portofolio-11").text(
      "Website yang membantu siswa menemukan informasi dan lokasi sekolah terdekat"
    );
    $("#portofolio-12").text("Undangan Nikah Online");
    $('#portofolio-14').text('Platform Pendanaan Perusahaan');
    // Contact
    $("#contact-1").text("Kontak");
    $("#contact-2").text("Mari tetap berhubungan");
    $("#contact-3").text(
      "Hubungi saya melalui opsi di bawah ini untuk mengenal lebih jauh."
    );
    $("#contact-4").text("Telepon");
    $("#contact-5").text("Temukan saya disosial media");
    $("#contact-6").text("Hubungi saya melalui sosial media");
    $("#contact-7").text("Kirim saya pesan");
    $("#name").attr("placeholder", "Nama kamu...");
    $("#email").attr("placeholder", "Email kamu...");
    $("#message").attr("placeholder", "Pesan kamu...");
    $("#button").val("Kirimkan!");
    // Thankyu
    $("#thankyu-1").text("Luar Biasa");
    $("#thankyu-2").text("Kerja Pintar");
    $("#thankyu-3").text("Komunikasi Bagus");
  }
});

$(".change-language").click(function () {
  let language = $("#language-topbar").attr("alt");
  if (language == "Indonesia") {
    $("#language-topbar").attr("src", "assets/images/uk.png");
    $("#language-topbar").attr("alt", "English");
    /*
				$.ajax({      
					url : HOST_URL + `/change-language`, 
					type: 'POST',
					data: {
						language: 'English'
					},
					dataType: "json",
					success: function(response){
						console.log('language change')
					},
					error: function (xhr, ajaxOptions, thrownError) { 
						console.log('error')
					}
				});
				*/

    // topbar
    $("#link_introduction").text("Home");
    $("#link_about").text("About");
    $("#link_skills").text("Skills");
    $("#link_experience").text("Experience");
    $("#link_education").text("Education");
    $("#link_contact").text("Contact");
    // Introduction
    $("#introduction-1").text("Hello, I'm");

    // About
    $("#about-1").text("About");
    $("#about-2").text("Name");
    $("#about-3").text("Phone");
    $("#about-4").text("Age");
    $("#about-5").text("Address");
    $("#about-6").text("Nationality");
    $("#about-7").text("Professional Profile");
    $("#about-8").text(
      "Professional with 4+ years experience in website development and mobile development, Skilled in team collaboration, problem solving and project management."
    );
    $("#about-9").text("Download resume as PDF format");
    // $("#about-10").text("08 June 1996");

    // Skill
    $("#skill-1").text("Skills");
    $("#skill-2").text("Just My Awesome Skills");
    $("#skill-3").text(
      "Some of the professional skills I have in the field of full stack programming and the work I do."
    );
    $("#skill-4").text("Knowledge");
    $("#skill-5").text(
      "Some of the knowledge I learned can help my future work."
    );
    $("#skill-6").text("Language Skills");
    $("#skill-7").text("The language I use to work and communicate every day.");
    // Experience
    $("#experience-1").text("Experience");
    $("#experience-2").text("11 Years Experience");
    $("#experience-3").text(
      "Various experiences in working for more than 11 years have made me a professional in the field that I am currently working on and will continue to develop over time."
    );
    $("#experience-4").text("Assistant Lecturer");
    $("#experience-5").text("Aug 2022 - Present");
    $("#experience-6").text(
      "Assisting lecturers in teaching students in class."
    );
    $("#experience-7").text("Helping lecturers compile syllabus.");
    $("#experience-8").text("Compile complete exam questions with answers.");
    // $('#experience-9').text('');
    $("#experience-10").text("Feb 2021 - present");
    $("#experience-11").text("Develop and maintain an E-Procurement website for the needs of the Pharmacy purchasing division.");
    $("#experience-12").text("Develop and maintain the E-SKP website to increase pharmacy customer surveys.");
    $("#experience-13").text("Develop and maintain Backoffice websites for the needs of all Pharmacy divisions.");
    $("#experience-43").text("Develop and maintain an E-Document website for the needs of the Legal & HRD division.");
    $("#experience-44").text("Creating API integration for taking stock of pharmacy goods from 3rd parties.");
    $("#experience-45").text("Take part in the development of company technology.");
    $("#experience-14").text("Assistant Lecturer");
    // $('#experience-15').text('');
    $("#experience-16").text(
      "Assisting lecturers in teaching students in class."
    );
    $("#experience-17").text("Helping lecturers compile syllabus.");
    $("#experience-18").text("Compile complete exam questions with answers.");
    $("#experience-19").text("Marketing Supervisor");
    $("#experience-20").text("Jul 2019 - Dec 2020");
    $("#experience-21").text(
      "Planned individual and team activities for target achievements."
    );
    $("#experience-22").text(
      "Supervised and gave direction for team activities."
    );
    $("#experience-23").text(
      "Developed strategies with teams related to target achievements."
    );
    // $('#experience-24').text('');
    // $('#experience-25').text('');
    $("#experience-26").text(
      "Maintained a good relationship between doctor and company."
    );
    $("#experience-27").text("Improved sales performance every month.");
    $("#experience-28").text("Pharmacist Assistant");
    // $('#experience-29').text('');
    $("#experience-30").text("Sold pharmacy products.");
    $("#experience-31").text(
      "Dispensing medicine according to a doctor's prescription."
    );
    
    // $("#experience-32").text("");
    $("#experience-33").text("Okt 2022 - Present");
    $("#experience-34").text("Developing the Ubbu Toko website for marketplace needs.");
    $("#experience-35").text("Developing the Ubbu Niaga website for invoice payment needs.");
    $("#experience-36").text("Developing the Ubbu Kirim website for goods delivery platform needs.");
    $("#experience-37").text("Developing the Ubbu Pay website for online payment platform needs.");
    $("#experience-38").text("Developing the Ubbu Kontak website for notification platform needs for various methods.");
    $("#experience-39").text("Developing the Ubbu Dashboard website for Ubbu website analysis and maintenance needs.");
    $("#experience-40").text("Developing the Fundo website for the company's invoice auction platform needs.");
    $("#experience-41").text("Work as a team using Git Control.");
    $("#experience-42").text("Set the runner and vhost on the Linux server for website connections.");
    // Education
    $("#education-1").text("Education");
    $("#education-2").text("Just My Education");
    $("#education-3").text("The education I took and graduated in that field.");
    $("#education-4").text("Bachelor of Information System");
    $("#education-5").text(
      "Thesis: Android-Based Medical Representative Visit Application"
    );
    $("#education-6").text("Pharmaceutical Marketing");
    // Portofolio
    $("#portofolio-1").text("Portofolio");
    $("#portofolio-2").text("My portfolio features a variety of projects");
    $("#portofolio-3").text(
      "Some of the website creation projects that I have worked on so far."
    );
    $("#portofolio-4").text("Website Job Portal & Training Center");
    $("#portofolio-5").text("Website Company Profile & Manage Member");
    $("#portofolio-6").text("Website Customer Satisfaction Apotek Roxy");
    $("#portofolio-7").text("Website Electronic Document Apotek Roxy");
    $("#portofolio-8").text("Website E-Procurement Product Apotek Roxy");
    $("#portofolio-9").text("Website Maintenance Stock Moving & Non Moving");
    $("#portofolio-10").text("Website Customer Service Proteknik Mega Persada");
    $("#portofolio-11").text(
      "Website helping students find information and location of the nearest school"
    );
    $("#portofolio-12").text("Website Wedding Invitation");
    $("#portofolio-14").text("Website Fintech Funding Platform");
    // $('#portofolio-13').text('');
    // Contact
    $("#contact-1").text("Contact");
    $("#contact-2").text("Let's Keep In Touch");
    $("#contact-3").text(
      "Contact me via the options below to get to know more."
    );
    $("#contact-4").text("Phone");
    $("#contact-5").text("I'm also on Social Networks");
    $("#contact-6").text("Contact me via social networks");
    $("#contact-7").text("Send me message");
    $("#name").attr("placeholder", "Your Name...");
    $("#email").attr("placeholder", "Your Email...");
    $("#message").attr("placeholder", "Your Message...");
    $("#button").val("say hello!");
    // Thankyu
    $("#thankyu-1").text("Awesome");
    $("#thankyu-2").text("Smart Work");
    $("#thankyu-3").text("Good Communication");
  } else {
    $("#language-topbar").attr("src", "assets/images/id.png");
    $("#language-topbar").attr("alt", "Indonesia");
    /*
				$.ajax({      
					url : HOST_URL + `/change-language`, 
					type: 'POST',
					data: {
						language: 'Indonesia'
					},
					dataType: "json",
					success: function(response){
						console.log('language change')
					},
					error: function (xhr, ajaxOptions, thrownError) { 
						console.log('error')
					}
				});
				*/

    // $('#').text('');
    // Sidebar
    $("#link_introduction").text("Beranda");
    $("#link_about").text("Tentang");
    $("#link_skills").text("Keahlian");
    $("#link_experience").text("Pengalaman");
    $("#link_education").text("Pendidikan");
    $("#link_contact").text("Kontak");
    // Introduction
    $("#introduction-1").text("Hallo, Saya");

    // About
    $("#about-1").text("Tentang");
    $("#about-2").text("Nama");
    $("#about-3").text("Telp");
    $("#about-4").text("Umur");
    $("#about-5").text("Alamat");
    $("#about-6").text("kebangsaan");
    $("#about-7").text("Profil Profesional");
    $("#about-8").text(
      "Seorang profesional dengan 4+ tahun pengalaman dalam pengembangan situs website dan mobile, Terampil dalam kolaborasi tim, pemecahan masalah serta manajemen proyek."
    );
    $("#about-9").text("Unduh Resume PDF");
    // $("#about-10").text("08 Juni 1996");

    // Skill
    $("#skill-1").text("Keahlian");
    $("#skill-2").text("Keahlian yang saya miliki");
    $("#skill-3").text(
      "Beberapa keterampilan profesional yang saya miliki di bidang full stack programming dan pekerjaan."
    );
    $("#skill-4").text("Pengetahuan");
    $("#skill-5").text(
      "Beberapa ilmu yang saya pelajari dapat membantu pekerjaan saya di masa depan."
    );
    $("#skill-6").text("Kemampuan Bahasa");
    $("#skill-7").text(
      "Bahasa yang saya gunakan untuk bekerja dan berkomunikasi setiap hari."
    );
    // Experience
    $("#experience-1").text("Pengalaman");
    $("#experience-2").text("11 Tahun Pengalaman Bekerja!");
    $("#experience-3").text(
      "Berbagai pengalaman dalam bekerja selama lebih dari 11 tahun menjadikan saya seorang profesional dibidang yang saat ini saya geluti dan akan terus berkembang seiring berjalannya waktu."
    );
    $("#experience-4").text("Asisten Dosen");
    $("#experience-5").text("Ags 2022 - Sekarang");
    $("#experience-6").text(
      "Membantu dosen dalam mengajar mahasiswa di kelas."
    );
    $("#experience-7").text("Membantu dosen menyusun silabus.");
    $("#experience-8").text("Membuat pertanyaan ujian lengkap dengan jawaban.");
    // $('#experience-9').text('');
    $("#experience-10").text("Feb 2021 - Sekarang");
    $("#experience-11").text("Mengembangkan dan memelihara website E-Procurement untuk kebutuhan divisi pembelian barang Apotek.");
    $("#experience-12").text("Mengembangkan dan memelihara website E-SKP untuk peningkatan survei pelanggan Apotek.");
    $("#experience-13").text("Mengembangkan dan memelihara website Backoffice untuk kebutuhan semua divisi Apotek.");
    $("#experience-43").text("Mengembangkan dan memelihara website E-Document untuk kebutuhan divisi Legal & HRD.");
    $("#experience-44").text("Membuat integrasi API untuk pengambilan stock barang Apotek kepada pihak ke-3.");
    $("#experience-45").text("Turut andil dalam pengembangan teknologi perusahaan.");
    $("#experience-14").text("Asisten Dosen");
    // $('#experience-15').text('');
    $("#experience-16").text(
      "Membantu dosen dalam mengajar mahasiswa di kelas."
    );
    $("#experience-17").text("Membantu dosen menyusun silabus.");
    $("#experience-18").text(
      "Membuat pertanyaan ujian lengkap dengan jawaban."
    );
    $("#experience-19").text("Supervisor Pemasaran");
    $("#experience-20").text("Jul 2019 - Des 2020");
    $("#experience-21").text(
      "Merencanakan aktivitas individu dan tim untuk pencapaian target."
    );
    $("#experience-22").text(
      "Mengawasi dan memberi arahan untuk kegiatan tim."
    );
    $("#experience-23").text(
      "Mengembangkan strategi dengan tim terkait pencapaian target."
    );
    // $('#experience-24').text('');
    // $('#experience-25').text('');
    $("#experience-26").text(
      "Menjaga hubungan baik antara dokter dan perusahaan."
    );
    $("#experience-27").text("Meningkatkan kinerja penjualan setiap bulan.");
    $("#experience-28").text("Asisten Apoteker");
    // $('#experience-29').text('');
    $("#experience-30").text("Menjual produk farmasi.");
    $("#experience-31").text(
      "Membantu meracik obat sesuai dengan resep dokter yang telah tertulis."
    );
    
    // $("#experience-32").text("");
    $("#experience-33").text("Okt 2022 - Sekarang");
    $("#experience-34").text("Mengembangkan website Ubbu Toko untuk kebutuhan marketplace.");
    $("#experience-35").text("Mengembangkan website Ubbu Niaga untuk kebutuhan pembayaran Invoice.");
    $("#experience-36").text("Mengembangkan website Ubbu Kirim untuk kebutuhan platform pengiriman barang.");
    $("#experience-37").text("Mengembangkan website Ubbu Pay untuk kebutuhan platform pembayaran online.");
    $("#experience-38").text("Mengembangkan website Ubbu Kontak untuk kebutuhan platform notifikasi berbagai macam metode.");
    $("#experience-39").text("Mengembangkan website Ubbu Dashboard untuk kebutuhan analisa dan pemeliharaan website Ubbu.");
    $("#experience-40").text("Mengembangkan website Fundo untuk kebutuhan platform lelang invoice perusahaan.");
    $("#experience-41").text("Bekerja secara tim menggunakan Git Control.");
    $("#experience-42").text("Mengatur runner dan vhost pada server linux untuk koneksi website.");
    // Education
    $("#education-1").text("Pendidikan");
    $("#education-2").text("Beberapa Pendidikan Saya");
    $("#education-3").text(
      "Pendidikan yang pernah saya ambil dan telah lulus dibidang tersebut."
    );
    $("#education-4").text("Sarjana Sistem Informasi");
    $("#education-5").text(
      "Skripsi : Aplikasi Kunjungan Medical Representative Berbasis Android"
    );
    $("#education-6").text("Pemasaran Farmasi");
    // Portofolio
    $("#portofolio-1").text("Portofolio");
    $("#portofolio-2").text("Portofolio saya menampilkan berbagai proyek");
    $("#portofolio-3").text(
      "Beberapa proyek pembuatan website yang telah saya kerjakan selama ini."
    );
    $("#portofolio-4").text("Portal Pekerjaan & Pusat Pelatihan");
    $("#portofolio-5").text("Profil Perusahaan & Manajemen Anggota");
    $("#portofolio-6").text("Website Kepuasan Pelanggan Apotek Roxy");
    $("#portofolio-7").text("Website Dokumen Elektronik Apotek Roxy");
    $("#portofolio-8").text("Website E-Procurement Produk Apotek Roxy");
    $("#portofolio-9").text(
      "Website Pemantauan Stok Bergerak & Tidak Bergerak"
    );
    $("#portofolio-10").text(
      "Website Layanan Pelanggan Proteknik Mega Persada"
    );
    $("#portofolio-11").text(
      "Website yang membantu siswa menemukan informasi dan lokasi sekolah terdekat"
    );
    $("#portofolio-12").text("Undangan Nikah Online");
    $('#portofolio-14').text('Platform Pendanaan Perusahaan');
    // $('#portofolio-13').text('');
    // Contact
    $("#contact-1").text("Kontak");
    $("#contact-2").text("Mari tetap berhubungan");
    $("#contact-3").text(
      "Hubungi saya melalui opsi di bawah ini untuk mengenal lebih jauh."
    );
    $("#contact-4").text("Telepon");
    $("#contact-5").text("Temukan saya disosial media");
    $("#contact-6").text("Hubungi saya melalui sosial media");
    $("#contact-7").text("Kirim saya pesan");
    $("#name").attr("placeholder", "Nama kamu...");
    $("#email").attr("placeholder", "Email kamu...");
    $("#message").attr("placeholder", "Pesan kamu...");
    $("#button").val("Kirimkan!");
    // Thankyu
    $("#thankyu-1").text("Luar Biasa");
    $("#thankyu-2").text("Kerja Pintar");
    $("#thankyu-3").text("Komunikasi Bagus");
  }
});
