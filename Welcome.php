<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
      body {
        background-image: url("image4.webp");
        background-repeat: no-repeat;
        background-size: cover;
      }

      .example {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-40%, -40%);
        width: 400px;
        font-size: 22px
      }
    </style>
    <script>
        function cls() {
            document.getElementById('input-text').value = "";
        }
    </script>
    <title class="title">Translation Example</title>
</head>
<body>
    <div class = "example">
        <h1>Translation Example</h1>
        <textarea rows = "5" cols="30" placeholder="Enter text to translate" id="input-text"></textarea><br/>
        <select id="target-language">
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="de">Telugu</option>
            <option value="de">Hindi</option>
            <option value="de">German</option>
        </select>
        <button>Translate</button>
        <button onClick="cls()" id="cls">Clear</button>
    </div>
</body>
</html>