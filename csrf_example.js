function executeScript() {
  fetch('api/users',
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'http://localhost:8080/application/json',
    'X-XSRF-Token': document.cookie.valueOf('XSRF-TOKEN').split("=")[1],
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
.catch(error=>console.error('Error', error));
}
