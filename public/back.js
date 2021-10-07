// let nameValue = document.querySelector(".inputNamaValue")
// let namePage = document.querySelector("#Awal")
// let homePage = document.querySelector("#Home")
// function masuk(){
//     if (!nameValue.value){
//         alert('Nama tidak boleh kosong!')
//     } else {
//         namePage.style.display = "None"
//         homePage.style.display = "block"
    
//         document.querySelector(".welcome").innerHTML = `Assalamu'alaikum, ${nameValue.value}`
//     }
// }

if (localStorage.length === 0) {
  let masukanNama = prompt("Nama kamu siapa?")
  
  while (masukanNama === "") {
      masukanNama = [prompt("Nama tidak boleh kosong!")]
  }
  
  if (masukanNama ) {
      document.querySelector(".welcome").innerHTML = `Assalamu'alaikum, ${masukanNama}`
      document.querySelector(".welcomeP").innerHTML = `Terimakasih telah mengunjungi Web Page HRM Sanur`
  }
  
  localStorage.setItem('Name', masukanNama);
} else {
  document.querySelector(".welcome").innerHTML = `Assalamu'alaikum, ${localStorage.Name}`
  document.querySelector(".welcomeP").innerHTML = `Terimakasih telah mengunjungi Web Page HRM Sanur`
}




// <!doctype html>
// <html lang="en">
//   <head>
//     <!-- Required meta tags -->
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">

  // <!-- Bootstrap CSS -->
  // <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
  // <!-- MY CSS -->
  // <link rel="stylesheet" href="style.css">
  // <!-- MY FONTS -->
  // <link rel="preconnect" href="https://fonts.googleapis.com">
  // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  // <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet">
  
  // <link rel="preconnect" href="https://fonts.googleapis.com">
  // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  // <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap" rel="stylesheet">
  
//     <title>HRM Sanur</title>
//   </head>
//   <body>
//     <!-- <section id="Awal">
//       <div class="container">
//         <div class="row text-center">
//           <div class="col">
//             <h3 class="textInputNama">Nama kamu siapa?</h3>
//           </div>
//         </div>
//         <div class="row text-center mt-3 inputNama">
//           <div class="col-lg-12 col-md-12">
//             <div class="input-group mb-3">
//               <span class="input-group-text" id="inputGroup-sizing-default">Nama:</span>
//               <input type="text" class="form-control inputNamaValue" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
//             </div>
//           </div>
//         </div>

//         <div class="row text-center">
//           <div class="col">
//             <button type="button" class="btn btn-success text-center" onclick="masuk()">Masuk</button>
//           </div>
//         </div>

//         <div class="row text-center">
//           <div class="col">
//             <p class="webPageText">Web Page HRM Sanur 2021</p>
//           </div>
//         </div>

//       </div>
//     </section> -->

  // <section id="Home">
  //   <div class="row text-center">
  //     <div class="col">
  //       <h3 class="welcome"></h3>
  //     </div>
  //   </div>

  //   <div class="row text-center">
  //     <div class="col">
  //       <p class="welcomeP"></p>
  //     </div>
  //   </div>
  //   <img src="./IMG/Masjid.png" alt="" class="imgMasjid">

  //   <p style="margin-left: 50px; margin-right: 40px; font-size: 15px;">
  //     "Pemuda yang hatinya terpaut pada Masjid, akan mendapatkan naungan pada 
  //     hari dimana tidak ada naungan selain Naungan Allah 'Azza Wa Jalla"</p>
  // </section>

//     <!-- Optional JavaScript; choose one of the two! -->
//     <script src="./back.js">sdfdf</script>
//     <!-- Option 1: Bootstrap Bundle with Popper -->
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>

//     <!-- Option 2: Separate Popper and Bootstrap JS -->
//     <!--
//     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossorigin="anonymous"></script>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
//     -->
//   </body>
// </html>