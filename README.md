

# Calculator
=======
# Version 0.5


## Description
Version 0.5 adds in user functionality without needing to write the underneath logic of a calculator. With the introduction
to the calculator object the user can interact with the object to receive the values after calculation has been completed.

## Getting Started
> - What branch do you have your latest changes on?
    - **I don't know** - talk with an instructor
    - **not master**
        - Create pull request form current branch to master
        - Merge pull request on master
        - Go to Pull Latest Changes
    - **master** - Go to Pull Latest Changes
> - Pull Latest Changes
        - `git checkout master`
        - `git pull origin master`
> - Create the new feature branch
    - `git checkout -b v0.5`
> - Work on the scope defined <a href="https://github.com/Learning-Fuze/calculator/tree/v.5#scope">Below</a>
> - Add files to git
    - `git add .`
> - Commit files (Group files together)
    - `git commit -m "calculator v0.5 - Your Name"`
    - **Replace "Your Name" with your first and last name**
> - Send to gitHub (Push)
    - `git push origin v0.5`
> - Create pull request
    - Pull request should be made from v0.5 to **your repository's/teams** master branch


- <a href="https://github.com/Learning-Fuze/calculator/tree/v0.5#getting-started">Getting Started</a>
- <a href="https://github.com/Learning-Fuze/calculator/tree/v0.5#scope">View Scope</a>

## Scope
> - Take layout from finished v0.1 and implement the following:
    - Insert a link to the following javascript files
        - jQuery's latest version
        - http://Learning-Fuze.github.io/calculator/calculator.js
    - JS Functionality
        - Declare and define a function that takes in 3 parameters
            - **Parameters**
                - type - will be a string equal to one of the following
                    - "itemAdded"
                    - "calculated"
                    - "error"
                - value - either a string or a number
                - item - **Only use for advanced functionality** Object of different types
            - Take the value and display in the correct layout area within the DOM
                - The display of the calculation will be up to each students interpretation of how a calculator should look. **If you need ideas
                look at your calculator on your phone.**
        - Create a new global variable **my_calculator** with the value defined as `new calculator(newFunc)` where newFunc is equal to the referenced function defined above
        - Add click handlers to all buttons in the DOM, when called they do the following
            - Defines a variable **val** equal to the value of the button pressed.
                - **Example : ** if "=" button was pressed then the value of the variable above would be a string "=";
            - Insert the following into the click handler function `my_calculator.addItem(val)`. Once this is called the function that was passed into the calculator object above will be called with parameters dependant on the value of the variable val

## Example

#### <a href="http://Learning-Fuze.github.io/calculator/" target="_blank">View Demo</a>


- <a href="https://github.com/Learning-Fuze/calculator/tree/v0.1#getting-started">Getting Started</a>
- <a href="https://github.com/Learning-Fuze/calculator/tree/v0.1#scope">View Scope</a>
- <a href="https://github.com/Learning-Fuze/calculator/tree/v0.1#design">View Design</a>
- <a href="https://github.com/Learning-Fuze/calculator/tree/v0.1#assignments---aka-criteria-for-success-on-this-version-of-the-project">View Assignments</a>

> ##### Related Reading
> - Coming Soon

> ##### Related Videos
> - Coming Soon

> ##### Related Prototypes
> - Coming Soon

## Getting Started
> - Have you forked the repo from the LearningFuze account?
        - **Yes** - continue to next step
        - **No** - Fork from the Learningfuze Repo to your account
        - **I don't know** - Look at **your** github account and see if you can find the appropriate repo there.
        
- Have you cloned it from **your** repo to your local system?
        - **Yes** - continue to next step
        - **No** 
            - Go to your LFZ folder. 
            - use `git clone [repo address]` to make a local copy on your development machine.
        - **I don't know** - If you have a copy, use `git remote -v` to see what address it came from.  If it is from the LearningFuze account you cloned the **wrong repo**.  If it is your address you have it right.  If there is no copy, you haven't cloned it yet!
        
