<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{title}}</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        button{
            color: white;
            font-size: 16px;
            background: cornflowerblue;
            min-width: 100px;
            height: 40px;
            display: block;
            cursor: pointer;
            border-radius: 4px;
        }
        html,body{
            width: 100%;
            height: 100%;
            background: #ccc;
        }
        button a{
            color: white;
            text-decoration: none;
        }
        .box{
            display: flex;
            width: 100%;
            height: 300px;
            align-items: center;
            justify-content: space-around;
        }
    </style>
</head>
<body>
<div class="box">
    {{#each files}}
    <button>
        <a href="{{../dir}}/{{this}}">{{this}}</a>
    </button>
    {{/each}}
</div>

</body>
</html>