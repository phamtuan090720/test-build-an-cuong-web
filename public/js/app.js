!(function () {
  'use strict'
  var t = 'undefined' != typeof window && void 0 !== window.document ? window.document : {},
    e = 'undefined' != typeof module && module.exports,
    i = (function () {
      for (
        var e,
          i = [
            [
              'requestFullscreen',
              'exitFullscreen',
              'fullscreenElement',
              'fullscreenEnabled',
              'fullscreenchange',
              'fullscreenerror'
            ],
            [
              'webkitRequestFullscreen',
              'webkitExitFullscreen',
              'webkitFullscreenElement',
              'webkitFullscreenEnabled',
              'webkitfullscreenchange',
              'webkitfullscreenerror'
            ],
            [
              'webkitRequestFullScreen',
              'webkitCancelFullScreen',
              'webkitCurrentFullScreenElement',
              'webkitCancelFullScreen',
              'webkitfullscreenchange',
              'webkitfullscreenerror'
            ],
            [
              'mozRequestFullScreen',
              'mozCancelFullScreen',
              'mozFullScreenElement',
              'mozFullScreenEnabled',
              'mozfullscreenchange',
              'mozfullscreenerror'
            ],
            [
              'msRequestFullscreen',
              'msExitFullscreen',
              'msFullscreenElement',
              'msFullscreenEnabled',
              'MSFullscreenChange',
              'MSFullscreenError'
            ]
          ],
          s = 0,
          a = i.length,
          n = {};
        s < a;
        s++
      )
        if ((e = i[s]) && e[1] in t) {
          for (s = 0; s < e.length; s++) n[i[0][s]] = e[s]
          return n
        }
      return !1
    })(),
    s = {
      change: i.fullscreenchange,
      error: i.fullscreenerror
    },
    a = {
      request: function (e) {
        return new Promise(
          function (s, a) {
            var n = function () {
              this.off('change', n), s()
            }.bind(this)
            this.on('change', n)
            var o = (e = e || t.documentElement)[i.requestFullscreen]()
            o instanceof Promise && o.then(n).catch(a)
          }.bind(this)
        )
      },
      exit: function () {
        return new Promise(
          function (e, s) {
            if (this.isFullscreen) {
              var a = function () {
                this.off('change', a), e()
              }.bind(this)
              this.on('change', a)
              var n = t[i.exitFullscreen]()
              n instanceof Promise && n.then(a).catch(s)
            } else e()
          }.bind(this)
        )
      },
      toggle: function (t) {
        return this.isFullscreen ? this.exit() : this.request(t)
      },
      onchange: function (t) {
        this.on('change', t)
      },
      onerror: function (t) {
        this.on('error', t)
      },
      on: function (e, i) {
        var a = s[e]
        a && t.addEventListener(a, i, !1)
      },
      off: function (e, i) {
        var a = s[e]
        a && t.removeEventListener(a, i, !1)
      },
      raw: i
    }
  i
    ? (Object.defineProperties(a, {
        isFullscreen: {
          get: function () {
            return Boolean(t[i.fullscreenElement])
          }
        },
        element: {
          enumerable: !0,
          get: function () {
            return t[i.fullscreenElement]
          }
        },
        isEnabled: {
          enumerable: !0,
          get: function () {
            return Boolean(t[i.fullscreenEnabled])
          }
        }
      }),
      e ? (module.exports = a) : (window.screenfull = a))
    : e
    ? (module.exports = {
        isEnabled: !1
      })
    : (window.screenfull = {
        isEnabled: !1
      })
})(),
  (function (t, e) {
    'use strict'
    'function' != typeof t.CustomEvent &&
      ((t.CustomEvent = function (t, i) {
        i = i || {
          bubbles: !1,
          cancelable: !1,
          detail: void 0
        }
        var s = e.createEvent('CustomEvent')
        return s.initCustomEvent(t, i.bubbles, i.cancelable, i.detail), s
      }),
      (t.CustomEvent.prototype = t.Event.prototype)),
      e.addEventListener('touchstart', d, !1),
      e.addEventListener('touchmove', c, !1),
      e.addEventListener('touchend', l, !1),
      e.addEventListener('mousedown', d, !1),
      e.addEventListener('mousemove', c, !1),
      e.addEventListener('mouseup', l, !1)
    var i = null,
      s = null,
      a = null,
      n = null,
      o = null,
      r = null
    function l(t) {
      if (r === t.target) {
        var e = parseInt(r.getAttribute('data-swipe-threshold') || '20', 10),
          l = parseInt(r.getAttribute('data-swipe-timeout') || '500', 10),
          d = Date.now() - o,
          c = ''
        Math.abs(a) > Math.abs(n)
          ? Math.abs(a) > e && d < l && (c = a > 0 ? 'swipeleft' : 'swiperight')
          : Math.abs(n) > e && d < l && (c = n > 0 ? 'swipeup' : 'swipedown'),
          '' !== c &&
            r.dispatchEvent(
              new CustomEvent(c, {
                bubbles: !0,
                cancelable: !0
              })
            ),
          (i = null),
          (s = null),
          (o = null)
      }
    }
    function d(t) {
      'true' !== t.target.getAttribute('data-swipe-ignore') &&
        ((r = t.target),
        (o = Date.now()),
        (i = t.touches ? t.touches[0].clientX : t.clientX),
        (s = t.touches ? t.touches[0].clientY : t.clientY),
        (a = 0),
        (n = 0))
    }
    function c(t) {
      if (i && s) {
        var e = t.touches ? t.touches[0].clientX : t.clientX,
          o = t.touches ? t.touches[0].clientY : t.clientY
        ;(a = i - e), (n = s - o)
      }
    }
  })(window, document),
  (function (t) {
    function e(e, i, s, a) {
      var n = e.text().split(i),
        o = ''
      n.length &&
        (t(n).each(function (t, e) {
          o += '<span class="' + s + (t + 1) + '">' + e + '</span>' + a
        }),
        e.empty().append(o))
    }
    var i = {
      init: function () {
        return this.each(function () {
          e(t(this), '', 'char', '')
        })
      },
      words: function () {
        return this.each(function () {
          e(t(this), ' ', 'word', ' ')
        })
      },
      lines: function () {
        return this.each(function () {
          var i = 'eefec303079ad17405c889e092e105b0'
          e(t(this).children('br').replaceWith(i).end(), i, 'line', '')
        })
      }
    }
    t.fn.lettering = function (e) {
      return e && i[e]
        ? i[e].apply(this, [].slice.call(arguments, 1))
        : 'letters' !== e && e
        ? (t.error('Method ' + e + ' does not exist on jQuery.lettering'), this)
        : i.init.apply(this, [].slice.call(arguments, 0))
    }
  })(jQuery),
  (function (t) {
    'use strict'
    var e = 'draptouch-active'
    window.requestAnimationFrame ||
      (window.requestAnimationFrame =
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (t, e) {
          window.setTimeout(t, 1e3 / 60)
        }),
      (t.support = t.support || {}),
      t.extend(t.support, {
        touch: 'ontouchend' in document
      })
    var i = function () {
        return !1
      },
      s = function (e, i) {
        return (this.settings = i), (this.el = e), (this.$el = t(e)), this._initElements(), this
      }
    ;(s.DATA_KEY = 'draptouch'),
      (s.DEFAULTS = {
        cursor: '',
        decelerate: !0,
        triggerHardware: !1,
        threshold: 0,
        y: !0,
        x: !0,
        slowdown: 0.9,
        maxvelocity: 40,
        throttleFPS: 60,
        movingClass: {
          up: 'draptouch-moving-up',
          down: 'draptouch-moving-down',
          left: 'draptouch-moving-left',
          right: 'draptouch-moving-right'
        },
        deceleratingClass: {
          up: 'draptouch-decelerating-up',
          down: 'draptouch-decelerating-down',
          left: 'draptouch-decelerating-left',
          right: 'draptouch-decelerating-right'
        }
      }),
      (s.prototype.start = function (e) {
        ;(this.settings = t.extend(this.settings, e)),
          (this.velocity = e.velocity || this.velocity),
          (this.velocityY = e.velocityY || this.velocityY),
          (this.settings.decelerate = !1),
          this._move()
      }),
      (s.prototype.end = function () {
        this.settings.decelerate = !0
      }),
      (s.prototype.stop = function () {
        ;(this.velocity = 0),
          (this.velocityY = 0),
          (this.settings.decelerate = !0),
          t.isFunction(this.settings.stopped) && this.settings.stopped.call(this)
      }),
      (s.prototype.detach = function () {
        this._detachListeners(), this.$el.removeClass(e).css('cursor', '')
      }),
      (s.prototype.attach = function () {
        this.$el.hasClass(e) ||
          (this._attachListeners(this.$el), this.$el.addClass(e).css('cursor', this.settings.cursor))
      }),
      (s.prototype._initElements = function () {
        this.$el.addClass(e),
          t.extend(this, {
            xpos: null,
            prevXPos: !1,
            ypos: null,
            prevYPos: !1,
            mouseDown: !1,
            throttleTimeout: 1e3 / this.settings.throttleFPS,
            lastMove: null,
            elementFocused: null
          }),
          (this.velocity = 0),
          (this.velocityY = 0),
          t(document).mouseup(t.proxy(this._resetMouse, this)).click(t.proxy(this._resetMouse, this)),
          this._initEvents(),
          this.$el.css('cursor', this.settings.cursor),
          this.settings.triggerHardware &&
            this.$el.css({
              '-webkit-transform': 'translate3d(0,0,0)',
              '-webkit-perspective': '1000',
              '-webkit-backface-visibility': 'hidden'
            })
      }),
      (s.prototype._initEvents = function () {
        var e = this
        ;(this.settings.events = {
          touchStart: function (t) {
            var i
            e._useTarget(t.target, t) &&
              ((i = t.originalEvent.touches[0]),
              (e.threshold = e._threshold(t.target, t)),
              e._start(i.clientX, i.clientY),
              t.stopPropagation())
          },
          touchMove: function (t) {
            var i
            e.mouseDown &&
              ((i = t.originalEvent.touches[0]),
              e._inputmove(i.clientX, i.clientY),
              t.preventDefault && t.preventDefault())
          },
          inputDown: function (t) {
            e._useTarget(t.target, t) &&
              ((e.threshold = e._threshold(t.target, t)),
              e._start(t.clientX, t.clientY),
              (e.elementFocused = t.target),
              'IMG' === t.target.nodeName && t.preventDefault(),
              t.stopPropagation())
          },
          inputEnd: function (t) {
            e._useTarget(t.target, t) && (e._end(), (e.elementFocused = null), t.preventDefault && t.preventDefault())
          },
          inputMove: function (t) {
            e.mouseDown && (e._inputmove(t.clientX, t.clientY), t.preventDefault && t.preventDefault())
          },
          scroll: function (i) {
            t.isFunction(e.settings.moved) && e.settings.moved.call(e, e.settings),
              i.preventDefault && i.preventDefault()
          },
          inputClick: function (t) {
            if (Math.abs(e.velocity) > 0) return t.preventDefault(), !1
          },
          dragStart: function (t) {
            if (e._useTarget(t.target, t) && e.elementFocused) return !1
          }
        }),
          this._attachListeners(this.$el, this.settings)
      }),
      (s.prototype._inputmove = function (e, i) {
        var s = this.$el
        this.el
        if (
          (!this.lastMove || new Date() > new Date(this.lastMove.getTime() + this.throttleTimeout)) &&
          ((this.lastMove = new Date()), this.mouseDown && (this.xpos || this.ypos))
        ) {
          var a = e - this.xpos,
            n = i - this.ypos
          if (this.threshold > 0) {
            var o = Math.sqrt(a * a + n * n)
            if (this.threshold > o) return
            this.threshold = 0
          }
          this.elementFocused && (t(this.elementFocused).blur(), (this.elementFocused = null), s.focus()),
            (this.settings.decelerate = !1),
            (this.velocity = this.velocityY = 0)
          var r = this.scrollLeft(),
            l = this.scrollTop()
          this.scrollLeft(this.settings.x ? r - a : r),
            this.scrollTop(this.settings.y ? l - n : l),
            (this.prevXPos = this.xpos),
            (this.prevYPos = this.ypos),
            (this.xpos = e),
            (this.ypos = i),
            this._calculateVelocities(),
            this._setMoveClasses(this.settings.movingClass),
            t.isFunction(this.settings.moved) && this.settings.moved.call(this, this.settings)
        }
      }),
      (s.prototype._calculateVelocities = function () {
        ;(this.velocity = this._capVelocity(this.prevXPos - this.xpos, this.settings.maxvelocity)),
          (this.velocityY = this._capVelocity(this.prevYPos - this.ypos, this.settings.maxvelocity))
      }),
      (s.prototype._end = function () {
        this.xpos &&
          this.prevXPos &&
          !1 === this.settings.decelerate &&
          ((this.settings.decelerate = !0),
          this._calculateVelocities(),
          (this.xpos = this.prevXPos = this.mouseDown = !1),
          this._move())
      }),
      (s.prototype._useTarget = function (e, i) {
        return !t.isFunction(this.settings.filterTarget) || !1 !== this.settings.filterTarget.call(this, e, i)
      }),
      (s.prototype._threshold = function (e, i) {
        return t.isFunction(this.settings.threshold)
          ? this.settings.threshold.call(this, e, i)
          : this.settings.threshold
      }),
      (s.prototype._start = function (t, e) {
        ;(this.mouseDown = !0),
          (this.velocity = this.prevXPos = 0),
          (this.velocityY = this.prevYPos = 0),
          (this.xpos = t),
          (this.ypos = e)
      }),
      (s.prototype._resetMouse = function () {
        ;(this.xpos = !1), (this.ypos = !1), (this.mouseDown = !1)
      }),
      (s.prototype._decelerateVelocity = function (t, e) {
        return 0 === Math.floor(Math.abs(t)) ? 0 : t * e
      }),
      (s.prototype._capVelocity = function (t, e) {
        var i = t
        return t > 0 ? t > e && (i = e) : t < 0 - e && (i = 0 - e), i
      }),
      (s.prototype._setMoveClasses = function (t) {
        var e = this.settings,
          i = this.$el
        i
          .removeClass(e.movingClass.up)
          .removeClass(e.movingClass.down)
          .removeClass(e.movingClass.left)
          .removeClass(e.movingClass.right)
          .removeClass(e.deceleratingClass.up)
          .removeClass(e.deceleratingClass.down)
          .removeClass(e.deceleratingClass.left)
          .removeClass(e.deceleratingClass.right),
          this.velocity > 0 && i.addClass(t.right),
          this.velocity < 0 && i.addClass(t.left),
          this.velocityY > 0 && i.addClass(t.down),
          this.velocityY < 0 && i.addClass(t.up)
      }),
      (s.prototype._move = function () {
        this.$el
        var e = this.el,
          i = this,
          s = i.settings
        s.x && e.scrollWidth > 0
          ? (this.scrollLeft(this.scrollLeft() + this.velocity),
            Math.abs(this.velocity) > 0 &&
              (this.velocity = s.decelerate ? i._decelerateVelocity(this.velocity, s.slowdown) : this.velocity))
          : (this.velocity = 0),
          s.y && e.scrollHeight > 0
            ? (this.scrollTop(this.scrollTop() + this.velocityY),
              Math.abs(this.velocityY) > 0 &&
                (this.velocityY = s.decelerate ? i._decelerateVelocity(this.velocityY, s.slowdown) : this.velocityY))
            : (this.velocityY = 0),
          i._setMoveClasses(s.deceleratingClass),
          t.isFunction(s.moved) && s.moved.call(this, s),
          Math.abs(this.velocity) > 0 || Math.abs(this.velocityY) > 0
            ? this.moving ||
              ((this.moving = !0),
              window.requestAnimationFrame(function () {
                ;(i.moving = !1), i._move()
              }))
            : i.stop()
      }),
      (s.prototype._getScroller = function () {
        var e = this.$el
        return (this.$el.is('body') || this.$el.is('html')) && (e = t(window)), e
      }),
      (s.prototype.scrollLeft = function (t) {
        var e = this._getScroller()
        if ('number' != typeof t) return e.scrollLeft()
        e.scrollLeft(t), (this.settings.scrollLeft = t)
      }),
      (s.prototype.scrollTop = function (t) {
        var e = this._getScroller()
        if ('number' != typeof t) return e.scrollTop()
        e.scrollTop(t), (this.settings.scrollTop = t)
      }),
      (s.prototype._attachListeners = function () {
        var e = this.$el,
          s = this.settings
        t.support.touch &&
          e
            .bind('touchstart', s.events.touchStart)
            .bind('touchend', s.events.inputEnd)
            .bind('touchmove', s.events.touchMove),
          e.mousedown(s.events.inputDown).mouseup(s.events.inputEnd).mousemove(s.events.inputMove),
          e
            .click(s.events.inputClick)
            .scroll(s.events.scroll)
            .bind('selectstart', i)
            .bind('dragstart', s.events.dragStart)
      }),
      (s.prototype._detachListeners = function () {
        var e = this.$el,
          s = this.settings
        t.support.touch &&
          e
            .unbind('touchstart', s.events.touchStart)
            .unbind('touchend', s.events.inputEnd)
            .unbind('touchmove', s.events.touchMove),
          e
            .unbind('mousedown', s.events.inputDown)
            .unbind('mouseup', s.events.inputEnd)
            .unbind('mousemove', s.events.inputMove),
          e
            .unbind('click', s.events.inputClick)
            .unbind('scroll', s.events.scroll)
            .unbind('selectstart', i)
            .unbind('dragstart', s.events.dragStart)
      }),
      (t.DrapTouch = s),
      (t.fn.draptouch = function (e, i) {
        return this.each(function () {
          var a = t(this),
            n = a.data(s.DATA_KEY),
            o = t.extend({}, s.DEFAULTS, a.data(), 'object' == typeof e && e)
          n || a.data(s.DATA_KEY, (n = new s(this, o))), 'string' == typeof e && n[e](i)
        })
      })
  })(window.jQuery || window.Zepto),
  (function (t, e) {
    if ('function' == typeof define && define.amd) define(['exports'], e)
    else if ('undefined' != typeof exports) e(exports)
    else {
      var i = {
        exports: {}
      }
      e(i.exports), (t.PinchZoom = i.exports)
    }
  })(this, function (t) {
    'use strict'
    Object.defineProperty(t, '__esModule', {
      value: !0
    }),
      'function' != typeof Object.assign &&
        Object.defineProperty(Object, 'assign', {
          value: function (t, e) {
            if (null == t) throw new TypeError('Cannot convert undefined or null to object')
            for (var i = Object(t), s = 1; s < arguments.length; s++) {
              var a = arguments[s]
              if (null != a) for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (i[n] = a[n])
            }
            return i
          },
          writable: !0,
          configurable: !0
        }),
      'function' != typeof Array.from &&
        (Array.from = function (t) {
          return [].slice.call(t)
        })
    var e = function (t, e) {
        var i = document.createEvent('HTMLEvents')
        i.initEvent(e, !0, !1), t.dispatchEvent(i)
      },
      i = (function () {
        var t = function (t, e) {
            ;(this.el = t),
              (this.zoomFactor = 1),
              (this.lastScale = 1),
              (this.offset = {
                x: 0,
                y: 0
              }),
              (this.initialOffset = {
                x: 0,
                y: 0
              }),
              (this.options = Object.assign({}, this.defaults, e)),
              this.setupMarkup(),
              this.bindEvents(),
              this.update(),
              this.isImageLoaded(this.el) && (this.updateAspectRatio(), this.setupOffsets()),
              this.enable()
          },
          i = function (t, e) {
            return t + e
          }
        t.prototype = {
          defaults: {
            tapZoomFactor: 2,
            zoomOutFactor: 1.3,
            animationDuration: 300,
            maxZoom: 6,
            minZoom: 0.5,
            draggableUnzoomed: !0,
            lockDragAxis: !1,
            setOffsetsOnce: !1,
            use2d: !0,
            zoomStartEventName: 'pz_zoomstart',
            zoomUpdateEventName: 'pz_zoomupdate',
            zoomEndEventName: 'pz_zoomend',
            dragStartEventName: 'pz_dragstart',
            dragUpdateEventName: 'pz_dragupdate',
            dragEndEventName: 'pz_dragend',
            doubleTapEventName: 'pz_doubletap',
            verticalPadding: 0,
            horizontalPadding: 0
          },
          handleDragStart: function (t) {
            e(this.el, this.options.dragStartEventName),
              this.stopAnimation(),
              (this.lastDragPosition = !1),
              (this.hasInteraction = !0),
              this.handleDrag(t)
          },
          handleDrag: function (t) {
            var e = this.getTouches(t)[0]
            this.drag(e, this.lastDragPosition),
              (this.offset = this.sanitizeOffset(this.offset)),
              (this.lastDragPosition = e)
          },
          handleDragEnd: function () {
            e(this.el, this.options.dragEndEventName), this.end()
          },
          handleZoomStart: function (t) {
            e(this.el, this.options.zoomStartEventName),
              this.stopAnimation(),
              (this.lastScale = 1),
              (this.nthZoom = 0),
              (this.lastZoomCenter = !1),
              (this.hasInteraction = !0)
          },
          handleZoom: function (t, e) {
            var i = this.getTouchCenter(this.getTouches(t)),
              s = e / this.lastScale
            ;(this.lastScale = e),
              (this.nthZoom += 1),
              this.nthZoom > 3 && (this.scale(s, i), this.drag(i, this.lastZoomCenter)),
              (this.lastZoomCenter = i)
          },
          handleZoomEnd: function () {
            e(this.el, this.options.zoomEndEventName), this.end()
          },
          handleDoubleTap: function (t) {
            var i = this.getTouches(t)[0],
              s = this.zoomFactor > 1 ? 1 : this.options.tapZoomFactor,
              a = this.zoomFactor,
              n = function (t) {
                this.scaleTo(a + t * (s - a), i)
              }.bind(this)
            this.hasInteraction ||
              ((this.isDoubleTap = !0),
              a > s && (i = this.getCurrentZoomCenter()),
              this.animate(this.options.animationDuration, n, this.swing),
              e(this.el, this.options.doubleTapEventName))
          },
          computeInitialOffset: function () {
            this.initialOffset = {
              x: -Math.abs(this.el.offsetWidth * this.getInitialZoomFactor() - this.container.offsetWidth) / 2,
              y: -Math.abs(this.el.offsetHeight * this.getInitialZoomFactor() - this.container.offsetHeight) / 2
            }
          },
          resetOffset: function () {
            ;(this.offset.x = this.initialOffset.x), (this.offset.y = this.initialOffset.y)
          },
          isImageLoaded: function (t) {
            return 'IMG' === t.nodeName
              ? t.complete && 0 !== t.naturalHeight
              : Array.from(t.querySelectorAll('img')).every(this.isImageLoaded)
          },
          setupOffsets: function () {
            ;(this.options.setOffsetsOnce && this._isOffsetsSet) ||
              ((this._isOffsetsSet = !0), this.computeInitialOffset(), this.resetOffset())
          },
          sanitizeOffset: function (t) {
            var e = this.el.offsetWidth * this.getInitialZoomFactor() * this.zoomFactor,
              i = this.el.offsetHeight * this.getInitialZoomFactor() * this.zoomFactor,
              s = e - this.getContainerX() + this.options.horizontalPadding,
              a = i - this.getContainerY() + this.options.verticalPadding,
              n = Math.max(s, 0),
              o = Math.max(a, 0),
              r = Math.min(s, 0) - this.options.horizontalPadding,
              l = Math.min(a, 0) - this.options.verticalPadding
            return {
              x: Math.min(Math.max(t.x, r), n),
              y: Math.min(Math.max(t.y, l), o)
            }
          },
          scaleTo: function (t, e) {
            this.scale(t / this.zoomFactor, e)
          },
          scale: function (t, i) {
            ;(t = this.scaleZoomFactor(t)),
              this.addOffset({
                x: (t - 1) * (i.x + this.offset.x),
                y: (t - 1) * (i.y + this.offset.y)
              }),
              e(this.el, this.options.zoomUpdateEventName)
          },
          scaleZoomFactor: function (t) {
            var e = this.zoomFactor
            return (
              (this.zoomFactor *= t),
              (this.zoomFactor = Math.min(this.options.maxZoom, Math.max(this.zoomFactor, this.options.minZoom))),
              this.zoomFactor / e
            )
          },
          canDrag: function () {
            return this.options.draggableUnzoomed || !((t = this.zoomFactor) > (e = 1) - 0.01 && t < e + 0.01)
            var t, e
          },
          drag: function (t, i) {
            i &&
              (this.options.lockDragAxis
                ? Math.abs(t.x - i.x) > Math.abs(t.y - i.y)
                  ? this.addOffset({
                      x: -(t.x - i.x),
                      y: 0
                    })
                  : this.addOffset({
                      y: -(t.y - i.y),
                      x: 0
                    })
                : this.addOffset({
                    y: -(t.y - i.y),
                    x: -(t.x - i.x)
                  }),
              e(this.el, this.options.dragUpdateEventName))
          },
          getTouchCenter: function (t) {
            return this.getVectorAvg(t)
          },
          getVectorAvg: function (t) {
            return {
              x:
                t
                  .map(function (t) {
                    return t.x
                  })
                  .reduce(i) / t.length,
              y:
                t
                  .map(function (t) {
                    return t.y
                  })
                  .reduce(i) / t.length
            }
          },
          addOffset: function (t) {
            this.offset = {
              x: this.offset.x + t.x,
              y: this.offset.y + t.y
            }
          },
          sanitize: function () {
            this.zoomFactor < this.options.zoomOutFactor
              ? this.zoomOutAnimation()
              : this.isInsaneOffset(this.offset) && this.sanitizeOffsetAnimation()
          },
          isInsaneOffset: function (t) {
            var e = this.sanitizeOffset(t)
            return e.x !== t.x || e.y !== t.y
          },
          sanitizeOffsetAnimation: function () {
            var t = this.sanitizeOffset(this.offset),
              e = this.offset.x,
              i = this.offset.y,
              s = function (s) {
                ;(this.offset.x = e + s * (t.x - e)), (this.offset.y = i + s * (t.y - i)), this.update()
              }.bind(this)
            this.animate(this.options.animationDuration, s, this.swing)
          },
          zoomOutAnimation: function () {
            if (1 !== this.zoomFactor) {
              var t = this.zoomFactor,
                e = this.getCurrentZoomCenter(),
                i = function (i) {
                  this.scaleTo(t + i * (1 - t), e)
                }.bind(this)
              this.animate(this.options.animationDuration, i, this.swing)
            }
          },
          updateAspectRatio: function () {
            this.unsetContainerY(), this.setContainerY(this.container.parentElement.offsetHeight)
          },
          getInitialZoomFactor: function () {
            var t = this.container.offsetWidth / this.el.offsetWidth,
              e = this.container.offsetHeight / this.el.offsetHeight
            return Math.min(t, e)
          },
          getAspectRatio: function () {
            return this.el.offsetWidth / this.el.offsetHeight
          },
          getCurrentZoomCenter: function () {
            var t = this.offset.x - this.initialOffset.x,
              e = -1 * this.offset.x - t / (1 / this.zoomFactor - 1),
              i = this.offset.y - this.initialOffset.y
            return {
              x: e,
              y: -1 * this.offset.y - i / (1 / this.zoomFactor - 1)
            }
          },
          getTouches: function (t) {
            var e = this.container.getBoundingClientRect(),
              i = document.documentElement.scrollTop || document.body.scrollTop,
              s = document.documentElement.scrollLeft || document.body.scrollLeft,
              a = e.top + i,
              n = e.left + s
            return Array.prototype.slice.call(t.touches).map(function (t) {
              return {
                x: t.pageX - n,
                y: t.pageY - a
              }
            })
          },
          animate: function (t, e, i, s) {
            var a = new Date().getTime(),
              n = function () {
                if (this.inAnimation) {
                  var o = new Date().getTime() - a,
                    r = o / t
                  o >= t
                    ? (e(1), s && s(), this.update(), this.stopAnimation(), this.update())
                    : (i && (r = i(r)), e(r), this.update(), requestAnimationFrame(n))
                }
              }.bind(this)
            ;(this.inAnimation = !0), requestAnimationFrame(n)
          },
          stopAnimation: function () {
            this.inAnimation = !1
          },
          swing: function (t) {
            return -Math.cos(t * Math.PI) / 2 + 0.5
          },
          getContainerX: function () {
            return this.container.offsetWidth
          },
          getContainerY: function () {
            return this.container.offsetHeight
          },
          setContainerY: function (t) {
            return (this.container.style.height = t + 'px')
          },
          unsetContainerY: function () {
            this.container.style.height = null
          },
          setupMarkup: function () {
            var t, e
            ;(this.container =
              ((t = '<div class="pinch-zoom-container"></div>'),
              ((e = document.implementation.createHTMLDocument('')).body.innerHTML = t),
              Array.from(e.body.children)[0])),
              this.el.parentNode.insertBefore(this.container, this.el),
              this.container.appendChild(this.el),
              (this.container.style.overflow = 'hidden'),
              (this.container.style.position = 'relative'),
              (this.el.style.webkitTransformOrigin = '0% 0%'),
              (this.el.style.mozTransformOrigin = '0% 0%'),
              (this.el.style.msTransformOrigin = '0% 0%'),
              (this.el.style.oTransformOrigin = '0% 0%'),
              (this.el.style.transformOrigin = '0% 0%'),
              (this.el.style.position = 'absolute')
          },
          end: function () {
            ;(this.hasInteraction = !1), this.sanitize(), this.update()
          },
          bindEvents: function () {
            var t = this
            s(this.container, this),
              window.addEventListener('resize', this.update.bind(this)),
              Array.from(this.el.querySelectorAll('img')).forEach(function (e) {
                e.addEventListener('load', t.update.bind(t))
              }),
              'IMG' === this.el.nodeName && this.el.addEventListener('load', this.update.bind(this))
          },
          update: function (t) {
            this.updatePlaned ||
              ((this.updatePlaned = !0),
              window.setTimeout(
                function () {
                  ;(this.updatePlaned = !1),
                    t && 'resize' === t.type && (this.updateAspectRatio(), this.setupOffsets()),
                    t && 'load' === t.type && (this.updateAspectRatio(), this.setupOffsets())
                  var e = this.getInitialZoomFactor() * this.zoomFactor,
                    i = -this.offset.x / e,
                    s = -this.offset.y / e,
                    a = 'scale3d(' + e + ', ' + e + ',1) translate3d(' + i + 'px,' + s + 'px,0px)',
                    n = 'scale(' + e + ', ' + e + ') translate(' + i + 'px,' + s + 'px)',
                    o = function () {
                      this.clone && (this.clone.parentNode.removeChild(this.clone), delete this.clone)
                    }.bind(this)
                  !this.options.use2d || this.hasInteraction || this.inAnimation
                    ? ((this.is3d = !0),
                      o(),
                      (this.el.style.webkitTransform = a),
                      (this.el.style.mozTransform = n),
                      (this.el.style.msTransform = n),
                      (this.el.style.oTransform = n),
                      (this.el.style.transform = a))
                    : (this.is3d &&
                        ((this.clone = this.el.cloneNode(!0)),
                        (this.clone.style.pointerEvents = 'none'),
                        this.container.appendChild(this.clone),
                        window.setTimeout(o, 200)),
                      (this.el.style.webkitTransform = n),
                      (this.el.style.mozTransform = n),
                      (this.el.style.msTransform = n),
                      (this.el.style.oTransform = n),
                      (this.el.style.transform = n),
                      (this.is3d = !1))
                }.bind(this),
                0
              ))
          },
          enable: function () {
            this.enabled = !0
          },
          disable: function () {
            this.enabled = !1
          }
        }
        var s = function (t, e) {
          var i = null,
            s = 0,
            a = null,
            n = null,
            o = function (t, s) {
              if (i !== t) {
                if (i && !t)
                  switch (i) {
                    case 'zoom':
                      e.handleZoomEnd(s)
                      break
                    case 'drag':
                      e.handleDragEnd(s)
                  }
                switch (t) {
                  case 'zoom':
                    e.handleZoomStart(s)
                    break
                  case 'drag':
                    e.handleDragStart(s)
                }
              }
              i = t
            },
            r = function (t) {
              2 === s ? o('zoom') : 1 === s && e.canDrag() ? o('drag', t) : o(null, t)
            },
            l = function (t) {
              return Array.from(t).map(function (t) {
                return {
                  x: t.pageX,
                  y: t.pageY
                }
              })
            },
            d = function (t, e) {
              var i, s
              return (i = t.x - e.x), (s = t.y - e.y), Math.sqrt(i * i + s * s)
            },
            c = function (t) {
              t.stopPropagation(), t.preventDefault()
            },
            h = !0
          t.addEventListener('touchstart', function (t) {
            e.enabled &&
              ((h = !0),
              (s = t.touches.length),
              (function (t) {
                var n = new Date().getTime()
                if ((s > 1 && (a = null), n - a < 300))
                  switch ((c(t), e.handleDoubleTap(t), i)) {
                    case 'zoom':
                      e.handleZoomEnd(t)
                      break
                    case 'drag':
                      e.handleDragEnd(t)
                  }
                else e.isDoubleTap = !1
                1 === s && (a = n)
              })(t))
          }),
            t.addEventListener('touchmove', function (t) {
              if (e.enabled && !e.isDoubleTap) {
                if (h) r(t), i && c(t), (n = l(t.touches))
                else {
                  switch (i) {
                    case 'zoom':
                      e.handleZoom(
                        t,
                        (function (t, e) {
                          var i = d(t[0], t[1])
                          return d(e[0], e[1]) / i
                        })(n, l(t.touches))
                      )
                      break
                    case 'drag':
                      e.handleDrag(t)
                  }
                  i && (c(t), e.update())
                }
                h = !1
              }
            }),
            t.addEventListener('touchend', function (t) {
              e.enabled && ((s = t.touches.length), r(t))
            })
        }
        return t
      })()
    t.default = i
  })
