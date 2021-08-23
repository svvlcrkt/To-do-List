let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');

// function add to element on button click

btn.addEventListener('click',() => {  //kullanıcı dokümanda herhangi bir yere tıkladığında çıktısı fonksiyon içerisinde olanlardır.//
    let txt = input.value;  //kullanıcının girdiği metni txt değişkeninde tuttuk
    if(txt === "" ){  //eğer txt boş ise 
        alert('you must write something');  //ekrana hata verilmesini sağladık
    }
    else{  //yazılan metin boş değilse 
        let li = document.createElement('li'); //dokümanda bir li elementi oluşturduk ve bunu li değişkeninde tuttuk
        li.innerHTML = txt; //inputta yazılan değeri (txt), li değişkeni içerisine yazdık
        list.insertBefore(li,list.childNodes[0]);  //li değişkenini list değişkeninin ilk öğesi olarak ekler
        input.value='';  //input değerini 0 layarak kullanıcıya her seferinde metin kutusu kısmı temiz şekilde sunulur
    }
    

})
//eğer enter tuşu ile de yazılan metnin listeye eklenmesini istersek kullanabiliriz
input.addEventListener("keyup", function(event) {  
    if (event.keyCode === 13) {  
     event.preventDefault();
     document.getElementById("btn").click();
    }
  });


//allows us to mark the done subj.

list.addEventListener('click',e =>{
    //console.log(e);  

    if(e.target.tagName == 'LI'){   //toggle yerine if-else de kullanabiliriz
        console.log(e.target.classList); 
        if(e.target.classList.value == ""){
            e.target.classList.add("checked");
        }
        else{
            e.target.classList.remove("checked");
        }
    }

// e.target.classList.toggle('checked');  //checked ise üzeri çizilmemiştir,değil ise çizilmiştir

})





