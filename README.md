# OG :camera:
## An OG image generator for your cool website.

Aight.  
So you want a cool screenshot of your website for when you share it on the Facebooks.  
But you don't want to take the screenshot again and again, everytime you do an update.  

Hi. My name is Erwan d'Orgeville, and I solved this problem. :sunglasses:  

Just deploy this app on Heroku with this kickass looking heroku button :  
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)  

### Installation
```npm install``` to install the packages  
```foreman start``` to start the server  

Go to [http://localhost:3000](http://localhost:3000). It's live !

### Using it on your website
Just put the following code in the ```<head>``` tag of your page :  
```
<meta property="og:image" content="http://yourcoolapp.herokuapp.com/screenshot.png">
```
Then visit the [Facebook debugger](https://developers.facebook.com/tools/debug/) to see if everything is working.  
It should be. If not, think about [opening an issue](issues/new).