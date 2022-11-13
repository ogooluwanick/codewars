#01
function(busStops){
  let peopleInBus = 0;
  busStops.map(([enter, left]) => {
    peopleInBus += enter - left;
  })
  
  return peopleInBus
}


#02
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

#03
const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)
