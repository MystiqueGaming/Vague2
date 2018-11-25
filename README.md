# Vague2
# Vague 2 is an open source material design CSS Template.
# It is currently in the beta form but contributions are welcomed.
# Note  HTML pages are not editable. You can edit buth CSS and Javascript files.


# Contributing

#Please follow material guidelines for contributing code to the v2-md.css page or the actual CSS page

# Box shadow for all components which are above any other element shoul have a box shadow of 2px 2px 10px #9e9e9e with the exception of buttons which are aldready designed and finalised they have a box shadoe of 1px 1px 1px 9e9e9e. 

# Font type for headings should be roboto  font-family: 'Roboto', sans-serif; and font fanily for every other element should be Monteserrat font-family: 'Montserrat', sans-serif;

# Fonts are mentioned in v2-md.css along with its respective element.


# Including Vague 2.0 in your HTML page

# Add CSS and Javascript links to your page
# You can move HTML and CSS file to the folder of your choice 
#    <link rel="stylesheet" type="text/css" media="screen" href="v2-md.css" />
#    <script src="v2-md_js.js"></script>

# Be sure to add google font apis to call for the font:
#   <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"> For Montserrat
#   <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> For Roboto

# Call icon fonts for social media buttons
#   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

# Call Google Material Icons (According To Your Personal Preference)
#   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

# Add HTML elements like you normally would
# Vague 2.0 uses classes to style your elements

# Colors -
# Red
# Pink
# Purple
# Dark Purple
# Indigo
# Blue
# Sky Blue
# Cyan
# Teal
# Green
# Light Green
# Lime
# Yellow
# Amber
# Orange
# Dark Orange
# Brown 
# Gray
# Blue Gray
# Black
# White


# Components-

# Follow components.txt for more info 

# Buttons- Buttons come in 21 colors
# Add HTML markup <button>Example Button</button>
# Add Vague 2.0 button class <button classs="button">Example Button</button>. This is required for every button
# Add one of any 21 colors in Vague 2.0 color pallete by adding th class - button-(color of your choice in lowercase).
# For eg a red button would be <button class="button button-red">Example Button</button>

# FAB - They follow the exact same markup as a normal button but include fab at the end
# For eg    <button class="button button-red fab">Example Button</button>

# Inverse Button - Follow the exact same markup as normal buttons but include class - button-inv and inv mentioned behind color class
# For eg    <button class="button button-red-inv button-inv">Example Button</button>

# Inverse FAB Button - Follow the exact same markup as inverse buttons but include fab class at the end
# For eg    <button class="button button-red-inv button-inv fab">Example Button</button>

# Links come in three forms 
# Follow the normal HTML markup for links - <a href="#">Link</a>
# Add link-md class <a href="#" class="link-md">MD Link</a>
# Link that underlines on hover - Add hover underline class <a href="#" class="link-md hover-underline">Underlines On Hover</a>
# Link Background becomes dark on hover - <a href="#" class="link-md hover-bgdark">Background Becomes Dark on Hover</a>
# Does Both - <a href="#" class="link-md hover-duo">Does both</a>

# Checkboxes
# Add HTML markup - 
<label>Red
    <input type="checkbox" checked="checked">
    <span></span>
</label> 
# Add classes -
<label class="vmd-cbox-lbl cbox-red">Red
    <input type="checkbox" checked="checked">      
    <span class="tick"></span>
</label>
# Change cbox-red depending on the color of your choice
# Add rounded class after tick in span class to make the cbox rounded <span class= "tick rounded"></span>

# Radio Buttons - 
<label class="vmd-rbtn-lbl rbtn-red">Red
    <input type="radio" checked="checked" name="radio">
    <span class="radio-tick"></span>
</label>
# Change rbtn-red to the color of your choice

#Toggle Switches -
<label class="vmd-toggle-lbl">
        <input type="checkbox">
        <span class="toggle-slider round  toggle-red"></span>
</label>
#Change toggle-red to the color of your choice.

# Brand buttons -

<a href="#" class="fa fa-facebook"></a>
<a href="#" class="fa fa-twitter"></a>
<a href="#" class="fa fa-google"></a>
<a href="#" class="fa fa-youtube"></a>
<a href="#" class="fa fa-linkedin"></a>
<a href="#" class="fa fa-instagram"></a>
<a href="#" class="fa fa-pinterest"></a>
<a href="#" class="fa fa-snapchat"></a>
<a href="#" class="fa fa-skype"></a>
<a href="#" class="fa fa-android"></a>
<a href="#" class="fa fa-tumblr"></a>
<a href="#" class="fa fa-vine"></a>
<a href="#" class="fa fa-soundcloud"></a>
<a href="#" class="fa fa-reddit"></a>

# add social-round class to make them round