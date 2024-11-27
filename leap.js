let yr=2004;
if (yr%4==0){
    if (yr%100==0){
        if (yr%400==0){
            console.log("leap year");
        }
        else{
            console.log("not leap year");
        }
    }
    else{
        console.log("leap year");
    }
}
else{
    console.log("not leap year");
}



// document.write('-----------------------------------------');
//  for (var yr=2014; yr<=2050; yr++){
//         var date=new Date(yr,0,1);
    
//         if (date.getDay()==6){
//             document.write(yr);
//         }
//  }
//  document.write('-----------------------------------------');