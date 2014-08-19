nav class: 'nav', ->
  ul class: 'nav-items', ->
    for @section in @navigation
      li class: 'nav-item', ->
        a href: "##{@section}", title: "#{@labels[@section]}", class: 'nav-link', ->
          @labels[@section]
    li class: 'nav-item',->
      a href: 'http://facebook.com/wearhacks', class: 'nav-link', target: '_blank', ->
        img src: '/images/facebook.png', class: 'nav-social'
      a href: 'https://twitter.com/WearHacks', class: 'nav-link', target: '_blank', ->
        img src: '/images/Twitter_logo_blue.png', class: 'nav-social'