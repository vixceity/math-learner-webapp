
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="signup.css">
</head>
<body>
    <div class="container">
        <div class="form-box login">
            <form action="">
            <h1 class="header">Login</h1>
                <div class="input-box">
                    <input type="text" placeholder="Username" required>
                    <i class='bx  bx-user'></i>
                </div>
                <div class="input-box">
                    <input type="password" placeholder="Password" required>
                    <i class='bx  bx-lock'></i>
                </div>
                <div class="forgot-link">
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit" class="btn">Login</button>
            </form>
        </div>

        <div class="form-box register">
            <form action="">
            <h1 class="header">Register</h1>
            <div class="input-box">
                <input type="text" placeholder="Username" required>
                <i class='bx  bx-user'></i>
            </div>
            <div class="input-box">
                <input type="email" placeholder="Email" required>
                <i class='bx  bx-envelope'></i>
            </div>
            <div class="input-box">
                <input type="password" placeholder="Password" required>
                <i class='bx  bx-lock'></i>
            </div>
            <button type="submit" class="btn">register</button>
            </form>
        </div>

        <div class="toggle-box">
            <div class="toggle-panel toggle-left">
                <i class='bx bx-arrow-left-stroke prev'></i>
                <h1 class="header"> Hello, Welcome!</h1>
                <p>Don't have an account?</p>
                <button class="btn register-btn">Register</button>
            </div>

            <div class="toggle-panel toggle-right">
                <h1 class="header"> Welcome back!</h1>
                <p class="text">Already have an account?</p>
                <button class="btn login-btn">Login</button>
            </div>
        </div>
    </div>
<script src="signup.js" defer></script>"
</body>
</html>