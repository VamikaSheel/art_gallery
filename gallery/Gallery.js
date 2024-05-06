var artworks = [
    {
      description: "A lake in Norway in autumn.",
      address: "img1.jpg"
    },
    {
      description: "A Red flower",
      address: "puppy.jpg"
    },
    {
      description: "A House in the US",
      address: "puppy.jpg"
    },
    {
      description: "Happiness and peace",
      address: "img2.jpg"
    },
    {
      description: "My Batman action figure",
      address:"img33.jpg"
    }
  ]
  
  var feed = document.getElementById('art-feed');
  
  for (var i = 0; i < artworks.length; i++) {
    var feedBox = document.createElement('div');
    feedBox.setAttribute('class', 'feed-box');
  
    var feedImage = document.createElement('div');
    feedImage.setAttribute('class', 'feed-image');
  
    var img = document.createElement('img');
    img.setAttribute('src', artworks[i].address);
  
    var feedDescription = document.createElement('div');
    feedDescription.setAttribute('class', 'feed-description');
  
    var text = document.createTextNode(artworks[i].description)
  
    feedImage.appendChild(img);
    feedDescription.appendChild(text);
  
    feedBox.appendChild(feedImage);
    feedBox.appendChild(feedDescription);
  
    feed.appendChild(feedBox);
  }