export const formatTime = (time) => {
  
  let newTime = Math.floor(time);
  let sec = (newTime % 60);
  let min = Math.floor(newTime / 60).toString();
  
  if (min === "0") {
    min = "00"
  };

  if (sec <= 9) {
    sec = '0' + sec.toString();
  } else {
    sec = sec.toString();
  };
  
  return min + ':' + sec;
};