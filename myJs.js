let a = {
    'Ювенал' : "'В здоровом теле — здоровый дух.'",
    'Аристотель' : "'Ничто так не истощает и не разрушает человеческий организм, как физическое бездействие.'",
    'Виктор Гюго' : "'Нужно поддерживать крепость тела, чтобы сохранить крепость духа.'"
    
    }
    
    // let btn_save = document.querySelector('.save');
    
  document.querySelector('.btn').onclick = function quoteA (){
    
    let text = document.querySelector('.text');
    let text_author = document.querySelector('.text_author');
    
    let b = Object.keys(a);
    let c = b[Math.floor(Math.random()* b.length)];
    let ab = a[c];
    text.textContent = ab;
    text_author.textContent = c;

    
      console.log(a);
    }

  document.querySelector('.save').onclick = function save(){
    let quote_author = document.querySelector('.quote_author').value;
    let quote = document.querySelector('.quote').value;
    a[quote] = `'${quote_author}'`;
    document.querySelector('.quote').value = '';
    document.querySelector('.quote_author').value = '';
        // console.log(a);
      }


// let a = [1,2,'ty'];
//  let quote = document.querySelector('.quote').value;
//   const inp = document.querySelector('.test');
//   let out = document.querySelector('.out');
// document.querySelector('.btn').onclick = function quoteA (){
    
//     let rand = Math.floor(Math.random()*a.length);
//     let rValue = a[rand];
//     out.textContent = rValue;
// }
// document.querySelector('.test2').onclick = function(){

//   a.push(inp.value);
//    document.querySelector('.test').value = '';
  
// }
  
