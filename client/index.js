$(document).ready(function () {
  showMemos()
})

function showMemos() {
  $.ajax({
  type: 'GET',
  url: 'http://localhost:3000/',
  success: function(resp) {
    for (let i = 0; i < resp.length; i++) {
      let memo = resp[i]
      $('#add-memo').append(
        `<tr>
          <td>${memo.id}</td>
          <td>${memo.text}</td>
        </tr>`
      )
    }
  },
  error: function() {
    console.log('GET Response Error')
  }
});
}
