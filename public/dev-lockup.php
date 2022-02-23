<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body, html {
            font-family: Arial, Helvetica, sans-serif;;
        }

        form {
            width: fit-content;
            padding: 60px;


            height: fit-content;
            margin: 0 auto;
            margin-top: 2%;
            background-color: #f9f9f9
        }

        /* Full-width input fields */
        .form-control {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }

        /* Set a style for all buttons */
        button {
            background-color: #7E097C;
            color: white;
            border: none;
            cursor: pointer;
            width: 60%;
            margin: 5px auto;
            padding: 15px;
            box-shadow: 0px 5px 5px #ccc;
            border-radius: 5px;
            border-top: 1px solid #e9e9e9;
            display: block;
            text-align: center;
        }

        .signup {
            background-color: #7E097C;
            margin-bottom: 20px;
        }

        .login-box {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            padding: 15px;
            background-color: #fff;
            box-shadow: 0px 5px 5px #ccc;
            border-radius: 5px;
            border-top: 1px solid #e9e9e9;
        }

        button:hover, #btn-signup:hover {
            opacity: 0.8;
        }


        /* Center the image and position the close button */
        .imgcontainer {
            text-align: center;
            margin: 24px 0 12px 0;
            position: relative;
        }

        img.avatar {
            width: 40%;
            border-radius: 50%;
        }

        .container {
            padding: 16px;
        }

        span.psw {
            float: right;
            padding-top: 16px;
        }

        h2, h4, p {
            text-align: center;
        }
        h4{
            color: red
        }


        /* Change styles for span and cancel button on extra small screens */
        @media screen and (max-width: 300px) {
            span.psw {
                display: block;
                float: none;
            }

        }
    </style>
</head>
<body>


<form action="/" method="get">

    <h2>Welcome To Issuer Pixel</h2>
    <?php echo "error" ?>

    <div class="container">

        <label for="email"><b>Username</b></label>
        <input
            type="text"
            class="form-control"
            name="username"
            required
        >


        <label for="name"><b>Password</b></label>
        <input
            type="password"
            class="form-control"
            name="password"
            required>

        <button type="submit">Login</button>
    </div>
</form>
</body>
</html>