var _extends =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e]
        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
      }
      return t
    },
  _typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t
        }
      : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
            ? 'symbol'
            : typeof t
        }
!(function (t, e) {
  'object' === ('undefined' == typeof exports ? 'undefined' : _typeof(exports)) && 'undefined' != typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define(e)
    : (t.LazyLoad = e())
})(this, function () {
  'use strict'
  var t = 'data-',
    e = function (e, i) {
      return e.getAttribute(t + i)
    },
    i = function (t) {
      return t.filter(function (t) {
        return !e(t, 'was-processed')
      })
    },
    s = function (t, e) {
      var i,
        s = 'LazyLoad::Initialized',
        a = new t(e)
      try {
        i = new CustomEvent(s, {
          detail: {
            instance: a
          }
        })
      } catch (t) {
        ;(i = document.createEvent('CustomEvent')).initCustomEvent(s, !1, !1, {
          instance: a
        })
      }
      window.dispatchEvent(i)
    },
    a = function (t, i) {
      var s = i.data_src,
        a = i.data_srcset,
        n = t.tagName,
        o = e(t, s)
      if ('IMG' === n) {
        !(function (t, i) {
          var s = i.data_srcset,
            a = t.parentNode
          if (a && 'PICTURE' === a.tagName)
            for (var n, o = 0; (n = a.children[o]); o += 1)
              if ('SOURCE' === n.tagName) {
                var r = e(n, s)
                r && n.setAttribute('srcset', r)
              }
        })(t, i)
        var r = e(t, a)
        return r && t.setAttribute('srcset', r), void (o && t.setAttribute('src', o))
      }
      'IFRAME' !== n ? o && (t.style.backgroundImage = 'url("' + o + '")') : o && t.setAttribute('src', o)
    },
    n = 'undefined' != typeof window,
    o = n && 'IntersectionObserver' in window,
    r = n && 'classList' in document.createElement('p'),
    l = function (t, e) {
      r ? t.classList.add(e) : (t.className += (t.className ? ' ' : '') + e)
    },
    d = function (t, e) {
      t && t(e)
    },
    c = 'load',
    h = 'error',
    u = function (t, e, i) {
      t.removeEventListener(c, e), t.removeEventListener(h, i)
    },
    p = function (t, e, i) {
      var s = t.target
      !(function (t, e) {
        r
          ? t.classList.remove(e)
          : (t.className = t.className
              .replace(new RegExp('(^|\\s+)' + e + '(\\s+|$)'), ' ')
              .replace(/^\s+/, '')
              .replace(/\s+$/, ''))
      })(s, i.class_loading),
        l(s, e ? i.class_loaded : i.class_error),
        d(e ? i.callback_load : i.callback_error, s)
    },
    f = function (e, i) {
      d(i.callback_enter, e),
        ['IMG', 'IFRAME'].indexOf(e.tagName) > -1 &&
          (!(function (t, e) {
            var i = function i(a) {
                p(a, !0, e), u(t, i, s)
              },
              s = function s(a) {
                p(a, !1, e), u(t, i, s)
              }
            t.addEventListener(c, i), t.addEventListener(h, s)
          })(e, i),
          l(e, i.class_loading)),
        a(e, i),
        (function (e, i, s) {
          e.setAttribute(t + i, s)
        })(e, 'was-processed', !0),
        d(i.callback_set, e)
    },
    m = function (t, e) {
      ;(this._settings = (function (t) {
        var e = {
          elements_selector: 'img',
          container: document,
          threshold: 300,
          data_src: 'src',
          data_srcset: 'srcset',
          class_loading: 'load-start',
          class_loaded: 'load-done',
          class_error: 'error',
          callback_load: null,
          callback_error: null,
          callback_set: null,
          callback_enter: null
        }
        return _extends({}, e, t)
      })(t)),
        this._setObserver(),
        this.update(e)
    }
  m.prototype = {
    _setObserver: function () {
      var t = this
      if (o) {
        var e = this._settings,
          s = {
            root: e.container === document ? null : e.container,
            rootMargin: e.threshold + 'px'
          }
        this._observer = new IntersectionObserver(function (e) {
          e.forEach(function (e) {
            if (
              (function (t) {
                return t.isIntersecting || t.intersectionRatio > 0
              })(e)
            ) {
              var i = e.target
              f(i, t._settings), t._observer.unobserve(i)
            }
          }),
            (t._elements = i(t._elements))
        }, s)
      }
    },
    update: function (t) {
      var e = this,
        s = this._settings,
        a = t || s.container.querySelectorAll(s.elements_selector)
      ;(this._elements = i(Array.prototype.slice.call(a))),
        this._observer
          ? this._elements.forEach(function (t) {
              e._observer.observe(t)
            })
          : (this._elements.forEach(function (t) {
              f(t, s)
            }),
            (this._elements = i(this._elements)))
    },
    destroy: function () {
      var t = this
      this._observer &&
        (i(this._elements).forEach(function (e) {
          t._observer.unobserve(e)
        }),
        (this._observer = null)),
        (this._elements = null),
        (this._settings = null)
    }
  }
  var g = window.lazyLoadOptions
  return (
    n &&
      g &&
      (function (t, e) {
        if (e.length) for (var i, a = 0; (i = e[a]); a += 1) s(t, i)
        else s(t, e)
      })(m, g),
    m
  )
}),
  (function (t) {
    t.fn.scale = function (e) {
      var i,
        s,
        a = t(this),
        n =
          ((s = (i = a).data('_ARS_data')) ||
            ((s = {
              scale: 1
            }),
            i.data('_ARS_data', s)),
          s)
      return void 0 === e
        ? n.scale
        : ((n.scale = e),
          (function (t, e) {
            t.css('transform', 'scale(' + e.scale + ',' + e.scale + ')')
          })(a, n),
          this)
    }
    var e = t.fx.prototype.cur
    ;(t.fx.prototype.cur = function () {
      return 'scale' == this.prop ? parseFloat(t(this.elem).scale()) : e.apply(this, arguments)
    }),
      (t.fx.step.scale = function (e) {
        t(e.elem).scale(e.now)
      })
  })(jQuery),
  (function (t) {
    t.fn.magnify = function (e) {
      e = t.extend(
        {
          src: '',
          speed: 100,
          timeout: -1,
          touchBottomOffset: 0,
          finalWidth: null,
          finalHeight: null,
          magnifiedWidth: null,
          magnifiedHeight: null,
          limitBounds: !1,
          Full: !1,
          mobileCloseEvent: 'touchstart',
          afterLoad: function () {}
        },
        e
      )
      var i = this,
        s = t('html'),
        a = 0,
        n = function () {
          clearTimeout(a),
            (a = setTimeout(function () {
              i.destroy(), i.magnify(e)
            }, 100))
        }
      return (
        (this.destroy = function () {
          return (
            this.each(function () {
              var e = t(this),
                i = e.prev('div.magnify-lens'),
                s = e.data('originalStyle')
              e.parent('div.magnify').length &&
                i.length &&
                (s ? e.attr('style', s) : e.removeAttr('style'), e.unwrap(), i.remove())
            }),
            t(window).off('resize', n),
            i
          )
        }),
        t(window).resize(n),
        this.each(function () {
          !(function (i) {
            var a = t(i),
              o = a.closest('a'),
              r = {}
            for (var l in e) r[l] = a.attr('data-magnify-' + l.toLowerCase())
            var d = r.src || e.src || o.attr('href') || ''
            if (d) {
              var c,
                h,
                u,
                p,
                f,
                m,
                g,
                v,
                $,
                b,
                y,
                w,
                x,
                C,
                k = 0,
                _ = 0,
                T = function () {
                  var t = c.offset()
                  return (
                    (C = {
                      top:
                        a.offset().top - t.top + parseInt(a.css('border-top-width')) + parseInt(a.css('padding-top')),
                      left:
                        a.offset().left -
                        t.left +
                        parseInt(a.css('border-left-width')) +
                        parseInt(a.css('padding-left'))
                    }),
                    (t.top += C.top),
                    (t.left += C.left),
                    t
                  )
                },
                z = function () {
                  h.is(':visible') &&
                    h.fadeOut(e.speed, function () {
                      s.removeClass('magnifying').trigger('magnifyend')
                    })
                },
                S = function (t) {
                  if (p) {
                    if (
                      (t
                        ? (t.preventDefault(),
                          ($ = t.pageX || t.originalEvent.touches[0].pageX),
                          (b = t.pageY || t.originalEvent.touches[0].pageY),
                          a.data('lastPos', {
                            x: $,
                            y: b
                          }))
                        : (($ = a.data('lastPos').x), (b = a.data('lastPos').y)),
                      (y = $ - x.left),
                      (w = b - x.top - e.touchBottomOffset),
                      h.is(':animated') ||
                        (y > k && y < u - k && w > _ && w < p - _
                          ? h.is(':hidden') && (s.addClass('magnifying').trigger('magnifystart'), h.fadeIn(e.speed))
                          : z()),
                      h.is(':visible'))
                    ) {
                      var i = ''
                      if (f && m) {
                        var o = -Math.round((y / u) * f - g / 2),
                          r = -Math.round((w / p) * m - v / 2)
                        if (e.limitBounds) {
                          var l = -Math.round(((u - k) / u) * f - g / 2),
                            d = -Math.round(((p - _) / p) * m - v / 2)
                          o > 0 ? (o = 0) : o < l && (o = l), r > 0 ? (r = 0) : r < d && (r = d)
                        }
                        i = o + 'px ' + r + 'px'
                      }
                      h.css({
                        top: Math.round(w - v / 2) + C.top + 'px',
                        left: Math.round(y - g / 2) + C.left + 'px',
                        'background-position': i
                      })
                    }
                  } else n()
                }
              isNaN(+r.speed) || (e.speed = +r.speed),
                isNaN(+r.timeout) || (e.timeout = +r.timeout),
                isNaN(+r.finalWidth) || (e.finalWidth = +r.finalWidth),
                isNaN(+r.finalHeight) || (e.finalHeight = +r.finalHeight),
                isNaN(+r.magnifiedWidth) || (e.magnifiedWidth = +r.magnifiedWidth),
                isNaN(+r.magnifiedHeight) || (e.magnifiedHeight = +r.magnifiedHeight),
                'true' === r.limitBounds && (e.limitBounds = !0),
                'function' == typeof window[r.afterLoad] && (e.afterLoad = window[r.afterLoad]),
                /\b(Android|BlackBerry|IEMobile|iPad|iPhone|Mobile|Opera Mini)\b/.test(navigator.userAgent)
                  ? isNaN(+r.touchBottomOffset) || (e.touchBottomOffset = +r.touchBottomOffset)
                  : (e.touchBottomOffset = 0),
                a.data('originalStyle', a.attr('style'))
              var E = new Image()
              t(E).on({
                load: function () {
                  a.css('display', 'block'),
                    a.parent('.magnify').length || a.wrap('<div class="magnify"></div>'),
                    (c = a.parent('.magnify')),
                    a.prev('.magnify-lens').length
                      ? c.children('.magnify-lens').css('background-image', "url('" + d + "')")
                      : a.before(
                          '<div class="magnify-lens loading" style="background:url(\'' + d + '\') 0 0 no-repeat"></div>'
                        ),
                    (h = c.children('.magnify-lens')).removeClass('loading'),
                    (u = e.finalWidth || a.width()),
                    (p = e.finalHeight || a.height()),
                    (f = e.magnifiedWidth || E.width),
                    (m = e.magnifiedHeight || E.height),
                    (g = h.width()),
                    (v = h.height()),
                    (x = T()),
                    e.limitBounds && ((k = g / 2 / (f / u)), (_ = v / 2 / (m / p))),
                    (f === E.width && m === E.height) || h.css('background-size', f + 'px ' + m + 'px')
                  var i = t(window).width() / 3e3,
                    s = t(window).width() / 3500
                  t(window).width() > 1100 && t(window).width() < 3900
                    ? 1 == e.Full
                      ? i < 0.75
                        ? h.scale(i)
                        : i > 0.75
                        ? h.scale(0.7)
                        : h.scale(s)
                      : h.scale(1100 / 2800)
                    : t(window).width() > 3900
                    ? 1 == e.Full && h.scale(1)
                    : t(window).width() <= 1100 &&
                      h.css({
                        transform: 'scale(0.42)'
                      }),
                    a.data('zoomSize', {
                      width: f,
                      height: m
                    }),
                    c.data('mobileCloseEvent', r.mobileCloseEvent || e.mobileCloseEvent),
                    (E = null),
                    e.afterLoad(),
                    h.is(':visible') && S(),
                    c.off().on({
                      'mousemove touchmove': S,
                      mouseenter: function () {
                        x = T()
                      },
                      mouseleave: z
                    }),
                    e.timeout >= 0 &&
                      c.on('touchend', function () {
                        setTimeout(z, e.timeout)
                      }),
                    t('body').not(c).on('touchstart', z)
                  var n = a.attr('usemap')
                  if (n) {
                    var l = t('map[name=' + n.slice(1) + ']')
                    a.after(l),
                      c.click(function (e) {
                        if (e.clientX || e.clientY) {
                          h.hide()
                          var i = document.elementFromPoint(
                            e.clientX || e.originalEvent.touches[0].clientX,
                            e.clientY || e.originalEvent.touches[0].clientY
                          )
                          'AREA' === i.nodeName
                            ? i.click()
                            : t('area', l).each(function () {
                                var e = t(this).attr('coords').split(',')
                                if (y >= e[0] && y <= e[2] && w >= e[1] && w <= e[3]) return this.click(), !1
                              })
                        }
                      })
                  }
                  o.length &&
                    (o.css('display', 'inline-block'),
                    !o.attr('href') ||
                      r.src ||
                      e.src ||
                      o.click(function (t) {
                        t.preventDefault()
                      }))
                },
                error: function () {
                  E = null
                }
              }),
                (E.src = d)
            }
          })(this)
        })
      )
    }
  })(jQuery),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define([], e)
      : 'object' == typeof exports
      ? (module.exports = e())
      : (t.download = e())
  })(this, function () {
    return function t(e, i, s) {
      var a,
        n,
        o = window,
        r = 'application/octet-stream',
        l = s || r,
        d = e,
        c = !i && !s && d,
        h = document.createElement('a'),
        u = function (t) {
          return String(t)
        },
        p = o.Blob || o.MozBlob || o.WebKitBlob || u,
        f = i || 'download'
      if (
        ((p = p.call ? p.bind(o) : Blob),
        'true' === String(this) && ((l = (d = [d, l])[0]), (d = d[1])),
        c && c.length < 2048 && ((f = c.split('/').pop().split('?')[0]), (h.href = c), -1 !== h.href.indexOf(c)))
      ) {
        var m = new XMLHttpRequest()
        return (
          m.open('GET', c, !0),
          (m.responseType = 'blob'),
          (m.onload = function (e) {
            t(e.target.response, f, r)
          }),
          setTimeout(function () {
            m.send()
          }, 0),
          m
        )
      }
      if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(d)) {
        if (!(d.length > 2096103.424 && p !== u)) return navigator.msSaveBlob ? navigator.msSaveBlob(b(d), f) : y(d)
        l = (d = b(d)).type || r
      } else if (/([\x80-\xff])/.test(d)) {
        for (var g = 0, v = new Uint8Array(d.length), $ = v.length; g < $; ++g) v[g] = d.charCodeAt(g)
        d = new p([v], {
          type: l
        })
      }
      function b(t) {
        for (
          var e = t.split(/[:;,]/),
            i = e[1],
            s = ('base64' == e[t.indexOf('charset') > 0 ? 3 : 2] ? atob : decodeURIComponent)(e.pop()),
            a = s.length,
            n = 0,
            o = new Uint8Array(a);
          n < a;
          ++n
        )
          o[n] = s.charCodeAt(n)
        return new p([o], {
          type: i
        })
      }
      function y(t, e) {
        if ('download' in h)
          return (
            (h.href = t),
            h.setAttribute('download', f),
            (h.className = 'download-js-link'),
            (h.innerHTML = 'downloading...'),
            (h.style.display = 'none'),
            h.addEventListener('click', function (t) {
              t.stopPropagation(), this.removeEventListener('click', arguments.callee)
            }),
            document.body.appendChild(h),
            setTimeout(function () {
              h.click(),
                document.body.removeChild(h),
                !0 === e &&
                  setTimeout(function () {
                    o.URL.revokeObjectURL(h.href)
                  }, 250)
            }, 66),
            !0
          )
        if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))
          return (
            /^data:/.test(t) && (t = 'data:' + t.replace(/^data:([\w\/\-\+]+)/, r)),
            window.open(t) ||
              (confirm(
                'Displaying New Document\n\nUse Save As... to download, then click back to return to this page.'
              ) &&
                (location.href = t)),
            !0
          )
        var i = document.createElement('iframe')
        document.body.appendChild(i),
          !e && /^data:/.test(t) && (t = 'data:' + t.replace(/^data:([\w\/\-\+]+)/, r)),
          (i.src = t),
          setTimeout(function () {
            document.body.removeChild(i)
          }, 333)
      }
      if (
        ((a =
          d instanceof p
            ? d
            : new p([d], {
                type: l
              })),
        navigator.msSaveBlob)
      )
        return navigator.msSaveBlob(a, f)
      if (o.URL) y(o.URL.createObjectURL(a), !0)
      else {
        if ('string' == typeof a || a.constructor === u)
          try {
            return y('data:' + l + ';base64,' + o.btoa(a))
          } catch (t) {
            return y('data:' + l + ',' + encodeURIComponent(a))
          }
        ;((n = new FileReader()).onload = function (t) {
          y(this.result)
        }),
          n.readAsDataURL(a)
      }
      return !0
    }
  }),
  (function (t, e, i, s) {
    function a(e, i) {
      ;(this.settings = null),
        (this.options = t.extend({}, a.Defaults, i)),
        (this.$element = t(e)),
        (this._handlers = {}),
        (this._plugins = {}),
        (this._supress = {}),
        (this._current = null),
        (this._speed = null),
        (this._coordinates = []),
        (this._breakpoint = null),
        (this._width = null),
        (this._items = []),
        (this._clones = []),
        (this._mergers = []),
        (this._widths = []),
        (this._invalidated = {}),
        (this._pipe = []),
        (this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: {
            start: null,
            current: null
          },
          direction: null
        }),
        (this._states = {
          current: {},
          tags: {
            initializing: ['busy'],
            animating: ['busy'],
            dragging: ['interacting']
          }
        }),
        t.each(
          ['onResize', 'onThrottledResize'],
          t.proxy(function (e, i) {
            this._handlers[i] = t.proxy(this[i], this)
          }, this)
        ),
        t.each(
          a.Plugins,
          t.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
          }, this)
        ),
        t.each(
          a.Workers,
          t.proxy(function (e, i) {
            this._pipe.push({
              filter: i.filter,
              run: t.proxy(i.run, this)
            })
          }, this)
        ),
        this.setup(),
        this.initialize()
    }
    ;(a.Defaults = {
      items: 5,
      loop: !1,
      center: !1,
      rewind: !1,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: e,
      fallbackEasing: 'swing',
      info: !1,
      nestedItemSelector: !1,
      itemElement: 'div',
      stageElement: 'div',
      refreshClass: 'slide-refresh',
      loadedClass: 'slide-slidebox',
      loadingClass: 'slide-loading',
      rtlClass: 'slide-rtl',
      responsiveClass: 'slide-responsive',
      dragClass: 'slide-drag',
      itemClass: 'slide-item',
      stageClass: 'slide-wrapper',
      stageOuterClass: 'slide-wrapper-outer',
      grabClass: 'grabbing'
    }),
      (a.Width = {
        Default: 'default',
        Inner: 'inner',
        Outer: 'outer'
      }),
      (a.Type = {
        Event: 'event',
        State: 'state'
      }),
      (a.Plugins = {}),
      (a.Workers = [
        {
          filter: ['width', 'settings'],
          run: function () {
            this._width = this.$element.width()
          }
        },
        {
          filter: ['width', 'items', 'settings'],
          run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)]
          }
        },
        {
          filter: ['items', 'settings'],
          run: function () {
            this.$stage.children('.cloned').remove()
          }
        },
        {
          filter: ['width', 'items', 'settings'],
          run: function (t) {
            var e = this.settings.margin || '',
              i = !this.settings.autoWidth,
              s = this.settings.rtl,
              a = {
                width: 'auto',
                'margin-left': s ? e : '',
                'margin-right': s ? '' : e
              }
            !i && this.$stage.children().css(a), (t.css = a)
          }
        },
        {
          filter: ['width', 'items', 'settings'],
          run: function (t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
              i = null,
              s = this._items.length,
              a = !this.settings.autoWidth,
              n = []
            for (
              t.items = {
                merge: !1,
                width: e
              };
              s--;

            )
              (i = this._mergers[s]),
                (i = (this.settings.mergeFit && Math.min(i, this.settings.items)) || i),
                (t.items.merge = i > 1 || t.items.merge),
                (n[s] = a ? e * i : this._items[s].width())
            this._widths = n
          }
        },
        {
          filter: ['items', 'settings'],
          run: function () {
            var e = [],
              i = this._items,
              s = this.settings,
              a = Math.max(2 * s.items, 4),
              n = 2 * Math.ceil(i.length / 2),
              o = s.loop && i.length ? (s.rewind ? a : Math.max(a, n)) : 0,
              r = '',
              l = ''
            for (o /= 2; o--; )
              e.push(this.normalize(e.length / 2, !0)),
                (r += i[e[e.length - 1]][0].outerHTML),
                e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)),
                (l = i[e[e.length - 1]][0].outerHTML + l)
            ;(this._clones = e),
              t(r).addClass('cloned').appendTo(this.$stage),
              t(l).addClass('cloned').prependTo(this.$stage)
          }
        },
        {
          filter: ['width', 'items', 'settings'],
          run: function () {
            for (
              var t = this.settings.rtl ? 1 : -1,
                e = this._clones.length + this._items.length,
                i = -1,
                s = 0,
                a = 0,
                n = [];
              ++i < e;

            )
              (s = n[i - 1] || 0), (a = this._widths[this.relative(i)] + this.settings.margin), n.push(s + a * t)
            this._coordinates = n
          }
        },
        {
          filter: ['width', 'items', 'settings'],
          run: function () {
            var t = this.settings.stagePadding,
              e = this._coordinates,
              i = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                'padding-left': t || '',
                'padding-right': t || ''
              }
            this.$stage.css(i)
          }
        },
        {
          filter: ['width', 'items', 'settings'],
          run: function (t) {
            var e = this._coordinates.length,
              i = !this.settings.autoWidth,
              s = this.$stage.children()
            if (i && t.items.merge) for (; e--; ) (t.css.width = this._widths[this.relative(e)]), s.eq(e).css(t.css)
            else i && ((t.css.width = t.items.width), s.css(t.css))
          }
        },
        {
          filter: ['items'],
          run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr('style')
          }
        },
        {
          filter: ['width', 'items', 'settings'],
          run: function (t) {
            ;(t.current = t.current ? this.$stage.children().index(t.current) : 0),
              (t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current))),
              this.reset(t.current)
          }
        },
        {
          filter: ['position'],
          run: function () {
            this.animate(this.coordinates(this._current))
          }
        },
        {
          filter: ['width', 'position', 'items', 'settings'],
          run: function () {
            var t,
              e,
              i,
              s,
              a = this.settings.rtl ? 1 : -1,
              n = 2 * this.settings.stagePadding,
              o = this.coordinates(this.current()) + n,
              r = o + this.width() * a,
              l = []
            for (i = 0, s = this._coordinates.length; i < s; i++)
              (t = this._coordinates[i - 1] || 0),
                (e = Math.abs(this._coordinates[i]) + n * a),
                ((this.op(t, '<=', o) && this.op(t, '>', r)) || (this.op(e, '<', o) && this.op(e, '>', r))) && l.push(i)
            this.$stage.children('.active').removeClass('active'),
              this.$stage.children(':eq(' + l.join('), :eq(') + ')').addClass('active'),
              this.settings.center &&
                (this.$stage.children('.center').removeClass('center'),
                this.$stage.children().eq(this.current()).addClass('center'))
          }
        }
      ]),
      (a.prototype.initialize = function () {
        var e, i, a
        ;(this.enter('initializing'),
        this.trigger('initialize'),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is('pre-loading')) &&
          ((e = this.$element.find('img')),
          (i = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : s),
          (a = this.$element.children(i).width()),
          e.length && a <= 0 && this.preloadAutoWidthImages(e))
        this.$element.addClass(this.options.loadingClass),
          (this.$stage = t('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap(
            '<div class="' + this.settings.stageOuterClass + '"/>'
          )),
          this.$element.append(this.$stage.parent()),
          this.replace(this.$element.children().not(this.$stage.parent())),
          this.$element.is(':visible') ? this.refresh() : this.invalidate('width'),
          this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),
          this.registerEventHandlers(),
          this.leave('initializing'),
          this.trigger('initialized')
      }),
      (a.prototype.setup = function () {
        var e = this.viewport(),
          i = this.options.responsive,
          s = -1,
          a = null
        i
          ? (t.each(i, function (t) {
              t <= e && t > s && (s = Number(t))
            }),
            delete (a = t.extend({}, this.options, i[s])).responsive,
            a.responsiveClass &&
              this.$element.attr(
                'class',
                this.$element
                  .attr('class')
                  .replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + s)
              ))
          : (a = t.extend({}, this.options)),
          (null !== this.settings && this._breakpoint === s) ||
            (this.trigger('change', {
              property: {
                name: 'settings',
                value: a
              }
            }),
            (this._breakpoint = s),
            (this.settings = a),
            this.invalidate('settings'),
            this.trigger('changed', {
              property: {
                name: 'settings',
                value: this.settings
              }
            }))
      }),
      (a.prototype.optionsLogic = function () {
        this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1))
      }),
      (a.prototype.prepare = function (e) {
        var i = this.trigger('prepare', {
          content: e
        })
        return (
          i.data ||
            (i.data = t('<' + this.settings.itemElement + '/>')
              .addClass(this.options.itemClass)
              .append(e)),
          this.trigger('prepared', {
            content: i.data
          }),
          i.data
        )
      }),
      (a.prototype.update = function () {
        for (
          var e = 0,
            i = this._pipe.length,
            s = t.proxy(function (t) {
              return this[t]
            }, this._invalidated),
            a = {};
          e < i;

        )
          (this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(a), e++
        ;(this._invalidated = {}), !this.is('valid') && this.enter('valid')
      }),
      (a.prototype.width = function (t) {
        switch ((t = t || a.Width.Default)) {
          case a.Width.Inner:
          case a.Width.Outer:
            return this._width
          default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
      }),
      (a.prototype.refresh = function () {
        this.enter('refreshing'),
          this.trigger('refresh'),
          this.setup(),
          this.optionsLogic(),
          this.$element.addClass(this.options.refreshClass),
          this.update(),
          this.$element.removeClass(this.options.refreshClass),
          this.leave('refreshing'),
          this.trigger('refreshed')
      }),
      (a.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer),
          (this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate))
      }),
      (a.prototype.onResize = function () {
        return (
          !!this._items.length &&
          this._width !== this.$element.width() &&
          !!this.$element.is(':visible') &&
          (this.enter('resizing'),
          this.trigger('resize').isDefaultPrevented()
            ? (this.leave('resizing'), !1)
            : (this.invalidate('width'), this.refresh(), this.leave('resizing'), void this.trigger('resized')))
        )
      }),
      (a.prototype.registerEventHandlers = function () {
        t.support.transition &&
          this.$stage.on(t.support.transition.end + '.btq.core', t.proxy(this.onTransitionEnd, this)),
          !1 !== this.settings.responsive && this.on(e, 'resize', this._handlers.onThrottledResize),
          this.settings.mouseDrag &&
            (this.$element.addClass(this.options.dragClass),
            this.$stage.on('mousedown.btq.core', t.proxy(this.onDragStart, this)),
            this.$stage.on('dragstart.btq.core selectstart.btq.core', function () {
              return !1
            })),
          this.settings.touchDrag &&
            (this.$stage.on('touchstart.btq.core', t.proxy(this.onDragStart, this)),
            this.$stage.on('touchcancel.btq.core', t.proxy(this.onDragEnd, this)))
      }),
      (a.prototype.onDragStart = function (e) {
        var s = null
        3 !== e.which &&
          (t.support.transform
            ? (s = {
                x: (s = this.$stage
                  .css('transform')
                  .replace(/.*\(|\)| /g, '')
                  .split(','))[16 === s.length ? 12 : 4],
                y: s[16 === s.length ? 13 : 5]
              })
            : ((s = this.$stage.position()),
              (s = {
                x: this.settings.rtl ? s.left + this.$stage.width() - this.width() + this.settings.margin : s.left,
                y: s.top
              })),
          this.is('animating') &&
            (t.support.transform ? this.animate(s.x) : this.$stage.stop(), this.invalidate('position')),
          this.$element.toggleClass(this.options.grabClass, 'mousedown' === e.type),
          this.speed(0),
          (this._drag.time = new Date().getTime()),
          (this._drag.target = t(e.target)),
          (this._drag.stage.start = s),
          (this._drag.stage.current = s),
          (this._drag.pointer = this.pointer(e)),
          t(i).on('mouseup.btq.core touchend.btq.core', t.proxy(this.onDragEnd, this)),
          t(i).one(
            'mousemove.btq.core touchmove.btq.core',
            t.proxy(function (e) {
              e.preventDefault()
              var s = this.difference(this._drag.pointer, this.pointer(e))
              t(i).on('mousemove.btq.core touchmove.btq.core', t.proxy(this.onDragMove, this)),
                (Math.abs(s.x) < Math.abs(s.y) && this.is('valid')) || (this.enter('dragging'), this.trigger('drag'))
            }, this)
          ))
      }),
      (a.prototype.onDragMove = function (t) {
        var e = null,
          i = null,
          s = null,
          a = this.difference(this._drag.pointer, this.pointer(t)),
          n = this.difference(this._drag.stage.start, a)
        this.is('dragging') &&
          (t.preventDefault(),
          this.settings.loop
            ? ((e = this.coordinates(this.minimum())),
              (i = this.coordinates(this.maximum() + 1) - e),
              (n.x = ((((n.x - e) % i) + i) % i) + e))
            : ((e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
              (i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
              (s = this.settings.pullDrag ? (-1 * a.x) / 5 : 0),
              (n.x = Math.max(Math.min(n.x, e + s), i + s))),
          (this._drag.stage.current = n),
          this.animate(n.x))
      }),
      (a.prototype.onDragEnd = function (e) {
        var s = this.difference(this._drag.pointer, this.pointer(e)),
          a = this._drag.stage.current,
          n = (s.x > 0) ^ this.settings.rtl ? 'left' : 'right'
        t(i).off('.btq.core'),
          this.$element.removeClass(this.options.grabClass),
          ((0 !== s.x && this.is('dragging')) || !this.is('valid')) &&
            (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(this.closest(a.x, 0 !== s.x ? n : this._drag.direction)),
            this.invalidate('position'),
            this.update(),
            (this._drag.direction = n),
            (Math.abs(s.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
              this._drag.target.one('click.btq.core', function () {
                return !1
              })),
          this.is('dragging') && (this.leave('dragging'), this.trigger('dragged'))
      }),
      (a.prototype.closest = function (e, i) {
        var s = -1,
          a = this.width(),
          n = this.coordinates()
        return (
          this.settings.freeDrag ||
            t.each(
              n,
              t.proxy(function (t, o) {
                return (
                  'left' === i && e > o - 30 && e < o + 30
                    ? (s = t)
                    : 'right' === i && e > o - a - 30 && e < o - a + 30
                    ? (s = t + 1)
                    : this.op(e, '<', o) && this.op(e, '>', n[t + 1] || o - a) && (s = 'left' === i ? t + 1 : t),
                  -1 === s
                )
              }, this)
            ),
          this.settings.loop ||
            (this.op(e, '>', n[this.minimum()])
              ? (s = e = this.minimum())
              : this.op(e, '<', n[this.maximum()]) && (s = e = this.maximum())),
          s
        )
      }),
      (a.prototype.animate = function (t) {
        var e = this.speed() > 0
        this.is('animating') && this.onTransitionEnd(),
          e && (this.enter('animating'), this.trigger('translate')),
          this.$stage.css({
            transform: 'translate3d(' + t + 'px,0px,0px)',
            transition: this.speed() / 1e3 + 's'
          })
      }),
      (a.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0
      }),
      (a.prototype.current = function (t) {
        if (t === s) return this._current
        if (0 === this._items.length) return s
        if (((t = this.normalize(t)), this._current !== t)) {
          var e = this.trigger('change', {
            property: {
              name: 'position',
              value: t
            }
          })
          e.data !== s && (t = this.normalize(e.data)),
            (this._current = t),
            this.invalidate('position'),
            this.trigger('changed', {
              property: {
                name: 'position',
                value: this._current
              }
            })
        }
        return this._current
      }),
      (a.prototype.invalidate = function (e) {
        return (
          'string' === t.type(e) && ((this._invalidated[e] = !0), this.is('valid') && this.leave('valid')),
          t.map(this._invalidated, function (t, e) {
            return e
          })
        )
      }),
      (a.prototype.reset = function (t) {
        ;(t = this.normalize(t)) !== s &&
          ((this._speed = 0),
          (this._current = t),
          this.suppress(['translate', 'translated']),
          this.animate(this.coordinates(t)),
          this.release(['translate', 'translated']))
      }),
      (a.prototype.normalize = function (t, e) {
        var i = this._items.length,
          a = e ? 0 : this._clones.length
        return (
          !this.isNumeric(t) || i < 1 ? (t = s) : (t < 0 || t >= i + a) && (t = ((((t - a / 2) % i) + i) % i) + a / 2),
          t
        )
      }),
      (a.prototype.relative = function (t) {
        return (t -= this._clones.length / 2), this.normalize(t, !0)
      }),
      (a.prototype.maximum = function (t) {
        var e,
          i = this.settings,
          s = this._coordinates.length,
          a = Math.abs(this._coordinates[s - 1]) - this._width,
          n = -1
        if (i.loop) s = this._clones.length / 2 + this._items.length - 1
        else if (i.autoWidth || i.merge)
          for (; s - n > 1; ) Math.abs(this._coordinates[(e = (s + n) >> 1)]) < a ? (n = e) : (s = e)
        else s = i.center ? this._items.length - 1 : this._items.length - i.items
        return t && (s -= this._clones.length / 2), Math.max(s, 0)
      }),
      (a.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
      }),
      (a.prototype.items = function (t) {
        return t === s ? this._items.slice() : ((t = this.normalize(t, !0)), this._items[t])
      }),
      (a.prototype.mergers = function (t) {
        return t === s ? this._mergers.slice() : ((t = this.normalize(t, !0)), this._mergers[t])
      }),
      (a.prototype.clones = function (e) {
        var i = this._clones.length / 2,
          a = i + this._items.length,
          n = function (t) {
            return t % 2 == 0 ? a + t / 2 : i - (t + 1) / 2
          }
        return e === s
          ? t.map(this._clones, function (t, e) {
              return n(e)
            })
          : t.map(this._clones, function (t, i) {
              return t === e ? n(i) : null
            })
      }),
      (a.prototype.speed = function (t) {
        return t !== s && (this._speed = t), this._speed
      }),
      (a.prototype.coordinates = function (e) {
        var i,
          a = 1,
          n = e - 1
        return e === s
          ? t.map(
              this._coordinates,
              t.proxy(function (t, e) {
                return this.coordinates(e)
              }, this)
            )
          : (this.settings.center
              ? (this.settings.rtl && ((a = -1), (n = e + 1)),
                (i = this._coordinates[e]),
                (i += ((this.width() - i + (this._coordinates[n] || 0)) / 2) * a))
              : (i = this._coordinates[n] || 0),
            (i = Math.ceil(i)))
      }),
      (a.prototype.duration = function (t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
      }),
      (a.prototype.to = function (t, e) {
        var i = this.current(),
          s = null,
          a = t - this.relative(i),
          n = (a > 0) - (a < 0),
          o = this._items.length,
          r = this.minimum(),
          l = this.maximum()
        this.settings.loop
          ? (!this.settings.rewind && Math.abs(a) > o / 2 && (a += -1 * n * o),
            (s = (((((t = i + a) - r) % o) + o) % o) + r) !== t &&
              s - a <= l &&
              s - a > 0 &&
              ((i = s - a), (t = s), this.reset(i)))
          : (t = this.settings.rewind ? ((t % (l += 1)) + l) % l : Math.max(r, Math.min(l, t))),
          this.speed(this.duration(i, t, e)),
          this.current(t),
          this.$element.is(':visible') && this.update()
      }),
      (a.prototype.next = function (t) {
        ;(t = t || !1), this.to(this.relative(this.current()) + 1, t)
      }),
      (a.prototype.prev = function (t) {
        ;(t = t || !1), this.to(this.relative(this.current()) - 1, t)
      }),
      (a.prototype.onTransitionEnd = function (t) {
        if (t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)))
          return !1
        this.leave('animating'), this.trigger('translated')
      }),
      (a.prototype.viewport = function () {
        var s
        if (this.options.responsiveBaseElement !== e) s = t(this.options.responsiveBaseElement).width()
        else if (e.innerWidth) s = e.innerWidth
        else {
          if (!i.documentElement || !i.documentElement.clientWidth) throw 'Can not detect viewport width.'
          s = i.documentElement.clientWidth
        }
        return s
      }),
      (a.prototype.replace = function (e) {
        this.$stage.empty(),
          (this._items = []),
          e && (e = e instanceof jQuery ? e : t(e)),
          this.settings.nestedItemSelector && (e = e.find('.' + this.settings.nestedItemSelector)),
          e
            .filter(function () {
              return 1 === this.nodeType
            })
            .each(
              t.proxy(function (t, e) {
                ;(e = this.prepare(e)),
                  this.$stage.append(e),
                  this._items.push(e),
                  this._mergers.push(1 * e.find('[data-merge]').attr('data-merge') || 1)
              }, this)
            ),
          this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
          this.invalidate('items')
      }),
      (a.prototype.add = function (e, i) {
        var a = this.relative(this._current)
        ;(i = i === s ? this._items.length : this.normalize(i, !0)),
          (e = e instanceof jQuery ? e : t(e)),
          this.trigger('add', {
            content: e,
            position: i
          }),
          (e = this.prepare(e)),
          0 === this._items.length || i === this._items.length
            ? (0 === this._items.length && this.$stage.append(e),
              0 !== this._items.length && this._items[i - 1].after(e),
              this._items.push(e),
              this._mergers.push(1 * e.find('[data-merge]').attr('data-merge') || 1))
            : (this._items[i].before(e),
              this._items.splice(i, 0, e),
              this._mergers.splice(i, 0, 1 * e.find('[data-merge]').attr('data-merge') || 1)),
          this._items[a] && this.reset(this._items[a].index()),
          this.invalidate('items'),
          this.trigger('added', {
            content: e,
            position: i
          })
      }),
      (a.prototype.remove = function (t) {
        ;(t = this.normalize(t, !0)) !== s &&
          (this.trigger('remove', {
            content: this._items[t],
            position: t
          }),
          this._items[t].remove(),
          this._items.splice(t, 1),
          this._mergers.splice(t, 1),
          this.invalidate('items'),
          this.trigger('removed', {
            content: null,
            position: t
          }))
      }),
      (a.prototype.preloadAutoWidthImages = function (e) {
        e.each(
          t.proxy(function (e, i) {
            this.enter('pre-loading'),
              (i = t(i)),
              t(new Image())
                .one(
                  'load',
                  t.proxy(function (t) {
                    i.attr('src', t.target.src),
                      i.css('opacity', 1),
                      this.leave('pre-loading'),
                      !this.is('pre-loading') && !this.is('initializing') && this.refresh()
                  }, this)
                )
                .attr('src', i.attr('src') || i.attr('data-src') || i.attr('data-src-retina'))
          }, this)
        )
      }),
      (a.prototype.destroy = function () {
        for (var s in (this.$element.off('.btq.core'),
        this.$stage.off('.btq.core'),
        t(i).off('.btq.core'),
        !1 !== this.settings.responsive &&
          (e.clearTimeout(this.resizeTimer), this.off(e, 'resize', this._handlers.onThrottledResize)),
        this._plugins))
          this._plugins[s].destroy()
        this.$stage.children('.cloned').remove(),
          this.$stage.unwrap(),
          this.$stage.children().contents().unwrap(),
          this.$stage.children().unwrap(),
          this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr(
              'class',
              this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), '')
            )
            .removeData('btq.slidebox')
      }),
      (a.prototype.op = function (t, e, i) {
        var s = this.settings.rtl
        switch (e) {
          case '<':
            return s ? t > i : t < i
          case '>':
            return s ? t < i : t > i
          case '>=':
            return s ? t <= i : t >= i
          case '<=':
            return s ? t >= i : t <= i
        }
      }),
      (a.prototype.on = function (t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent('on' + e, i)
      }),
      (a.prototype.off = function (t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent('on' + e, i)
      }),
      (a.prototype.trigger = function (e, i, s, n, o) {
        var r = {
            item: {
              count: this._items.length,
              index: this.current()
            }
          },
          l = t.camelCase(
            t
              .grep(['on', e, s], function (t) {
                return t
              })
              .join('-')
              .toLowerCase()
          ),
          d = t.Event(
            [e, 'btq', s || 'slidebox'].join('.').toLowerCase(),
            t.extend(
              {
                relatedTarget: this
              },
              r,
              i
            )
          )
        return (
          this._supress[e] ||
            (t.each(this._plugins, function (t, e) {
              e.onTrigger && e.onTrigger(d)
            }),
            this.register({
              type: a.Type.Event,
              name: e
            }),
            this.$element.trigger(d),
            this.settings && 'function' == typeof this.settings[l] && this.settings[l].call(this, d)),
          d
        )
      }),
      (a.prototype.enter = function (e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function (t, e) {
            this._states.current[e] === s && (this._states.current[e] = 0), this._states.current[e]++
          }, this)
        )
      }),
      (a.prototype.leave = function (e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function (t, e) {
            this._states.current[e]--
          }, this)
        )
      }),
      (a.prototype.register = function (e) {
        if (e.type === a.Type.Event) {
          if ((t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].btq)) {
            var i = t.event.special[e.name]._default
            ;(t.event.special[e.name]._default = function (t) {
              return !i || !i.apply || (t.namespace && -1 !== t.namespace.indexOf('btq'))
                ? t.namespace && t.namespace.indexOf('btq') > -1
                : i.apply(this, arguments)
            }),
              (t.event.special[e.name].btq = !0)
          }
        } else
          e.type === a.Type.State &&
            (this._states.tags[e.name]
              ? (this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags))
              : (this._states.tags[e.name] = e.tags),
            (this._states.tags[e.name] = t.grep(
              this._states.tags[e.name],
              t.proxy(function (i, s) {
                return t.inArray(i, this._states.tags[e.name]) === s
              }, this)
            )))
      }),
      (a.prototype.suppress = function (e) {
        t.each(
          e,
          t.proxy(function (t, e) {
            this._supress[e] = !0
          }, this)
        )
      }),
      (a.prototype.release = function (e) {
        t.each(
          e,
          t.proxy(function (t, e) {
            delete this._supress[e]
          }, this)
        )
      }),
      (a.prototype.pointer = function (t) {
        var i = {
          x: null,
          y: null
        }
        return (
          (t =
            (t = t.originalEvent || t || e.event).touches && t.touches.length
              ? t.touches[0]
              : t.changedTouches && t.changedTouches.length
              ? t.changedTouches[0]
              : t).pageX
            ? ((i.x = t.pageX), (i.y = t.pageY))
            : ((i.x = t.clientX), (i.y = t.clientY)),
          i
        )
      }),
      (a.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t))
      }),
      (a.prototype.difference = function (t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }),
      (t.fn.BTQSlider = function (e) {
        var i = Array.prototype.slice.call(arguments, 1)
        return this.each(function () {
          var s = t(this),
            n = s.data('btq.slidebox')
          n ||
            ((n = new a(this, 'object' == typeof e && e)),
            s.data('btq.slidebox', n),
            t.each(['next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'], function (e, i) {
              n.register({
                type: a.Type.Event,
                name: i
              }),
                n.$element.on(
                  i + '.btq.slidebox.core',
                  t.proxy(function (t) {
                    t.namespace &&
                      t.relatedTarget !== this &&
                      (this.suppress([i]), n[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                  }, n)
                )
            })),
            'string' == typeof e && '_' !== e.charAt(0) && n[e].apply(n, i)
        })
      }),
      (t.fn.BTQSlider.Constructor = a)
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var a = function (e) {
      ;(this._core = e),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          'initialized.btq.slidebox': t.proxy(function (t) {
            t.namespace && this._core.settings.autoRefresh && this.watch()
          }, this)
        }),
        (this._core.options = t.extend({}, a.Defaults, this._core.options)),
        this._core.$element.on(this._handlers)
    }
    ;(a.Defaults = {
      autoRefresh: !0,
      autoRefreshInterval: 500
    }),
      (a.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.$element.is(':visible')),
          (this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)))
      }),
      (a.prototype.refresh = function () {
        this._core.$element.is(':visible') !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass('slide-hidden', !this._visible),
          this._visible && this._core.invalidate('width') && this._core.refresh())
      }),
      (a.prototype.destroy = function () {
        var t, i
        for (t in (e.clearInterval(this._interval), this._handlers)) this._core.$element.off(t, this._handlers[t])
        for (i in Object.getOwnPropertyNames(this)) 'function' != typeof this[i] && (this[i] = null)
      }),
      (t.fn.BTQSlider.Constructor.Plugins.AutoRefresh = a)
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var a = function (e) {
      ;(this._core = e),
        (this._loaded = []),
        (this._handlers = {
          'initialized.btq.slidebox change.btq.slidebox resized.btq.slidebox': t.proxy(function (e) {
            if (
              e.namespace &&
              this._core.settings &&
              this._core.settings.lazyLoad &&
              ((e.property && 'position' == e.property.name) || 'initialized' == e.type)
            ) {
              var i = this._core.settings,
                s = (i.center && Math.ceil(i.items / 2)) || i.items,
                a = (i.center && -1 * s) || 0,
                n = (e.property && undefined !== e.property.value ? e.property.value : this._core.current()) + a,
                o = this._core.clones().length,
                r = t.proxy(function (t, e) {
                  this.load(e)
                }, this)
              for (i.lazyLoadEager > 0 && ((s += i.lazyLoadEager), i.loop && ((n -= i.lazyLoadEager), s++)); a++ < s; )
                this.load(o / 2 + this._core.relative(n)),
                  o && t.each(this._core.clones(this._core.relative(n)), r),
                  n++
            }
          }, this)
        }),
        (this._core.options = t.extend({}, a.Defaults, this._core.options)),
        this._core.$element.on(this._handlers)
    }
    ;(a.Defaults = {
      lazyLoad: !1,
      lazyLoadEager: 0
    }),
      (a.prototype.load = function (i) {
        var s = this._core.$stage.children().children(),
          a = this._core.$stage.children().eq(i),
          n = a && a.find('.lazyload')
        !n ||
          t.inArray(a.get(0), this._loaded) > -1 ||
          (n &&
            s.each(function (e, i) {
              t(i).parent().addClass('loading')
            }),
          n.each(
            t.proxy(function (i, s) {
              var a,
                n = t(s),
                o = (e.devicePixelRatio > 1 && n.attr('data-src-retina')) || n.attr('data-src') || n.attr('data-srcset')
              this._core.trigger(
                'load',
                {
                  element: n,
                  url: o
                },
                'lazy'
              ),
                n.is('img')
                  ? (n
                      .one(
                        'load.btq.lazy',
                        t.proxy(function () {
                          n.css('opacity', 1),
                            this._core.trigger(
                              'loaded',
                              {
                                element: n,
                                url: o
                              },
                              'lazy'
                            )
                        }, this)
                      )
                      .attr('src', o),
                    n.parent().parent().addClass('done'))
                  : n.is('source')
                  ? (n
                      .one(
                        'load.btq.lazy',
                        t.proxy(function () {
                          this._core.trigger(
                            'loaded',
                            {
                              element: n,
                              url: o
                            },
                            'lazy'
                          )
                        }, this)
                      )
                      .attr('srcset', o),
                    n.parent().parent().addClass('done'))
                  : (((a = new Image()).onload = t.proxy(function () {
                      n.css({
                        'background-image': 'url("' + o + '")',
                        opacity: '1'
                      }),
                        this._core.trigger(
                          'loaded',
                          {
                            element: n,
                            url: o
                          },
                          'lazy'
                        )
                    }, this)),
                    (a.src = o),
                    n.parent().addClass('done'))
            }, this)
          ),
          this._loaded.push(a.get(0)))
      }),
      (a.prototype.destroy = function () {
        var t, e
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t])
        for (e in Object.getOwnPropertyNames(this)) 'function' != typeof this[e] && (this[e] = null)
      }),
      (t.fn.BTQSlider.Constructor.Plugins.Lazy = a)
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var a = function (i) {
      ;(this._core = i),
        (this._previousHeight = null),
        (this._handlers = {
          'initialized.btq.slidebox refreshed.btq.slidebox': t.proxy(function (t) {
            t.namespace && this._core.settings.autoHeight && this.update()
          }, this),
          'changed.btq.slidebox': t.proxy(function (t) {
            t.namespace && this._core.settings.autoHeight && 'position' === t.property.name && this.update()
          }, this),
          'loaded.btq.lazy': t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.element.closest('.' + this._core.settings.itemClass).index() === this._core.current() &&
              this.update()
          }, this)
        }),
        (this._core.options = t.extend({}, a.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null)
      var s = this
      t(e).on('load', function () {
        s._core.settings.autoHeight && s.update()
      }),
        t(e).resize(function () {
          s._core.settings.autoHeight &&
            (null != s._intervalId && clearTimeout(s._intervalId),
            (s._intervalId = setTimeout(function () {
              s.update()
            }, 250)))
        })
    }
    ;(a.Defaults = {
      autoHeight: !1,
      autoHeightClass: 'autoheight'
    }),
      (a.prototype.update = function () {
        var e = this._core._current,
          i = e + this._core.settings.items,
          s = this._core.settings.lazyLoad,
          a = this._core.$stage.children().toArray().slice(e, i),
          n = [],
          o = 0
        t.each(a, function (e, i) {
          n.push(t(i).height())
        }),
          (o = Math.max.apply(null, n)) <= 1 && s && this._previousHeight && (o = this._previousHeight),
          (this._previousHeight = o),
          this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
      }),
      (a.prototype.destroy = function () {
        var t, e
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t])
        for (e in Object.getOwnPropertyNames(this)) 'function' != typeof this[e] && (this[e] = null)
      }),
      (t.fn.BTQSlider.Constructor.Plugins.AutoHeight = a)
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var a = function (e) {
      ;(this._core = e),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          'initialized.btq.slidebox': t.proxy(function (t) {
            t.namespace &&
              this._core.register({
                type: 'state',
                name: 'playing',
                tags: ['interacting']
              })
          }, this),
          'resize.btq.slidebox': t.proxy(function (t) {
            t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
          }, this),
          'refreshed.btq.slidebox': t.proxy(function (t) {
            t.namespace && this._core.is('resizing') && this._core.$stage.find('.cloned .slide-video-frame').remove()
          }, this),
          'changed.btq.slidebox': t.proxy(function (t) {
            t.namespace && 'position' === t.property.name && this._playing && this.stop()
          }, this),
          'prepared.btq.slidebox': t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content).find('.slide-video')
              i.length && (i.css('display', 'none'), this.fetch(i, t(e.content)))
            }
          }, this)
        }),
        (this._core.options = t.extend({}, a.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          'click.btq.video',
          '.slide-video-play-icon',
          t.proxy(function (t) {
            this.play(t)
          }, this)
        )
    }
    ;(a.Defaults = {
      video: !1,
      videoHeight: !1,
      videoWidth: !1
    }),
      (a.prototype.fetch = function (e, s) {
        var a = e.attr('data-vimeo-id') ? 'vimeo' : e.attr('data-vzaar-id') ? 'vzaar' : 'youtube',
          n = e.attr('data-vimeo-id') || e.attr('data-youtube-id') || e.attr('data-vzaar-id'),
          o = e.attr('data-width') || this._core.settings.videoWidth,
          r = e.attr('data-height') || this._core.settings.videoHeight,
          l = e.attr('href')
        if (e.length > 0) {
          if (!t('#youtube_js').length) {
            var d,
              c = i.createElement('script')
            function h(e) {
              Mobile.matches ? (e.target.mute(), e.target.playVideo()) : e.target.playVideo()
              var i = e.target
              if (
                (t(i.getIframe()).bind(
                  'InView',
                  {
                    Player: i
                  },
                  function (t, e) {
                    1 == e ? t.data.Player.playVideo() : t.data.Player.pauseVideo()
                  }
                ),
                t('.play-button').on('click', function (t) {
                  t.preventDefault(), d.playVideo()
                }),
                t('.pause-button').on('click', function (t) {
                  t.preventDefault(), d.pauseVideo()
                }),
                d.getPlayerState() > 1)
              ) {
                var s = d.getVideoData().title
                t('.slide-video-frame iframe').attr('title', s)
              }
            }
            ;(c.id = 'youtube_js'),
              c.setAttribute('rel', 'preload'),
              c.setAttribute('as', 'script'),
              (c.src = 'https://www.youtube.com/iframe_api'),
              i.body.appendChild(c)
          }
          t('.video-center').on('click', '.slide-video-play-icon', function () {
            d = new YT.Player('VYT', {
              events: {
                onReady: h
              }
            })
          })
        }
        if (!l) throw new Error('Missing video URL.')
        if (
          (n = l.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          ))[3].indexOf('youtu') > -1
        )
          a = 'youtube'
        else if (n[3].indexOf('vimeo') > -1) a = 'vimeo'
        else {
          if (!(n[3].indexOf('vzaar') > -1)) throw new Error('Video URL not supported.')
          a = 'vzaar'
        }
        ;(n = n[6]),
          (this._videos[l] = {
            type: a,
            id: n,
            width: o,
            height: r
          }),
          s.attr('data-video', l),
          this.thumbnail(e, this._videos[l])
      }),
      (a.prototype.thumbnail = function (e, i) {
        var s,
          a,
          n = i.width && i.height ? 'style="width:' + i.width + 'px;height:' + i.height + 'px;"' : '',
          o = e.find('img'),
          r = 'src',
          l = '',
          d = this._core.settings,
          c = function (t) {
            '<div class="slide-video-play-icon"></div>',
              (s = d.lazyLoad
                ? '<div class="slide-video-tn ' + l + '" ' + r + '="' + t + '"></div>'
                : '<div class="slide-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>'),
              e.after(s),
              e.after('<div class="slide-video-play-icon"></div>')
          }
        if (
          (e.wrap('<div class="slide-video-wrapper"' + n + '></div>'),
          this._core.settings.lazyLoad && ((r = 'data-src'), (l = 'lazyload')),
          o.length)
        )
          return c(o.attr(r)), o.remove(), !1
        'youtube' === i.type
          ? ((a = '//img.youtube.com/vi/' + i.id + '/sddefault.jpg'), c(a))
          : 'vimeo' === i.type
          ? t.ajax({
              type: 'GET',
              url: '//vimeo.com/api/v2/video/' + i.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function (t) {
                ;(a = t[0].thumbnail_large), c(a)
              }
            })
          : 'vzaar' === i.type &&
            t.ajax({
              type: 'GET',
              url: '//vzaar.com/api/videos/' + i.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function (t) {
                ;(a = t.framegrab_url), c(a)
              }
            })
      }),
      (a.prototype.stop = function () {
        this._core.trigger('stop', null, 'video'),
          this._playing.find('.slide-video-frame').remove(),
          this._playing.removeClass('slide-video-playing'),
          (this._playing = null),
          this._core.leave('playing'),
          this._core.trigger('stopped', null, 'video')
      }),
      (a.prototype.play = function (e) {
        var i,
          s = t(e.target).closest('.' + this._core.settings.itemClass),
          a = this._videos[s.attr('data-video')]
        a.width, a.height || this._core.$stage.height()
        this._playing ||
          (this._core.enter('playing'),
          this._core.trigger('play', null, 'video'),
          (s = this._core.items(this._core.relative(s.index()))),
          this._core.reset(s.index()),
          'youtube' === a.type
            ? (i =
                '<iframe id="VYT" title="video" width="100%" height="100%" src="//www.youtube.com/embed/' +
                a.id +
                '?autoplay=1&enablejsapi=1&controls=1&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1" allow="autoplay" frameborder="0" allowfullscreen></iframe>')
            : 'vimeo' === a.type
            ? (i =
                '<iframe src="//player.vimeo.com/video/' +
                a.id +
                '?autoplay=1" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            : 'vzaar' === a.type &&
              (i =
                '<iframe frameborder="0"height="100%"width="100%" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
                a.id +
                '/player?autoplay=true"></iframe>'),
          t('<div class="slide-video-frame">' + i + '</div>').insertAfter(s.find('.slide-video')),
          (this._playing = s.addClass('slide-video-playing')))
      }),
      (a.prototype.isInFullScreen = function () {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement
        return e && t(e).parent().hasClass('slide-video-frame')
      }),
      (a.prototype.destroy = function () {
        var t, e
        for (t in (this._core.$element.off('click.btq.video'), this._handlers))
          this._core.$element.off(t, this._handlers[t])
        for (e in Object.getOwnPropertyNames(this)) 'function' != typeof this[e] && (this[e] = null)
      }),
      (t.fn.BTQSlider.Constructor.Plugins.Video = a)
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var a = function (e) {
      ;(this.core = e),
        (this.core.options = t.extend({}, a.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = s),
        (this.next = s),
        (this.handlers = {
          'change.btq.slidebox': t.proxy(function (t) {
            t.namespace &&
              'position' == t.property.name &&
              ((this.previous = this.core.current()), (this.next = t.property.value))
          }, this),
          'drag.btq.slidebox dragged.btq.slidebox translated.btq.slidebox': t.proxy(function (t) {
            t.namespace && (this.swapping = 'translated' == t.type)
          }, this),
          'translate.btq.slidebox': t.proxy(function (t) {
            t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
          }, this)
        }),
        this.core.$element.on(this.handlers)
    }
    ;(a.Defaults = {
      animateOut: !1,
      animateIn: !1
    }),
      (a.prototype.swap = function () {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
          this.core.speed(0)
          var e,
            i = t.proxy(this.clear, this),
            s = this.core.$stage.children().eq(this.previous),
            a = this.core.$stage.children().eq(this.next),
            n = this.core.settings.animateIn,
            o = this.core.settings.animateOut
          this.core.current() !== this.previous &&
            (o &&
              ((e = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
              s
                .one(t.support.animation.end, i)
                .css({
                  left: e + 'px'
                })
                .addClass('animated animated-out')
                .addClass(o)),
            n && a.one(t.support.animation.end, i).addClass('animated animated-in').addClass(n))
        }
      }),
      (a.prototype.clear = function (e) {
        t(e.target)
          .css({
            left: ''
          })
          .removeClass('animated animated-out animated-in')
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd()
      }),
      (a.prototype.destroy = function () {
        var t, e
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t])
        for (e in Object.getOwnPropertyNames(this)) 'function' != typeof this[e] && (this[e] = null)
      }),
      (t.fn.BTQSlider.Constructor.Plugins.Animate = a)
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var a = function (e) {
      ;(this._core = e),
        (this._timeout = null),
        (this._paused = !1),
        (this._handlers = {
          'changed.btq.slidebox': t.proxy(function (t) {
            t.namespace && 'settings' === t.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : t.namespace &&
                'position' === t.property.name &&
                this._core.settings.autoplay &&
                this._setAutoPlayInterval()
          }, this),
          'initialized.btq.slidebox': t.proxy(function (t) {
            t.namespace && this._core.settings.autoplay && this.play()
          }, this),
          'play.btq.autoplay': t.proxy(function (t, e, i) {
            t.namespace && this.play(e, i)
          }, this),
          'stop.btq.autoplay': t.proxy(function (t) {
            t.namespace && this.stop()
          }, this),
          'mouseover.btq.autoplay': t.proxy(function () {
            this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.pause()
          }, this),
          'mouseleave.btq.autoplay': t.proxy(function () {
            this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.play()
          }, this),
          'touchstart.btq.core': t.proxy(function () {
            this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.pause()
          }, this),
          'touchend.btq.core': t.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play()
          }, this)
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = t.extend({}, a.Defaults, this._core.options))
    }
    ;(a.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1
    }),
      (a.prototype.play = function (t, e) {
        ;(this._paused = !1), this._core.is('rotating') || (this._core.enter('rotating'), this._setAutoPlayInterval())
      }),
      (a.prototype._getNextTimeout = function (s, a) {
        return (
          this._timeout && e.clearTimeout(this._timeout),
          e.setTimeout(
            t.proxy(function () {
              this._paused ||
                this._core.is('busy') ||
                this._core.is('interacting') ||
                i.hidden ||
                this._core.next(a || this._core.settings.autoplaySpeed)
            }, this),
            s || this._core.settings.autoplayTimeout
          )
        )
      }),
      (a.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout()
      }),
      (a.prototype.stop = function () {
        this._core.is('rotating') && (e.clearTimeout(this._timeout), this._core.leave('rotating'))
      }),
      (a.prototype.pause = function () {
        this._core.is('rotating') && (this._paused = !0)
      }),
      (a.prototype.destroy = function () {
        var t, e
        for (t in (this.stop(), this._handlers)) this._core.$element.off(t, this._handlers[t])
        for (e in Object.getOwnPropertyNames(this)) 'function' != typeof this[e] && (this[e] = null)
      }),
      (t.fn.BTQSlider.Constructor.Plugins.autoplay = a)
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    'use strict'
    var a = function (e) {
      ;(this._core = e),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to
        }),
        (this._handlers = {
          'prepared.btq.slidebox': t.proxy(function (e) {
            e.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  t(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') +
                  '</div>'
              )
          }, this),
          'added.btq.slidebox': t.proxy(function (t) {
            t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
          }, this),
          'remove.btq.slidebox': t.proxy(function (t) {
            t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
          }, this),
          'changed.btq.slidebox': t.proxy(function (t) {
            t.namespace && 'position' == t.property.name && this.draw()
          }, this),
          'initialized.btq.slidebox': t.proxy(function (t) {
            t.namespace &&
              !this._initialized &&
              (this._core.trigger('initialize', null, 'navigation'),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger('initialized', null, 'navigation'))
          }, this),
          'refreshed.btq.slidebox': t.proxy(function (t) {
            t.namespace &&
              this._initialized &&
              (this._core.trigger('refresh', null, 'navigation'),
              this.update(),
              this.draw(),
              this._core.trigger('refreshed', null, 'navigation'))
          }, this)
        }),
        (this._core.options = t.extend({}, a.Defaults, this._core.options)),
        this.$element.on(this._handlers)
    }
    ;(a.Defaults = {
      nav: !1,
      navText: ['', ''],
      navSpeed: !1,
      navElement: 'div',
      navContainer: !1,
      navContainerClass: 'slide-buttons',
      navClass: ['slide-prev', 'slide-next'],
      slideBy: 1,
      dotClass: 'slide-page',
      dotsClass: 'slide-pagination',
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
      dotNum: !1,
      dotSvg: !1
    }),
      (a.prototype.initialize = function () {
        var e,
          i = this._core.settings
        for (e in ((this._controls.$relative = (
          i.navContainer ? t(i.navContainer) : t('<div>').addClass(i.navContainerClass).appendTo(this.$element)
        ).addClass('disabled')),
        (this._controls.$previous = t('<' + i.navElement + '>')
          .addClass(i.navClass[0])
          .html(i.navText[0])
          .prependTo(this._controls.$relative)
          .on(
            'click',
            t.proxy(function (t) {
              this.prev(i.navSpeed)
            }, this)
          )),
        (this._controls.$next = t('<' + i.navElement + '>')
          .addClass(i.navClass[1])
          .html(i.navText[1])
          .appendTo(this._controls.$relative)
          .on(
            'click',
            t.proxy(function (t) {
              this.next(i.navSpeed)
            }, this)
          )),
        i.dotsData || (this._templates = [t('<div>').addClass(i.dotClass).append(t('<span>')).prop('outerHTML')]),
        (this._controls.$absolute = (
          i.dotsContainer ? t(i.dotsContainer) : t('<div>').addClass(i.dotsClass).appendTo(this.$element)
        ).addClass('disabled')),
        this._controls.$absolute.on(
          'click',
          'div',
          t.proxy(function (e) {
            var s = t(e.target).parent().is(this._controls.$absolute)
              ? t(e.target).index()
              : t(e.target).parent().index()
            e.preventDefault(), this.to(s, i.dotsSpeed)
          }, this)
        ),
        this._overrides))
          this._core[e] = t.proxy(this[e], this)
      }),
      (a.prototype.destroy = function () {
        var t, e, i, s
        for (t in this._handlers) this.$element.off(t, this._handlers[t])
        for (e in this._controls) this._controls[e].remove()
        for (s in this.overides) this._core[s] = this._overrides[s]
        for (i in Object.getOwnPropertyNames(this)) 'function' != typeof this[i] && (this[i] = null)
      }),
      (a.prototype.update = function () {
        var t,
          e,
          i = this._core.clones().length / 2,
          s = i + this._core.items().length,
          a = this._core.maximum(!0),
          n = this._core.settings,
          o = n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items
        if (('page' !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || 'page' == n.slideBy))
          for (this._pages = [], t = i, e = 0, 0; t < s; t++) {
            if (e >= o || 0 === e) {
              if (
                (this._pages.push({
                  start: Math.min(a, t - i),
                  end: t - i + o - 1
                }),
                Math.min(a, t - i) === a)
              )
                break
              e = 0
            }
            e += this._core.mergers(this._core.relative(t))
          }
      }),
      (a.prototype.draw = function () {
        var e,
          i = this._core.settings,
          s = this._core.items().length <= i.items,
          a = this._core.relative(this._core.current()),
          n = i.loop || i.rewind
        this._controls.$relative.toggleClass('disabled', !i.nav || s),
          i.nav &&
            (this._controls.$previous.toggleClass('disabled', !n && a <= this._core.minimum(!0)),
            this._controls.$next.toggleClass('disabled', !n && a >= this._core.maximum(!0))),
          this._controls.$absolute.toggleClass('disabled', !i.dots || s),
          i.dots &&
            ((e = this._pages.length - this._controls.$absolute.children().length),
            i.dotsData && 0 !== e
              ? this._controls.$absolute.html(this._templates.join(''))
              : e > 0
              ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0]))
              : e < 0 && this._controls.$absolute.children().slice(e).remove(),
            1 == i.dotNum &&
              0 !== e &&
              this._controls.$absolute.children().each(function (e, i) {
                t(i).children().addClass('dot-number'),
                  t(this)
                    .children()
                    .text(e + 1)
              }),
            0 == i.dotNum && 0 !== e && (t('.dot-number').empty(), t('div .dot-number').removeClass('dot-number')),
            i.dotSvg &&
              0 !== e &&
              this._controls.$absolute.children().each(function (e, i) {
                t(i).children().append('<svg><circle class="circle-outer" cx="8" cy="8" r="6.2"/></svg>')
              }),
            this._controls.$absolute.find('.active').removeClass('active'),
            this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass('active'))
      }),
      (a.prototype.onTrigger = function (e) {
        var i = this._core.settings
        e.page = {
          index: t.inArray(this.current(), this._pages),
          count: this._pages.length,
          size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
      }),
      (a.prototype.current = function () {
        var e = this._core.relative(this._core.current())
        return t
          .grep(
            this._pages,
            t.proxy(function (t, i) {
              return t.start <= e && t.end >= e
            }, this)
          )
          .pop()
      }),
      (a.prototype.getPosition = function (e) {
        var i,
          s,
          a = this._core.settings
        return (
          'page' == a.slideBy
            ? ((i = t.inArray(this.current(), this._pages)),
              (s = this._pages.length),
              e ? ++i : --i,
              (i = this._pages[((i % s) + s) % s].start))
            : ((i = this._core.relative(this._core.current())),
              (s = this._core.items().length),
              e ? (i += a.slideBy) : (i -= a.slideBy)),
          i
        )
      }),
      (a.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
      }),
      (a.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
      }),
      (a.prototype.to = function (e, i, s) {
        var a
        !s && this._pages.length
          ? ((a = this._pages.length), t.proxy(this._overrides.to, this._core)(this._pages[((e % a) + a) % a].start, i))
          : t.proxy(this._overrides.to, this._core)(e, i)
      }),
      (t.fn.BTQSlider.Constructor.Plugins.Navigation = a)
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    'use strict'
    var a = function (i) {
      ;(this._core = i),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          'initialized.btq.slidebox': t.proxy(function (i) {
            i.namespace && 'URLHash' === this._core.settings.startPosition && t(e).trigger('hashchange.btq.navigation')
          }, this),
          'prepared.btq.slidebox': t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash')
              if (!i) return
              this._hashes[i] = e.content
            }
          }, this),
          'changed.btq.slidebox': t.proxy(function (i) {
            if (i.namespace && 'position' === i.property.name) {
              var s = this._core.items(this._core.relative(this._core.current())),
                a = t
                  .map(this._hashes, function (t, e) {
                    return t === s ? e : null
                  })
                  .join()
              if (!a || e.location.hash.slice(1) === a) return
              e.location.hash = a
            }
          }, this)
        }),
        (this._core.options = t.extend({}, a.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        t(e).on(
          'hashchange.btq.navigation',
          t.proxy(function (t) {
            var i = e.location.hash.substring(1),
              s = this._core.$stage.children(),
              a = this._hashes[i] && s.index(this._hashes[i])
            undefined !== a && a !== this._core.current() && this._core.to(this._core.relative(a), !1, !0)
          }, this)
        )
    }
    ;(a.Defaults = {
      URLhashListener: !1
    }),
      (a.prototype.destroy = function () {
        var i, s
        for (i in (t(e).off('hashchange.btq.navigation'), this._handlers)) this._core.$element.off(i, this._handlers[i])
        for (s in Object.getOwnPropertyNames(this)) 'function' != typeof this[s] && (this[s] = null)
      }),
      (t.fn.BTQSlider.Constructor.Plugins.Hash = a)
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var a = t('<support>').get(0).style,
      n = 'Webkit Moz O ms'.split(' '),
      o = {
        transition: {
          end: {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd',
            transition: 'transitionend'
          }
        },
        animation: {
          end: {
            WebkitAnimation: 'webkitAnimationEnd',
            MozAnimation: 'animationend',
            OAnimation: 'oAnimationEnd',
            animation: 'animationend'
          }
        }
      },
      r = function () {
        return !!c('transform')
      },
      l = function () {
        return !!c('perspective')
      },
      d = function () {
        return !!c('animation')
      }
    function c(e, i) {
      var o = !1,
        r = e.charAt(0).toUpperCase() + e.slice(1)
      return (
        t.each((e + ' ' + n.join(r + ' ') + r).split(' '), function (t, e) {
          if (a[e] !== s) return (o = !i || e), !1
        }),
        o
      )
    }
    function h(t) {
      return c(t, !0)
    }
    ;(function () {
      return !!c('transition')
    })() &&
      ((t.support.transition = new String(h('transition'))),
      (t.support.transition.end = o.transition.end[t.support.transition])),
      d() &&
        ((t.support.animation = new String(h('animation'))),
        (t.support.animation.end = o.animation.end[t.support.animation])),
      r() && ((t.support.transform = new String(h('transform'))), (t.support.transform3d = l()))
  })(window.Zepto || window.jQuery, window, document)
