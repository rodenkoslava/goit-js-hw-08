import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoRef = document.getElementById('vimeo-player');

const player = new Player(videoRef);

const getLocal = localStorage.getItem('videoplayer-current-time');

player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);

getLocal &&
  player
    .setCurrentTime(getLocal)
    .then(() => {
      localStorage.removeItem('videoplayer-current-time');
    })
    .catch(function (error) {
      console.error(error);
    });
