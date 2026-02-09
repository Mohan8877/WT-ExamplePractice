<?php
// --------------------
// Initialize variables
// --------------------
$errors = [];
$name = $email = $age = "";

// --------------------
// Form submit check
// --------------------
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // --------
    // Name validation
    // --------
    if (empty($_POST["name"])) {
        $errors["name"] = "Name is required";
    } else {
        $name = trim($_POST["name"]);
        if (!preg_match("/^[a-zA-Z ]{3,50}$/", $name)) {
            $errors["name"] = "Name must contain only letters and spaces (3–50 chars)";
        }
    }

    // --------
    // Email validation
    // --------
    if (empty($_POST["email"])) {
        $errors["email"] = "Email is required";
    } else {
        $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors["email"] = "Invalid email format";
        }
    }

    // --------
    // Age validation
    // --------
    if (empty($_POST["age"])) {
        $errors["age"] = "Age is required";
    } else {
        $age = (int)$_POST["age"];
        if ($age < 18 || $age > 60) {
            $errors["age"] = "Age must be between 18 and 60";
        }
    }

    // --------
    // Password validation
    // --------
    if (empty($_POST["password"])) {
        $errors["password"] = "Password is required";
    } else {
        $password = $_POST["password"];
        if (!preg_match("/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/", $password)) {
            $errors["password"] = "Password must be strong (A-Z, a-z, 0-9, special char)";
        }
    }

    // --------
    // Confirm password
    // --------
    if ($_POST["password"] !== $_POST["confirm_password"]) {
        $errors["confirm_password"] = "Passwords do not match";
    }

    // --------
    // If no errors → process data
    // --------
    if (empty($errors)) {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Example success message (DB insert would go here)
        echo "<h2 style='color:green'>Registration Successful!</h2>";
        echo "<p>Name: " . htmlspecialchars($name) . "</p>";
        echo "<p>Email: " . htmlspecialchars($email) . "</p>";
        echo "<p>Age: $age</p>";

        // Stop further execution
        exit;
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>PHP Form Validation</title>
    <style>
        body { font-family: Arial; background: #f4f4f4; }
        .container { width: 400px; margin: 40px auto; background: #fff; padding: 20px; }
        .error { color: red; font-size: 14px; }
        input { width: 100%; padding: 8px; margin-top: 5px; }
        button { padding: 10px; background: #007bff; color: white; border: none; width: 100%; }
    </style>
</head>
<body>

<div class="container">
    <h2>User Registration</h2>

    <form method="POST" action="">

        <label>Name</label>
        <input type="text" name="name" value="<?= htmlspecialchars($name) ?>">
        <div class="error"><?= $errors["name"] ?? "" ?></div>

        <label>Email</label>
        <input type="text" name="email" value="<?= htmlspecialchars($email) ?>">
        <div class="error"><?= $errors["email"] ?? "" ?></div>

        <label>Age</label>
        <input type="number" name="age" value="<?= htmlspecialchars($age) ?>">
        <div class="error"><?= $errors["age"] ?? "" ?></div>

        <label>Password</label>
        <input type="password" name="password">
        <div class="error"><?= $errors["password"] ?? "" ?></div>

        <label>Confirm Password</label>
        <input type="password" name="confirm_password">
        <div class="error"><?= $errors["confirm_password"] ?? "" ?></div>

        <br><br>
        <button type="submit">Register</button>

    </form>
</div>

</body>
</html>