var UA = navigator.userAgent || navigator.userAgentData || navigator.appVersion || navigator.platform,
  HTML = document.documentElement,
  isFirefox = UA.match(/firefox|fxios/i),
  isSafari =
    /constructor/i.test(window.HTMLElement) ||
    '[object SafariRemoteNotification]' === (!window.safari || safari.pushNotification).toString(),
  isIE9 = /MSIE 9/i.test(UA),
  isIE10 = /MSIE 10/i.test(UA),
  isIE11 = /rv:11.0/i.test(UA),
  isIE = !!document.documentMode,
  isEdge = UA.match(/edg/i) || (!isIE && !!window.StyleMedia && !isIE11),
  isChrome =
    UA.match(/chrome|chromium|crios/i) || UA.indexOf('Chrome') > -1 || (!!window.chrome && !!window.chrome.webstore),
  Mobile = window.matchMedia('(max-width: 1100px)'),
  Touch =
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(UA) ||
    'ontouchstart' in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0,
  iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
  MacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform)
iOS && HTML.classList.add('is-iOS'),
  1 == Touch && HTML.classList.add('is-touch'),
  isFirefox
    ? HTML.classList.add('is-Firefox')
    : isEdge
    ? HTML.classList.add('is-Edge')
    : isSafari
    ? HTML.classList.add('is-Safari')
    : isChrome && HTML.classList.add('is-Chrome')
