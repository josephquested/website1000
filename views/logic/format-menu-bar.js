module.exports = function (data) {
  var html = ``

  if (!data.id) {
    html += `
      <form style="display: inline" action="/log/in">
          <input type="submit" value="log in" />
      </form>
      <form style="display: inline" action="/log/up">
          <input type="submit" value="log up" />
      </form>
    `
  } else {
    html += `
      <form style="display: inline" action="/user/${data.name}">
          <input type="submit" value="${data.name}" />
      </form>
      <form style="display: inline" action="/log/out">
          <input type="submit" value="log out" />
      </form>
    `
  }
  return html
}