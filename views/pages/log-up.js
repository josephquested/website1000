module.exports = (data) => {
  if (!data.message) data.message = ''

  return `
    <h3>log up</h3>
    <form action="/log/up" method="post">
      user: <input type="text" name="name"><br>
      pass: <input type="password" name="password"><br><br>
      <input type="submit" value="Submit">
      <p>${data.message}</p>
    </form>
  `
}
