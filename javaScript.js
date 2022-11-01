let age = 45;
let country = "USA";
let hometown = "Albuquerque";
let homestate = "New Mexico";
let myName = "That one guy Jamzz";
let hobby = "skateboarding on chinchillas";
let Wealthcategory = "Upper lower income";
let favoriteSnack = "chocolate";
let favoriteEntree = "filet of Sole";
let favoriteNoodle = "rice.   -Suck on that Gluten lovers!";
let favoriteSongThroatSinging = "`Yeve Yeve Yu'-The Hu";
let programmingSchool = "San Diego Global Knowledge University";
let color = "Flourescent Green";
let favoriteForeignCity = "Prague";
let favoriteVideoGame = "The Last of Us";
let favoriteVideoGameOnline = "Timeshift";
let bestPodcastScaryStory = "Spooked from Snap Judgement";
let favoriteSnackSandwich = "Fluffer-Nutter";
let bestestesttvseries = "X-Files";
let computerLaptop = "Lenovo Yoga X1";
let extraVariableJustToBeSafe = "`'-So, here's an extra one.``";
let list = "list of ";
let course = "basic programming";


document.write ("<p>" + myName +" lives in the "+ country + "</p>");

document.write  (`<p style = "color : blue"> He hails from: ${hometown}, ${homestate}</p>
<p style = "color : red"> He is ${age}years old and really loves ${hobby}. `)

document.write ("<p>" + "His favorite food is " + favoriteEntree + " topped with " + favoriteSnack + " served on " + favoriteNoodle + "</p>");

document.write ("<p>" + "Below is a  random " + list + "variables I needed to complete my homework for my " + course + " class at  " + programmingSchool + "." + "</p>");

document.write (`<p style = "color : green">The best throat-singing song ever: ${favoriteSongThroatSinging} 
<p style = "color: blue">
Income Category: ${Wealthcategory}       
`)
 document.write("<p>" + "Favorite color: "  + color  + "</p>" +
 "<p>" +"Favorite Foreign City: " + favoriteForeignCity+ "</p>" +
 "<p>" + "Favorite Video Game: "  + favoriteVideoGame  + "</p>" +
 "<p>" + "Favorite Video Game Online: "  + favoriteVideoGameOnline  + "</p>" +
 "<p>" + "Best Scary Podcast: "  + bestPodcastScaryStory  + "</p>");

 document.write (`<p style = "color : purple"> This work was performed on a ${computerLaptop}.`)
 document.write (`<p style = "color: orange"> Mandatory 'flair' reference from "Office Space": ${extraVariableJustToBeSafe}`)