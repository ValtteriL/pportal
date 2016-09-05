<?php
include_once 'includes/register.inc.php';
include_once 'includes/functions.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Secure Login: Registration Form</title>
        <script type="text/JavaScript" src="js/sha512.js"></script> 
        <script type="text/JavaScript" src="js/forms.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script type="text/JavaScript" src="js/jquery.easing.min.js"></script>
        <link rel="stylesheet" href="styles/regjq.css" />
    </head>

    <body>
        <!-- Registration form to be output if the POST variables are not
        set or if the registration script caused an error. -->
        <h1>Register with us</h1>
        <?php
        if (!empty($error_msg)) {
            echo $error_msg;
        }
        ?>
<!--        <ul>
            <li>Passwords must be at least 8 characters long</li>
        </ul>

        <form action="<?php echo esc_url($_SERVER['REQUEST_URI']); ?>" 
                method="post" 
                name="registration_form">
	    *Email: <input type="text" name="email" id="email" /><br>
            *Password: <input type="password"
                             name="password" 
                             id="password"/><br>
            *Confirm password: <input type="password" 
                                     name="confirmpwd" 
                                     id="confirmpwd" /><br>
	    *First name: <input type="text" name="fname" id="fname" /><br>
	    *Last name: <input type="text" name="lname" id="lname" /><br>
	    Age: <input type="number" name="age" id="age" max="130" /><br>
            *Phone number: <input type="tel" name="phone" id="phone" maxlength="10" /><br>
	    Image: <input type="file" accept="image/*" name="image" id="image" /><br>
	    Description: <textarea rows="3" cols="50" maxlength="140" style="resize:none" name="desc" id="desc"></textarea><br>

	    
            <input type="button" 
                   value="Register" 
                   onclick="return regformhash(this.form,
                                   this.form.email,
                                   this.form.password,
                                   this.form.confirmpwd,
				   this.form.fname,
				   this.form.lname,
				   this.form.phone,
				   this.form.age);" /> 
        </form>

-->

        <form id="msform">
	<!-- progressbar -->
	<ul id="progressbar">
		<li class="active">Account Setup</li>
		<li>Personal Details</li>
		<li>Your Profile</li>
		<li>Area of Working</li>
	</ul>
	<!-- fieldsets -->
	<fieldset>
		<h2 class="fs-title">Create your account</h2>
		<h3 class="fs-subtitle">This is step 1</h3>
		<input type="text" name="email" placeholder="Email" />
		<input type="password" name="pass" placeholder="Password" />
		<input type="password" name="cpass" placeholder="Confirm Password" />
		<input type="button" name="next" class="next action-button" value="Next" />
	</fieldset>
	<fieldset>
		<h2 class="fs-title">Personal Details</h2>
		<h3 class="fs-subtitle">We will never sell it</h3>
		<input type="text" name="fname" placeholder="First Name" />
		<input type="text" name="lname" placeholder="Last Name" />
		<input type="tel" name="phone" placeholder="Phone" />
		<input type="button" name="previous" class="previous action-button" value="Previous" />
		<input type="button" name="next" class="next action-button" value="Next" />
	</fieldset>
	<fieldset>
		<h2 class="fs-title">Your Profile</h2>
		<h3 class="fs-subtitle">Spending a while might boost sales!</h3>
		<input type="file" name="image" accept="image/*" />
		<input type="number" name="age" placeholder="Age (Optional)" />
		<textarea rows="5" cols="50" maxlength="140" name="desc" style="resize:none" placeholder="Description (Optional)"></textarea>
		<input type="button" name="previous" class="previous action-button" value="Previous" />	
		<input type="button" name="next" class="next action-button" value="Next" />
	</fieldset>
	<fieldset>
		<h2 class="fs-title">Area of working</h2>
		<h3 class="fs-subtitle">Your services will be offered to people from your area</h3>
		<input type="text" name="latitude" placeholder="Latitude" />
		<input type="text" name="longitude" placeholder="Longitude" />
		<input type="text" name="radius" placeholder="Radius" />
		<input type="button" name="previous" class="previous action-button" value="Previous" />
                <input type="submit" name="submit" class="submit action-button" value="Submit" />
	</fieldset>
        </form>
        <p>Return to the <a href="login.php">login page</a>.</p>

        <script type="text/JavaScript" src="js/regjq.js"></script>
    </body>
</html>
