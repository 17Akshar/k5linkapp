function addData(){
  var dbox = document.getElementById('box')
  fetch('https://script.google.com/macros/s/AKfycbzA_sOql4IH_AlihWF389iQJE3subJn9rDQyRQ0Q_upX15YZJWCwVg0Rc5Rxh69g_xsIw/exec').then((response)=>response.json()).then((data)=>{
    let html = ""
    if(data.data){
      data.data.forEach((ele)=>{
        html += `
        <a href="${ele.link}" target="_blank" class="card  text-[#8f4728] hover:bg-[#cc5100] hover:text-[#ffff] hover:cursor-pointer w-full h-[60px] sm:h-[80px] bg-[#ffcfaf] flex items-center justify-evenly">
        <div class="card  text-[#8f4728] hover:bg-[#fff] hover:text-[#cc5100] hover:cursor-pointer w-full h-[60px] sm:h-[80px] bg-[#ffcfaf] flex items-center justify-evenly">
          <h1 class="text-lg sm:text-xl h-full w-[85%] flex items-center justify-start pl-3">${ele.link_name}</h1>
          <i class="fa-solid fa-link text-lg sm:text-xl h-full w-[15%]  flex items-center justify-center"></i>
        </div>
      </a>
        `
      })
    }
    else{
      console.log('nodata')
    }
    dbox.innerHTML = html
  })
}
addData()