- Are you in the right folder?

        - **Yes** - You are in the folder named after the repo you cloned, go to next step
        - **No** - You are most likely still in your LFZ folder where you cloned from. Change directories to the repo folder.
        - **I don't know** - type `pwd` and press enter.  If you don't see the right folder, use `cd [folder name]` till you get to the right folder.  Use `cd ..` to go backwards a step in your folder structure, if necessary.
- Are you on your master branch?
    - **Yes** - continue to "Pull Latest Changes"
    - **I dont know** Run the command below
        - `git branch` - this will highlight the branch you are currently on
    - **No** - Make sure you `git add .` and `git commit` to your current branch before you switch to your master branch
> - Pull Latest Changes
        - `git checkout master`
        - `git pull origin master` - **Now continue with the next steps**
> - Create a feature branch
    - `git checkout -b v0.1`
> - Work on the scope defined <a href="https://github.com/Learning-Fuze/SGT/tree/v.1#scope">Below</a>
> - Add files to git
    - `git add .`
> - Commit files (Group files together)
    - `git commit -m "SGT v0.1 - Your Name"`
    - **Replace "Your Name" with your first and last name**
> - Send to gitHub (Push)
    - `git push origin v0.1`
> - Create pull request
    - Pull request should be made from v0.1 to **your repository's/teams** master branch


## Scope
> - Styling
    - Apply bootstrap styling to all <a href="http://getbootstrap.com/css/#buttons">buttons</a> & <a href="http://getbootstrap.com/css/#forms" target="_blank">form elements</a>
    - Apply bootstrap <a href="http://getbootstrap.com/css/#tables" target="_blank">table styling</a>
    - Apply look using boostrap only based on the designs <a href="https://github.com/ej020586/SGT/tree/v.1#design">below</a>. <b>Please note that no additional style sheets have been added</b>
- JS Functionality
    - Build out all functions & variables based on jsDoc (<a href="https://en.wikipedia.org/wiki/JSDoc" target="_blank">What is this?</a>) comments inside the script.js file
    - Form
        - On click of add button
            - call appropriate function in on click attribute
            - Add values inside the form into an object and store that object in the student_array global variable
            - Display all student data stored in the student_array inside the bootstrap table structure
            - Clear values inside the form elements
        - On click of cancel button
            - Clear values inside the form elements
    - on Dom Load
        - Reset application to its default state
        - Display all student data stored in the student_array inside the bootstrap table structure
    - on update of student_array data, calculate and show average student grade rounded to the nearest whole number and display inside .avgGrade element

## Design
> #### Mobile appearance
<img src="https://cloud.githubusercontent.com/assets/10343746/9148427/0384d076-3d30-11e5-83ff-4d10ae2daf70.png" width="200"/>
#### No Data available appearance
<img src="https://cloud.githubusercontent.com/assets/10343746/9148435/1d8f2bc4-3d30-11e5-926d-72a2a086fd8b.png" width="500"/>
#### Data available appearance
<img src="https://cloud.githubusercontent.com/assets/10343746/9148437/22e2566e-3d30-11e5-9401-ba2cb8309d65.png" width="500"/>


=======
#### Code Example
```
<script>
        //callback function defined
        function callback(type, value, item) {
            switch (value) {
                case undefined:
                    $('#display_area').html("");
                    break;
                default:
                    $('#display_area').html(value);
                    break;
            }
        }
        // my_calculator - creates a new calculator object
        var my_calculator = new calculator(callback);
        //after DOM load add click handlers to all buttons
        $(document).ready(function () {
            $('button').on('click', function () {
                var val = $(this).text();
                switch (val) {
                    case 'AC':
                        my_calculator.allClear();
                        break;
                    default:
                        my_calculator.addItem($(this).text());
                        break;
                }
            });
        })
    </script>
    <style>
        #display_area {
            width: 300px;
            height: 30px;
            background-color: #cccccc;
            font-weight: bold;
        }
    </style>
</head>
<body>
<div id="display_area"></div>
<div id="buttonContainer">
    <div>
        <button>1</button>
    </div>
    <div>
        <button>2</button>
    </div>
    <div>
        <button>+</button>
    </div>
    <div>
        <button>=</button>
    </div>
    <div>
        <button>AC</button>
    </div>
</div>
</body>
```

