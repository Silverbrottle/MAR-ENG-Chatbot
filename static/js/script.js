/*
function talk(){
    var know = {
      "Hi" : "Hello, Developers Community Here.",
      "How are you" : "Good :)",
      "What can i do for you" : "Please Give us A Subscribe.",
      "ok" : "Thank You So Much <3",
      "Bye" : "Okay! Will meet soon. TC:).."
    };
    var user = document.getElementById('userBox').value;
      document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
      document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
      document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
  }
  
*/
/*
function getBotResponse() {
  var rawText = $('#textInput').val();
  var userHtml =
    '<div class="my-chat"><p class = "userText">' + rawText + '</p></div>';
  $('#textInput').val('');
  $('#chats').append(userHtml);
  document
    .getElementById('userInput')
    .scrollIntoView({ block: 'start', behaviour: 'smooth' });

  $.get('/get', { msg: rawText }).done(function (data) {
    var botHtml =
      '<div class="client-chat"><p class ="botText">' + data + '</p></div>';
    $('#chats').append(botHtml);
    document
      .getElementById('userInput')
      .scrollIntoView({ block: 'start', behaviour: 'smooth' });
  });
}
$('#textInput').keypress(function (e) {
  if (e.which == 13) {
    getBotResponse();
  }
});
$('#buttonInput').click(function () {
  getBotResponse();
});
*/
function getBotResponse() {
  var rawText = $('#textInput').val();
  var userHtml =
    '<br><div class="my-chat"><p class = "userText"><span>' +
    rawText +
    '</span></p></div>';
  $('#textInput').val('');
  $('#chatbox').append(userHtml);
  document
    .getElementById('userInput')
    .scrollIntoView({ block: 'start', behaviour: 'smooth' });

  $.get('/get', { msg: rawText }).done(function (data) {
    var botHtml =
      '<br><div class="client-chat"><p class ="botText"><span>' +
      data +
      '</span></p></div>';
    $('#chatbox').append(botHtml);
    document
      .getElementById('userInput')
      .scrollIntoView({ block: 'start', behaviour: 'smooth' });
  });
}
$('#textInput').keypress(function (e) {
  if (e.which == 13) {
    getBotResponse();
  }
});
$('#buttonInput').click(function () {
  getBotResponse();
});
