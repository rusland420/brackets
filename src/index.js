module.exports = function check(str, bracketsConfig) {
  let arrBrckts=[]
  let arrStr= [...str];
  let rslt= arrStr.length/2
if(arrStr.length%2!=0){
  return false
}
for(let i=0;i<arrStr.length;i++){
  for(let j=0;j<bracketsConfig.length;j++){
    if(arrStr[i] === bracketsConfig[j][0] && arrStr[i+1] === bracketsConfig[j][1]){
      arrStr.splice(i, 2);
      i=-1
    }
    }
  }
 if(arrStr.length===0){
  // console.log(arrBrckts)
  return true
 } 
 else{
  console.log(arrStr,str)
  return false
 }
}  


  
