/*javascript for le lamantin cool*/
/*toggle sidebar*/

function toggleMenu() {
  var body = document.body;
  if (body.classList.contains('nav-opened')) {
    body.classList.remove('nav-opened');
    body.classList.add('nav-closed'); 
  } else {
    body.classList.remove('nav-closed')
    body.classList.add('nav-opened'); 
  }
}
