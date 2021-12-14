const filterHandler = (data,payload)=>{
  if(payload.length  === 0){
    return data
  }else{
    payload = payload.map(e=>e.toLowerCase());
    return data.filter(first=>first.types.some(second=>payload.includes(second.type.name)));
  }
}

export default filterHandler;