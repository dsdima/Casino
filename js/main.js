let block1=document.getElementById('block1');
let block2=document.getElementById('block2');
var name1=document.getElementById('name1');
var startSum=document.getElementById('startSum');

//var name2=document.setElementById('name2');
var index=1;
var s1;
var s2;
var s3;
block2.hidden=true;
button1.onclick=function(){
    block1.hidden=true;
    block2.hidden=false;
    ///////////////////// Введение имя /////////////////////////////
    localStorage.setItem('Имя', name1.value);
    name2.innerHTML=localStorage.getItem('Имя');
    ///////////////////// Введение сумы /////////////////////////////
    localStorage.setItem('Стартовая сума', parseInt(startSum.value));
    many.innerHTML=localStorage.getItem('Стартовая сума');
    win.innerHTML='0';
}
//////////////////// Выбор ставки ////////////////////////////////
var rate1=document.forms.one.rate1;
//var con=document.getElementsByClassName('con');
var option1;
rate1.addEventListener('change', function(){
    for(let i=0;i<rate1.options.length;i++){
        option1=rate1.options[i];
        if(option1.selected){
            localStorage.setItem('Ставка', parseInt(option1.value));
            TG.innerHTML=localStorage.getItem('Ставка');
            TA.innerHTML=localStorage.getItem('Ставка');
            TO.innerHTML=localStorage.getItem('Ставка');
            TF.innerHTML=localStorage.getItem('Ставка');
            TR.innerHTML=localStorage.getItem('Ставка');
            TS.innerHTML=localStorage.getItem('Ставка');
            DS.innerHTML=localStorage.getItem('Ставка');
            OS.innerHTML=localStorage.getItem('Ставка');
        }
    }
});
var rate2=document.forms.two.rate2;
//var con=document.getElementsByClassName('con');
var option2;
rate2.addEventListener('change', function(){
    for(let i=0;i<rate2.options.length;i++){
        option2=rate2.options[i];
        if(option2.selected){
            //localStorage.removeItem('Ставка');
            localStorage.setItem('Ставка', parseInt(option2.value));
            TG.innerHTML=localStorage.getItem('Ставка');
            TA.innerHTML=localStorage.getItem('Ставка');
            TO.innerHTML=localStorage.getItem('Ставка');
            TF.innerHTML=localStorage.getItem('Ставка');
            TR.innerHTML=localStorage.getItem('Ставка');
            TS.innerHTML=localStorage.getItem('Ставка');
            DS.innerHTML=localStorage.getItem('Ставка');
            OS.innerHTML=localStorage.getItem('Ставка');
        }
    }
});
button2.onclick=function(){
    block2.hidden=true;
    block1.hidden=false;
    localStorage.clear();
    //name2.innerHTML='';
    
}
var srcPic1;
function start1(){
    index++;
    if(index>7) index=1;
    srcPic1 = 'img/pict/'+index+'.gif';
    pic1.setAttribute('src',srcPic1);
    
}
var srcPic2;
function start2(){
    index++;
    if(index>7) index=1;
    srcPic2 = 'img/pict/'+index+'.gif';
    pic2.setAttribute('src',srcPic2);
}
var srcPic3;
function start3(){
    index++;
    if(index>7) index=1;
    srcPic3 = 'img/pict/'+index+'.gif';
    pic3.setAttribute('src',srcPic3);
}
////////////////////////// Запуск рулетки ///////////////////////////////////
start.onclick=function(){
    if((parseInt(localStorage.getItem('Стартовая сума'))>=parseInt(localStorage.getItem('Ставка')))||(parseInt(localStorage.getItem('Остаток'))>=parseInt(localStorage.getItem('Ставка')))){
        s1=setInterval(start1,100);
        s2=setInterval(start2,150);
        s3=setInterval(start3,200);
    }
    else alert('У Вас не хватает денег');
    ////////////////////////// Остановка рулетки ///////////////////////////////////
    stopB.onclick=function(){
        clearInterval(s1);
        clearInterval(s2);
        clearInterval(s3);
        /////////////////////////////////// Проверка выигрыша /////////////////////////////////////////
        var srcPic11 = 'img/pict/'+1+'.gif';
        var srcPic12 = 'img/pict/'+2+'.gif';
        var srcPic13 = 'img/pict/'+3+'.gif';
        var srcPic14 = 'img/pict/'+4+'.gif';
        var srcPic15 = 'img/pict/'+5+'.gif';
        var srcPic16 = 'img/pict/'+6+'.gif';
        var srcPic17 = 'img/pict/'+7+'.gif';
        if(srcPic1==srcPic11&&srcPic2==srcPic11&&srcPic3==srcPic11){
            var q=localStorage.getItem('Ставка')*800;
            localStorage.setItem('Выигрыш', parseInt(q));
        }
        else if(srcPic1==srcPic12&&srcPic2==srcPic12&&srcPic3==srcPic12){
            var q=localStorage.getItem('Ставка')*200;
            localStorage.setItem('Выигрыш', parseInt(q));
        }
        else if(srcPic1==srcPic13&&srcPic2==srcPic13&&srcPic3==srcPic13){
            var q=localStorage.getItem('Ставка')*80;
            localStorage.setItem('Выигрыш', parseInt(q));
        }
        else if(srcPic1==srcPic14&&srcPic2==srcPic14&&srcPic3==srcPic14){
            var q=localStorage.getItem('Ставка')*40;
            localStorage.setItem('Выигрыш', parseInt(q));
        }
        else if(srcPic1==srcPic15&&srcPic2==srcPic15&&srcPic3==srcPic15){
            var q=localStorage.getItem('Ставка')*20;
            localStorage.setItem('Выигрыш', parseInt(q));
        }
        else if((srcPic1==srcPic16||srcPic1==srcPic17)&&(srcPic2==srcPic16||srcPic2==srcPic17)&&(srcPic3==srcPic16||srcPic3==srcPic17)){
            var q=localStorage.getItem('Ставка')*10;
            localStorage.setItem('Выигрыш', parseInt(q));
        }
        else if(((srcPic1 == srcPic16 || srcPic1 == srcPic17) && (srcPic2 == srcPic16 || srcPic2 == srcPic17)) || ((srcPic1 == srcPic16 || srcPic1 == srcPic17) && (srcPic3 == srcPic16 || srcPic3 == srcPic17)) || ((srcPic2 == srcPic16 || srcPic2 == srcPic17) && (srcPic3 == srcPic16 || srcPic3 == srcPic17))){
            var q=localStorage.getItem('Ставка')*5;
            localStorage.setItem('Выигрыш', parseInt(q));
        }
        else if((srcPic1 == srcPic16 || srcPic1 == srcPic17) || (srcPic2 == srcPic16 || srcPic2 == srcPic17) || (srcPic3 == srcPic16 || srcPic3 == srcPic17)){
            var q=localStorage.getItem('Ставка')*2;
            localStorage.setItem('Выигрыш', parseInt(q));
        }
        else{
            var q=localStorage.getItem('Ставка')*0;
            localStorage.setItem('Выигрыш', parseInt(q));
        }
        win.innerHTML=localStorage.getItem('Выигрыш');
        var ost=(parseInt(localStorage.getItem('Стартовая сума'))-parseInt(localStorage.getItem('Ставка'))+parseInt(localStorage.getItem('Выигрыш')));
        localStorage.setItem('Остаток', parseInt(ost));
        localStorage.setItem('Стартовая сума', parseInt(ost));
        many.innerHTML=localStorage.getItem('Остаток');
    }
}



