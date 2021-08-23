const colorBtn = document.querySelector('.colorBtn');
const colorBcg = document.querySelector('body');

//const colorArr = ['blue','red','green','#000'];
const colorArr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

colorBtn.addEventListener('click',changeColor);

function changeColor(){
// change background color using the array in line 4P
    // //colorBcg.style.backgroundColor = colorArr[2];
    //  let random = Math.floor(Math.random()*colorArr.length);
    //  colorBcg.style.backgroundColor = colorArr[random];

//change background color using array in line 5
    let hash = '#';
    for(i = 0 ; i < 6 ; i++){
        let random = Math.floor(Math.random()*colorArr.length); //generates random number using the length of array
        hash += colorArr[random];
        //console.log (hash);
        colorBcg.style.backgroundColor = hash;
    }

    
}

