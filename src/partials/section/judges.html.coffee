div class: 'wrapper', ->
  h2 class: 'section-title', ->
    'Judges'

  ul class: 'judges-list', ->
    for @judge in @judges
      li id: @judgeId(@judge.name), class: 'judge-item', itemprop: 'performer', itemscope: '', itemtype: 'http://schema.org/Person', ->
        img class: 'judge-photo', src: @judgeImgSrc(@judge), alt: @judge.name, itemprop: 'image'
        div class: 'judge-info', ->
          h3 class: 'judge-name', ->
            text @judge.name
          if @judge.twitter
            a href: "http://twitter.com/#{@judge.twitter}", class: 'judge-twitter', target: '_blank', ->
              "@#{@judge.twitter}"
          p class: 'judge-bio', ->
            @judge.bio
          p class: 'judge-comment', ->
            @judge.comment