var NotSupport = isIE9 || isIE10 || isIE11 || isIE || isEdge
function changeUrl(t, e, i, s, a, n, o) {
  void 0 !== window.history?.pushState &&
    document.URL != t &&
    '' != t &&
    window.history.pushState(
      {
        path: t,
        dataName: a,
        title: e,
        keyword: s,
        description: i,
        titleog: n,
        descriptionog: o
      },
      '',
      t
    )
  '' != e &&
    ($('#hdtitle').html(e),
    $('meta[property="og:description"]').remove(),
    $('#hdtitle').after('<meta property="og:description" content="' + o + '">'),
    $('meta[property="og:title"]').remove(),
    $('#hdtitle').after('<meta property="og:title" content="' + n + '">'),
    $('meta[property="og:url"]').remove(),
    $('#hdtitle').after('<meta property="og:url" content="' + t + '">'),
    $('meta[name=keywords]').remove(),
    $('#hdtitle').after('<meta name="keywords" content="' + s + '">'),
    $('meta[name=description]').remove(),
    $('#hdtitle').after('<meta name="description" content="' + i + '">')),
    $('#changlanguage_redirect').val(t)
}
iOS || $('.apps-catalogue').attr('href', $('.apps-catalogue').attr('data-hrefgp'))
var timex,
  animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
  Loadx = 0,
  httptemplate = document.querySelector('.httptemplate') ? document.querySelector('.httptemplate').innerHTML : '',
  NewFormat = document.querySelectorAll('.new-product-page, .new-product-detail-page')
