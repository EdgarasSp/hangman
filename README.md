<a href="https://imgur.com/J3aHiWB"><img src="https://i.imgur.com/J3aHiWB.png" title="source: imgur.com/EdgarasSp" /></a>

# HANGMAN

### Table of Contents  
[1. Introduction](#1-introduction)  
[2. Initial Development](#2-initial-development)   
&nbsp;&nbsp;&nbsp; [2.1. Use Case](#21-use-case)   
&nbsp;&nbsp;&nbsp; [2.2. Build](#22-build)   
[3. Features](#3-features)  
&nbsp;&nbsp;&nbsp; [3.1. Header and Footer](#31-header-and-footer)   
&nbsp;&nbsp;&nbsp; [3.2. Home](#32-home)   
&nbsp;&nbsp;&nbsp; [3.3. Order](#33-order)  
&nbsp;&nbsp;&nbsp; [3.4. Contact](#34-contact)  
&nbsp;&nbsp;&nbsp; [3.5. Gallery](#35-gallery)  
[4. Testing](#4-testing)   
&nbsp;&nbsp;&nbsp; [4.1. Bugs and Fixes](#41-bugs-and-fixes)  
&nbsp;&nbsp;&nbsp; [4.2. Integrity](#42-integrity)  
&nbsp;&nbsp;&nbsp; [4.3. Build](#43-build)  
[5. Road Map](#5-road-map)    
&nbsp;&nbsp;&nbsp; [5.1. Essential Features](#51-essential-features)  
&nbsp;&nbsp;&nbsp; [5.2. Additional Features](#52-additional-features)  
[6. Deployment](#6-deployment)    
&nbsp;&nbsp;&nbsp; [6.1. Deployment to GitHub](#61-deployment-to-github)  
&nbsp;&nbsp;&nbsp; [6.2. Cloning on GitHub](#62-cloning-on-github)  
[7. Credits](#7-credits)    
&nbsp;&nbsp;&nbsp; [7.1. Code](#71-code)  
&nbsp;&nbsp;&nbsp; [7.2. Images](#72-images)  
&nbsp;&nbsp;&nbsp; [7.3. Media](#73-media)  
&nbsp;&nbsp;&nbsp; [7.4. Content](#74-content)    
[8. Disclaimer](#8-disclaimer)


# **1. Introduction**
> ##### [Table of Content](#table-of-contents)

This game is a simple, more ethnical version of the original hangman game. The purpose of this the game design is to all minors to experiencing a word guessing game without need to be exposed to hanging idea.

Game host three levels of difficultly, all players have 8 lives/wrong guesses regardless of the level, medium and hard levels add new level of urgency by increasing the word letter count requiring more guesses and introducing a timer function. Timer function limits the time player has available to them to make the letter guessing decision before games timer runs out resulting in game over.

In addition, game runs a built in score function to encourage player to to get the perfect score of  60,80 and 120 points based on the difficulty setting.

To test your skills or try to beat the highes score, please use the following link: [HANGMAN](https://edgarassp.github.io/hangman/) game!   
To review the code, please use the following link: [EdgarasSp GitHub](https://github.com/EdgarasSp/hangman) repository.
<br>

# **2. Initial Development** 
> ##### [Table of Content](#table-of-contents)


## **2.1.  Use Case**

### **Target Audience:**
* Casual Players.
* Family-centred.
* 13 to 99 age bracket.


### **Customer Stories:**
* Play a simple game not requiring any credentials.
* Children friendly game with educational purpose.  
* Experience all game levels in their own time without pressure from the developer.
* Progress through the game levels without being exposed to the hanging images or drawings.

### **Customer UX Requirements:**
1. Play a word guessing game.
2. Track game score.
3. Change difficulty levels.
4. Option to reset the game  or return to menu.

### **Customer UX Requirement Solution:**
1. To play the word guessing game:

	Play can initiate the game from the main menu page. When the current game ends, user will also be prompted to confirm if they would like to return to the main menu or restart game with the current set difficulty.

2. To track game score:

	Game score is displayed in the top left corner of the "game" page. For every correct letter guessed user is rewarded with 10 points and for every incorrect guess 5 points deducted. 

3. Change games difficulty levels:

	Player will have 3 difficulty options to choose from in the main menu, player can decide which game to play by reading listed games parameters.

    When game has been started, player will have option to return to the main menu to change the difficulty at any time by using "Menu" button located at the bottom rights side of the page.


4. Reset the game or return to the menu.

    After each successful or unsuccessful game played, player will be prompted to restart the current game or return to the menu to change the difficulty.
    
## **2.2. Build**

### **2.2.1. Languages**

Site uses HTML, CSS and JavaScript programming languages.

* [HTTP5](https://en.wikipedia.org/wiki/HTML5) - Hypertext Markup Language - Version 5.2
* [CSS3](https://en.wikipedia.org/wiki/CSS) - Cascading Style Sheets - Level 3
* [JS](https://en.wikipedia.org/wiki/JavaScript) - JavaScript

### **2.2.2. Wireframe**

Game was designed using the [Balsamiq](https://balsamiq.com/) wireframe toolset. Wireframes enabled to mock up and test layout designs to accommodate various media screen sizes.

 Wireframe page designs were based on 3 screen sizes, designs are accessible via below links:
 
* [Wireframe for 600px [+]](https://i.imgur.com/An0acUY.png)
* [Wireframe for 600px [-]](https://i.imgur.com/qpBrsvo.png)
* [Wireframe for 320px [+]](https://i.imgur.com/qpBrsvo.png)


### **2.2.3. Images**

No images were used in the design of this games.

### **2.2.4. Color**

Dominant color was matched against the extracted complement color using the [Adobe Color](https://color.adobe.com/create/image) tool.


Dominant color was generated using [ColorSpace](https://mycolor.space.com).

Website color pallet:
* Dominant:		[#E0C0DB](https://mycolor.space/?hex=%23E0C0DB&sub=1#0c0db&sub=1)
* Complement: 	[#3F1C91](https://mycolor.space/?hex=%233F1C91&sub=1#0c0db&sub=1)

### **2.2.5. Fonts**

Text fonts set to default font family Helvetica.

Website Icons obtained from [Font Awesome](https://fontawesome.com/).

Icon List:
* [Heart full ](https://fontawesome.com/v5.15/icons/heart?style=solid)
* [Heart hollow](https://fontawesome.com/v5.15/icons/heart?style=regular)


# **3. Features** 
> ##### [Table of Content](#table-of-contents)


## **3.1. Menu Page**

* __Logo__ - Each page displays a company logo. Logo uses same dominant color for consistency, also when clicked on, it will direct user back to the home page for ease of navigation.

	<a href="https://imgur.com/ZqvqHOb"><img src="https://i.imgur.com/ZqvqHOb.png" title="source: imgur.com - Logo" /></a>

<br>

* __Navbar__ - Navigation bar show on every page position in the center of the page for ease of use. Designed in this way to provide an intuitive way to navigate to other pages within the websites. 

	Navbar has interactive features, such as hover over feature which set text to display in bold, and when user clicks on the navigational link, relative navbar tab will display in Bold telling user which page they are currently browsing.

	<a href="https://imgur.com/lUzja8a"><img src="https://i.imgur.com/lUzja8a.png" title="source: imgur.com - Navbar" /></a>

<br>

* __Footer__ - Footer was designed to include 3 key sections, social, subscribe to the newsletter and supporting navigational links. Footer is show on all pages to create a consistent look and feel.

	* To the left, listed social accounts Facebook, Twitter and Instagram account, each text hyperlinked to the relative site.
	* In the center, user has option to subscribe to the newsletter and choose frequency weekly or monthly.
	* To the right, listed navigational links to help users to navigate to other pages without a need to return to the top of the page.

	<a href="https://imgur.com/9Xdeyo6"><img src="https://i.imgur.com/9Xdeyo6.png" title="source: imgur.com" /></a>

## **3.2. Game Page**

Home page designed to provide a snippet of what is available on the website. There are distinct line brakes for each section and responsive navbar and footer for assisted navigation.


* __Cover Image__ - Added to indicate clearly the purpose for the site, image showing bakery products and company name. Additionally cover page has "SHOP NOW" button for user to navigate directly to the "ORDER" page.

* __Featured Products__ - Section added to provide a quick way to see and view the most favourite products supplied by the bakery. Button "ORDER" added to each product redirecting user to the "ORDER" page and hover over will display product details.

* __Special Orders__ - Section added to indicate that special orders are accepted and allow user quickly navigate to the necessary page to place an order. Button "CONTACT US" was added, when user clicks user will be redirected to the "CONTACT" page where they can place the special order using the form provided.

* __About "Snippet"__ - Section added to give a quick description about the bakery. A complimentary video added showcasing a cake being sliced to encourage a positive emotion and food cravings.

* __"Quick" Contact__ - Section added to give a method to send a message to the bakery without a need to navigate to the "CONTACT" page. Message can be sent directly from the "Home" page using the form provided and submitting by pressing button "SEND MESSAGE".

* __Feedback__ - Section added to provide feedback received from the existing customers to reassure new customers about the quality of the product produced by the bakery. Feedback has been received using the "CONTACT" form and not via 3rd party review application or websites.


# **4. Testing**
> ##### [Table of Content](#table-of-contents)
<br>

## **4.1. Bugs and Fixes**

1.  On click function did not work, after some research and troubleshooting identified that I have typed   ``` onclick="href='/pages/order.html' ``` instead of ```onclick="location.href='/pages/order.html' ```

    Corrected code snippet below:

    ```html
    <section id="banner-container">
                <div id="banner-image"></div>
                <div class="vertical-center-button">
                    <input type="button" onclick="location.href='/pages/order.html'" class="shop-button" value="Shop Now" >
                </div>
            </section>
    ```

## **4.2. Integrity**

HTML and CSS build was tested through the [W3C Validator](https://validator.w3.org/#validate_by_upload+with_options) .HTML file, and the CSS through [W3C JigSaw Validator](http://jigsaw.w3.org/css-validator/#validate_by_upload) .css file.

**All pages have passed with no errors**

* W3C Validator
    * **index.html**

        <a href="https://imgur.com/7BCfXup"><img src="https://i.imgur.com/7BCfXup.png" title="source: imgur.com" /></a>

    * **order.html**

        <a href="https://imgur.com/eVq5ZXk"><img src="https://i.imgur.com/eVq5ZXk.png" title="source: imgur.com" /></a>

    * **contact.html**

        <a href="https://imgur.com/q0t1XqN"><img src="https://i.imgur.com/q0t1XqN.png" title="source: imgur.com" /></a>

    * **gallery.html**

        <a href="https://imgur.com/uenPFCQ"><img src="https://i.imgur.com/uenPFCQ.png" title="source: imgur.com" /></a>

* W3C JigSaw Validator

    * **style.css**

        <a href="https://imgur.com/ZLjR2Ww"><img src="https://i.imgur.com/ZLjR2Ww.png" title="source: imgur.com" /></a>


### **4.2.1. Responsiveness**

To test performance, used to primary tools:

* [www.responsinator.com](https://www.responsinator.com/?url=https%3A%2F%2Fedgarassp.github.io%2FMariana_Bakehouse%2Findex.html)

    <a href="https://imgur.com/1gnL6GD"><img src="https://i.imgur.com/1gnL6GD.png" title="source: imgur.com" /></a>


* [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

    > **PLEASE NOTE!** Due to bug with the responsive view accessed via "Inspect" then "Toggle Device Toolbar" the media queries were tested without using this option. Also, bug was reported to Code Institute, who confirmed that there was a discrepancy with breakpoints not being displayed correctly. Please do not test responsiveness via this tool, please resize the window instead.

    <a href="https://imgur.com/hzIycZo"><img src="https://i.imgur.com/hzIycZo.png" title="source: imgur.com" /></a>



### **4.2.2. Links**

Links tested:            

*   Nav-Bar & Footer
    * "LOGO" to "HOME PAGE" = **Validated**
    * "NAV-BAR" to action, navigate "PAGES"= **Validated**
    * "FACEBOOK" to action, open "www.facbook.com" = **Validated**
    * "TWITTER" to action, open "www.twitter.com" = **Validated**
    * "INSTAGRAM" to action, open "www.instagram.com" = **Validated**
    * "SUBSCRIBE" to action, "Submit" form = **Validated**
    * "QUICK LINKS" to action, navigate "PAGES"= **Validated**

*   Home Page:
    * "SHOP NOW" to "ORDER PAGE" = **Validated**
    * "ORDER" 4x to "ORDER PAGE" = **Validated**
    * "CONTACT US" action "Submit" form = **Validated**
    * "SEND MESSAGE" action, "Submit" form = **Validated**

*   Order Page:
    * "SUBMIT YOU ORDER" action, "Submit" form = **Validated**

*   Contact Page:
    * "SEND MESSAGE" action, "Submit" form = **Validated**
    * "FACEBOOK" to action, open "www.facbook.com" = **Validated**
    * "TWITTER" to action, open "www.twitter.com" = **Validated**
    * "INSTAGRAM" to action, open "www.instagram.com" = **Validated**


### **4.2.3. Forms**

Forms tested:            

*   Nav-Bar & Footer
    * "SUBSCRIBE" all data fields submit correctly, confirmed by Coding Institute confirmation page = **Validated**


*   Home Page:
    * "CONTACT US" all data fields submit correctly, confirmed by Coding Institute confirmation page = **Validated**

*   Order Page:
    * "SUBMIT YOU ORDER" all data fields submit correctly, confirmed by Coding Institute confirmation page = **Validated**

*   Contact Page:
    * "SEND MESSAGE" all data fields submit correctly, confirmed by Coding Institute confirmation page = **Validated**


## **4.3. Build**

### **4.3.1. Performance**

A lighthouse report was run for each page on the deployed github page, results below:

* **Home Page**

    <a href="https://imgur.com/oBc2qn0"><img src="https://i.imgur.com/oBc2qn0.png" title="source: imgur.com" /></a> 

* **Order Page**

    <a href="https://imgur.com/giDnCfD"><img src="https://i.imgur.com/giDnCfD.png" title="source: imgur.com" /></a>

* **Contact Page**

    <a href="https://imgur.com/Y2Wrrj4"><img src="https://i.imgur.com/Y2Wrrj4.png" title="source: imgur.com" /></a>

* **Gallery Page**

    <a href="https://imgur.com/4i2DXLe"><img src="https://i.imgur.com/4i2DXLe.png" title="source: imgur.com" /></a>



### **4.3.2. Optimisation**

All images used in the site were compressed using [compressor.io](https://compressor.io/) to increase site performance. 

*   Original combined image file size was: **37.5MB**
*   Compressed combined image file size now is: **4.29MB**

Using built in Chrome performance testing tool **Litehouse** the score for performance increased from 16 points to 70 points average.

# **5. Road Map**
> ##### [Table of Content](#table-of-contents)


## **5.1. Essential Features**

There are 4 essential features to implement in the future:

1. __Form Submission Confirmation__
	* Create a visual confirmation that the contact forms have been sent to the baker. Either via a pop up or visual change to the "Submit" or "Send" button.
2. __User Profile__
	* To provide order history, order status and to store client details for fast track shopping experience.
3. __Shopping Basket__
	* To allow customers to add items and manage items in the basket. Also to show customers subtotal for the order.
4. __Online Payment Option__
	* To stream line the shopping experience and allow customer to pay for the order at the point of ordering rather than pay at the point of collection or delivery.

## **5.2. Additional Features**

There are 2 non-essential features to implement in the future:

1. __Discounts__
	* Develop a discount function within the site, including discount codes and discounts based on quantities ordered.

2. __Direct Image Upload__
	* Create an option to upload an example picture of a product within the special orders form.

# **6. Deployment**
> ##### [Table of Content](#table-of-contents)


## **6.1. Deployment to GitHub**

The project was developed using [GitPod](https://gitpod.io/), pushed to [GitHub Repository](https://github.com/EdgarasSp/Mariana_Bakehouse) and deployed via GitHub pages. The steps to deploy outlined below:


The Code Institute provided a [template](https://github.com/Code-Institute-Org/gitpod-full-template) which was cloned and used for the main structure of the repository, then created into a GitPod repository. To achieve the above, the below process can be followed for deployment:

1. Go to the [GitHub Repository](https://github.com/EdgarasSp/Mariana_Bakehouse) home page.
2. Click "Settings" in the ribbon of links below the title of the project.
3. Click "Pages" on the side bar.
4. Select "Branch: main" where it asks for the source.
5. Hit "Save" and wait for a few minutes.
6. Refresh the page and click the green link with the deployed page [deployed page](######).

## **6.2. Cloning on GitHub**

You will need to have a [GitHub ](https://github.com) account and it is advised to install the [GitPod Chrome Extension](https://www.gitpod.io/docs/browser-extension/). To clone the project into your own repository follow the below steps :

1. Log in to your [GitPod account](https://gitpod.io/) .
2. Open the [Project Repository](https://github.com/EdgarasSp/Mariana_Bakehouse) in a new tab.
3. Click on the green "GitPod" button to the top right of the project.
4. This will automatically create a new GitPod workspace for you to work on.
5. You can type in any name of your choosing.


# **7. Credits**
> ##### [Table of Content](#table-of-contents)

## **7.1. Code**

Website was created using code taught by Code Institute during first module, to help with some difficulties below sites were used:

* __W3 Schools__ - To research both HTML and CSS, key areas were position absolute and relative, flex boxes and units of measure. 

* __Stack Overflow__ - To research answers to a queries to help me to understand the reasons behind the implementation and to help understand troubleshooting process.


## **7.2. Images** 

All image files used to create the website were under [Pexels](https://www.pexels.com/) "Free to use" license.

| Page | Use | Website | Name |  Source | Photographer |  
| :----- | :----- | :----- | :----- | :----- | :----- | 
| Home | Cover | [Pexels](https://www.pexels.com/) | pexels-rachel-claire-5490820_modified.jpg | [Image](https://www.pexels.com/photo/crispy-baguettes-in-wooden-box-in-counter-of-cafe-5490820/) | [Rachel Claire](https://www.pexels.com/@rachel-claire) |
| Home | Featured 1 | [Pexels](https://www.pexels.com/) | caramel_coconut_cake.jpg | [Image](https://www.pexels.com/photo/plate-of-cake-with-chocolate-frosting-2680603/) | [Anna Tukhfatullina](https://www.pexels.com/@myfoodie) |
| Home | Featured 2 | [Pexels](https://www.pexels.com/) | honey_yougurt_cake.jpg | [Image](https://www.pexels.com/photo/cake-on-white-tray-2684556/) | [Anna Tukhfatullina](https://www.pexels.com/@myfoodie) |
| Home | Featured 3 | [Pexels](https://www.pexels.com/) | almond_croissant.jpg | [Image](https://www.pexels.com/photo/close-up-photo-of-croissants-on-white-plate-1775037/) | [Mariana Kurnyk](https://www.pexels.com/@mariana-kurnyk-844465) |
| Home | Featured 4 | [Pexels](https://www.pexels.com/) | chocolate_brownie.jpg | [Image](https://www.pexels.com/photo/close-up-photo-of-stacked-brownies-3026804/) | [Ella Olsson](https://www.pexels.com/@ella-olsson-572949) |
| Home | Special | [Pexels](https://www.pexels.com/) | TBC | [Image](TBC) | [TBC](TBC) |
| Home | Form | [Pexels](https://www.pexels.com/) | open_sign.jpg | [Image](https://www.pexels.com/photo/lady-employee-in-cafeteria-with-sign-open-6205476/) | [Tim Douglas](https://www.pexels.com/@tim-douglas) |


## **7.3. Media**
All media files used to create the website were under [Pexels](https://www.pexels.com/) "Free to use" license.

| Page | Use | Website | Name | Source | Creator |  
| :----- | :----- | :----- | :----- | :----- | :----- | 
| Home | About | [Pexels](https://www.pexels.com/) | cake_slicing_video.mp4 | [Video](https://www.pexels.com/video/piece-of-white-cake-7550991/) | [Anna Nekrashevich](https://www.pexels.com/@anna-nekrashevich) |

## **7.4. Content**

Placeholder Text

## **7.4.1. Text**

Placeholder Text

## **7.4.2 Proof-Read**

Placeholder Text

# **8. Disclaimer**
> ##### [Table of Content](#table-of-contents)

<br>

The content of this Website is for educational purposes only. 
-
This website has been created for a fictional bakery and all information supplied within the site is fictional. Please do not use any information including dietary information in real life applications.
