script src: 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'
script src: 'http://malsup.github.com/jquery.cycle2.js'
div class: 'wrapper', ->
  h2 class: 'section-title', ->
    span 'The first legit'
    text ' Wearable Hackathon!'
  div class: 'about-text', itemprop: 'description', ->
    p ->
      'Build something'
    #span ->
      #img src: '/images/wearables/wear.gif', align: 'left', class: 'about-photo'
      #img src: '/images/wearables/plus.png' ,  align: 'middle', class: 'about-plus'
      #img src: '/images/wearables/wear.gif', align: 'right', class: 'about-photo'
    div class: 'cycle-slideshow', ->
      img src: 'http://ecx.images-amazon.com/images/I/51Bq5lOBksL._SY300_.jpg', class: 'about-photo'
      img src: '/images/wearables/meta.png', class: 'about-photo'
      
    img src: '/images/wearables/plus.png', class: 'about-plus'
    div class: 'cycle-slideshow', ->
      img src: 'http://ecx.images-amazon.com/images/I/51Bq5lOBksL._SY300_.jpg', class: 'about-photo'
      img src: '/images/wearables/meta.png', class: 'about-photo'
      
    
