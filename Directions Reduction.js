#01
function dirReduc(arr){
  let result=[]
   if (arr.length==1)  return arr
  console.log(arr)
  for (let i=0;i<arr.length;i++){
    if((arr[i]=="NORTH" && arr[i+1]=="SOUTH")|| (arr[i]=="SOUTH" && arr[i+1]=="NORTH") ) {
      i++
    }
    else if((arr[i]=="EAST" && arr[i+1]=="WEST" )|| (arr[i]=="WEST" && arr[i+1]=="EAST" ) ) {
      i++
    }
    else{
      if(result[result.length - 1] === "NORTH" && arr[i] === "SOUTH" || result[result.length - 1] === "SOUTH" && arr[i] === "NORTH" || result[result.length - 1] === "EAST" && arr[i] === "WEST" || result[result.length - 1] === "WEST" && arr[i] === "EAST"){
                result.pop()
            } else {
                result.push(arr[i])
            }
    }
  }
  
    return result

}


#02
function dirReduc(arr){
  for(let i=0; i<arr.length; i++){
      switch ( arr[i] + arr[i+1] ){
      
              case "EASTWEST":
              arr.splice(i,2);
              i = i - i -1;  // ( i = -1 ) => reset the loop to scan the array from i=0  
              break;
         
              case "WESTEAST":
              arr.splice(i,2);
              i = i - i -1;
              break;
         
              case "NORTHSOUTH":
              arr.splice(i,2);
              i = i - i -1;
              break;
         
              case "SOUTHNORTH":
              arr.splice(i,2);
              i = i - i -1;
              break;
      }
  }
  return arr
}



#02b
function dirReduc(arr){
  for (let i=0;i<arr.length;i++){
    switch (arr[i]+arr[i+1]){
        case "NORTHSOUTH":
        case "SOUTHNORTH":
        case "EASTWEST":
        case "WESTEAST":
        arr.splice(i,2)
          i=-1
          break;
    }
  }
  return arr
}
