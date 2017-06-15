(function() {
  'use strict';

  // use github api token for development purposes
  // will not be present in production
  var headers = {};
  if (githubToken) {
    // set the AJAX header to send the token
    headers['Authorization'] = 'token ' + githubToken;
  }

  var url = 'https://api.github.com/users/AryDavani/repos';
  fetch(url, {headers: headers}).then(function(response){
    response.json().then(function(data){
      console.log(data);

      var rightSide = document.querySelector('.right-side');
      for (var i = 0; i < data.length; i++) {
        var divTag = document.createElement('div');
        divTag.className = 'repo-list';
        var aTag = document.createElement('a');
        var pTag = document.createElement('p');
        pTag.textContent = moment(data[i].updated_at).fromNow();
        aTag.href = data[i].html_url;
        aTag.textContent = data[i].name;
        divTag.appendChild(aTag);
        divTag.appendChild(pTag);
        rightSide.appendChild(divTag);

      }
    });

  });

}());
