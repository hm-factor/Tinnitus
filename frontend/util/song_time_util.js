export const formatTime = (time) => {

  let newTime = Math.floor(time);
  let min = (newTime % 60).toString();
  let sec = Math.floor(newTime / 60);

  if (sec <= 9) {
    sec = '0' + sec.toString();
  } else {
    sec = sec.toString();
  };

  return min + ':' + sec;
};