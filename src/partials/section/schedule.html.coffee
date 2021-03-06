div class: 'wrapper', ->
  h2 class: 'section-title', ->
    span 'Check the '
    text 'schedule!'

  ul class: 'schedule', ->
    for @slot in @schedule
      li id: @scheduleId(@slot.name), class: "schedule-item schedule-item-#{if @slot.speaker then 'speaker' else 'other'}", ->
        div class: 'schedule-day', @slot.date
        div class: 'schedule-intro', ->
          div class: 'schedule-intro-board', ->
            span class: 'schedule-time', @slot.time
            img src: @slotImgSrc(@slot), class: 'schedule-image'
        div class: 'schedule-slot', ->
          a href: "##{@speakerId(@slot.speaker)}", class: 'schedule-speaker', @slot.speaker if @slot.speaker
          div class: 'schedule-activity', @slot.name
          if @slot.description
            p class: 'schedule-description', @slot.description

