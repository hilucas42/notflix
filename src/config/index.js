const HOST = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://notflix-unlicensed.herokuapp.com';

export default {
  HOST,
};
