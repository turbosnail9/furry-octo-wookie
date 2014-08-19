div class: 'wrapper', ->
  h2 class: 'section-title', ->
    'Partners'
  ul class: 'partners-list', ->
    for @sponsor in @sponsorssingularity  
      li class: 'partner-item-singularity', itemscope: null, itemtype: 'http://schema.org/Organization', ->
        a href: @sponsor.url, class: 'partner-link', itemprop: 'url', target: '_blank', ->
          img src: @sponsor.logo, alt: @sponsor.name, class: 'sponsor-logo', itemprop: 'image'
  
  h2 class: 'section-title', ->
    'Sponsors'
  ul class: 'partners-list', -> 
    for @sponsor in @sponsorsoptimus  
      li class: 'partner-item-optimus', itemscope: null, itemtype: 'http://schema.org/Organization', ->
        a href: @sponsor.url, class: 'partner-link', itemprop: 'url', target: '_blank', ->
          img src: @sponsor.logo, alt: @sponsor.name, class: 'sponsor-logo', itemprop: 'image'
    for @sponsor in @sponsorst1000  
      li class: 'partner-item-t1000', itemscope: null, itemtype: 'http://schema.org/Organization', ->
        a href: @sponsor.url, class: 'partner-link', itemprop: 'url', target: '_blank', ->
          img src: @sponsor.logo, alt: @sponsor.name, class: 'sponsor-logo', itemprop: 'image'
    for @sponsor in @sponsorsr2d2
      li class: 'partner-item-r2d2', itemscope: null, itemtype: 'http://schema.org/Organization', ->
        a href: @sponsor.url, class: 'partner-link', itemprop: 'url', target: '_blank', ->
          img src: @sponsor.logo, alt: @sponsor.name, class: 'sponsor-logo', itemprop: 'image'
    for @sponsor in @sponsorswalle
      li class: 'partner-item-walle', itemscope: null, itemtype: 'http://schema.org/Organization', ->
        a href: @sponsor.url, class: 'partner-link', itemprop: 'url', target: '_blank', ->
          img src: @sponsor.logo, alt: @sponsor.name, class: 'sponsor-logo', itemprop: 'image'
  