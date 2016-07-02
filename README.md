# selective-div
jQuery plugin for having DIV elements bahaving like checkboxes or radio buttons 
## Getting Started
1. Download *selective-div-plugin-1.0.0.js* from *dist* directory

2. Add *jQuery* and *selective-div* ```<script>``` elements to your HTML ```<head>```: 
    ```html
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="selective-div-plugin-1.0.0.js"></script>
    ```
3. Create a couple of div elements you want to behave like radio buttons to your HTML ```<body>```
    ```html
    <div class="selective-div" data-group="group1" data-value="option1">Option #1</div>
    <div class="selective-div" data-group="group1" data-value="option2">Option #2</div>
    <div class="selective-div" data-group="group1" data-value="option3">Option #3</div>
    ```
    
    Attribute | required/optional | description
    --------- | ----------------- | -----------
    *data-group* | required | Groups multiple elements to behave like radio buttons
    *data-value* | required | The selection's value
    *class* | optional | You probably want to have your selective elements a look of being touchable 
    
4. Add *selective-div* functionality to your div elements by calling *$.selectiveDiv()* :
    ```javaScript
    <script type="text/javascript">
    $(document).ready(function(){
		$('.selective-div').selectiveDiv(); // <- activating selective-div on your DIV elements  
		
		$('.selective-div').click(function(){
			var selectedValue = $(this).selection('group1'); // <- reading the current selection
			$("#group1-selection").html(selectedValue);
			
		});
		
		var groups = $(".selective-div").groups(); // <- if you want to get all selective-div groups listed on your DIV 
		$("#group-detection").html(formatArray(groups));
	});
	```
5. Add css style to the ```<head>``` section to make the selection visible:
    ```html
    <style type="text/css">
	.selective-div{
		border:5px solid #999;
		display:inline-block;
		cursor:pointer;
		width:100px;
		height:100px;
		margin:5px;
	}
	.selective-div.selected{
		border: 5px solid #00ff00;
		display:inline-block;
	}
</style>
    ```
    
  selective-div adds the class ```selected``` on selected elements.
