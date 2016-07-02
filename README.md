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
    
    Attribute | required/optional | explanation
    --------- | ----------------- | -----------
    data-group | required | Groups multiple elements to behave like radio buttons
    data-value | required | The selection's value
    class | optional | You probably want to have your selective elements a look of being touchable 
    
4.
