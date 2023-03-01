const url = window.location.href;
const suffix = url.substring(url.lastIndexOf('/') + 1);

switch (suffix) {
  case 'bimtl':
    window.location.href = 'http://bim.hoch.in/bimtl';
    break;
  case 'bimws':
    window.location.href = 'http://bim.hoch.in/bimws';
    break;
  case 'seppt':
    window.location.href = 'http://bim.hoch.in/seppt';
    break;
  default:
    console.log('No redirect necessary');
}
