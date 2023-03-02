<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
      body {
        background-image: url("image3.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
      }
    </style>
    <title class="title">Translation Example</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://apis.google.com/js/api.js"></script>
    <!-- <bg-img src = "image3.jpeg" width = "1500px" height="850px"> -->
    <script>
        // load Google Cloud Translation API
        function onLoad() {
            gapi.client.load('translate', 'v2', function() {
                console.log('Google Cloud Translation API loaded.');
            });
        }
        // translate text using Google Cloud Translation API
        function translateText() {
            var inputText = document.getElementById('input-text').value;
            var targetLanguage = document.getElementById('target-language').value;
            gapi.client.language.translations.list({
                'q': inputText,
                'source': 'en',
                'target': targetLanguage,
            }).then(function(response) {
                var translatedText = response.result.data.translations[0].translatedText;
                document.getElementById('output-text').innerHTML = translatedText;
            }, function(reason) {
                console.log('Error: ' + reason.result.error.message);
            });
        }

        function clear() {
            document.getElementById("text").value = "";
        }
    </script>
</head>
<body onload="onLoad()">
    <h1>Translation Example</h1>
    <input type="text" id="input-text" placeholder="Enter text to translate">
    <select id="target-language">
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">Telugu</option>
        <option value="de">Hindi</option>
        <option value="de">German</option>
    </select>
    <button onclick="translateText()">Translate</button>
    <button onclick="clear()" id="text">Clear</button>
    <div id="output-text"></div>
</body>
</html>