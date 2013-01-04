define ['backbone'], (Backbone)->
  class LogoView extends Backbone.View
    initialize: (options)->
      this.tooltip = options.tooltip
      this.showing = false

    events: 
      'click': 'clickHandler'

    clickHandler: (e)->
      if !this.showing
        this.tooltip.removeClass('hidden')
        this.showing = true
      else 
        this.tooltip.addClass('hidden')
        this.showing = false
     