if (NewFormat) {
  var format_js = document.getElementById('format_js')
  if (!format_js) {
    ;((script = document.createElement('script')).id = 'format_js'), (script.type = 'text/javascript')
    var style = document.createElement('link')
    ;(style.id = 'new_css'),
      (style.type = 'text/css'),
      (style.rel = 'stylesheet'),
      (script.src = httptemplate + 'default/js/format.js'),
      (style.href = httptemplate + 'default/css/new-css.css')
    /*,document.body.appendChild(script),document.body.appendChild(style)*/
  }
}
function ResizeWindows() {
  $(window).height(), $(window).width(), $(window).height(), $(window).width()
  var t = $(window).width(),
    e = $(window).height(),
    i = 0.5625
  e / t > i ? e : t * i, Mobile.matches ? HTML.classList.add('is-mobile') : HTML.classList.remove('is-mobile')
  var s = $('.slide-mask').innerHeight()
  ;(Mobile.matches
    ? $('.breadcrumb').length
      ? $('.title-page').css({
          top: s - $('.title-page').innerHeight()
        })
      : $('.title-page').css({
          top: s - $('.title-page').innerHeight() - 30
        })
    : $('.title-page').css({
        top: s - $('.title-page').innerHeight() - 60
      }),
  $('.block').length &&
    $('.list-product, .slide-project').each(function (t, e) {
      var i = $(e).children().length
      i < 3 && i > 1
        ? ($(e).children().addClass('middle'), $(e).addClass('middle'))
        : 1 == i && ($(e).children().addClass('full-width'), $(e).addClass('full-width'))
    }),
  $('.sub-nav').length) &&
    $('.sub-nav').find('li').length <= 1 &&
    $('.outer-nav').css({
      display: 'none'
    })
  $('.slide-project').each(function (t, e) {
    $(e).find('.item-pic-project').length < 1 && ($(e).addClass('no-display'), $(e).parent().addClass('no-display'))
  }),
    t <= 680
      ? ($('.bookshelf-pdf').length &&
          $('.bookshelf-pdf').each(function (t, e) {
            0 == $(e).find('.bookshelf-link').length && $(e).addClass('no-display')
          }),
        detectBook())
      : ($('.bookshelf-pdf').length &&
          $('.bookshelf-pdf').hasClass('no-display') &&
          $('.bookshelf-pdf').removeClass('no-display'),
        $('.bookshelf-pdf').length &&
          $('.bookshelf-row').hasClass('no-display') &&
          $('.bookshelf-row').removeClass('no-display')),
    t <= 1100
      ? ($('.slide-mask').css({
          transform: 'translate3d(0px, 0px, 0px)'
        }),
        $('.load-text img, .details-text img').removeClass('zoom-pic'))
      : t > 1100 &&
        ((2e3 / 1125) * (e - 110) > t
          ? $('.album-box').addClass('is-portrait')
          : $('.album-box').removeClass('is-portrait'),
        $('.load-text img, .details-text img').removeClass('zoom-pic')),
    $('.showroom-pro').length &&
      ($('.list-detail').hasClass('active') && $('.list-detail.active').height('auto'),
      $('.list-detail-group').hasClass('open-group') && $('.list-detail-group.open-group').height('auto'))
}
function Done() {
  if (
    (ResizeWindows(),
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: 0
        },
        500,
        'linear',
        function () {
          SlidePicture()
        }
      ),
    $('.go-top').removeClass('show'),
    $('#about-page').length &&
      $('.content-text p').each(function (t, e) {
        $(e).addClass('ani-item')
      }),
    $('.description h2').length &&
      $('.description h2').lettering('words').children('span').lettering().children('span').lettering(),
    $('.slogan > h2').lettering('words').children('span').lettering().children('span').lettering(),
    $('.title-page > h1').lettering('lines').children('span').lettering().children('span').lettering(),
    $('.content-page > h2, .title-main h2')
      .lettering('words')
      .children('span')
      .lettering()
      .children('span')
      .lettering(),
    $('.container')
      .stop()
      .animate(
        {
          opacity: 1
        },
        1e3,
        'linear',
        function () {
          ContentLoad(),
            $('.loadicon').length &&
              $('.loadicon').fadeOut(500, function () {
                $('.loadicon').remove()
              }),
            $('.loadx').length &&
              $('.loadx').fadeOut(500, function () {
                $('.loadx').remove()
              }),
            $('.outer-nav').length && SubOverSize()
        }
      ),
    $('.player, .play-video, .view-video').length && !$('#youtube_js').length)
  ) {
    var t = document.createElement('script')
    ;(t.id = 'youtube_js'),
      t.setAttribute('rel', 'preload'),
      t.setAttribute('as', 'script'),
      (t.src = 'https://www.youtube.com/player_api'),
      document.body.appendChild(t)
  }
  $('#home-page').length
}
function Loadpic() {
  $(
    '.pic-news, .pic-pro, .pic-thumb, .news-pic, .catalogue-top, .catalogue-box, .over-pic-project, .over-pic-product'
  ).each(function (t, e) {
    var i = $(e).find('img').attr('src') || $(e).find('img').attr('data-src')
    if (i) {
      var s = i.replace(/(^url\()|(\)$|[\"\'])/g, '')
      $(e).css({
        'background-image': 'url(' + s + ')'
      })
    }
  })
}
function detectBook() {
  $('.bookshelf-col').each(function (t, e) {
    5 == $(e).find('.no-display').length && $(e).parent().addClass('no-display')
  })
}
function ListOpen() {
  function t(t) {
    var e = $(t).find('.content-list-detail').innerHeight()
    $(t).animate(
      {
        height: e + 10
      },
      200,
      'linear'
    )
  }
  $('.list-title').bind('click', function (e) {
    e.preventDefault()
    var i = $(this).attr('data-list'),
      s = $('.list-detail[data-list= "' + i + '"]'),
      a = $(s).find('.box-details').innerHeight() + 20
    if ($(this).parent().hasClass('active'))
      $(s).height(a),
        $(s).removeClass('active'),
        $(s)
          .stop()
          .animate(
            {
              height: 0
            },
            500,
            'linear',
            function () {
              ;($(this).parent().removeClass('active'), $('.open-group').length) &&
                t($(this).parent().parent().parent())
            }
          )
    else {
      $(s).height(0)
      var n = $(s).parent().parent().find('.list-item.active')
      $(n).length &&
        ($(n).find('.list-detail').stop().animate(
          {
            height: 0
          },
          300,
          'linear'
        ),
        $(n).removeClass('active'),
        $(n).find('.list-detail').removeClass('active')),
        $(s).addClass('active'),
        $(s)
          .stop()
          .animate(
            {
              height: a
            },
            300,
            'linear',
            function () {
              ;($(this).parent().addClass('active'), $('.open-group').length) && t($(this).parent().parent().parent())
            }
          )
    }
    return !1
  }),
    $('.list-title-group').bind('click', function (t) {
      t.preventDefault()
      var e = $(this).attr('data-list'),
        i = $('.list-detail-group[data-list= "' + e + '"]'),
        s = $(i).find('.content-list-detail').innerHeight() + 10
      if ($(this).parent().hasClass('open-group'))
        $(i).height(s),
          $(i).removeClass('open-group'),
          $(i)
            .stop()
            .animate(
              {
                height: 0
              },
              300,
              'linear',
              function () {
                $(this).parent().removeClass('open-group')
              }
            )
      else {
        $(i).height(0)
        var a = $(i).parent().parent().find('.list-item-group.active')
        $(a).length &&
          ($(a).find('.list-detail-group').stop().animate(
            {
              height: 0
            },
            300,
            'linear'
          ),
          $(a).removeClass('active'),
          $(a).find('.list-detail-group').removeClass('open-group')),
          $(i).addClass('open-group'),
          $(i)
            .stop()
            .animate(
              {
                height: s
              },
              300,
              'linear',
              function () {
                $(this).parent().addClass('open-group')
              }
            )
      }
      return !1
    })
}
if (
  ($(window).width() <= 1100 &&
    $('.sub-nav, .load-text table').on(
      'mousewheel',
      function (t, e) {
        $(this).scrollLeft(this.scrollLeft + 40 * -e), t.preventDefault()
      },
      {
        passive: !0
      }
    ),
  $(document).ready(function () {
    if (
      (ResizeWindows(),
      $('#home-page').length
        ? $('.loadicon').hasClass('loader') || ($('.loadicon').show(), $('.loadicon').addClass('loader'))
        : $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>'),
      $('#levelmenu-page').length && $('.visual-regis').addClass('no-display'),
      $('.outer-nav').length && !$('#catalogue-page').length)
    ) {
      ;(t = $('.outer-nav').clone()), $('.container').prepend(t), $(t).addClass('second')
    }
    var t
    $('.bookshelf-pdf').length &&
      $('.bookshelf-pdf').each(function (t, e) {
        $(e).attr('style', '--data-index: ' + t)
      }),
      $('.box-group').length &&
        $('.box-group').each(function (t, e) {
          $(e).attr('style', '--data-index: ' + t)
        })
  }),
  $(window).on('beforeunload', function () {
    $(window).scrollTop(0)
  }),
  (function (t) {
    'function' == typeof define && define.amd
      ? define(['jquery'], t)
      : 'object' == typeof exports
      ? (module.exports = t(require('jquery')))
      : t(jQuery)
  })(function (t) {
    var e,
      i,
      s,
      a = [],
      n = document,
      o = window,
      r = n.documentElement
    function l() {
      if (a.length) {
        var s,
          l,
          d,
          c = 0,
          h = t.map(a, function (t) {
            var e = t.data.selector,
              i = t.$element
            return e ? i.find(e) : i
          })
        for (
          e =
            e ||
            ((d = {
              height: o.innerHeight,
              width: o.innerWidth
            }).height ||
              (!(s = n.compatMode) && t.support.boxModel) ||
              (d = {
                height: (l = 'CSS1Compat' === s ? r : n.body).clientHeight,
                width: l.clientWidth
              }),
            d),
            i = i || {
              top: o.pageYOffset || r.scrollTop || n.body.scrollTop,
              left: o.pageXOffset || r.scrollLeft || n.body.scrollLeft
            };
          c < a.length;
          c++
        )
          if (t.contains(r, h[c][0])) {
            var u = t(h[c]),
              p = {
                height: u[0].offsetHeight,
                width: u[0].offsetWidth
              },
              f = u.offset(),
              m = u.data('InView')
            if (!i || !e) return
            f.top + p.height > i.top &&
            f.top < i.top + e.height &&
            f.left + p.width > i.left &&
            f.left < i.left + e.width
              ? m || u.data('InView', !0).trigger('InView', [!0])
              : m && u.data('InView', !1).trigger('InView', [!1])
          }
      }
    }
    ;(t.event.special.InView = {
      add: function (e) {
        a.push({
          data: e,
          $element: t(this),
          element: this
        }),
          !s && a.length && (s = setInterval(l, 250))
      },
      remove: function (t) {
        for (var e = 0; e < a.length; e++) {
          var i = a[e]
          if (i.element === this && i.data.guid === t.guid) {
            a.splice(e, 1)
            break
          }
        }
        a.length || (clearInterval(s), (s = null))
      }
    }),
      t(o).on('scroll resize scrollstop', function () {
        e = i = null
      }),
      !r.addEventListener &&
        r.attachEvent &&
        r.attachEvent('onfocusin', function () {
          i = null
        })
  }),
  $('.youtube-video').length && !$('#youtube_js').length)
) {
  var script
  ;((script = document.createElement('script')).id = 'youtube_js'),
    script.setAttribute('rel', 'preload'),
    script.setAttribute('as', 'script'),
    (script.src = 'https://www.youtube.com/iframe_api'),
    document.body.appendChild(script)
  var youTubeId,
    youTubeUrl = $('.youtube-video').attr('data-embed'),
    regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
    match = youTubeUrl.match(regExp)
  youTubeId = match && 11 == match[2].length ? match[2] : 'no video found'
  var player,
    youTube = $('.youtube-video'),
    Source = 'https://img.youtube.com/vi/' + youTubeId + '/sddefault.jpg'
  if (Mobile.matches)
    var SRC =
      '<iframe id="VYT" title="video" src="https://www.youtube.com/embed/' +
      youTubeId +
      '?autoplay=1&enablejsapi=1&controls=1&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=' +
      youTubeId +
      '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>'
  else
    SRC =
      '<iframe id="VYT" title="video" src="https://www.youtube.com/embed/' +
      youTubeId +
      '?autoplay=1&enablejsapi=1&controls=0&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=' +
      youTubeId +
      '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>'
  if (($(youTube).append(SRC), '' != $('.play-button').attr('data-image'))) BG = $('.play-button').attr('data-image')
  else var BG = Source.replace(/(^url\()|(\)$|[\"\'])/g, '')
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('VYT', {
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    })
  }
  function cleanTime() {
    return Math.round(player.getCurrentTime())
  }
  function updateTimerDisplay() {
    $('#current-time').text(formatTime(player.getCurrentTime())),
      $('#duration').text(formatTime(player.getDuration())),
      $('#duration').text() == $('#current-time').text() &&
        ($('#youtube-page').length
          ? $('#playpause').trigger('click')
          : (clearInterval(time_update),
            $('.bg-video').removeClass('hide'),
            $('.slide-mask').trigger('next.btq.slidebox')))
  }
  function formatTime(t) {
    t = Math.round(t)
    var e = Math.floor(t / 60),
      i = t - 60 * e
    return e + ':' + (i = i < 10 ? '0' + i : i)
  }
  function updateProgressBar() {
    $('#progress-bar').val((player.getCurrentTime() / player.getDuration()) * 100)
  }
  function onPlayerReady(t) {
    if (
      (t.target.mute(),
      $('#mutetoggle').attr('data-state', 'unmute'),
      $('.pause-button').trigger('click'),
      updateTimerDisplay(),
      updateProgressBar(),
      clearInterval(time_update),
      (time_update = setInterval(function () {
        updateTimerDisplay(), updateProgressBar()
      }, 500)),
      player.getPlayerState() > 1)
    ) {
      var e = player.getVideoData().title
      $('.youtube-video iframe').attr('title', e)
    }
  }
  function onPlayerStateChange(t) {
    switch (t.data) {
      case YT.PlayerState.PLAYING:
        $('.play-button').removeClass('show'), $('#playpause').attr('data-state', 'pause')
        break
      case YT.PlayerState.PAUSED:
        $('.play-button').addClass('show'), $('#playpause').attr('data-state', 'play')
      case YT.PlayerState.ENDED:
    }
  }
  $(youTube)
    .parent()
    .append('<div class="bg-video" style="background-image:url(' + BG + ')"></div>'),
    (time_update = 0),
    $('#progress-bar').on('mouseup touchend', function (t) {
      var e = player.getDuration() * (t.target.value / 100)
      player.seekTo(e), $('.bg-video').hasClass('hide') || $('.bg-video').addClass('hide')
    }),
    $('#playpause').bind('click', function () {
      'play' == $(this).attr('data-state')
        ? (player.playVideo(),
          $(this).attr('data-state', 'pause'),
          $('.bg-video').addClass('hide'),
          $('.play-button').removeClass('show'))
        : (player.pauseVideo(), $(this).attr('data-state', 'play'), $('.play-button').addClass('show'))
    }),
    $('#mutetoggle').bind('click', function () {
      'unmute' == $(this).attr('data-state')
        ? (player.unMute(), $(this).attr('data-state', 'mute'))
        : (player.mute(), $(this).attr('data-state', 'unmute'))
    }),
    $('#fullscreen').bind('click', function () {
      'go-fullscreen' == $(this).attr('data-state')
        ? ($(this).attr('data-state', 'cancel-fullscreen'),
          $('.video-youtube-full').addClass('full-frame'),
          $('.banner-video').addClass('full-frame'),
          $('body', 'html').addClass('no-scroll'),
          iOS || screenfull.request($('.video-youtube-full')[0]))
        : ($(this).attr('data-state', 'go-fullscreen'),
          $('.video-youtube-full').removeClass('full-frame'),
          $('.banner-video').removeClass('full-frame'),
          $('body', 'html').removeClass('no-scroll'),
          iOS || screenfull.exit())
    }),
    $('.play-button').on('click', function (t) {
      t.preventDefault(),
        player.playVideo(),
        $(this).removeClass('show'),
        $('#playpause').attr('data-state', 'pause'),
        $('.bg-video').addClass('hide')
    }),
    $('.pause-button').on('click', function (t) {
      t.preventDefault(),
        player.pauseVideo(),
        $('.play-button').addClass('show'),
        $('#playpause').attr('data-state', 'play')
    }),
    $('.youtube-video').on('click', function (t) {
      t.preventDefault(), $('#playpause').trigger('click')
    })
}
function CustomeSelect() {
  var t, e, i, s, a, n, o, r, l, d, c
  for (s = (t = document.getElementsByClassName('custom-select')).length, e = 0; e < s; e++)
    if (((n = t[e].getElementsByTagName('select')[0]), !t[e].querySelector('.select-items'))) {
      ;(a = n.length), (o = document.createElement('DIV'))
      var h = n.className
      o.setAttribute('class', 'select-selected'),
        (d = document.createElement('DIV')).setAttribute('class', 'drop-down-select'),
        (c = document.createElement('DIV')).setAttribute('class', 'wrap-drop-down-select'),
        (o.innerHTML = n.options[n.selectedIndex].innerHTML),
        t[e].appendChild(o),
        (r = document.createElement('DIV')).setAttribute('class', 'select-items select-hide ' + h + ' ')
      for (i = 1; i < a; i++) {
        ;((l = document.createElement('DIV')).className = 'select-div'), (l.innerHTML = n.options[i].innerHTML)
        var u = n.options[i].getAttribute('value'),
          p = n.options[i].getAttribute('data-href')
        u && l.setAttribute('data-value', u),
          p && l.setAttribute('data-href', p),
          l.addEventListener('click', function (t) {
            var e, i, s, a, n, o, r
            for (
              o = (a = this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('select')[0]).length,
                n = this.parentNode.parentNode.parentNode.previousSibling,
                i = 0;
              i < o;
              i++
            )
              if (a.options[i].innerHTML == this.innerHTML) {
                for (
                  a.selectedIndex = i,
                    n.innerHTML = this.innerHTML,
                    r = (e = this.parentNode.parentNode.parentNode.getElementsByClassName('same-as-selected')).length,
                    s = 0;
                  s < r;
                  s++
                )
                  e[s].classList.remove('same-as-selected')
                this.classList.add('same-as-selected')
                break
              }
            n.click()
          }),
          d.appendChild(l),
          c.appendChild(d),
          r.appendChild(c)
      }
      t[e].appendChild(r),
        o.addEventListener('click', function (t) {
          t.stopPropagation(),
            f(this),
            this.nextSibling.classList.toggle('select-hide'),
            this.classList.toggle('select-arrow-active'),
            this.parentNode.classList.toggle('level-index-in')
        })
    }
  function f(t) {
    var e,
      i,
      s,
      a,
      n,
      o = []
    for (
      e = document.getElementsByClassName('select-items'),
        i = document.getElementsByClassName('select-selected'),
        a = e.length,
        n = i.length,
        s = 0;
      s < n;
      s++
    )
      t == i[s]
        ? o.push(s)
        : (i[s].classList.remove('select-arrow-active'), i[s].parentNode.classList.remove('level-index-in'))
    for (s = 0; s < a; s++) o.indexOf(s) && e[s].classList.add('select-hide')
  }
  document.addEventListener('click', f)
}
!(function (t) {
  var e = {
    on: t.fn.on,
    bind: t.fn.bind
  }
  t.each(e, function (i) {
    t.fn[i] = function () {
      var t,
        s = [].slice.call(arguments),
        a = s.pop(),
        n = s.pop()
      return (
        s.push(function () {
          var e = this,
            i = arguments
          clearTimeout(t),
            (t = setTimeout(function () {
              n.apply(e, [].slice.call(i))
            }, a))
        }),
        e[i].apply(this, isNaN(a) ? arguments : s)
      )
    }
  })
})(jQuery)
var Details = 0,
  doWheel = !0,
  doTouch = !0,
  windscroll = $(document).scrollTop()
function onScroll() {
  var t = $('.ani-item')
  $(t).each(function (t, e) {
    $(e).isInViewport() && $(e).addClass('on-show')
  })
}
function NavClick() {
  $('.nav-click').bind('click', function () {
    return (
      $(this).hasClass('active')
        ? ($('.second-sub-menu').height(0),
          $('.add').removeClass('active'),
          $('.overlay-menu, .nav, .nav-click, .sub-menu').removeClass('active'),
          $('html, body').removeClass('no-scroll'),
          $('.nav > .wrap-header').scrollTop(0))
        : ($('.overlay-menu, .nav, .nav-click').addClass('active'),
          $('html, body').addClass('no-scroll'),
          $('.nav > .wrap-header').scrollTop(0),
          $('.search-but').hasClass('active') && $('.search-form, .search-but').removeClass('active')),
      !1
    )
  }),
    $('.nav li > .has-sub').bind('click mouseenter', function (t) {
      if ((t.preventDefault(), !Mobile.matches))
        if ($(this).hasClass('has-sub') && !$(this).parent().hasClass('active')) {
          var e = $(this).attr('data-open')
          $('.has-sub').parent().removeClass('active'),
            $(this).parent().addClass('active'),
            $('.sub-menu').removeClass('active'),
            $('.sub-menu[data-menu= "' + e + '"]').addClass('active'),
            'one' == e || 'data-pro' == e
              ? $('.overlay-menu').addClass('active')
              : $('.overlay-menu').removeClass('active')
        } else $('.has-sub').parent().removeClass('active'), $('.sub-menu, .overlay-menu').removeClass('active')
      return !1
    }),
    $('.add').bind('click', function (t) {
      t.preventDefault()
      var e = $(this).find('.hover-btn').attr('data-sub')
      if ($(this).hasClass('active'))
        $(this).removeClass('active'), $('.second-sub-menu[data-show= "' + e + '"]').height(0)
      else {
        $(this).addClass('active')
        var i = $('.second-sub-menu[data-show= "' + e + '"]')
          .find('.second-all-sub')
          .innerHeight()
        $('.second-sub-menu[data-show= "' + e + '"]').height(i)
      }
      return !1
    }),
    Mobile.matches ||
      $('.item-sub[data-load="first-load"]').hasClass('subactive') ||
      $('.item-sub[data-load="first-load"]').trigger('click'),
    $('.nav li > .link-load').bind('mouseenter', function (t) {
      $('.has-sub').parent().removeClass('active'), $('.sub-menu, .overlay-menu').removeClass('active')
    }),
    $('.color-head, .logo').on('mouseenter', function (t) {
      Mobile.matches ||
        ($('.has-sub').parent().removeClass('active'), $('.sub-menu, .overlay-menu').removeClass('active'))
    }),
    $('.overlay-menu').on('click mouseenter', function (t) {
      Mobile.matches
        ? ($('.second-sub-menu').height(0),
          $('.add').removeClass('active'),
          $('.overlay-menu, .nav, .nav-click, .sub-menu').removeClass('active'),
          $('html, body').removeClass('no-scroll'),
          $('.nav > .wrap-header').scrollTop(0))
        : ($('.has-sub').parent().removeClass('active'), $('.sub-menu, .overlay-menu').removeClass('active'))
    }),
    $('.container').on('click mouseenter', function (t) {
      Mobile.matches ||
        ($('.has-sub').parent().removeClass('active'), $('.sub-menu, .overlay-menu').removeClass('active'))
    }),
    $('.content-page, .slide-mask').on('mouseenter click', function (t) {
      $('.sub-menu, .overlay-menu').removeClass('active'), $('.has-sub').parent().removeClass('active')
    })
}
function execSearch() {
  var t = $('#qsearch').val(),
    e = $('#href_search').val(),
    i = $('#defaultvalue').val(),
    s = ((i = $('#defaultvalue').val()), $('#errorsearch').val())
  if ((hidemsg(), t == i || '' == t)) return !1
  if (t.length <= 1)
    return (
      $('.overlay-dark').after("<div  class='contact-success color-red'>" + s + '</div>'), setTimeout(hidemsg, 5e3), !1
    )
  if ('' != t) {
    var a = e + '?qsearch=' + encodeURIComponent(t)
    return (window.location = a), !1
  }
}
function Search() {
  $(document).on('click', '.search-but', function (t) {
    $(this).hasClass('active')
      ? ($('.search-form, .search-but').removeClass('active'), execSearch())
      : ($('.search-form, .search-but').addClass('active'),
        document.getElementById('search').reset(),
        $('.nav-click').hasClass('active') && $('.nav-click').trigger('click'))
  }),
    $('#qsearch').keydown(function (t) {
      13 == t.keyCode && execSearch()
    })
}
function SlidePicture() {
  if ($('.slide-popup-mod').length) {
    $('.slide-popup-mod, .details-center').addClass('show')
    var t = $('.slide-popup-mod').attr('data-time') || 5e3
    $('.slide-popup-mod').BTQSlider({
      animateOut: 'fadeout',
      animateIn: 'fadein',
      mouseDrag: !1,
      touchDrag: !1,
      pullDrag: !1,
      rewind: !0,
      margin: 0,
      autoplay: !0,
      autoplayTimeout: t,
      smartSpeed: 600,
      items: 1,
      nav: !1,
      dots: !1,
      dotSvg: !1,
      responsiveRefreshRate: 200
    }),
      $('.slide-popup-mod').on('translate.btq.slidebox', function (t) {
        $('.slide-popup-mod').find('.slide-item').removeClass('ani-text')
      }),
      $('.slide-popup-mod').on('translated.btq.slidebox', function (t) {
        $('.slide-popup-mod').find('.slide-item.active').addClass('ani-text'),
          $('.slide-popup-mod')
            .find('.slide-item.active')
            .removeClass('animated animated-in fade-In animated-out fade-Out')
      })
  }
  if ($('.slide-mask').length) {
    if (($('.slide-mask').addClass('show'), $('.slide-mask').children().length > 1)) {
      t = $('.slide-mask').attr('data-time')
      $('.stop').length ||
        $('.slide-mask')
          .parent()
          .prepend('<button class="stop" aria-label="stop"></button><button class="play"  aria-label="play"></button>')
    } else t = !1
    if ($('.youtube-video').length) var e = !0
    else e = !1
    $('.slide-mask')
      .BTQSlider({
        animateOut: 'fadeout',
        animateIn: 'fadein',
        mouseDrag: !1,
        touchDrag: !1,
        pullDrag: !1,
        rewind: !0,
        margin: 0,
        video: !1,
        autoplay: !0,
        autoplayTimeout: t,
        autoHeight: e,
        smartSpeed: 600,
        items: 1,
        nav: !0,
        dots: !0,
        dotSvg: !0,
        responsiveRefreshRate: 200
      })
      .on(
        'initialize.btq.slidebox',
        (function () {
          $('.arrow').length ||
            ($('.slide-mask .slide-next').append(
              '<svg viewBox="0 0 60 60"><path class="arrow" fill="currentColor" d="M24.5,42 22.5,40.2 33.6,30 22.5,19.8 24.5,18 37.5,30z"></path></svg>'
            ),
            $('.slide-mask .slide-prev').append(
              '<svg viewBox="0 0 60 60"><path class="arrow" fill="currentColor" d="M35.5,42 37.5,40.2 26.4,30 37.5,19.8 35.5,18 22.5,30z"></path></svg>'
            ))
          $('.circle-outer').css({
            '-webkit-animation-duration': 10 * t + 'ms',
            'animation-duration': 10 * t + 'ms'
          }),
            $('.youtube-video').length
              ? $('.slide-mask .slide-item:first-child').hasClass('ani-text')
                ? ($('.slide-mask .slide-pagination').addClass('no-display'),
                  $('.slide-mask').trigger('stop.btq.autoplay'))
                : $('.slide-mask .slide-pagination').removeClass('no-display')
              : setTimeout(function () {
                  for (
                    var t = document.querySelectorAll('.slide-item.active .description h2 > span > span'), e = 0;
                    e < t.length;
                    e++
                  )
                    t[e].style.animationDelay = 0.1 * e + 's'
                  $('.slide-item.active .description').addClass('show'),
                    $('.slide-mask .slide-item.active').addClass('ani-text')
                }, 1e3)
        })()
      ),
      $('.slide-mask').on('translate.btq.slidebox', function (t) {
        $('.slide-mask .slide-item').removeClass('ani-text'), $('.description').removeClass('show')
      }),
      $('.slide-mask').on('translated.btq.slidebox', function (e) {
        if (
          ($('.slide-mask .slide-item.active').addClass('ani-text'),
          $('.youtube-video').length &&
            ($('.slide-mask .slide-item:first-child').hasClass('ani-text')
              ? ($('.slide-mask .slide-pagination').addClass('no-display'),
                $('.play-button').trigger('click'),
                $('.slide-mask').trigger('stop.btq.autoplay'))
              : ($('.slide-mask .slide-pagination').removeClass('no-display'),
                $('.pause-button').trigger('click'),
                $('.slide-mask').trigger('play.btq.autoplay', [t]))),
          $('#home-page').length)
        ) {
          $('.slide-item .description h2 > span > span').removeAttr('style')
          for (
            var i = document.querySelectorAll('.slide-item.active .description h2 > span > span'), s = 0;
            s < i.length;
            s++
          )
            i[s].style.animationDelay = 0.1 * s + 's'
          $('.slide-item.active .description').addClass('show')
        }
      }),
      $('.go-page').on('mouseover', function (t) {
        $('.slide-mask').trigger('stop.btq.autoplay')
      }),
      $('.go-page').on('mouseleave', function (t) {
        $('.slide-mask').trigger('play.btq.autoplay')
      }),
      $('.slide-mask')
        .on('swipeleft', function (t, e) {
          doTouch &&
            ((doTouch = !1),
            $('.slide-mask .slide-item').children().length > 1 && $('.slide-mask').trigger('next.btq.slidebox'),
            setTimeout(turnWheelTouch, 500))
        })
        .on('swiperight', function (t) {
          doTouch &&
            ((doTouch = !1),
            $('.slide-mask .slide-item').children().length > 1 && $('.slide-mask').trigger('prev.btq.slidebox'),
            setTimeout(turnWheelTouch, 500))
        }),
      $('.play').on('click', function () {
        $('.slide-mask').trigger('play.btq.autoplay', [t]),
          $('.slide-mask .slide-buttons, .slide-mask .slide-pagination').removeClass('hide')
      }),
      $('.stop').on('click', function () {
        $('.slide-mask').trigger('stop.btq.autoplay'),
          $('.slide-mask .slide-buttons, .slide-mask .slide-pagination').addClass('hide')
      })
  }
  if ($('.slide-pic').length) {
    if ($('.slide-pic').children().length > 1) t = $('.slide-pic').attr('data-time')
    else t = !1
    if (0 == Touch) var i = !0
    else i = !1
    $('.slide-pic').addClass('lazy'),
      $('.slide-pic')
        .BTQSlider({
          lazyLoad: !0,
          loop: !0,
          nav: !0,
          dots: !0,
          margin: 0,
          autoplay: i,
          autoplayTimeout: t,
          smartSpeed: 600,
          items: 1,
          responsiveRefreshRate: 200,
          responsive: {
            0: {
              items: 1
            }
          }
        })
        .on('initialized.btq.slidebox', StartLazy()),
      $('.view-album').on('mouseover', function (t) {
        $('.slide-pic').trigger('stop.btq.autoplay')
      }),
      $('.view-album').on('mouseleave', function (t) {
        $('.slide-pic').trigger('play.btq.autoplay')
      }),
      $('.slide-pic').trigger('stop.btq.autoplay')
  }
  if ($('.slide-award').length) {
    if ($('.slide-award').children().length > 1) t = $('.slide-award').attr('data-time')
    else t = !1
    $('.slide-award')
      .on('initialized.btq.slidebox', function () {
        var t = $('.slide-award').find('.slide-item').length
        if (
          ($(window).width() >= 900
            ? t <= 3
              ? $('.slide-award').addClass('center-slidebox')
              : $('.slide-award').removeClass('center-slidebox')
            : $(window).width() < 900 && $(window).width() >= 600 && t <= 2
            ? $('.slide-award').addClass('center-slidebox')
            : $('.slide-award').removeClass('center-slidebox'),
          0 == Touch)
        );
        else;
      })
      .BTQSlider({
        loop: !0,
        nav: !0,
        dots: !0,
        margin: 10,
        autoplay: i,
        autoplayTimeout: t,
        smartSpeed: 600,
        autoHeight: !0,
        responsiveRefreshRate: 200,
        responsive: {
          0: {
            items: 1,
            autoHeight: !0
          },
          500: {
            items: 2,
            autoHeight: !1
          },
          1024: {
            items: 3,
            autoHeight: !1
          },
          1100: {
            items: 3,
            autoHeight: !0
          }
        }
      }),
      $('.zoom').on('mouseover', function (t) {
        $('.slide-award').trigger('stop.btq.autoplay')
      }),
      $('.zoom').on('mouseleave', function (t) {
        $('.slide-award').trigger('play.btq.autoplay')
      })
  }
  if (
    ($('.news-link').length &&
      (Mobile.matches ||
        $('.news-link')
          .on('initialized.btq.slidebox', function () {
            $('.news-link').find('.slide-item').length <= 3
              ? $('.news-link').addClass('center-slidebox')
              : $('.news-link').removeClass('center-slidebox')
          })
          .BTQSlider({
            items: 3,
            smartSpeed: 600,
            margin: 5,
            nav: !0,
            dots: !1
          })),
    $('.slide-list-youtube').length &&
      (Mobile.matches ||
        $('.slide-list-youtube').each(function (t, e) {
          $(e)
            .on('initialized.btq.slidebox', function () {})
            .BTQSlider({
              items: 1,
              smartSpeed: 600,
              margin: 0,
              nav: !0,
              dots: !1,
              autoHeight: !0
            })
        })),
    $('.slide-showroom').length &&
      ($(11)
        ? $('.slide-showroom').each(function (t, e) {
            $(e).BTQSlider({
              items: 1,
              smartSpeed: 600,
              margin: 5,
              nav: !0,
              dots: !0,
              rewind: !0,
              dotNum: !0,
              center: !0,
              autoHeight: !0,
              responsive: {
                0: {
                  nav: !1
                },
                1100: {
                  nav: !0
                }
              }
            }),
              $('.view-album').on('mouseover', function (t) {
                $('.slide-showroom').trigger('stop.btq.autoplay')
              }),
              $('.view-album').on('mouseleave', function (t) {
                $('.slide-showroom').trigger('play.btq.autoplay')
              })
          })
        : Mobile.matches ||
          $('.slide-showroom').each(function (t, e) {
            $(e).BTQSlider({
              items: 1,
              smartSpeed: 600,
              margin: 5,
              nav: !0,
              dots: !0,
              rewind: !0,
              dotNum: !0,
              center: !0,
              autoHeight: !0
            })
            var i = $(this).find('.content-showroom.current')
            if ($(i).length) {
              var s = $(i).parent().index()
              $(this).data('btq.slidebox').to(s, 600, !0)
            }
            $(e).on('translated.btq.slidebox', function (t) {
              var e = $(this).find('.slide-item.center .content-showroom').attr('data-href'),
                i = $(this).find('.slide-item.center .content-showroom').attr('data-title'),
                s = $(this).find('.slide-item.center .content-showroom').attr('data-keyword'),
                a = $(this).find('.slide-item.center .content-showroom').attr('data-description')
              changeUrl(e, i, a, s, $(this).find('.slide-item.center .content-showroom').attr('data-name'), i, a)
            })
          })),
    $('.online-catalogue').length &&
      ($('.online-catalogue').addClass('color-grey-dark'),
      $('.online-catalogue')
        .on('initialized.btq.slidebox', function () {
          $('.online-catalogue').find('.slide-item').length <= 2
            ? $('.news-link').addClass('center-slidebox')
            : $('.news-link').removeClass('center-slidebox')
        })
        .BTQSlider({
          smartSpeed: 600,
          margin: 5,
          nav: !0,
          dots: !0,
          rewind: !0,
          responsive: {
            0: {
              items: 1,
              dots: !0,
              nav: !1,
              autoHeight: !0
            },
            800: {
              items: 2,
              dots: !0,
              nav: !0,
              autoHeight: !1
            },
            1100: {
              items: 2,
              dots: !0,
              nav: !0,
              autoHeight: !1
            }
          }
        }),
      setTimeout(function () {
        $('.catalogue-top').each(function (t, e) {
          $(this).parent().parent().parent().css({
            height: 'auto'
          })
        })
      }, 1e3)),
    $('.catalogue-slide').length)
  ) {
    if ($('.catalogue-slide').children().length > 1) t = $('.catalogue-slide').attr('data-time')
    else t = !1
    $('.catalogue-slide')
      .on('initialized.btq.slidebox', function () {
        var t = $('.catalogue-slide').find('.slide-item').length
        if (
          ($(window).width() >= 900
            ? t <= 3
              ? $('.catalogue-slide').addClass('center-slidebox')
              : $('.catalogue-slide').removeClass('center-slidebox')
            : $(window).width() < 900 && $(window).width() >= 600 && t <= 2
            ? $('.catalogue-slide').addClass('center-slidebox')
            : $('.catalogue-slide').removeClass('center-slidebox'),
          0 == Touch)
        );
        else;
      })
      .BTQSlider({
        loop: false,
        smartSpeed: 600,
        autoplay: i,
        autoplayTimeout: t,
        autoplayHoverPause: !0,
        responsiveRefreshRate: 200,
        nav: !0,
        mouseDrag: !1,
        touchDrag: !1,
        pullDrag: !1,
        responsive: {
          0: {
            items: 1,
            dotNum: !1,
            dots: !0,
            dotsEach: 1
          },
          600: {
            items: 2,
            dotNum: !1,
            dots: !0,
            dotsEach: 2
          },
          900: {
            items: 3,
            dotNum: !0,
            dotsEach: 3
          }
        }
      })
  }
  $('.slide-design').length &&
    $('.slide-design').each(function (t, e) {
      var s = $(e).attr('data-time')
      $(e).addClass('lazy'),
        $(e)
          .on('initialized.btq.slidebox', function () {
            var t = $(e).find('.slide-item').length
            if (
              ($(window).width() >= 900
                ? t <= 3
                  ? $(e).addClass('center-slidebox')
                  : $(e).removeClass('center-slidebox')
                : $(window).width() < 900 && $(window).width() >= 600 && t <= 2
                ? $(e).addClass('center-slidebox')
                : $(e).removeClass('center-slidebox'),
              0 == Touch)
            );
            else;
          })
          .BTQSlider({
            lazyLoad: !0,
            loop: !0,
            smartSpeed: 600,
            autoplay: i,
            autoplayTimeout: s,
            autoplayHoverPause: !0,
            responsiveRefreshRate: 200,
            nav: !0,
            responsive: {
              0: {
                items: 1,
                dotNum: !1,
                dots: !0,
                dotsEach: 5
              },
              600: {
                items: 2,
                dotNum: !1,
                dots: !0,
                dotsEach: 5
              },
              900: {
                items: 3,
                dotNum: !0
              }
            }
          })
          .on('initialized.btq.slidebox', StartLazy())
    }),
    $('.report-slider').length &&
      $('.report-slider').BTQSlider({
        items: 1,
        loop: !0,
        smartSpeed: 600,
        nav: !0,
        dots: !0
      })
}
function videoSlide() {
  $('.video-center')
    .parent()
    .prepend(
      '<button class="pause-button"  aria-label="pause"></button><button class="play-button" aria-label="play"></button>'
    ),
    $('.video-center')
      .on('initialized.btq.slidebox', function () {
        $('.video-center').find('.slide-item.active').addClass('selected'),
          $('.video-center .slide-item').each(function (t, e) {
            var i = $(e).find('.item-video').attr('data-video')
            if (
              '' != $(".thumb-item[data-thumb='" + i + "']").attr('data-src') &&
              null != $(".thumb-item[data-thumb='" + i + "']").attr('data-src')
            )
              (s = $(".thumb-item[data-thumb='" + i + "']").attr('data-src')),
                $(e).find('.slide-video-tn').remove(),
                $(e)
                  .find('.slide-video-wrapper')
                  .append('<div class="slide-video-tn" style="opacity:1;background-image:url(' + s + ')"></div>')
            else {
              var s = $(e).find('.slide-video-tn').css('background-image')
              // s = s.replace(/.*\s?url\([\'\"]?/, "").replace(/[\'\"]?\).*/, "")
            }
            $(".thumb-item[data-thumb='" + i + "'] button").append('<img src ="' + s + '" alt="pic">')
          })
      })
      .BTQSlider({
        items: 1,
        margin: 0,
        video: !0,
        center: !0,
        dots: !1,
        rewind: !0,
        mouseDrag: !1,
        touchDrag: !1,
        pullDrag: !1,
        nav: !0
      })
      .on('changed.btq.slidebox', function (t) {
        $('.thumbs-video').length &&
          (function (t) {
            var e = t.item.Count - 1,
              i = t.item.index
            i < 0 && (i = e)
            i > e && (i = 0)
            $('.thumbs-video').find('.slide-item').removeClass('current').eq(i).addClass('current')
            var s = $('.thumbs-video').find('.slide-item.active').length - 1,
              a = $('.thumbs-video').find('.slide-item.active').first().index(),
              n = $('.thumbs-video').find('.slide-item.active').last().index()
            i >= n - 1 && $('.thumbs-video').data('btq.slidebox').to(i, 300, !0)
            i <= a &&
              $('.thumbs-video')
                .data('btq.slidebox')
                .to(i - s, 300, !0)
          })(t)
      })
      .on('translate.btq.slidebox', function (t) {
        $('.video-center').find('.slide-item').removeClass('selected')
      })
      .on('translated.btq.slidebox', function (t) {
        $('.video-center').find('.slide-item.active').addClass('selected')
      }),
    $('.thumbs-video')
      .on('initialized.btq.slidebox', function () {
        var t = $('.thumbs-video').find('.slide-item').length
        $(window).width() >= 600
          ? t <= 6
            ? $('.thumbs-video').addClass('center-slidebox')
            : $('.thumbs-video').removeClass('center-slidebox')
          : t <= 3
          ? $('.thumbs-video').addClass('center-slidebox')
          : $('.thumbs-video').removeClass('center-slidebox'),
          t <= 1 ? $('.thumbs-video').hide() : $('.thumbs-video').show(),
          $('.thumbs-video').find('.slide-item').eq(0).addClass('current')
      })
      .BTQSlider({
        margin: 5,
        smartSpeed: 300,
        dots: !1,
        nav: !0,
        responsiveRefreshRate: 100,
        responsive: {
          0: {
            items: 3,
            slideBy: 3
          },
          600: {
            items: 6,
            slideBy: 6
          }
        }
      }),
    $('.thumbs-video').on('click', '.slide-item', function (t) {
      t.preventDefault()
      var e = $(this).index()
      $('.video-center').data('btq.slidebox').to(e, 600, !0)
    })
}
function StartLazy() {
  $('.lazy').each(function (t, e) {
    $(e).find('.preloader').length <= 0 &&
      $(e)
        .find('.loading')
        .each(function (t, e) {
          $(e).children().append('<div class="preloader"></div>')
        })
  })
}
function StopTime() {
  timex > 0 && (clearTimeout(timex), (timex = 0))
}
function AniText() {
  $('.slogan').addClass('show'),
    $('.title-page').addClass('show'),
    $('.title-page h1')
      .children()
      .children()
      .each(function (t) {
        var e = $(this)
        setTimeout(function () {
          $(e).addClass('move')
        }, 50 * (t + 1))
      }),
    $('.slogan h2')
      .children()
      .children()
      .each(function (t) {
        var e = $(this)
        setTimeout(function () {
          setTimeout(function () {
            $(e).addClass('move')
          }, 70 * (t + 1))
        }, 300)
      }),
    $('.load-title h3')
      .children()
      .children()
      .each(function (t) {
        var e = $(this)
        setTimeout(function () {
          $(e).addClass('move')
        }, 100 * (t + 1))
      })
}
function VideoLoad(t) {
  $.ajax({
    url: t,
    cache: !1,
    success: function (t) {
      $('.allvideo').append(t)
      var e = $('#view-video').length
      if ($('#view-video').length) {
        var i = document.getElementById('view-video')
      }
      if ($('.video-wrap iframe').length) {
        var s
        function a(t) {
          if ((Mobile.matches && (t.target.mute(), t.target.playVideo()), s.getPlayerState() > 1)) {
            var e = s.getVideoData().title
            $('.video-wrap iframe').attr('title', e)
          }
        }
        $('.loadx').fadeOut(500, 'linear', function () {
          ;(s = new YT.Player('VYT', {
            events: {
              onReady: a
            }
          })),
            $('.loadx').remove()
        })
      } else
        $('.loadx').fadeOut(400, 'linear', function () {
          $('#view-video').length && i.play(), $('.loadx').remove()
        })
      $('.close-video').on('click', function () {
        if ((0 != e && i.pause(), $('#showroom-page').length)) {
          var t = $('.nav li.current a').attr('href'),
            s = $('.nav li.current a').attr('data-title'),
            a = $('.nav li.current a').attr('data-keyword'),
            n = $('.nav li.current a').attr('data-description')
          changeUrl(t, s, n, a, $('.nav li.current a').attr('data-name'), s, n)
        }
        $('.allvideo').fadeOut(500, 'linear', function () {
          if (
            ($('.overlay-dark').removeClass('show'),
            $('.allvideo .video-list').remove(),
            $('html, body').removeClass('no-scroll'),
            $('.to-scrollV').length)
          ) {
            var t = $('.to-scrollV').offset().top
            $('.to-scrollV').removeClass('to-scrollV'), $(window).width() < 1100 && $('html, body').scrollTop(t - 60)
          }
        })
      })
    }
  })
}
function AlbumLoad(t, e) {
  $.ajax({
    url: t,
    cache: !1,
    success: function (t) {
      function i() {
        clearTimeout(timex),
          $('.pic-name').removeClass('move'),
          $('.pic-name h3').children().children().removeClass('move'),
          $('.selected').find('.pic-name').addClass('move'),
          $('.move h3')
            .children()
            .children()
            .each(function (t) {
              var e = $(this)
              setTimeout(function () {
                $(e).addClass('move')
              }, 100 * (t + 1))
            })
      }
      0 == Touch && $('.slide-slidebox').length && $('.slide-slidebox').trigger('stop.btq.autoplay'),
        $('.all-album').append(t),
        $('.all-album .album-load').length > 1 && $('.all-album .album-load').last().remove(),
        $('.pic-name > h3').lettering('words').children('span').lettering().children('span').lettering(),
        $('.album-center')
          .on('initialized.btq.slidebox', function () {
            $('.container-zoom').each(function (t, e) {
              new PinchZoom.default(e, {
                draggableUnzoomed: !1
              })
            }),
              $('.album-center').find('.slide-item.active').addClass('selected'),
              i()
          })
          .BTQSlider({
            items: 1,
            margin: 0,
            smartSpeed: 600,
            loop: !1,
            dots: !0,
            dotNum: !0,
            nav: !0,
            responsiveRefreshRate: 200
          })
          .on('changed.btq.slidebox', function (t) {
            $('.thumbs').length &&
              (function (t) {
                var e = t.item.Count - 1,
                  i = t.item.index
                i < 0 && (i = e)
                i > e && (i = 0)
                $('.thumbs').find('.slide-item').removeClass('current').eq(i).addClass('current')
                var s = $('.thumbs').find('.slide-item.active').length - 1,
                  a = $('.thumbs').find('.slide-item.active').first().index(),
                  n = $('.thumbs').find('.slide-item.active').last().index()
                i >= n - 1 && $('.thumbs').data('btq.slidebox').to(i, 300, !0)
                i <= a &&
                  $('.thumbs')
                    .data('btq.slidebox')
                    .to(i - s, 300, !0)
              })(t)
          })
          .on('translate.btq.slidebox', function (t) {
            $('.album-center').find('.slide-item').removeClass('selected')
          })
          .on('translated.btq.slidebox', function (t) {
            if (($('.album-center').find('.slide-item.active').addClass('selected'), i(), $('#product-page').length)) {
              var e = $(this).find('.slide-item.active .album-pic-center').attr('data-href'),
                s = $(this).find('.slide-item.active .album-pic-center').attr('data-title'),
                a = $(this).find('.slide-item.active .album-pic-center').attr('data-keyword'),
                n = $(this).find('.slide-item.active .album-pic-center').attr('data-description')
              changeUrl(e, s, n, a, $(this).find('.slide-item.active .album-pic-center').attr('data-name'), s, n)
            }
          }),
        $('.thumbs')
          .on('initialized.btq.slidebox', function () {
            var t = $('.thumbs').find('.slide-item').length
            $(window).width() >= 600
              ? t <= 6
                ? $('.thumbs').addClass('center-slidebox')
                : $('.thumbs').removeClass('center-slidebox')
              : t <= 3
              ? $('.thumbs').addClass('center-slidebox')
              : $('.thumbs').removeClass('center-slidebox'),
              $('.thumbs').find('.slide-item').eq(0).addClass('current')
          })
          .BTQSlider({
            margin: 5,
            smartSpeed: 300,
            dots: !1,
            nav: !1,
            responsiveRefreshRate: 100,
            responsive: {
              0: {
                items: 3,
                slideBy: 3
              },
              600: {
                items: 6,
                slideBy: 6
              }
            }
          }),
        e && $('.album-center').data('btq.slidebox').to(e, 5, !0),
        $('.thumbs').on('click', '.slide-item', function (t) {
          t.preventDefault()
          var e = $(this).index()
          $('.album-center').data('btq.slidebox').to(e, 1e3, !0)
        }),
        document.querySelector('.all-album').addEventListener(
          'wheel',
          function (t) {
            if (t.deltaY > 0) {
              if (!doWheel) return
              ;(doWheel = !1), $('.album-center').trigger('prev.btq.slidebox'), setTimeout(turnWheelTouch, 500)
            } else {
              if (!doWheel) return
              ;(doWheel = !1), $('.album-center').trigger('next.btq.slidebox'), setTimeout(turnWheelTouch, 500)
            }
          },
          {
            passive: !1
          }
        ),
        $('.album-load').animate(
          {
            opacity: 1
          },
          100,
          'linear',
          function () {
            $('.loadx').fadeOut(400, 'linear', function () {
              $('.loadx').remove()
            })
          }
        ),
        $('.close-album').on('click', function () {
          if ($('#showroom-page').length) {
            var t = $('.nav li.current a').attr('href'),
              e = $('.nav li.current a').attr('data-title'),
              i = $('.nav li.current a').attr('data-keyword')
            changeUrl(
              t,
              e,
              (s = $('.nav li.current a').attr('data-description')),
              i,
              $('.nav li.current a').attr('data-name'),
              e,
              s
            )
          } else if ($('#product-page').length) {
            var s
            ;(t = $('.outer-nav:not(.second) .sub-nav li.current a').attr('href')),
              (e = $('.outer-nav:not(.second) .sub-nav li.current a').attr('data-title')),
              (i = $('.outer-nav:not(.second) .sub-nav li.current a').attr('data-keyword'))
            changeUrl(
              t,
              e,
              (s = $('.outer-nav:not(.second) .sub-nav li.current a').attr('data-description')),
              i,
              $('.outer-nav:not(.second) .sub-nav li.current a').attr('data-name'),
              e,
              s
            )
          }
          return (
            $('.all-album').fadeOut(500, 'linear', function () {
              $('.overlay-dark').removeClass('show'), $('.album-load').remove()
            }),
            0 == Touch &&
              ($('#showroom-page').length ||
                ($('.slide-slidebox').length && $('.slide-slidebox').trigger('play.btq.autoplay'))),
            $('html, body').removeClass('no-scroll'),
            !1
          )
        })
    }
  })
}
function NewsLoad(t) {
  $.ajax({
    url: t,
    cache: !1,
    success: function (t) {
      $('.load-details').remove(),
        $('.load-data, .load-iframe').html(t),
        $('.load-data').length &&
          ($('.is-iframe').length
            ? $('.load-data').addClass('load-iframe')
            : $('.load-data').removeClass('load-iframe')),
        $('#solution-page').length &&
          $('.load-title > h3').lettering('words').children('span').lettering().children('span').lettering(),
        PrintShare() /*,NewFormat&&Format()*/,
        $('.load-text a, .load-text p a').click(function (t) {
          t.preventDefault()
          var e = $(this).attr('href')
          return window.open(e, '_blank'), !1
        }),
        Mobile.matches && ($('.load-text img').addClass('zoom-pic'), ZoomPic()),
        document.querySelector('.load-iframe iframe')
          ? Array.from(document.querySelectorAll('.load-iframe iframe'), function (t) {
              t.contentWindow.location.reload(),
                t.addEventListener('load', function () {
                  if (((t.style.height = 0), t.classList.contains('youtube-iframe'))) {
                    if (0 != t.width) {
                      var e = ($('.load-text').width() * $(t).attr('height')) / t.width
                      t.style.height = e + 'px'
                    }
                  } else {
                    $(t)
                      .contents()
                      .find('head')
                      .append(
                        $(
                          "<style type='text/css'>.block-grid {max-width:100% !important}table {width:100% !important;max-width:100% !important}.col{width:100% !important; max-width:100% !important}img{width:100% !important;height:auto !important;max-width:100% !important; display:block}iframe{width:100% !important; height:auto; aspect-ratio:16/9; display:block} </style>"
                        )
                      )
                    var i = function () {
                      if (
                        ((t.style.height = t.contentWindow.document.body.scrollHeight + 'px'),
                        0 == t.contentWindow.document.body.scrollHeight && 0 != t.width)
                      ) {
                        var e = ($('.load-text').width() * t.height) / t.width
                        t.style.height = e + 'px'
                      }
                    }
                    $(window).on(
                      'resize',
                      function () {
                        i()
                      },
                      300
                    ),
                      i()
                  }
                  $('.loadx').fadeOut(400, 'linear', function () {
                    $('.loadx').remove()
                  })
                })
            })
          : $('.loadx').fadeOut(400, 'linear', function () {
              $('.loadx').remove()
            }),
        $('.load-data, .load-iframe').animate(
          {
            opacity: 1
          },
          500,
          'linear',
          function () {
            $('.load-data, .load-iframe').addClass('show'),
              (Details = 1),
              $('.load-content').addClass('show'),
              $('#solution-page').length && AniText(),
              $('.news-link').removeClass('no-link'),
              Mobile.matches
                ? detectBut()
                : $('.news-link').each(function (t, e) {
                    var i = $(e).find('.link-page.current').parent().index()
                    $(e).data('btq.slidebox').to(i, 300, !0)
                  }),
              onScroll()
          }
        )
    }
  })
}
function popupLoad(t) {
  $.ajax({
    url: t,
    cache: !1,
    success: function (t) {
      $('.details-content').remove(),
        $('body').append(t),
        $('form').length && FocusText(),
        Mobile.matches && ($('.details-text img').addClass('zoom-pic'), ZoomPic()),
        $('.popup-home .list-object').length && $('.popup-home').addClass('has-text-popup'),
        $('.slide-popup-mod').length && SlidePicture(),
        $('.details-content')
          .stop()
          .animate(
            {
              opacity: 1
            },
            500,
            'linear',
            function () {
              $('.details-content').scrollTop(0),
                $('.details-center').addClass('fadeinup'),
                $('.loadx').fadeOut(400, 'linear', function () {
                  $('.loadx').remove()
                })
            }
          ),
        $('.close-popup, .details-content span').on('click', function () {
          if ($('a.close-popup').length) {
            ;(e = $('a.close-popup').attr('href')),
              (i = $('a.close-popup').attr('data-title')),
              (s = $('a.close-popup').attr('data-keyword'))
            changeUrl(
              e,
              i,
              (t = $('a.close-popup').attr('data-description')),
              s,
              $('a.close-popup').attr('data-name'),
              i,
              t
            )
          } else {
            var t,
              e = $('.sub-nav li.current a').attr('href'),
              i = $('.sub-nav li.current a').attr('data-title'),
              s = $('.sub-nav li.current a').attr('data-keyword')
            changeUrl(
              e,
              i,
              (t = $('.sub-nav li.current a').attr('data-description')),
              s,
              $('.sub-nav li.current a').attr('data-name'),
              i,
              t
            )
          }
          return (
            $('.details-content').animate(
              {
                opacity: 0
              },
              500,
              'linear',
              function () {
                $('.details-content').remove(),
                  $('.overlay-dark').removeClass('show'),
                  $('html, body').removeClass('no-scroll')
              }
            ),
            !1
          )
        })
    }
  })
}
function ShowroomLoad(t) {
  $.ajax({
    url: t,
    cache: !1,
    success: function (t) {
      $('html, body').addClass('no-scroll'),
        $('.bg-degree').append(t),
        $('.bg-degree').addClass('show'),
        $('iframe').on('load', function () {
          $('.loadx').fadeOut(400, 'linear', function () {
            $('.loadx').remove()
          })
        }),
        $('.close-popup').on('click', function (t) {
          if (
            (t.preventDefault(),
            $('.loadx').fadeOut(400, 'linear', function () {
              $('.loadx').remove()
            }),
            $('#project-page').length)
          ) {
            var e = $('.sub-nav li.current a').attr('href'),
              i = $('.sub-nav li.current a').attr('data-title'),
              s = $('.sub-nav li.current a').attr('data-keyword')
            changeUrl(
              e,
              i,
              (a = $('.sub-nav li.current a').attr('data-description')),
              s,
              $('.sub-nav li.current a').attr('data-name'),
              i,
              a
            )
          } else if ($('#levelmenu-page').length) {
            ;(e = $('.visual-regis').attr('href')),
              (i = $('.visual-regis').attr('data-title')),
              (s = $('.visual-regis').attr('data-keyword'))
            changeUrl(
              e,
              i,
              (a = $('.visual-regis').attr('data-description')),
              s,
              $('.visual-regis').attr('data-name'),
              i,
              a
            )
          } else {
            var a
            ;(e = $('.nav li.current a').attr('href')),
              (i = $('.nav li.current a').attr('data-title')),
              (s = $('.nav li.current a').attr('data-keyword'))
            changeUrl(
              e,
              i,
              (a = $('.nav li.current a').attr('data-description')),
              s,
              $('.nav li.current a').attr('data-name'),
              i,
              a
            )
          }
          return (
            $('.bg-degree').removeClass('show'),
            setTimeout(function () {
              $('.bg-degree iframe').remove(), $('html, body').removeClass('no-scroll')
            }, 1e3),
            !1
          )
        })
    }
  })
}
function ShowroomTemp() {
  $('html, body').addClass('no-scroll'),
    $('.bg-degree').addClass('show'),
    $('.loadx').fadeOut(400, 'linear', function () {
      $('.loadx').remove()
    }),
    $('.close-popup').on('click', function (t) {
      return (
        t.preventDefault(),
        $('.loadx').fadeOut(400, 'linear', function () {
          $('.loadx').remove()
        }),
        $('.bg-degree').removeClass('show'),
        setTimeout(function () {
          $('html, body').removeClass('no-scroll')
        }, 1e3),
        !1
      )
    })
}
function PicLoad(t, e) {
  $.ajax({
    url: t,
    cache: !1,
    success: function (t) {
      if (
        ($('.product-details')
          .css({
            display: 'block'
          })
          .prepend(t),
        Mobile.matches)
      )
        $('html,body').addClass('no-scroll'),
          $(
            '.header, .outer-nav, .title-page,.go-top, .banner-inner, .last-section, .footer, .mobile-call, .fb_dialog'
          ).addClass('no-index'),
          $('.product-template, .container').addClass('level-index-in'),
          $('.product-details').addClass('full-screen'),
          $('.fullsize').addClass('active')
      else var e = $('.outer-nav:not(.second)').offset().top - 90
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: e
          },
          800,
          'linear',
          function () {
            $('.last-section, .footer').removeClass('hidden-div'), $('.product-details').addClass('showpic')
          }
        ),
        $('.zoom-active').text('')
      var i = $(this).find('.slide-product').attr('data-href'),
        s = $(this).find('.slide-product').attr('data-title'),
        a = $(this).find('.slide-product').attr('data-keyword'),
        n = $(this).find('.slide-product').attr('data-description')
      changeUrl(i, s, n, a, $(this).find('.slide-product').attr('data-name'), s, n),
        $('.pro-full img').on('load', function () {
          $('.load-product')
            .stop()
            .fadeOut(300, 'linear', function () {
              $('.load-product').css({
                opacity: 0
              }),
                $('.product-details').css({
                  opacity: 1
                }),
                $('.material-slide').addClass('showup'),
                $('.magnify-image').magnify({
                  Full: !1
                }),
                $('.loadx').fadeOut(300, 'linear', function () {
                  $('.loadx').remove()
                })
            })
        }),
        $('.zoom-large').on('click', function () {
          $('html, body').addClass('no-scroll'),
            $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>'),
            $('.all-pics').addClass('show'),
            $('.all-pics').append('<div class="full size-large"  style="display:block"></div>'),
            $('.overlay-dark').addClass('show')
          var t = $(this).attr('data-pic')
          return (
            $('.all-pics')
              .find('.full')
              .append('<img src ="' + t + '" alt="pic">'),
            $('body').append('<div class="close-view"  style="opacity:0"></div>'),
            $('.all-pics img').on('load', function () {
              $('.all-pics').addClass('show'),
                0 == Touch && ($('.full').addClass('dragscroll'), $('.dragscroll').draptouch()),
                $('.full img').length > 1 && $('.full img').last().remove(),
                $('.full img, .close-view').addClass('fadein'),
                $('.loadx').fadeOut(400, 'linear', function () {
                  0 == Touch && detectMargin(), $('.loadx').remove()
                })
            }),
            $('.close-view').on('click', function () {
              $('.full').fadeOut(300, 'linear', function () {
                $('.overlay-dark').removeClass('show'),
                  $('.all-pics .full').remove(),
                  $('.close-view').remove(),
                  $('.all-pics').removeClass('show'),
                  $('.product-details').hasClass('full-screen') || $('html, body').removeClass('no-scroll')
              })
            }),
            !1
          )
        }),
        $('.download-image').on('click', function (t) {
          t.preventDefault()
          var e = $(this).find('.img-src').attr('src')
          return download(e), !1
        }),
        $('.fullsize').on('click', function (t) {
          return (
            t.preventDefault(),
            detectBut(),
            $('.product-details').hasClass('full-screen')
              ? ($('html,body').removeClass('no-scroll'),
                $(
                  '.header, .outer-nav, .title-page,.go-top, .banner-inner, .last-section, .footer, .mobile-call,.fb_dialog'
                ).removeClass('no-index'),
                $('.product-template, .container').removeClass('level-index-in'),
                $('.product-details').removeClass('full-screen'),
                $('.fullsize').removeClass('active'),
                $('.magnify-image').magnify({
                  Full: !1
                }))
              : ($('html,body').addClass('no-scroll'),
                $(
                  '.header, .outer-nav, .title-page,.go-top, .banner-inner, .last-section, .footer, .mobile-call,.fb_dialog'
                ).addClass('no-index'),
                $('.product-template, .container').addClass('level-index-in'),
                $('.product-details').addClass('full-screen'),
                $('.fullsize').addClass('active'),
                $('.magnify-image').magnify({
                  Full: !0
                })),
            !1
          )
        })
    }
  })
}
function subCategory() {
  if (
    ($('.category-nav ul').innerWidth() > $('.category-nav').width() && $('.cate-nav').addClass('display-block'),
    Mobile.matches || Touch)
  )
    $('.cate-next').on('click', function () {
      $('.scrollC').animate(
        {
          scrollLeft: '+=40'
        },
        100,
        'linear'
      )
    }),
      $('.cate-prev').on('click', function () {
        $('.scrollC').animate(
          {
            scrollLeft: '-=40'
          },
          100,
          'linear'
        )
      })
  else {
    var t = ''
    function e() {
      $('.scrollC').animate(
        {
          scrollLeft: t
        },
        100,
        'linear',
        function () {
          '' != t && e()
        }
      )
    }
    $('.cate-next').hover(
      function () {
        ;(t = '+=20'), e()
      },
      function () {
        t = ''
      }
    ),
      $('.cate-prev').hover(
        function () {
          ;(t = '-=20'), e()
        },
        function () {
          t = ''
        }
      )
  }
  detectBut(),
    $('.category-nav li a').on('click', function (t) {
      t.preventDefault(),
        $('.sub-active').text(''),
        $('.category-nav li').removeClass('current'),
        $(this).parent().addClass('current'),
        $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>')
      var e = $(this).attr('href'),
        i = $(this).attr('data-name'),
        s = $('.all-sub .current .link-load').text(),
        a = $(this).attr('href'),
        n = $(this).attr('data-title'),
        o = $(this).attr('data-keyword'),
        r = $(this).attr('data-description')
      if (
        (changeUrl(a, n, r, o, $(this).attr('data-name'), n, r), $('.load-product').removeClass('show'), Mobile.matches)
      )
        l = $('.load-product').offset().top - ($('.outer-nav:not(.second)').innerHeight() + 60)
      else var l = $('.load-product').offset().top - ($('.outer-nav:not(.second)').innerHeight() + 120)
      return (
        $('html, body').stop().animate(
          {
            scrollTop: l
          },
          1e3,
          'linear'
        ),
        $('.load-product')
          .stop()
          .animate(
            {
              opacity: 0
            },
            300,
            'linear',
            function () {
              DetailsLoad(e, s, i)
            }
          ),
        !1
      )
    })
}
function DetailsLoad(t, e, i) {
  $.ajax({
    url: t,
    cache: !1,
    success: function (t) {
      if (
        ($('.all-content-load').remove(),
        $('.load-product').hasClass('blur') && $('.load-product').removeClass('blur'),
        $('.load-product').show(),
        $('.load-product').append(t),
        $('.category-nav').length && subCategory(),
        $('.thumb-row').length &&
          $('.thumb-row').each(function (t, e) {
            $(e).find('.thumb-pic').length < 2 && $(e).find('.thumb-pic').addClass('full-width')
          }),
        $('.video-center').length &&
          (videoSlide(),
          $('.investment').stop().animate(
            {
              opacity: 1
            },
            500,
            'linear'
          )),
        $('.slide-project').each(function (t, e) {
          $(e).find('.item-pic-project').length < 1 &&
            ($(e).addClass('no-display'), $(e).parent().addClass('no-display'))
        }),
        'pictures' == i && $('.all-content-load').addClass('picture-center'),
        $('.online-catalogue').length && SlidePicture(),
        $('.product-details').hasClass('showpic') &&
          $('.product-details').animate(
            {
              opacity: 0
            },
            500,
            'linear',
            function () {
              var t = $('.load-product').offset().top - 130
              $('html, body').animate(
                {
                  scrollTop: t
                },
                1e3,
                'linear'
              ),
                $('.product-full').remove(),
                $('.product-details')
                  .css({
                    display: 'none'
                  })
                  .removeClass('showpic')
            }
          ),
        $('.thumb-pic').length)
      )
        new LazyLoad({
          threshold: 0
        })
      else if ($('.slide-project, .catalogue-top').length) {
        new LazyLoad({
          threshold: 0,
          callback_enter: function (t) {
            Loadpic()
          }
        })
        Option(),
          $('.item-pic-project').on('click', function () {
            $(this).find('button').trigger('click')
          }),
          $('.pdf').on('click', function () {
            $(this).parent().find('a').trigger('click')
          }),
          $('.catalogue-top').on('click', function () {
            $(this).find('a').trigger('click')
          })
      }
      $('.loadx').fadeOut(300, 'linear', function () {
        $('.loadx').remove()
      }),
        '' == $('.load-title h3').text() && $('.load-title h3').text(e),
        $('.load-product')
          .stop()
          .animate(
            {
              opacity: 1
            },
            500,
            'linear',
            function () {
              $('.load-product').addClass('show'), (Details = 1), detectBut(), PrintShare(), onScroll()
            }
          ),
        $('.zoom-details').on('click', function (t) {
          t.preventDefault(),
            $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>'),
            $('.zoom-details').removeClass('active'),
            $(this).addClass('active')
          var e = $(this).attr('data-href')
          if ($('#product-page').length) {
            var i = $(this).attr('href'),
              s = $(this).attr('data-title'),
              a = $(this).attr('data-keyword'),
              n = $(this).attr('data-description')
            changeUrl(i, s, n, a, $(this).attr('data-id'), s, n)
          }
          var o = $(this).attr('data-name')
          return (
            $('.load-product').addClass('blur'),
            $('.product-details')
              .stop()
              .animate(
                {
                  opacity: 0
                },
                500,
                'linear',
                function () {
                  $('.last-section, .footer').addClass('hidden-div'), PicLoad(e, o)
                }
              ),
            !1
          )
        }),
        $('.thumb-pic').on('click', function () {
          $(this).find('.zoom-details').trigger('click')
        }),
        null != $('.sub-active').text() &&
          setTimeout(function () {
            $('.category-nav li a[data-page="' + $('.sub-active').text() + '"]').trigger('click')
          }, 200),
        null != $('.zoom-active').text() &&
          setTimeout(function () {
            $('.zoom-details[data-id="' + $('.zoom-active').text() + '"]').trigger('click')
          }, 500),
        null != $('.appid-active').text() &&
          setTimeout(function () {
            $('.view-album[data-name="' + $('.appid-active').text() + '"]').trigger('click')
          }, 500)
    }
  })
}
function LoadListContact() {
  var t = []
  $('input[name="areaList"][checked]').each(function (e, i) {
    t.push($(i).val())
  })
  var e = []
  $('input[name="cityList"][checked]').each(function (t, i) {
    e.push($(i).val())
  })
  var i = []
  $('input[name="disList"][checked]').each(function (t, e) {
    i.push($(e).val())
  }),
    t.length &&
      !e.length &&
      $('.select-box li:not(.display-none)').each(function (t, i) {
        e.push($(i).find('input[name="cityList"]').val())
      }),
    e.length && i.length
      ? $('.list-result li').each(function (t, s) {
          e.includes($(s).attr('data-city')) && i.includes($(s).attr('data-dist'))
            ? $(s).removeClass('display-none')
            : $(s).addClass('display-none')
        })
      : e.length
      ? $('.list-result li').each(function (t, i) {
          e.includes($(i).attr('data-city')) ? $(i).removeClass('display-none') : $(i).addClass('display-none')
        })
      : i.length
      ? $('.list-result li').each(function (t, e) {
          i.includes($(e).attr('data-dist')) ? $(e).removeClass('display-none') : $(e).addClass('display-none')
        })
      : $('.list-result li').each(function (t, e) {
          $(e).removeClass('display-none')
        })
}
function LoadIframeMap(t) {
  $.ajax({
    url: t,
    cache: !1,
    success: function (t) {
      $('.map-view').html(t),
        $('.loadx').fadeOut(300, 'linear', function () {
          $('.loadx').remove()
        }),
        (Details = 1)
    }
  })
}
function LoadDesign(t, e, i) {
  $.ajax({
    url: t,
    cache: !1,
    success: function (t) {
      if (($('.content-design').remove(), $('.load-design').append(t), $('.over-pic').length))
        new LazyLoad({
          threshold: 0
        })
      $('.loadx').fadeOut(300, 'linear', function () {
        $('.loadx').remove()
      }),
        $('.content-design h2').text(e),
        $('.content-design > h2').lettering('words').children('span').lettering().children('span').lettering(),
        $('.load-design')
          .stop()
          .animate(
            {
              opacity: 1
            },
            500,
            'linear',
            function () {
              detectBut(), onScroll()
            }
          ),
        $('.design').on('click', function (t) {
          t.preventDefault(), t.stopPropagation(), $('.item-pic').removeClass('current  to-scroll')
          var e = $(this).attr('data-pic')
          return (
            $(this).parent().addClass('current to-scroll'),
            e.length &&
              ($('.full').length
                ? $('.full')
                    .stop()
                    .fadeOut(500, 'linear', function () {
                      $('.full img, .pinch-zoom-container').remove(), ThumbZoom(e)
                    })
                : ThumbZoom(e)),
            !1
          )
        }),
        $('.item-pic').on('click', function () {
          $(this).find('.design').trigger('click')
        })
    }
  })
}
function selectHeader() {
  $('.select-header').bind('click', function () {
    $('.select-header').hasClass('onclick')
      ? ($('.select-header').removeClass('onclick'), $(this).next('.select-box').fadeOut(100, 'linear'))
      : ($(this).addClass('onclick'),
        $(this).next('.select-box').fadeIn(100, 'linear'),
        $(this)
          .closest('.select-list')
          .on('mouseleave', function () {
            $(this).find('.select-box').fadeOut(100, 'linear'), $('.select-header').removeClass('onclick')
          }))
  }),
    $('.select-box li a, .select-box li button').on('click', function (t) {
      t.preventDefault()
      var e = $(this).parent().parent().parent(),
        i = e.attr('data-report')
      e.find('li').removeClass('selected')
      var s = $(this).parent().parent().parent().parent().parent().find('.relation-box')
      $(this).parent().parent().parent().parent().find('.select-header h3').text($(this).text()),
        $(s).removeClass('on-show'),
        $(this).parent().addClass('selected'),
        $(this).closest('.select-box').fadeOut(100, 'linear'),
        $(this).parent().parent().parent().parent().removeClass('onclick')
      var a = $(this).attr('data-target')
      return (
        $(".relation-box[data-report='" + i + "'] .list-box").addClass('hide'),
        'all' == a
          ? ($(".relation-box[data-report='" + i + "'] .list-box").removeClass('hide'),
            $('.relation-box').addClass('on-show'))
          : $(".relation-box[data-report='" + i + "']")
              .find('.list-box[data-target= "' + a + '"]')
              .removeClass('hide'),
        0 == Details
          ? setTimeout(function () {
              $(".relation-box[data-report='" + i + "']").removeClass('hide'), (Details = 1)
            }, 100)
          : $(".relation-box[data-report='" + i + "']").addClass('on-show'),
        !1
      )
    })
}
function TariffLoad(t) {
  $.ajax({
    url: t,
    cache: !1,
    success: function (t) {
      $('.load-content-tariff').remove(),
        $('.load-tariff').html(t),
        $('.loadx').fadeOut(400, 'linear', function () {
          $('.loadx').remove()
        }),
        $('.slide-table')
          .on('initialized.btq.slidebox', function () {
            $('.container-zoom').each(function (t, e) {
              new PinchZoom.default(e, {
                draggableUnzoomed: !1
              })
            }),
              $('.slide-table').find('.slide-item.active').addClass('selected')
          })
          .BTQSlider({
            animateOut: 'fadeout',
            animateIn: 'fadein',
            items: 1,
            margin: 0,
            smartSpeed: 600,
            loop: !1,
            dots: !1,
            dotNum: !1,
            nav: !0,
            touchDrag: !1,
            pullDrag: !1,
            autoHeight: !0,
            responsiveRefreshRate: 200,
            responsive: {
              0: {
                nav: !1
              },
              1100: {
                nav: !0
              }
            }
          })
          .on('changed.btq.slidebox', function (t) {
            $('.slide-num').length &&
              (function (t) {
                var e = t.item.Count - 1,
                  i = t.item.index
                i < 0 && (i = e)
                i > e && (i = 0)
                $('.slide-num').find('.slide-item').removeClass('current').eq(i).addClass('current')
                var s = $('.slide-num').find('.slide-item.active').length - 1,
                  a = $('.slide-num').find('.slide-item.active').first().index(),
                  n = $('.slide-num').find('.slide-item.active').last().index()
                i >= n - 1 && $('.slide-num').data('btq.slidebox').to(i, 300, !0)
                i <= a &&
                  $('.slide-num')
                    .data('btq.slidebox')
                    .to(i - s, 300, !0)
              })(t)
          })
          .on('translate.btq.slidebox', function (t) {
            $('.slide-table').find('.slide-item').removeClass('selected')
          })
          .on('translated.btq.slidebox', function (t) {
            $('.slide-table').find('.slide-item.active').addClass('selected')
          }),
        $('.slide-num')
          .on('initialized.btq.slidebox', function () {
            var t = $('.slide-num').find('.slide-item').length
            $(window).width() >= 600
              ? t <= 6
                ? $('.slide-num').addClass('center-slidebox')
                : $('.slide-num').removeClass('center-slidebox')
              : t <= 3
              ? $('.slide-num').addClass('center-slidebox')
              : $('.slide-num').removeClass('center-slidebox'),
              $('.slide-num').find('.slide-item').eq(0).addClass('current')
          })
          .BTQSlider({
            margin: 5,
            smartSpeed: 300,
            dots: !1,
            nav: !1,
            touchDrag: !1,
            pullDrag: !1,
            autoHeight: !0,
            responsiveRefreshRate: 100,
            responsive: {
              0: {
                items: 5,
                slideBy: 3
              },
              600: {
                items: 6,
                slideBy: 6
              }
            }
          }),
        $('.slide-num').on('click', '.slide-item', function (t) {
          t.preventDefault()
          var e = $(this).index()
          $('.slide-table').data('btq.slidebox').to(e, 1e3, !0)
        }),
        $('.load-tariff').animate(
          {
            opacity: 1
          },
          500,
          'linear',
          function () {
            $('.load-tariff').addClass('show'), (Details = 1), detectBut(), onScroll()
          }
        )
    }
  })
}
function LoadShareholder(t, e) {
  $.ajax({
    url: t,
    cache: !1,
    success: function (t) {
      $('.content-page').children().remove(),
        $('.content-page').append(t),
        $('.loadx').fadeOut(300, 'linear', function () {
          detectBut(), $('.loadx').remove()
        }),
        $('.content-page > h2').lettering('words').children('span').lettering().children('span').lettering(),
        $('.relation-box').addClass('on-show'),
        selectHeader(),
        $('.select-box').each(function (t, e) {
          $(e).find('li:nth-child(2) a, li:nth-child(2) button').trigger('click')
        }),
        $('.report-slider').length &&
          $('.report-slider').BTQSlider({
            items: 1,
            loop: !0,
            smartSpeed: 600,
            nav: !0,
            dots: !0
          }),
        $('.video-center').length && videoSlide(),
        $('.investment')
          .stop()
          .animate(
            {
              opacity: 1
            },
            500,
            'linear',
            function () {
              onScroll()
            }
          )
    }
  })
}
function AgentLoad(t, e) {
  $.ajax({
    url: t,
    cache: !1,
    success: function (t) {
      if (
        ($('.map-box').children().remove(),
        $('.map-box').append(t),
        $('.loadx').fadeOut(300, 'linear', function () {
          $('.loadx').remove()
        }),
        $('.title-local').text(e),
        1 == Details)
      ) {
        if (Mobile.matches) i = $('.map-box').offset().top - ($('.outer-nav:not(.second)').innerHeight() + 60)
        else var i = $('.map-box').offset().top - ($('.outer-nav:not(.second)').innerHeight() + 180)
        $('html, body').stop().animate(
          {
            scrollTop: i
          },
          1e3,
          'linear'
        )
      }
      $('.map-box')
        .stop()
        .animate(
          {
            opacity: 1
          },
          500,
          'linear',
          function () {
            $('.list-result li').on('click', function (t) {
              t.preventDefault(),
                $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>'),
                $('.list-result li').removeClass('active'),
                $(this).addClass('active')
              var e = $(this).find('.link-load-map').attr('data-href')
              if (Mobile.matches && 1 == Details) {
                var i = $('.map-view').offset().top - 90
                $('html, body').stop().animate(
                  {
                    scrollTop: i
                  },
                  1e3,
                  'linear'
                )
              }
              $('.map-view').html(''), LoadIframeMap(e)
            }),
              setTimeout(function () {
                Details = 1
              }, 500),
              $('.list-result li:first-child').trigger('click')
          }
        )
    }
  })
}
function checkNum(t, e) {
  var i = $('.item-pic').index(e)
  i == t - 1
    ? $('.next-pic').addClass('disabled')
    : i <= 0
    ? $('.prev-pic').addClass('disabled')
    : ($('.next-pic').removeClass('disabled'), $('.prev-pic').removeClass('disabled'))
}
function ThumbZoom(t) {
  $('html, body').addClass('no-scroll'),
    $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>')
  var e = t
  $('.all-pics').hasClass('show')
    ? ($('.full').stop().show(),
      $('.all-pics')
        .find('.full')
        .append('<img src ="' + e + '" alt="pic" />'))
    : ($('.all-pics').addClass('show'),
      $('.all-pics').append('<div class="full"  style="display:block"></div>'),
      $('.overlay-dark').addClass('show'),
      $('.all-pics').append(
        '<div class="slide-pic-nav"  style="display:block"><div class="next-pic"></div><div class="prev-pic"></div></div>'
      ),
      $('body').append('<button class="close-pics" aria-label="close"></button>'),
      $('.all-pics').append('<button class="close-pics-small bottom" aria-label="close"></button>'),
      $('.all-pics')
        .find('.full')
        .append('<img src ="' + e + '" alt="pic" />'))
  var i = $('.item-pic').length,
    s = $('.item-pic.current')
  checkNum(i, s),
    $('.next-pic').on('click', function () {
      return $('.slide-pic-nav').addClass('no-link'), $('.full').addClass('moveleft'), $(s).next().trigger('click'), !1
    }),
    $('.prev-pic').on('click', function () {
      return $('.slide-pic-nav').addClass('no-link'), $('.full').addClass('moveright'), $(s).prev().trigger('click'), !1
    }),
    $('.full, .pinch-zoom-container')
      .on('swipeleft', function (t, e) {
        if (!$('.next-pic').hasClass('disabled'))
          return $('.full').addClass('moveleft'), $(s).next().trigger('click'), !1
      })
      .on('swiperight', function (t) {
        if (!$('.prev-pic').hasClass('disabled'))
          return $('.full').addClass('moveright'), $(s).prev().trigger('click'), !1
      }),
    document.querySelector('.all-pics').addEventListener(
      'wheel',
      function (t) {
        t.preventDefault(),
          t.deltaY > 0
            ? $('.prev-pic').hasClass('disabled') || ($('.full').addClass('moveright'), $(s).prev().trigger('click'))
            : $('.next-pic').hasClass('disabled') || ($('.full').addClass('moveleft'), $(s).next().trigger('click'))
      },
      {
        passive: !1
      }
    ),
    $('.all-pics img').on('load', function () {
      $('.all-pics').addClass('show'),
        0 == Touch
          ? ($('.full').addClass('dragscroll'), $('.dragscroll').draptouch())
          : ($('.full img').addClass('pinch-zoom'),
            $('.pinch-zoom').each(function (t, e) {
              new PinchZoom.default(e, {
                draggableUnzoomed: !1
              })
            })),
        $('.full img').length > 1 && $('.full img').last().remove(),
        $('.loadx').fadeOut(300, 'linear', function () {
          0 == Touch && detectMargin(),
            $('.full').removeClass('moveright moveleft'),
            $('.slide-pic-nav').removeClass('no-link'),
            $('.full img').addClass('fadein'),
            $('.loadx').remove()
        })
    }),
    Mobile.matches ||
      $('.full span').on('click', function () {
        $('.close-pics').trigger('click')
      }),
    $('.close-pics, .close-pics-small').on('click', function () {
      $('.loadx').remove(),
        $('.full').fadeOut(300, 'linear', function () {
          if (
            ($('.overlay-dark').removeClass('show'),
            $('.show-box-pic').removeClass('current'),
            $('.all-pics .full, .all-pics .pinch-zoom-container').remove(),
            $('.close-pics, .close-pics-small, .slide-pic-nav').remove(),
            $('.all-pics').removeClass('show'),
            $('html, body').removeClass('no-scroll'),
            $('.to-scroll').length)
          ) {
            var t = $('.to-scroll').offset().top
            $(window).width() < 1100 && $('html, body').scrollTop(t - 60), $('.to-scroll').removeClass('to-scroll')
          }
        })
    })
}
function AjaxPDf(t, e) {
  $.ajax({
    url: t,
    cache: !1,
    success: function (t) {
      $('body').append(t), FocusText()
      var e = $('#fb5-ajax').attr('data-pdf')
      PDFLoad(e),
        $('#fb5-ajax').animate(
          {
            opacity: 1
          },
          500,
          'linear',
          function () {
            $('.close').addClass('show')
          }
        )
      $(document).on('keypress', '.fb5-goto input', function (t) {
        var e = t
        0 != e.charCode && (-1 != '0123456789 '.indexOf(e.key) || e.preventDefault())
      }),
        $('.close').on('click', function () {
          $('.loadx').remove()
          var t = $(document).scrollTop()
          $('html, body').scrollTop(t),
            window.location.hash && history.pushState('', document.title, location.href.replace(/#.*/, '')),
            $('.full-screen-html').length && document.exitFullscreen(),
            $('#fb5-ajax').animate(
              {
                opacity: 0
              },
              500,
              'linear',
              function () {
                $('#fb5-ajax').remove(),
                  $('.container, .header, .social-facilities , .footer').removeClass('blur'),
                  $('.overlay-dark').removeClass('show'),
                  $('html, body').removeClass('no-scroll')
              }
            )
        })
    }
  })
}
function PrintShare() {
  var t = $('.save-but')
  $(t).on('click', function () {
    window.sidebar && window.sidebar.addPanel
      ? window.sidebar.addPanel(document.title, window.location.href, '')
      : window.external && 'AddFavorite' in window.external
      ? window.external.AddFavorite(location.href, document.title)
      : $('html').is(':lang(vi)')
      ? alert(
          'Nhấn ' +
            (-1 != navigator.userAgent.toLowerCase().indexOf('mac') ? 'Command/Cmd' : 'CTRL') +
            ' + D để tạo bookmark cho trang này.'
        )
      : alert(
          'Pressing ' +
            (-1 != navigator.userAgent.toLowerCase().indexOf('mac') ? 'Command/Cmd' : 'CTRL') +
            ' + D on your keyboard.'
        )
  }),
    $('.print-but').on('click', function () {
      window.print()
    }),
    $('.share-but').on('mouseenter', function () {
      $(this).addClass('active')
    }),
    $('.save-but, .print-but').on('mouseenter', function () {
      $('.share-but').removeClass('active')
    }),
    $('.print-box').on('mouseleave', function () {
      $('.share-but').removeClass('active')
    })
}
function LinkPage() {
  Array.from(
    document.querySelectorAll('.link-load, #news-page .release li a:not(.already), .go-page, .policy-link'),
    function (t) {
      t.addEventListener('click', function (t) {
        t.preventDefault()
        var e = this.getAttribute('href')
        $('.container, .footer')
          .stop()
          .animate(
            {
              opacity: 0
            },
            300,
            'linear',
            function () {
              window.location = e
            }
          )
      })
    }
  ),
    $('.link-blank').on('click', function (t) {
      t.preventDefault()
      var e = $(this).attr('href')
      return window.open(e, '_blank'), !1
    })
}
function subNav() {
  if (Mobile.matches) t = $('.header').height() + 40
  else var t = $('.color-head').height() + 60
  $('.sub-nav:not(.release, .preload-product) li').on('click', function (e) {
    e.preventDefault()
    var i = $(this).find('a').attr('data-name')
    if ($('#award-page').length) {
      var s = $(this).find('a').attr('href'),
        a = $(this).find('a').attr('data-title'),
        n = $(this).find('a').attr('data-keyword'),
        o = $(this).find('a').attr('data-description')
      changeUrl(s, a, o, n, $(this).find('a').attr('data-name'), a, o)
    }
    if (doWheel) {
      ;(doWheel = !1),
        $('.sub-nav li').removeClass('current'),
        $(".second li a[data-name='" + i + "']")
          .parent()
          .addClass('current'),
        $(".sub-nav li a[data-name='" + i + "']")
          .parent()
          .addClass('current')
      var r = $(".set-post[data-post='" + i + "']").offset().top - (t + 25)
      return (
        $('html, body')
          .stop()
          .animate(
            {
              scrollTop: r
            },
            1500,
            'linear',
            function () {
              setTimeout(turnWheelTouch, 100)
            }
          ),
        !1
      )
    }
  }),
    $('.sub-nav:not(.release, .preload-product) li:nth-child(1)').addClass('current')
}
function SubOverSize() {
  for (
    var t = document.querySelector('.outer-nav:not(.second)'),
      e = t.querySelectorAll('li'),
      i = document.querySelector('.outer-nav.second'),
      s = 0,
      a = 0;
    a < e.length;
    a++
  )
    (s += e[a].clientWidth) > innerWidth
      ? (i && i.classList.add('oversize'), t.classList.add('oversize'))
      : (i && i.classList.remove('oversize'), t.classList.remove('oversize'))
  HoverScroll()
}
function HoverScroll() {
  function t() {
    $('.sub-nav')
      .stop()
      .animate(
        {
          scrollLeft: Amount
        },
        'slow',
        function () {
          '' != Amount && t()
        }
      )
  }
  $('.wheel-next').click(function (e) {
    e.preventDefault(), (Amount += 200), t()
  }),
    $('.wheel-prev').click(function (e) {
      e.preventDefault(), (Amount -= 200), t()
    })
}
function SubOverSize02() {
  var t = document.querySelector('.sub-tariff:not(.second)')
  if (t) {
    for (var e = t.querySelectorAll('a'), i = 0, s = 0; s < e.length; s++)
      (i += e[s].clientWidth) > innerWidth ? t.classList.add('oversize') : t.classList.remove('oversize')
    HoverScroll02()
  }
}
function HoverScroll02() {
  function t() {
    $('.sub-control')
      .stop()
      .animate(
        {
          scrollLeft: Amount
        },
        'slow',
        function () {
          '' != Amount && t()
        }
      )
  }
  $('.wheel-next').click(function (e) {
    e.preventDefault(), (Amount += 200), t()
  }),
    $('.wheel-prev').click(function (e) {
      e.preventDefault(), (Amount -= 200), t()
    })
}
function onChange(t) {
  $('.file-name').html(t.files[0].name)
}
function FocusText() {
  $('input, textarea')
    .focus(function (t) {
      $(this).attr('data-holder') == $(this).val() && $(this).val('')
    })
    .focusout(function (t) {
      '' == $(this).val() && ($(this).prev().removeClass('hide'), $(this).val($(this).attr('data-holder')))
    })
}
function change_province() {
  $('#center-province').length &&
    document.getElementById('center-province').addEventListener('change', function () {
      var t = $(this).find('option:selected').attr('value'),
        e = $('.httpserver').text()
      $.ajax({
        url: e + 'get-district-ajax.html',
        data: {
          id: t
        },
        cache: !1,
        success: function (t) {
          $('#center-district').html(t)
        }
      })
    })
}
function ContentLoad() {
  if (
    (ResizeWindows(),
    LinkPage(),
    Search(),
    NavClick(),
    Option(),
    FocusText(),
    onScroll(),
    $('#product-page, #project-page').length)
  ) {
    $('.nav li.current').addClass('active-color')
    var t = $('.second-sub.current').parent().parent().attr('data-show')
    $('.hover-btn[data-sub= "' + t + '"]').trigger('click')
  } else
    $('#news-detail-page, #award-details-page').length ||
    $('#product-list-page,#distribution-page,#contact-page,#catalogue-page,#mapcolor-page,#award-page').length
      ? $('.nav li.current').addClass('active-color')
      : $('#recruitment-page').length
      ? $('.nav li.current').removeClass('current')
      : $('#investment-list-page, #investment-details-page').length &&
        ($('.nav li.current').addClass('active-color'), $('.nav li.current').removeClass('current'))
  ;($('#news-detail-page').length &&
    $('.container').hasClass('new-product-detail-page') &&
    $('.newproduct.current').removeClass('current'),
  $('#home-page').length ||
    ($('.logo').css({
      cursor: 'pointer'
    }),
    $('.logo').on('click', function () {
      document.querySelector('.link-home').click()
    })),
  $('#video-full').length && VideoFull(),
  setTimeout(function () {
    AniText(),
      $('.bookshelf-page').length || $('.wheel').addClass('show'),
      $('.bookshelf-page').length && $('.sub-book').addClass('show'),
      $('.bg-inner').height() < $(window).height() &&
        !Mobile.matches &&
        ($('.wheel').addClass('high'), $('.wrap-social-facilities').addClass('high'))
  }, 500),
  $('.bookshelf-page').length ||
    setTimeout(function () {
      $('.wrap-social-facilities').addClass('show')
    }, 1e3),
  $('.content-news-section').length &&
    $('.news-regis').on('click', function () {
      var t = $('.form-news').offset().top - 100
      $('html, body').stop().animate(
        {
          scrollTop: t
        },
        1e3,
        'linear'
      )
    }),
  $('#home-page').length) &&
    ($('.description-youtube').length && $('.youtube-depict').addClass('option-02'),
    $('.nav-home li').on('click', function () {
      $(this).find('a').trigger('click')
    }),
    $('.description').on('click', function () {
      $(this).find('a').trigger('click')
    }),
    $('.youtube-video').length &&
      setTimeout(function () {
        $('#playpause').trigger('click')
      }, 1200),
    Mobile.matches ||
      $('.box-youtube-home .button-video').each(function (t, e) {
        var i = $(e).parent().find('.pic-img').innerHeight() + 5
        $(e).css({
          top: i + 'px'
        })
      }),
    $('.home-popup').length &&
      setTimeout(function () {
        var t = $('.home-popup').attr('data-href')
        return $('html, body').addClass('no-scroll'), $('.overlay-dark').addClass('show'), popupLoad(t), !1
      }, 300))
  if (
    ($('#about-page').length &&
      (subNav(),
      $('.video-center').length && videoSlide(),
      $('.investment')
        .stop()
        .animate(
          {
            opacity: 1
          },
          500,
          'linear',
          function () {
            onScroll()
          }
        ),
      $('.sub-nav li.subcurrent').length && $('.sub-nav li.subcurrent a').trigger('click')),
    $('#search-page').length,
    $('#model-design-page').length &&
      ($('.preload-product li a').on('click', function (t) {
        t.preventDefault(),
          $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>'),
          $('.preload-product li').removeClass('current')
        var e = $(this).attr('href'),
          i = $(this).attr('data-name'),
          s = $(this).text()
        $('.outer-nav li a[data-name= "' + i + '"]')
          .parent()
          .addClass('current')
        var a = $(this).attr('href'),
          n = $(this).attr('data-title'),
          o = $(this).attr('data-keyword'),
          r = $(this).attr('data-description')
        if ((changeUrl(a, n, r, o, $(this).attr('data-name'), n, r), 1 == Details)) {
          if (Mobile.matches) l = $('.load-design').offset().top - ($('.outer-nav:not(.second)').innerHeight() + 60)
          else var l = $('.load-design').offset().top - ($('.outer-nav:not(.second)').innerHeight() + 120)
          $('html, body').stop().animate(
            {
              scrollTop: l
            },
            1e3,
            'linear'
          )
        }
        return (
          $('.load-design')
            .stop()
            .animate(
              {
                opacity: 0
              },
              500,
              'linear',
              function () {
                LoadDesign(e, s, i), (Details = 1)
              }
            ),
          !1
        )
      }),
      $('.sub-nav li.subcurrent').length
        ? $('.sub-nav li.subcurrent a').trigger('click')
        : $('.preload-product li:first-child').find('a').trigger('click')),
    $('#project-page').length &&
      (subNav(),
      $('.view-details').on('click', function (t) {
        t.preventDefault()
        var e = $(this).attr('href'),
          i = ($(this).attr('data-name'), $(this).attr('href')),
          s = $(this).attr('data-title'),
          a = $(this).attr('data-keyword'),
          n = $(this).attr('data-description')
        return (
          changeUrl(i, s, n, a, $(this).attr('data-name'), s, n),
          $('html, body').addClass('no-scroll'),
          $('.loadx').length ||
            ($('body').append('<div class="loadx" style="display:block"></div>'),
            $('.overlay-dark').addClass('show'),
            popupLoad(e)),
          !1
        )
      }),
      $('.icon-360').on('click', function (t) {
        t.preventDefault(), $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>')
        var e = $(this).attr('href'),
          i = ($(this).attr('data-name'), $(this).attr('href')),
          s = $(this).attr('data-title'),
          a = $(this).attr('data-keyword'),
          n = $(this).attr('data-description')
        return changeUrl(i, s, n, a, $(this).attr('data-name'), s, n), ShowroomLoad(e), !1
      }),
      $('.item-pic-project .over-pic-project').on('click', function (t) {
        return t.preventDefault(), $(this).parent().find('.view-details').trigger('click'), !1
      }),
      $('.sub-nav li.subcurrent').length && $('.sub-nav li.subcurrent a').trigger('click'),
      $('.view-details.current').length &&
        setTimeout(function () {
          $('.view-details.current').trigger('click')
        }, 1500),
      $('.icon-360.current').length &&
        setTimeout(function () {
          $('.icon-360.current').trigger('click')
        }, 1500)),
    $('#product-list-page').length &&
      (subNav(),
      Array.from(document.querySelectorAll('.item-pic-product'), function (t) {
        t.addEventListener('click', function () {
          t.querySelector('a').click()
        })
      }),
      $('.sub-nav li.subcurrent').length && $('.sub-nav li.subcurrent a').trigger('click')),
    $('#showroom-page').length &&
      (subNav(),
      $('.icon-360').on('click', function (t) {
        t.preventDefault(), $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>')
        var e = $(this).attr('href'),
          i = ($(this).attr('data-name'), $(this).attr('href')),
          s = $(this).attr('data-title'),
          a = $(this).attr('data-keyword'),
          n = $(this).attr('data-description')
        return changeUrl(i, s, n, a, $(this).attr('data-name'), s, n), ShowroomLoad(e), !1
      }),
      $('.address-click').on('click mouseenter', function (t) {
        t.preventDefault(), $(this).parent().parent().find('.address-detail').addClass('show')
      }),
      $('.address-click').on('mouseleave', function (t) {
        t.preventDefault(), $('.address-detail').removeClass('show')
      }),
      $('.address-detail').on('click mouseenter', function (t) {
        t.preventDefault(), $(this).removeClass('show')
      }),
      $('.sub-nav li.subcurrent').length && $('.sub-nav li.subcurrent a').trigger('click'),
      $('.icon-360.current').length &&
        ($('.icon-360.current').closest('.list-item').addClass('active'),
        $('.icon-360.current').closest('.list-detail').addClass('active'),
        $('.icon-360.current').closest('.list-item-group').addClass('open-group'),
        $('.icon-360.current').closest('.list-detail-group').addClass('open-group'),
        $('.list-detail.active').css({
          height: $('.list-detail.active').find('.box-details').innerHeight() + 20
        }),
        $('.list-detail-group.open-group').css({
          height: $('.list-detail-group.open-group').find('.content-list-detail').innerHeight() + 10
        }),
        setTimeout(function () {
          $('.icon-360.current').trigger('click')
        }, 500)),
      $('.view-video.current').length &&
        setTimeout(function () {
          $('.view-video.current').trigger('click')
        }, 500),
      $('.view-album.current').length &&
        setTimeout(function () {
          $('.view-album.current').trigger('click')
        }, 500),
      $('.showroom-pro').length && ListOpen()),
    $('#product-page, #export-page').length)
  ) {
    if ($('#product-page').length) var e = $('.all-sub .current .link-load').text()
    $('.preload-product li a').on('click', function (t) {
      t.preventDefault(),
        $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>'),
        $('.preload-product li').removeClass('current')
      var i = $(this).attr('href'),
        s = $(this).attr('data-name')
      $('.outer-nav li a[data-name= "' + s + '"]')
        .parent()
        .addClass('current')
      var a = $(this).attr('href'),
        n = $(this).attr('data-title'),
        o = $(this).attr('data-keyword'),
        r = $(this).attr('data-description')
      if (
        (changeUrl(a, n, r, o, $(this).attr('data-name'), n, r), $('.load-product').removeClass('show'), 1 == Details)
      ) {
        if (Mobile.matches) l = $('.load-product').offset().top - ($('.outer-nav:not(.second)').innerHeight() + 60)
        else var l = $('.load-product').offset().top - ($('.outer-nav:not(.second)').innerHeight() + 90)
        $('html, body').stop().animate(
          {
            scrollTop: l
          },
          1e3,
          'linear'
        )
      }
      return (
        $('.load-product')
          .stop()
          .animate(
            {
              opacity: 0
            },
            300,
            'linear',
            function () {
              DetailsLoad(i, e, s), null == $('.sub-active').text() && (Details = 1)
            }
          ),
        !1
      )
    }),
      $('.close').on('click', function () {
        if ($('#product-page').length) {
          if ($('.category-nav li.current').length)
            var t = $('.category-nav li.current a').attr('href'),
              e = $('.category-nav li.current a').attr('data-title'),
              i = $('.category-nav li.current a').attr('data-keyword'),
              s = $('.category-nav li.current a').attr('data-description'),
              a = $('.category-nav li.current a').attr('data-name')
          else
            (t = $('.sub-nav li.current a').attr('href')),
              (e = $('.sub-nav li.current a').attr('data-title')),
              (i = $('.sub-nav li.current a').attr('data-keyword')),
              (s = $('.sub-nav li.current a').attr('data-description')),
              (a = $('.sub-nav li.current a').attr('data-name'))
          changeUrl(t, e, s, i, a, e, s)
        }
        $('.magnify-image').length && $('.magnify-image').magnify().destroy()
        return (
          $('.product-details')
            .stop()
            .animate(
              {
                opacity: 0
              },
              500,
              'linear',
              function () {
                if (
                  ($('.product-details').hasClass('full-screen') &&
                    ($('html,body').removeClass('no-scroll'),
                    $(
                      '.header, .outer-nav, .title-page, .go-top, .banner-inner, .last-section, .footer, .mobile-call, .fb_dialog'
                    ).removeClass('no-index'),
                    $('.product-template, .container').removeClass('level-index-in'),
                    $('.product-details').removeClass('full-screen'),
                    $('.fullsize').removeClass('active'),
                    detectBut()),
                  $('.product-full').remove(),
                  $('.product-details')
                    .css({
                      display: 'none'
                    })
                    .removeClass('showpic'),
                  $('.close').removeClass('margin'),
                  $('.load-product').fadeIn(),
                  $('.zoom-details.active').length)
                ) {
                  var t = $('.zoom-details.active').offset().top - ($('.banner-inner').innerHeight() - 200)
                  $('html, body').scrollTop(t)
                }
                $('.load-product').animate(
                  {
                    opacity: 1
                  },
                  300,
                  'linear',
                  function () {
                    $('.load-product').removeClass('blur'), $('.zoom-details').removeClass('active')
                  }
                )
              }
            ),
          !1
        )
      }),
      $('.preload-product li.current').length
        ? $('.preload-product li.current').find('a').trigger('click')
        : $('.preload-product li:first-child').find('a').trigger('click')
  }
  if (
    ($('#distribution-page').length &&
      ($('.googlemap').length &&
        ($('.list-result li').on('click', function (t) {
          t.preventDefault(),
            $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>'),
            $('.list-result li').removeClass('active'),
            $(this).addClass('active')
          var e = $(this).find('.link-load-map').attr('data-href')
          if (Mobile.matches && 1 == Details) {
            var i = $('.map-view').offset().top - 90
            $('html, body').stop().animate(
              {
                scrollTop: i
              },
              1e3,
              'linear'
            )
          }
          $('.map-view').html(''), LoadIframeMap(e)
        }),
        $('.list-result li:first-child').trigger('click')),
      $('.select-header').bind('click', function () {
        $('.select-header').hasClass('onclick')
          ? ($('.select-header').removeClass('onclick'), $(this).next('.select-box').fadeOut(100, 'linear'))
          : ($(this).addClass('onclick'),
            $(this).next('.select-box').fadeIn(100, 'linear'),
            $(this)
              .closest('.select-list')
              .on('mouseleave', function () {
                $(this).find('.select-box').fadeOut(100, 'linear'), $('.select-header').removeClass('onclick')
              }))
      }),
      $('.quick-box li a').on('click', function (t) {
        t.preventDefault(),
          $('.title-local'),
          $('.quick-box li').removeClass('selected'),
          $('.select-header').removeClass('current'),
          $(this).parent().addClass('selected'),
          $(this).parent().parent().parent().parent().find('.select-header').addClass('current'),
          $(this).closest('.select-box').fadeOut(100, 'linear'),
          $(this).parent().parent().parent().parent().removeClass('onclick'),
          $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>'),
          $('.quick-box li').removeClass('current'),
          $(this).parent().addClass('current')
        var e = $(this).find('h3').text(),
          i = $(this).attr('href'),
          s = ($(this).attr('data-name'), $(this).attr('href')),
          a = $(this).attr('data-title'),
          n = $(this).attr('data-keyword'),
          o = $(this).attr('data-description')
        return (
          changeUrl(s, a, o, n, $(this).attr('data-name'), a, o),
          $('.map-box')
            .stop()
            .animate(
              {
                opacity: 0
              },
              300,
              'linear',
              function () {
                AgentLoad(i, e)
              }
            ),
          !1
        )
      }),
      $('.quick-box li.current').length
        ? $('.quick-box li.current').find('a').trigger('click')
        : $('.quick-box li:first-child').find('a').trigger('click'),
      $('.custom-select').length && CustomeSelect(),
      $('.box-group').each(function (t, e) {
        $(e).find('.box-list .item p').length || $(e).remove()
      }),
      $('.drop-down-select .select-div').on('click', function (t) {
        t.preventDefault(), $('.box-agent').hide()
        var e = $(this).attr('data-value')
        $('.select-items')
          .stop()
          .animate(
            {
              opacity: 1
            },
            100,
            'linear',
            function () {
              $('.box-agent[data-value="' + e + '"]').show(), 'box-0' == e && $('.box-agent').show()
            }
          )
      }),
      $('.drop-down-select .select-div').length >= 3
        ? $('.drop-down-select .select-div:nth-child(1)').addClass('same-as-selected')
        : $('.custom-select').hide()),
    $('#catalogue-page').length &&
      (change_province(),
      $('.pdf').on('click', function (t) {
        t.preventDefault(), $(this).parent().find('a').trigger('click')
      }),
      $('.select-header').bind('click', function () {
        $('.select-header').hasClass('onclick')
          ? ($('.select-header').removeClass('onclick'), $(this).next('.select-box').fadeOut(200, 'linear'))
          : ($(this).addClass('onclick'),
            $(this).next('.select-box').fadeIn(200, 'linear'),
            $(this)
              .closest('.select-list')
              .on('mouseleave', function () {
                $(this).find('.select-box').fadeOut(200, 'linear'), $('.select-header').removeClass('onclick')
              }))
      }),
      $('.select-box li').bind('click', function (t) {
        t.preventDefault()
        var e = $(this).find('input')
        return (
          $(e).is(':checked') ? $(this).find('input').attr('checked', !1) : $(this).find('input').attr('checked', !0),
          $('.select-header').removeClass('onclick'),
          !1
        )
      })),
    $('#youtube-page').length &&
      (subNav(),
      $('.description-youtube').length && $('.youtube-depict').addClass('option-02'),
      $('.banner-video .box-youtube:gt(0)').addClass('second'),
      setTimeout(function () {
        $('.banner-video').addClass('show')
      }, 300),
      setTimeout(function () {
        $('.box-big-youtube').find('.play-button').trigger('click')
      }, 1e3),
      $('.outer-nav:not(.second) .sub-nav li.subcurrent').length &&
        setTimeout(function () {
          $('.outer-nav:not(.second) .sub-nav li.subcurrent a').trigger('click')
        }, 500),
      $('.section-page-video').each(function (t, e) {
        0 == $(e).find('.box-youtube-home').length && $(e).addClass('no-display')
      })),
    $('#news-page').length)
  ) {
    detectBut(), change_province()
    var i = window.location.hash
    'form' == (i = i.slice(1)) && $('.news-regis').trigger('click')
  }
  if (
    ($('#news-detail-page, #solution-page, #award-details-page').length &&
      ($('.link-page').on('click', function (t) {
        t.preventDefault(),
          $('.news-link').addClass('no-link'),
          $('.load-content, .load-data, .load-iframe').removeClass('show'),
          $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>'),
          $('.link-page').removeClass('current'),
          $(this).addClass('current')
        var e = $(this).find('a').attr('data-details')
        $(".link-page a[data-details='" + e + "']")
          .parent()
          .addClass('current')
        var i = $(this).find('a').attr('href'),
          s = $(this).find('a').attr('data-title'),
          a = $(this).find('a').attr('data-keyword'),
          n = $(this).find('a').attr('data-description')
        changeUrl(i, s, n, a, $(this).find('a').attr('data-details'), s, n)
        var o = $(this).find('a').attr('href')
        if (1 == Details) {
          if ($('#solution-page').length)
            var r = $('.load-content').offset().top - ($('.scroll-slide.at-top').innerHeight() + 120)
          else r = $('.load-content').offset().top - 70
          $('html, body')
            .stop()
            .animate(
              {
                scrollTop: r
              },
              500,
              'linear',
              function () {
                $('.load-data, .load-iframe')
                  .stop()
                  .animate(
                    {
                      opacity: 0
                    },
                    500,
                    'linear',
                    function () {
                      NewsLoad(o)
                    }
                  )
              }
            )
        } else
          $('.load-data, .load-iframe')
            .stop()
            .animate(
              {
                opacity: 0
              },
              500,
              'linear',
              function () {
                NewsLoad(o)
              }
            )
        return !1
      }),
      $('.link-page.current').length
        ? $('.link-page.current').trigger('click')
        : $('.news-link').find('.link-page').first().trigger('click')),
    $('#recruitment-page').length &&
      ($('.career-list td a').on('click', function (t) {
        t.preventDefault()
        var e = $(this).attr('href'),
          i = ($(this).attr('data-name'), $(this).attr('href')),
          s = $(this).attr('data-title'),
          a = $(this).attr('data-keyword'),
          n = $(this).attr('data-description')
        return (
          changeUrl(i, s, n, a, $(this).attr('data-name'), s, n),
          $('html, body').addClass('no-scroll'),
          $('.loadx').length ||
            ($('body').append('<div class="loadx" style="display:block"></div>'),
            $('.overlay-dark').addClass('show'),
            popupLoad(e)),
          !1
        )
      }),
      $('.career-title').on('click', function (t) {
        return t.preventDefault(), $(this).find('a').trigger('click'), !1
      }),
      $('.career-title a.current').length &&
        setTimeout(function () {
          $('.career-title a.current').trigger('click')
        }, 1500)),
    $('#contact-page').length &&
      ($('.googlemap').length,
      change_province(),
      $('.list-result li').on('click', function (t) {
        t.preventDefault(),
          $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>'),
          $('.list-result li').removeClass('active'),
          $(this).addClass('active')
        var e = $(this).find('.link-load-map').attr('data-href')
        if (Mobile.matches && 1 == Details) {
          var i = $('.map-view').offset().top - 90
          $('html, body').stop().animate(
            {
              scrollTop: i
            },
            1e3,
            'linear'
          )
        }
        $('.map-view').html(''), LoadIframeMap(e)
      }),
      $('.list-result li:first-child').trigger('click'),
      $('.quick-box-contact:first').css('z-index', 21),
      $('.quick-box-contact:last').css('z-index', 19),
      $('.select-header').each(function (t, e) {
        $(e).on('click', function () {
          $(e).hasClass('onclick')
            ? ($(e).removeClass('onclick'), $(e).parent().find('.select-box').css('display', 'none'))
            : ($(e).addClass('onclick'), $(e).parent().find('.select-box').css('display', 'block'))
        }),
          $(e)
            .closest('.select-list')
            .on('mouseleave', function () {
              $(e).removeClass('onclick'), $(e).parent().find('.select-box').css('display', 'none')
            }),
          $(e)
            .parent()
            .find('.select-box li')
            .bind('click', function (t) {
              t.preventDefault()
              var i = $(this).find('input')
              if (
                ('kall' == $(i).attr('id') || 'tall' == $(i).attr('id') || 'call' == $(i).attr('id')
                  ? $(i).is(':checked')
                    ? ($(this).parent().find('input').attr('checked', !1),
                      'kall' == $(i).attr('id') && $('input[name="cityList"]').parent().removeClass('display-none'),
                      'call' == $(i).attr('id') &&
                        $(this).closest('ul').find('li.display-none input').attr('checked', !1))
                    : ($(this).parent().find('input').attr('checked', !0),
                      'kall' == $(i).attr('id') && $('input[name="cityList"]').parent().removeClass('display-none'),
                      'call' == $(i).attr('id') &&
                        $(this).closest('ul').find('li.display-none input').attr('checked', !1))
                  : $(i).is(':checked')
                  ? $(this).find('input').attr('checked', !1)
                  : $(this).find('input').attr('checked', !0),
                'areaList' == $(i).attr('name'))
              ) {
                var s = []
                $('input[name="areaList"][checked]').each(function (t, e) {
                  s.push($(e).attr('id'))
                }),
                  $('input[name="cityList"]').attr('checked', !1),
                  s.length
                    ? 1 == s.length && s.includes('kall')
                      ? $('input[name="cityList"]').parent().removeClass('display-none')
                      : $('.select-box li').each(function (t, e) {
                          s.includes($(e).find('input[name="cityList"]').attr('data-kv'))
                            ? $(e).find('input[name="cityList"]').parent().removeClass('display-none')
                            : ($(e).find('input[name="cityList"]').parent().addClass('display-none'),
                              $('input[name="cityList"][id="call"]').parent().removeClass('display-none'))
                        })
                    : $('.select-box li input[name="cityList"]').parent().removeClass('display-none')
              }
              return LoadListContact(), $(e).parent().find('.select-header').removeClass('onclick'), !1
            })
      })),
    $('.load-pdf').length &&
      $('.load-pdf').on('click', function (t) {
        t.preventDefault()
        var e = $(this).attr('data-href'),
          i = $(this).attr('data-pdf'),
          s = $(this).attr('data-name')
        return (
          $(this).addClass('current'),
          (window.location.hash = s),
          $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>'),
          $('html, body').addClass('no-scroll'),
          $('.overlay-dark').addClass('show'),
          $('.container')
            .stop()
            .animate(
              {
                opacity: 1
              },
              500,
              'linear',
              function () {
                AjaxPDf(e, i)
              }
            ),
          !1
        )
      }),
    $('#investment-page').length &&
      (selectHeader(),
      videoSlide(),
      $('.relation-box').addClass('on-show'),
      $('.investment')
        .stop()
        .animate(
          {
            opacity: 1
          },
          500,
          'linear',
          function () {}
        ),
      $('.select-box').each(function (t, e) {
        $(e).find('li:nth-child(2) a, li:nth-child(2) button').trigger('click')
      }),
      $('.preload-product li.current').length
        ? $('.preload-product li.current a').trigger('click')
        : $('.preload-product li:first-child a').trigger('click'),
      $('.link-share-popup').on('click', function (t) {
        t.preventDefault()
        var e = $(this).attr('data-href')
        return $('html, body').addClass('no-scroll'), $('.overlay-dark').addClass('show'), popupLoad(e), !1
      }),
      window.location.hash && LocationHash()),
    $('#investment-list-page').length)
  ) {
    SubOverSize02(),
      $('.slide-table')
        .on('initialized.btq.slidebox', function () {
          $('.container-zoom').each(function (t, e) {
            new PinchZoom.default(e, {
              draggableUnzoomed: !1
            })
          }),
            $('.slide-table').find('.slide-item.active').addClass('selected')
        })
        .BTQSlider({
          animateOut: 'fadeout',
          animateIn: 'fadein',
          items: 1,
          margin: 0,
          smartSpeed: 600,
          loop: !1,
          dots: !1,
          dotNum: !1,
          nav: !0,
          touchDrag: !1,
          pullDrag: !1,
          autoHeight: !0,
          responsiveRefreshRate: 200,
          responsive: {
            0: {
              nav: !1
            },
            1100: {
              nav: !0
            }
          }
        })
        .on('changed.btq.slidebox', function (t) {
          $('.slide-num').length &&
            (function (t) {
              var e = t.item.Count - 1,
                i = t.item.index
              i < 0 && (i = e)
              i > e && (i = 0)
              $('.slide-num').find('.slide-item').removeClass('current').eq(i).addClass('current')
              var s = $('.slide-num').find('.slide-item.active').length - 1,
                a = $('.slide-num').find('.slide-item.active').first().index(),
                n = $('.slide-num').find('.slide-item.active').last().index()
              i >= n - 1 && $('.slide-num').data('btq.slidebox').to(i, 300, !0)
              i <= a &&
                $('.slide-num')
                  .data('btq.slidebox')
                  .to(i - s, 300, !0)
            })(t)
        })
        .on('translate.btq.slidebox', function (t) {
          $('.slide-table').find('.slide-item').removeClass('selected')
        })
        .on('translated.btq.slidebox', function (t) {
          $('.slide-table').find('.slide-item.active').addClass('selected')
        }),
      $('.slide-num')
        .on('initialized.btq.slidebox', function () {
          var t = $('.slide-num').find('.slide-item').length
          $(window).width() >= 600
            ? t <= 6
              ? $('.slide-num').addClass('center-slidebox')
              : $('.slide-num').removeClass('center-slidebox')
            : t <= 3
            ? $('.slide-num').addClass('center-slidebox')
            : $('.slide-num').removeClass('center-slidebox'),
            $('.slide-num').find('.slide-item').eq(0).addClass('current')
        })
        .BTQSlider({
          margin: 5,
          smartSpeed: 300,
          dots: !1,
          nav: !1,
          touchDrag: !1,
          pullDrag: !1,
          autoHeight: !0,
          responsiveRefreshRate: 100,
          responsive: {
            0: {
              items: 5,
              slideBy: 3
            },
            600: {
              items: 8,
              slideBy: 6
            }
          }
        }),
      $('.slide-num').on('click', '.slide-item', function (t) {
        t.preventDefault()
        var e = $(this).index()
        $('.slide-table').data('btq.slidebox').to(e, 1e3, !0)
      }),
      $('.button-tariff').on('click', function (t) {
        t.preventDefault(),
          $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>'),
          $('.button-tariff').removeClass('current'),
          $(this).addClass('current')
        var e = $(this).attr('href'),
          i = $(this).attr('href'),
          s = $(this).attr('data-title'),
          a = $(this).attr('data-keyword'),
          n = $(this).attr('data-description')
        if ((changeUrl(i, s, n, a, $(this).attr('data-name'), s, n), 1 == Details)) {
          var o = $('.load-tariff').offset().top - 120
          $('html, body')
            .stop()
            .animate(
              {
                scrollTop: o
              },
              500,
              'linear',
              function () {
                $('.load-tariff')
                  .stop()
                  .animate(
                    {
                      opacity: 0
                    },
                    500,
                    'linear',
                    function () {
                      TariffLoad(e)
                    }
                  )
              }
            )
        } else
          $('.load-tariff')
            .stop()
            .animate(
              {
                opacity: 0
              },
              500,
              'linear',
              function () {
                TariffLoad(e)
              }
            )
        return window.innerWidth < 540 && detectBut(), !1
      }),
      $('.button-tariff.current').length
        ? $('.button-tariff.current').trigger('click')
        : $('.button-tariff').first().trigger('click'),
      $('.catalogue-box').on('click', function () {
        $(this).find('.load-pdf').trigger('click')
      }),
      window.location.hash && LocationHash()
  }
  if (
    ($('#investment-details-page').length &&
      ($('.link-page').on('click', function (t) {
        t.preventDefault(),
          $('.news-link').addClass('no-link'),
          $('.load-content, .load-data, .load-iframe').removeClass('show'),
          $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>'),
          $('.link-page').removeClass('current'),
          $(this).addClass('current')
        var e = $(this).find('a').attr('data-details')
        $(".link-page a[data-details='" + e + "']")
          .parent()
          .addClass('current')
        var i = $(this).find('a').attr('href'),
          s = $(this).find('a').attr('data-title'),
          a = $(this).find('a').attr('data-keyword'),
          n = $(this).find('a').attr('data-description')
        changeUrl(i, s, n, a, $(this).find('a').attr('data-details'), s, n)
        var o = $(this).find('a').attr('href')
        if (1 == Details) {
          if ($('#solution-page').length)
            var r = $('.load-content').offset().top - ($('.scroll-slide.at-top').innerHeight() + 120)
          else r = $('.load-content').offset().top - 70
          $('html, body')
            .stop()
            .animate(
              {
                scrollTop: r
              },
              500,
              'linear',
              function () {
                $('.load-data, .load-iframe')
                  .stop()
                  .animate(
                    {
                      opacity: 0
                    },
                    500,
                    'linear',
                    function () {
                      NewsLoad(o)
                    }
                  )
              }
            )
        } else
          $('.load-data, .load-iframe')
            .stop()
            .animate(
              {
                opacity: 0
              },
              500,
              'linear',
              function () {
                NewsLoad(o)
              }
            )
        return !1
      }),
      $('.link-page.current').length
        ? $('.link-page.current').trigger('click')
        : $('.news-link').find('.link-page').first().trigger('click')),
    $('#award-page').length)
  ) {
    subNav(),
      $('.loadx').fadeOut(400, 'linear', function () {
        $('.loadx').remove()
      }),
      Array.from(document.querySelectorAll('iframe:not(.youtube-iframe)'), function (t) {
        t &&
          (t.contentWindow.location.reload(),
          t.addEventListener('load', function () {
            ;(t.style.height = 0), (t.style.height = t.contentWindow.document.body.scrollHeight + 'px')
          }))
      })
    var s = 0.5625 * $('.youtube-iframe').outerWidth()
    $('.content-page-award .youtube-iframe').height(s),
      $('.sub-nav li.subcurrent').length &&
        setTimeout(function () {
          $('.sub-nav li.subcurrent a').trigger('click')
        }, 500)
  }
  $('#policy-page').length &&
    ($('.policy').remove(),
    $('.view-policy').on('click', function (t) {
      t.preventDefault()
      var e = $(this).attr('href'),
        i = ($(this).attr('data-name'), $(this).attr('href')),
        s = $(this).attr('data-title'),
        a = $(this).attr('data-keyword'),
        n = $(this).attr('data-description')
      return (
        changeUrl(i, s, n, a, $(this).attr('data-name'), s, n),
        $('html, body').addClass('no-scroll'),
        $('.loadx').length ||
          ($('body').append('<div class="loadx" style="display:block"></div>'),
          $('.overlay-dark').addClass('show'),
          popupLoad(e)),
        !1
      )
    }),
    $('.view-policy.current').length &&
      setTimeout(function () {
        $('.view-policy.current').trigger('click')
      }, 1500)),
    $('#levelmenu-page').length &&
      (ListOpen(),
      $('.icon-360').on('click', function (t) {
        t.preventDefault(), $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>')
        var e = $(this).attr('href'),
          i = ($(this).attr('data-name'), $(this).attr('href')),
          s = $(this).attr('data-title'),
          a = $(this).attr('data-keyword'),
          n = $(this).attr('data-description')
        return changeUrl(i, s, n, a, $(this).attr('data-name'), s, n), ShowroomLoad(e), !1
      }),
      $('.icon-360.current').length &&
        ($('.icon-360.current').closest('.list-item').addClass('active'),
        $('.icon-360.current').closest('.list-detail').addClass('active'),
        $('.icon-360.current').closest('.list-item-group').addClass('open-group'),
        $('.icon-360.current').closest('.list-detail-group').addClass('open-group'),
        $('.list-detail.active').css({
          height: $('.list-detail.active').find('.box-details').innerHeight() + 20
        }),
        $('.list-detail-group.open-group').css({
          height: $('.list-detail-group.open-group').find('.content-list-detail').innerHeight() + 10
        }),
        setTimeout(function () {
          $('.icon-360.current').trigger('click')
        }, 1500)))
}
function ZoomPic() {
  $('img').on('click', function () {
    if ($(this).hasClass('zoom-pic') && Mobile.matches) {
      $('html, body').addClass('no-scroll'),
        $(this).parent().addClass('to-scrollZ'),
        $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>'),
        $('.all-pics').addClass('show'),
        $('.all-pics').append('<div class="full"  style="display:block"></div>'),
        $('.details-content').length
          ? $('.overlay-dark').addClass('level-index-in')
          : $('.overlay-dark').addClass('show')
      var t = $(this).attr('src')
      $('.all-pics')
        .find('.full')
        .append('<img src ="' + t + '" alt="pic" />'),
        $('.all-pics').find('.full').append('<span></span>'),
        $('body').append('<div class="close-pics"></div>'),
        $('.all-pics').append('<div class="close-pics-small"></div>'),
        $('.all-pics img').on('load', function () {
          $('.all-pics').addClass('show'),
            0 == Touch
              ? ($('.full').addClass('dragscroll'), $('.dragscroll').draptouch())
              : ($('.full').addClass('pinch-zoom'),
                $('.pinch-zoom').each(function (t, e) {
                  new PinchZoom.default(e, {})
                })),
            $('.full img').length > 1 && $('.full img').last().remove(),
            $('.loadx').fadeOut(400, 'linear', function () {
              0 == Touch && detectMargin(), $('.full img').addClass('fadein'), $('.loadx').remove()
            })
        }),
        Mobile.matches ||
          $('.full span').on('click', function () {
            $('.close-pics').trigger('click')
          }),
        $('.close-pics-small, .close-pics').on('click', function () {
          $('.loadx').remove(),
            $('.full').fadeOut(300, 'linear', function () {
              if (
                ($('.all-pics .full,  .all-pics .pinch-zoom-container').remove(),
                $('.close-pics-small, .close-pics').remove(),
                $('.all-pics').removeClass('show'),
                $('.details-content').length)
              )
                $('.overlay-dark').removeClass('level-index-in')
              else if (
                ($('html, body').removeClass('no-scroll'),
                $('.overlay-dark').removeClass('show'),
                $('.to-scrollZ').length)
              ) {
                var t = $('.to-scrollZ').offset().top
                $('.to-scrollZ').removeClass('to-scrollZ'),
                  $(window).width() < 1100 && $('html, body').scrollTop(t - 60)
              }
            })
        })
    }
    return !1
  })
}
function Option() {
  $('.brochure-but, .item-catalogue a, .pdf-download').on('click', function (t) {
    t.preventDefault()
    var e = $(this).attr('href')
    return window.open(e, '_blank'), !1
  }),
    $('.album-box').on('click', function (t) {
      return t.preventDefault(), 1 == Touch && $(this).find('.view-album').trigger('click'), !1
    }),
    $('.award').on('click', function (t) {
      return t.preventDefault(), 0 == Touch && $(this).find('.zoom').trigger('click'), !1
    }),
    $('.player, .play-video, .view-video').on('click', function (t) {
      t.preventDefault(),
        $(this).parent().addClass('to-scrollV'),
        $('.popup-video img').length &&
          ($('.popup-pics, .popup-video').removeClass('fadeinup').addClass('fadeout'),
          $('.close-popup').removeClass('fadeinup').addClass('fadeout'))
      var e = $(this).attr('data-href')
      if ('' != $(this).attr('data-hreflink') && null != $(this).attr('data-hreflink')) {
        var i = $(this).attr('data-hreflink'),
          s = $(this).attr('data-title'),
          a = $(this).attr('data-keyword'),
          n = $(this).attr('data-description')
        changeUrl(i, s, n, a, $(this).attr('data-name'), s, n)
      }
      return (
        $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>'),
        $('html, body').addClass('no-scroll'),
        $('.overlay-dark').addClass('show'),
        $('.allvideo').fadeIn(300, 'linear', function () {
          VideoLoad(e)
        }),
        !1
      )
    }),
    $('.view-album').on('click', function (t) {
      t.preventDefault()
      var e = $(this).attr('data-href'),
        i = $(this).attr('data-go') || -1
      if (
        ($('.slide-pic').length && $('.slide-pic').trigger('stop.btq.autoplay'),
        $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>'),
        '' != $(this).attr('data-hreflink') && null != $(this).attr('data-hreflink'))
      ) {
        var s = $(this).attr('data-hreflink'),
          a = $(this).attr('data-title'),
          n = $(this).attr('data-keyword'),
          o = $(this).attr('data-description')
        changeUrl(s, a, o, n, $(this).attr('data-name'), a, o)
      }
      return (
        $('html, body').addClass('no-scroll'),
        $('.overlay-dark').addClass('show'),
        $('.all-album').fadeIn(300, 'linear', function () {
          AlbumLoad(e, i)
        }),
        !1
      )
    }),
    $('.zoom:not(.design)').on('click', function () {
      $('html, body').addClass('no-scroll'),
        $('.loadx').length || $('body').append('<div class="loadx" style="display:block"></div>'),
        $('.all-pics').addClass('show'),
        $('.all-pics').append('<div class="full"  style="display:block"></div>'),
        $('.overlay-dark').addClass('show')
      var t = $(this).attr('data-pic'),
        e = $(this).parent().find('h3').text()
      return (
        $('.all-pics')
          .find('.full')
          .append('<img src ="' + t + '" alt="pic" />'),
        $('.all-pics').find('.full').append('<span></span>'),
        $('body').append('<div class="close-pics"></div>'),
        $('.all-pics').append('<div class="close-pics-small"></div>'),
        $('.all-pics').prepend('<div class="text-length"><h3></h3></div>'),
        $('.text-length h3').text(e),
        $('.all-pics img').on('load', function () {
          $('.all-pics').addClass('show'),
            0 == Touch
              ? ($('.full').addClass('dragscroll'), $('.dragscroll').draptouch())
              : ($('.full').addClass('pinch-zoom'),
                $('.pinch-zoom').each(function (t, e) {
                  new PinchZoom.default(e, {})
                })),
            $('.full img').length > 1 && $('.full img').last().remove(),
            $('.loadx').fadeOut(400, 'linear', function () {
              0 == Touch && detectMargin(), $('.full img, .text-length').addClass('fadein'), $('.loadx').remove()
            })
        }),
        Mobile.matches ||
          $('.full span').on('click', function () {
            $('.close-pics').trigger('click')
          }),
        $('.close-pics, .close-pics-small').on('click', function () {
          $('.loadx').remove(),
            $('.full').fadeOut(300, 'linear', function () {
              $('.overlay-dark').removeClass('show'),
                $('.all-pics .full, .all-pics .text-length, .all-pics .pinch-zoom-container').remove(),
                $('.close-pics, .close-pics-small').remove(),
                $('.all-pics').removeClass('show'),
                $('html, body').removeClass('no-scroll')
            })
        }),
        !1
      )
    })
}
function turnWheelTouch() {
  ;(doWheel = !0), (doTouch = !0)
}
;($.fn.isInViewport = function () {
  var t = $(this).offset().top,
    e = t + $(this).outerHeight(),
    i = $(window).scrollTop(),
    s = i + $(window).height()
  return e > i && t < s
}),
  window.addEventListener('keydown', function (t) {
    27 == (t.keyCode || t.which) && (t.preventDefault(), $('.close-popup').trigger('click'))
  })
var deferredPrompt,
  Amount = 0
function detectBut() {
  if ($('.outer-nav').hasClass('oversize')) {
    var t = $('.sub-nav ul').offset().left,
      e = $('.sub-nav li.current').offset().left,
      i = $(window).width() / 2 - $('.sub-nav li.current').width() / 2
    $('.sub-nav')
      .stop()
      .animate(
        {
          scrollLeft: e - i - t
        },
        'slow'
      ),
      (Amount = 0)
  }
  if (Mobile.matches && $('.link-page').hasClass('current')) {
    var s = $('.link-page.current').parent().parent(),
      a =
        ((t = $('.news-link').offset().left),
        (e = $('.link-page.current').offset().left),
        $('.scroll-slide').width() / 2 - $('.link-page.current').width() / 2)
    $(s)
      .stop()
      .animate(
        {
          scrollLeft: e - a - t
        },
        'slow'
      )
  }
  if ($('.category-nav').length) {
    ;(t = $('.category-nav ul').offset().left),
      (e = $('.category-nav li.current').offset().left),
      (i = $('.category-nav').width() / 2 - $('.category-nav li.current').width() / 2)
    $('.scrollC')
      .stop()
      .animate(
        {
          scrollLeft: e - i - t
        },
        'slow'
      )
  }
  if ($('.sub-tariff').length) {
    ;(t = $('.list-document').offset().left),
      (e = $('.button-tariff.current').offset().left),
      (i = $(window).width() / 2 - $('.button-tariff.current').width() / 2)
    $('.sub-control')
      .stop()
      .animate(
        {
          scrollLeft: e - i - t
        },
        'slow'
      ),
      (Amount = 0)
  }
}
function detectMargin() {
  var t = $('.full img').width(),
    e = $('.full  img').height(),
    i = $(window).height(),
    s = $(window).width()
  s > t
    ? $('.full img').css({
        'margin-left': s / 2 - t / 2
      })
    : $('.full img').css({
        'margin-left': 0
      }),
    i > e
      ? $('.full img').css({
          'margin-top': i / 2 - e / 2
        })
      : $('.full img').css({
          'margin-top': 0
        })
}
function LocationHash() {
  var t = window.location.hash
  ;(t = t.slice(1)), $(".load-pdf[data-name='" + t + "']").trigger('click')
}
$(document).ready(function () {
  if (
    ($('#contact_form').length && document.getElementById('contact_form').reset(),
    $('.item-box').on('click', function (t) {
      $(this).find('a').trigger('click')
    }),
    $('.item-box img').on('click', function (t) {
      $(this).parent().parent().find('a').trigger('click')
    }),
    $('.container').on('click', function () {
      Mobile.matches ||
        ($('.search-but').hasClass('active') && $('.search-form, .search-but').removeClass('active'),
        $('.nav-click').hasClass('active') && $('.nav-click').trigger('click')),
        $('.call-icon.active').trigger('click')
    }),
    $('.go-top').on('click', function () {
      $('html, body').stop().animate(
        {
          scrollTop: 0
        },
        'slow'
      ),
        $('.header').removeClass('hide')
    }),
    $(
      '.pic-news, .pic-pro, .pic-thumb, .news-pic, .catalogue-top, .catalogue-box, .over-pic-project, .over-pic-product'
    ).length)
  )
    new LazyLoad({
      threshold: 0,
      callback_enter: function (t) {
        Loadpic()
      }
    })
  if (
    ($('#home-page').length &&
      setTimeout(function () {
        $('.loadicon').addClass('show')
      }, 800),
    0 == Loadx && ((Loadx = 1), Done()),
    $('#investment-page').length)
  ) {
    var t = $('.section-banner-shareholder').clone()
    $(t).addClass('bn-mobile'), $('.share-intro').prepend(t)
  }
}),
  document.addEventListener(
    'scroll',
    function () {
      var t = $(document).scrollTop(),
        e = $('.banner-home, .banner-inner, .banner-video').innerHeight(),
        i = $('.slide-mask, .banner-video'),
        s = $(window).scrollTop(),
        a = $('.banner-home, .banner-inner').innerHeight() / 2
      ;($('.banner-home').length || $('.banner-inner').length) &&
        $('.banner-home, .banner-inner, .banner-video').offset().top
      if ((a / 1, Mobile.matches)) (n = $('.header').height()), (o = e + $('.outer-nav:not(.second) h2').innerHeight())
      else
        var n = $('.color-head').height() + $('.nav').innerHeight(),
          o = e + n - $('.outer-nav:not(.second) h2').innerHeight()
      if (
        ($('#youtube-page').length ||
          (t >= $(window).height() / 2
            ? $('.youtube-video').length
              ? ($('.pause-button').trigger('click'), $('.control').addClass('hide'))
              : $('.stop').trigger('click')
            : t <= 100 &&
              ($('.youtube-video').length && $('.slide-mask .slide-item:first-child').hasClass('ani-text')
                ? ($('.play-button').trigger('click'), $('.control').removeClass('hide'))
                : $('.play').trigger('click'))),
        t >= $(window).height() / 2
          ? ($('.go-top').addClass('show'), $('.wrap-social-facilities,#Iframe1').addClass('hide'))
          : ($('.go-top').removeClass('show'), $('.wrap-social-facilities,#Iframe1').removeClass('hide')),
        t >= 100
          ? $('.add-button').hasClass('show') && null !== deferredPrompt && $('.add-button').addClass('hide')
          : $('.add-button').hasClass('show') && null !== deferredPrompt && $('.add-button').removeClass('hide'),
        $(window).width() < 1100 &&
          (t >= n ? $('.slogan, .box-top').addClass('hide') : $('.slogan, .box-top').removeClass('hide')),
        t >= o + 100
          ? Mobile.matches || $('.outer-nav:not(.second)').addClass('level-index-out')
          : $('.outer-nav:not(.second)').removeClass('level-index-out'),
        $('.second').length &&
          (t >= o + 100
            ? $('.sub-category').length
              ? ($('.sub-category').addClass('fixed'), $('.second').addClass('fixed white-color'), detectBut())
              : $('.second').addClass('fixed')
            : ($('.second').removeClass('fixed'),
              $('.sub-category').length &&
                ($('.sub-category').removeClass('fixed'),
                $('.second').removeClass('fixed  white-color'),
                detectBut()))),
        $('#investment-list-page').length && !$('.wrap-table-share').length && $('.table-shareholder-section').length)
      ) {
        var r = $('.table-shareholder-section').offset().top - 80
        t <= r
          ? $('.table-shareholder-section').removeClass('fixed')
          : $('.table-shareholder-section').addClass('fixed')
      }
      if ($('#news-page').length && $('.content-news-section').length) {
        r = $('.content-news-section').offset().top
        t <= r ? $('.wrap-social-facilities').removeClass('show') : $('.wrap-social-facilities').addClass('show')
      }
      $('.set-post').each(function () {
        var i = $(this).offset().top - (e + n),
          s = $(this).outerHeight()
        s < $(window).height() && (s = $(window).height()),
          t >= i &&
            t <= i + s &&
            ($('.set-post').removeClass('active'),
            $(this).addClass('active'),
            1 == doWheel &&
              ($('.sub-nav li').removeClass('current'),
              $('.sub-nav li a[data-name="' + $(this).attr('data-post') + '"]')
                .parent()
                .addClass('current')),
            detectBut())
      }),
        window.requestAnimationFrame(function () {
          !Mobile.matches &&
            t < e + 200 &&
            $(i).css({
              transform: 'translate3d(0,' + 0.3 * s + 'px, 0)'
            }),
            onScroll()
        }),
        (windscroll = t)
    },
    {
      passive: !1
    }
  ),
  $(window).resize(function () {
    ResizeWindows()
  }),
  $(window).on(
    'resize',
    function () {
      ResizeWindows(),
        $('.outer-nav').length && SubOverSize(),
        Mobile.matches
          ? (0 == Touch && $('.dragscroll').length && detectMargin(),
            $('.has-sub').parent().hasClass('active') && $('.overlay-menu.active').trigger('click'),
            $('.add').hasClass('active') && $('.add.active').trigger('click'),
            $('#home-page').legnth &&
              $('.box-youtube-home .button-video').each(function (t, e) {
                $(e).removeAttr('style')
              }),
            $('#youtube-page').length &&
              $('.slide-list-youtube').hasClass('slide-slidebox') &&
              $('.slide-list-youtube').each(function (t, e) {
                $(e).data('btq.slidebox').destroy()
              }),
            $('#solution-page').length &&
              $('.at-top .news-link').hasClass('slide-slidebox') &&
              $('.at-top .news-link').data('btq.slidebox').destroy(),
            $('.news-link').length &&
              $('.news-link').hasClass('slide-slidebox') &&
              $('.news-link').data('btq.slidebox').destroy(),
            $('.slide-showroom').length &&
              !$(11) &&
              $('.slide-showroom').hasClass('slide-slidebox') &&
              $('.slide-showroom').each(function (t, e) {
                $(e).data('btq.slidebox').destroy()
              }),
            $('.product-full').length &&
              !$('.product-details').hasClass('full-screen') &&
              ($('html,body').addClass('no-scroll'),
              $(
                '.header, .outer-nav, .title-page,.go-top, .banner-inner, .last-section, .footer, .mobile-call, .fb_dialog'
              ).addClass('no-index'),
              $('.product-template, .container').addClass('level-index-in'),
              $('.product-details').addClass('full-screen'),
              $('.fullsize').addClass('active')))
          : ($('.close-pics-small').length && $('.close-pics-small').trigger('click'),
            $('.nav-click').hasClass('active') && $('.container').trigger('click'),
            $('.dragscroll').length && (detectMargin(), $('.dragscroll').draptouch()),
            $('#home-page').legnth &&
              $('.box-youtube-home .button-video').each(function (t, e) {
                var i = $(e).parent().find('.pic-img').innerHeight()
                $(e).css({
                  top: i + 'px'
                })
              }),
            $('.news-link').length &&
              ($('.news-link').hasClass('slide-slidebox') ||
                (SlidePicture(),
                setTimeout(function () {
                  var t = $('.news-link .slide-item').index($('.link-page.current').parent())
                  $('.news-link').data('btq.slidebox').to(t, 300, !0)
                }, 300))),
            $('.slide-showroom').length &&
              !$(11) &&
              ($('.slide-showroom').hasClass('slide-slidebox') || SlidePicture()),
            $('#solution-page').length &&
              ($('.at-top .news-link').hasClass('slide-slidebox') ||
                (SlidePicture(),
                setTimeout(function () {
                  var t = $('.news-link .slide-item').index($('.link-page.current').parent())
                  $('.news-link').data('btq.slidebox').to(t, 300, !0)
                }, 300))),
            $('#youtube-page').length && ($('.slide-list-youtube').hasClass('slide-slidebox') || SlidePicture()),
            $('.nav-home, .scroll-slide, .sub-nav').hasClass('dragscroll') &&
              ($('.nav-home, .scroll-slide, .sub-nav').removeClass(
                'dragscroll draptouch-active draptouch-moving-left draptouch-moving-down'
              ),
              $('.nav-home, .scroll-slide,  .sub-nav').css({
                overflow: 'visible'
              })))
    },
    250
  ),
  window.addEventListener('orientationchange', function (t) {
    ResizeWindows(),
      $('.full.dragscroll').length &&
        !Mobile.matches &&
        ($('html, body').removeClass('no-scroll'), $('.close-pics-small').trigger('click')),
      detectBut()
  }),
  (window.onpopstate = function (t) {
    t.preventDefault()
    var e = $('.httpserver').text()
    if (null !== history.state)
      var i = history.state.path,
        s = history.state.dataName,
        a = history.state.title
    else i = document.URL
    if (void 0 !== i) {
      i.replace(e, '').split('/')
      changeUrl(i, a, '', '', s, '', '')
    }
    $('#investment-page').length ||
      $('.nav li a').each(function (t, e) {
        $(e).attr('href') == i && window.history.back()
      }),
      $('.link-page a').each(function (t, e) {
        $(e).attr('href') == i && (window.location = i)
      }),
      $('.sub-nav li a').each(function (t, e) {
        $(e).attr('href') == i && $(e).trigger('click')
      }),
      $('.view-details').each(function (t, e) {
        $(e).attr('href') == i && $(e).trigger('click')
      }),
      $('.view-policy').each(function (t, e) {
        $(e).attr('href') == i && $(e).trigger('click')
      }),
      $('.category-nav li a').each(function (t, e) {
        $(e).attr('href') == i && $(e).trigger('click')
      }),
      $('.icon-360').each(function (t, e) {
        $(e).attr('href') == i && $(e).trigger('click')
      }),
      $('.view-album').each(function (t, e) {
        $(e).attr('data-hreflink') == i && $(e).trigger('click')
      }),
      $('.view-video').each(function (t, e) {
        $(e).attr('data-hreflink') == i && $(e).trigger('click')
      }),
      $('.career-list td a').each(function (t, e) {
        $(e).attr('href') == i && $(e).trigger('click')
      }),
      $('.thumb-pic').length && !$('.product-details .product-full').length
        ? $('.zoom-details').each(function (t, e) {
            $(e).attr('href') == i && $(e).trigger('click')
          })
        : $('.product-details .close').trigger('click'),
      $('.preload-product li a').each(function (t, e) {
        $(e).attr('href') == i && $(e).trigger('click')
      }),
      $('.quick-box li a').each(function (t, e) {
        $(e).attr('href') == i && $(e).trigger('click')
      }),
      $('.button-tariff').each(function (t, e) {
        $(e).attr('href') == i && $(e).trigger('click')
      }),
      $('.iframe-showroom').length && $('.close-popup').trigger('click'),
      $('.close-popup').length && $('.close-popup').trigger('click'),
      $('.iframe-showroom').length && $('.close-popup').trigger('click'),
      $('.close-album').length && $('.close-album').trigger('click'),
      $('.close-pics').length && $('.close-pics').trigger('click'),
      $('.load-pdf').hasClass('current') && $('.popup-brochure').length && $('.popup-brochure .close').trigger('click'),
      window.location.hash && LocationHash()
  })
var addBtn = document.querySelector('.add-button'),
  closeAdd = document.querySelector('.close-add'),
  installApp = document.querySelector('.install-app')
window.addEventListener('beforeinstallprompt', function (t) {
  t.preventDefault(),
    (deferredPrompt = t),
    $('.add-button').addClass('show'),
    installApp.addEventListener('click', function (t) {
      deferredPrompt.prompt(),
        deferredPrompt.userChoice.then(function (t) {
          'accepted' === t.outcome
            ? (console.log('User accepted Manifest'), addBtn.remove())
            : console.log('User dismissed Manifest'),
            (deferredPrompt = null)
        })
    }),
    closeAdd.addEventListener('click', function (t) {
      t.preventDefault(), addBtn.remove()
    })
})
