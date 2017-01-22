var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

var klassySayings = [
  'Such Klass! ',
  'Can you get over how much klass she has? ',
  'More klass than you can shake a stick at. '
];

var klassyPhotos = [
  'http://gq-images.condecdn.net/image/E8GdknR5L1W/crop/1620',
  'http://gq-images.condecdn.net/image/El2R7DjGzrl/crop/1020',
  'http://gq-images.condecdn.net/image/rp9e4GqrlDq/crop/1020',
  'http://gq-images.condecdn.net/image/jvRL9DO5y93/crop/1020',
  'http://gq-images.condecdn.net/image/4732EJPGzo2/crop/1020',
  'http://gq-images.condecdn.net/image/7wqNvNmwppy/crop/1020'
];


// Log in and navigate to targets page
driver.get('http://www.facebook.com/');
driver.findElement(By.id('email')).sendKeys(process.env.FACEBOOK_EMAIL);
driver.findElement(By.id('pass')).sendKeys(process.env.FACEBOOK_PASSWORD);
driver.findElement(By.id('loginbutton')).click();
driver.get(process.env.FACEBOOK_TARGET_URL);

// Find if latest post is about Melania
var postElement = driver.findElement(By.className('userContent'))
var postChild = postElement.findElement(By.xpath("child::*"));
return postChild.getText()
.then(function(postText) {
  var postWords = postText.split(' ');
  postWords.forEach(function(word) {
    if (word.toLowerCase() === 'melania' || word.toLowerCase() === 'classy') {
      // Make the post!
      var post = klassySayings[Math.floor(Math.random()*klassySayings.length)] +
        klassyPhotos[Math.floor(Math.random()*klassyPhotos.length)];
    }
  })
  //driver.quit()
})
