<!DOCTYPE html>
<html>

<head>
	<title>
		Get value of selected
		radio button
	</title>
</head>

<body>
	<p>
		Select a radio button and click on Submit.
	</p>
	
	Gender:
	<input type="radio" name="gender" value="M">Male
	<input type="radio" name="gender" value="F">Female
	<input type="radio" name="gender" value="O">Others
	
	<br>
	
	<button type="button" onclick="displayRadioValue()">
		Submit
	</button>
	
	<br>
	
	<label id="result"></label>
	
	<script>
		function displayRadioValue() {
			var ele = document.getElementsByName('gender');
			var ex ="";
			for(i = 0; i < ele.length; i++) {
				if(ele[i].checked)
				  ex = ele[i].value;
			}
            console.log(ex);
		}
	</script>
</body>
</html>					
