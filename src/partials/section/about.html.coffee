script src: 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'
script src : 'http://code.jquery.com/jquery-1.7.1.min.js'
script src: 'http://malsup.github.com/jquery.cycle2.js'

div class: 'wrapper', ->
  h2 class: 'section-title', ->
    span 'The first legit'
    text ' Wearable Hackathon!'
  div class: 'about-text', itemprop: 'description', ->
    p ->
      'We\'ll give you a wearable kit, junk food and lots of coffee. You build something <strong>awesome</strong>.'
    div id: 'container', ->
      div class: 'cycle-slideshow', data-index: 1, ->
        img src: '/images/wearables/coffee.svg', class: 'about-photo'
        img src: '/images/wearables/worker.svg', class: 'about-photo'
        img src: '/images/wearables/idea.svg', class: 'about-photo'

      img src: '/images/wearables/plus.svg', class: 'about-plus'

      div class: 'cycle-slideshow', data-index: 2, ->
        img src: '/images/wearables/estimote.png', class: 'about-photo'
        img src: '/images/wearables/meta.png', class: 'about-photo'
        img src: '/images/wearables/black_myo_top.png', class: 'about-photo'

      img src: '/images/wearables/equal.svg', class: 'about-equal'  

      div class: 'cycle-slideshow', data-index: 3, ->
        img src: '/images/wearables/wow.svg', class: 'about-photo'
        img src: '/images/wearables/money.svg', class: 'about-photo'
        img src: '/images/wearables/excited.svg', class: 'about-photo'