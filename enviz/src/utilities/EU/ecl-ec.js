/* @ecl/preset-ec - 4.10.0 Built on 2025-01-08T08:26:42.532Z */
var ECL = ((e) => {
  function R(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, s = Array(t); i < t; i++) s[i] = e[i];
    return s;
  }
  function B(e, t, i, s, n, l, a) {
    try {
      var o = e[l](a),
        r = o.value;
    } catch (e) {
      return i(e);
    }
    o.done ? t(r) : Promise.resolve(r).then(s, n);
  }
  function d(e, t) {
    if ({}.hasOwnProperty.call(e, t)) return e;
    throw new TypeError('attempted to use private field on non-instance');
  }
  Element.prototype.matches ||
    (Element.prototype.matches = Element.prototype.msMatchesSelector),
    Element.prototype.closest ||
      (Element.prototype.closest = function (e) {
        for (var t = this; t; ) {
          if (t.matches(e)) return t;
          t = t.parentElement;
        }
        return null;
      });
  var z = 0;
  function t(e) {
    return '__private_' + z++ + '_' + e;
  }
  function F(e, t) {
    var i,
      s =
        ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (s) return (s = s.call(e)).next.bind(s);
    if (
      Array.isArray(e) ||
      (s = ((e, t) => {
        var i;
        if (e)
          return 'string' == typeof e
            ? R(e, t)
            : 'Map' ===
                  (i =
                    'Object' === (i = {}.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : i) || 'Set' === i
              ? Array.from(e)
              : 'Arguments' === i ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                ? R(e, t)
                : void 0;
      })(e)) ||
      t
    )
      return (
        s && (e = s),
        (i = 0),
        function () {
          return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
        }
      );
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  function i() {
    return (i = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i,
              s = arguments[t];
            for (i in s) !{}.hasOwnProperty.call(s, i) || (e[i] = s[i]);
          }
          return e;
        }).apply(null, arguments);
  }
  function _() {
    _ = function () {
      return a;
    };
    var r,
      a = {},
      e = Object.prototype,
      h = e.hasOwnProperty,
      c =
        Object.defineProperty ||
        function (e, t, i) {
          e[t] = i.value;
        },
      t = 'function' == typeof Symbol ? Symbol : {},
      s = t.iterator || '@@iterator',
      i = t.asyncIterator || '@@asyncIterator',
      n = t.toStringTag || '@@toStringTag';
    function l(e, t, i) {
      return (
        Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        e[t]
      );
    }
    try {
      l({}, '');
    } catch (r) {
      l = function (e, t, i) {
        return (e[t] = i);
      };
    }
    function o(e, t, i, s) {
      var n,
        l,
        a,
        o,
        t = t && t.prototype instanceof b ? t : b,
        t = Object.create(t.prototype),
        s = new A(s || []);
      return (
        c(t, '_invoke', {
          value:
            ((n = e),
            (l = i),
            (a = s),
            (o = u),
            function (e, t) {
              if (o === p) throw Error('Generator is already running');
              if (o === v) {
                if ('throw' === e) throw t;
                return { value: r, done: !0 };
              }
              for (a.method = e, a.arg = t; ; ) {
                var i = a.delegate;
                if (i) {
                  i = (function e(t, i) {
                    var s = i.method,
                      n = t.iterator[s];
                    if (n === r)
                      return (
                        (i.delegate = null),
                        ('throw' === s &&
                          t.iterator.return &&
                          ((i.method = 'return'),
                          (i.arg = r),
                          e(t, i),
                          'throw' === i.method)) ||
                          ('return' !== s &&
                            ((i.method = 'throw'),
                            (i.arg = new TypeError(
                              "The iterator does not provide a '" +
                                s +
                                "' method"
                            )))),
                        g
                      );
                    s = d(n, t.iterator, i.arg);
                    if ('throw' === s.type)
                      return (
                        (i.method = 'throw'),
                        (i.arg = s.arg),
                        (i.delegate = null),
                        g
                      );
                    n = s.arg;
                    return n
                      ? n.done
                        ? ((i[t.resultName] = n.value),
                          (i.next = t.nextLoc),
                          'return' !== i.method &&
                            ((i.method = 'next'), (i.arg = r)),
                          (i.delegate = null),
                          g)
                        : n
                      : ((i.method = 'throw'),
                        (i.arg = new TypeError(
                          'iterator result is not an object'
                        )),
                        (i.delegate = null),
                        g);
                  })(i, a);
                  if (i) {
                    if (i === g) continue;
                    return i;
                  }
                }
                if ('next' === a.method) a.sent = a._sent = a.arg;
                else if ('throw' === a.method) {
                  if (o === u) throw ((o = v), a.arg);
                  a.dispatchException(a.arg);
                } else 'return' === a.method && a.abrupt('return', a.arg);
                o = p;
                i = d(n, l, a);
                if ('normal' === i.type) {
                  if (((o = a.done ? v : m), i.arg === g)) continue;
                  return { value: i.arg, done: a.done };
                }
                'throw' === i.type &&
                  ((o = v), (a.method = 'throw'), (a.arg = i.arg));
              }
            }),
        }),
        t
      );
    }
    function d(e, t, i) {
      try {
        return { type: 'normal', arg: e.call(t, i) };
      } catch (e) {
        return { type: 'throw', arg: e };
      }
    }
    a.wrap = o;
    var u = 'suspendedStart',
      m = 'suspendedYield',
      p = 'executing',
      v = 'completed',
      g = {};
    function b() {}
    function f() {}
    function y() {}
    var t = {},
      L =
        (l(t, s, function () {
          return this;
        }),
        Object.getPrototypeOf),
      L = L && L(L(x([]))),
      E =
        (L && L !== e && h.call(L, s) && (t = L),
        (y.prototype = b.prototype = Object.create(t)));
    function C(e) {
      ['next', 'throw', 'return'].forEach(function (t) {
        l(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function w(a, o) {
      var t;
      c(this, '_invoke', {
        value: function (i, s) {
          function e() {
            return new o(function (e, t) {
              !(function t(e, i, s, n) {
                var l,
                  e = d(a[e], a, i);
                if ('throw' !== e.type)
                  return (i = (l = e.arg).value) &&
                    'object' == typeof i &&
                    h.call(i, '__await')
                    ? o.resolve(i.__await).then(
                        function (e) {
                          t('next', e, s, n);
                        },
                        function (e) {
                          t('throw', e, s, n);
                        }
                      )
                    : o.resolve(i).then(
                        function (e) {
                          (l.value = e), s(l);
                        },
                        function (e) {
                          return t('throw', e, s, n);
                        }
                      );
                n(e.arg);
              })(i, s, e, t);
            });
          }
          return (t = t ? t.then(e, e) : e());
        },
      });
    }
    function k(e) {
      var t = { tryLoc: e[0] };
      1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t);
    }
    function S(e) {
      var t = e.completion || {};
      (t.type = 'normal'), delete t.arg, (e.completion = t);
    }
    function A(e) {
      (this.tryEntries = [{ tryLoc: 'root' }]),
        e.forEach(k, this),
        this.reset(!0);
    }
    function x(t) {
      if (t || '' === t) {
        var i,
          e = t[s];
        if (e) return e.call(t);
        if ('function' == typeof t.next) return t;
        if (!isNaN(t.length))
          return (
            (i = -1),
            ((e = function e() {
              for (; ++i < t.length; )
                if (h.call(t, i)) return (e.value = t[i]), (e.done = !1), e;
              return (e.value = r), (e.done = !0), e;
            }).next = e)
          );
      }
      throw new TypeError(typeof t + ' is not iterable');
    }
    return (
      c(E, 'constructor', { value: (f.prototype = y), configurable: !0 }),
      c(y, 'constructor', { value: f, configurable: !0 }),
      (f.displayName = l(y, n, 'GeneratorFunction')),
      (a.isGeneratorFunction = function (e) {
        e = 'function' == typeof e && e.constructor;
        return (
          !!e && (e === f || 'GeneratorFunction' === (e.displayName || e.name))
        );
      }),
      (a.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, y)
            : ((e.__proto__ = y), l(e, n, 'GeneratorFunction')),
          (e.prototype = Object.create(E)),
          e
        );
      }),
      (a.awrap = function (e) {
        return { __await: e };
      }),
      C(w.prototype),
      l(w.prototype, i, function () {
        return this;
      }),
      (a.AsyncIterator = w),
      (a.async = function (e, t, i, s, n) {
        void 0 === n && (n = Promise);
        var l = new w(o(e, t, i, s), n);
        return a.isGeneratorFunction(t)
          ? l
          : l.next().then(function (e) {
              return e.done ? e.value : l.next();
            });
      }),
      C(E),
      l(E, n, 'Generator'),
      l(E, s, function () {
        return this;
      }),
      l(E, 'toString', function () {
        return '[object Generator]';
      }),
      (a.keys = function (e) {
        var t,
          i = Object(e),
          s = [];
        for (t in i) s.push(t);
        return (
          s.reverse(),
          function e() {
            for (; s.length; ) {
              var t = s.pop();
              if (t in i) return (e.value = t), (e.done = !1), e;
            }
            return (e.done = !0), e;
          }
        );
      }),
      (a.values = x),
      (A.prototype = {
        constructor: A,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = r),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = r),
            this.tryEntries.forEach(S),
            !e)
          )
            for (var t in this)
              't' === t.charAt(0) &&
                h.call(this, t) &&
                !isNaN(+t.slice(1)) &&
                (this[t] = r);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ('throw' === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (i) {
          if (this.done) throw i;
          var s = this;
          function e(e, t) {
            return (
              (l.type = 'throw'),
              (l.arg = i),
              (s.next = e),
              t && ((s.method = 'next'), (s.arg = r)),
              !!t
            );
          }
          for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
            var n = this.tryEntries[t],
              l = n.completion;
            if ('root' === n.tryLoc) return e('end');
            if (n.tryLoc <= this.prev) {
              var a = h.call(n, 'catchLoc'),
                o = h.call(n, 'finallyLoc');
              if (a && o) {
                if (this.prev < n.catchLoc) return e(n.catchLoc, !0);
                if (this.prev < n.finallyLoc) return e(n.finallyLoc);
              } else if (a) {
                if (this.prev < n.catchLoc) return e(n.catchLoc, !0);
              } else {
                if (!o) throw Error('try statement without catch or finally');
                if (this.prev < n.finallyLoc) return e(n.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
            var s = this.tryEntries[i];
            if (
              s.tryLoc <= this.prev &&
              h.call(s, 'finallyLoc') &&
              this.prev < s.finallyLoc
            ) {
              var n = s;
              break;
            }
          }
          var l = (n =
            n &&
            ('break' === e || 'continue' === e) &&
            n.tryLoc <= t &&
            t <= n.finallyLoc
              ? null
              : n)
            ? n.completion
            : {};
          return (
            (l.type = e),
            (l.arg = t),
            n
              ? ((this.method = 'next'), (this.next = n.finallyLoc), g)
              : this.complete(l)
          );
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg;
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = 'return'),
                  (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
            g
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
            var i = this.tryEntries[t];
            if (i.finallyLoc === e)
              return this.complete(i.completion, i.afterLoc), S(i), g;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
            var i,
              s,
              n = this.tryEntries[t];
            if (n.tryLoc === e)
              return (
                'throw' === (i = n.completion).type && ((s = i.arg), S(n)), s
              );
          }
          throw Error('illegal catch attempt');
        },
        delegateYield: function (e, t, i) {
          return (
            (this.delegate = { iterator: x(e), resultName: t, nextLoc: i }),
            'next' === this.method && (this.arg = r),
            g
          );
        },
      }),
      a
    );
  }
  function p(e, t) {
    return void 0 === t && (t = document), [].slice.call(t.querySelectorAll(e));
  }
  function v(e, t) {
    return (t = void 0 === t ? document : t).querySelector(e);
  }
  var H = ['root'];
  class S {
    constructor() {
      this.events = new Map();
    }
    on(e, t) {
      this.events.has(e) || this.events.set(e, []), this.events.get(e).push(t);
    }
    trigger(e, t) {
      e = this.events.get(e);
      e &&
        e.forEach((e) => {
          e(t);
        });
    }
    getCallback(e) {
      return this.events.get(e) || [];
    }
  }
  class s {
    static autoInit(e, t) {
      (t = (void 0 === t ? {} : t).DATEPICKER),
        (t = void 0 === t ? {} : t),
        (t = new s(e, t));
      return t.init(), (e.ECLDatepicker = t);
    }
    constructor(e, t) {
      var t = void 0 === t ? {} : t,
        i = t.format,
        i = void 0 === i ? '' : i,
        s = t.theme,
        s = void 0 === s ? 'ecl-datepicker-theme' : s,
        n = t.yearRange,
        n = void 0 === n ? 40 : n,
        l = t.reposition,
        l = void 0 !== l && l,
        a = t.attachResizeListener,
        a = void 0 === a || a,
        o = t.i18n,
        o =
          void 0 === o
            ? {
                previousMonth: 'Previous Month',
                nextMonth: 'Next Month',
                months: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ],
                weekdays: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
                weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
              }
            : o,
        r = t.showDaysInNextAndPreviousMonths,
        r = void 0 === r || r,
        t = t.enableSelectionDaysInNextAndPreviousMonths,
        t = void 0 === t || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE)
        throw new TypeError(
          'DOM element should be given to initialize this widget.'
        );
      (this.element = e),
        (this.picker = null),
        (this.resizeTimer = null),
        (this.pikadayEl = null),
        (this.format = i),
        (this.theme = s),
        (this.yearRange = n),
        (this.i18n = o),
        (this.showDaysInNextAndPreviousMonths = r),
        (this.enableSelectionDaysInNextAndPreviousMonths = t),
        (this.reposition = l),
        (this.direction = 'ltr'),
        (this.attachResizeListener = a),
        (this.handleResize = this.handleResize.bind(this));
    }
    init() {
      if (void 0 === window.Pikaday)
        throw new TypeError(
          'Pikaday is not available. Make sure to include Pikaday in your project if you want to use the ECL datepicker'
        );
      if (!ECL) throw new TypeError('Called init but ECL is not present');
      (ECL.components = ECL.components || new Map()),
        (this.direction = getComputedStyle(this.element).direction),
        this.attachResizeListener &&
          window.addEventListener('resize', this.handleResize),
        (s.resizeLogic = (e) => {
          this.pikadayEl = e;
          var t = Math.max(
              document.documentElement.clientWidth || 0,
              window.innerWidth || 0
            ),
            i = getComputedStyle(e).direction,
            s = e.getBoundingClientRect();
          'rtl' === i
            ? ((i = t - s.right), (e.style.left = t < 768 ? i + 'px' : 'auto'))
            : ((i = s.left), (e.style.right = t < 768 ? i + 'px' : 'auto'));
        });
      var l = {
        field: this.element,
        yearRange: this.yearRange,
        firstDay: 1,
        i18n: this.i18n,
        theme: this.theme,
        reposition: this.reposition,
        isRTL: 'rtl' === this.direction,
        position: 'rtl' === this.direction ? 'bottom right' : 'bottom left',
        showDaysInNextAndPreviousMonths: this.showDaysInNextAndPreviousMonths,
        enableSelectionDaysInNextAndPreviousMonths:
          this.enableSelectionDaysInNextAndPreviousMonths,
      };
      return (
        '' !== this.format
          ? (l.format = this.format)
          : (l.toString = (e) =>
              ('0' + e.getDate()).slice(-2) +
              '-' +
              ('0' + (e.getMonth() + 1)).slice(-2) +
              '-' +
              e.getFullYear()),
        (this.picker = new Pikaday(
          i({}, l, {
            parse(e, t) {
              var i, s;
              if (!l.format)
                return (
                  (s = (i = e.split('-').map(Number))[0]),
                  (n = i[2]),
                  new Date(n < 100 ? 2e3 + n : n, i[1] - 1, s)
                );
              if ('undefined' != typeof moment && '' !== e) {
                var n = moment(e, t, !1);
                if (n.isValid()) return n.toDate();
              }
              return e;
            },
            onOpen() {
              s.resizeLogic(this.el);
            },
          })
        )),
        this.element.setAttribute('data-ecl-auto-initialized', 'true'),
        ECL.components.set(this.element, this),
        this.picker
      );
    }
    destroy() {
      this.picker && (this.picker.destroy(), (this.picker = null)),
        this.attachResizeListener &&
          window.removeEventListener('resize', this.handleResize),
        this.element &&
          (this.element.removeAttribute('data-ecl-auto-initialized'),
          ECL.components.delete(this.element));
    }
    handleResize() {
      clearTimeout(this.resizeTimer),
        (this.resizeTimer = setTimeout(() => {
          this.pikadayEl && s.resizeLogic(this.pikadayEl);
        }, 150));
    }
  }
  class K {
    static autoInit(e, t) {
      (t = (void 0 === t ? {} : t).BREADCRUMB),
        (t = void 0 === t ? {} : t),
        (t = new K(e, t));
      return t.init(), (e.ECLBreadcrumb = t);
    }
    constructor(e, t) {
      var t = void 0 === t ? {} : t,
        i = t.ellipsisButtonSelector,
        i = void 0 === i ? '[data-ecl-breadcrumb-ellipsis-button]' : i,
        s = t.ellipsisSelector,
        s = void 0 === s ? '[data-ecl-breadcrumb-ellipsis]' : s,
        n = t.segmentSelector,
        n = void 0 === n ? '[data-ecl-breadcrumb-item]' : n,
        l = t.expandableItemsSelector,
        l = void 0 === l ? '[data-ecl-breadcrumb-item="expandable"]' : l,
        a = t.staticItemsSelector,
        a = void 0 === a ? '[data-ecl-breadcrumb-item="static"]' : a,
        o = t.onPartialExpand,
        o = void 0 === o ? null : o,
        r = t.onFullExpand,
        r = void 0 === r ? null : r,
        h = t.attachClickListener,
        h = void 0 === h || h,
        t = t.attachResizeListener,
        t = void 0 === t || t;
      if (!e || e.nodeType !== Node.ELEMENT_NODE)
        throw new TypeError(
          'DOM element should be given to initialize this widget.'
        );
      (this.element = e),
        (this.ellipsisButtonSelector = i),
        (this.ellipsisSelector = s),
        (this.segmentSelector = n),
        (this.expandableItemsSelector = l),
        (this.staticItemsSelector = a),
        (this.onPartialExpand = o),
        (this.onFullExpand = r),
        (this.attachClickListener = h),
        (this.attachResizeListener = t),
        (this.ellipsisButton = null),
        (this.itemsElements = null),
        (this.staticElements = null),
        (this.expandableElements = null),
        (this.resizeTimer = null),
        (this.handleClickOnEllipsis = this.handleClickOnEllipsis.bind(this)),
        (this.handleResize = this.handleResize.bind(this));
    }
    init() {
      if (!ECL) throw new TypeError('Called init but ECL is not present');
      (ECL.components = ECL.components || new Map()),
        (this.ellipsisButton = v(this.ellipsisButtonSelector, this.element)),
        this.attachClickListener &&
          this.ellipsisButton &&
          this.ellipsisButton.addEventListener(
            'click',
            this.handleClickOnEllipsis
          ),
        (this.itemsElements = p(this.segmentSelector, this.element)),
        (this.staticElements = p(this.staticItemsSelector, this.element)),
        (this.expandableElements = p(
          this.expandableItemsSelector,
          this.element
        )),
        this.check(),
        this.attachResizeListener &&
          window.addEventListener('resize', this.handleResize),
        this.element.setAttribute('data-ecl-auto-initialized', 'true'),
        ECL.components.set(this.element, this);
    }
    destroy() {
      this.attachClickListener &&
        this.ellipsisButton &&
        this.ellipsisButton.removeEventListener(
          'click',
          this.handleClickOnEllipsis
        ),
        this.attachResizeListener &&
          window.removeEventListener('resize', this.handleResize),
        this.element &&
          (this.element.removeAttribute('data-ecl-auto-initialized'),
          this.element.classList.remove('ecl-breadcrumb--wrap'),
          ECL.components.delete(this.element));
    }
    handleClickOnEllipsis() {
      return this.handleFullExpand();
    }
    check() {
      var o,
        i = this;
      return (
        (o = _().mark(function e() {
          var t;
          return _().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), i.computeVisibilityMap();
                case 2:
                  if ((t = e.sent)) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt('return');
                case 5:
                  !0 === t.expanded
                    ? i.handleFullExpand()
                    : i.handlePartialExpand(t);
                case 6:
                case 'end':
                  return e.stop();
              }
          }, e);
        })),
        (function () {
          var e = this,
            a = arguments;
          return new Promise(function (t, i) {
            var s = o.apply(e, a);
            function n(e) {
              B(s, t, i, n, l, 'next', e);
            }
            function l(e) {
              B(s, t, i, n, l, 'throw', e);
            }
            n(void 0);
          });
        })()
      );
    }
    hideEllipsis() {
      var e = v(this.ellipsisSelector, this.element);
      e && e.setAttribute('aria-hidden', 'true');
    }
    showAllItems() {
      this.expandableElements.forEach((e) =>
        e.setAttribute('aria-hidden', 'false')
      );
    }
    handlePartialExpand(e) {
      var i;
      e &&
        (this.element.classList.add('ecl-breadcrumb--collapsed'),
        (i = e.isItemVisible)) &&
        Array.isArray(i) &&
        (this.onPartialExpand
          ? this.onPartialExpand(i)
          : 767 < Math.floor(this.element.getBoundingClientRect().width)
            ? ((e = v(this.ellipsisSelector, this.element)) &&
                e.setAttribute('aria-hidden', 'false'),
              this.expandableElements.forEach((e, t) => {
                e.setAttribute('aria-hidden', i[t] ? 'false' : 'true');
              }))
            : this.expandableElements.forEach((e) => {
                e.setAttribute('aria-hidden', 'true');
              }));
    }
    handleFullExpand() {
      this.element.classList.remove('ecl-breadcrumb--collapsed'),
        this.element.classList.add('ecl-breadcrumb--wrap'),
        this.onFullExpand
          ? this.onFullExpand()
          : (this.hideEllipsis(), this.showAllItems());
    }
    handleResize() {
      clearTimeout(this.resizeTimer),
        (this.resizeTimer = setTimeout(() => {
          this.check();
        }, 200));
    }
    computeVisibilityMap() {
      return new Promise((n) => {
        var l;
        this.expandableElements && 0 !== this.expandableElements.length
          ? ((l = Math.floor(this.element.getBoundingClientRect().width)),
            setTimeout(() => {
              var t, i, s, e;
              1.1 *
                this.itemsElements
                  .map((e) => {
                    var t = e.getBoundingClientRect().width;
                    return (
                      0 === t &&
                        ((e.style.display = 'inline-flex'),
                        (t = e.getBoundingClientRect().width),
                        (e.style.cssText = '')),
                      t
                    );
                  })
                  .reduce((e, t) => e + t) <=
              l
                ? n({ expanded: !0 })
                : ((t =
                    v(
                      this.ellipsisSelector,
                      this.element
                    ).getBoundingClientRect().width +
                    this.staticElements.reduce(
                      (e, t) => e + t.getBoundingClientRect().width,
                      0
                    )),
                  l <= t
                    ? n({
                        expanded: !1,
                        isItemVisible: [
                          ...this.expandableElements.map(() => !1),
                        ],
                      })
                    : ((s = !(i = 0)),
                      (e = [...this.expandableElements]
                        .reverse()
                        .map(
                          (e) =>
                            !!s &&
                            ((e =
                              (i += e.getBoundingClientRect().width) + t <=
                              l) || (s = !1),
                            e)
                        )
                        .reverse()),
                      n({ expanded: !1, isItemVisible: e })));
            }, 150))
          : n({ expanded: !0 });
      });
    }
  }
  class V {
    static autoInit(e, t) {
      (t = (void 0 === t ? {} : t).FILE_UPLOAD),
        (t = void 0 === t ? {} : t),
        (t = new V(e, t));
      return t.init(), (e.ECLFileUpload = t);
    }
    constructor(e, t) {
      var t = void 0 === t ? {} : t,
        i = t.groupSelector,
        i = void 0 === i ? '[data-ecl-file-upload-group]' : i,
        s = t.buttonSelector,
        s = void 0 === s ? '[data-ecl-file-upload-button]' : s,
        n = t.listSelector,
        n = void 0 === n ? '[data-ecl-file-upload-list]' : n,
        l = t.labelChoose,
        l = void 0 === l ? 'data-ecl-file-upload-label-choose' : l,
        a = t.labelReplace,
        a = void 0 === a ? 'data-ecl-file-upload-label-replace' : a,
        t = t.attachChangeListener,
        t = void 0 === t || t;
      if (
        ((this.supportedEvents = ['onSelection']),
        !e || e.nodeType !== Node.ELEMENT_NODE)
      )
        throw new TypeError(
          'DOM element should be given to initialize this widget.'
        );
      (this.element = e),
        (this.eventManager = new S()),
        (this.groupSelector = i),
        (this.buttonSelector = s),
        (this.listSelector = n),
        (this.labelChoose = l),
        (this.labelReplace = a),
        (this.attachChangeListener = t),
        (this.fileUploadGroup = null),
        (this.fileUploadInput = null),
        (this.fileUploadButton = null),
        (this.fileUploadList = null),
        (this.handleChange = this.handleChange.bind(this));
    }
    init() {
      if (!ECL) throw new TypeError('Called init but ECL is not present');
      (ECL.components = ECL.components || new Map()),
        (this.fileUploadGroup = this.element.closest(this.groupSelector)),
        (this.fileUploadInput = this.element),
        (this.fileUploadButton = v(this.buttonSelector, this.fileUploadGroup)),
        (this.fileUploadList = v(this.listSelector, this.fileUploadGroup)),
        this.attachChangeListener &&
          this.fileUploadInput &&
          this.fileUploadInput.addEventListener('change', this.handleChange),
        this.element.setAttribute('data-ecl-auto-initialized', 'true'),
        ECL.components.set(this.element, this);
    }
    on(e, t) {
      this.eventManager.on(e, t);
    }
    trigger(e, t) {
      this.eventManager.trigger(e, t);
    }
    destroy() {
      this.attachChangeListener &&
        this.fileUploadInput &&
        this.fileUploadInput.removeEventListener('change', this.handleChange),
        this.element &&
          (this.element.removeAttribute('data-ecl-auto-initialized'),
          ECL.components.delete(this.element));
    }
    handleChange(e) {
      var n;
      'files' in e.target
        ? ((n = ''),
          Array.prototype.forEach.call(e.target.files, (e) => {
            (i = e.size), (s = 1);
            var t,
              i =
                0 === i
                  ? '0 Bytes'
                  : ((s = s),
                    (t = Math.floor(Math.log(i) / Math.log(1024))),
                    parseFloat((i / Math.pow(1024, t)).toFixed(s)) +
                      ' ' +
                      ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][
                        t
                      ]),
              s = e.name.split('.').pop();
            n +=
              '<li class="ecl-file-upload__item">\n      <span class="ecl-file-upload__item-name">' +
              e.name +
              '</span>\n      <span class="ecl-file-upload__item-meta">(' +
              i +
              ' - ' +
              s +
              ')</span>\n      </li>';
          }),
          (this.fileUploadList.innerHTML = n),
          this.fileUploadButton.hasAttribute(this.labelReplace) &&
            (this.fileUploadButton.innerHTML =
              this.fileUploadButton.getAttribute(this.labelReplace)),
          (e = { files: e.target.files, event: e }),
          this.trigger('onSelection', e))
        : this.fileUploadButton.hasAttribute(this.labelChoose) &&
          (this.fileUploadButton.innerHTML = this.fileUploadButton.getAttribute(
            this.labelChoose
          ));
    }
  }
  function A(e, t) {
    if (((t = t || {}), e)) return !1 !== c.call(e, h) && P(t, e);
    throw new Error('No node provided');
  }
  function x(e, t) {
    if (((t = t || {}), e)) return !1 !== c.call(e, re) && T(t, e);
    throw new Error('No node provided');
  }
  var n = [
      'input:not([inert])',
      'select:not([inert])',
      'textarea:not([inert])',
      'a[href]:not([inert])',
      'button:not([inert])',
      '[tabindex]:not(slot):not([inert])',
      'audio[controls]:not([inert])',
      'video[controls]:not([inert])',
      '[contenteditable]:not([contenteditable="false"]):not([inert])',
      'details>summary:first-of-type:not([inert])',
      'details:not([inert])',
    ],
    h = n.join(','),
    c = (Ce = 'undefined' == typeof Element)
      ? function () {}
      : Element.prototype.matches ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector,
    a =
      !Ce && Element.prototype.getRootNode
        ? function (e) {
            var t;
            return null == e || null == (t = e.getRootNode)
              ? void 0
              : t.call(e);
          }
        : function (e) {
            return null == e ? void 0 : e.ownerDocument;
          },
    u = function e(t, i) {
      void 0 === i && (i = !0);
      var s =
        null == t || null == (s = t.getAttribute) ? void 0 : s.call(t, 'inert');
      return '' === s || 'true' === s || (i && t && e(t.parentNode));
    },
    G = function (e) {
      var t =
        null == e || null == (t = e.getAttribute)
          ? void 0
          : t.call(e, 'contenteditable');
      return '' === t || 'true' === t;
    },
    W = function (e, t, i) {
      var s;
      return u(e)
        ? []
        : ((s = Array.prototype.slice.apply(e.querySelectorAll(h))),
          t && c.call(e, h) && s.unshift(e),
          s.filter(i));
    },
    U = function e(t, i, s) {
      for (var n = [], l = Array.from(t); l.length; ) {
        var a,
          o,
          r = l.shift();
        u(r, !1) ||
          ('SLOT' === r.tagName
            ? ((a = e(
                (a = r.assignedElements()).length ? a : r.children,
                !0,
                s
              )),
              s.flatten
                ? n.push.apply(n, a)
                : n.push({ scopeParent: r, candidates: a }))
            : (c.call(r, h) &&
                s.filter(r) &&
                (i || !t.includes(r)) &&
                n.push(r),
              (a =
                r.shadowRoot ||
                ('function' == typeof s.getShadowRoot && s.getShadowRoot(r))),
              (o = !u(a, !1) && (!s.shadowRootFilter || s.shadowRootFilter(r))),
              a && o
                ? ((o = e((!0 === a ? r : a).children, !0, s)),
                  s.flatten
                    ? n.push.apply(n, o)
                    : n.push({ scopeParent: r, candidates: o }))
                : l.unshift.apply(l, r.children)));
      }
      return n;
    },
    j = function (e) {
      return !isNaN(parseInt(e.getAttribute('tabindex'), 10));
    },
    O = function (e) {
      if (e)
        return e.tabIndex < 0 &&
          (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || G(e)) &&
          !j(e)
          ? 0
          : e.tabIndex;
      throw new Error('No node provided');
    },
    q = function (e, t) {
      var i = O(e);
      return i < 0 && t && !j(e) ? 0 : i;
    },
    Y = function (e, t) {
      return e.tabIndex === t.tabIndex
        ? e.documentOrder - t.documentOrder
        : e.tabIndex - t.tabIndex;
    },
    X = function (e) {
      return 'INPUT' === e.tagName;
    },
    $ = function (e) {
      return X(e) && 'hidden' === e.type;
    },
    Q = function (e) {
      return (
        'DETAILS' === e.tagName &&
        Array.prototype.slice.apply(e.children).some(function (e) {
          return 'SUMMARY' === e.tagName;
        })
      );
    },
    Z = function (e, t) {
      for (var i = 0; i < e.length; i++)
        if (e[i].checked && e[i].form === t) return e[i];
    },
    J = function (e) {
      if (!e.name) return !0;
      function t(e) {
        return i.querySelectorAll('input[type="radio"][name="' + e + '"]');
      }
      var i = e.form || a(e);
      if (
        'undefined' != typeof window &&
        void 0 !== window.CSS &&
        'function' == typeof window.CSS.escape
      )
        s = t(window.CSS.escape(e.name));
      else
        try {
          s = t(e.name);
        } catch (e) {
          return (
            console.error(
              'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
              e.message
            ),
            !1
          );
        }
      var s = Z(s, e.form);
      return !s || s === e;
    },
    ee = function (e) {
      return X(e) && 'radio' === e.type;
    },
    te = function (e) {
      return ee(e) && !J(e);
    },
    ie = function (e) {
      var t,
        i = e && a(e),
        s = null == (t = i) ? void 0 : t.host,
        n = !1;
      if (i && i !== e)
        for (
          n = !!(
            (null != (t = s) &&
              null != (t = t.ownerDocument) &&
              t.contains(s)) ||
            (null != e && null != (t = e.ownerDocument) && t.contains(e))
          );
          !n && s;

        )
          var l,
            n = !(
              null == (l = s = null == (l = i = a(s)) ? void 0 : l.host) ||
              null == (l = l.ownerDocument) ||
              !l.contains(s)
            );
      return n;
    },
    se = function (e) {
      e = e.getBoundingClientRect();
      return 0 === e.width && 0 === e.height;
    },
    ne = function (e, t) {
      var i = t.displayCheck,
        s = t.getShadowRoot;
      if ('hidden' === getComputedStyle(e).visibility) return !0;
      t = c.call(e, 'details>summary:first-of-type') ? e.parentElement : e;
      if (c.call(t, 'details:not([open]) *')) return !0;
      if (i && 'full' !== i && 'legacy-full' !== i) {
        if ('non-zero-area' === i) return se(e);
      } else {
        if ('function' == typeof s) {
          for (t = e; e; ) {
            var n = e.parentElement,
              l = a(e);
            if (n && !n.shadowRoot && !0 === s(n)) return se(e);
            e = e.assignedSlot || (n || l === e.ownerDocument ? n : l.host);
          }
          e = t;
        }
        if (ie(e)) return !e.getClientRects().length;
        if ('legacy-full' !== i) return !0;
      }
      return !1;
    },
    le = function (e) {
      if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
        for (var t = e.parentElement; t; ) {
          if ('FIELDSET' === t.tagName && t.disabled) {
            for (var i = 0; i < t.children.length; i++) {
              var s = t.children.item(i);
              if ('LEGEND' === s.tagName)
                return !!c.call(t, 'fieldset[disabled] *') || !s.contains(e);
            }
            return !0;
          }
          t = t.parentElement;
        }
      return !1;
    },
    T = function (e, t) {
      return !(t.disabled || u(t) || $(t) || ne(t, e) || Q(t) || le(t));
    },
    P = function (e, t) {
      return !(te(t) || O(t) < 0 || !T(e, t));
    },
    ae = function (e) {
      e = parseInt(e.getAttribute('tabindex'), 10);
      return !!(isNaN(e) || 0 <= e);
    },
    oe = function a(e) {
      var o = [],
        r = [];
      return (
        e.forEach(function (e, t) {
          var i = !!e.scopeParent,
            s = i ? e.scopeParent : e,
            n = q(s, i),
            l = i ? a(e.candidates) : s;
          0 === n
            ? i
              ? o.push.apply(o, l)
              : o.push(s)
            : r.push({
                documentOrder: t,
                tabIndex: n,
                item: e,
                isScope: i,
                content: l,
              });
        }),
        r
          .sort(Y)
          .reduce(function (e, t) {
            return (
              t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
            );
          }, [])
          .concat(o)
      );
    },
    re = n.concat('iframe').join(',');
  function l(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, s = Array(t); i < t; i++) s[i] = e[i];
    return s;
  }
  function he(e, t, i) {
    (t = ((e) =>
      'symbol' ==
      typeof (e = ((e, t) => {
        if ('object' != typeof e || !e) return e;
        var i = e[Symbol.toPrimitive];
        if (void 0 === i) return ('string' === t ? String : Number)(e);
        if ('object' != typeof (i = i.call(e, t || 'default'))) return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      })(e, 'string'))
        ? e
        : e + '')(t)) in e
      ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = i);
  }
  function ce(t, e) {
    var i,
      s = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((i = Object.getOwnPropertySymbols(t)),
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        s.push.apply(s, i)),
      s
    );
  }
  function de(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? ce(Object(i), !0).forEach(function (e) {
            he(t, e, i[e]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : ce(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
    }
    return t;
  }
  function ue(e) {
    return (
      ((e) => {
        if (Array.isArray(e)) return l(e);
      })(e) ||
      ((e) => {
        if (
          ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      })(e) ||
      ((e, t) => {
        var i;
        if (e)
          return 'string' == typeof e
            ? l(e, t)
            : 'Map' ===
                  (i =
                    'Object' === (i = {}.toString.call(e).slice(8, -1)) &&
                    e.constructor
                      ? e.constructor.name
                      : i) || 'Set' === i
              ? Array.from(e)
              : 'Arguments' === i ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                ? l(e, t)
                : void 0;
      })(e) ||
      (() => {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function me(e) {
    return M(e) && !e.shiftKey;
  }
  function pe(e) {
    return M(e) && e.shiftKey;
  }
  function ve(e) {
    return setTimeout(e, 0);
  }
  function I(e) {
    for (
      var t = arguments.length, i = new Array(1 < t ? t - 1 : 0), s = 1;
      s < t;
      s++
    )
      i[s - 1] = arguments[s];
    return 'function' == typeof e ? e.apply(void 0, i) : e;
  }
  function N(e) {
    return e.target.shadowRoot && 'function' == typeof e.composedPath
      ? e.composedPath()[0]
      : e.target;
  }
  function o(e, t) {
    function l(e, t, i) {
      return e && void 0 !== e[t] ? e[t] : d[i || t];
    }
    function a(e) {
      var t = p('setReturnFocus', { params: [e] });
      return t || (!1 !== t && e);
    }
    function n() {
      if (u.active)
        ge(c, S),
          (u.delayInitialFocusTimer = d.delayInitialFocus
            ? ve(function () {
                b(v());
              })
            : b(v())),
          h.addEventListener('focusin', y, !0),
          h.addEventListener('mousedown', s, { capture: !0, passive: !1 }),
          h.addEventListener('touchstart', s, { capture: !0, passive: !1 }),
          h.addEventListener('click', w, { capture: !0, passive: !1 }),
          h.addEventListener('keydown', E, { capture: !0, passive: !1 }),
          h.addEventListener('keydown', C);
    }
    function o() {
      if (u.active)
        h.removeEventListener('focusin', y, !0),
          h.removeEventListener('mousedown', s, !0),
          h.removeEventListener('touchstart', s, !0),
          h.removeEventListener('click', w, !0),
          h.removeEventListener('keydown', E, !0),
          h.removeEventListener('keydown', C);
    }
    function r() {
      k &&
        (k.disconnect(), u.active) &&
        !u.paused &&
        u.containers.map(function (e) {
          k.observe(e, { subtree: !0, childList: !0 });
        });
    }
    var h = (null == t ? void 0 : t.document) || document,
      c = (null == t ? void 0 : t.trapStack) || fe,
      d = de(
        {
          returnFocusOnDeactivate: !0,
          escapeDeactivates: !0,
          delayInitialFocus: !0,
          isKeyForward: me,
          isKeyBackward: pe,
        },
        t
      ),
      u = {
        containers: [],
        containerGroups: [],
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1,
        delayInitialFocusTimer: void 0,
        recentNavEvent: void 0,
      },
      m = function (i, e) {
        var s =
          'function' == typeof (null == e ? void 0 : e.composedPath)
            ? e.composedPath()
            : void 0;
        return u.containerGroups.findIndex(function (e) {
          var t = e.container,
            e = e.tabbableNodes;
          return (
            t.contains(i) ||
            (null == s ? void 0 : s.includes(t)) ||
            e.find(function (e) {
              return e === i;
            })
          );
        });
      },
      p = function (t) {
        var e =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          i = e.hasFallback,
          i = void 0 !== i && i,
          e = e.params,
          s = d[t];
        if (
          !(s =
            !0 ===
            (s =
              'function' == typeof s
                ? s.apply(void 0, ue(void 0 === e ? [] : e))
                : s)
              ? void 0
              : s)
        ) {
          if (void 0 === s || !1 === s) return s;
          throw new Error(
            '`'.concat(
              t,
              '` was specified but was not a node, or did not return a node'
            )
          );
        }
        e = s;
        if ('string' == typeof s) {
          try {
            e = h.querySelector(s);
          } catch (e) {
            throw new Error(
              '`'
                .concat(t, '` appears to be an invalid selector; error="')
                .concat(e.message, '"')
            );
          }
          if (!e && !i)
            throw new Error(
              '`'.concat(t, '` as selector refers to no known node')
            );
        }
        return e;
      },
      v = function () {
        var e,
          t = p('initialFocus', { hasFallback: !0 });
        if (!1 === t) return !1;
        if (
          (void 0 === t || (t && !x(t, d.tabbableOptions))
            ? (t =
                0 <= m(h.activeElement)
                  ? h.activeElement
                  : ((e = u.tabbableGroups[0]) && e.firstTabbableNode) ||
                    p('fallbackFocus'))
            : null === t && (t = p('fallbackFocus')),
          t)
        )
          return t;
        throw new Error(
          'Your focus-trap needs to have at least one focusable element'
        );
      },
      g = function () {
        if (
          ((u.containerGroups = u.containers.map(function (e) {
            var s = ((e, t) => (
                (e = (t = t || {}).getShadowRoot
                  ? U([e], t.includeContainer, {
                      filter: P.bind(null, t),
                      flatten: !1,
                      getShadowRoot: t.getShadowRoot,
                      shadowRootFilter: ae,
                    })
                  : W(e, t.includeContainer, P.bind(null, t))),
                oe(e)
              ))(e, d.tabbableOptions),
              n =
                ((t = e),
                (i = (i = d.tabbableOptions) || {}).getShadowRoot
                  ? U([t], i.includeContainer, {
                      filter: T.bind(null, i),
                      flatten: !0,
                      getShadowRoot: i.getShadowRoot,
                    })
                  : W(t, i.includeContainer, T.bind(null, i))),
              t = 0 < s.length ? s[0] : void 0,
              i = 0 < s.length ? s[s.length - 1] : void 0,
              l = n.find(function (e) {
                return A(e);
              }),
              a = n
                .slice()
                .reverse()
                .find(function (e) {
                  return A(e);
                }),
              o = !!s.find(function (e) {
                return 0 < O(e);
              });
            return {
              container: e,
              tabbableNodes: s,
              focusableNodes: n,
              posTabIndexesFound: o,
              firstTabbableNode: t,
              lastTabbableNode: i,
              firstDomTabbableNode: l,
              lastDomTabbableNode: a,
              nextTabbableNode: function (e) {
                var t =
                    !(1 < arguments.length && void 0 !== arguments[1]) ||
                    arguments[1],
                  i = s.indexOf(e);
                return i < 0
                  ? t
                    ? n.slice(n.indexOf(e) + 1).find(function (e) {
                        return A(e);
                      })
                    : n
                        .slice(0, n.indexOf(e))
                        .reverse()
                        .find(function (e) {
                          return A(e);
                        })
                  : s[i + (t ? 1 : -1)];
              },
            };
          })),
          (u.tabbableGroups = u.containerGroups.filter(function (e) {
            return 0 < e.tabbableNodes.length;
          })),
          u.tabbableGroups.length <= 0 && !p('fallbackFocus'))
        )
          throw new Error(
            'Your focus-trap must have at least one container with at least one tabbable node in it at all times'
          );
        if (
          u.containerGroups.find(function (e) {
            return e.posTabIndexesFound;
          }) &&
          1 < u.containerGroups.length
        )
          throw new Error(
            "At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps."
          );
      },
      i = function (e) {
        e = e.activeElement;
        if (e)
          return e.shadowRoot && null !== e.shadowRoot.activeElement
            ? i(e.shadowRoot)
            : e;
      },
      b = function (e) {
        var t;
        !1 !== e &&
          e !== i(document) &&
          (e && e.focus
            ? (e.focus({ preventScroll: !!d.preventScroll }),
              (u.mostRecentlyFocusedNode = e),
              (t = e).tagName &&
                'input' === t.tagName.toLowerCase() &&
                'function' == typeof t.select &&
                e.select())
            : b(v()));
      },
      f = function (e) {
        var t,
          i,
          s = e.target,
          n = e.event,
          e = e.isBackward,
          e = void 0 !== e && e,
          s = s || N(n),
          l = (g(), null);
        return (
          0 < u.tabbableGroups.length
            ? ((t = 0 <= (i = m(s, n)) ? u.containerGroups[i] : void 0),
              i < 0
                ? (l = e
                    ? u.tabbableGroups[u.tabbableGroups.length - 1]
                        .lastTabbableNode
                    : u.tabbableGroups[0].firstTabbableNode)
                : e
                  ? 0 <=
                    (e =
                      (e = u.tabbableGroups.findIndex(function (e) {
                        e = e.firstTabbableNode;
                        return s === e;
                      })) < 0 &&
                      (t.container === s ||
                        (x(s, d.tabbableOptions) &&
                          !A(s, d.tabbableOptions) &&
                          !t.nextTabbableNode(s, !1)))
                        ? i
                        : e)
                    ? ((e = 0 === e ? u.tabbableGroups.length - 1 : e - 1),
                      (e = u.tabbableGroups[e]),
                      (l =
                        0 <= O(s) ? e.lastTabbableNode : e.lastDomTabbableNode))
                    : M(n) || (l = t.nextTabbableNode(s, !1))
                  : 0 <=
                      (e =
                        (e = u.tabbableGroups.findIndex(function (e) {
                          e = e.lastTabbableNode;
                          return s === e;
                        })) < 0 &&
                        (t.container === s ||
                          (x(s, d.tabbableOptions) &&
                            !A(s, d.tabbableOptions) &&
                            !t.nextTabbableNode(s)))
                          ? i
                          : e)
                    ? ((i = e === u.tabbableGroups.length - 1 ? 0 : e + 1),
                      (e = u.tabbableGroups[i]),
                      (l =
                        0 <= O(s)
                          ? e.firstTabbableNode
                          : e.firstDomTabbableNode))
                    : M(n) || (l = t.nextTabbableNode(s)))
            : (l = p('fallbackFocus')),
          l
        );
      },
      s = function (e) {
        var t = N(e);
        0 <= m(t, e) ||
          (I(d.clickOutsideDeactivates, e)
            ? S.deactivate({ returnFocus: d.returnFocusOnDeactivate })
            : I(d.allowOutsideClick, e) || e.preventDefault());
      },
      y = function (e) {
        var t,
          i = N(e),
          s = 0 <= m(i, e);
        s || i instanceof Document
          ? s && (u.mostRecentlyFocusedNode = i)
          : (e.stopImmediatePropagation(),
            (s = !0),
            u.mostRecentlyFocusedNode
              ? 0 < O(u.mostRecentlyFocusedNode)
                ? ((i = m(u.mostRecentlyFocusedNode)),
                  0 < (e = u.containerGroups[i].tabbableNodes).length &&
                    0 <=
                      (i = e.findIndex(function (e) {
                        return e === u.mostRecentlyFocusedNode;
                      })) &&
                    (d.isKeyForward(u.recentNavEvent)
                      ? i + 1 < e.length && ((t = e[i + 1]), (s = !1))
                      : 0 <= i - 1 && ((t = e[i - 1]), (s = !1))))
                : u.containerGroups.some(function (e) {
                    return e.tabbableNodes.some(function (e) {
                      return 0 < O(e);
                    });
                  }) || (s = !1)
              : (s = !1),
            s &&
              (t = f({
                target: u.mostRecentlyFocusedNode,
                isBackward: d.isKeyBackward(u.recentNavEvent),
              })),
            b(t || u.mostRecentlyFocusedNode || v())),
          (u.recentNavEvent = void 0);
      },
      L = function (e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          t = ((u.recentNavEvent = e), f({ event: e, isBackward: t }));
        t && (M(e) && e.preventDefault(), b(t));
      },
      E = function (e) {
        (d.isKeyForward(e) || d.isKeyBackward(e)) && L(e, d.isKeyBackward(e));
      },
      C = function (e) {
        var t;
        ('Escape' !== (null == (t = e) ? void 0 : t.key) &&
          'Esc' !== (null == t ? void 0 : t.key) &&
          27 !== (null == t ? void 0 : t.keyCode)) ||
          !1 === I(d.escapeDeactivates, e) ||
          (e.preventDefault(), S.deactivate());
      },
      w = function (e) {
        var t = N(e);
        0 <= m(t, e) ||
          I(d.clickOutsideDeactivates, e) ||
          I(d.allowOutsideClick, e) ||
          (e.preventDefault(), e.stopImmediatePropagation());
      },
      k =
        'undefined' != typeof window && 'MutationObserver' in window
          ? new MutationObserver(function (e) {
              e.some(function (e) {
                return Array.from(e.removedNodes).some(function (e) {
                  return e === u.mostRecentlyFocusedNode;
                });
              }) && b(v());
            })
          : void 0,
      S = {
        get active() {
          return u.active;
        },
        get paused() {
          return u.paused;
        },
        activate: function (e) {
          var t, i, s;
          return (
            u.active ||
              ((t = l(e, 'onActivate')),
              (i = l(e, 'onPostActivate')),
              (s = l(e, 'checkCanFocusTrap')) || g(),
              (u.active = !0),
              (u.paused = !1),
              (u.nodeFocusedBeforeActivation = h.activeElement),
              null != t && t(),
              (e = function () {
                s && g(), n(), r(), null != i && i();
              }),
              s ? s(u.containers.concat()).then(e, e) : e()),
            this
          );
        },
        deactivate: function (e) {
          var t, i, s, n;
          return (
            u.active &&
              ((e = de(
                {
                  onDeactivate: d.onDeactivate,
                  onPostDeactivate: d.onPostDeactivate,
                  checkCanReturnFocus: d.checkCanReturnFocus,
                },
                e
              )),
              clearTimeout(u.delayInitialFocusTimer),
              (u.delayInitialFocusTimer = void 0),
              o(),
              (u.active = !1),
              (u.paused = !1),
              r(),
              be(c, S),
              (t = l(e, 'onDeactivate')),
              (i = l(e, 'onPostDeactivate')),
              (s = l(e, 'checkCanReturnFocus')),
              (n = l(e, 'returnFocus', 'returnFocusOnDeactivate')),
              null != t && t(),
              (e = function () {
                ve(function () {
                  n && b(a(u.nodeFocusedBeforeActivation)), null != i && i();
                });
              }),
              n && s ? s(a(u.nodeFocusedBeforeActivation)).then(e, e) : e()),
            this
          );
        },
        pause: function (e) {
          var t;
          return (
            !u.paused &&
              u.active &&
              ((t = l(e, 'onPause')),
              (e = l(e, 'onPostPause')),
              (u.paused = !0),
              null != t && t(),
              o(),
              r(),
              null != e) &&
              e(),
            this
          );
        },
        unpause: function (e) {
          var t;
          return (
            u.paused &&
              u.active &&
              ((t = l(e, 'onUnpause')),
              (e = l(e, 'onPostUnpause')),
              (u.paused = !1),
              null != t && t(),
              g(),
              n(),
              r(),
              null != e) &&
              e(),
            this
          );
        },
        updateContainerElements: function (e) {
          e = [].concat(e).filter(Boolean);
          return (
            (u.containers = e.map(function (e) {
              return 'string' == typeof e ? h.querySelector(e) : e;
            })),
            u.active && g(),
            r(),
            this
          );
        },
      };
    return S.updateContainerElements(e), S;
  }
  var ge = function (e, t) {
      0 < e.length && (i = e[e.length - 1]) !== t && i.pause();
      var i = e.indexOf(t);
      -1 !== i && e.splice(i, 1), e.push(t);
    },
    be = function (e, t) {
      t = e.indexOf(t);
      -1 !== t && e.splice(t, 1), 0 < e.length && e[e.length - 1].unpause();
    },
    M = function (e) {
      return (
        'Tab' === (null == e ? void 0 : e.key) ||
        9 === (null == e ? void 0 : e.keyCode)
      );
    },
    fe = [],
    ye =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : {};
  function r(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var m,
    Le = r(function (e) {
      function s(e, t) {
        for (var i = 0; i < t.length; i++) {
          var s = t[i];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(e, s.key, s);
        }
      }
      function r(e, t) {
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
      }
      function h(e) {
        return parseFloat(e) || 0;
      }
      function c(e) {
        for (var t = 0; e; ) (t += e.offsetTop), (e = e.offsetParent);
        return t;
      }
      function i(t) {
        if (!(this instanceof i))
          throw new TypeError('Cannot call a class as a function');
        if (!(t instanceof HTMLElement))
          throw new Error('First argument must be HTMLElement');
        if (
          g.some(function (e) {
            return e._node === t;
          })
        )
          throw new Error('Stickyfill is already applied to this node');
        (this._node = t),
          (this._stickyMode = null),
          (this._active = !1),
          g.push(this),
          this.refresh();
      }
      function t() {
        var e, t, i;
        function s() {
          d.pageXOffset != v.left
            ? ((v.top = d.pageYOffset),
              (v.left = d.pageXOffset),
              f.refreshAll())
            : d.pageYOffset != v.top &&
              ((v.top = d.pageYOffset),
              (v.left = d.pageXOffset),
              g.forEach(function (e) {
                return e._recalcPosition();
              }));
        }
        function n() {
          e = setInterval(function () {
            g.forEach(function (e) {
              return e._fastCheck();
            });
          }, 500);
        }
        o ||
          ((o = !0),
          s(),
          d.addEventListener('scroll', s),
          d.addEventListener('resize', f.refreshAll),
          d.addEventListener('orientationchange', f.refreshAll),
          (i = t = e = void 0),
          'hidden' in u
            ? ((t = 'hidden'), (i = 'visibilitychange'))
            : 'webkitHidden' in u &&
              ((t = 'webkitHidden'), (i = 'webkitvisibilitychange')),
          i
            ? (u[t] || n(),
              u.addEventListener(i, function () {
                u[t] ? clearInterval(e) : n();
              }))
            : n());
      }
      var d, u, n, l, m, a, o, p, v, g, b, f;
      (d = window),
        (u = document),
        (m = !(n = function (e, t, i) {
          return t && s(e.prototype, t), i && s(e, i), e;
        })),
        ((a = void 0 !== d) &&
          d.getComputedStyle &&
          ((l = u.createElement('div')),
          !['', '-webkit-', '-moz-', '-ms-'].some(function (e) {
            try {
              l.style.position = e + 'sticky';
            } catch (e) {}
            return '' != l.style.position;
          }))) ||
          (m = !0),
        (o = !1),
        (p = 'undefined' != typeof ShadowRoot),
        (v = { top: null, left: null }),
        (g = []),
        n(i, [
          {
            key: 'refresh',
            value: function () {
              var e, t, i, s, n, l, a, o;
              m ||
                this._removed ||
                (this._active && this._deactivate(),
                (e = this._node),
                (t = {
                  position: (i = getComputedStyle(e)).position,
                  top: i.top,
                  display: i.display,
                  marginTop: i.marginTop,
                  marginBottom: i.marginBottom,
                  marginLeft: i.marginLeft,
                  marginRight: i.marginRight,
                  cssFloat: i.cssFloat,
                }),
                isNaN(parseFloat(t.top))) ||
                'table-cell' == t.display ||
                'none' == t.display ||
                ((this._active = !0),
                (o = e.style.position),
                ('sticky' != i.position && '-webkit-sticky' != i.position) ||
                  (e.style.position = 'static'),
                (i = e.parentNode),
                (s = p && i instanceof ShadowRoot ? i.host : i),
                (n = e.getBoundingClientRect()),
                (a = s.getBoundingClientRect()),
                (l = getComputedStyle(s)),
                (this._parent = {
                  node: s,
                  styles: { position: s.style.position },
                  offsetHeight: s.offsetHeight,
                }),
                (this._offsetToWindow = {
                  left: n.left,
                  right: u.documentElement.clientWidth - n.right,
                }),
                (this._offsetToParent = {
                  top: n.top - a.top - h(l.borderTopWidth),
                  left: n.left - a.left - h(l.borderLeftWidth),
                  right: -n.right + a.right - h(l.borderRightWidth),
                }),
                (this._styles = {
                  position: o,
                  top: e.style.top,
                  bottom: e.style.bottom,
                  left: e.style.left,
                  right: e.style.right,
                  width: e.style.width,
                  marginTop: e.style.marginTop,
                  marginLeft: e.style.marginLeft,
                  marginRight: e.style.marginRight,
                }),
                (o = h(t.top)),
                (this._limits = {
                  start: n.top + d.pageYOffset - o,
                  end:
                    a.top +
                    d.pageYOffset +
                    s.offsetHeight -
                    h(l.borderBottomWidth) -
                    e.offsetHeight -
                    o -
                    h(t.marginBottom),
                }),
                'absolute' != (a = l.position) &&
                  'relative' != a &&
                  (s.style.position = 'relative'),
                this._recalcPosition(),
                ((o = this._clone = {}).node = u.createElement('div')),
                r(o.node.style, {
                  width: n.right - n.left + 'px',
                  height: n.bottom - n.top + 'px',
                  marginTop: t.marginTop,
                  marginBottom: t.marginBottom,
                  marginLeft: t.marginLeft,
                  marginRight: t.marginRight,
                  cssFloat: t.cssFloat,
                  padding: 0,
                  border: 0,
                  borderSpacing: 0,
                  fontSize: '1em',
                  position: 'static',
                }),
                i.insertBefore(o.node, e),
                (o.docOffsetTop = c(o.node)));
            },
          },
          {
            key: '_recalcPosition',
            value: function () {
              if (this._active && !this._removed) {
                var e =
                  v.top <= this._limits.start
                    ? 'start'
                    : v.top >= this._limits.end
                      ? 'end'
                      : 'middle';
                if (this._stickyMode != e) {
                  switch (e) {
                    case 'start':
                      r(this._node.style, {
                        position: 'absolute',
                        left: this._offsetToParent.left + 'px',
                        right: this._offsetToParent.right + 'px',
                        top: this._offsetToParent.top + 'px',
                        bottom: 'auto',
                        width: 'auto',
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                      });
                      break;
                    case 'middle':
                      r(this._node.style, {
                        position: 'fixed',
                        left: this._offsetToWindow.left + 'px',
                        right: this._offsetToWindow.right + 'px',
                        top: this._styles.top,
                        bottom: 'auto',
                        width: 'auto',
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                      });
                      break;
                    case 'end':
                      r(this._node.style, {
                        position: 'absolute',
                        left: this._offsetToParent.left + 'px',
                        right: this._offsetToParent.right + 'px',
                        top: 'auto',
                        bottom: 0,
                        width: 'auto',
                        marginLeft: 0,
                        marginRight: 0,
                      });
                  }
                  this._stickyMode = e;
                }
              }
            },
          },
          {
            key: '_fastCheck',
            value: function () {
              this._active &&
                !this._removed &&
                (1 < Math.abs(c(this._clone.node) - this._clone.docOffsetTop) ||
                  1 <
                    Math.abs(
                      this._parent.node.offsetHeight - this._parent.offsetHeight
                    )) &&
                this.refresh();
            },
          },
          {
            key: '_deactivate',
            value: function () {
              var t = this;
              this._active &&
                !this._removed &&
                (this._clone.node.parentNode.removeChild(this._clone.node),
                delete this._clone,
                r(this._node.style, this._styles),
                delete this._styles,
                g.some(function (e) {
                  return (
                    e !== t && e._parent && e._parent.node === t._parent.node
                  );
                }) || r(this._parent.node.style, this._parent.styles),
                delete this._parent,
                (this._stickyMode = null),
                (this._active = !1),
                delete this._offsetToWindow,
                delete this._offsetToParent,
                delete this._limits);
            },
          },
          {
            key: 'remove',
            value: function () {
              var i = this;
              this._deactivate(),
                g.some(function (e, t) {
                  if (e._node === i._node) return g.splice(t, 1), !0;
                }),
                (this._removed = !0);
            },
          },
        ]),
        (f = {
          stickies: g,
          Sticky: (b = i),
          forceSticky: function () {
            (m = !1), t(), this.refreshAll();
          },
          addOne: function (e) {
            if (!(e instanceof HTMLElement)) {
              if (!e.length || !e[0]) return;
              e = e[0];
            }
            for (var t = 0; t < g.length; t++)
              if (g[t]._node === e) return g[t];
            return new b(e);
          },
          add: function (i) {
            if ((i = i instanceof HTMLElement ? [i] : i).length) {
              for (var s = [], e = 0; e < i.length; e++)
                ((e) => {
                  var t = i[e];
                  t instanceof HTMLElement
                    ? g.some(function (e) {
                        if (e._node === t) return s.push(e), !0;
                      }) || s.push(new b(t))
                    : s.push(void 0);
                })(e);
              return s;
            }
          },
          refreshAll: function () {
            g.forEach(function (e) {
              return e.refresh();
            });
          },
          removeOne: function (t) {
            if (!(t instanceof HTMLElement)) {
              if (!t.length || !t[0]) return;
              t = t[0];
            }
            g.some(function (e) {
              if (e._node === t) return e.remove(), !0;
            });
          },
          remove: function (i) {
            if ((i = i instanceof HTMLElement ? [i] : i).length)
              for (var e = 0; e < i.length; e++)
                ((e) => {
                  var t = i[e];
                  g.some(function (e) {
                    if (e._node === t) return e.remove(), !0;
                  });
                })(e);
          },
          removeAll: function () {
            for (; g.length; ) g[0].remove();
          },
        }),
        m || t(),
        e.exports ? (e.exports = f) : a && (d.Stickyfill = f);
    }),
    Ee = r(function (e, t) {
      function i(e, t) {
        t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
        var i = document.createEvent('CustomEvent');
        return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
      }
      var s, c, d, u, n, m, l, a, p, o, v, r, g, b;
      Element.prototype.closest ||
        (Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
        (Element.prototype.closest = function (e) {
          var t = this;
          if (document.documentElement.contains(this))
            do {
              if (t.matches(e)) return t;
            } while (null !== (t = t.parentElement));
          return null;
        })),
        'function' != typeof window.CustomEvent &&
          ((i.prototype = window.Event.prototype), (window.CustomEvent = i)),
        (s = 0 ? window : ye),
        (e.exports =
          ((c = s),
          (d = {
            navClass: 'active',
            contentClass: 'active',
            nested: !1,
            nestedClass: 'active',
            offset: 0,
            reflow: !1,
            events: !0,
          }),
          (u = function (e, t, i) {
            i.settings.events &&
              ((e = new CustomEvent(e, {
                bubbles: !0,
                cancelable: !0,
                detail: i,
              })),
              t.dispatchEvent(e));
          }),
          (n = function (e) {
            var t = 0;
            if (e.offsetParent)
              for (; e; ) (t += e.offsetTop), (e = e.offsetParent);
            return 0 <= t ? t : 0;
          }),
          (m = function (e) {
            e &&
              e.sort(function (e, t) {
                return n(e.content) < n(t.content) ? -1 : 1;
              });
          }),
          (l = function (e) {
            return 'function' == typeof e.offset
              ? parseFloat(e.offset())
              : parseFloat(e.offset);
          }),
          (a = function () {
            return Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight,
              document.body.offsetHeight,
              document.documentElement.offsetHeight,
              document.body.clientHeight,
              document.documentElement.clientHeight
            );
          }),
          (p = function (e, t, i) {
            (e = e.getBoundingClientRect()), (t = l(t));
            return i
              ? parseInt(e.bottom, 10) <
                  (c.innerHeight || document.documentElement.clientHeight)
              : parseInt(e.top, 10) <= t;
          }),
          (o = function () {
            return c.innerHeight + c.pageYOffset >= a();
          }),
          (v = function (e, t) {
            return !(!o() || !p(e.content, t, !0));
          }),
          (r = function (e, t) {
            t.nested &&
              e.parentNode &&
              (e = e.parentNode.closest('li')) &&
              (e.classList.remove(t.nestedClass), r(e, t));
          }),
          (g = function (e, t) {
            var i;
            e &&
              (i = e.nav.closest('li')) &&
              (i.classList.remove(t.navClass),
              e.content.classList.remove(t.contentClass),
              r(i, t),
              u('gumshoeDeactivate', i, {
                link: e.nav,
                content: e.content,
                settings: t,
              }));
          }),
          (b = function (e, t) {
            t.nested &&
              (e = e.parentNode.closest('li')) &&
              (e.classList.add(t.nestedClass), b(e, t));
          }),
          function (e, t) {
            function i(e) {
              o && c.cancelAnimationFrame(o),
                (o = c.requestAnimationFrame(h.detect));
            }
            function s(e) {
              o && c.cancelAnimationFrame(o),
                (o = c.requestAnimationFrame(function () {
                  m(l), h.detect();
                }));
            }
            var n,
              l,
              a,
              o,
              r,
              h = {
                setup: function () {
                  (n = document.querySelectorAll(e)),
                    (l = []),
                    Array.prototype.forEach.call(n, function (e) {
                      var t = document.getElementById(
                        decodeURIComponent(e.hash.substr(1))
                      );
                      t && l.push({ nav: e, content: t });
                    }),
                    m(l);
                },
              };
            (h.detect = function () {
              var e,
                t,
                i,
                s = ((e, t) => {
                  var i = e[e.length - 1];
                  if (v(i, t)) return i;
                  for (var s = e.length - 1; 0 <= s; s--)
                    if (p(e[s].content, t)) return e[s];
                })(l, r);
              s
                ? (a && s.content === a.content) ||
                  (g(a, r),
                  (t = r),
                  (e = s) &&
                    (i = e.nav.closest('li')) &&
                    (i.classList.add(t.navClass),
                    e.content.classList.add(t.contentClass),
                    b(i, t),
                    u('gumshoeActivate', i, {
                      link: e.nav,
                      content: e.content,
                      settings: t,
                    })),
                  (a = s))
                : a && (g(a, r), (a = null));
            }),
              (h.destroy = function () {
                a && g(a, r),
                  c.removeEventListener('scroll', i, !1),
                  r.reflow && c.removeEventListener('resize', s, !1),
                  (r = o = a = n = l = null);
              });
            return (
              (r = (function () {
                var i = {};
                return (
                  Array.prototype.forEach.call(arguments, function (e) {
                    for (var t in e) {
                      if (!e.hasOwnProperty(t)) return;
                      i[t] = e[t];
                    }
                  }),
                  i
                );
              })(d, t || {})),
              h.setup(),
              h.detect(),
              c.addEventListener('scroll', i, !1),
              r.reflow && c.addEventListener('resize', s, !1),
              h
            );
          }));
    }),
    Ce = r(function (e) {
      function s(e) {
        var t;
        return (
          n[e] ||
          ((t = n[e] = { i: e, l: !1, exports: {} }),
          i[e].call(t.exports, t, t.exports, s),
          (t.l = !0),
          t)
        ).exports;
      }
      var i, n;
      e.exports =
        ((i = [
          function (e, t, i) {
            e.exports = {
              BROWSER_TYPES: {
                CHROME: 'Chrome',
                FIREFOX: 'Firefox',
                OPERA: 'Opera',
                YANDEX: 'Yandex',
                SAFARI: 'Safari',
                INTERNET_EXPLORER: 'Internet Explorer',
                EDGE: 'Edge',
                CHROMIUM: 'Chromium',
                IE: 'IE',
                MOBILE_SAFARI: 'Mobile Safari',
                EDGE_CHROMIUM: 'Edge Chromium',
              },
              DEVICE_TYPES: {
                MOBILE: 'mobile',
                TABLET: 'tablet',
                SMART_TV: 'smarttv',
                CONSOLE: 'console',
                WEARABLE: 'wearable',
                BROWSER: void 0,
              },
              OS_TYPES: {
                IOS: 'iOS',
                ANDROID: 'Android',
                WINDOWS_PHONE: 'Windows Phone',
                WINDOWS: 'Windows',
                MAC_OS: 'Mac OS',
              },
              defaultData: {
                isMobile: !1,
                isTablet: !1,
                isBrowser: !1,
                isSmartTV: !1,
                isConsole: !1,
                isWearable: !1,
              },
            };
          },
          function (e, R, t) {
            function i() {
              return (
                g.name === r.WINDOWS &&
                '10' === g.version &&
                'string' == typeof b &&
                -1 !== b.indexOf('Edg/')
              );
            }
            function s() {
              return m.name === K;
            }
            function n() {
              return u('iPad');
            }
            var l = t(2),
              a = t(0),
              o = a.BROWSER_TYPES,
              r = a.OS_TYPES,
              a = a.DEVICE_TYPES,
              t = t(4),
              h = t.checkType,
              c = t.broPayload,
              B = t.mobilePayload,
              z = t.wearPayload,
              F = t.consolePayload,
              H = t.stvPayload,
              d = t.getNavigatorInstance,
              u = t.isIOS13Check,
              t = new l(),
              m = t.getBrowser(),
              p = t.getDevice(),
              v = t.getEngine(),
              g = t.getOS(),
              b = t.getUA(),
              l = o.CHROME,
              t = o.CHROMIUM,
              f = o.IE,
              y = o.INTERNET_EXPLORER,
              L = o.OPERA,
              E = o.FIREFOX,
              C = o.SAFARI,
              K = o.EDGE,
              w = o.YANDEX,
              o = o.MOBILE_SAFARI,
              k = a.MOBILE,
              S = a.TABLET,
              A = a.SMART_TV,
              x = a.BROWSER,
              _ = a.WEARABLE,
              a = a.CONSOLE,
              O = r.ANDROID,
              T = r.WINDOWS_PHONE,
              P = r.IOS,
              I = r.WINDOWS,
              N = r.MAC_OS,
              A = p.type === A,
              a = p.type === a,
              _ = p.type === _,
              V = m.name === o || n(),
              t = m.name === t,
              G =
                (() => {
                  switch (p.type) {
                    case k:
                    case S:
                      return !0;
                    default:
                      return !1;
                  }
                })() || n(),
              W = p.type === k,
              U = p.type === S || n(),
              x = p.type === x,
              O = g.name === O,
              T = g.name === T,
              P = g.name === P || n(),
              l = m.name === l,
              E = m.name === E,
              C = m.name === C || m.name === o,
              o = m.name === L,
              L = m.name === y || m.name === f,
              y = g.version || 'none',
              f = g.name || 'none',
              j = m.major,
              q = m.version,
              Y = m.name,
              X = p.vendor || 'none',
              $ = p.model || 'none',
              Q = v.name,
              Z = v.version,
              J = b,
              ee = s() || i(),
              w = m.name === w,
              te = p.type,
              M =
                (M = d()) &&
                (/iPad|iPhone|iPod/.test(M.platform) ||
                  ('MacIntel' === M.platform && 1 < M.maxTouchPoints)) &&
                !window.MSStream,
              ie = n(),
              se = u('iPhone'),
              ne = u('iPod'),
              d =
                'string' ==
                  typeof (d = (d = d()) && d.userAgent.toLowerCase()) &&
                /electron/.test(d),
              le = i(),
              ae = s(),
              I = g.name === I,
              N = g.name === N,
              D = h(p.type);
            e.exports = {
              deviceDetect: function () {
                var e = D.isBrowser,
                  t = D.isMobile,
                  i = D.isTablet,
                  s = D.isSmartTV,
                  n = D.isConsole,
                  l = D.isWearable;
                return e
                  ? c(e, m, v, g, b)
                  : s
                    ? H(s, v, g, b)
                    : n
                      ? F(n, v, g, b)
                      : t || i
                        ? B(D, p, g, b)
                        : l
                          ? z(l, v, g, b)
                          : void 0;
              },
              isSmartTV: A,
              isConsole: a,
              isWearable: _,
              isMobileSafari: V,
              isChromium: t,
              isMobile: G,
              isMobileOnly: W,
              isTablet: U,
              isBrowser: x,
              isAndroid: O,
              isWinPhone: T,
              isIOS: P,
              isChrome: l,
              isFirefox: E,
              isSafari: C,
              isOpera: o,
              isIE: L,
              osVersion: y,
              osName: f,
              fullBrowserVersion: j,
              browserVersion: q,
              browserName: Y,
              mobileVendor: X,
              mobileModel: $,
              engineName: Q,
              engineVersion: Z,
              getUA: J,
              isEdge: ee,
              isYandex: w,
              deviceType: te,
              isIOS13: M,
              isIPad13: ie,
              isIPhone13: se,
              isIPod13: ne,
              isElectron: d,
              isEdgeChromium: le,
              isLegacyEdge: ae,
              isWindows: I,
              isMacOs: N,
            };
          },
          function (e, t, i) {
            var n, d, s, u, l, a, o, r, h, c, m, p, v, g, b, f, y, L, E, C, w;
            function k(e, t) {
              var i, s;
              return (
                'object' == typeof e && ((t = e), (e = d)),
                this instanceof k
                  ? ((i =
                      e ||
                      (n && n.navigator && n.navigator.userAgent
                        ? n.navigator.userAgent
                        : '')),
                    (s = t ? y.extend(C, t) : C),
                    (this.getBrowser = function () {
                      var e = { name: d, version: d };
                      return (
                        L.rgx.call(e, i, s.browser),
                        (e.major = y.major(e.version)),
                        e
                      );
                    }),
                    (this.getCPU = function () {
                      var e = { architecture: d };
                      return L.rgx.call(e, i, s.cpu), e;
                    }),
                    (this.getDevice = function () {
                      var e = { vendor: d, model: d, type: d };
                      return L.rgx.call(e, i, s.device), e;
                    }),
                    (this.getEngine = function () {
                      var e = { name: d, version: d };
                      return L.rgx.call(e, i, s.engine), e;
                    }),
                    (this.getOS = function () {
                      var e = { name: d, version: d };
                      return L.rgx.call(e, i, s.os), e;
                    }),
                    (this.getResult = function () {
                      return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU(),
                      };
                    }),
                    (this.getUA = function () {
                      return i;
                    }),
                    (this.setUA = function (e) {
                      return (i = e), this;
                    }),
                    this)
                  : new k(e, t).getResult()
              );
            }
            (n = 'object' == typeof window ? window : this),
              (u = 'function'),
              (l = 'undefined'),
              (a = 'model'),
              (r = 'type'),
              (h = 'vendor'),
              (m = 'architecture'),
              (p = 'console'),
              (v = 'mobile'),
              (g = 'tablet'),
              (b = 'smarttv'),
              (f = 'wearable'),
              (y = {
                extend: function (e, t) {
                  var i,
                    s = {};
                  for (i in e)
                    t[i] && t[i].length % 2 == 0
                      ? (s[i] = t[i].concat(e[i]))
                      : (s[i] = e[i]);
                  return s;
                },
                has: function (e, t) {
                  return (
                    'string' == typeof e &&
                    -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                  );
                },
                lowerize: function (e) {
                  return e.toLowerCase();
                },
                major: function (e) {
                  return 'string' == typeof e
                    ? e.replace(/[^\d\.]/g, '').split('.')[0]
                    : d;
                },
                trim: function (e) {
                  return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                },
              }),
              (C = {
                browser: [
                  [
                    /(opera\smini)\/([\w\.-]+)/i,
                    /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
                    /(opera).+version\/([\w\.]+)/i,
                    /(opera)[\/\s]+([\w\.]+)/i,
                  ],
                  [(o = 'name'), (c = 'version')],
                  [/(opios)[\/\s]+([\w\.]+)/i],
                  [[o, 'Opera Mini'], c],
                  [/\s(opr)\/([\w\.]+)/i],
                  [[o, 'Opera'], c],
                  [
                    /(kindle)\/([\w\.]+)/i,
                    /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                    /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                    /(?:ms|\()(ie)\s([\w\.]+)/i,
                    /(rekonq)\/([\w\.]*)/i,
                    /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i,
                  ],
                  [o, c],
                  [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                  [[o, 'IE'], c],
                  [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],
                  [[o, 'Edge'], c],
                  [/(yabrowser)\/([\w\.]+)/i],
                  [[o, 'Yandex'], c],
                  [/(puffin)\/([\w\.]+)/i],
                  [[o, 'Puffin'], c],
                  [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                  [[o, 'UCBrowser'], c],
                  [/(comodo_dragon)\/([\w\.]+)/i],
                  [[o, /_/g, ' '], c],
                  [/(micromessenger)\/([\w\.]+)/i],
                  [[o, 'WeChat'], c],
                  [/(qqbrowserlite)\/([\w\.]+)/i],
                  [o, c],
                  [/(QQ)\/([\d\.]+)/i],
                  [o, c],
                  [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                  [o, c],
                  [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                  [o, c],
                  [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                  [o, c],
                  [/(MetaSr)[\/\s]?([\w\.]+)/i],
                  [o],
                  [/(LBBROWSER)/i],
                  [o],
                  [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                  [c, [o, 'MIUI Browser']],
                  [/;fbav\/([\w\.]+);/i],
                  [c, [o, 'Facebook']],
                  [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                  [c, [o, 'Chrome Headless']],
                  [/\swv\).+(chrome)\/([\w\.]+)/i],
                  [[o, /(.+)/, '$1 WebView'], c],
                  [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                  [[o, /(.+(?:g|us))(.+)/, '$1 $2'], c],
                  [
                    /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i,
                  ],
                  [c, [o, 'Android Browser']],
                  [
                    /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
                  ],
                  [o, c],
                  [/(dolfin)\/([\w\.]+)/i],
                  [[o, 'Dolphin'], c],
                  [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                  [[o, 'Chrome'], c],
                  [/(coast)\/([\w\.]+)/i],
                  [[o, 'Opera Coast'], c],
                  [/fxios\/([\w\.-]+)/i],
                  [c, [o, 'Firefox']],
                  [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                  [c, [o, 'Mobile Safari']],
                  [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                  [c, o],
                  [
                    /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i,
                  ],
                  [[o, 'GSA'], c],
                  [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                  [
                    o,
                    [
                      c,
                      (L = {
                        rgx: function (e, t) {
                          for (var i, s, n, l, a, o = 0; o < t.length && !l; ) {
                            for (
                              var r = t[o], h = t[o + 1], c = (i = 0);
                              c < r.length && !l;

                            )
                              if ((l = r[c++].exec(e)))
                                for (s = 0; s < h.length; s++)
                                  (a = l[++i]),
                                    'object' == typeof (n = h[s]) &&
                                    0 < n.length
                                      ? 2 == n.length
                                        ? typeof n[1] == u
                                          ? (this[n[0]] = n[1].call(this, a))
                                          : (this[n[0]] = n[1])
                                        : 3 == n.length
                                          ? typeof n[1] != u ||
                                            (n[1].exec && n[1].test)
                                            ? (this[n[0]] = a
                                                ? a.replace(n[1], n[2])
                                                : d)
                                            : (this[n[0]] = a
                                                ? n[1].call(this, a, n[2])
                                                : d)
                                          : 4 == n.length &&
                                            (this[n[0]] = a
                                              ? n[3].call(
                                                  this,
                                                  a.replace(n[1], n[2])
                                                )
                                              : d)
                                      : (this[n] = a || d);
                            o += 2;
                          }
                        },
                        str: function (e, t) {
                          for (var i in t)
                            if ('object' == typeof t[i] && 0 < t[i].length) {
                              for (var s = 0; s < t[i].length; s++)
                                if (y.has(t[i][s], e)) return '?' === i ? d : i;
                            } else if (y.has(t[i], e)) return '?' === i ? d : i;
                          return e;
                        },
                      }).str,
                      (E = {
                        browser: {
                          oldsafari: {
                            version: {
                              '1.0': '/8',
                              1.2: '/1',
                              1.3: '/3',
                              '2.0': '/412',
                              '2.0.2': '/416',
                              '2.0.3': '/417',
                              '2.0.4': '/419',
                              '?': '/',
                            },
                          },
                        },
                        device: {
                          amazon: { model: { 'Fire Phone': ['SD', 'KF'] } },
                          sprint: {
                            model: { 'Evo Shift 4G': '7373KT' },
                            vendor: { HTC: 'APA', Sprint: 'Sprint' },
                          },
                        },
                        os: {
                          windows: {
                            version: {
                              ME: '4.90',
                              'NT 3.11': 'NT3.51',
                              'NT 4.0': 'NT4.0',
                              2e3: 'NT 5.0',
                              XP: ['NT 5.1', 'NT 5.2'],
                              Vista: 'NT 6.0',
                              7: 'NT 6.1',
                              8: 'NT 6.2',
                              8.1: 'NT 6.3',
                              10: ['NT 6.4', 'NT 10.0'],
                              RT: 'ARM',
                            },
                          },
                        },
                      }).browser.oldsafari.version,
                    ],
                  ],
                  [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                  [o, c],
                  [/(navigator|netscape)\/([\w\.-]+)/i],
                  [[o, 'Netscape'], c],
                  [
                    /(swiftfox)/i,
                    /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                    /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                    /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                    /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                    /(links)\s\(([\w\.]+)/i,
                    /(gobrowser)\/?([\w\.]*)/i,
                    /(ice\s?browser)\/v?([\w\._]+)/i,
                    /(mosaic)[\/\s]([\w\.]+)/i,
                  ],
                  [o, c],
                ],
                cpu: [
                  [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                  [[m, 'amd64']],
                  [/(ia32(?=;))/i],
                  [[m, y.lowerize]],
                  [/((?:i[346]|x)86)[;\)]/i],
                  [[m, 'ia32']],
                  [/windows\s(ce|mobile);\sppc;/i],
                  [[m, 'arm']],
                  [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                  [[m, /ower/, '', y.lowerize]],
                  [/(sun4\w)[;\)]/i],
                  [[m, 'sparc']],
                  [
                    /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
                  ],
                  [[m, y.lowerize]],
                ],
                device: [
                  [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                  [a, h, [r, g]],
                  [/applecoremedia\/[\w\.]+ \((ipad)/],
                  [a, [h, 'Apple'], [r, g]],
                  [/(apple\s{0,1}tv)/i],
                  [
                    [a, 'Apple TV'],
                    [h, 'Apple'],
                  ],
                  [
                    /(archos)\s(gamepad2?)/i,
                    /(hp).+(touchpad)/i,
                    /(hp).+(tablet)/i,
                    /(kindle)\/([\w\.]+)/i,
                    /\s(nook)[\w\s]+build\/(\w+)/i,
                    /(dell)\s(strea[kpr\s\d]*[\dko])/i,
                  ],
                  [h, a, [r, g]],
                  [/(kf[A-z]+)\sbuild\/.+silk\//i],
                  [a, [h, 'Amazon'], [r, g]],
                  [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                  [
                    [a, L.str, E.device.amazon.model],
                    [h, 'Amazon'],
                    [r, v],
                  ],
                  [/\((ip[honed|\s\w*]+);.+(apple)/i],
                  [a, h, [r, v]],
                  [/\((ip[honed|\s\w*]+);/i],
                  [a, [h, 'Apple'], [r, v]],
                  [
                    /(blackberry)[\s-]?(\w+)/i,
                    /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                    /(hp)\s([\w\s]+\w)/i,
                    /(asus)-?(\w+)/i,
                  ],
                  [h, a, [r, v]],
                  [/\(bb10;\s(\w+)/i],
                  [a, [h, 'BlackBerry'], [r, v]],
                  [
                    /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i,
                  ],
                  [a, [h, 'Asus'], [r, g]],
                  [
                    /(sony)\s(tablet\s[ps])\sbuild\//i,
                    /(sony)?(?:sgp.+)\sbuild\//i,
                  ],
                  [
                    [h, 'Sony'],
                    [a, 'Xperia Tablet'],
                    [r, g],
                  ],
                  [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                  [a, [h, 'Sony'], [r, v]],
                  [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                  [h, a, [r, p]],
                  [/android.+;\s(shield)\sbuild/i],
                  [a, [h, 'Nvidia'], [r, p]],
                  [/(playstation\s[34portablevi]+)/i],
                  [a, [h, 'Sony'], [r, p]],
                  [/(sprint\s(\w+))/i],
                  [
                    [h, L.str, E.device.sprint.vendor],
                    [a, L.str, E.device.sprint.model],
                    [r, v],
                  ],
                  [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                  [h, a, [r, g]],
                  [
                    /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,
                    /(zte)-(\w*)/i,
                    /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
                  ],
                  [h, [a, /_/g, ' '], [r, v]],
                  [/(nexus\s9)/i],
                  [a, [h, 'HTC'], [r, g]],
                  [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                  [a, [h, 'Huawei'], [r, v]],
                  [/(microsoft);\s(lumia[\s\w]+)/i],
                  [h, a, [r, v]],
                  [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                  [a, [h, 'Microsoft'], [r, p]],
                  [/(kin\.[onetw]{3})/i],
                  [
                    [a, /\./g, ' '],
                    [h, 'Microsoft'],
                    [r, v],
                  ],
                  [
                    /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
                    /mot[\s-]?(\w*)/i,
                    /(XT\d{3,4}) build\//i,
                    /(nexus\s6)/i,
                  ],
                  [a, [h, 'Motorola'], [r, v]],
                  [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                  [a, [h, 'Motorola'], [r, g]],
                  [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                  [
                    [h, y.trim],
                    [a, y.trim],
                    [r, b],
                  ],
                  [/hbbtv.+maple;(\d+)/i],
                  [
                    [a, /^/, 'SmartTV'],
                    [h, 'Samsung'],
                    [r, b],
                  ],
                  [/\(dtv[\);].+(aquos)/i],
                  [a, [h, 'Sharp'], [r, b]],
                  [
                    /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                    /((SM-T\w+))/i,
                  ],
                  [[h, 'Samsung'], a, [r, g]],
                  [/smart-tv.+(samsung)/i],
                  [h, [r, b], a],
                  [
                    /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                    /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                    /sec-((sgh\w+))/i,
                  ],
                  [[h, 'Samsung'], a, [r, v]],
                  [/sie-(\w*)/i],
                  [a, [h, 'Siemens'], [r, v]],
                  [
                    /(maemo|nokia).*(n900|lumia\s\d+)/i,
                    /(nokia)[\s_-]?([\w-]*)/i,
                  ],
                  [[h, 'Nokia'], a, [r, v]],
                  [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                  [a, [h, 'Acer'], [r, g]],
                  [/android.+([vl]k\-?\d{3})\s+build/i],
                  [a, [h, 'LG'], [r, g]],
                  [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                  [[h, 'LG'], a, [r, g]],
                  [/(lg) netcast\.tv/i],
                  [h, a, [r, b]],
                  [
                    /(nexus\s[45])/i,
                    /lg[e;\s\/-]+(\w*)/i,
                    /android.+lg(\-?[\d\w]+)\s+build/i,
                  ],
                  [a, [h, 'LG'], [r, v]],
                  [/android.+(ideatab[a-z0-9\-\s]+)/i],
                  [a, [h, 'Lenovo'], [r, g]],
                  [/linux;.+((jolla));/i],
                  [h, a, [r, v]],
                  [/((pebble))app\/[\d\.]+\s/i],
                  [h, a, [r, f]],
                  [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                  [h, a, [r, v]],
                  [/crkey/i],
                  [
                    [a, 'Chromecast'],
                    [h, 'Google'],
                  ],
                  [/android.+;\s(glass)\s\d/i],
                  [a, [h, 'Google'], [r, f]],
                  [/android.+;\s(pixel c)\s/i],
                  [a, [h, 'Google'], [r, g]],
                  [/android.+;\s(pixel xl|pixel)\s/i],
                  [a, [h, 'Google'], [r, v]],
                  [
                    /android.+;\s(\w+)\s+build\/hm\1/i,
                    /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                    /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                    /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i,
                  ],
                  [
                    [a, /_/g, ' '],
                    [h, 'Xiaomi'],
                    [r, v],
                  ],
                  [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                  [
                    [a, /_/g, ' '],
                    [h, 'Xiaomi'],
                    [r, g],
                  ],
                  [/android.+;\s(m[1-5]\snote)\sbuild/i],
                  [a, [h, 'Meizu'], [r, g]],
                  [
                    /android.+a000(1)\s+build/i,
                    /android.+oneplus\s(a\d{4})\s+build/i,
                  ],
                  [a, [h, 'OnePlus'], [r, v]],
                  [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                  [a, [h, 'RCA'], [r, g]],
                  [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                  [a, [h, 'Dell'], [r, g]],
                  [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                  [a, [h, 'Verizon'], [r, g]],
                  [
                    /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i,
                  ],
                  [[h, 'Barnes & Noble'], a, [r, g]],
                  [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                  [a, [h, 'NuVision'], [r, g]],
                  [/android.+;\s(k88)\sbuild/i],
                  [a, [h, 'ZTE'], [r, g]],
                  [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                  [a, [h, 'Swiss'], [r, v]],
                  [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                  [a, [h, 'Swiss'], [r, g]],
                  [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                  [a, [h, 'Zeki'], [r, g]],
                  [
                    /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
                    /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i,
                  ],
                  [[h, 'Dragon Touch'], a, [r, g]],
                  [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                  [a, [h, 'Insignia'], [r, g]],
                  [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                  [a, [h, 'NextBook'], [r, g]],
                  [
                    /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i,
                  ],
                  [[h, 'Voice'], a, [r, v]],
                  [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                  [[h, 'LvTel'], a, [r, v]],
                  [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                  [a, [h, 'Envizen'], [r, g]],
                  [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                  [h, a, [r, g]],
                  [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                  [a, [h, 'MachSpeed'], [r, g]],
                  [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                  [h, a, [r, g]],
                  [/android.+[;\/]\s*TU_(1491)\s+build/i],
                  [a, [h, 'Rotor'], [r, g]],
                  [/android.+(KS(.+))\s+build/i],
                  [a, [h, 'Amazon'], [r, g]],
                  [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                  [h, a, [r, g]],
                  [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                  [[r, y.lowerize], h, a],
                  [/(android[\w\.\s\-]{0,9});.+build/i],
                  [a, [h, 'Generic']],
                ],
                engine: [
                  [/windows.+\sedge\/([\w\.]+)/i],
                  [c, [o, 'EdgeHTML']],
                  [
                    /(presto)\/([\w\.]+)/i,
                    /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,
                    /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                    /(icab)[\/\s]([23]\.[\d\.]+)/i,
                  ],
                  [o, c],
                  [/rv\:([\w\.]{1,9}).+(gecko)/i],
                  [c, o],
                ],
                os: [
                  [/microsoft\s(windows)\s(vista|xp)/i],
                  [o, c],
                  [
                    /(windows)\snt\s6\.2;\s(arm)/i,
                    /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
                    /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
                  ],
                  [o, [c, L.str, E.os.windows.version]],
                  [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                  [
                    [o, 'Windows'],
                    [c, L.str, E.os.windows.version],
                  ],
                  [/\((bb)(10);/i],
                  [[o, 'BlackBerry'], c],
                  [
                    /(blackberry)\w*\/?([\w\.]*)/i,
                    /(tizen)[\/\s]([\w\.]+)/i,
                    /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,
                    /linux;.+(sailfish);/i,
                  ],
                  [o, c],
                  [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                  [[o, 'Symbian'], c],
                  [/\((series40);/i],
                  [o],
                  [/mozilla.+\(mobile;.+gecko.+firefox/i],
                  [[o, 'Firefox OS'], c],
                  [
                    /(nintendo|playstation)\s([wids34portablevu]+)/i,
                    /(mint)[\/\s\(]?(\w*)/i,
                    /(mageia|vectorlinux)[;\s]/i,
                    /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                    /(hurd|linux)\s?([\w\.]*)/i,
                    /(gnu)\s?([\w\.]*)/i,
                  ],
                  [o, c],
                  [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                  [[o, 'Chromium OS'], c],
                  [/(sunos)\s?([\w\.\d]*)/i],
                  [[o, 'Solaris'], c],
                  [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                  [o, c],
                  [/(haiku)\s(\w+)/i],
                  [o, c],
                  [
                    /cfnetwork\/.+darwin/i,
                    /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
                  ],
                  [
                    [c, /_/g, '.'],
                    [o, 'iOS'],
                  ],
                  [
                    /(mac\sos\sx)\s?([\w\s\.]*)/i,
                    /(macintosh|mac(?=_powerpc)\s)/i,
                  ],
                  [
                    [o, 'Mac OS'],
                    [c, /_/g, '.'],
                  ],
                  [
                    /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
                    /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
                    /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                    /(unix)\s?([\w\.]*)/i,
                  ],
                  [o, c],
                ],
              }),
              (k.VERSION = '0.7.18'),
              (k.BROWSER = { NAME: o, MAJOR: 'major', VERSION: c }),
              (k.CPU = { ARCHITECTURE: m }),
              (k.DEVICE = {
                MODEL: a,
                VENDOR: h,
                TYPE: r,
                CONSOLE: p,
                MOBILE: v,
                SMARTTV: b,
                TABLET: g,
                WEARABLE: f,
                EMBEDDED: 'embedded',
              }),
              (k.ENGINE = { NAME: o, VERSION: c }),
              (k.OS = { NAME: o, VERSION: c }),
              typeof t != l
                ? ((t =
                    typeof e != l && e.exports ? (e.exports = k) : t).UAParser =
                    k)
                : i(3)
                  ? (E = function () {
                      return k;
                    }.call(t, i, t, e)) !== d && (e.exports = E)
                  : n && (n.UAParser = k),
              typeof (w = n && (n.jQuery || n.Zepto)) != l &&
                ((s = new k()),
                (w.ua = s.getResult()),
                (w.ua.get = function () {
                  return s.getUA();
                }),
                (w.ua.set = function (e) {
                  s.setUA(e);
                  var t,
                    i = s.getResult();
                  for (t in i) w.ua[t] = i[t];
                }));
          },
          function (t, e) {
            !function (e) {
              t.exports = e;
            }.call(e, {});
          },
          function (e, t, i) {
            Object.defineProperty(t, '__esModule', { value: !0 });
            var n =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i,
                      s = arguments[t];
                    for (i in s)
                      Object.prototype.hasOwnProperty.call(s, i) &&
                        (e[i] = s[i]);
                  }
                  return e;
                },
              i = i(0),
              s = i.DEVICE_TYPES,
              l = i.defaultData,
              a = (t.getNavigatorInstance = function () {
                return (
                  !(
                    'undefined' == typeof window ||
                    (!window.navigator && !navigator)
                  ) &&
                  (window.navigator || navigator)
                );
              }),
              i = (t.isIOS13Check = function (e) {
                var t = a();
                return (
                  t &&
                  t.platform &&
                  (-1 !== t.platform.indexOf(e) ||
                    ('MacIntel' === t.platform &&
                      1 < t.maxTouchPoints &&
                      !window.MSStream))
                );
              });
            e.exports = {
              checkType: function (e) {
                switch (e) {
                  case s.MOBILE:
                    return { isMobile: !0 };
                  case s.TABLET:
                    return { isTablet: !0 };
                  case s.SMART_TV:
                    return { isSmartTV: !0 };
                  case s.CONSOLE:
                    return { isConsole: !0 };
                  case s.WEARABLE:
                    return { isWearable: !0 };
                  case s.BROWSER:
                    return { isBrowser: !0 };
                  default:
                    return l;
                }
              },
              broPayload: function (e, t, i, s, n) {
                return {
                  isBrowser: e,
                  browserMajorVersion: t.major,
                  browserFullVersion: t.version,
                  browserName: t.name,
                  engineName: i.name || !1,
                  engineVersion: i.version,
                  osName: s.name,
                  osVersion: s.version,
                  userAgent: n,
                };
              },
              mobilePayload: function (e, t, i, s) {
                return n({}, e, {
                  vendor: t.vendor,
                  model: t.model,
                  os: i.name,
                  osVersion: i.version,
                  ua: s,
                });
              },
              stvPayload: function (e, t, i, s) {
                return {
                  isSmartTV: e,
                  engineName: t.name,
                  engineVersion: t.version,
                  osName: i.name,
                  osVersion: i.version,
                  userAgent: s,
                };
              },
              consolePayload: function (e, t, i, s) {
                return {
                  isConsole: e,
                  engineName: t.name,
                  engineVersion: t.version,
                  osName: i.name,
                  osVersion: i.version,
                  userAgent: s,
                };
              },
              wearPayload: function (e, t, i, s) {
                return {
                  isWearable: e,
                  engineName: t.name,
                  engineVersion: t.version,
                  osName: i.name,
                  osVersion: i.version,
                  userAgent: s,
                };
              },
              getNavigatorInstance: a,
              isIOS13Check: i,
            };
          },
        ]),
        (n = {}),
        (s.m = i),
        (s.c = n),
        (s.d = function (e, t, i) {
          s.o(e, t) ||
            Object.defineProperty(e, t, {
              configurable: !1,
              enumerable: !0,
              get: i,
            });
        }),
        (s.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return s.d(t, 'a', t), t;
        }),
        (s.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (s.p = ''),
        s((s.s = 1)));
    }),
    g =
      (n = Ce) &&
      n.__esModule &&
      Object.prototype.hasOwnProperty.call(n, 'default')
        ? n.default
        : n,
    b = t('createSvgIcon'),
    f = t('createCheckbox'),
    we = t('createSelectIcon'),
    y = t('checkCheckbox'),
    L = t('generateRandomId'),
    E = t('updateSelectionsCount'),
    ke = t('handleOptgroup'),
    C = t('updateCurrentValue'),
    w = t('moveFocus');
  class k {
    static autoInit(e, t) {
      void 0 === t && (t = {});
      t = new k(e, t);
      return t.init(), (e.ECLSelect = t);
    }
    constructor(e, t) {
      var t = void 0 === t ? {} : t,
        i = t.defaultText,
        i = void 0 === i ? '' : i,
        s = t.searchText,
        s = void 0 === s ? '' : s,
        n = t.selectAllText,
        n = void 0 === n ? '' : n,
        l = t.noResultsText,
        l = void 0 === l ? '' : l,
        a = t.selectMultipleSelector,
        a = void 0 === a ? '[data-ecl-select-multiple]' : a,
        o = t.defaultTextAttribute,
        o = void 0 === o ? 'data-ecl-select-default' : o,
        r = t.searchTextAttribute,
        r = void 0 === r ? 'data-ecl-select-search' : r,
        h = t.selectAllTextAttribute,
        h = void 0 === h ? 'data-ecl-select-all' : h,
        c = t.noResultsTextAttribute,
        c = void 0 === c ? 'data-ecl-select-no-results' : c,
        d = t.closeLabelAttribute,
        d = void 0 === d ? 'data-ecl-select-close' : d,
        u = t.clearAllLabelAttribute,
        u = void 0 === u ? 'data-ecl-select-clear-all' : u,
        m = t.selectMultiplesSelectionCountSelector,
        m = void 0 === m ? 'ecl-select-multiple-selections-counter' : m,
        p = t.closeButtonLabel,
        p = void 0 === p ? '' : p,
        t = t.clearAllButtonLabel,
        t = void 0 === t ? '' : t;
      if (
        (Object.defineProperty(this, w, { value: _e }),
        Object.defineProperty(this, C, { value: xe }),
        Object.defineProperty(this, ke, { value: Ae }),
        Object.defineProperty(this, E, { value: Se }),
        (this.supportedEvents = [
          'onToggle',
          'onSelection',
          'onSelectAll',
          'onReset',
          'onSearch',
        ]),
        !e || e.nodeType !== Node.ELEMENT_NODE)
      )
        throw new TypeError(
          'DOM element should be given to initialize this widget.'
        );
      (this.element = e),
        (this.eventManager = new S()),
        (this.selectMultipleSelector = a),
        (this.selectMultiplesSelectionCountSelector = m),
        (this.defaultTextAttribute = o),
        (this.searchTextAttribute = r),
        (this.selectAllTextAttribute = h),
        (this.noResultsTextAttribute = c),
        (this.defaultText = i),
        (this.searchText = s),
        (this.selectAllText = n),
        (this.noResultsText = l),
        (this.clearAllButtonLabel = t),
        (this.closeButtonLabel = p),
        (this.closeLabelAttribute = d),
        (this.clearAllLabelAttribute = u),
        (this.input = null),
        (this.search = null),
        (this.checkboxes = null),
        (this.select = null),
        (this.selectAll = null),
        (this.selectIcon = null),
        (this.textDefault = null),
        (this.textSearch = null),
        (this.textSelectAll = null),
        (this.textNoResults = null),
        (this.selectMultiple = null),
        (this.inputContainer = null),
        (this.optionsContainer = null),
        (this.visibleOptions = null),
        (this.searchContainer = null),
        (this.countSelections = null),
        (this.form = null),
        (this.formGroup = null),
        (this.label = null),
        (this.helper = null),
        (this.invalid = null),
        (this.selectMultipleId = null),
        (this.multiple =
          v(this.selectMultipleSelector, this.element.parentNode) || !1),
        (this.isOpen = !1),
        (this.handleToggle = this.handleToggle.bind(this)),
        (this.handleClickOption = this.handleClickOption.bind(this)),
        (this.handleClickSelectAll = this.handleClickSelectAll.bind(this)),
        (this.handleEsc = this.handleEsc.bind(this)),
        (this.handleFocusout = this.handleFocusout.bind(this)),
        (this.handleSearch = this.handleSearch.bind(this)),
        (this.handleClickOutside = this.handleClickOutside.bind(this)),
        (this.resetForm = this.resetForm.bind(this)),
        (this.handleClickOnClearAll = this.handleClickOnClearAll.bind(this)),
        (this.handleKeyboardOnSelect = this.handleKeyboardOnSelect.bind(this)),
        (this.handleKeyboardOnSelectAll =
          this.handleKeyboardOnSelectAll.bind(this)),
        (this.handleKeyboardOnSearch = this.handleKeyboardOnSearch.bind(this)),
        (this.handleKeyboardOnOptions =
          this.handleKeyboardOnOptions.bind(this)),
        (this.handleKeyboardOnOption = this.handleKeyboardOnOption.bind(this)),
        (this.handleKeyboardOnClearAll =
          this.handleKeyboardOnClearAll.bind(this)),
        (this.handleKeyboardOnClose = this.handleKeyboardOnClose.bind(this)),
        (this.setCurrentValue = this.setCurrentValue.bind(this)),
        (this.update = this.update.bind(this));
    }
    init() {
      if (!ECL) throw new TypeError('Called init but ECL is not present');
      var e, t;
      (ECL.components = ECL.components || new Map()),
        (this.select = this.element),
        this.multiple
          ? ((e = Array.from(this.select.parentElement.classList)),
            (this.textDefault =
              this.defaultText ||
              this.element.getAttribute(this.defaultTextAttribute)),
            (this.textSearch =
              this.searchText ||
              this.element.getAttribute(this.searchTextAttribute)),
            (this.textSelectAll =
              this.selectAllText ||
              this.element.getAttribute(this.selectAllTextAttribute)),
            (this.textNoResults =
              this.noResultsText ||
              this.element.getAttribute(this.noResultsTextAttribute)),
            (this.closeButtonLabel =
              this.closeButtonLabel ||
              this.element.getAttribute(this.closeLabelAttribute)),
            (this.clearAllButtonLabel =
              this.clearAllButtonLabel ||
              this.element.getAttribute(this.clearAllLabelAttribute)),
            (this.selectMultipleId =
              this.element.id || 'select-multiple-' + d(k, L)[L](4)),
            (this.element.id = this.selectMultipleId),
            (this.formGroup = this.element.closest('.ecl-form-group')),
            this.formGroup &&
              (this.formGroup.setAttribute('role', 'application'),
              (this.label = v('.ecl-form-label', this.formGroup)),
              (this.helper = v('.ecl-help-block', this.formGroup)),
              (this.invalid = v('.ecl-feedback-message', this.formGroup))),
            this.select.setAttribute('tabindex', '-1'),
            (this.selectMultiple = document.createElement('div')),
            this.selectMultiple.classList.add('ecl-select__multiple'),
            this.selectMultiple.addEventListener(
              'focusout',
              this.handleFocusout
            ),
            (this.inputContainer = document.createElement('div')),
            this.inputContainer.classList.add(...e),
            this.selectMultiple.appendChild(this.inputContainer),
            (this.input = document.createElement('button')),
            this.input.classList.add(
              'ecl-select',
              'ecl-select__multiple-toggle'
            ),
            this.input.setAttribute('type', 'button'),
            this.input.setAttribute(
              'aria-controls',
              this.selectMultipleId + '-dropdown'
            ),
            this.input.setAttribute('id', this.selectMultipleId + '-toggle'),
            this.input.setAttribute('aria-expanded', !1),
            e.find((e) => e.includes('disabled')) &&
              this.input.setAttribute('disabled', !0),
            this.label &&
              (this.label.setAttribute(
                'for',
                this.selectMultipleId + '-toggle'
              ),
              this.input.setAttribute('aria-labelledby', this.label.id)),
            (t = ''),
            this.helper && (t = this.helper.id),
            (t = this.invalid
              ? t
                ? t + ' ' + this.invalid.id
                : this.invalid.id
              : t) && this.input.setAttribute('aria-describedby', t),
            this.input.addEventListener('keydown', this.handleKeyboardOnSelect),
            this.input.addEventListener('click', this.handleToggle),
            (this.selectionCount = document.createElement('div')),
            this.selectionCount.classList.add(
              this.selectMultiplesSelectionCountSelector
            ),
            (this.selectionCountText = document.createElement('span')),
            this.selectionCount.appendChild(this.selectionCountText),
            this.inputContainer.appendChild(this.selectionCount),
            this.inputContainer.appendChild(this.input),
            this.inputContainer.appendChild(d(k, we)[we]()),
            (this.searchContainer = document.createElement('div')),
            (this.searchContainer.style.display = 'none'),
            this.searchContainer.classList.add(
              'ecl-select__multiple-dropdown',
              ...e
            ),
            this.searchContainer.setAttribute(
              'id',
              this.selectMultipleId + '-dropdown'
            ),
            this.selectMultiple.appendChild(this.searchContainer),
            this.textSearch &&
              ((this.search = document.createElement('input')),
              this.search.classList.add('ecl-text-input'),
              this.search.setAttribute('type', 'search'),
              this.search.setAttribute('placeholder', this.textSearch || ''),
              this.search.addEventListener('keyup', this.handleSearch),
              this.search.addEventListener('search', this.handleSearch),
              this.search.addEventListener(
                'keydown',
                this.handleKeyboardOnSearch
              ),
              this.searchContainer.appendChild(this.search)),
            this.textSelectAll &&
              ((t = Array.from(this.select.options).filter(
                (e) => !e.disabled
              ).length),
              (this.selectAll = d(k, f)[f](
                {
                  id: 'all-' + d(k, L)[L](4),
                  text: this.textSelectAll + ' (' + t + ')',
                  extraClass: 'ecl-select__multiple-all',
                },
                this.selectMultipleId
              )),
              this.selectAll.addEventListener(
                'click',
                this.handleClickSelectAll
              ),
              this.selectAll.addEventListener(
                'keypress',
                this.handleClickSelectAll
              ),
              this.selectAll.addEventListener(
                'change',
                this.handleClickSelectAll
              ),
              this.searchContainer.appendChild(this.selectAll)),
            (this.optionsContainer = document.createElement('div')),
            this.optionsContainer.classList.add('ecl-select__multiple-options'),
            this.optionsContainer.setAttribute('aria-live', 'polite'),
            this.searchContainer.appendChild(this.optionsContainer),
            (this.clearAllButtonLabel || this.closeButtonLabel) &&
              ((this.dropDownToolbar = document.createElement('div')),
              this.dropDownToolbar.classList.add('ecl-select-multiple-toolbar'),
              this.closeButtonLabel &&
                ((this.closeButton = document.createElement('button')),
                (this.closeButton.textContent = this.closeButtonLabel),
                this.closeButton.classList.add(
                  'ecl-button',
                  'ecl-button--primary'
                ),
                this.closeButton.addEventListener('click', this.handleEsc),
                this.closeButton.addEventListener(
                  'keydown',
                  this.handleKeyboardOnClose
                ),
                this.dropDownToolbar) &&
                (this.dropDownToolbar.appendChild(this.closeButton),
                this.searchContainer.appendChild(this.dropDownToolbar),
                (this.dropDownToolbar.style.display = 'none')),
              this.clearAllButtonLabel) &&
              ((this.clearAllButton = document.createElement('button')),
              (this.clearAllButton.textContent = this.clearAllButtonLabel),
              this.clearAllButton.classList.add(
                'ecl-button',
                'ecl-button--secondary'
              ),
              this.clearAllButton.addEventListener(
                'click',
                this.handleClickOnClearAll
              ),
              this.clearAllButton.addEventListener(
                'keydown',
                this.handleKeyboardOnClearAll
              ),
              this.dropDownToolbar.appendChild(this.clearAllButton)),
            this.selectAll &&
              this.selectAll.addEventListener(
                'keydown',
                this.handleKeyboardOnSelectAll
              ),
            this.optionsContainer.addEventListener(
              'keydown',
              this.handleKeyboardOnOptions
            ),
            this.select.options && 0 < this.select.options.length
              ? (this.checkboxes = Array.from(this.select.options).map((e) => {
                  var t,
                    i = '',
                    s = '';
                  return (
                    'OPTGROUP' === e.parentNode.tagName &&
                      (v(
                        'fieldset[data-ecl-multiple-group="' +
                          e.parentNode.getAttribute('label') +
                          '"]',
                        this.optionsContainer
                      )
                        ? (i = v(
                            'fieldset[data-ecl-multiple-group="' +
                              e.parentNode.getAttribute('label') +
                              '"]',
                            this.optionsContainer
                          ))
                        : ((i = document.createElement('fieldset')),
                          (t = document.createElement('legend')).classList.add(
                            'ecl-select__multiple-group__title'
                          ),
                          (t.innerHTML = e.parentNode.getAttribute('label')),
                          i.appendChild(t),
                          i.setAttribute(
                            'data-ecl-multiple-group',
                            e.parentNode.getAttribute('label')
                          ),
                          i.classList.add('ecl-select__multiple-group'),
                          this.optionsContainer.appendChild(i))),
                    e.selected &&
                      (d(this, E)[E](1), this.dropDownToolbar) &&
                      (this.dropDownToolbar.style.display = 'flex'),
                    (s = d(k, f)[f](
                      {
                        id: e.value,
                        text: e.text,
                        disabled: e.disabled,
                        selected: e.selected,
                      },
                      this.selectMultipleId
                    )).setAttribute('data-visible', !0),
                    s.classList.contains('ecl-checkbox--disabled') ||
                      (s.addEventListener('click', this.handleClickOption),
                      s.addEventListener(
                        'keydown',
                        this.handleKeyboardOnOption
                      )),
                    (i || this.optionsContainer).appendChild(s),
                    s
                  );
                }))
              : (this.checkboxes = []),
            (this.visibleOptions = this.checkboxes),
            this.select.parentNode.parentNode.insertBefore(
              this.selectMultiple,
              this.select.parentNode.nextSibling
            ),
            this.select.parentNode.classList.add(
              'ecl-select__container--hidden'
            ),
            d(this, C)[C](),
            (this.form = this.element.closest('form')),
            this.form && this.form.addEventListener('reset', this.resetForm),
            document.addEventListener('click', this.handleClickOutside))
          : (d(this, ke)[ke](),
            this.select.addEventListener(
              'keydown',
              this.handleKeyboardOnSelect
            )),
        this.element.setAttribute('data-ecl-auto-initialized', 'true'),
        ECL.components.set(this.element, this);
    }
    update(e) {
      d(this, C)[C](), d(this, E)[E](e);
    }
    setCurrentValue(e, t) {
      if ('replace' !== (t = void 0 === t ? 'replace' : t) && 'add' !== t)
        throw new Error('Invalid operation mode. Use "replace" or "add".');
      var i = 'string' == typeof e ? [e] : e;
      Array.from(this.select.options).forEach((e) => {
        'replace' === t && (e.selected = !1),
          (i.includes(e.value) || i.includes(e.label)) && (e.selected = !0);
      }),
        this.update();
    }
    handleToggle(e) {
      e && e.preventDefault(),
        this.input.classList.toggle('ecl-select--active'),
        'none' === this.searchContainer.style.display
          ? ((this.searchContainer.style.display = 'block'),
            this.input.setAttribute('aria-expanded', !0),
            (this.isOpen = !0))
          : ((this.searchContainer.style.display = 'none'),
            this.input.setAttribute('aria-expanded', !1),
            (this.isOpen = !1)),
        e && ((e = { opened: this.isOpen, e: e }), this.trigger('onToggle', e));
    }
    on(e, t) {
      this.eventManager.on(e, t);
    }
    trigger(e, t) {
      this.eventManager.trigger(e, t);
    }
    destroy() {
      this.input.removeEventListener('keydown', this.handleKeyboardOnSelect),
        this.multiple &&
          (document.removeEventListener('click', this.handleClickOutside),
          this.selectMultiple.removeEventListener(
            'focusout',
            this.handleFocusout
          ),
          this.input.removeEventListener('click', this.handleToggle),
          this.search &&
            (this.search.removeEventListener('keyup', this.handleSearch),
            this.search.removeEventListener(
              'keydown',
              this.handleKeyboardOnSearch
            )),
          this.selectAll &&
            (this.selectAll.removeEventListener(
              'click',
              this.handleClickSelectAll
            ),
            this.selectAll.removeEventListener(
              'keypress',
              this.handleClickSelectAll
            ),
            this.selectAll.removeEventListener(
              'keydown',
              this.handleKeyboardOnSelectAll
            )),
          this.optionsContainer.removeEventListener(
            'keydown',
            this.handleKeyboardOnOptions
          ),
          this.checkboxes.forEach((e) => {
            e.removeEventListener('click', this.handleClickSelectAll),
              e.removeEventListener('click', this.handleClickOption),
              e.removeEventListener('keydown', this.handleKeyboardOnOption);
          }),
          this.closeButton &&
            (this.closeButton.removeEventListener('click', this.handleEsc),
            this.closeButton.removeEventListener(
              'keydown',
              this.handleKeyboardOnClose
            )),
          this.clearAllButton &&
            (this.clearAllButton.removeEventListener(
              'click',
              this.handleClickOnClearAll
            ),
            this.clearAllButton.removeEventListener(
              'keydown',
              this.handleKeyboardOnClearAll
            )),
          this.selectMultiple && this.selectMultiple.remove(),
          this.select.parentNode.classList.remove(
            'ecl-select__container--hidden'
          )),
        this.element &&
          (this.element.removeAttribute('data-ecl-auto-initialized'),
          ECL.components.delete(this.element));
    }
    handleClickOption(e) {
      e.preventDefault(), d(k, y)[y](e);
      var t = e.target.closest('.ecl-checkbox');
      Array.from(this.select.options).forEach((e) => {
        e.text === t.getAttribute('data-select-multiple-value') &&
          (e.getAttribute('selected') || e.selected
            ? ((e.selected = !1),
              this.selectAll &&
                (this.selectAll.querySelector('input').checked = !1))
            : (e.selected = !0));
      }),
        this.update();
    }
    handleClickSelectAll(e) {
      var i, s;
      e.preventDefault(),
        this.selectAll &&
          !this.selectAll.querySelector('input').disabled &&
          ((i = d(k, y)[y](e)),
          (s = Array.from(this.select.options).filter((e) => !e.disabled)),
          Array.from(
            this.searchContainer.querySelectorAll('[data-visible="true"]')
          )
            .filter((e) => !e.querySelector('input').disabled)
            .forEach((t) => {
              t.querySelector('input').checked = i;
              var e = s.find(
                (e) => e.text === t.getAttribute('data-select-multiple-value')
              );
              e && (e.selected = !!i);
            }),
          this.update(),
          this.trigger('onSelectAll', { selected: s }));
    }
    handleFocusout(e) {
      e.relatedTarget &&
      this.selectMultiple &&
      !this.selectMultiple.contains(e.relatedTarget) &&
      'block' === this.searchContainer.style.display
        ? ((this.searchContainer.style.display = 'none'),
          this.input.classList.remove('ecl-select--active'),
          this.input.setAttribute('aria-expanded', !1))
        : !e.relatedTarget ||
          this.selectMultiple ||
          this.select.parentNode.contains(e.relatedTarget) ||
          this.select.blur();
    }
    handleSearch(e) {
      for (
        var t,
          i = this.optionsContainer.offsetHeight,
          s = ((this.visibleOptions = []), e.target.value.toLowerCase()),
          n = {},
          i =
            (0 < i && (this.optionsContainer.style.height = i + 'px'),
            this.checkboxes.forEach((e) => {
              var t;
              e
                .getAttribute('data-select-multiple-value')
                .toLocaleLowerCase()
                .includes(s)
                ? (e.setAttribute('data-visible', !0),
                  (e.style.display = 'flex'),
                  ((t = e.querySelector(
                    '.ecl-checkbox__label-text'
                  )).textContent = t.textContent.replace(
                    '.cls-1{fill:none}',
                    ''
                  )),
                  s &&
                    (t.innerHTML = t.textContent.replace(
                      new RegExp(s + '(?!([^<]+)?<)', 'gi'),
                      '<b>$&</b>'
                    )),
                  this.visibleOptions.push(e))
                : (e.removeAttribute('data-visible'),
                  (e.style.display = 'none'));
            }),
            this.visibleOptions.filter(
              (e) => e.querySelector('input').checked
            )),
          i =
            (!this.selectAll ||
            (0 !== this.visibleOptions.length &&
              this.visibleOptions.length === i.length)
              ? this.selectAll &&
                (this.selectAll.querySelector('input').checked = !0)
              : (this.selectAll.querySelector('input').checked = !1),
            this.searchContainer.querySelector(
              '.ecl-select__multiple-no-results'
            )),
          l = F(
            this.optionsContainer.getElementsByClassName(
              'ecl-select__multiple-group'
            )
          );
        !(a = l()).done;

      ) {
        var a = a.value;
        (a.style.display = 'none'),
          [...a.children]
            .filter((e) => e.classList.contains('ecl-checkbox'))
            .forEach((e) => {
              e.hasAttribute('data-visible') &&
                (e.closest('.ecl-select__multiple-group').style.display =
                  'block');
            });
      }
      0 !== this.visibleOptions.length || i
        ? 0 < this.visibleOptions.length &&
          null !== i &&
          i.parentNode.removeChild(i)
        : ((i = document.createElement('div')),
          (t = document.createElement('span')),
          i.classList.add('ecl-select__multiple-no-results'),
          (t.innerHTML = this.textNoResults),
          i.appendChild(t),
          this.optionsContainer.appendChild(i)),
        0 === s.length
          ? (this.checkboxes.forEach((e) => {
              e.setAttribute('data-visible', !0), (e.style.display = 'flex');
            }),
            this.selectAll &&
              (this.selectAll.classList.remove('ecl-checkbox--disabled'),
              (this.selectAll.querySelector('input').disabled = !1)))
          : 0 !== s.length &&
            this.selectAll &&
            (this.selectAll.classList.add('ecl-checkbox--disabled'),
            (this.selectAll.querySelector('input').disabled = !0)),
        (n =
          0 < this.visibleOptions.length
            ? {
                results: this.visibleOptions.map((e) => {
                  var t = null,
                    e = v('.ecl-checkbox__label-text', e);
                  return (t = e ? e.innerHTML.replace(/<\/?b>/g, '') : t) || '';
                }),
                text: e.target.value.toLowerCase(),
              }
            : { results: 'none', text: e.target.value.toLowerCase() }),
        this.trigger('onSearch', n);
    }
    handleClickOutside(e) {
      e.target &&
        this.selectMultiple &&
        !this.selectMultiple.contains(e.target) &&
        'block' === this.searchContainer.style.display &&
        ((this.searchContainer.style.display = 'none'),
        this.input.classList.remove('ecl-select--active'),
        this.input.setAttribute('aria-expanded', !1));
    }
    handleKeyboardOnSelect(e) {
      switch (e.key) {
        case 'Escape':
          e.preventDefault(), this.handleEsc(e);
          break;
        case ' ':
        case 'Enter':
          this.multiple &&
            (e.preventDefault(),
            this.handleToggle(e),
            (
              this.search || (this.selectAll || this.checkboxes[0]).firstChild
            ).focus());
          break;
        case 'ArrowDown':
          this.multiple &&
            (e.preventDefault(),
            this.isOpen || this.handleToggle(e),
            (
              this.search || (this.selectAll || this.checkboxes[0]).firstChild
            ).focus());
      }
    }
    handleKeyboardOnSelectAll(e) {
      switch (e.key) {
        case 'Escape':
          e.preventDefault(), this.handleEsc(e);
          break;
        case 'ArrowDown':
          e.preventDefault(),
            (0 < this.visibleOptions.length
              ? this.visibleOptions[0].querySelector('input')
              : this.input
            ).focus();
          break;
        case 'ArrowUp':
          e.preventDefault(),
            this.search
              ? this.search.focus()
              : (this.input.focus(), this.handleToggle(e));
          break;
        case 'Tab':
          e.preventDefault(),
            e.shiftKey
              ? this.search && this.search.focus()
              : (0 < this.visibleOptions.length
                  ? this.visibleOptions[0].querySelector('input')
                  : this.input
                ).focus();
      }
    }
    handleKeyboardOnOptions(e) {
      switch (e.key) {
        case 'Escape':
          e.preventDefault(), this.handleEsc(e);
          break;
        case 'ArrowDown':
          e.preventDefault(), d(this, w)[w]('down');
          break;
        case 'ArrowUp':
          e.preventDefault(), d(this, w)[w]('up');
          break;
        case 'Tab':
          e.preventDefault(),
            e.shiftKey ? d(this, w)[w]('up') : d(this, w)[w]('down');
      }
    }
    handleKeyboardOnSearch(e) {
      switch (e.key) {
        case 'Escape':
          e.preventDefault(), this.handleEsc(e);
          break;
        case 'ArrowDown':
          e.preventDefault(),
            (!this.selectAll || this.selectAll.querySelector('input').disabled
              ? 0 < this.visibleOptions.length
                ? this.visibleOptions[0].querySelector('input')
                : this.input
              : this.selectAll.querySelector('input')
            ).focus();
          break;
        case 'ArrowUp':
          e.preventDefault(), this.input.focus(), this.handleToggle(e);
      }
    }
    handleKeyboardOnOption(e) {
      ('Enter' !== e.key && ' ' !== e.key) ||
        (e.preventDefault(), this.handleClickOption(e));
    }
    handleKeyboardOnClearAll(e) {
      switch ((e.preventDefault(), e.key)) {
        case 'Enter':
        case ' ':
          this.handleClickOnClearAll(e),
            this.trigger('onReset', e),
            this.input.focus();
          break;
        case 'ArrowDown':
          this.input.focus();
          break;
        case 'ArrowUp':
          this.closeButton
            ? this.closeButton.focus()
            : 0 < this.visibleOptions.length
              ? this.visibleOptions[this.visibleOptions.length - 1]
                  .querySelector('input')
                  .focus()
              : this.search
                ? this.search.focus()
                : (this.input.focus(), this.handleToggle(e));
          break;
        case 'Tab':
          e.shiftKey
            ? this.closeButton
              ? this.closeButton.focus()
              : 0 < this.visibleOptions.length
                ? this.visibleOptions[this.visibleOptions.length - 1]
                    .querySelector('input')
                    .focus()
                : this.search
                  ? this.search.focus()
                  : (this.input.focus(), this.handleToggle(e))
            : (this.input.focus(), this.handleToggle(e));
      }
    }
    handleKeyboardOnClose(e) {
      switch ((e.preventDefault(), e.key)) {
        case 'Enter':
        case ' ':
          this.handleEsc(e), this.input.focus();
          break;
        case 'ArrowUp':
          0 < this.visibleOptions.length
            ? this.visibleOptions[this.visibleOptions.length - 1]
                .querySelector('input')
                .focus()
            : (this.input.focus(), this.handleToggle(e));
          break;
        case 'ArrowDown':
          this.clearAllButton
            ? this.clearAllButton.focus()
            : (this.input.focus(), this.handleToggle(e));
          break;
        case 'Tab':
          e.shiftKey
            ? 0 < this.visibleOptions.length
              ? this.visibleOptions[this.visibleOptions.length - 1]
                  .querySelector('input')
                  .focus()
              : (this.input.focus(), this.handleToggle(e))
            : this.clearAllButton
              ? this.clearAllButton.focus()
              : (this.input.focus(), this.handleToggle(e));
      }
    }
    handleEsc(e) {
      (this.multiple
        ? (e.preventDefault(),
          (this.searchContainer.style.display = 'none'),
          this.input.setAttribute('aria-expanded', !1),
          this.input.blur(),
          this.input)
        : this.select
      ).classList.remove('ecl-select--active');
    }
    handleClickOnClearAll(e) {
      e.preventDefault(),
        Array.from(this.select.options).forEach((e) => {
          (this.selectMultiple
            .querySelector('[data-select-multiple-value="' + e.text + '"]')
            .querySelector('.ecl-checkbox__input').checked = !1),
            (e.selected = !1);
        }),
        this.selectAll &&
          (this.selectAll.querySelector('.ecl-checkbox__input').checked = !1),
        this.update(0),
        this.trigger('onReset', e);
    }
    resetForm() {
      this.multiple &&
        setTimeout(() => {
          Array.from(this.select.options).forEach((e) => {
            this.selectMultiple
              .querySelector('[data-select-multiple-value="' + e.text + '"]')
              .querySelector('.ecl-checkbox__input').checked
              ? (e.selected = !0)
              : (e.selected = !1);
          }),
            this.update(0);
        }, 10);
    }
  }
  function Se(e) {
    var t = 0;
    0 < e
      ? (this.selectionCount.querySelector('span').innerHTML += e)
      : (t = Array.from(this.select.options).filter((e) => e.selected).length),
      0 < t
        ? ((this.selectionCount.querySelector('span').innerHTML = t),
          this.selectionCount.classList.add(
            'ecl-select-multiple-selections-counter--visible'
          ),
          this.dropDownToolbar && (this.dropDownToolbar.style.display = 'flex'))
        : (this.selectionCount.classList.remove(
            'ecl-select-multiple-selections-counter--visible'
          ),
          this.dropDownToolbar &&
            (this.dropDownToolbar.style.display = 'none')),
      100 <= t &&
        this.selectionCount.classList.add(
          'ecl-select-multiple-selections-counter--xxl'
        );
  }
  function Ae() {
    Array.from(this.select.options).forEach((e) => {
      var t, i;
      'OPTGROUP' === e.parentNode.tagName &&
        ((t = e.parentNode.getAttribute('label')),
        (i = e.getAttribute('label') || e.textContent),
        t) &&
        i &&
        e.setAttribute('aria-label', i + ' - ' + t);
    });
  }
  function xe() {
    var e = Array.from(this.select.options)
      .filter((e) => e.selected)
      .map((e) => e.text)
      .join(', ');
    (this.input.innerHTML = e || this.textDefault || ''),
      '' !== e && this.label
        ? this.label.setAttribute('aria-label', this.label.innerText + ' ' + e)
        : '' === e && this.label && this.label.removeAttribute('aria-label'),
      this.trigger('onSelection', { selected: e }),
      this.select.dispatchEvent(new window.Event('change', { bubbles: !0 }));
  }
  function _e(e) {
    var t = document.activeElement,
      i = t.parentElement.parentElement.classList.contains(
        'ecl-select__multiple-group'
      )
        ? Array.from(
            t.parentElement.parentElement.parentElement.querySelectorAll(
              '.ecl-checkbox__input'
            )
          )
        : Array.from(
            t.parentElement.parentElement.querySelectorAll(
              '.ecl-checkbox__input'
            )
          ),
      t = i.indexOf(t);
    'down' === e
      ? 0 <
        (e = i
          .splice(t + 1, i.length)
          .filter(
            (e) => !e.disabled && 'none' !== e.parentElement.style.display
          )).length
        ? e[0].focus()
        : this.dropDownToolbar &&
          'flex' === this.dropDownToolbar.style.display &&
          this.dropDownToolbar.firstChild.focus()
      : 0 <
          (e = i
            .splice(0, t)
            .filter(
              (e) => !e.disabled && 'none' !== e.parentElement.style.display
            )).length
        ? e[e.length - 1].focus()
        : ((this.optionsContainer.scrollTop = 0),
          this.selectAll && !this.selectAll.querySelector('input').disabled
            ? this.selectAll.querySelector('input').focus()
            : this.search
              ? this.search.focus()
              : (this.input.focus(), this.handleToggle()));
  }
  (m = k),
    Object.defineProperty(k, L, {
      value: function (e) {
        return Math.random().toString(36).substr(2, e);
      },
    }),
    Object.defineProperty(k, y, {
      value: function (e) {
        return (
          ((e = e.target
            .closest('.ecl-checkbox')
            .querySelector('input')).checked = !e.checked),
          e.checked
        );
      },
    }),
    Object.defineProperty(k, we, {
      value: function () {
        var e = document.createElement('div'),
          t =
            (e.classList.add('ecl-select__icon'),
            document.createElement('button')),
          i =
            (t.classList.add(
              'ecl-button',
              'ecl-button--ghost',
              'ecl-button--icon-only'
            ),
            t.setAttribute('tabindex', '-1'),
            document.createElement('span'));
        i.classList.add('ecl-button__container');
        (s = document.createElement('span')).classList.add('ecl-button__label'),
          (s.textContent = 'Toggle dropdown'),
          i.appendChild(s);
        var s = d(m, b)[b](
          '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill-rule="evenodd" d="m45 30.12-2.73 2.82-18.24-18.36L5.73 33 3 30.18 24.03 9z" clip-rule="evenodd"/></svg>',
          'ecl-icon ecl-icon--xs ecl-icon--rotate-180'
        );
        return i.appendChild(s), t.appendChild(i), e.appendChild(t), e;
      },
    }),
    Object.defineProperty(k, f, {
      value: function (e, t) {
        var i, s, n, l, a, o, r, h, c;
        return e &&
          t &&
          ((i = e.id),
          (s = e.text),
          (n = e.disabled),
          (l = e.selected),
          (e = e.extraClass),
          i) &&
          s
          ? ((a = document.createElement('div')),
            (o = document.createElement('input')),
            (r = document.createElement('label')),
            (h = document.createElement('span')),
            (c = document.createElement('span')),
            e && a.classList.add(e),
            l && o.setAttribute('checked', !0),
            n &&
              (a.classList.add('ecl-checkbox--disabled'),
              h.classList.add('ecl-checkbox__box--disabled'),
              o.setAttribute('disabled', n)),
            a.classList.add('ecl-checkbox'),
            a.setAttribute('data-select-multiple-value', s),
            o.classList.add('ecl-checkbox__input'),
            o.setAttribute('type', 'checkbox'),
            o.setAttribute('id', t + '-' + i),
            o.setAttribute('name', t + '-' + i),
            a.appendChild(o),
            r.classList.add('ecl-checkbox__label'),
            r.setAttribute('for', t + '-' + i),
            h.classList.add('ecl-checkbox__box'),
            h.setAttribute('aria-hidden', !0),
            h.appendChild(
              d(m, b)[b](
                '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill-rule="evenodd" d="M19.53 36.69 6 23.19l2.13-2.13 11.4 11.4L39.99 12l2.13 2.13z"/></svg>',
                'ecl-icon ecl-icon--s ecl-checkbox__icon'
              )
            ),
            r.appendChild(h),
            c.classList.add('ecl-checkbox__label-text'),
            (c.innerHTML = s),
            r.appendChild(c),
            a.appendChild(r),
            a)
          : '';
      },
    }),
    Object.defineProperty(k, b, {
      value: function (e, t) {
        var i = document.createElement('div');
        return (
          (i.innerHTML = e),
          (e = i.children[0]).removeAttribute('height'),
          e.removeAttribute('width'),
          e.setAttribute('focusable', !1),
          e.setAttribute('aria-hidden', !0),
          e.setAttribute('class', t),
          e
        );
      },
    });
  class D {
    static autoInit(e, t) {
      (t = (void 0 === t ? {} : t).TABLE),
        (t = void 0 === t ? {} : t),
        (t = new D(e, t));
      return t.init(), (e.ECLTable = t);
    }
    constructor(e, t) {
      var t = void 0 === t ? {} : t,
        i = t.sortSelector,
        i = void 0 === i ? '[data-ecl-table-sort-toggle]' : i,
        t = t.sortLabelSelector,
        t = void 0 === t ? 'data-ecl-table-sort-label' : t;
      if (
        ((this.handleClickOnSort = (l) => (e) => {
          e.preventDefault();
          for (
            var e = l.closest('table'),
              i = v('tbody', e),
              t = l.getAttribute('aria-sort'),
              s = 0,
              n = l.previousElementSibling;
            n;

          )
            (s += n.getAttribute('colspan')
              ? Number(n.getAttribute('colspan'))
              : 1),
              (n = n.previousElementSibling);
          (e = (s, n) => (e, t) => {
            return (
              (i = (n ? e : t).children[s].textContent),
              (t = (n ? t : e).children[s].textContent),
              '' === i || '' === t || Number.isNaN(+i) || Number.isNaN(+t)
                ? i.toString().localeCompare(t)
                : i - t
            );
            var i;
          }),
            (t =
              'descending' === t
                ? ([...p('tr', i)].forEach((e, t) => {
                    t = v("[data-ecl-table-order='" + t + "']", i);
                    i.appendChild(t);
                  }),
                  null)
                : ([...p('tr', i)]
                    .sort(e(s, 'ascending' !== t))
                    .forEach((e) => i.appendChild(e)),
                  'ascending' === t ? 'descending' : 'ascending'));
          this.sortHeadings.forEach((e) => {
            t && e === l
              ? e.setAttribute('aria-sort', t)
              : e.removeAttribute('aria-sort');
          });
        }),
        !e || e.nodeType !== Node.ELEMENT_NODE)
      )
        throw new TypeError(
          'DOM element should be given to initialize this widget.'
        );
      (this.element = e),
        (this.sortSelector = i),
        (this.sortLabelSelector = t),
        (this.sortHeadings = null),
        (this.handleClickOnSort = this.handleClickOnSort.bind(this));
    }
    static createSortIcon(e) {
      var t = document.createElement('span'),
        t =
          ((t.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill-rule="evenodd" d="m12 33 12-15 12 15z"/></svg>'),
          t.children[0]);
      return (
        t.removeAttribute('height'),
        t.removeAttribute('width'),
        t.setAttribute('focusable', !1),
        t.setAttribute('aria-hidden', !0),
        t.setAttribute('class', 'ecl-table__icon ecl-icon ecl-icon--xs ' + e),
        t
      );
    }
    init() {
      if (!ECL) throw new TypeError('Called init but ECL is not present');
      (ECL.components = ECL.components || new Map()),
        (this.sortHeadings = p(this.sortSelector, this.element)),
        this.sortHeadings &&
          this.sortHeadings.forEach((t) => {
            var e = document.createElement('button');
            e.classList.add('ecl-table__arrow'),
              this.element.hasAttribute(this.sortLabelSelector) &&
                e.setAttribute(
                  'aria-label',
                  this.element.getAttribute(this.sortLabelSelector)
                ),
              e.appendChild(D.createSortIcon('ecl-table__icon-up')),
              e.appendChild(D.createSortIcon('ecl-table__icon-down')),
              t.appendChild(e),
              t.addEventListener('click', (e) => this.handleClickOnSort(t)(e));
          });
      var e = v('tbody', this.element);
      [...p('tr', e)].forEach((e, t) => {
        e.setAttribute('data-ecl-table-order', t);
      }),
        this.element.setAttribute('data-ecl-auto-initialized', 'true'),
        ECL.components.set(this.element, this);
    }
    destroy() {
      this.sortHeadings &&
        this.sortHeadings.forEach((t) => {
          t.removeEventListener('click', (e) => this.handleClickOnSort(t)(e));
        }),
        this.element &&
          (this.element.removeAttribute('data-ecl-auto-initialized'),
          ECL.components.delete(this.element));
    }
  }
  return (
    (e.Accordion = class Oe {
      static autoInit(e, t) {
        return (
          (t = void 0 === (t = (void 0 === t ? {} : t).ACCORDION) ? {} : t),
          (t = new Oe(e, t)).init(),
          (e.ECLAccordion = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).toggleSelector)
              ? '[data-ecl-accordion-toggle]'
              : i,
          s = void 0 === (s = t.iconSelector) ? '[data-ecl-accordion-icon]' : s,
          t = void 0 === (t = t.attachClickListener) || t;
        if (
          ((this.supportedEvents = ['onToggle']),
          !e || e.nodeType !== Node.ELEMENT_NODE)
        )
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.eventManager = new S()),
          (this.toggleSelector = i),
          (this.iconSelector = s),
          (this.attachClickListener = t),
          (this.toggles = null),
          (this.forceClose = !1),
          (this.target = null),
          (this.handleClickOnToggle = this.handleClickOnToggle.bind(this));
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        (ECL.components = ECL.components || new Map()),
          (this.toggles = p(this.toggleSelector, this.element)),
          this.attachClickListener &&
            this.toggles &&
            this.toggles.forEach((e) => {
              e.addEventListener('click', () => this.handleClickOnToggle(e));
            }),
          this.element.setAttribute('data-ecl-auto-initialized', 'true'),
          ECL.components.set(this.element, this);
      }
      on(e, t) {
        this.eventManager.on(e, t);
      }
      trigger(e, t) {
        this.eventManager.trigger(e, t);
      }
      destroy() {
        this.attachClickListener &&
          this.toggles &&
          this.toggles.forEach((e) => {
            e.replaceWith(e.cloneNode(!0));
          }),
          this.element &&
            (this.element.removeAttribute('data-ecl-auto-initialized'),
            ECL.components.delete(this.element));
      }
      handleClickOnToggle(e) {
        var t = !1,
          i = v('#' + e.getAttribute('aria-controls'), this.element);
        if (!i)
          throw new TypeError(
            'Target has to be provided for accordion (aria-controls)'
          );
        var s =
          !0 === this.forceClose || 'true' === e.getAttribute('aria-expanded');
        e.setAttribute('aria-expanded', s ? 'false' : 'true'),
          s ? (i.hidden = !0) : (t = !(i.hidden = !1)),
          this.trigger('onToggle', { item: i, isOpening: t });
      }
    }),
    (e.Banner = class Te {
      static autoInit(e, t) {
        return (
          (t = void 0 === (t = (void 0 === t ? {} : t).BANNER) ? {} : t),
          (t = new Te(e, t)).init(),
          (e.ECLBanner = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).bannerContainer)
              ? '[data-ecl-banner-container]'
              : i,
          s = void 0 === (s = t.bannerFooter) ? '[data-ecl-banner-footer]' : s,
          n = void 0 === (n = t.bannerVPadding) ? '8' : n,
          l = void 0 === (l = t.bannerPicture) ? '[data-ecl-banner-image]' : l,
          a = void 0 === (a = t.bannerVideo) ? '[data-ecl-banner-video]' : a,
          o = void 0 === (o = t.bannerPlay) ? '[data-ecl-banner-play]' : o,
          r = void 0 === (r = t.bannerPause) ? '[data-ecl-banner-pause]' : r,
          h = void 0 === (h = t.breakpoint) ? '996' : h,
          c = void 0 === (c = t.attachResizeListener) || c,
          t = void 0 === (t = t.maxIterations) ? 10 : t;
        if (
          ((this.supportedEvents = [
            'onCtaClick',
            'onPlayClick',
            'onPauseClick',
          ]),
          !e || e.nodeType !== Node.ELEMENT_NODE)
        )
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.eventManager = new S()),
          (this.bannerVPadding = n),
          (this.resizeTimer = null),
          (this.bannerContainer = v(i, this.element)),
          (this.bannerFooter = v(s, this.element)),
          (this.bannerPicture = v(l, this.element)),
          (this.bannerVideo = v(a, this.element)),
          (this.bannerPlay = v(o, this.element)),
          (this.bannerPause = v(r, this.element)),
          (this.bannerImage =
            !!this.bannerPicture && v('img', this.bannerPicture)),
          (this.bannerCTA =
            !!this.bannerPicture && v('.ecl-banner__cta', this.element)),
          (this.breakpoint = h),
          (this.attachResizeListener = c),
          (this.maxIterations = t),
          (this.setBannerHeight = this.setBannerHeight.bind(this)),
          (this.checkViewport = this.checkViewport.bind(this)),
          (this.resetBannerHeight = this.resetBannerHeight.bind(this)),
          (this.handleResize = this.handleResize.bind(this)),
          (this.waitForAspectRatioToBeDefined =
            this.waitForAspectRatioToBeDefined.bind(this)),
          (this.setHeight = this.setHeight.bind(this));
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        (ECL.components = ECL.components || new Map()),
          (this.defaultRatio = () =>
            this.element.classList.contains('ecl-banner--xs')
              ? '6/1'
              : this.element.classList.contains('ecl-banner--s')
                ? '5/1'
                : this.element.classList.contains('ecl-banner--l')
                  ? '3/1'
                  : '4/1'),
          this.attachResizeListener &&
            window.addEventListener('resize', this.handleResize),
          this.bannerCTA &&
            this.bannerCTA.addEventListener('click', (e) =>
              this.handleCtaClick(e)
            ),
          this.bannerPlay &&
            (this.bannerPlay.addEventListener('click', (e) =>
              this.handlePlayClick(e)
            ),
            (this.bannerPlay.style.display = 'none')),
          this.bannerPause &&
            (this.bannerPause.addEventListener('click', (e) =>
              this.handlePauseClick(e)
            ),
            (this.bannerPause.style.display = 'flex')),
          this.checkViewport(),
          this.element.setAttribute('data-ecl-auto-initialized', 'true'),
          ECL.components.set(this.element, this);
      }
      on(e, t) {
        this.eventManager.on(e, t);
      }
      trigger(e, t) {
        this.eventManager.trigger(e, t);
      }
      waitForAspectRatioToBeDefined() {
        this.attemptCounter = (this.attemptCounter || 0) + 1;
        var e = '';
        this.bannerVideo
          ? 0 < this.bannerVideo.videoWidth && (e = this.defaultRatio())
          : this.bannerImage &&
            (e = getComputedStyle(this.bannerImage).getPropertyValue(
              '--css-aspect-ratio'
            )),
          (void 0 === e || '' === e) && this.maxIterations > this.attemptCounter
            ? setTimeout(() => this.waitForAspectRatioToBeDefined(), 100)
            : this.setHeight(e);
      }
      setHeight(e) {
        var t, i, s;
        this.bannerContainer &&
          ((t =
            this.bannerContainer.offsetHeight +
            2 * parseInt(this.bannerVPadding, 10)),
          (i = parseInt(
            getComputedStyle(this.element).getPropertyValue('width'),
            10
          )),
          (s = (e = e.split('/').map(Number))[0]),
          (i * e[1]) / s < t
            ? (this.bannerImage &&
                (this.bannerImage.style.aspectRatio = 'auto'),
              this.bannerVideo && (this.bannerVideo.style.aspectRatio = 'auto'),
              (this.element.style.height = t + 'px'))
            : this.resetBannerHeight()),
          this.bannerFooter &&
            this.element.style.setProperty(
              '--banner-footer-height',
              this.bannerFooter.offsetHeight + 'px'
            );
      }
      setBannerHeight() {
        this.bannerImage || this.bannerVideo
          ? this.waitForAspectRatioToBeDefined()
          : this.setHeight(this.defaultRatio());
      }
      resetBannerHeight() {
        var e;
        this.bannerImage &&
          ((e = getComputedStyle(this.bannerImage)),
          (this.bannerImage.style.aspectRatio =
            e.getPropertyValue('--css-aspect-ratio'))),
          this.bannerVideo &&
            (this.bannerVideo.style.aspectRatio = this.defaultRatio()),
          (this.element.style.height = 'auto'),
          this.bannerFooter &&
            this.element.style.setProperty(
              '--banner-footer-height',
              this.bannerFooter.offsetHeight + 'px'
            );
      }
      checkViewport() {
        window.innerWidth > this.breakpoint
          ? this.setBannerHeight()
          : this.resetBannerHeight();
      }
      handleResize() {
        clearTimeout(this.resizeTimer),
          (this.resizeTimer = setTimeout(() => {
            this.checkViewport();
          }, 200));
      }
      handleCtaClick(e) {
        var t = null,
          i =
            ((i = e.target.closest('a')) && (t = i.getAttribute('href')),
            { item: this.bannerCTA, target: t || e.target });
        this.trigger('onCtaClick', i);
      }
      handlePlayClick() {
        this.bannerVideo && this.bannerVideo.play(),
          (this.bannerPlay.style.display = 'none'),
          this.bannerPause &&
            ((this.bannerPause.style.display = 'flex'),
            this.bannerPause.focus());
        var e = { item: this.bannerPlay };
        this.trigger('onPlayClick', e);
      }
      handlePauseClick() {
        this.bannerVideo && this.bannerVideo.pause(),
          (this.bannerPause.style.display = 'none'),
          this.bannerPlay &&
            ((this.bannerPlay.style.display = 'flex'), this.bannerPlay.focus());
        var e = { item: this.bannerPause };
        this.trigger('onPauseClick', e);
      }
      destroy() {
        this.resetBannerHeight(),
          this.element.removeAttribute('data-ecl-auto-initialized'),
          ECL.components.delete(this.element),
          this.attachResizeListener &&
            window.removeEventListener('resize', this.handleResize),
          this.bannerCTA &&
            this.bannerCTA.removeEventListener('click', this.handleCtaClick),
          this.bannerPlay &&
            this.bannerPlay.removeEventListener('click', this.handlePlayClick),
          this.bannerPause &&
            this.bannerPause.removeEventListener(
              'click',
              this.handlePauseClick
            );
      }
    }),
    (e.Breadcrumb = K),
    (e.Carousel = class Pe {
      static autoInit(e, t) {
        return (
          (t = void 0 === (t = (void 0 === t ? {} : t).CAROUSEL) ? {} : t),
          (t = new Pe(e, t)).init(),
          (e.ECLCarousel = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).playSelector)
              ? '.ecl-carousel__play'
              : i,
          s = void 0 === (s = t.pauseSelector) ? '.ecl-carousel__pause' : s,
          n =
            void 0 === (n = t.containerClass) ? '.ecl-carousel__container' : n,
          l = void 0 === (l = t.slidesClass) ? '.ecl-carousel__slides' : l,
          a = void 0 === (a = t.slideClass) ? '.ecl-carousel__slide' : a,
          o =
            void 0 === (o = t.currentSlideClass) ? '.ecl-carousel__current' : o,
          r =
            void 0 === (r = t.navigationItemsClass)
              ? '.ecl-carousel__navigation-item'
              : r,
          h = void 0 === (h = t.controlsClass) ? '.ecl-carousel__controls' : h,
          c = void 0 === (c = t.attachClickListener) || c,
          t = void 0 === (t = t.attachResizeListener) || t;
        if (!e || e.nodeType !== Node.ELEMENT_NODE)
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.playSelector = i),
          (this.pauseSelector = s),
          (this.containerClass = n),
          (this.slidesClass = l),
          (this.slideClass = a),
          (this.currentSlideClass = o),
          (this.navigationItemsClass = r),
          (this.controlsClass = h),
          (this.attachClickListener = c),
          (this.attachResizeListener = t),
          (this.container = null),
          (this.slides = null),
          (this.btnPlay = null),
          (this.btnPause = null),
          (this.index = 1),
          (this.total = 0),
          (this.allowShift = !0),
          (this.activeNav = null),
          (this.autoPlay = null),
          (this.autoPlayInterval = null),
          (this.hoverAutoPlay = null),
          (this.resizeTimer = null),
          (this.posX1 = 0),
          (this.posX2 = 0),
          (this.posInitial = 0),
          (this.posFinal = 0),
          (this.threshold = 80),
          (this.navigationItems = null),
          (this.navigation = null),
          (this.controls = null),
          (this.direction = 'ltr'),
          (this.cloneFirstSLide = null),
          (this.cloneLastSLide = null),
          (this.executionCount = 0),
          (this.maxExecutions = 5),
          (this.slideWidth = 0),
          (this.handleAutoPlay = this.handleAutoPlay.bind(this)),
          (this.handleMouseOver = this.handleMouseOver.bind(this)),
          (this.handleMouseOut = this.handleMouseOut.bind(this)),
          (this.shiftSlide = this.shiftSlide.bind(this)),
          (this.checkIndex = this.checkIndex.bind(this)),
          (this.moveSlides = this.moveSlides.bind(this)),
          (this.handleResize = this.handleResize.bind(this)),
          (this.dragStart = this.dragStart.bind(this)),
          (this.dragEnd = this.dragEnd.bind(this)),
          (this.dragAction = this.dragAction.bind(this)),
          (this.handleFocus = this.handleFocus.bind(this)),
          (this.handleKeyboardOnPlay = this.handleKeyboardOnPlay.bind(this)),
          (this.handleKeyboardOnBullets =
            this.handleKeyboardOnBullets.bind(this)),
          (this.checkBannerHeights = this.checkBannerHeights.bind(this)),
          (this.resetBannerHeights = this.resetBannerHeights.bind(this));
      }
      init() {
        var e, t;
        if (ECL)
          return (
            (ECL.components = ECL.components || new Map()),
            (this.element.style.opacity = 0),
            (this.btnPlay = v(this.playSelector, this.element)),
            (this.btnPause = v(this.pauseSelector, this.element)),
            (this.slidesContainer = v(this.slidesClass, this.element)),
            (this.container = v(this.containerClass, this.element)),
            (this.navigation = v('.ecl-carousel__navigation', this.element)),
            (this.navigationItems = p(this.navigationItemsClass, this.element)),
            (this.controls = v(this.controlsClass, this.element)),
            (this.currentSlide = v(this.currentSlideClass, this.element)),
            (this.direction = getComputedStyle(this.element).direction),
            (this.slides = p(this.slideClass, this.element)),
            (this.total = this.slides.length),
            this.total <= 1
              ? (this.controls && (this.controls.style.display = 'none'),
                this.slidesContainer &&
                  (this.slidesContainer.style.display = 'block'),
                !1)
              : ((t = this.slides[0]),
                (e = this.slides[this.slides.length - 1]),
                (this.cloneFirstSlide = t.cloneNode(!0)),
                (this.cloneLastSlide = e.cloneNode(!0)),
                this.slidesContainer.appendChild(this.cloneFirstSlide),
                this.slidesContainer.insertBefore(this.cloneLastSlide, t),
                (e = new ECL.Banner(this.cloneFirstSlide.firstElementChild)),
                (t = new ECL.Banner(this.cloneLastSlide.firstElementChild)),
                e.init(),
                t.init(),
                (this.slides = p(this.slideClass, this.element)),
                this.handleResize(),
                this.navigationItems &&
                  this.navigationItems.forEach((e, t) => {
                    e.addEventListener(
                      'click',
                      this.shiftSlide.bind(this, t + 1, !0)
                    );
                  }),
                this.navigation &&
                  this.navigation.addEventListener(
                    'keydown',
                    this.handleKeyboardOnBullets
                  ),
                this.attachClickListener &&
                  this.btnPlay &&
                  this.btnPause &&
                  (this.btnPlay.addEventListener('click', this.handleAutoPlay),
                  this.btnPause.addEventListener('click', this.handleAutoPlay)),
                this.btnPlay &&
                  this.btnPlay.addEventListener(
                    'keydown',
                    this.handleKeyboardOnPlay
                  ),
                this.slidesContainer &&
                  (this.slidesContainer.addEventListener(
                    'mouseover',
                    this.handleMouseOver
                  ),
                  this.slidesContainer.addEventListener(
                    'mouseout',
                    this.handleMouseOut
                  ),
                  this.slidesContainer.addEventListener(
                    'touchstart',
                    this.dragStart
                  ),
                  this.slidesContainer.addEventListener(
                    'touchend',
                    this.dragEnd
                  ),
                  this.slidesContainer.addEventListener(
                    'touchmove',
                    this.dragAction
                  ),
                  this.slidesContainer.addEventListener(
                    'transitionend',
                    this.checkIndex
                  )),
                this.container &&
                  this.container.addEventListener(
                    'focus',
                    this.handleFocus,
                    !0
                  ),
                this.attachResizeListener &&
                  window.addEventListener('resize', this.handleResize),
                this.element.setAttribute('data-ecl-auto-initialized', 'true'),
                ECL.components.set(this.element, this),
                this)
          );
        throw new TypeError('Called init but ECL is not present');
      }
      destroy() {
        this.cloneFirstSLide &&
          this.cloneLastSLide &&
          (this.cloneFirstSLide.remove(), this.cloneLastSLide.remove()),
          this.btnPlay && this.btnPlay.replaceWith(this.btnPlay.cloneNode(!0)),
          this.btnPause &&
            this.btnPause.replaceWith(this.btnPause.cloneNode(!0)),
          this.slidesContainer &&
            (this.slidesContainer.removeEventListener(
              'mouseover',
              this.handleMouseOver
            ),
            this.slidesContainer.removeEventListener(
              'mouseout',
              this.handleMouseOut
            ),
            this.slidesContainer.removeEventListener(
              'touchstart',
              this.dragStart
            ),
            this.slidesContainer.removeEventListener('touchend', this.dragEnd),
            this.slidesContainer.removeEventListener(
              'touchmove',
              this.dragAction
            ),
            this.slidesContainer.removeEventListener(
              'transitionend',
              this.checkIndex
            )),
          this.container &&
            this.container.removeEventListener('focus', this.handleFocus, !0),
          this.navigationItems &&
            this.navigationItems.forEach((e) => {
              e.replaceWith(e.cloneNode(!0));
            }),
          this.attachResizeListener &&
            window.removeEventListener('resize', this.handleResize),
          this.autoPlayInterval &&
            (clearInterval(this.autoPlayInterval), (this.autoPlay = null)),
          this.element &&
            (this.element.removeAttribute('data-ecl-auto-initialized'),
            ECL.components.delete(this.element));
      }
      checkBannerHeights() {
        var e, i;
        (this.executionCount += 1),
          this.executionCount > this.maxExecutions
            ? (clearInterval(this.intervalId), (this.executionCount = 0))
            : ((e = this.slides
                .map((e) => {
                  var e = v('.ecl-banner', e),
                    t = (i = ECL.components.get(e)).defaultRatio(),
                    i = (i.setHeight(t), parseInt(e.style.height, 10));
                  return 'auto' === e.style.height
                    ? 0
                    : Number.isNaN(i) || 100 === i
                      ? 1
                      : i;
                })
                .filter((e) => void 0 !== e)),
              (i = Math.max(...e)),
              ((e.length === this.slides.length && 0 === i) || 1 < i) &&
                (clearInterval(this.intervalId), 0 < i) &&
                ((this.executionCount = 0),
                this.slides.forEach((e) => {
                  var t = null;
                  (e = v('.ecl-banner', e)) &&
                    ((t = v('img', e)), (e.style.height = i + 'px')),
                    t && (t.style.aspectRatio = 'auto');
                })));
      }
      resetBannerHeights() {
        this.slides.forEach((e) => {
          var t,
            i = v('.ecl-banner', e),
            e = null,
            s = null;
          i &&
            ((i.style.height = ''),
            (e = v('img', i)),
            (s = v('video', i)),
            (t = v('.ecl-banner__credit', i)),
            e && (e.style.aspectRatio = ''),
            s && (s.style.aspectRatio = ''),
            t) &&
            setTimeout(() => {
              i.style.setProperty(
                '--banner-footer-height',
                t.offsetHeight + 'px'
              );
            }, 100);
        });
      }
      dragStart(e) {
        (e = e || window.event),
          (this.posInitial = this.slidesContainer.offsetLeft),
          'touchstart' === e.type && (this.posX1 = e.touches[0].clientX);
      }
      dragAction(e) {
        'touchmove' === (e = e || window.event).type &&
          (e.preventDefault(),
          (this.posX2 = this.posX1 - e.touches[0].clientX),
          (this.posX1 = e.touches[0].clientX)),
          (this.slidesContainer.style.left =
            this.slidesContainer.offsetLeft - this.posX2 + 'px');
      }
      dragEnd() {
        (this.posFinal = this.slidesContainer.offsetLeft),
          this.posFinal - this.posInitial < -this.threshold
            ? this.shiftSlide('next', !0)
            : this.posFinal - this.posInitial > this.threshold
              ? this.shiftSlide('prev', !0)
              : (this.slidesContainer.style.left = this.posInitial + 'px');
      }
      shiftSlide(e, t) {
        this.allowShift &&
          ((this.index =
            'number' == typeof e
              ? e
              : 'next' === e
                ? this.index + 1
                : this.index - 1),
          this.moveSlides(!0)),
          t && this.autoPlay && this.handleAutoPlay(),
          (this.allowShift = !1);
      }
      moveSlides(e) {
        var t = this.slideWidth * this.index;
        (this.slidesContainer.style.transitionDuration = e ? '0.4s' : '0s'),
          'rtl' === this.direction
            ? (this.slidesContainer.style.right = '-' + t + 'px')
            : (this.slidesContainer.style.left = '-' + t + 'px');
      }
      checkIndex(e) {
        (e && 'left' !== e.propertyName) ||
          (0 === this.index && (this.index = this.total),
          this.index === this.total + 1 && (this.index = 1),
          this.moveSlides(!1),
          this.currentSlide && (this.currentSlide.textContent = this.index),
          this.slides &&
            this.slides.forEach((e, t) => {
              var i = v('.ecl-link--cta', e);
              this.index === t
                ? (e.removeAttribute('inert', 'true'),
                  i && i.removeAttribute('tabindex', -1))
                : (e.setAttribute('inert', 'true'),
                  i && i.setAttribute('tabindex', -1));
            }),
          this.navigationItems &&
            this.navigationItems.forEach((e, t) => {
              this.index === t + 1
                ? (e.setAttribute('aria-current', 'true'),
                  e.removeAttribute('tabindex', -1))
                : (e.removeAttribute('aria-current', 'true'),
                  e.setAttribute('tabindex', -1));
            }),
          (this.allowShift = !0));
      }
      handleAutoPlay() {
        var e;
        this.autoPlay
          ? (clearInterval(this.autoPlayInterval),
            (this.autoPlay = !1),
            (e = document.activeElement === this.btnPause),
            (this.btnPlay.style.display = 'flex'),
            (this.btnPause.style.display = 'none'),
            e && this.btnPlay.focus())
          : ((this.autoPlayInterval = setInterval(() => {
              this.shiftSlide('next');
            }, 5e3)),
            (this.autoPlay = !0),
            (e = document.activeElement === this.btnPlay),
            (this.btnPlay.style.display = 'none'),
            (this.btnPause.style.display = 'flex'),
            e && this.btnPause.focus());
      }
      handleMouseOver() {
        return (
          (this.hoverAutoPlay = this.autoPlay),
          this.hoverAutoPlay && this.handleAutoPlay(),
          this
        );
      }
      handleMouseOut() {
        return this.hoverAutoPlay && this.handleAutoPlay(), this;
      }
      handleResize() {
        var e = Math.max(
          document.documentElement.clientWidth || 0,
          window.innerWidth || 0
        );
        clearInterval(this.intervalId),
          clearTimeout(this.resizeTimer),
          (this.resizeTimer = setTimeout(() => {
            998 <= e
              ? (this.intervalId = setInterval(this.checkBannerHeights, 100))
              : this.resetBannerHeights(),
              (this.slideWidth = this.slides[0].scrollWidth),
              this.checkIndex(),
              setTimeout(() => {
                this.element.style.opacity = 1;
              }, 250);
          }, 250)),
          1140 <= e && e <= 1260
            ? this.container.classList.add('ecl-carousel-container--padded')
            : this.container.classList.remove('ecl-carousel-container--padded'),
          ((e <= 768 && this.autoPlay) ||
            (768 < e && null === this.autoPlay)) &&
            this.handleAutoPlay();
      }
      handleKeyboardOnPlay(e) {
        if ('Tab' !== e.key || !e.shiftKey)
          switch (e.key) {
            case 'Tab':
            case 'ArrowRight':
              e.preventDefault(),
                (this.activeNav = v(
                  this.navigationItemsClass + '[aria-current="true"]'
                )),
                this.activeNav && this.activeNav.focus(),
                this.autoPlay && this.handleAutoPlay();
          }
      }
      handleKeyboardOnBullets(e) {
        var t = document.activeElement;
        switch (e.key) {
          case 'ArrowRight':
            t.nextSibling &&
              (e.preventDefault(),
              this.shiftSlide('next', !0),
              setTimeout(() => t.nextSibling.focus(), 400));
            break;
          case 'ArrowLeft':
            t.previousSibling
              ? (this.shiftSlide('prev', !0),
                setTimeout(() => t.previousSibling.focus(), 400))
              : this.btnPlay.focus();
        }
      }
      handleFocus(e) {
        return (
          (e = e.target) &&
            e.contains(document.activeElement) &&
            this.autoPlay &&
            this.handleAutoPlay(),
          this
        );
      }
    }),
    (e.CategoryFilter = class Ie {
      static autoInit(e, t) {
        return (
          (t =
            void 0 === (t = (void 0 === t ? {} : t).CATEGORY_FILTER) ? {} : t),
          (t = new Ie(e, t)).init(),
          (e.ECLCategoryFilter = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).itemSelector)
              ? '.ecl-category-filter__item'
              : i,
          s =
            void 0 === (s = t.parentItemSelector)
              ? 'ecl-category-filter__item--has-children'
              : s,
          n =
            void 0 === (n = t.listSelector) ? '.ecl-category-filter__list' : n,
          t = void 0 === (t = t.attachClickListener) || t;
        if (!e || e.nodeType !== Node.ELEMENT_NODE)
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.itemSelector = i),
          (this.parentItemSelector = s),
          (this.listSelector = n),
          (this.attachClickListener = t),
          (this.items = null),
          (this.handleClickExpand = this.handleClickExpand.bind(this)),
          (this.expandParents = this.expandParents.bind(this));
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        (ECL.components = ECL.components || new Map()),
          (this.items = p(this.itemSelector, this.element));
        var t = { preventDefault: () => null };
        this.attachClickListener &&
          this.items &&
          this.items.forEach((e) => {
            e.addEventListener('click', this.handleClickExpand),
              e.getAttribute('aria-current') &&
                ((t.target = e),
                this.handleClickExpand(t),
                this.expandParents.call(this, e));
          }),
          this.element.setAttribute('data-ecl-auto-initialized', 'true'),
          ECL.components.set(this.element, this);
      }
      destroy() {
        this.attachClickListener &&
          this.items &&
          this.items.forEach((e) => {
            e.removeEventListener('click', this.handleClickExpand, !1);
          }),
          this.element &&
            (this.element.removeAttribute('data-ecl-auto-initialized'),
            ECL.components.delete(this.element));
      }
      expandParents(e) {
        var t;
        e &&
          ((t = { preventDefault: () => null }),
          (e =
            null == (e = e.closest(this.listSelector))
              ? void 0
              : e.previousElementSibling)) &&
          e.classList.contains(this.parentItemSelector) &&
          ((t.target = e),
          this.handleClickExpand(t),
          this.expandParents.call(this, e));
      }
      handleClickExpand(e) {
        var t = e.target.closest(this.itemSelector),
          i = 'function' == typeof e.stopPropagation,
          s =
            (i &&
              this.items.forEach((e) => {
                e === t
                  ? e.setAttribute('aria-current', !0)
                  : e.removeAttribute('aria-current');
              }),
            t.getAttribute('aria-expanded'));
        s && 'true' === s
          ? (e.preventDefault(),
            t.setAttribute('aria-expanded', 'false'),
            t.parentElement.classList.remove(
              'ecl-category-filter__list-item--open'
            ))
          : s &&
            'false' === s &&
            (e.preventDefault(),
            t.setAttribute('aria-expanded', 'true'),
            t.parentElement.classList.add(
              'ecl-category-filter__list-item--open'
            )),
          s &&
            i &&
            t.classList.contains('ecl-category-filter__item--level-1') &&
            this.items.forEach((e) => {
              e !== t &&
                (e.parentElement.classList.remove(
                  'ecl-category-filter__list-item--open'
                ),
                e.classList.contains(this.parentItemSelector)) &&
                e.setAttribute('aria-expanded', 'false');
            });
      }
    }),
    (e.ContentBlock = class Ne {
      static autoInit(e, t) {
        return (
          (t = void 0 === (t = (void 0 === t ? {} : t).CONTENT_BLOCK) ? {} : t),
          (t = new Ne(e, t)).init(),
          (e.ECLContentBlock = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).targetSelector)
              ? '[data-ecl-picture-link]'
              : i,
          s = void 0 === (s = t.titleSelector) ? '[data-ecl-title-link]' : s,
          n = void 0 === (n = t.attachClickListener) || n,
          l = void 0 === (l = t.maxIterations) ? 1 : l,
          t = void 0 !== (t = t.withTitleAttr) && t;
        if (!e || e.nodeType !== Node.ELEMENT_NODE)
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.targetSelector = i),
          (this.titleSelector = s),
          (this.attachClickListener = n),
          (this.maxIterations = l),
          (this.withTitleAttr = t),
          (this.linkTo = this.linkTo.bind(this)),
          (this.findElementInCommonAncestor =
            this.findElementInCommonAncestor.bind(this));
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        var e;
        (ECL.components = ECL.components || new Map()),
          (this.picture = this.findElementInCommonAncestor(
            this.element,
            this.targetSelector,
            this.maxIterations
          )),
          this.picture &&
            ((this.title = v(this.titleSelector, this.element)),
            (this.linkEl = !!this.title && v('a', this.title)),
            this.linkEl &&
              ((this.picture.style.cursor = 'pointer'),
              (e = v('img', this.picture)) &&
                this.withTitleAttr &&
                (e.title = this.constructor.convertToFullURL(
                  this.linkEl.getAttribute('href')
                )),
              this.attachClickListener) &&
              this.picture.addEventListener('click', this.linkTo),
            this.element.setAttribute('data-ecl-auto-initialized', !0),
            ECL.components.set(this.element, this));
      }
      linkTo() {
        this.linkEl && this.linkEl.click();
      }
      findElementInCommonAncestor(e, t, i) {
        var s = v(t, e);
        return (
          s ||
          (e.classList.contains('ecl-card__body') && (i += 1),
          e === document.documentElement || i <= 0
            ? null
            : this.findElementInCommonAncestor(e.parentElement, t, i - 1))
        );
      }
      static convertToFullURL(e) {
        var t;
        return e.startsWith('http://') || e.startsWith('https://')
          ? e
          : ((t = new URL(window.location.href)), new URL(e, t).href);
      }
      destroy() {
        this.attachClickListener &&
          this.picture &&
          this.picture.removeEventListener('click', this.linkto),
          this.element &&
            (this.element.removeAttribute('data-ecl-auto-initialized'),
            ECL.components.delete(this.element));
      }
    }),
    (e.Datepicker = s),
    (e.DescriptionList = class Me {
      static autoInit(e, t) {
        return (
          (t =
            void 0 === (t = (void 0 === t ? {} : t).DESCRIPTION_LIST) ? {} : t),
          (t = new Me(e, t)).init(),
          (e.ECLDescriptionList = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).listsSelector)
              ? '[data-ecl-description-list-collapsible]'
              : i,
          s =
            void 0 === (s = t.visibleItemsSelector)
              ? 'data-ecl-description-list-visible-items'
              : s,
          n =
            void 0 === (n = t.moreItemLabelSelector)
              ? 'data-ecl-description-list-more-label'
              : n,
          t = void 0 === (t = t.attachClickListener) || t;
        if (!e || e.nodeType !== Node.ELEMENT_NODE)
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.moreItemLabelSelector = n),
          (this.listsSelector = i),
          (this.attachClickListener = t),
          (this.visibleItemsSelector = s),
          (this.moreItemLabel = null),
          (this.lists = null),
          (this.handleClickOnMore = this.handleClickOnMore.bind(this));
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        (ECL.components = ECL.components || new Map()),
          (this.moreItemLabel = this.element.getAttribute(
            this.moreItemLabelSelector
          )),
          (this.visibleItems = this.element.getAttribute(
            this.visibleItemsSelector
          )),
          (this.lists = p(this.listsSelector, this.element)),
          this.lists[0] &&
            0 < this.visibleItems &&
            this.moreItemLabel &&
            (this.lists.forEach((e) => {
              var t, i;
              e.children &&
                e.children.length > this.visibleItems &&
                ((t = document.createElement('li')).classList.add(
                  'ecl-description-list__see_more'
                ),
                (i = document.createElement('a')).classList.add(
                  'ecl-link',
                  'ecl-link--standalone'
                ),
                (i.href = '#'),
                (i.innerHTML = this.moreItemLabel),
                t.appendChild(i),
                e.appendChild(t),
                this.showHide(p('.ecl-description-list__definition-item', e)),
                this.attachClickListener) &&
                i.addEventListener('click', this.handleClickOnMore);
            }),
            this.element.setAttribute('data-ecl-auto-initialized', 'true'),
            ECL.components.set(this.element, this));
      }
      showHide(e) {
        if (e)
          for (
            var t = Array.from(e),
              i = (e = 'ecl-description-list__definition-item') + '--hidden',
              s = e + '--last-visible',
              n = 0;
            n < t.length;
            n += 1
          ) {
            var l = t[n];
            n < this.visibleItems
              ? (l.classList.remove(i), l.classList.remove(s))
              : n >= this.visibleItems && l.classList.add(i),
              n === this.visibleItems - 1
                ? l.classList.add(s)
                : l.classList.remove(s);
          }
      }
      destroy() {
        var e;
        this.attachClickListener &&
          0 < this.visibleItems &&
          (e = p('.ecl-description-list__see_more'))[0] &&
          e.forEach((e) => {
            e.removeEventListener('click', this.handleClickOnMore);
          }),
          this.element &&
            (this.element.removeAttribute('data-ecl-auto-initialized'),
            ECL.components.delete(this.element));
      }
      handleClickOnMore(e) {
        e.preventDefault();
        var t = (e = e.target.parentNode).parentNode;
        this.element.contains(t) &&
          (Array.from(t.children).forEach((e) => {
            e.classList.remove('ecl-description-list__definition-item--hidden'),
              e.classList.remove(
                'ecl-description-list__definition-item--last-visible'
              );
          }),
          e.remove());
      }
    }),
    (e.Expandable = class De {
      static autoInit(e, t) {
        return (
          (t = void 0 === (t = (void 0 === t ? {} : t).EXPANDABLE) ? {} : t),
          (t = new De(e, t)).init(),
          (e.ECLExpandable = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).toggleSelector)
              ? '[data-ecl-expandable-toggle]'
              : i,
          s = void 0 === (s = t.labelSelector) ? '[data-ecl-label]' : s,
          n = void 0 === (n = t.labelExpanded) ? 'data-ecl-label-expanded' : n,
          l =
            void 0 === (l = t.labelCollapsed) ? 'data-ecl-label-collapsed' : l,
          t = void 0 === (t = t.attachClickListener) || t;
        if (
          ((this.supportedEvents = ['onToggle']),
          !e || e.nodeType !== Node.ELEMENT_NODE)
        )
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.eventManager = new S()),
          (this.toggleSelector = i),
          (this.labelSelector = s),
          (this.labelExpanded = n),
          (this.labelCollapsed = l),
          (this.attachClickListener = t),
          (this.toggle = null),
          (this.forceClose = !1),
          (this.target = null),
          (this.label = null),
          (this.handleClickOnToggle = this.handleClickOnToggle.bind(this));
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        if (
          ((ECL.components = ECL.components || new Map()),
          (this.toggle = v(this.toggleSelector, this.element)),
          (this.target = document.querySelector(
            '#' + this.toggle.getAttribute('aria-controls')
          )),
          (this.label = v(this.labelSelector, this.element)),
          !this.target)
        )
          throw new TypeError(
            'Target has to be provided for expandable (aria-controls)'
          );
        this.attachClickListener &&
          this.toggle &&
          this.toggle.addEventListener('click', this.handleClickOnToggle),
          this.element.setAttribute('data-ecl-auto-initialized', 'true'),
          ECL.components.set(this.element, this);
      }
      on(e, t) {
        this.eventManager.on(e, t);
      }
      trigger(e, t) {
        this.eventManager.trigger(e, t);
      }
      destroy() {
        this.attachClickListener &&
          this.toggle &&
          this.toggle.removeEventListener('click', this.handleClickOnToggle),
          this.element &&
            (this.element.removeAttribute('data-ecl-auto-initialized'),
            ECL.components.delete(this.element));
      }
      handleClickOnToggle(e) {
        var t =
            !0 === this.forceClose ||
            'true' === this.toggle.getAttribute('aria-expanded'),
          t =
            (this.toggle.setAttribute('aria-expanded', t ? 'false' : 'true'),
            (this.target.hidden = t),
            this.label && !t && this.toggle.hasAttribute(this.labelExpanded)
              ? (this.label.innerHTML = this.toggle.getAttribute(
                  this.labelExpanded
                ))
              : this.label &&
                t &&
                this.toggle.hasAttribute(this.labelCollapsed) &&
                (this.label.innerHTML = this.toggle.getAttribute(
                  this.labelCollapsed
                )),
            { expanded: !t, e: e });
        return this.trigger('onToggle', t), this;
      }
    }),
    (e.FileDownload = class Re {
      static autoInit(e, t) {
        return (
          (t = void 0 === (t = (void 0 === t ? {} : t).FILE_DOWNLOAD) ? {} : t),
          (t = new Re(e, t)).init(),
          (e.ECLFileDownload = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 ===
            (i = (t = void 0 === t ? {} : t).translationToggleSelector)
              ? '[data-ecl-file-translation-toggle]'
              : i,
          s =
            void 0 === (s = t.translationContainerSelector)
              ? '[data-ecl-file-translation-container]'
              : s,
          t = void 0 === (t = t.attachClickListener) || t;
        if (!e || e.nodeType !== Node.ELEMENT_NODE)
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.translationToggleSelector = i),
          (this.translationContainerSelector = s),
          (this.attachClickListener = t),
          (this.translationToggle = null),
          (this.translationContainer = null),
          (this.handleClickOnToggle = this.handleClickOnToggle.bind(this));
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        (ECL.components = ECL.components || new Map()),
          (this.translationToggle = v(
            this.translationToggleSelector,
            this.element
          )),
          (this.translationContainer = v(
            this.translationContainerSelector,
            this.element
          )),
          this.attachClickListener &&
            this.translationToggle &&
            this.translationToggle.addEventListener(
              'click',
              this.handleClickOnToggle
            ),
          this.element.setAttribute('data-ecl-auto-initialized', 'true'),
          ECL.components.set(this.element, this);
      }
      destroy() {
        this.attachClickListener &&
          this.translationToggle &&
          this.translationToggle.removeEventListener(
            'click',
            this.handleClickOnToggle
          ),
          this.element &&
            (this.element.removeAttribute('data-ecl-auto-initialized'),
            ECL.components.delete(this.element));
      }
      handleClickOnToggle(e) {
        return (
          e.preventDefault(),
          'true' === this.translationToggle.getAttribute('aria-expanded')
            ? this.translationToggle.setAttribute('aria-expanded', 'false')
            : this.translationToggle.setAttribute('aria-expanded', 'true'),
          this
        );
      }
    }),
    (e.FileUpload = V),
    (e.Gallery = class Be {
      static autoInit(e, t) {
        return (
          (t = void 0 === (t = (void 0 === t ? {} : t).GALLERY) ? {} : t),
          (t = new Be(e, t)).init(),
          (e.ECLGallery = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).expandableSelector)
              ? 'data-ecl-gallery-not-expandable'
              : i,
          s =
            void 0 === (s = t.galleryItemSelector)
              ? '[data-ecl-gallery-item]'
              : s,
          n =
            void 0 === (n = t.descriptionSelector)
              ? '[data-ecl-gallery-description]'
              : n,
          l = void 0 === (l = t.titleSelector) ? '[data-ecl-gallery-title]' : l,
          a =
            void 0 === (a = t.noOverlaySelector)
              ? 'data-ecl-gallery-no-overlay'
              : a,
          o =
            void 0 === (o = t.itemsLimitSelector)
              ? 'data-ecl-gallery-visible-items'
              : o,
          r =
            void 0 === (r = t.closeButtonSelector)
              ? '[data-ecl-gallery-close]'
              : r,
          h = void 0 === (h = t.viewAllSelector) ? '[data-ecl-gallery-all]' : h,
          c =
            void 0 === (c = t.viewAllLabelSelector)
              ? 'data-ecl-gallery-collapsed-label'
              : c,
          d =
            void 0 === (d = t.viewAllExpandedLabelSelector)
              ? 'data-ecl-gallery-expanded-label'
              : d,
          u = void 0 === (u = t.countSelector) ? '[data-ecl-gallery-count]' : u,
          m =
            void 0 === (m = t.overlaySelector)
              ? '[data-ecl-gallery-overlay]'
              : m,
          p =
            void 0 === (p = t.overlayHeaderSelector)
              ? '[data-ecl-gallery-overlay-header]'
              : p,
          v =
            void 0 === (v = t.overlayFooterSelector)
              ? '[data-ecl-gallery-overlay-footer]'
              : v,
          g =
            void 0 === (g = t.overlayMediaSelector)
              ? '[data-ecl-gallery-overlay-media]'
              : g,
          b =
            void 0 === (b = t.overlayCounterCurrentSelector)
              ? '[data-ecl-gallery-overlay-counter-current]'
              : b,
          f =
            void 0 === (f = t.overlayCounterMaxSelector)
              ? '[data-ecl-gallery-overlay-counter-max]'
              : f,
          y =
            void 0 === (y = t.overlayDownloadSelector)
              ? '[data-ecl-gallery-overlay-download]'
              : y,
          L =
            void 0 === (L = t.overlayShareSelector)
              ? '[data-ecl-gallery-overlay-share]'
              : L,
          E =
            void 0 === (E = t.overlayDescriptionSelector)
              ? '[data-ecl-gallery-overlay-description]'
              : E,
          C =
            void 0 === (C = t.overlayPreviousSelector)
              ? '[data-ecl-gallery-overlay-previous]'
              : C,
          w =
            void 0 === (w = t.overlayNextSelector)
              ? '[data-ecl-gallery-overlay-next]'
              : w,
          k =
            void 0 === (k = t.videoTitleSelector)
              ? 'data-ecl-gallery-item-video-title'
              : k,
          S = void 0 === (S = t.attachClickListener) || S,
          A = void 0 === (A = t.attachKeyListener) || A,
          t = void 0 === (t = t.attachResizeListener) || t;
        if (!e || e.nodeType !== Node.ELEMENT_NODE)
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.galleryItemSelector = s),
          (this.descriptionSelector = n),
          (this.titleSelector = l),
          (this.closeButtonSelector = r),
          (this.viewAllSelector = h),
          (this.countSelector = u),
          (this.itemsLimitSelector = o),
          (this.overlaySelector = m),
          (this.noOverlaySelector = a),
          (this.overlayHeaderSelector = p),
          (this.overlayFooterSelector = v),
          (this.overlayMediaSelector = g),
          (this.overlayCounterCurrentSelector = b),
          (this.overlayCounterMaxSelector = f),
          (this.overlayDownloadSelector = y),
          (this.overlayShareSelector = L),
          (this.overlayDescriptionSelector = E),
          (this.overlayPreviousSelector = C),
          (this.overlayNextSelector = w),
          (this.attachClickListener = S),
          (this.attachKeyListener = A),
          (this.attachResizeListener = t),
          (this.viewAllLabelSelector = c),
          (this.viewAllExpandedLabelSelector = d),
          (this.expandableSelector = i),
          (this.videoTitleSelector = k),
          (this.galleryItems = null),
          (this.closeButton = null),
          (this.viewAll = null),
          (this.count = null),
          (this.overlay = null),
          (this.overlayHeader = null),
          (this.overlayFooter = null),
          (this.overlayMedia = null),
          (this.overlayCounterCurrent = null),
          (this.overlayCounterMax = null),
          (this.overlayDownload = null),
          (this.overlayShare = null),
          (this.overlayDescription = null),
          (this.overlayPrevious = null),
          (this.overlayNext = null),
          (this.selectedItem = null),
          (this.focusTrap = null),
          (this.isDesktop = !1),
          (this.resizeTimer = null),
          (this.visibleItems = 0),
          (this.breakpointMd = 768),
          (this.breakpointLg = 996),
          (this.imageHeight = 185),
          (this.imageHeightBig = 260),
          (this.iframeResize = this.iframeResize.bind(this)),
          (this.handleClickOnCloseButton =
            this.handleClickOnCloseButton.bind(this)),
          (this.handleClickOnViewAll = this.handleClickOnViewAll.bind(this)),
          (this.handleClickOnItem = this.handleClickOnItem.bind(this)),
          (this.preventClickOnItem = this.preventClickOnItem.bind(this)),
          (this.handleKeyPressOnItem = this.handleKeyPressOnItem.bind(this)),
          (this.handleClickOnPreviousButton =
            this.handleClickOnPreviousButton.bind(this)),
          (this.handleClickOnNextButton =
            this.handleClickOnNextButton.bind(this)),
          (this.handleKeyboard = this.handleKeyboard.bind(this)),
          (this.handleResize = this.handleResize.bind(this));
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        (ECL.components = ECL.components || new Map()),
          (this.expandable = !this.element.hasAttribute(
            this.expandableSelector
          )),
          (this.visibleItems = this.element.getAttribute(
            this.itemsLimitSelector
          )),
          (this.galleryItems = p(this.galleryItemSelector, this.element)),
          (this.closeButton = v(this.closeButtonSelector, this.element)),
          (this.noOverlay = this.element.hasAttribute(this.noOverlaySelector)),
          this.expandable &&
            ((this.viewAll = v(this.viewAllSelector, this.element)),
            (this.viewAllLabel =
              this.viewAll.getAttribute(this.viewAllLabelSelector) ||
              this.viewAll.innerText),
            (this.viewAllLabelExpanded =
              this.viewAll.getAttribute(this.viewAllExpandedLabelSelector) ||
              this.viewAllLabel)),
          (this.count = v(this.countSelector, this.element)),
          this.attachClickListener &&
            this.viewAll &&
            this.viewAll.addEventListener('click', this.handleClickOnViewAll),
          this.noOverlay
            ? this.galleryItems.forEach((e) => {
                e.classList.add('ecl-gallery__item__link--frozen'),
                  e.addEventListener('click', this.preventClickOnItem);
              })
            : ((this.overlay = v(this.overlaySelector, this.element)),
              (this.overlayHeader = v(
                this.overlayHeaderSelector,
                this.overlay
              )),
              (this.overlayFooter = v(
                this.overlayFooterSelector,
                this.overlay
              )),
              (this.overlayMedia = v(this.overlayMediaSelector, this.overlay)),
              (this.overlayCounterCurrent = v(
                this.overlayCounterCurrentSelector,
                this.overlay
              )),
              (this.overlayCounterMax = v(
                this.overlayCounterMaxSelector,
                this.overlay
              )),
              (this.overlayDownload = v(
                this.overlayDownloadSelector,
                this.overlay
              )),
              (this.overlayShare = v(this.overlayShareSelector, this.overlay)),
              (this.overlayDescription = v(
                this.overlayDescriptionSelector,
                this.overlay
              )),
              (this.overlayPrevious = v(
                this.overlayPreviousSelector,
                this.overlay
              )),
              (this.overlayNext = v(this.overlayNextSelector, this.overlay)),
              (this.focusTrap = o(this.overlay, {
                escapeDeactivates: !1,
                returnFocusOnDeactivate: !1,
              })),
              (this.isDialogSupported = !0),
              window.HTMLDialogElement || (this.isDialogSupported = !1),
              this.attachClickListener &&
                this.closeButton &&
                this.closeButton.addEventListener(
                  'click',
                  this.handleClickOnCloseButton
                ),
              this.attachClickListener &&
                this.galleryItems &&
                this.galleryItems.forEach((e) => {
                  this.attachClickListener &&
                    e.addEventListener('click', this.handleClickOnItem),
                    this.attachKeyListener &&
                      e.addEventListener('keyup', this.handleKeyPressOnItem);
                }),
              this.attachClickListener &&
                this.overlayPrevious &&
                this.overlayPrevious.addEventListener(
                  'click',
                  this.handleClickOnPreviousButton
                ),
              this.attachClickListener &&
                this.overlayNext &&
                this.overlayNext.addEventListener(
                  'click',
                  this.handleClickOnNextButton
                ),
              !this.isDialogSupported &&
                this.attachKeyListener &&
                this.overlay &&
                this.overlay.addEventListener('keyup', this.handleKeyboard),
              this.isDialogSupported &&
                this.overlay &&
                this.overlay.addEventListener(
                  'close',
                  this.handleClickOnCloseButton
                )),
          this.attachResizeListener &&
            window.addEventListener('resize', this.handleResize),
          this.expandable && (this.checkScreen(), this.hideItems()),
          this.galleryItems.forEach((e, t) => {
            e.setAttribute('data-ecl-gallery-item-id', t);
          }),
          this.count && (this.count.innerHTML = this.galleryItems.length),
          this.element.setAttribute('data-ecl-auto-initialized', 'true'),
          ECL.components.set(this.element, this);
      }
      destroy() {
        this.attachClickListener &&
          this.closeButton &&
          this.closeButton.removeEventListener(
            'click',
            this.handleClickOnCloseButton
          ),
          this.attachClickListener &&
            this.viewAll &&
            this.viewAll.removeEventListener(
              'click',
              this.handleClickOnViewAll
            ),
          this.attachClickListener &&
            this.galleryItems &&
            this.galleryItems.forEach((e) => {
              e.removeEventListener('click', this.handleClickOnItem);
            }),
          this.attachClickListener &&
            this.overlayPrevious &&
            this.overlayPrevious.removeEventListener(
              'click',
              this.handleClickOnPreviousButton
            ),
          this.attachClickListener &&
            this.overlayNext &&
            this.overlayNext.removeEventListener(
              'click',
              this.handleClickOnNextButton
            ),
          !this.isDialogSupported &&
            this.attachKeyListener &&
            this.overlay &&
            this.overlay.removeEventListener('keyup', this.handleKeyboard),
          this.isDialogSupported &&
            this.overlay &&
            this.overlay.removeEventListener(
              'close',
              this.handleClickOnCloseButton
            ),
          this.attachResizeListener &&
            window.removeEventListener('resize', this.handleResize),
          this.element &&
            (this.element.removeAttribute('data-ecl-auto-initialized'),
            ECL.components.delete(this.element));
      }
      checkScreen() {
        window.innerWidth > this.breakpointMd
          ? (this.isDesktop = !0)
          : (this.isDesktop = !1),
          window.innerWidth > this.breakpointLg && (this.isLarge = !0);
      }
      iframeResize(t) {
        var i;
        (t = !t && this.overlay ? v('iframe', this.overlay) : t) &&
          ((i = window.innerWidth),
          setTimeout(() => {
            var e =
              this.overlay.clientHeight -
              this.overlayHeader.clientHeight -
              this.overlayFooter.clientHeight;
            e < i
              ? (t.setAttribute('height', e + 'px'),
                i < (16 * e) / 9
                  ? t.setAttribute('width', i - 0.05 * i + 'px')
                  : t.setAttribute('width', (16 * e) / 9 + 'px'))
              : (t.setAttribute('width', i + 'px'),
                e < (4 * i) / 3
                  ? t.setAttribute('height', e - 0.05 * e + 'px')
                  : t.setAttribute('height', (4 * i) / 3 + 'px'));
          }, 0));
      }
      hideItems(i) {
        var s;
        void 0 === i && (i = 0),
          this.viewAll &&
            !this.viewAll.expanded &&
            (this.isDesktop
              ? ((s = []),
                this.galleryItems.forEach((e, t) => {
                  e.parentNode.classList.remove('ecl-gallery__item--hidden'),
                    t >= Number(this.visibleItems) + Number(i) &&
                      (s = [...s, t]);
                }),
                s.forEach((e) => {
                  this.galleryItems[e].parentNode.classList.add(
                    'ecl-gallery__item--hidden'
                  );
                }))
              : this.galleryItems.forEach((e, t) => {
                  t > 2 + Number(i)
                    ? e.parentNode.classList.add('ecl-gallery__item--hidden')
                    : e.parentNode.classList.remove(
                        'ecl-gallery__item--hidden'
                      );
                }));
      }
      handleResize() {
        clearTimeout(this.resizeTimer),
          (this.resizeTimer = setTimeout(() => {
            this.checkScreen(), this.hideItems(), this.iframeResize();
          }, 200));
      }
      updateOverlay(e) {
        var t,
          i = (this.selectedItem = e).getAttribute(
            'data-ecl-gallery-item-embed-src'
          ),
          s = e.getAttribute('data-ecl-gallery-item-embed-audio'),
          n = v('video', e),
          l = null,
          a =
            (null != i
              ? ((l = document.createElement('div')).classList.add(
                  'ecl-gallery__slider-embed'
                ),
                (t = document.createElement('div')).classList.add(
                  'ecl-gallery__slider-embed-audio'
                ),
                s && (t.innerHTML = s),
                (o = new URL(i)),
                (a = document.createElement('iframe')).setAttribute('src', o),
                a.setAttribute('frameBorder', '0'),
                (o = e.getAttribute(this.videoTitleSelector)) &&
                  a.setAttribute('title', o),
                this.overlayMedia &&
                  (s && l.appendChild(t),
                  l.appendChild(a),
                  (this.overlayMedia.innerHTML = ''),
                  this.overlayMedia.appendChild(l)),
                this.iframeResize(a))
              : null != n
                ? ((l = document.createElement('video')).setAttribute(
                    'poster',
                    n.poster
                  ),
                  l.setAttribute('controls', 'controls'),
                  l.classList.add('ecl-gallery__slider-video'),
                  (o = e.getAttribute(this.videoTitleSelector)) &&
                    l.setAttribute('aria-label', o),
                  this.overlayMedia &&
                    ((this.overlayMedia.innerHTML = ''),
                    this.overlayMedia.appendChild(l)),
                  p('source', n).forEach((e) => {
                    var t = document.createElement('source');
                    t.setAttribute('src', e.getAttribute('src')),
                      t.setAttribute('type', e.getAttribute('type')),
                      l.appendChild(t);
                  }),
                  p('track', n).forEach((e) => {
                    var t = document.createElement('track');
                    t.setAttribute('src', e.getAttribute('src')),
                      t.setAttribute('kind', e.getAttribute('kind')),
                      t.setAttribute('srclang', e.getAttribute('srcLang')),
                      t.setAttribute('label', e.getAttribute('label')),
                      l.appendChild(t);
                  }),
                  l.load())
                : ((s = v('.ecl-gallery__picture', e)),
                  (t = v('img', s)),
                  s
                    ? (t.classList.remove('ecl-gallery__image'),
                      (l = s.cloneNode(!0)))
                    : ((l = document.createElement('img')).setAttribute(
                        'src',
                        t.getAttribute('src')
                      ),
                      l.setAttribute('alt', t.getAttribute('alt'))),
                  l.classList.add('ecl-gallery__slider-image'),
                  this.overlayMedia &&
                    ((this.overlayMedia.innerHTML = ''),
                    this.overlayMedia.appendChild(l))),
            e.getAttribute('id')),
          o =
            ((this.overlayCounterCurrent.innerHTML =
              +e.getAttribute('data-ecl-gallery-item-id') + 1),
            (this.overlayCounterMax.innerHTML = this.galleryItems.length),
            document.createElement('div'));
        o.classList.add('ecl-gallery__detail-actions-mobile'),
          null !== this.overlayDownload && null === i
            ? ((this.overlayDownload.href = this.selectedItem.href),
              a &&
                this.overlayDownload.setAttribute(
                  'aria-describedby',
                  a + '-title'
                ),
              (this.overlayDownload.hidden = !1),
              o.appendChild(this.overlayDownload.cloneNode(!0)))
            : null !== this.overlayDownload &&
              (this.overlayDownload.hidden = !0),
          null !=
          (n = this.selectedItem.getAttribute('data-ecl-gallery-item-share'))
            ? ((this.overlayShare.href = n),
              a &&
                this.overlayShare.setAttribute(
                  'aria-describedby',
                  a + '-title'
                ),
              (this.overlayShare.hidden = !1),
              o.appendChild(this.overlayShare.cloneNode(!0)))
            : (this.overlayShare.hidden = !0),
          (s = v(this.descriptionSelector, e)) &&
            (this.overlayDescription.innerHTML = s.innerHTML),
          0 < o.childNodes.length && this.overlayDescription.prepend(o);
      }
      handleKeyboard(e) {
        ('Escape' !== e.key && 'Esc' !== e.key) ||
          this.handleClickOnCloseButton();
      }
      handleClickOnCloseButton() {
        this.isDialogSupported
          ? this.overlay.close()
          : this.overlay.removeAttribute('open');
        var e = v('iframe', this.overlayMedia);
        e && e.remove(),
          (e = v('video', this.overlayMedia)) && e.pause(),
          this.focusTrap.deactivate(),
          this.galleryItems.forEach((e) => {
            (e = v('img', e)) && e.classList.add('ecl-gallery__image');
          }),
          this.selectedItem.focus(),
          document.body.classList.remove('ecl-u-disablescroll');
      }
      handleKeyPressOnItem(e) {
        32 === e.keyCode && this.handleClickOnItem(e);
      }
      handleClickOnViewAll(e) {
        e.preventDefault(),
          this.viewAll &&
            (this.viewAll.expanded
              ? (delete this.viewAll.expanded,
                this.checkScreen(),
                this.hideItems(),
                (this.viewAll.textContent = this.viewAllLabel))
              : ((this.viewAll.expanded = !0),
                (this.viewAll.textContent = this.viewAllLabelExpanded),
                0 <
                  (e = this.galleryItems.filter((e) =>
                    e.parentNode.classList.contains('ecl-gallery__item--hidden')
                  )).length &&
                  (e.forEach((e) => {
                    e.parentNode.classList.remove('ecl-gallery__item--hidden');
                  }),
                  e[0].focus())));
      }
      handleClickOnItem(e) {
        e.preventDefault(),
          document.body.classList.add('ecl-u-disablescroll'),
          this.isDialogSupported
            ? this.overlay.showModal()
            : this.overlay.setAttribute('open', ''),
          this.updateOverlay(e.currentTarget),
          this.focusTrap.activate();
      }
      preventClickOnItem(e) {
        e.preventDefault(), e.stopPropagation();
      }
      handleClickOnPreviousButton() {
        var e = +this.selectedItem.getAttribute('data-ecl-gallery-item-id') - 1,
          t =
            (e < 0 && (e = this.galleryItems.length - 1),
            v('video', this.selectedItem));
        return (
          t && t.pause(),
          this.updateOverlay(this.galleryItems[e]),
          (this.selectedItem = this.galleryItems[e]),
          this
        );
      }
      handleClickOnNextButton() {
        var e = +this.selectedItem.getAttribute('data-ecl-gallery-item-id') + 1,
          t =
            (e >= this.galleryItems.length && (e = 0),
            v('video', this.selectedItem));
        return (
          t && t.pause(),
          this.updateOverlay(this.galleryItems[e]),
          (this.selectedItem = this.galleryItems[e]),
          this
        );
      }
    }),
    (e.Indicator = class ze {
      static autoInit(e, t) {
        return (
          (t = void 0 === (t = (void 0 === t ? {} : t).INDICATOR) ? {} : t),
          (t = new ze(e, t)).init(),
          (e.ECLIndicator = t)
        );
      }
      constructor(e) {
        if (!e || e.nodeType !== Node.ELEMENT_NODE)
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.value = 0),
          (this.increment = this.increment.bind(this)),
          (this.decrement = this.decrement.bind(this)),
          (this.getValue = this.getValue.bind(this)),
          (this.setValue = this.setValue.bind(this)),
          (this.clearValue = this.clearValue.bind(this));
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        (ECL.components = ECL.components || new Map()),
          this.getValue(),
          this.element.setAttribute('data-ecl-auto-initialized', 'true'),
          ECL.components.set(this.element, this);
      }
      destroy() {
        this.element.removeAttribute('data-ecl-auto-initialized'),
          ECL.components.delete(this.element);
      }
      getValue() {
        '' === this.element.innerHTML.trim()
          ? (this.value = '')
          : (this.value = parseInt(this.element.innerHTML, 10));
      }
      increment(e) {
        return (
          void 0 === e && (e = 1),
          '' !== this.value &&
            !Number.isNaN(this.value) &&
            ((this.value += e), (this.element.innerHTML = this.value), !0)
        );
      }
      decrement(e) {
        return (
          void 0 === e && (e = 1),
          '' !== this.value &&
            !Number.isNaN(this.value) &&
            ((this.value -= e), (this.element.innerHTML = this.value), !0)
        );
      }
      setValue(e) {
        return (
          !Number.isNaN(e) &&
          ((this.value = e), (this.element.innerHTML = this.value), !0)
        );
      }
      clearValue() {
        (this.value = ''), (this.element.innerHTML = this.value);
      }
    }),
    (e.InpageNavigation = class Fe {
      static autoInit(e, t) {
        return (
          (t =
            void 0 === (t = (void 0 === t ? {} : t).INPAGE_NAVIGATION)
              ? {}
              : t),
          (t = new Fe(e, t)).init(),
          (e.ECLInpageNavigation = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).stickySelector)
              ? '[data-ecl-inpage-navigation]'
              : i,
          s =
            void 0 === (s = t.containerSelector)
              ? '[data-ecl-inpage-navigation-container]'
              : s,
          n =
            void 0 === (n = t.inPageList)
              ? '[data-ecl-inpage-navigation-list]'
              : n,
          l =
            void 0 === (l = t.spySelector)
              ? '[data-ecl-inpage-navigation-link]'
              : l,
          a =
            void 0 === (a = t.toggleSelector)
              ? '[data-ecl-inpage-navigation-trigger]'
              : a,
          o =
            void 0 === (o = t.linksSelector)
              ? '[data-ecl-inpage-navigation-link]'
              : o,
          r =
            void 0 === (r = t.spyActiveContainer)
              ? 'ecl-inpage-navigation--visible'
              : r,
          h = void 0 === (h = t.spyOffset) ? 20 : h,
          c =
            void 0 === (c = t.spyClass)
              ? 'ecl-inpage-navigation__item--active'
              : c,
          d =
            void 0 === (d = t.spyTrigger)
              ? '[data-ecl-inpage-navigation-trigger-current]'
              : d,
          u = void 0 === (u = t.attachClickListener) || u,
          m = void 0 === (m = t.attachResizeListener) || m,
          p = void 0 === (p = t.attachScrollListener) || p,
          v = void 0 === (v = t.attachKeyListener) || v,
          t =
            void 0 === (t = t.contentClass)
              ? 'inpage-navigation__heading--active'
              : t;
        if (
          ((this.supportedEvents = ['onToggle', 'onClick']),
          !e || e.nodeType !== Node.ELEMENT_NODE)
        )
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.eventManager = new S()),
          (this.attachClickListener = u),
          (this.attachKeyListener = v),
          (this.attachResizeListener = m),
          (this.attachScrollListener = p),
          (this.stickySelector = i),
          (this.containerSelector = s),
          (this.toggleSelector = a),
          (this.linksSelector = o),
          (this.inPageList = n),
          (this.spyActiveContainer = r),
          (this.spySelector = l),
          (this.spyOffset = h),
          (this.spyClass = c),
          (this.spyTrigger = d),
          (this.contentClass = t),
          (this.gumshoe = null),
          (this.observer = null),
          (this.stickyObserver = null),
          (this.isExpanded = !1),
          (this.toggleElement = null),
          (this.navLinks = null),
          (this.resizeTimer = null),
          (this.handleClickOnToggler = this.handleClickOnToggler.bind(this)),
          (this.handleClickOnLink = this.handleClickOnLink.bind(this)),
          (this.handleKeyboard = this.handleKeyboard.bind(this)),
          (this.initScrollSpy = this.initScrollSpy.bind(this)),
          (this.initObserver = this.initObserver.bind(this)),
          (this.activateScrollSpy = this.activateScrollSpy.bind(this)),
          (this.deactivateScrollSpy = this.deactivateScrollSpy.bind(this)),
          (this.destroySticky = this.destroySticky.bind(this)),
          (this.destroyScrollSpy = this.destroyScrollSpy.bind(this)),
          (this.destroyObserver = this.destroyObserver.bind(this)),
          (this.openList = this.openList.bind(this)),
          (this.closeList = this.closeList.bind(this)),
          (this.setListHeight = this.setListHeight.bind(this)),
          (this.handleResize = this.handleResize.bind(this));
      }
      initSticky() {
        this.stickyInstance = new Le.Sticky(this.element);
      }
      destroySticky() {
        this.stickyInstance && this.stickyInstance.remove();
      }
      initScrollSpy() {
        var e, s, n, l;
        (this.gumshoe = new Ee(this.spySelector, {
          navClass: this.spyClass,
          contentClass: this.contentClass,
          offset: this.spyOffset,
          reflow: !0,
        })),
          document.addEventListener(
            'gumshoeActivate',
            this.activateScrollSpy,
            !1
          ),
          document.addEventListener(
            'gumshoeDeactivate',
            this.deactivateScrollSpy,
            !1
          ),
          'IntersectionObserver' in window &&
            (e = v(this.containerSelector)) &&
            ((n = s = 0),
            (l = !1),
            (this.stickyObserver = new IntersectionObserver(
              (e) => {
                var t, i;
                e &&
                  e[0] &&
                  ((t = (e = e[0]).boundingClientRect.y),
                  (i = e.intersectionRatio),
                  (e = e.isIntersecting),
                  l
                    ? t < s
                      ? (n < i && e) ||
                        this.element.classList.remove(this.spyActiveContainer)
                      : s < t &&
                        e &&
                        n < i &&
                        this.element.classList.add(this.spyActiveContainer)
                    : (l = !0),
                  (s = t),
                  (n = i));
              },
              { root: null }
            )),
            this.stickyObserver.observe(e));
      }
      activateScrollSpy(e) {
        var t = v(this.spyTrigger);
        this.element.classList.add(this.spyActiveContainer),
          (t.textContent = e.detail.content.textContent);
      }
      deactivateScrollSpy() {
        var e = v(this.spyTrigger);
        this.element.classList.remove(this.spyActiveContainer),
          (e.innerHTML = '');
      }
      destroyScrollSpy() {
        this.stickyObserver && this.stickyObserver.disconnect(),
          document.removeEventListener(
            'gumshoeActivate',
            this.activateScrollSpy,
            !1
          ),
          document.removeEventListener(
            'gumshoeDeactivate',
            this.deactivateScrollSpy,
            !1
          ),
          this.gumshoe.destroy();
      }
      initObserver() {
        var t;
        'MutationObserver' in window &&
          (((t = this).observer = new MutationObserver((e) => {
            var s = v('.ecl-col-l-9'),
              n = v('[data-ecl-inpage-navigation-list]');
            e.forEach((e) => {
              e &&
                e.target &&
                e.target.classList &&
                !e.target.classList.contains(
                  'ecl-inpage-navigation__trigger-current'
                ) &&
                (0 < e.addedNodes.length &&
                  [].slice.call(e.addedNodes).forEach((t) => {
                    var e, i;
                    'H2' === t.tagName &&
                      t.id &&
                      ((e = p('h2[id]', s).findIndex((e) => e.id === t.id)),
                      ((i =
                        n.childNodes[e - 1].cloneNode(
                          !0
                        )).childNodes[0].textContent = t.textContent),
                      (i.childNodes[0].href = '#' + t.id),
                      n.childNodes[e - 1].after(i));
                  }),
                0 < e.removedNodes.length &&
                  [].slice.call(e.removedNodes).forEach((t) => {
                    'H2' === t.tagName &&
                      t.id &&
                      n.childNodes.forEach((e) => {
                        -1 !== e.childNodes[0].href.indexOf(t.id) && e.remove();
                      });
                  }),
                t.update());
            });
          })),
          this.observer.observe(document, { subtree: !0, childList: !0 }));
      }
      destroyObserver() {
        this.observer && this.observer.disconnect();
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        (ECL.components = ECL.components || new Map()),
          (this.toggleElement = v(this.toggleSelector, this.element)),
          (this.navLinks = p(this.linksSelector, this.element)),
          (this.currentList = v(this.inPageList, this.element)),
          (this.direction = getComputedStyle(this.element).direction),
          'rtl' === this.direction &&
            this.element.classList.add('ecl-inpage-navigation--rtl'),
          this.setListHeight(),
          this.initSticky(this.element),
          this.initScrollSpy(),
          this.initObserver(),
          (this.focusTrap = o(this.element, {
            onActivate: () => this.openList(),
            onDeactivate: () => this.closeList(),
          })),
          this.attachClickListener &&
            this.toggleElement &&
            this.toggleElement.addEventListener(
              'click',
              this.handleClickOnToggler
            ),
          this.attachResizeListener &&
            window.addEventListener('resize', this.handleResize),
          this.attachScrollListener &&
            window.addEventListener('scroll', this.handleResize),
          this.attachClickListener &&
            this.navLinks &&
            (this.navLinks.forEach((e) =>
              e.addEventListener('click', this.handleClickOnLink)
            ),
            this.element.addEventListener('keydown', this.handleShiftTab),
            this.toggleElement.addEventListener(
              'click',
              this.handleClickOnToggler
            )),
          document.addEventListener('keydown', this.handleKeyboard),
          this.element.setAttribute('data-ecl-auto-initialized', 'true'),
          ECL.components.set(this.element, this);
      }
      on(e, t) {
        this.eventManager.on(e, t);
      }
      trigger(e, t) {
        this.eventManager.trigger(e, t);
      }
      update() {
        this.gumshoe.setup();
      }
      openList() {
        this.currentList.classList.add('ecl-inpage-navigation__list--visible'),
          this.toggleElement.setAttribute('aria-expanded', 'true');
      }
      closeList() {
        this.currentList.classList.remove(
          'ecl-inpage-navigation__list--visible'
        ),
          this.toggleElement.setAttribute('aria-expanded', 'false');
      }
      setListHeight() {
        var t = window.innerHeight,
          i = window.innerWidth,
          s = v('.ecl-inpage-navigation__title', this.element),
          n = 0;
        setTimeout(() => {
          i < 996
            ? (e = this.toggleElement.parentElement) &&
              (n =
                e.getBoundingClientRect().bottom +
                parseFloat(window.getComputedStyle(e).marginBottom))
            : (n = s
                ? s.getBoundingClientRect().bottom
                : this.element.getBoundingClientRect().top);
          var e = t - n;
          0 < e && (this.currentList.style.maxHeight = e + 'px');
        }, 100);
      }
      handleClickOnToggler(e) {
        e.preventDefault(),
          this.toggleElement &&
            ((this.isExpanded =
              'true' === this.toggleElement.getAttribute('aria-expanded')),
            this.toggleElement.setAttribute(
              'aria-expanded',
              this.isExpanded ? 'false' : 'true'
            ),
            this.isExpanded
              ? this.focusTrap.deactivate()
              : (this.setListHeight(),
                this.focusTrap.activate(),
                this.navLinks &&
                  0 < this.navLinks.length &&
                  this.navLinks[0].focus()),
            this.trigger('onToggle', { isExpanded: this.isExpanded }));
      }
      handleClickOnLink(e) {
        var t = e.target.href,
          i = null,
          s =
            (t && (s = t.split('#')[1]) && (i = v('#' + s, document)),
            this.focusTrap.deactivate(),
            { target: i || t, e: e });
        this.trigger('onClick', s);
      }
      handleResize() {
        clearTimeout(this.resizeTimer),
          (this.resizeTimer = setTimeout(() => {
            this.setListHeight();
          }, 100));
      }
      handleKeyboard(e) {
        var t,
          i = e.target;
        'ArrowUp' === e.key &&
          (e.preventDefault(),
          i === this.navLinks[0]
            ? this.handleClickOnToggler(e)
            : (t = i.parentElement.previousSibling) &&
              t.classList.contains('ecl-inpage-navigation__item') &&
              (t = v(this.linksSelector, t)) &&
              t.focus()),
          'ArrowDown' === e.key &&
            (e.preventDefault(),
            i === this.toggleElement
              ? this.handleClickOnToggler(e)
              : (t = i.parentElement.nextSibling) &&
                t.classList.contains('ecl-inpage-navigation__item') &&
                (e = v(this.linksSelector, t)) &&
                e.focus());
      }
      destroy() {
        this.attachClickListener &&
          this.toggleElement &&
          this.toggleElement.removeEventListener(
            'click',
            this.handleClickOnToggler
          ),
          this.attachClickListener &&
            this.navLinks &&
            this.navLinks.forEach((e) =>
              e.removeEventListener('click', this.handleClickOnLink)
            ),
          this.attachKeyListener &&
            document.removeEventListener('keydown', this.handleKeyboard),
          this.attachResizeListener &&
            window.removeEventListener('resize', this.handleResize),
          this.destroyScrollSpy(),
          this.destroySticky(),
          this.destroyObserver(),
          this.element &&
            (this.element.removeAttribute('data-ecl-auto-initialized'),
            ECL.components.delete(this.element));
      }
    }),
    (e.MediaContainer = class He {
      static autoInit(e, t) {
        return (
          (t =
            void 0 === (t = (void 0 === t ? {} : t).MEDIA_CONTAINER) ? {} : t),
          (t = new He(e, t)).init(),
          (e.ECLMediaContainer = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).iframeSelector)
              ? 'iframe'
              : i,
          s = void 0 === (s = t.useAutomaticRatio) || s,
          n =
            void 0 === (n = t.videoTitleSelector)
              ? 'data-ecl-media-container-video-title'
              : n,
          l =
            void 0 === (l = t.videoPlay)
              ? '[data-ecl-media-container-play]'
              : l,
          a =
            void 0 === (a = t.videoPause)
              ? '[data-ecl-media-container-pause]'
              : a,
          t =
            void 0 === (t = t.mediaVideo)
              ? '[data-ecl-media-container-video]'
              : t;
        if (
          ((this.supportedEvents = ['onPlayClick', 'onPauseClick']),
          !e || e.nodeType !== Node.ELEMENT_NODE)
        )
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.eventManager = new S()),
          (this.iframeSelector = i),
          (this.useAutomaticRatio = s),
          (this.videoTitleSelector = n),
          (this.mediaVideo = v(t, this.element)),
          (this.videoPlay = v(l, this.element)),
          (this.videoPause = v(a, this.element)),
          (this.iframe = null),
          (this.videoTitle = ''),
          (this.calculateRatio = this.calculateRatio.bind(this)),
          (this.handleParameters = this.handleParameters.bind(this)),
          (this.handlePauseClick = this.handlePauseClick.bind(this)),
          (this.handlePlayClick = this.handlePlayClick.bind(this));
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        (ECL.components = ECL.components || new Map()),
          (this.videoTitle = this.element.getAttribute(
            this.videoTitleSelector
          ));
        var e = v('.ecl-media-container__media', this.element);
        e &&
          !/ecl-media-container__media--ratio/.test(e.className) &&
          ((this.iframe = v(this.iframeSelector, this.element)), this.iframe) &&
          (this.handleParameters(), this.useAutomaticRatio) &&
          this.calculateRatio(),
          this.videoPlay &&
            (this.videoPlay.addEventListener('click', (e) =>
              this.handlePlayClick(e)
            ),
            (this.videoPlay.style.display = 'none')),
          this.videoPause &&
            (this.videoPause.addEventListener('click', (e) =>
              this.handlePauseClick(e)
            ),
            (this.videoPause.style.display = 'flex')),
          this.element.setAttribute('data-ecl-auto-initialized', 'true'),
          ECL.components.set(this.element, this);
      }
      on(e, t) {
        this.eventManager.on(e, t);
      }
      trigger(e, t) {
        this.eventManager.trigger(e, t);
      }
      destroy() {
        this.element &&
          (this.element.removeAttribute('data-ecl-auto-initialized'),
          ECL.components.delete(this.element)),
          this.videoPlay &&
            (this.videoPlay.removeEventListener('click', this.handlePlayClick),
            (this.videoPlay.style.display = 'none')),
          this.videoPause &&
            (this.videoPause.remveEventListener('click', this.handlePauseClick),
            (this.videoPause.style.display = 'flex'));
      }
      handleParameters() {
        var e = new URL(this.iframe.src);
        e.host.includes('youtube') && (this.iframe.src = e),
          this.videoTitle && this.iframe.setAttribute('title', this.videoTitle);
      }
      calculateRatio() {
        var e = this.iframe.width,
          t = this.iframe.height;
        (e && t) ||
          ((e = this.iframe.offsetWidth), (t = this.iframe.offsetHeight)),
          (this.iframe.style.aspectRatio = e + '/' + t);
      }
      handlePlayClick(e) {
        this.mediaVideo && this.mediaVideo.play(),
          (this.videoPlay.style.display = 'none'),
          this.videoPause &&
            ((this.videoPause.style.display = 'flex'), this.videoPause.focus()),
          (e = i({}, e, { status: 'Playing' })),
          this.trigger('onPlayClick', e);
      }
      handlePauseClick(e) {
        this.mediaVideo && this.mediaVideo.pause(),
          (this.videoPause.style.display = 'none'),
          this.videoPlay &&
            ((this.videoPlay.style.display = 'flex'), this.videoPlay.focus()),
          (e = i({}, e, { status: 'Paused' })),
          this.trigger('onPauseClick', e);
      }
    }),
    (e.MegaMenu = class Ke {
      static autoInit(e, t) {
        return (
          (t = void 0 === (t = (void 0 === t ? {} : t).MEGA_MENU) ? {} : t),
          (t = new Ke(e, t)).init(),
          (e.ECLMegaMenu = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).openSelector)
              ? '[data-ecl-mega-menu-open]'
              : i,
          s = void 0 === (s = t.backSelector) ? '[data-ecl-mega-menu-back]' : s,
          n =
            void 0 === (n = t.innerSelector) ? '[data-ecl-mega-menu-inner]' : n,
          l = void 0 === (l = t.itemSelector) ? '[data-ecl-mega-menu-item]' : l,
          a = void 0 === (a = t.linkSelector) ? '[data-ecl-mega-menu-link]' : a,
          o =
            void 0 === (o = t.subLinkSelector)
              ? '[data-ecl-mega-menu-sublink]'
              : o,
          r = void 0 === (r = t.megaSelector) ? '[data-ecl-mega-menu-mega]' : r,
          h =
            void 0 === (h = t.containerSelector)
              ? '[data-ecl-has-container]'
              : h,
          c =
            void 0 === (c = t.subItemSelector)
              ? '[data-ecl-mega-menu-subitem]'
              : c,
          d =
            void 0 === (d = t.featuredAttribute)
              ? '[data-ecl-mega-menu-featured]'
              : d,
          u =
            void 0 === (u = t.featuredLinkAttribute)
              ? '[data-ecl-mega-menu-featured-link]'
              : u,
          m =
            void 0 === (m = t.labelOpenAttribute)
              ? 'data-ecl-mega-menu-label-open'
              : m,
          p =
            void 0 === (p = t.labelCloseAttribute)
              ? 'data-ecl-mega-menu-label-close'
              : p,
          v = void 0 === (v = t.attachClickListener) || v,
          g = void 0 === (g = t.attachFocusListener) || g,
          b = void 0 === (b = t.attachKeyListener) || b,
          t = void 0 === (t = t.attachResizeListener) || t;
        if (
          ((this.supportedEvents = ['onOpen', 'onClose']),
          !e || e.nodeType !== Node.ELEMENT_NODE)
        )
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.eventManager = new S()),
          (this.openSelector = i),
          (this.backSelector = s),
          (this.innerSelector = n),
          (this.itemSelector = l),
          (this.linkSelector = a),
          (this.subLinkSelector = o),
          (this.megaSelector = r),
          (this.subItemSelector = c),
          (this.containerSelector = h),
          (this.labelOpenAttribute = m),
          (this.labelCloseAttribute = p),
          (this.attachClickListener = v),
          (this.attachFocusListener = g),
          (this.attachKeyListener = b),
          (this.attachResizeListener = t),
          (this.featuredAttribute = d),
          (this.featuredLinkAttribute = u),
          (this.direction = 'ltr'),
          (this.open = null),
          (this.toggleLabel = null),
          (this.back = null),
          (this.backItemLevel1 = null),
          (this.backItemLevel2 = null),
          (this.inner = null),
          (this.items = null),
          (this.links = null),
          (this.isOpen = !1),
          (this.resizeTimer = null),
          (this.wrappers = null),
          (this.isKeyEvent = !1),
          (this.isDesktop = !1),
          (this.isLarge = !1),
          (this.lastVisibleItem = null),
          (this.menuOverlay = null),
          (this.currentItem = null),
          (this.totalItemsWidth = 0),
          (this.breakpointL = 996),
          (this.openPanel = { num: 0, item: {} }),
          (this.infoLinks = null),
          (this.seeAllLinks = null),
          (this.featuredLinks = null),
          (this.handleClickOnOpen = this.handleClickOnOpen.bind(this)),
          (this.handleClickOnClose = this.handleClickOnClose.bind(this)),
          (this.handleClickOnToggle = this.handleClickOnToggle.bind(this)),
          (this.handleClickOnBack = this.handleClickOnBack.bind(this)),
          (this.handleClickGlobal = this.handleClickGlobal.bind(this)),
          (this.handleClickOnItem = this.handleClickOnItem.bind(this)),
          (this.handleClickOnSubitem = this.handleClickOnSubitem.bind(this)),
          (this.handleFocusOut = this.handleFocusOut.bind(this)),
          (this.handleKeyboard = this.handleKeyboard.bind(this)),
          (this.handleKeyboardGlobal = this.handleKeyboardGlobal.bind(this)),
          (this.handleResize = this.handleResize.bind(this)),
          (this.useDesktopDisplay = this.useDesktopDisplay.bind(this)),
          (this.closeOpenDropdown = this.closeOpenDropdown.bind(this)),
          (this.checkDropdownHeight = this.checkDropdownHeight.bind(this)),
          (this.positionMenuOverlay = this.positionMenuOverlay.bind(this)),
          (this.resetStyles = this.resetStyles.bind(this)),
          (this.handleFirstPanel = this.handleFirstPanel.bind(this)),
          (this.handleSecondPanel = this.handleSecondPanel.bind(this)),
          (this.disableScroll = this.disableScroll.bind(this)),
          (this.enableScroll = this.enableScroll.bind(this));
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        (ECL.components = ECL.components || new Map()),
          (this.open = v(this.openSelector, this.element)),
          (this.back = v(this.backSelector, this.element)),
          (this.inner = v(this.innerSelector, this.element)),
          (this.btnPrevious = v(this.buttonPreviousSelector, this.element)),
          (this.btnNext = v(this.buttonNextSelector, this.element)),
          (this.items = p(this.itemSelector, this.element)),
          (this.subItems = p(this.subItemSelector, this.element)),
          (this.links = p(this.linkSelector, this.element)),
          (this.header = v('.ecl-site-header', document)),
          (this.headerBanner = v('.ecl-site-header__banner', document)),
          (this.wrappers = p('.ecl-mega-menu__wrapper', this.element)),
          (this.headerNotification = v(
            '.ecl-site-header__notification',
            document
          )),
          (this.toggleLabel = v('.ecl-button__label', this.open)),
          (this.menuOverlay = v('.ecl-mega-menu__overlay', this.element)),
          (this.isDesktop = this.useDesktopDisplay()),
          this.attachClickListener &&
            (this.open &&
              this.open.addEventListener('click', this.handleClickOnToggle),
            this.back &&
              (this.back.addEventListener('click', this.handleClickOnBack),
              this.back.addEventListener('keyup', this.handleKeyboard)),
            this.attachClickListener) &&
            document.addEventListener('click', this.handleClickGlobal),
          this.links &&
            this.links.forEach((e) => {
              this.attachFocusListener &&
                e.addEventListener('focusout', this.handleFocusOut),
                this.attachKeyListener &&
                  e.addEventListener('keyup', this.handleKeyboard);
            }),
          this.subItems &&
            this.subItems.forEach((e) => {
              (e = v('.ecl-mega-menu__sublink', e)),
                this.attachKeyListener &&
                  e &&
                  (e.addEventListener('click', this.handleClickOnSubitem),
                  e.addEventListener('keyup', this.handleKeyboard)),
                this.attachFocusListener &&
                  e &&
                  e.addEventListener('focusout', this.handleFocusOut);
            }),
          (this.infoLinks = p('.ecl-mega-menu__info-link a', this.element)),
          0 < this.infoLinks.length &&
            this.infoLinks.forEach((e) => {
              this.attachKeyListener &&
                e.addEventListener('keyup', this.handleKeyboard),
                this.attachFocusListener &&
                  e.addEventListener('blur', this.handleFocusOut);
            }),
          (this.seeAllLinks = p('.ecl-mega-menu__see-all a', this.element)),
          0 < this.seeAllLinks.length &&
            this.seeAllLinks.forEach((e) => {
              this.attachKeyListener &&
                e.addEventListener('keyup', this.handleKeyboard),
                this.attachFocusListener &&
                  e.addEventListener('blur', this.handleFocusOut);
            }),
          (this.featuredLinks = p(this.featuredLinkAttribute, this.element)),
          0 < this.featuredLinks.length &&
            this.attachFocusListener &&
            this.featuredLinks.forEach((e) => {
              e.addEventListener('blur', this.handleFocusOut);
            }),
          this.attachKeyListener &&
            document.addEventListener('keyup', this.handleKeyboardGlobal),
          this.attachResizeListener &&
            window.addEventListener('resize', this.handleResize),
          this.items &&
            this.items.forEach((e) => {
              (this.totalItemsWidth += e.offsetWidth),
                (e.hasAttribute('data-ecl-has-children') ||
                  e.hasAttribute('data-ecl-has-container')) &&
                  ((e = v(this.linkSelector, e)), this.attachClickListener) &&
                  e &&
                  e.addEventListener('click', this.handleClickOnItem);
            }),
          (this.focusTrap = o(this.element, {
            onActivate: () =>
              this.element.classList.add('ecl-mega-menu-trap-is-active'),
            onDeactivate: () =>
              this.element.classList.remove('ecl-mega-menu-trap-is-active'),
          })),
          this.handleResize(),
          this.element.setAttribute('data-ecl-auto-initialized', 'true'),
          ECL.components.set(this.element, this);
      }
      on(e, t) {
        this.eventManager.on(e, t);
      }
      trigger(e, t) {
        this.eventManager.trigger(e, t);
      }
      destroy() {
        this.attachClickListener &&
          (this.open &&
            this.open.removeEventListener('click', this.handleClickOnToggle),
          this.back &&
            this.back.removeEventListener('click', this.handleClickOnBack),
          this.attachClickListener) &&
          document.removeEventListener('click', this.handleClickGlobal),
          this.links &&
            this.links.forEach((e) => {
              this.attachClickListener &&
                e.removeEventListener('click', this.handleClickOnItem),
                this.attachFocusListener &&
                  e.removeEventListener('focusout', this.handleFocusOut),
                this.attachKeyListener &&
                  e.removeEventListener('keyup', this.handleKeyboard);
            }),
          this.subItems &&
            this.subItems.forEach((e) => {
              (e = v('.ecl-mega-menu__sublink', e)),
                this.attachKeyListener &&
                  e &&
                  e.removeEventListener('keyup', this.handleKeyboard),
                this.attachClickListener &&
                  e &&
                  e.removeEventListener('click', this.handleClickOnSubitem),
                this.attachFocusListener &&
                  e &&
                  e.removeEventListener('focusout', this.handleFocusOut);
            }),
          this.infoLinks &&
            this.infoLinks.forEach((e) => {
              this.attachFocusListener &&
                e.removeEventListener('blur', this.handleFocusOut),
                this.attachKeyListener &&
                  e.removeEventListener('keyup', this.handleKeyboard);
            }),
          this.seeAllLinks &&
            this.seeAllLinks.forEach((e) => {
              this.attachFocusListener &&
                e.removeEventListener('blur', this.handleFocusOut),
                this.attachKeyListener &&
                  e.removeEventListener('keyup', this.handleKeyboard);
            }),
          this.featuredLinks &&
            this.attachFocusListener &&
            this.featuredLinks.forEach((e) => {
              e.removeEventListener('blur', this.handleFocusOut);
            }),
          this.attachKeyListener &&
            document.removeEventListener('keyup', this.handleKeyboardGlobal),
          this.attachResizeListener &&
            window.removeEventListener('resize', this.handleResize),
          this.closeOpenDropdown(),
          this.enableScroll(),
          this.element &&
            (this.element.removeAttribute('data-ecl-auto-initialized'),
            ECL.components.delete(this.element));
      }
      disableScroll() {
        document.body.classList.add('ecl-mega-menu-prevent-scroll');
      }
      enableScroll() {
        document.body.classList.remove('ecl-mega-menu-prevent-scroll');
      }
      useDesktopDisplay() {
        return !(
          g.isMobileOnly ||
          (g.isTablet
            ? (this.element.classList.add('ecl-mega-menu--forced-mobile'), 1)
            : window.innerWidth < this.breakpointL ||
              (this.element.classList.remove('ecl-mega-menu--forced-mobile'),
              0))
        );
      }
      resetStyles(e, t) {
        var i,
          s,
          n = p('.ecl-mega-menu__info', this.element),
          l = p('.ecl-mega-menu__sublist', this.element);
        l && 'mobile' === e
          ? (p(
              '.ecl-mega-menu__item > .ecl-mega-menu__wrapper > .ecl-container > [data-ecl-mega-menu-mega]',
              this.element
            ).forEach((e) => {
              e.style.height = '';
            }),
            this.wrappers &&
              this.wrappers.forEach((e) => {
                (e.style.top = ''), (e.style.height = '');
              }),
            0 < this.openPanel.num &&
              this.header &&
              (this.headerBanner && (this.headerBanner.style.display = 'none'),
              this.headerNotification) &&
              (this.headerNotification.style.display = 'none'),
            2 === this.openPanel.num &&
              ((s = v('.ecl-mega-menu__subitem--expanded', this.element)) &&
                s.firstChild.classList.add('ecl-mega-menu__parent-link'),
              (i = this.openPanel.item).parentNode.childNodes.forEach((e) => {
                e !== i && (e.style.display = 'none');
              })))
          : l && 'desktop' === e && !t
            ? (l.forEach((e) => {
                e.classList.remove('ecl-mega-menu__sublist--scrollable'),
                  e.childNodes.forEach((e) => {
                    e.style.display = '';
                  });
              }),
              n.forEach((e) => {
                e.style.top = '';
              }),
              (s = []),
              (l = v('.ecl-mega-menu__subitem--expanded', this.element)) &&
                (l.firstElementChild.classList.remove(
                  'ecl-mega-menu__parent-link'
                ),
                s.push(l)),
              (l = v('.ecl-mega-menu__item--expanded', this.element)) &&
                s.push(l),
              0 < s.length
                ? s.forEach((e) => {
                    this.checkDropdownHeight(e);
                  })
                : (this.element.setAttribute('aria-expanded', 'false'),
                  this.element.removeAttribute('data-expanded'),
                  this.open.setAttribute('aria-expanded', 'false'),
                  this.enableScroll()))
            : 'desktop' === e &&
              t &&
              ((l = v('.ecl-mega-menu__subitem--expanded', this.element)) &&
                l.firstElementChild.classList.remove(
                  'ecl-mega-menu__parent-link'
                ),
              n.forEach((e) => {
                e.style.height = '';
              })),
          'desktop' === e &&
            this.header &&
            (this.headerBanner && (this.headerBanner.style.display = 'flex'),
            this.headerNotification) &&
            (this.headerNotification.style.display = 'flex');
      }
      handleResize() {
        clearTimeout(this.resizeTimer),
          (this.resizeTimer = setTimeout(() => {
            var e = window.innerWidth;
            void 0 !== this.prevScreenWidth &&
              (((this.prevScreenWidth <= this.breakpointL &&
                e > this.breakpointL) ||
                (this.prevScreenWidth > this.breakpointL &&
                  e <= this.breakpointL)) &&
                this.resetStyles(e > this.breakpointL ? 'desktop' : 'mobile'),
              1140 < this.prevScreenWidth) &&
              996 < e &&
              this.resetStyles('desktop', !0),
              (this.isDesktop = this.useDesktopDisplay()),
              (this.isLarge = 1140 < window.innerWidth),
              (this.prevScreenWidth = e),
              this.element.classList.remove('ecl-mega-menu--forced-mobile'),
              (this.direction = getComputedStyle(this.element).direction),
              'rtl' === this.direction
                ? this.element.classList.add('ecl-mega-menu--rtl')
                : this.element.classList.remove('ecl-mega-menu--rtl'),
              (e = v('.ecl-mega-menu__item--expanded', this.element)) &&
                this.isDesktop &&
                this.checkDropdownHeight(e),
              this.positionMenuOverlay();
          }, 200));
      }
      checkDropdownHeight(d, e) {
        void 0 === e && (e = !0);
        var u = v('.ecl-mega-menu__info', d),
          m = v('.ecl-mega-menu__mega', d);
        m && this.isDesktop && e && (m.style.opacity = 0),
          u && this.isDesktop && e && (u.style.opacity = 0),
          setTimeout(() => {
            var e = window.innerHeight,
              t = 0;
            if (this.isDesktop) {
              var i = [],
                s = 0,
                n = null,
                l = null,
                a = 0,
                o = 0,
                r = 0;
              if (
                (u && ((u.style.height = ''), (t = u.scrollHeight + 16)),
                u && this.isLarge
                  ? i.push(t)
                  : u && this.isDesktop && (r = o = a = t),
                m)
              ) {
                m.style.height = '';
                var h = m.getBoundingClientRect().top,
                  c = v('.ecl-mega-menu__sublist', m);
                if (c)
                  0 < (c = c.children).length &&
                    (Array.from(c).forEach((e) => {
                      a += e.getBoundingClientRect().height;
                    }),
                    i.push(a));
                else if (
                  d.classList.contains('ecl-mega-menu__item--has-container') &&
                  (c = v('.ecl-mega-menu__mega-container', d))
                )
                  return (
                    (c.firstElementChild.style.height = e - h + 'px'),
                    void (m.style.opacity = 1)
                  );
              }
              (c = v('.ecl-mega-menu__subitem--expanded', d)) &&
                (n = v('.ecl-mega-menu__mega--level-2', c)) &&
                ((n.style.height = ''),
                0 < (e = p('' + this.subItemSelector, n)).length &&
                  e.forEach((e) => {
                    o += e.getBoundingClientRect().height;
                  }),
                i.push(o),
                (l = v('.ecl-mega-menu__featured', c))) &&
                (Array.from(l.firstElementChild.children).forEach((e) => {
                  var t = window.getComputedStyle(e),
                    t = parseFloat(t.marginTop) + parseFloat(t.marginBottom);
                  r += e.offsetHeight + t;
                }),
                i.push(r)),
                (h = Math.max(...i)),
                (e = this.inner.getBoundingClientRect().bottom),
                (c = 0.7 * (window.innerHeight - e)),
                (s = c < h ? c : h),
                (i = v('.ecl-mega-menu__wrapper', d)) &&
                  (i.style.height = s + 'px'),
                m && this.isLarge
                  ? (m.style.height = s + 'px')
                  : m && u && this.isDesktop && (m.style.height = s - t + 'px'),
                u && this.isLarge && (u.style.height = s + 'px'),
                n && this.isLarge
                  ? (n.style.height = s + 'px')
                  : n && this.isDesktop && (n.style.height = s - t + 'px'),
                l && this.isLarge
                  ? (l.style.height = s + 'px')
                  : l && this.isDesktop && (l.style.height = s - t + 'px');
            }
            m && this.isDesktop && (m.style.opacity = 1),
              u && this.isDesktop && (u.style.opacity = 1);
          }, 100);
      }
      positionMenuOverlay() {
        var i = 0;
        this.isDesktop
          ? setTimeout(() => {
              var t,
                e = v('.ecl-site-header', document);
              e
                ? ((e = e.getBoundingClientRect().bottom),
                  (t = v(
                    this.itemSelector,
                    this.element
                  ).getBoundingClientRect().height),
                  this.wrappers &&
                    this.wrappers.forEach((e) => {
                      e.style.top = t + 'px';
                    }))
                : (e = this.element.getBoundingClientRect().bottom),
                this.menuOverlay && (this.menuOverlay.style.top = e + 'px');
            }, 0)
          : setTimeout(() => {
              var e, t;
              this.header &&
                ((t = this.header.getBoundingClientRect()),
                (t = Math.round(t.bottom)),
                this.menuOverlay && (this.menuOverlay.style.top = t + 'px'),
                this.inner && (this.inner.style.top = t + 'px'),
                (t = v('.ecl-mega-menu__item--expanded', this.element)) &&
                  ((e = v('.ecl-mega-menu__sublist', t)) &&
                  1 === this.openPanel.num
                    ? (t = v('.ecl-mega-menu__info', t)) &&
                      ((t = t.getBoundingClientRect().bottom),
                      (i = window.innerHeight - t - 16),
                      e.classList.add('ecl-mega-menu__sublist--scrollable'),
                      (e.style.height = i + 'px'))
                    : e &&
                      (e.classList.remove('ecl-mega-menu__sublist--scrollable'),
                      (e.style.height = ''))),
                2 === this.openPanel.num &&
                  (t = v('.ecl-mega-menu__subitem--expanded', this.element)) &&
                  (e = v('.ecl-mega-menu__mega--level-2', t)) &&
                  ((t = e.getBoundingClientRect().top),
                  (i = window.innerHeight - t),
                  (e.style.height = i + 'px')),
                this.wrappers) &&
                this.wrappers.forEach((e) => {
                  (e.style.top = ''), (e.style.height = '');
                });
            }, 0);
      }
      handleKeyboard(e) {
        var t,
          i = e.target,
          s = i.classList,
          n = this.element.getAttribute('aria-expanded');
        if ('Escape' === e.key || 'Esc' === e.key)
          document.activeElement === i && i.blur(),
            'false' === n && this.closeOpenDropdown();
        else {
          if (
            (s.contains('ecl-mega-menu__info-link') &&
              ('ArrowUp' === e.key &&
                (this.isDesktop
                  ? v(
                      '.ecl-mega-menu__item--expanded button',
                      this.element
                    ).focus()
                  : this.back && !this.isDesktop && this.back.focus()),
              ('ArrowDown' !== e.key && 'ArrowRight' !== e.key) ||
                i.parentElement.parentElement.nextSibling.firstChild.firstChild.firstChild.focus()),
            s.contains('ecl-mega-menu__parent-link'))
          ) {
            if ('ArrowUp' === e.key)
              return void v('.ecl-mega-menu__back', this.element).focus();
            if ('ArrowDown' === e.key)
              return void e.target.nextSibling.firstElementChild.firstElementChild.firstChild.focus();
          }
          if (
            (i.parentElement.classList.contains('ecl-mega-menu__see-all') &&
              ('ArrowUp' === e.key &&
                i.parentElement.previousSibling.firstChild.focus(),
              'ArrowDown' === e.key) &&
              (n = i.parentElement.parentElement.nextSibling) &&
              0 <
                (n = p(
                  [
                    'a[href]',
                    'button:not([disabled])',
                    'input:not([disabled])',
                    'select:not([disabled])',
                    'textarea:not([disabled])',
                    '[tabindex]:not([tabindex="-1"])',
                  ].join(', '),
                  n
                )).length &&
              n[0].focus(),
            s.contains('ecl-mega-menu__back') &&
              ('ArrowDown' === e.key &&
                (e.preventDefault(),
                (n = v(
                  '[aria-expanded="true"]',
                  i.parentElement.nextSibling
                ))) &&
                ((t = v('.ecl-mega-menu__subitem--expanded', n.parentElement))
                  ? (t = v('.ecl-mega-menu__parent-link', t)) && t.focus()
                  : (
                      v('.ecl-mega-menu__info-link', n.parentElement) ||
                      v(
                        '.ecl-mega-menu__subitem:first-child .ecl-mega-menu__sublink',
                        n.parentElement
                      )
                    ).focus()),
              'ArrowUp' === e.key) &&
              this.open.focus(),
            s.contains('ecl-mega-menu__link'))
          ) {
            if ('ArrowLeft' === e.key || 'ArrowUp' === e.key) {
              if (
                (e.preventDefault(),
                (t = i.previousSibling) &&
                  t.classList.contains('ecl-mega-menu__link'))
              )
                return void t.focus();
              if ((t = i.parentElement.previousSibling))
                if ((n = v('.ecl-mega-menu__link', t))) return void n.focus();
            }
            if ('ArrowRight' === e.key || 'ArrowDown' === e.key) {
              if (
                (e.preventDefault(),
                'true' === i.parentElement.getAttribute('aria-expanded') &&
                  'ArrowDown' === e.key)
              )
                if ((t = v('.ecl-mega-menu__info-link', i.parentElement)))
                  return void t.focus();
              if (
                (n = i.parentElement.nextSibling) &&
                (t = v('.ecl-mega-menu__link', n))
              )
                return void t.focus();
            }
          }
          if (s.contains('ecl-mega-menu__sublink')) {
            if (
              'ArrowDown' === e.key &&
              (e.preventDefault(),
              (n = i.parentElement.nextSibling),
              (t = ''),
              n) &&
              (t =
                !(t = v('.ecl-mega-menu__sublink', n)) &&
                n.classList.contains('ecl-mega-menu__spacer')
                  ? n.nextSibling.firstElementChild
                  : t)
            )
              return void t.focus();
            'ArrowUp' === e.key &&
              (e.preventDefault(),
              (s = i.parentElement.previousSibling)
                ? (n = v('.ecl-mega-menu__sublink', s)) && n.focus()
                : (t = v(
                      '.ecl-mega-menu__info-link',
                      i.parentElement.parentElement.parentElement
                        .previousSibling
                    ))
                  ? t.focus()
                  : 2 === this.openPanel.num
                    ? (s = e.target.closest(
                        '.ecl-mega-menu__mega'
                      ).previousSibling) && s.focus()
                    : this.back && this.back.focus());
          }
          'ArrowRight' === e.key &&
            'true' === i.parentElement.getAttribute('aria-expanded') &&
            (e.preventDefault(),
            i.nextSibling.firstElementChild.firstChild.firstChild.focus());
        }
      }
      handleKeyboardGlobal(e) {
        ('Escape' !== e.key && 'Esc' !== e.key) ||
          (this.isOpen && this.closeOpenDropdown(!0));
      }
      handleClickOnOpen(e) {
        var t;
        this.isOpen
          ? this.handleClickOnClose(e)
          : (e.preventDefault(),
            this.disableScroll(),
            this.element.setAttribute('aria-expanded', 'true'),
            this.element.classList.add('ecl-mega-menu--start-panel'),
            this.element.classList.remove(
              'ecl-mega-menu--one-panel',
              'ecl-mega-menu--two-panels'
            ),
            this.open.setAttribute('aria-expanded', 'true'),
            this.inner.setAttribute('aria-hidden', 'false'),
            (this.isOpen = !0),
            this.header &&
              this.header.classList.add(
                'ecl-site-header--open-menu',
                'ecl-site-header--open-menu-start'
              ),
            (t = this.element.getAttribute(this.labelCloseAttribute)),
            this.toggleLabel && t && (this.toggleLabel.innerHTML = t),
            this.positionMenuOverlay(),
            0 < this.links.length && this.links[0].focus(),
            this.trigger('onOpen', e));
      }
      handleClickOnClose(e) {
        'true' === this.element.getAttribute('aria-expanded')
          ? (this.focusTrap.deactivate(),
            this.closeOpenDropdown(),
            this.trigger('onClose', e))
          : this.handleClickOnOpen(e);
      }
      handleClickOnToggle(e) {
        e.preventDefault(),
          this.isOpen ? this.handleClickOnClose(e) : this.handleClickOnOpen(e);
      }
      handleClickOnBack() {
        p('.ecl-mega-menu__info', this.element).forEach((e) => {
          e.style.top = '';
        });
        var e,
          t = v('.ecl-mega-menu__subitem--expanded', this.element);
        t
          ? (this.element.classList.remove(
              'ecl-mega-menu--two-panels',
              'ecl-mega-menu--start-panel'
            ),
            this.element.classList.add('ecl-mega-menu--one-panel'),
            t.setAttribute('aria-expanded', 'false'),
            t.classList.remove(
              'ecl-mega-menu__subitem--expanded',
              'ecl-mega-menu__subitem--current'
            ),
            (e = v(this.subLinkSelector, t)).setAttribute(
              'aria-expanded',
              'false'
            ),
            e.classList.remove('ecl-mega-menu__parent-link'),
            (e = t.parentElement.childNodes) &&
              e.forEach((e) => {
                e.style.display = '';
              }),
            this.header &&
              this.header.classList.remove('ecl-site-header--open-menu-start'),
            this.backItemLevel2 &&
              this.backItemLevel2.firstElementChild.focus(),
            (this.openPanel.num = 1))
          : (this.header &&
              (this.headerBanner && (this.headerBanner.style.display = 'flex'),
              this.headerNotification) &&
              (this.headerNotification.style.display = 'flex'),
            this.inner.classList.remove('ecl-mega-menu__inner--expanded'),
            this.element.classList.remove('ecl-mega-menu--one-panel'),
            this.items.forEach((e) => {
              e.classList.remove(
                'ecl-mega-menu__item--expanded',
                'ecl-mega-menu__item--current'
              ),
                v(this.linkSelector, e).setAttribute('aria-expanded', 'false');
            }),
            (this.backItemLevel1 || this.items[0]).firstElementChild.focus(),
            (this.openPanel.num = 0),
            this.header &&
              this.header.classList.add('ecl-site-header--open-menu-start'),
            this.positionMenuOverlay()),
          this.trigger('onBack', { level: t ? 2 : 1 });
      }
      handleFirstPanel(i, e) {
        switch (e) {
          case 'expand':
            var t;
            this.inner.classList.add('ecl-mega-menu__inner--expanded'),
              this.positionMenuOverlay(),
              this.checkDropdownHeight(i),
              this.element.setAttribute('data-expanded', !0),
              this.element.setAttribute('aria-expanded', 'true'),
              this.element.classList.add('ecl-mega-menu--one-panel'),
              this.element.classList.remove('ecl-mega-menu--start-panel'),
              this.open.setAttribute('aria-expanded', 'true'),
              this.header &&
                (this.header.classList.add('ecl-site-header--open-menu'),
                this.header.classList.remove(
                  'ecl-site-header--open-menu-start'
                ),
                this.isDesktop ||
                  (this.headerBanner &&
                    (this.headerBanner.style.display = 'none'),
                  this.headerNotification &&
                    (this.headerNotification.style.display = 'none'))),
              this.disableScroll(),
              (this.isOpen = !0),
              this.items.forEach((e) => {
                var t = v(this.linkSelector, e);
                t &&
                  t.hasAttribute('aria-expanded') &&
                  (e === i
                    ? (e.classList.add(
                        'ecl-mega-menu__item--expanded',
                        'ecl-mega-menu__item--current'
                      ),
                      t.setAttribute('aria-expanded', 'true'),
                      (this.backItemLevel1 = e))
                    : (t.setAttribute('aria-expanded', 'false'),
                      e.classList.remove(
                        'ecl-mega-menu__item--current',
                        'ecl-mega-menu__item--expanded'
                      )));
              }),
              !this.isDesktop && this.back && this.back.focus(),
              (this.openPanel = { num: 1, item: i }),
              this.trigger('OnOpenPanel', { panel: 1, item: i }),
              this.isDesktop &&
                (t =
                  (t = v('.ecl-mega-menu__sublist', i)) &&
                  Array.from(t.children).find((e) =>
                    null == (e = e.firstElementChild)
                      ? void 0
                      : e.hasAttribute('aria-expanded')
                  )) &&
                this.handleSecondPanel(t, 'expand', !0);
            break;
          case 'collapse':
            this.closeOpenDropdown();
        }
      }
      handleSecondPanel(i, e, t) {
        void 0 === t && (t = !1);
        var s,
          n = v('.ecl-mega-menu__info', i.closest('.ecl-container'));
        switch (e) {
          case 'expand':
            this.element.classList.remove(
              'ecl-mega-menu--one-panel',
              'ecl-mega-menu--start-panel'
            ),
              this.element.classList.add('ecl-mega-menu--two-panels'),
              this.subItems.forEach((e) => {
                var t = v(this.subLinkSelector, e);
                e === i
                  ? (t &&
                      t.hasAttribute('aria-expanded') &&
                      (t.setAttribute('aria-expanded', 'true'),
                      this.isDesktop ||
                        (t.classList.add('ecl-mega-menu__parent-link'),
                        this.back && this.back.focus()),
                      e.classList.add('ecl-mega-menu__subitem--expanded')),
                    e.classList.add('ecl-mega-menu__subitem--current'),
                    (this.backItemLevel2 = e))
                  : (t &&
                      t.hasAttribute('aria-expanded') &&
                      (t.setAttribute('aria-expanded', 'false'),
                      t.classList.remove('ecl-mega-menu__parent-link'),
                      e.classList.remove('ecl-mega-menu__subitem--expanded')),
                    e.classList.remove('ecl-mega-menu__subitem--current'));
              }),
              (this.openPanel = { num: 2, item: i }),
              (s = i.parentNode.childNodes),
              this.isDesktop
                ? s.forEach((e) => {
                    e !== i && (e.style.display = '');
                  })
                : s.forEach((e) => {
                    e !== i && (e.style.display = 'none');
                  }),
              this.positionMenuOverlay(),
              t ||
                this.checkDropdownHeight(i.closest('.ecl-mega-menu__item'), !1),
              this.trigger('OnOpenPanel', { panel: 2, item: i });
            break;
          case 'collapse':
            this.element.classList.remove('ecl-mega-menu--two-panels'),
              (this.openPanel = { num: 1 }),
              v(this.subLinkSelector, i).setAttribute('aria-expanded', 'false'),
              i.classList.remove(
                'ecl-mega-menu__subitem--expanded',
                'ecl-mega-menu__subitem--current'
              ),
              n && (n.style.top = '');
        }
      }
      handleClickOnItem(e) {
        var t = !1,
          i = e.target.closest('li'),
          s = v('.ecl-mega-menu__mega-container-scrollable', i);
        s && (t = s.contains(e.target)),
          e.target.classList.contains(
            'ecl-mega-menu__mega-container-scrollable'
          ) ||
            t ||
            (this.trigger('onItemClick', { item: i, event: e }),
            (s = i.firstElementChild.getAttribute('aria-expanded')) &&
              i.classList.contains('ecl-mega-menu__item') &&
              (e.preventDefault(),
              e.stopPropagation(),
              this.isDesktop
                ? 'true' === s
                  ? this.handleFirstPanel(i, 'collapse')
                  : (this.closeOpenDropdown(),
                    this.handleFirstPanel(i, 'expand'))
                : this.handleFirstPanel(i, 'expand')));
      }
      handleClickOnSubitem(e) {
        var t = e.target.closest(this.subItemSelector);
        t &&
          t.firstElementChild.hasAttribute('aria-expanded') &&
          (v('.ecl-mega-menu__parent-link', t) ||
            (e.preventDefault(),
            e.stopPropagation(),
            'true' === t.firstElementChild.getAttribute('aria-expanded')
              ? this.handleSecondPanel(t, 'collapse')
              : this.handleSecondPanel(t, 'expand')));
      }
      closeOpenDropdown(e) {
        void 0 === e && (e = !1),
          this.header &&
            (this.header.classList.remove(
              'ecl-site-header--open-menu',
              'ecl-site-header--open-menu-start'
            ),
            this.headerBanner && (this.headerBanner.style.display = 'flex'),
            this.headerNotification) &&
            (this.headerNotification.style.display = 'flex'),
          this.enableScroll(),
          this.element.setAttribute('aria-expanded', 'false'),
          this.element.removeAttribute('data-expanded'),
          this.element.classList.remove(
            'ecl-mega-menu--start-panel',
            'ecl-mega-menu--two-panels',
            'ecl-mega-menu--one-panel'
          ),
          this.open.setAttribute('aria-expanded', 'false'),
          this.inner.classList.remove('ecl-mega-menu__inner--expanded'),
          p('[data-ecl-mega-menu-mega]', this.element).forEach((e) => {
            (e.style.height = ''), (e.style.top = ''), (e.style.opacity = '');
          }),
          this.wrappers &&
            this.wrappers.forEach((e) => {
              e.style = '';
            });
        var i = !1;
        this.items.forEach((e) => {
          e.classList.remove('ecl-mega-menu__item--current');
          var t = v(this.linkSelector, e);
          'true' === t.getAttribute('aria-expanded') &&
            (e.classList.remove('ecl-mega-menu__item--expanded'),
            t.setAttribute('aria-expanded', 'false'),
            (i = t));
        }),
          this.subItems.forEach((e) => {
            e.classList.remove('ecl-mega-menu__subitem--current'),
              (e.style.display = '');
            var t = v(this.subLinkSelector, e);
            t &&
              t.hasAttribute('aria-expanded') &&
              (e.classList.remove('ecl-mega-menu__subitem--expanded'),
              (e.style.display = ''),
              t.setAttribute('aria-expanded', 'false'),
              t.classList.remove('ecl-mega-menu__parent-link'));
          });
        (t = p('.ecl-mega-menu__sublist')) &&
          t.forEach((e) => {
            e.classList.remove(
              'ecl-mega-menu__sublist--no-border',
              '.ecl-mega-menu__sublist--scrollable'
            );
          });
        var t = this.element.getAttribute(this.labelOpenAttribute);
        this.toggleLabel && t && (this.toggleLabel.innerHTML = t),
          (this.openPanel = { num: 0, item: !1 }),
          this.focusTrap.deactivate(),
          !this.isDesktop && this.open && e
            ? this.open.focus()
            : this.isDesktop && i && e && i.focus(),
          this.trigger('onFocusTrapToggle', { active: !1 }),
          (this.isOpen = !1);
      }
      handleFocusOut(e) {
        var t = e.target;
        'true' !== this.element.getAttribute('aria-expanded') ||
          this.isDesktop ||
          t.parentElement.nextSibling ||
          ((e = e.relatedTarget), this.element.contains(e)) ||
          (this.focusTrap.activate(),
          this.trigger('onFocusTrapToggle', {
            active: !0,
            lastFocusedEl: t.parentElement,
          }));
      }
      handleClickGlobal(e) {
        e.target.classList.contains(
          'ecl-mega-menu__mega-container-scrollable'
        ) ||
          (!e.target.classList.contains('ecl-mega-menu__overlay') &&
            this.element.contains(e.target)) ||
          !this.isOpen ||
          this.closeOpenDropdown();
      }
    }),
    (e.Menu = class Ve {
      static autoInit(e, t) {
        return (
          (t = void 0 === (t = (void 0 === t ? {} : t).MENU) ? {} : t),
          (t = new Ve(e, t)).init(),
          (e.ECLMenu = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).openSelector)
              ? '[data-ecl-menu-open]'
              : i,
          s = void 0 === (s = t.closeSelector) ? '[data-ecl-menu-close]' : s,
          n = void 0 === (n = t.backSelector) ? '[data-ecl-menu-back]' : n,
          l = void 0 === (l = t.innerSelector) ? '[data-ecl-menu-inner]' : l,
          a = void 0 === (a = t.listSelector) ? '[data-ecl-menu-list]' : a,
          o = void 0 === (o = t.itemSelector) ? '[data-ecl-menu-item]' : o,
          r = void 0 === (r = t.linkSelector) ? '[data-ecl-menu-link]' : r,
          h =
            void 0 === (h = t.buttonPreviousSelector)
              ? '[data-ecl-menu-items-previous]'
              : h,
          c =
            void 0 === (c = t.buttonNextSelector)
              ? '[data-ecl-menu-items-next]'
              : c,
          d = void 0 === (d = t.caretSelector) ? '[data-ecl-menu-caret]' : d,
          u = void 0 === (u = t.megaSelector) ? '[data-ecl-menu-mega]' : u,
          m =
            void 0 === (m = t.subItemSelector) ? '[data-ecl-menu-subitem]' : m,
          p = void 0 === (p = t.maxLines) ? 2 : p,
          v =
            void 0 === (v = t.maxLinesAttribute)
              ? 'data-ecl-menu-max-lines'
              : v,
          g =
            void 0 === (g = t.labelOpenAttribute)
              ? 'data-ecl-menu-label-open'
              : g,
          b =
            void 0 === (b = t.labelCloseAttribute)
              ? 'data-ecl-menu-label-close'
              : b,
          f = void 0 === (f = t.attachClickListener) || f,
          y = void 0 === (y = t.attachTouchListener) || y,
          L = void 0 === (L = t.attachHoverListener) || L,
          E = void 0 === (E = t.attachFocusListener) || E,
          C = void 0 === (C = t.attachKeyListener) || C,
          w = void 0 === (w = t.attachResizeListener) || w,
          k = void 0 === (k = t.onCloseCallback) ? null : k,
          t = void 0 === (t = t.onOpenCallback) ? null : t;
        if (
          ((this.supportedEvents = ['onOpen', 'onClose']),
          !e || e.nodeType !== Node.ELEMENT_NODE)
        )
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.eventManager = new S()),
          (this.openSelector = i),
          (this.closeSelector = s),
          (this.backSelector = n),
          (this.innerSelector = l),
          (this.listSelector = a),
          (this.itemSelector = o),
          (this.linkSelector = r),
          (this.buttonPreviousSelector = h),
          (this.buttonNextSelector = c),
          (this.caretSelector = d),
          (this.megaSelector = u),
          (this.subItemSelector = m),
          (this.maxLines = p),
          (this.maxLinesAttribute = v),
          (this.labelOpenAttribute = g),
          (this.labelCloseAttribute = b),
          (this.attachClickListener = f),
          (this.attachTouchListener = y),
          (this.attachHoverListener = L),
          (this.attachFocusListener = E),
          (this.attachKeyListener = C),
          (this.attachResizeListener = w),
          (this.onOpenCallback = t),
          (this.onCloseCallback = k),
          (this.direction = 'ltr'),
          (this.open = null),
          (this.close = null),
          (this.toggleLabel = null),
          (this.back = null),
          (this.backItem = null),
          (this.inner = null),
          (this.itemsList = null),
          (this.items = null),
          (this.links = null),
          (this.btnPrevious = null),
          (this.btnNext = null),
          (this.isOpen = !1),
          (this.resizeTimer = null),
          (this.isKeyEvent = !1),
          (this.isDesktop = !1),
          (this.hasOverflow = !1),
          (this.offsetLeft = 0),
          (this.lastVisibleItem = null),
          (this.currentItem = null),
          (this.totalItemsWidth = 0),
          (this.breakpointL = 996),
          (this.windowWidth = null),
          (this.ignorehover = !1),
          (this.handleClickOnOpen = this.handleClickOnOpen.bind(this)),
          (this.handleClickOnClose = this.handleClickOnClose.bind(this)),
          (this.handleClickOnToggle = this.handleClickOnToggle.bind(this)),
          (this.handleClickOnBack = this.handleClickOnBack.bind(this)),
          (this.handleClickOnNextItems =
            this.handleClickOnNextItems.bind(this)),
          (this.handleClickOnPreviousItems =
            this.handleClickOnPreviousItems.bind(this)),
          (this.handleClickOnCaret = this.handleClickOnCaret.bind(this)),
          (this.handleClickGlobal = this.handleClickGlobal.bind(this)),
          (this.openItem = this.openItem.bind(this)),
          (this.closeItem = this.closeItem.bind(this)),
          (this.handleTouchOnCaret = this.handleTouchOnCaret.bind(this)),
          (this.handleHoverOnItem = this.handleHoverOnItem.bind(this)),
          (this.handleHoverOffItem = this.handleHoverOffItem.bind(this)),
          (this.handleFocusIn = this.handleFocusIn.bind(this)),
          (this.handleKeyboard = this.handleKeyboard.bind(this)),
          (this.handleKeyboardGlobal = this.handleKeyboardGlobal.bind(this)),
          (this.handleResize = this.handleResize.bind(this)),
          (this.useDesktopDisplay = this.useDesktopDisplay.bind(this)),
          (this.checkMenuOverflow = this.checkMenuOverflow.bind(this)),
          (this.checkMenuItem = this.checkMenuItem.bind(this)),
          (this.checkMegaMenu = this.checkMegaMenu.bind(this)),
          (this.closeOpenDropdown = this.closeOpenDropdown.bind(this)),
          (this.positionMenuOverlay = this.positionMenuOverlay.bind(this)),
          (this.disableScroll = this.disableScroll.bind(this)),
          (this.enableScroll = this.enableScroll.bind(this));
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        (ECL.components = ECL.components || new Map()),
          (this.direction = getComputedStyle(this.element).direction),
          (this.open = v(this.openSelector, this.element)),
          (this.close = v(this.closeSelector, this.element)),
          (this.toggleLabel = v('.ecl-button__label', this.open)),
          (this.back = v(this.backSelector, this.element)),
          (this.inner = v(this.innerSelector, this.element)),
          (this.itemsList = v(this.listSelector, this.element)),
          (this.btnPrevious = v(this.buttonPreviousSelector, this.element)),
          (this.btnNext = v(this.buttonNextSelector, this.element)),
          (this.items = p(this.itemSelector, this.element)),
          (this.subItems = p(this.subItemSelector, this.element)),
          (this.links = p(this.linkSelector, this.element)),
          (this.carets = p(this.caretSelector, this.element));
        var e = this.element.getAttribute(this.maxLinesAttribute);
        e && (this.maxLines = e),
          (this.isDesktop = this.useDesktopDisplay()),
          this.attachClickListener &&
            (this.open &&
              this.open.addEventListener('click', this.handleClickOnToggle),
            this.close &&
              this.close.addEventListener('click', this.handleClickOnClose),
            this.back &&
              this.back.addEventListener('click', this.handleClickOnBack),
            this.btnPrevious &&
              this.btnPrevious.addEventListener(
                'click',
                this.handleClickOnPreviousItems
              ),
            this.btnNext &&
              this.btnNext.addEventListener(
                'click',
                this.handleClickOnNextItems
              ),
            this.attachClickListener) &&
            document.addEventListener('click', this.handleClickGlobal),
          this.links &&
            this.links.forEach((e) => {
              this.attachFocusListener &&
                (e.addEventListener('focusin', this.closeOpenDropdown),
                e.addEventListener('focusin', this.handleFocusIn)),
                this.attachKeyListener &&
                  e.addEventListener('keyup', this.handleKeyboard);
            }),
          this.carets &&
            this.carets.forEach((e) => {
              this.attachFocusListener &&
                e.addEventListener('focusin', this.handleFocusIn),
                this.attachKeyListener &&
                  e.addEventListener('keyup', this.handleKeyboard),
                this.attachClickListener &&
                  e.addEventListener('click', this.handleClickOnCaret),
                e.parentElement.hasAttribute('data-ecl-has-children') &&
                  this.attachTouchListener &&
                  e.addEventListener('touchstart', this.handleTouchOnCaret);
            }),
          this.subItems &&
            this.subItems.forEach((e) => {
              (e = v('.ecl-menu__sublink', e)),
                this.attachKeyListener &&
                  e &&
                  e.addEventListener('keyup', this.handleKeyboard);
            }),
          this.attachKeyListener &&
            document.addEventListener('keyup', this.handleKeyboardGlobal),
          this.attachResizeListener &&
            ((this.windowWidth = window.innerWidth),
            window.addEventListener('resize', this.handleResize)),
          this.items &&
            this.items.forEach((e) => {
              this.checkMenuItem(e),
                (this.totalItemsWidth += e.offsetWidth),
                e.hasAttribute('data-ecl-has-children') &&
                  this.attachHoverListener &&
                  (e.addEventListener('mouseover', this.handleHoverOnItem),
                  e.addEventListener('mouseout', this.handleHoverOffItem));
            }),
          this.positionMenuOverlay(),
          this.checkMenuOverflow(),
          this.currentItem &&
            ('false' ===
            this.currentItem.getAttribute('data-ecl-menu-item-visible')
              ? this.btnNext
              : this.btnPrevious
            ).classList.add('ecl-menu__item--current'),
          (this.stickyInstance = new Le.Sticky(this.element)),
          (this.focusTrap = o(this.element, {
            onActivate: () => this.element.classList.add('trap-is-active'),
            onDeactivate: () => this.element.classList.remove('trap-is-active'),
          })),
          'rtl' === this.direction &&
            this.element.classList.add('ecl-menu--rtl'),
          setTimeout(() => {
            this.element.classList.add('ecl-menu--transition');
          }, 500),
          this.element.setAttribute('data-ecl-auto-initialized', 'true'),
          ECL.components.set(this.element, this);
      }
      on(e, t) {
        this.eventManager.on(e, t);
      }
      trigger(e, t) {
        this.eventManager.trigger(e, t);
      }
      destroy() {
        this.stickyInstance && this.stickyInstance.remove(),
          this.attachClickListener &&
            (this.open &&
              this.open.removeEventListener('click', this.handleClickOnToggle),
            this.close &&
              this.close.removeEventListener('click', this.handleClickOnClose),
            this.back &&
              this.back.removeEventListener('click', this.handleClickOnBack),
            this.btnPrevious &&
              this.btnPrevious.removeEventListener(
                'click',
                this.handleClickOnPreviousItems
              ),
            this.btnNext &&
              this.btnNext.removeEventListener(
                'click',
                this.handleClickOnNextItems
              ),
            this.attachClickListener) &&
            document.removeEventListener('click', this.handleClickGlobal),
          this.attachKeyListener &&
            this.carets &&
            this.carets.forEach((e) => {
              e.removeEventListener('keyup', this.handleKeyboard);
            }),
          this.items &&
            this.isDesktop &&
            this.items.forEach((e) => {
              e.hasAttribute('data-ecl-has-children') &&
                this.attachHoverListener &&
                (e.removeEventListener('mouseover', this.handleHoverOnItem),
                e.removeEventListener('mouseout', this.handleHoverOffItem));
            }),
          this.links &&
            this.links.forEach((e) => {
              this.attachFocusListener &&
                (e.removeEventListener('focusin', this.closeOpenDropdown),
                e.removeEventListener('focusin', this.handleFocusIn)),
                this.attachKeyListener &&
                  e.removeEventListener('keyup', this.handleKeyboard);
            }),
          this.carets &&
            this.carets.forEach((e) => {
              this.attachFocusListener &&
                e.removeEventListener('focusin', this.handleFocusIn),
                this.attachKeyListener &&
                  e.removeEventListener('keyup', this.handleKeyboard),
                this.attachClickListener &&
                  e.removeEventListener('click', this.handleClickOnCaret);
            }),
          this.subItems &&
            this.subItems.forEach((e) => {
              (e = v('.ecl-menu__sublink', e)),
                this.attachKeyListener &&
                  e &&
                  e.removeEventListener('keyup', this.handleKeyboard);
            }),
          this.attachKeyListener &&
            document.removeEventListener('keyup', this.handleKeyboardGlobal),
          this.attachResizeListener &&
            window.removeEventListener('resize', this.handleResize),
          this.element &&
            (this.element.removeAttribute('data-ecl-auto-initialized'),
            ECL.components.delete(this.element));
      }
      disableScroll() {
        document.body.classList.add('no-scroll');
      }
      enableScroll() {
        document.body.classList.remove('no-scroll');
      }
      useDesktopDisplay() {
        return !(
          g.isMobileOnly ||
          (g.isTablet
            ? (this.element.classList.add('ecl-menu--forced-mobile'), 1)
            : window.innerWidth < this.breakpointL ||
              (this.element.classList.remove('ecl-menu--forced-mobile'), 0))
        );
      }
      handleResize() {
        window.innerWidth !== this.windowWidth &&
          ((document.documentElement.scrollTop = 0),
          (document.body.scrollTop = 0),
          this.element.classList.remove('ecl-menu--transition'),
          'rtl' === this.direction
            ? this.element.classList.add('ecl-menu--rtl')
            : this.element.classList.remove('ecl-menu--rtl'),
          clearTimeout(this.resizeTimer),
          (this.resizeTimer = setTimeout(() => {
            this.element.classList.remove('ecl-menu--forced-mobile'),
              (this.isDesktop = this.useDesktopDisplay()),
              this.isDesktop && this.focusTrap.deactivate(),
              (this.totalItemsWidth = 0),
              this.items &&
                this.items.forEach((e) => {
                  this.checkMenuItem(e),
                    (this.totalItemsWidth += e.offsetWidth);
                }),
              this.checkMenuOverflow(),
              this.positionMenuOverlay(),
              this.element.classList.add('ecl-menu--transition'),
              (this.windowWidth = window.innerWidth);
          }, 200)));
      }
      positionMenuOverlay() {
        var t = v('.ecl-menu__overlay', this.element);
        this.isDesktop
          ? (this.enableScroll(),
            this.inner && (this.inner.style.top = ''),
            t && (t.style.top = ''))
          : (this.isOpen && this.disableScroll(),
            setTimeout(() => {
              var e = v('.ecl-site-header__header', document);
              e &&
                ((e = e.getBoundingClientRect()),
                (e = Math.round(e.bottom)),
                t && (t.style.top = e + 'px'),
                this.inner) &&
                (this.inner.style.top = e + 'px');
            }, 500));
      }
      checkMenuOverflow() {
        this.itemsList || (this.itemsList = v('.ecl-menu__list', this.element)),
          this.itemsList &&
            this.inner &&
            this.btnNext &&
            this.btnPrevious &&
            this.items &&
            ((this.hasOverflow =
              this.totalItemsWidth > this.inner.offsetWidth + 16),
            this.hasOverflow && this.isDesktop
              ? (this.inner &&
                  this.inner.classList.add('ecl-menu__inner--has-overflow'),
                this.items &&
                  this.items.forEach((e) => {
                    e.removeAttribute('data-ecl-menu-item-visible');
                  }),
                0 === this.offsetLeft
                  ? ((this.btnNext.style.display = 'flex'),
                    'rtl' === this.direction
                      ? this.items.every((e) =>
                          e.getBoundingClientRect().left <
                          this.itemsList.getBoundingClientRect().left
                            ? ((this.lastVisibleItem = e), !1)
                            : (e.setAttribute('data-ecl-menu-item-visible', !0),
                              !0)
                        )
                      : this.items.every((e) =>
                          e.getBoundingClientRect().right >
                          this.itemsList.getBoundingClientRect().right
                            ? ((this.lastVisibleItem = e), !1)
                            : (e.setAttribute('data-ecl-menu-item-visible', !0),
                              !0)
                        ))
                  : 'rtl' === this.direction
                    ? this.items.forEach((e) => {
                        e.getBoundingClientRect().right <=
                          this.inner.getBoundingClientRect().right &&
                          e.setAttribute('data-ecl-menu-item-visible', !0);
                      })
                    : this.items.forEach((e) => {
                        e.getBoundingClientRect().left >=
                          this.inner.getBoundingClientRect().left &&
                          e.setAttribute('data-ecl-menu-item-visible', !0);
                      }))
              : (this.btnPrevious && (this.btnPrevious.style.display = 'none'),
                this.btnNext && (this.btnNext.style.display = 'none'),
                this.itemsList && (this.itemsList.style.left = '0'),
                this.inner &&
                  this.inner.classList.remove('ecl-menu__inner--has-overflow'),
                (this.offsetLeft = 0),
                (this.totalItemsWidth = 0),
                (this.lastVisibleItem = null)));
      }
      checkMenuItem(e) {
        var t = v(this.linkSelector, e);
        if (
          (e.classList.contains('ecl-menu__item--current') &&
            (this.currentItem = e),
          this.isDesktop)
        ) {
          if (!(this.maxLines < 1)) {
            e.style.alignItems = 'flex-start';
            for (
              var i = t.offsetWidth,
                s = window.getComputedStyle(t),
                n =
                  parseInt(s.lineHeight, 10) * this.maxLines +
                  parseInt(s.paddingTop, 10) +
                  parseInt(s.paddingBottom, 10);
              t.offsetHeight > n &&
              ((t.style.width = (i += 1) + 'px'), !(1e3 < i));

            );
            e.style.alignItems = 'unset';
          }
        } else t.style.width = 'auto';
      }
      checkMegaMenu(e) {
        var t = v(this.megaSelector, e);
        if (t && this.inner) {
          if ((i = p(this.subItemSelector, t)).length < 5)
            e.classList.add('ecl-menu__item--col1');
          else if (i.length < 9) e.classList.add('ecl-menu__item--col2');
          else {
            if (!(i.length < 13))
              return (
                e.classList.add('ecl-menu__item--full'),
                void ('rtl' === this.direction
                  ? (t.style.right = this.offsetLeft + 'px')
                  : (t.style.left = this.offsetLeft + 'px'))
              );
            e.classList.add('ecl-menu__item--col3');
          }
          var i = t.getBoundingClientRect(),
            s = this.inner.getBoundingClientRect(),
            e = e.getBoundingClientRect(),
            i = i.width;
          s.width < e.left - s.left + i
            ? t.classList.add('ecl-menu__mega--rtl')
            : t.classList.remove('ecl-menu__mega--rtl');
        }
      }
      handleKeyboard(e) {
        var t = e.target,
          i = t.classList,
          s = this.element.getAttribute('aria-expanded'),
          n = t.closest(this.itemSelector);
        if ('Escape' === e.key || 'Esc' === e.key)
          document.activeElement === t && t.blur(),
            'false' === s &&
              ((l = v('.ecl-menu__button-caret', n)) && l.focus(),
              this.closeOpenDropdown());
        else {
          if (
            i.contains('ecl-menu__button-caret') &&
            'false' === s &&
            'ArrowDown' === e.key
          )
            if (
              (e.preventDefault(),
              (l = v('.ecl-menu__sublink:first-of-type', n)))
            )
              return this.handleHoverOnItem(e), void l.focus();
          if (
            i.contains('ecl-menu__link') ||
            i.contains('ecl-menu__button-caret')
          ) {
            if ('ArrowLeft' === e.key || 'ArrowUp' === e.key) {
              if (
                (e.preventDefault(),
                (s = t.previousSibling) &&
                  s.classList.contains('ecl-menu__link'))
              )
                return void s.focus();
              if ((s = t.parentElement.previousSibling)) {
                var l,
                  n = s.classList.contains('ecl-menu__item--has-children')
                    ? '.ecl-menu__button-caret'
                    : '.ecl-menu__link';
                if ((l = v(n, s))) return void l.focus();
              }
            }
            if ('ArrowRight' === e.key || 'ArrowDown' === e.key) {
              if (
                (e.preventDefault(),
                (n = t.nextSibling) &&
                  n.classList.contains('ecl-menu__button-caret'))
              )
                return void n.focus();
              (n = t.parentElement.nextSibling) &&
                (s = v('.ecl-menu__link', n)) &&
                s.focus();
            }
          }
          i.contains('ecl-menu__sublink') &&
            ('ArrowDown' === e.key &&
            (l = t.parentElement.nextSibling) &&
            (n = v('.ecl-menu__sublink', l))
              ? n.focus()
              : 'ArrowUp' === e.key &&
                ((s = t.parentElement.previousSibling)
                  ? (i = v('.ecl-menu__sublink', s)) && i.focus()
                  : (l = v(
                      this.itemSelector +
                        '[aria-expanded="true"] ' +
                        this.caretSelector,
                      this.element
                    )) && l.focus()));
        }
      }
      handleKeyboardGlobal(e) {
        var t = this.element.getAttribute('aria-expanded');
        ('Escape' !== e.key && 'Esc' !== e.key) ||
          ('true' === t && this.handleClickOnClose(),
          this.items.forEach((e) => {
            e.setAttribute('aria-expanded', 'false');
          }),
          this.carets.forEach((e) => {
            e.setAttribute('aria-expanded', 'false');
          }));
      }
      handleClickOnOpen(e) {
        e.preventDefault(),
          this.element.setAttribute('aria-expanded', 'true'),
          this.inner.setAttribute('aria-hidden', 'false'),
          this.disableScroll(),
          this.open.setAttribute('aria-expanded', 'true'),
          (this.isOpen = !0),
          this.focusTrap.activate();
        var t = this.element.getAttribute(this.labelCloseAttribute);
        return (
          this.toggleLabel && t && (this.toggleLabel.innerHTML = t),
          0 < this.links.length && this.links[0].focus(),
          this.trigger('onOpen', e),
          this
        );
      }
      handleClickOnClose(e) {
        this.element.setAttribute('aria-expanded', 'false'),
          this.inner.classList.remove('ecl-menu__inner--expanded'),
          this.inner.setAttribute('aria-hidden', 'true'),
          this.open.setAttribute('aria-expanded', 'false'),
          this.items.forEach((e) => {
            e.classList.remove('ecl-menu__item--expanded'),
              e.setAttribute('aria-expanded', 'false');
          });
        var t = this.element.getAttribute(this.labelOpenAttribute);
        return (
          this.toggleLabel && t && (this.toggleLabel.innerHTML = t),
          this.enableScroll(),
          this.focusTrap.deactivate(),
          (this.isOpen = !1),
          this.trigger('onClose', e),
          this
        );
      }
      handleClickOnToggle(e) {
        e.preventDefault(),
          this.isOpen ? this.handleClickOnClose(e) : this.handleClickOnOpen(e);
      }
      handleClickOnBack() {
        var e;
        return (
          this.inner.classList.remove('ecl-menu__inner--expanded'),
          this.items.forEach((e) => {
            e.classList.remove('ecl-menu__item--expanded'),
              e.setAttribute('aria-expanded', 'false');
          }),
          this.backItem &&
            (e = v(this.caretSelector, this.backItem)) &&
            e.focus(),
          this
        );
      }
      handleClickOnPreviousItems() {
        this.itemsList &&
          this.btnNext &&
          ((this.offsetLeft = 0),
          'rtl' === this.direction
            ? ((this.itemsList.style.right = '0'),
              (this.itemsList.style.left = 'auto'))
            : ((this.itemsList.style.left = '0'),
              (this.itemsList.style.right = 'auto')),
          (this.btnPrevious.style.display = 'none'),
          (this.btnNext.style.display = 'flex'),
          this.items) &&
          this.items.forEach((e) => {
            this.checkMenuItem(e),
              e.toggleAttribute('data-ecl-menu-item-visible');
          });
      }
      handleClickOnNextItems() {
        this.itemsList &&
          this.items &&
          this.btnPrevious &&
          this.lastVisibleItem &&
          ((this.btnPrevious.style.display = 'flex'),
          (this.btnNext.style.display = 'none'),
          'rtl' === this.direction
            ? ((this.offsetLeft =
                this.itemsList.getBoundingClientRect().right -
                this.lastVisibleItem.getBoundingClientRect().right -
                this.btnPrevious.offsetWidth),
              (this.itemsList.style.right = '-' + this.offsetLeft + 'px'),
              (this.itemsList.style.left = 'auto'))
            : ((this.offsetLeft =
                this.lastVisibleItem.getBoundingClientRect().left -
                this.itemsList.getBoundingClientRect().left -
                this.btnPrevious.offsetWidth),
              (this.itemsList.style.left = '-' + this.offsetLeft + 'px'),
              (this.itemsList.style.right = 'auto')),
          this.items) &&
          this.items.forEach((e) => {
            this.checkMenuItem(e),
              e.toggleAttribute('data-ecl-menu-item-visible');
          });
      }
      handleClickOnCaret(e) {
        var t = this.element.getAttribute('aria-expanded'),
          i = e.target.closest(this.itemSelector);
        'false' === t
          ? 'true' === i.getAttribute('aria-expanded')
            ? this.closeItem(e)
            : this.openItem(e)
          : (this.inner.classList.add('ecl-menu__inner--expanded'),
            this.items.forEach((e) => {
              e === i
                ? (e.classList.add('ecl-menu__item--expanded'),
                  e.setAttribute('aria-expanded', 'true'),
                  (this.backItem = e))
                : (e.classList.remove('ecl-menu__item--expanded'),
                  e.setAttribute('aria-expanded', 'false'));
            }),
            this.checkMegaMenu(i),
            (t = v('.ecl-menu__subitem:first-of-type .ecl-menu__sublink', i)) &&
              t.focus(),
            (this.ignorehover = !1));
      }
      openItem(e) {
        var i = e.target.closest(this.itemSelector);
        (this.hasOverflow && !i.hasAttribute('data-ecl-menu-item-visible')) ||
          (this.items.forEach((e) => {
            var t = v(this.caretSelector, e);
            e === i
              ? (e.setAttribute('aria-expanded', 'true'),
                t && t.setAttribute('aria-expanded', 'true'))
              : (e.setAttribute('aria-expanded', 'false'),
                t && (t.setAttribute('aria-expanded', 'false'), t.blur()));
          }),
          this.checkMegaMenu(i));
      }
      closeItem(e) {
        return (
          (e = e.target.closest(this.itemSelector)).setAttribute(
            'aria-expanded',
            'false'
          ),
          (e = v(this.caretSelector, e)) &&
            e.setAttribute('aria-expanded', 'false'),
          this
        );
      }
      handleTouchOnCaret() {
        this.ignorehover = !0;
      }
      handleHoverOnItem(e) {
        this.ignorehover || this.openItem(e);
      }
      handleHoverOffItem(e) {
        this.ignorehover || this.closeItem(e);
      }
      closeOpenDropdown() {
        var e = v(this.itemSelector + "[aria-expanded='true']", this.element);
        e &&
          (e.setAttribute('aria-expanded', 'false'),
          (e = v(this.caretSelector, e))) &&
          e.setAttribute('aria-expanded', 'false');
      }
      handleFocusIn(e) {
        (e = e.target),
          this.isDesktop &&
            this.hasOverflow &&
            (e
              .closest('[data-ecl-menu-item]')
              .hasAttribute('data-ecl-menu-item-visible') ||
              (0 === this.offsetLeft
                ? this.handleClickOnNextItems()
                : this.handleClickOnPreviousItems()));
      }
      handleClickGlobal(e) {
        !this.isOpen ||
          this.inner.contains(e.target) ||
          this.open.contains(e.target) ||
          this.handleClickOnClose(e);
      }
    }),
    (e.Modal = class Ge {
      static autoInit(e, t) {
        return (
          (t = void 0 === (t = (void 0 === t ? {} : t).MODAL) ? {} : t),
          (t = new Ge(e, t)).init(),
          (e.ECLModal = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).toggleSelector)
              ? ''
              : i,
          s = void 0 === (s = t.closeSelector) ? '[data-ecl-modal-close]' : s,
          n = void 0 === (n = t.scrollSelector) ? '[data-ecl-modal-scroll]' : n,
          l = void 0 === (l = t.attachClickListener) || l,
          t = void 0 === (t = t.attachKeyListener) || t;
        if (!e || e.nodeType !== Node.ELEMENT_NODE)
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.toggleSelector = i),
          (this.closeSelector = s),
          (this.scrollSelector = n),
          (this.attachClickListener = l),
          (this.attachKeyListener = t),
          (this.toggle = null),
          (this.close = null),
          (this.scroll = null),
          (this.focusTrap = null),
          (this.openModal = this.openModal.bind(this)),
          (this.closeModal = this.closeModal.bind(this)),
          (this.handleClickOnToggle = this.handleClickOnToggle.bind(this)),
          (this.handleKeyboardGlobal = this.handleKeyboardGlobal.bind(this));
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        (ECL.components = ECL.components || new Map()),
          this.attachKeyListener &&
            document.addEventListener('keyup', this.handleKeyboardGlobal),
          '' === this.toggleSelector &&
            (this.toggleSelector =
              '#' + this.element.getAttribute('data-ecl-modal-toggle')),
          (this.toggle = document.querySelector(this.toggleSelector)),
          this.toggle &&
            (this.toggle.setAttribute('aria-controls', this.element.id),
            this.toggle.getAttribute('aria-haspopup') ||
              this.toggle.setAttribute('aria-haspopup', 'dialog')),
          (this.close = p(this.closeSelector, this.element)),
          (this.scroll = v(this.scrollSelector, this.element)),
          (this.focusTrap = o(this.element)),
          (this.isDialogSupported = !0),
          window.HTMLDialogElement || (this.isDialogSupported = !1),
          this.toggle &&
            this.attachClickListener &&
            this.toggle.addEventListener('click', this.handleClickOnToggle),
          this.close &&
            this.attachClickListener &&
            this.close.forEach((e) => {
              e.addEventListener('click', this.closeModal);
            }),
          this.element.setAttribute('data-ecl-auto-initialized', 'true'),
          ECL.components.set(this.element, this);
      }
      destroy() {
        this.toggle &&
          this.attachClickListener &&
          this.toggle.removeEventListener('click', this.handleClickOnToggle),
          this.attachKeyListener &&
            document.removeEventListener('keyup', this.handleKeyboardGlobal),
          this.close &&
            this.attachClickListener &&
            this.close.forEach((e) => {
              e.removeEventListener('click', this.closeModal);
            }),
          this.element.removeAttribute('data-ecl-auto-initialized'),
          ECL.components.delete(this.element);
      }
      checkScroll() {
        this.scroll &&
          (this.scroll.parentNode.classList.remove(
            'ecl-modal__body--has-scroll'
          ),
          this.scroll.scrollHeight > this.scroll.clientHeight) &&
          this.scroll.parentNode.classList.add('ecl-modal__body--has-scroll');
      }
      handleClickOnToggle(e) {
        e.preventDefault(),
          'true' === this.toggle.getAttribute('aria-expanded')
            ? this.closeModal()
            : this.openModal();
      }
      openModal() {
        this.isDialogSupported
          ? this.element.showModal()
          : this.element.setAttribute('open', ''),
          this.checkScroll(),
          this.focusTrap.activate();
      }
      closeModal() {
        this.isDialogSupported
          ? this.element.close()
          : this.element.removeAttribute('open'),
          this.focusTrap.active && this.focusTrap.deactivate();
      }
      handleKeyboardGlobal(e) {
        ('Escape' !== e.key && 'Esc' !== e.key) || this.closeModal();
      }
    }),
    (e.NewsTicker = class We {
      static autoInit(e, t) {
        return (
          (t = void 0 === (t = (void 0 === t ? {} : t).NEWS_TICKER) ? {} : t),
          (t = new We(e, t)).init(),
          (e.ECLNewsTicker = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).playSelector)
              ? '[data-ecl-news-ticker-play]'
              : i,
          s =
            void 0 === (s = t.pauseSelector)
              ? '[data-ecl-news-ticker-pause]'
              : s,
          n =
            void 0 === (n = t.prevSelector) ? '[data-ecl-news-ticker-prev]' : n,
          l =
            void 0 === (l = t.nextSelector) ? '[data-ecl-news-ticker-next]' : l,
          a =
            void 0 === (a = t.containerClass)
              ? '.ecl-news-ticker__container'
              : a,
          o = void 0 === (o = t.contentClass) ? '.ecl-news-ticker__content' : o,
          r = void 0 === (r = t.slidesClass) ? '.ecl-news-ticker__slides' : r,
          h = void 0 === (h = t.slideClass) ? '.ecl-news-ticker__slide' : h,
          c =
            void 0 === (c = t.currentSlideClass)
              ? '.ecl-news-ticker__counter--current'
              : c,
          d =
            void 0 === (d = t.controlsClass) ? '.ecl-news-ticker__controls' : d,
          u = void 0 === (u = t.attachClickListener) || u,
          t = void 0 === (t = t.attachResizeListener) || t;
        if (!e || e.nodeType !== Node.ELEMENT_NODE)
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.playSelector = i),
          (this.pauseSelector = s),
          (this.prevSelector = n),
          (this.nextSelector = l),
          (this.containerClass = a),
          (this.contentClass = o),
          (this.slidesClass = r),
          (this.slideClass = h),
          (this.currentSlideClass = c),
          (this.controlsClass = d),
          (this.attachClickListener = u),
          (this.attachResizeListener = t),
          (this.container = null),
          (this.content = null),
          (this.slides = null),
          (this.btnPlay = null),
          (this.btnPause = null),
          (this.btnPrev = null),
          (this.btnNext = null),
          (this.index = 1),
          (this.total = 0),
          (this.allowShift = !0),
          (this.autoPlay = null),
          (this.autoPlayInterval = null),
          (this.hoverAutoPlay = null),
          (this.resizeTimer = null),
          (this.cloneFirstSLide = null),
          (this.cloneLastSLide = null),
          (this.resizeTimer = null),
          (this.handleAutoPlay = this.handleAutoPlay.bind(this)),
          (this.handleMouseOver = this.handleMouseOver.bind(this)),
          (this.handleMouseOut = this.handleMouseOut.bind(this)),
          (this.shiftSlide = this.shiftSlide.bind(this)),
          (this.checkIndex = this.checkIndex.bind(this)),
          (this.moveSlides = this.moveSlides.bind(this)),
          (this.handleResize = this.handleResize.bind(this)),
          (this.handleFocus = this.handleFocus.bind(this));
      }
      init() {
        var e, t;
        if (ECL)
          return (
            (ECL.components = ECL.components || new Map()),
            (this.btnPlay = v(this.playSelector, this.element)),
            (this.btnPause = v(this.pauseSelector, this.element)),
            (this.btnPrev = v(this.prevSelector, this.element)),
            (this.btnNext = v(this.nextSelector, this.element)),
            (this.slidesContainer = v(this.slidesClass, this.element)),
            (this.container = v(this.containerClass, this.element)),
            (this.content = v(this.contentClass, this.element)),
            (this.controls = v(this.controlsClass, this.element)),
            (this.slides = p(this.slideClass, this.element)),
            (this.total = this.slides.length),
            this.total <= 1 && this.controls
              ? ((this.content.style.height = 'auto'),
                !(this.controls.style.display = 'none'))
              : ((e = this.slides[0]),
                (t = this.slides[this.slides.length - 1]),
                (this.cloneFirstSLide = e.cloneNode(!0)),
                (this.cloneLastSLide = t.cloneNode(!0)),
                this.slidesContainer.appendChild(this.cloneFirstSLide),
                this.slidesContainer.insertBefore(this.cloneLastSLide, e),
                (this.slides = p(this.slideClass, this.element)),
                this.handleResize(),
                this.handleAutoPlay(),
                this.attachClickListener &&
                  this.btnPlay &&
                  this.btnPause &&
                  (this.btnPlay.addEventListener('click', this.handleAutoPlay),
                  this.btnPause.addEventListener('click', this.handleAutoPlay)),
                this.attachClickListener &&
                  this.btnNext &&
                  this.btnNext.addEventListener(
                    'click',
                    this.shiftSlide.bind(this, 1, !0)
                  ),
                this.attachClickListener &&
                  this.btnPrev &&
                  this.btnPrev.addEventListener(
                    'click',
                    this.shiftSlide.bind(this, -1, !0)
                  ),
                this.slidesContainer &&
                  (this.slidesContainer.addEventListener(
                    'transitionend',
                    this.checkIndex
                  ),
                  this.slidesContainer.addEventListener(
                    'mouseover',
                    this.handleMouseOver
                  ),
                  this.slidesContainer.addEventListener(
                    'mouseout',
                    this.handleMouseOut
                  )),
                this.container &&
                  this.container.addEventListener(
                    'focus',
                    this.handleFocus,
                    !0
                  ),
                this.attachResizeListener &&
                  window.addEventListener('resize', this.handleResize),
                this.element.setAttribute('data-ecl-auto-initialized', 'true'),
                ECL.components.set(this.element, this),
                this)
          );
        throw new TypeError('Called init but ECL is not present');
      }
      destroy() {
        this.cloneFirstSLide &&
          this.cloneLastSLide &&
          (this.cloneFirstSLide.remove(), this.cloneLastSLide.remove()),
          this.btnPlay && this.btnPlay.replaceWith(this.btnPlay.cloneNode(!0)),
          this.btnPause &&
            this.btnPause.replaceWith(this.btnPause.cloneNode(!0)),
          this.btnNext && this.btnNext.replaceWith(this.btnNext.cloneNode(!0)),
          this.btnPrev && this.btnPrev.replaceWith(this.btnPrev.cloneNode(!0)),
          this.slidesContainer &&
            (this.slidesContainer.removeEventListener(
              'transitionend',
              this.checkIndex
            ),
            this.slidesContainer.removeEventListener(
              'mouseover',
              this.handleMouseOver
            ),
            this.slidesContainer.removeEventListener(
              'mouseout',
              this.handleMouseOut
            )),
          this.container &&
            this.container.removeEventListener('focus', this.handleFocus, !0),
          this.attachResizeListener &&
            window.removeEventListener('resize', this.handleResize),
          this.autoPlayInterval &&
            (clearInterval(this.autoPlayInterval), (this.autoPlay = null)),
          this.element &&
            (this.element.removeAttribute('data-ecl-auto-initialized'),
            ECL.components.delete(this.element));
      }
      shiftSlide(e, t) {
        this.allowShift &&
          ((this.index = 1 === e ? this.index + 1 : this.index - 1),
          this.moveSlides(!0)),
          t && this.autoPlay && this.handleAutoPlay(),
          (this.allowShift = !1);
      }
      moveSlides(e) {
        var t = this.slides[this.index].offsetTop,
          i = this.slides[this.index].offsetHeight;
        (this.content.style.height = i + 'px'),
          (this.slidesContainer.style.transitionDuration = e ? '0.4s' : '1ms'),
          (this.slidesContainer.style.transform =
            'translate3d(0px, -' + t + 'px, 0px)');
      }
      checkIndex() {
        0 === this.index && ((this.index = this.total), this.moveSlides(!1)),
          this.index === this.total + 1 &&
            ((this.index = 1), this.moveSlides(!1)),
          (v(this.currentSlideClass, this.element).textContent = this.index),
          this.slides &&
            this.slides.forEach((e, t) => {
              var i = v('.ecl-link', e);
              this.index === t
                ? (e.removeAttribute('inert', 'true'),
                  i && i.removeAttribute('tabindex', -1))
                : (e.setAttribute('inert', 'true'),
                  i && i.setAttribute('tabindex', -1));
            }),
          (this.allowShift = !0);
      }
      handleAutoPlay() {
        var e;
        this.autoPlay
          ? (clearInterval(this.autoPlayInterval),
            (this.autoPlay = !1),
            (e = document.activeElement === this.btnPause),
            (this.btnPlay.style.display = 'flex'),
            (this.btnPause.style.display = 'none'),
            e && this.btnPlay.focus())
          : ((this.autoPlayInterval = setInterval(() => {
              this.shiftSlide(1);
            }, 5e3)),
            (this.autoPlay = !0),
            (e = document.activeElement === this.btnPlay),
            (this.btnPlay.style.display = 'none'),
            (this.btnPause.style.display = 'flex'),
            e && this.btnPause.focus());
      }
      handleMouseOver() {
        return (
          (this.hoverAutoPlay = this.autoPlay),
          this.hoverAutoPlay && this.handleAutoPlay(),
          this
        );
      }
      handleMouseOut() {
        return this.hoverAutoPlay && this.handleAutoPlay(), this;
      }
      handleResize() {
        clearTimeout(this.resizeTimer),
          (this.resizeTimer = setTimeout(() => {
            this.moveSlides(!1);
          }, 100));
      }
      handleFocus(e) {
        return (
          (e = e.target) &&
            e.contains(document.activeElement) &&
            this.autoPlay &&
            this.handleAutoPlay(),
          this
        );
      }
    }),
    (e.Notification = class Ue {
      static autoInit(e, t) {
        return (
          (t = void 0 === (t = (void 0 === t ? {} : t).NOTIFICATION) ? {} : t),
          (t = new Ue(e, t)).init(),
          (e.ECLNotification = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).closeSelector)
              ? '[data-ecl-notification-close]'
              : i,
          t = void 0 === (t = t.attachClickListener) || t;
        if (
          ((this.supportedEvents = ['onClose']),
          !e || e.nodeType !== Node.ELEMENT_NODE)
        )
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.eventManager = new S()),
          (this.closeSelector = i),
          (this.attachClickListener = t),
          (this.close = null),
          (this.handleClickOnClose = this.handleClickOnClose.bind(this));
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        (ECL.components = ECL.components || new Map()),
          (this.close = v(this.closeSelector, this.element)),
          this.attachClickListener &&
            this.close &&
            this.close.addEventListener('click', this.handleClickOnClose),
          this.element.setAttribute('data-ecl-auto-initialized', 'true'),
          ECL.components.set(this.element, this);
      }
      on(e, t) {
        this.eventManager.on(e, t);
      }
      trigger(e, t) {
        this.eventManager.trigger(e, t);
      }
      destroy() {
        this.attachClickListener &&
          this.close &&
          this.close.removeEventListener('click', this.handleClickOnClose),
          this.element &&
            (this.element.removeAttribute('data-ecl-auto-initialized'),
            ECL.components.delete(this.element));
      }
      handleClickOnClose(e) {
        return (
          this.element.parentNode &&
            this.element.parentNode.removeChild(this.element),
          this.trigger('onClose', e),
          this
        );
      }
    }),
    (e.Popover = class je {
      static autoInit(e, t) {
        return (
          (t = void 0 === (t = (void 0 === t ? {} : t).POPOVER) ? {} : t),
          (t = new je(e, t)).init(),
          (e.ECLPopover = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).toggleSelector)
              ? '[data-ecl-popover-toggle]'
              : i,
          s = void 0 === (s = t.closeSelector) ? '[data-ecl-popover-close]' : s,
          n = void 0 === (n = t.attachClickListener) || n,
          t = void 0 === (t = t.attachKeyListener) || t;
        if (!e || e.nodeType !== Node.ELEMENT_NODE)
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.toggleSelector = i),
          (this.closeSelector = s),
          (this.attachClickListener = n),
          (this.attachKeyListener = t),
          (this.toggle = null),
          (this.close = null),
          (this.target = null),
          (this.container = null),
          (this.resizeTimer = null),
          (this.openPopover = this.openPopover.bind(this)),
          (this.closePopover = this.closePopover.bind(this)),
          (this.positionPopover = this.positionPopover.bind(this)),
          (this.handleClickOnToggle = this.handleClickOnToggle.bind(this)),
          (this.handleKeyboardGlobal = this.handleKeyboardGlobal.bind(this)),
          (this.handleClickGlobal = this.handleClickGlobal.bind(this)),
          (this.checkPosition = this.checkPosition.bind(this)),
          (this.resetStyles = this.resetStyles.bind(this)),
          (this.POPOVER_CLASSES = {
            TOP: 'ecl-popover--top',
            BOTTOM: 'ecl-popover--bottom',
            LEFT: 'ecl-popover--left',
            RIGHT: 'ecl-popover--right',
            PUSH_TOP: 'ecl-popover--push-top',
            PUSH_BOTTOM: 'ecl-popover--push-bottom',
            PUSH_LEFT: 'ecl-popover--push-left',
            PUSH_RIGHT: 'ecl-popover--push-right',
          });
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        if (
          ((ECL.components = ECL.components || new Map()),
          (this.toggle = v(this.toggleSelector, this.element)),
          (this.close = v(this.closeSelector, this.element)),
          (this.container = v('.ecl-popover__container', this.element)),
          this.attachKeyListener &&
            document.addEventListener('keyup', this.handleKeyboardGlobal),
          this.attachClickListener &&
            (document.addEventListener('click', this.handleClickGlobal),
            this.close) &&
            this.close.addEventListener('click', this.handleClickOnToggle),
          (this.target = document.querySelector(
            '#' + this.toggle.getAttribute('aria-controls')
          )),
          !this.target)
        )
          throw new TypeError(
            'Target has to be provided for popover (aria-controls)'
          );
        window.addEventListener('resize', this.checkPosition),
          document.addEventListener('scroll', this.checkPosition),
          this.attachClickListener &&
            this.toggle &&
            this.toggle.addEventListener('click', this.handleClickOnToggle),
          this.element.setAttribute('data-ecl-auto-initialized', 'true'),
          ECL.components.set(this.element, this);
      }
      destroy() {
        this.attachClickListener &&
          this.toggle &&
          this.toggle.removeEventListener('click', this.handleClickOnToggle),
          this.attachClickListener &&
            this.close &&
            this.close.removeEventListener('click', this.handleClickOnToggle),
          window.removeEventListener('resize', this.checkPosition),
          document.removeEventListener('scroll', this.checkPosition),
          this.attachKeyListener &&
            document.removeEventListener('keyup', this.handleKeyboardGlobal),
          this.attachClickListener &&
            document.removeEventListener('click', this.handleClickGlobal),
          'true' === this.toggle.getAttribute('aria-expanded') &&
            this.closePopover(),
          this.element &&
            (this.element.removeAttribute('data-ecl-auto-initialized'),
            ECL.components.delete(this.element));
      }
      handleClickOnToggle(e) {
        e.preventDefault(),
          'true' === this.toggle.getAttribute('aria-expanded')
            ? this.closePopover()
            : (this.openPopover(), this.positionPopover());
      }
      openPopover() {
        this.toggle.setAttribute('aria-expanded', 'true'),
          (this.target.hidden = !1);
      }
      closePopover() {
        this.toggle.setAttribute('aria-expanded', 'false'),
          this.resetStyles(),
          (this.target.hidden = !0);
      }
      resetStyles() {
        Object.keys(this.POPOVER_CLASSES).forEach((e) => {
          Object.prototype.hasOwnProperty.call(this.POPOVER_CLASSES, e) &&
            this.element.classList.remove(this.POPOVER_CLASSES[e]);
        }),
          this.target.style.setProperty('--ecl-popover-position', ''),
          (this.container.style.left = ''),
          (this.container.style.right = ''),
          (this.container.style.top = ''),
          (this.container.style.bottom = ''),
          (this.container.style.transform = ''),
          (this.target.firstElementChild.width = '');
      }
      positionPopover() {
        this.resetStyles();
        var e = this.toggle.getBoundingClientRect(),
          t = window.innerHeight,
          i = window.innerWidth,
          s = e.top,
          n = t - e.bottom,
          l = e.left,
          e = i - e.right,
          a = '',
          a =
            n < s && l < s && e < s
              ? 'top'
              : l < n && e < n
                ? 'bottom'
                : e < l
                  ? 'left'
                  : 'right',
          s =
            (this.element.classList.add('ecl-popover--' + a),
            this.handlePushClass(i, t, a),
            this.target.firstElementChild),
          n = window.getComputedStyle(s),
          t = parseInt(n.getPropertyValue('max-width'), 10),
          o = parseInt(n.getPropertyValue('min-width'), 10),
          n = 2 * parseInt(n.getPropertyValue('padding-left'), 10),
          r = '';
        (r =
          'left' === a || 'right' === a
            ? 0.9 * ('left' === a ? l : e)
            : 0.9 *
              (i -
                (this.toggle.getBoundingClientRect().right -
                  this.toggle.getBoundingClientRect().left) /
                  2 +
                this.target.offsetWidth / 2)),
          (s.style.width =
            t + n < r ? t + 'px' : r < o + n ? o + 'px' : r - n + 'px');
      }
      handlePushClass(e, t, i) {
        var s = this.toggle.getBoundingClientRect(),
          n = this.target.getBoundingClientRect();
        'left' === i || 'right' === i
          ? n.top < 0
            ? (this.element.classList.add(this.POPOVER_CLASSES.PUSH_TOP),
              (this.container.style.top = '-' + Math.round(s.top) + 'px'),
              (this.container.style.bottom = ''),
              (this.container.style.transform = ''))
            : n.bottom > t &&
              (this.element.classList.add(this.POPOVER_CLASSES.PUSH_BOTTOM),
              (this.container.style.bottom =
                '-' + Math.round(t - (s.bottom + 8)) + 'px'),
              (this.container.style.top = ''),
              (this.container.style.transform = ''))
          : (n.left < 0 &&
              (this.element.classList.add(this.POPOVER_CLASSES.PUSH_LEFT),
              (this.container.style.left = '-' + s.left + 'px'),
              (this.container.style.right = 'auto'),
              (this.container.style.transform = 'none')),
            n.right > e &&
              (this.element.classList.add(this.POPOVER_CLASSES.PUSH_RIGHT),
              (this.container.style.right = '-' + (e - s.right) + 'px'),
              (this.container.style.left = 'auto'),
              (this.container.style.transform = 'none'))),
          this.handleArrowPosition(i);
      }
      handleArrowPosition(e) {
        var t = this.toggle.getBoundingClientRect(),
          i = this.target.getBoundingClientRect();
        'left' === e || 'right' === e
          ? this.element.classList.contains(this.POPOVER_CLASSES.PUSH_BOTTOM)
            ? this.target.style.setProperty(
                '--ecl-popover-position',
                Math.round(t.top - i.top + t.height / 2) + 'px'
              )
            : this.element.classList.contains(this.POPOVER_CLASSES.PUSH_TOP) &&
              this.target.style.setProperty(
                '--ecl-popover-position',
                Math.round(i.top + t.top + t.height / 2) + 'px'
              )
          : this.element.classList.contains(this.POPOVER_CLASSES.PUSH_RIGHT)
            ? this.target.style.setProperty(
                '--ecl-popover-position',
                Math.round(i.right - (t.right - t.width / 2)) + 'px'
              )
            : this.element.classList.contains(this.POPOVER_CLASSES.PUSH_LEFT) &&
              this.target.style.setProperty(
                '--ecl-popover-position',
                Math.round(i.left + t.left + t.width / 2) + 'px'
              );
      }
      checkPosition() {
        clearTimeout(this.resizeTimer),
          (this.resizeTimer = setTimeout(() => {
            'true' === this.toggle.getAttribute('aria-expanded') &&
              this.positionPopover();
          }, 200));
      }
      handleKeyboardGlobal(e) {
        !this.target ||
          ('Escape' !== e.key && 'Esc' !== e.key) ||
          this.closePopover();
      }
      handleClickGlobal(e) {
        !this.target ||
          'true' !== this.toggle.getAttribute('aria-expanded') ||
          this.target.contains(e.target) ||
          this.toggle.contains(e.target) ||
          this.closePopover();
      }
    }),
    (e.Range = class qe {
      static autoInit(e, t) {
        return (
          (t = void 0 === (t = (void 0 === t ? {} : t).RANGE) ? {} : t),
          (t = new qe(e, t)).init(),
          (e.ECLRange = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).rangeInputSelector)
              ? '[data-ecl-range-input]'
              : i,
          s =
            void 0 === (s = t.currentValueSelector)
              ? '[data-ecl-range-value-current]'
              : s,
          n = void 0 === (n = t.bubbleSelector) ? '[data-ecl-range-bubble]' : n,
          l = void 0 === (l = t.attachChangeListener) || l,
          t = void 0 === (t = t.attachHoverListener) || t;
        if (!e || e.nodeType !== Node.ELEMENT_NODE)
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.rangeInputSelector = i),
          (this.currentValueSelector = s),
          (this.bubbleSelector = n),
          (this.attachChangeListener = l),
          (this.attachHoverListener = t),
          (this.rangeInput = null),
          (this.currentValue = null),
          (this.bubble = null),
          (this.direction = 'ltr'),
          (this.placeBubble = this.placeBubble.bind(this)),
          (this.handleChange = this.handleChange.bind(this)),
          (this.handleHoverOn = this.handleHoverOn.bind(this)),
          (this.handleHoverOff = this.handleHoverOff.bind(this));
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        (ECL.components = ECL.components || new Map()),
          (this.rangeInput = v(this.rangeInputSelector, this.element)),
          (this.currentValue = p(this.currentValueSelector, this.element)),
          (this.bubble = v(this.bubbleSelector, this.element)),
          this.rangeInput &&
            this.currentValue &&
            (this.currentValue.forEach((e) => {
              e.innerHTML = this.rangeInput.value;
            }),
            this.attachChangeListener &&
              this.rangeInput.addEventListener('input', this.handleChange),
            this.attachHoverListener) &&
            (this.rangeInput.addEventListener('mouseover', this.handleHoverOn),
            this.rangeInput.addEventListener('mouseout', this.handleHoverOff)),
          (this.direction = getComputedStyle(this.element).direction),
          this.element.setAttribute('data-ecl-auto-initialized', 'true'),
          ECL.components.set(this.element, this);
      }
      destroy() {
        this.rangeInput &&
          this.currentValue &&
          (this.attachChangeListener &&
            this.rangeInput.removeEventListener('input', this.handleChange),
          this.attachHoverListener) &&
          (this.rangeInput.removeEventListener('mouseover', this.handleHoverOn),
          this.rangeInput.removeEventListener('mouseout', this.handleHoverOff)),
          this.element &&
            (this.element.removeAttribute('data-ecl-auto-initialized'),
            ECL.components.delete(this.element));
      }
      placeBubble() {
        var e = this.bubble.offsetWidth / 2,
          t = this.rangeInput.getBoundingClientRect(),
          i = t.width / 2,
          s =
            ((this.rangeInput.value - this.rangeInput.min) /
              (this.rangeInput.max - this.rangeInput.min)) *
            t.width,
          i = ((s - i) / i) * 8,
          n = 0,
          n =
            'rtl' === this.direction ? t.right - s - e + i : t.left + s - e - i;
        this.bubble.style.left = n + 'px';
      }
      handleHoverOn() {
        this.bubble.classList.add('ecl-range__bubble--visible'),
          this.placeBubble();
      }
      handleHoverOff() {
        this.bubble.classList.remove('ecl-range__bubble--visible');
      }
      handleChange() {
        this.currentValue.forEach((e) => {
          e.innerHTML = this.rangeInput.value;
        }),
          this.placeBubble();
      }
    }),
    (e.Select = k),
    (e.SiteHeader = class Ye {
      static autoInit(e, t) {
        return (
          (t =
            void 0 === (t = (void 0 === t ? {} : t).SITE_HEADER_CORE) ? {} : t),
          (t = new Ye(e, t)).init(),
          (e.ECLSiteHeader = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).containerSelector)
              ? '[data-ecl-site-header-top]'
              : i,
          s =
            void 0 === (s = t.languageLinkSelector)
              ? '[data-ecl-language-selector]'
              : s,
          n =
            void 0 === (n = t.languageListOverlaySelector)
              ? '[data-ecl-language-list-overlay]'
              : n,
          l =
            void 0 === (l = t.languageListEuSelector)
              ? '[data-ecl-language-list-eu]'
              : l,
          a =
            void 0 === (a = t.languageListNonEuSelector)
              ? '[data-ecl-language-list-non-eu]'
              : a,
          o =
            void 0 === (o = t.languageListContentSelector)
              ? '[data-ecl-language-list-content]'
              : o,
          r =
            void 0 === (r = t.closeOverlaySelector)
              ? '[data-ecl-language-list-close]'
              : r,
          h =
            void 0 === (h = t.searchToggleSelector)
              ? '[data-ecl-search-toggle]'
              : h,
          c =
            void 0 === (c = t.searchFormSelector)
              ? '[data-ecl-search-form]'
              : c,
          d =
            void 0 === (d = t.loginToggleSelector)
              ? '[data-ecl-login-toggle]'
              : d,
          u = void 0 === (u = t.loginBoxSelector) ? '[data-ecl-login-box]' : u,
          m =
            void 0 === (m = t.notificationSelector)
              ? '[data-ecl-site-header-notification]'
              : m,
          p = void 0 === (p = t.attachClickListener) || p,
          v = void 0 === (v = t.attachKeyListener) || v,
          g = void 0 === (g = t.attachResizeListener) || g,
          t = void 0 === (t = t.tabletBreakpoint) ? 768 : t;
        if (!e || e.nodeType !== Node.ELEMENT_NODE)
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.containerSelector = i),
          (this.languageLinkSelector = s),
          (this.languageListOverlaySelector = n),
          (this.languageListEuSelector = l),
          (this.languageListNonEuSelector = a),
          (this.languageListContentSelector = o),
          (this.closeOverlaySelector = r),
          (this.searchToggleSelector = h),
          (this.searchFormSelector = c),
          (this.loginToggleSelector = d),
          (this.notificationSelector = m),
          (this.loginBoxSelector = u),
          (this.attachClickListener = p),
          (this.attachKeyListener = v),
          (this.attachResizeListener = g),
          (this.tabletBreakpoint = t),
          (this.languageMaxColumnItems = 8),
          (this.languageLink = null),
          (this.languageListOverlay = null),
          (this.languageListEu = null),
          (this.languageListNonEu = null),
          (this.languageListContent = null),
          (this.close = null),
          (this.focusTrap = null),
          (this.searchToggle = null),
          (this.searchForm = null),
          (this.loginToggle = null),
          (this.loginBox = null),
          (this.resizeTimer = null),
          (this.direction = null),
          (this.notificationContainer = null),
          (this.openOverlay = this.openOverlay.bind(this)),
          (this.closeOverlay = this.closeOverlay.bind(this)),
          (this.toggleOverlay = this.toggleOverlay.bind(this)),
          (this.toggleSearch = this.toggleSearch.bind(this)),
          (this.toggleLogin = this.toggleLogin.bind(this)),
          (this.setLoginArrow = this.setLoginArrow.bind(this)),
          (this.setSearchArrow = this.setSearchArrow.bind(this)),
          (this.handleKeyboardLanguage =
            this.handleKeyboardLanguage.bind(this)),
          (this.handleKeyboardGlobal = this.handleKeyboardGlobal.bind(this)),
          (this.handleClickGlobal = this.handleClickGlobal.bind(this)),
          (this.handleResize = this.handleResize.bind(this)),
          (this.setLanguageListHeight = this.setLanguageListHeight.bind(this)),
          (this.handleNotificationClose =
            this.handleNotificationClose.bind(this));
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        (ECL.components = ECL.components || new Map()),
          (this.arrowSize = '0.5rem'),
          this.attachKeyListener &&
            document.addEventListener('keyup', this.handleKeyboardGlobal),
          this.attachClickListener &&
            document.addEventListener('click', this.handleClickGlobal),
          this.attachResizeListener &&
            window.addEventListener('resize', this.handleResize),
          (this.container = v(this.containerSelector)),
          (this.languageLink = v(this.languageLinkSelector)),
          (this.languageListOverlay = v(this.languageListOverlaySelector)),
          (this.languageListEu = v(this.languageListEuSelector)),
          (this.languageListNonEu = v(this.languageListNonEuSelector)),
          (this.languageListContent = v(this.languageListContentSelector)),
          (this.close = v(this.closeOverlaySelector)),
          (this.notification = v(this.notificationSelector)),
          (this.direction = getComputedStyle(this.element).direction),
          'rtl' === this.direction &&
            this.element.classList.add('ecl-site-header--rtl'),
          (this.focusTrap = o(this.languageListOverlay, {
            onDeactivate: this.closeOverlay,
            allowOutsideClick: !0,
          })),
          this.attachClickListener &&
            this.languageLink &&
            this.languageLink.addEventListener('click', this.toggleOverlay),
          this.attachClickListener &&
            this.close &&
            this.close.addEventListener('click', this.toggleOverlay),
          this.attachKeyListener &&
            this.languageLink &&
            this.languageLink.addEventListener(
              'keydown',
              this.handleKeyboardLanguage
            ),
          (this.searchToggle = v(this.searchToggleSelector)),
          (this.searchForm = v(this.searchFormSelector)),
          this.attachClickListener &&
            this.searchToggle &&
            this.searchToggle.addEventListener('click', this.toggleSearch),
          (this.loginToggle = v(this.loginToggleSelector)),
          (this.loginBox = v(this.loginBoxSelector)),
          this.attachClickListener &&
            this.loginToggle &&
            this.loginToggle.addEventListener('click', this.toggleLogin),
          this.element.setAttribute('data-ecl-auto-initialized', 'true'),
          ECL.components.set(this.element, this),
          this.notification &&
            ((this.notificationContainer = this.notification.closest(
              '.ecl-site-header__notification'
            )),
            setTimeout(() => {
              var e = ECL.components.get(this.notification);
              e && e.on('onClose', this.handleNotificationClose);
            }, 0));
      }
      destroy() {
        this.attachClickListener &&
          this.languageLink &&
          this.languageLink.removeEventListener('click', this.toggleOverlay),
          this.focusTrap && this.focusTrap.deactivate(),
          this.attachKeyListener &&
            this.languageLink &&
            this.languageLink.removeEventListener(
              'keydown',
              this.handleKeyboardLanguage
            ),
          this.attachClickListener &&
            this.close &&
            this.close.removeEventListener('click', this.toggleOverlay),
          this.attachClickListener &&
            this.searchToggle &&
            this.searchToggle.removeEventListener('click', this.toggleSearch),
          this.attachClickListener &&
            this.loginToggle &&
            this.loginToggle.removeEventListener('click', this.toggleLogin),
          this.attachKeyListener &&
            document.removeEventListener('keyup', this.handleKeyboardGlobal),
          this.attachClickListener &&
            document.removeEventListener('click', this.handleClickGlobal),
          this.attachResizeListener &&
            window.removeEventListener('resize', this.handleResize),
          this.element &&
            (this.element.removeAttribute('data-ecl-auto-initialized'),
            this.element.classList.remove('ecl-site-header--rtl'),
            ECL.components.delete(this.element));
      }
      updateOverlay() {
        var e = 1,
          t = 1,
          i =
            (this.languageListEu &&
              ((i = p('.ecl-site-header__language-item', this.languageListEu)),
              1 < (e = Math.ceil(i.length / this.languageMaxColumnItems))) &&
              this.languageListEu.classList.add(
                'ecl-site-header__language-category--' + e + '-col'
              ),
            this.languageListNonEu &&
              ((i = p(
                '.ecl-site-header__language-item',
                this.languageListNonEu
              )),
              1 < (t = Math.ceil(i.length / this.languageMaxColumnItems))) &&
              this.languageListNonEu.classList.add(
                'ecl-site-header__language-category--' + t + '-col'
              ),
            this.languageListEu
              ? this.languageListEu.parentNode.classList.remove(
                  'ecl-site-header__language-content--stack'
                )
              : this.languageListNonEu &&
                this.languageListNonEu.parentNode.classList.remove(
                  'ecl-site-header__language-content--stack'
                ),
            this.languageListOverlay.getBoundingClientRect()),
          s = this.container.getBoundingClientRect(),
          e =
            (i.width > s.width &&
              (this.languageListEu
                ? this.languageListEu.parentNode.classList.add(
                    'ecl-site-header__language-content--stack'
                  )
                : this.languageListNonEu &&
                  this.languageListNonEu.parentNode.classList.add(
                    'ecl-site-header__language-content--stack'
                  ),
              this.languageListNonEu) &&
              (this.languageListNonEu.classList.remove(
                'ecl-site-header__language-category--' + t + '-col'
              ),
              this.languageListNonEu.classList.add(
                'ecl-site-header__language-category--' + Math.max(e, t) + '-col'
              )),
            this.languageListOverlay.classList.remove(
              'ecl-site-header__language-container--push-right',
              'ecl-site-header__language-container--push-left'
            ),
            this.languageListOverlay.classList.remove(
              'ecl-site-header__language-container--full'
            ),
            this.languageListOverlay.style.removeProperty(
              '--ecl-language-arrow-position'
            ),
            this.languageListOverlay.style.removeProperty('right'),
            this.languageListOverlay.style.removeProperty('left'),
            (i = this.languageListOverlay.getBoundingClientRect()),
            window.innerWidth),
          t = this.languageLink.getBoundingClientRect();
        'ltr' === this.direction && i.right > e
          ? (this.languageListOverlay.classList.add(
              'ecl-site-header__language-container--push-right'
            ),
            this.languageListOverlay.style.setProperty(
              'right',
              'calc(-' + s.right + 'px + ' + t.right + 'px)'
            ),
            (e = s.right - t.right + t.width / 2),
            this.languageListOverlay.style.setProperty(
              '--ecl-language-arrow-position',
              'calc(' + e + 'px - ' + this.arrowSize + ')'
            ))
          : 'rtl' === this.direction &&
            i.left < 0 &&
            (this.languageListOverlay.classList.add(
              'ecl-site-header__language-container--push-left'
            ),
            this.languageListOverlay.style.setProperty(
              'left',
              'calc(-' + t.left + 'px + ' + s.left + 'px)'
            ),
            (e = t.right - s.left - t.width / 2),
            this.languageListOverlay.style.setProperty(
              '--ecl-language-arrow-position',
              e + 'px'
            )),
          window.innerWidth < this.tabletBreakpoint &&
            (this.languageListOverlay.classList.add(
              'ecl-site-header__language-container--full'
            ),
            this.languageListOverlay.style.removeProperty('right'),
            (s = i.right - t.right + t.width / 2),
            this.languageListOverlay.style.setProperty(
              '--ecl-language-arrow-position',
              'calc(' + s + 'px - ' + this.arrowSize + ')'
            )),
          this.loginBox &&
            this.loginBox.classList.contains(
              'ecl-site-header__login-box--active'
            ) &&
            this.setLoginArrow(),
          this.searchForm &&
            this.searchForm.classList.contains(
              'ecl-site-header__search--active'
            ) &&
            this.setSearchArrow();
      }
      handleNotificationClose() {
        this.notificationContainer && this.notificationContainer.remove();
      }
      setLanguageListHeight() {
        var e = window.innerHeight;
        this.languageListContent &&
          0 < (e -= this.languageListContent.getBoundingClientRect().top) &&
          (this.languageListContent.style.maxHeight = e + 'px');
      }
      openOverlay() {
        (this.languageListOverlay.hidden = !1),
          this.languageListOverlay.setAttribute('aria-modal', 'true'),
          this.languageLink.setAttribute('aria-expanded', 'true'),
          this.setLanguageListHeight();
      }
      closeOverlay() {
        (this.languageListOverlay.hidden = !0),
          this.languageListOverlay.removeAttribute('aria-modal'),
          this.languageLink.setAttribute('aria-expanded', 'false');
      }
      toggleOverlay(e) {
        this.languageListOverlay &&
          this.focusTrap &&
          (e.preventDefault(),
          this.languageListOverlay.hasAttribute('hidden')
            ? (this.openOverlay(),
              this.updateOverlay(),
              this.focusTrap.activate())
            : this.focusTrap.deactivate());
      }
      handleResize() {
        this.languageListOverlay &&
          !this.languageListOverlay.hasAttribute('hidden') &&
          ((this.loginBox &&
            this.loginBox.classList.contains(
              'ecl-site-header__login-box--active'
            )) ||
            (this.searchForm &&
              this.searchForm.classList.contains(
                'ecl-site-header__search--active'
              ))) &&
          (clearTimeout(this.resizeTimer),
          (this.resizeTimer = setTimeout(() => {
            this.updateOverlay();
          }, 200)));
      }
      handleKeyboardLanguage(e) {
        (32 !== e.keyCode && 'Enter' !== e.key) || this.toggleOverlay(e);
      }
      toggleSearch(e) {
        var t;
        this.searchForm &&
          (e.preventDefault(),
          (t = 'true' === this.searchToggle.getAttribute('aria-expanded')),
          this.loginToggle &&
            'true' === this.loginToggle.getAttribute('aria-expanded') &&
            this.toggleLogin(e),
          this.searchToggle.setAttribute('aria-expanded', t ? 'false' : 'true'),
          t
            ? this.searchForm.classList.remove(
                'ecl-site-header__search--active'
              )
            : (this.searchForm.classList.add('ecl-site-header__search--active'),
              this.setSearchArrow()));
      }
      setLoginArrow() {
        var e;
        0 === this.loginBox.getBoundingClientRect().x &&
          ((e = this.loginToggle.getBoundingClientRect()),
          (e = window.innerWidth - e.right + e.width / 2),
          this.loginBox.style.setProperty(
            '--ecl-login-arrow-position',
            'calc(' + e + 'px - ' + this.arrowSize + ')'
          ));
      }
      setSearchArrow() {
        var e;
        0 === this.searchForm.getBoundingClientRect().x &&
          ((e = this.searchToggle.getBoundingClientRect()),
          (e = window.innerWidth - e.right + e.width / 2),
          this.searchForm.style.setProperty(
            '--ecl-search-arrow-position',
            'calc(' + e + 'px - ' + this.arrowSize + ')'
          ));
      }
      toggleLogin(e) {
        var t;
        this.loginBox &&
          (e.preventDefault(),
          (t = 'true' === this.loginToggle.getAttribute('aria-expanded')),
          this.searchToggle &&
            'true' === this.searchToggle.getAttribute('aria-expanded') &&
            this.toggleSearch(e),
          this.loginToggle.setAttribute('aria-expanded', t ? 'false' : 'true'),
          t
            ? this.loginBox.classList.remove(
                'ecl-site-header__login-box--active'
              )
            : (this.loginBox.classList.add(
                'ecl-site-header__login-box--active'
              ),
              this.setLoginArrow()));
      }
      handleKeyboardGlobal(e) {
        var t;
        this.languageLink &&
          ((t = this.languageLink.getAttribute('aria-expanded')),
          ('Escape' !== e.key && 'Esc' !== e.key) ||
            ('true' === t && this.toggleOverlay(e)));
      }
      handleClickGlobal(e) {
        var t, i, s;
        (this.languageLink || this.searchToggle || this.loginToggle) &&
          ((t =
            this.languageLink &&
            this.languageLink.getAttribute('aria-expanded')),
          (i =
            this.loginToggle &&
            'true' === this.loginToggle.getAttribute('aria-expanded')),
          (s =
            this.searchToggle &&
            'true' === this.searchToggle.getAttribute('aria-expanded')),
          'true' !== t ||
            this.languageListOverlay.contains(e.target) ||
            this.languageLink.contains(e.target) ||
            this.toggleOverlay(e),
          !i ||
            this.loginBox.contains(e.target) ||
            this.loginToggle.contains(e.target) ||
            this.toggleLogin(e),
          !s ||
            this.searchForm.contains(e.target) ||
            this.searchToggle.contains(e.target) ||
            this.toggleSearch(e));
      }
    }),
    (e.Table = D),
    (e.Tabs = class Xe {
      static autoInit(e, t) {
        return (
          (t = void 0 === (t = (void 0 === t ? {} : t).TABS) ? {} : t),
          (t = new Xe(e, t)).init(),
          (e.ECLTabs = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).containerSelector)
              ? '.ecl-tabs__container'
              : i,
          s = void 0 === (s = t.listSelector) ? '.ecl-tabs__list' : s,
          n =
            void 0 === (n = t.listItemsSelector)
              ? '.ecl-tabs__item:not(.ecl-tabs__item--more)'
              : n,
          l = void 0 === (l = t.moreItemSelector) ? '.ecl-tabs__item--more' : l,
          a = void 0 === (a = t.moreButtonSelector) ? '.ecl-tabs__toggle' : a,
          o =
            void 0 === (o = t.moreLabelSelector)
              ? '.ecl-tabs__toggle .ecl-button__label'
              : o,
          r = void 0 === (r = t.prevSelector) ? '.ecl-tabs__prev' : r,
          h = void 0 === (h = t.nextSelector) ? '.ecl-tabs__next' : h,
          c = void 0 === (c = t.attachClickListener) || c,
          t = void 0 === (t = t.attachResizeListener) || t;
        if (
          ((this.supportedEvents = ['onToggle']),
          !e || e.nodeType !== Node.ELEMENT_NODE)
        )
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.eventManager = new S()),
          (this.containerSelector = i),
          (this.listSelector = s),
          (this.listItemsSelector = n),
          (this.moreItemSelector = l),
          (this.moreButtonSelector = a),
          (this.moreLabelSelector = o),
          (this.prevSelector = r),
          (this.nextSelector = h),
          (this.attachClickListener = c),
          (this.attachResizeListener = t),
          (this.container = null),
          (this.list = null),
          (this.listItems = null),
          (this.moreItem = null),
          (this.moreButton = null),
          (this.moreButtonActive = !1),
          (this.moreLabel = null),
          (this.moreLabelValue = null),
          (this.dropdown = null),
          (this.dropdownList = null),
          (this.dropdownItems = null),
          (this.allowShift = !0),
          (this.buttonNextSize = 0),
          (this.index = 0),
          (this.total = 0),
          (this.tabsKey = []),
          (this.firstTab = null),
          (this.lastTab = null),
          (this.direction = 'ltr'),
          (this.isMobile = !1),
          (this.resizeTimer = null),
          (this.handleClickOnToggle = this.handleClickOnToggle.bind(this)),
          (this.handleResize = this.handleResize.bind(this)),
          (this.closeMoreDropdown = this.closeMoreDropdown.bind(this)),
          (this.shiftTabs = this.shiftTabs.bind(this)),
          (this.handleKeyboardOnTabs = this.handleKeyboardOnTabs.bind(this)),
          (this.moveFocus = this.moveFocus.bind(this)),
          (this.arrowFocusToTab = this.arrowFocusToTab.bind(this)),
          (this.tabsKeyEvents = this.tabsKeyEvents.bind(this));
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        (ECL.components = ECL.components || new Map()),
          (this.container = v(this.containerSelector, this.element)),
          (this.list = v(this.listSelector, this.element)),
          (this.listItems = p(this.listItemsSelector, this.element)),
          (this.moreItem = v(this.moreItemSelector, this.element)),
          (this.moreButton = v(this.moreButtonSelector, this.element)),
          (this.moreLabel = v(this.moreLabelSelector, this.element)),
          (this.moreLabelValue = this.moreLabel.innerText),
          (this.btnPrev = v(this.prevSelector, this.element)),
          (this.btnNext = v(this.nextSelector, this.element)),
          (this.total = this.listItems.length),
          this.moreButton &&
            ((this.dropdown = document.createElement('div')),
            this.dropdown.classList.add('ecl-tabs__dropdown'),
            (this.dropdownList = document.createElement('div')),
            this.dropdownList.classList.add('ecl-tabs__dropdown-list'),
            this.listItems.forEach((e) => {
              this.dropdownList.appendChild(e.cloneNode(!0));
            }),
            this.dropdown.appendChild(this.dropdownList),
            this.moreItem.appendChild(this.dropdown),
            (this.dropdownItems = p(
              '.ecl-tabs__dropdown .ecl-tabs__item',
              this.element
            ))),
          this.btnNext &&
            (this.buttonNextSize = this.btnNext.getBoundingClientRect().width),
          this.handleResize(),
          this.attachClickListener &&
            this.moreButton &&
            this.moreButton.addEventListener('click', this.handleClickOnToggle),
          this.attachClickListener &&
            document &&
            this.moreButton &&
            document.addEventListener('click', this.closeMoreDropdown),
          this.attachClickListener &&
            this.btnNext &&
            this.btnNext.addEventListener(
              'click',
              this.shiftTabs.bind(this, 'next', !0)
            ),
          this.attachClickListener &&
            this.btnPrev &&
            this.btnPrev.addEventListener(
              'click',
              this.shiftTabs.bind(this, 'prev', !0)
            ),
          this.attachResizeListener &&
            window.addEventListener('resize', this.handleResize),
          this.element.setAttribute('data-ecl-auto-initialized', 'true'),
          ECL.components.set(this.element, this);
      }
      on(e, t) {
        this.eventManager.on(e, t);
      }
      trigger(e, t) {
        this.eventManager.trigger(e, t);
      }
      destroy() {
        this.dropdown && this.dropdown.remove(),
          this.moreButton &&
            ((this.moreLabel.textContent = this.moreLabelValue),
            this.moreButton.replaceWith(this.moreButton.cloneNode(!0))),
          this.btnNext && this.btnNext.replaceWith(this.btnNext.cloneNode(!0)),
          this.btnPrev && this.btnPrev.replaceWith(this.btnPrev.cloneNode(!0)),
          this.attachClickListener &&
            document &&
            this.moreButton &&
            document.removeEventListener('click', this.closeMoreDropdown),
          this.attachResizeListener &&
            window.removeEventListener('resize', this.handleResize),
          this.tabsKey &&
            this.tabsKey.forEach((e) => {
              e.addEventListener('keydown', this.handleKeyboardOnTabs);
            }),
          this.element &&
            (this.element.removeAttribute('data-ecl-auto-initialized'),
            ECL.components.delete(this.element));
      }
      shiftTabs(e) {
        (this.index = 'next' === e ? this.index + 1 : this.index - 1),
          1 <= this.index
            ? ((this.btnPrev.style.display = 'flex'),
              this.container.classList.add('ecl-tabs__container--left'))
            : ((this.btnPrev.style.display = 'none'),
              this.container.classList.remove('ecl-tabs__container--left')),
          this.index >= this.total - 1
            ? ((this.btnNext.style.display = 'none'),
              this.container.classList.remove('ecl-tabs__container--right'))
            : ((this.btnNext.style.display = 'flex'),
              this.container.classList.add('ecl-tabs__container--right'));
        var e = 0,
          t =
            ((this.direction = getComputedStyle(this.element).direction),
            (e =
              'rtl' === this.direction
                ? Math.ceil(
                    this.list.offsetWidth -
                      this.listItems[this.index].offsetLeft -
                      this.listItems[this.index].offsetWidth
                  )
                : Math.ceil(this.listItems[this.index].offsetLeft)),
            Math.ceil(
              this.list.getBoundingClientRect().width -
                this.element.getBoundingClientRect().width
            ));
        t < e &&
          ((this.btnNext.style.display = 'none'),
          this.container.classList.remove('ecl-tabs__container--right'),
          (e = t)),
          (this.list.style.transitionDuration = '0.4s'),
          'rtl' === this.direction
            ? (this.list.style.transform = 'translate3d(' + e + 'px, 0px, 0px)')
            : (this.list.style.transform =
                'translate3d(-' + e + 'px, 0px, 0px)');
      }
      handleClickOnToggle(e) {
        this.dropdown.classList.toggle('ecl-tabs__dropdown--show'),
          this.moreButton.setAttribute(
            'aria-expanded',
            this.dropdown.classList.contains('ecl-tabs__dropdown--show')
          ),
          this.trigger('onToggle', e);
      }
      set onToggle(e) {
        this.onToggleCallback = e;
      }
      get onToggle() {
        return this.onToggleCallback;
      }
      handleResize() {
        'none' === window.getComputedStyle(this.moreButton).display &&
          this.closeMoreDropdown(this),
          clearTimeout(this.resizeTimer),
          (this.resizeTimer = setTimeout(() => {
            var t, i, s, n;
            (this.list.style.transform = 'translate3d(0px, 0px, 0px)'),
              Math.max(
                document.documentElement.clientWidth || 0,
                window.innerWidth || 0
              ) <= 480
                ? ((this.isMobile = !0),
                  (this.index = 1),
                  (this.list.style.transitionDuration = '0.4s'),
                  this.shiftTabs(this.index),
                  this.moreItem &&
                    this.moreItem.classList.add('ecl-tabs__item--hidden'),
                  this.moreButton &&
                    this.moreButton.classList.add('ecl-tabs__toggle--hidden'),
                  (t = 0),
                  this.listItems.forEach((e) => {
                    e.classList.remove('ecl-tabs__item--hidden'),
                      (t += Math.ceil(e.getBoundingClientRect().width));
                  }),
                  (this.list.style.width = t + 'px'),
                  (this.btnNext.style.display = 'flex'),
                  this.container.classList.add('ecl-tabs__container--right'),
                  (this.btnPrev.style.display = 'none'),
                  this.container.classList.remove('ecl-tabs__container--left'))
                : ((this.isMobile = !1),
                  (this.btnNext.style.display = 'none'),
                  this.container.classList.remove('ecl-tabs__container--right'),
                  (this.btnPrev.style.display = 'none'),
                  this.container.classList.remove('ecl-tabs__container--left'),
                  (this.list.style.width = 'auto'),
                  (i = this.moreButton.getBoundingClientRect().width + 25),
                  (s = []),
                  (n = this.list.getBoundingClientRect().width),
                  (this.moreButtonActive = !1),
                  this.listItems.forEach((e, t) => {
                    e.classList.remove('ecl-tabs__item--hidden'),
                      n >= i + e.getBoundingClientRect().width &&
                      !s.includes(t - 1)
                        ? (i += e.getBoundingClientRect().width)
                        : (e.classList.add('ecl-tabs__item--hidden'),
                          e.childNodes[0].classList.contains(
                            'ecl-tabs__link--active'
                          ) && (this.moreButtonActive = !0),
                          s.push(t));
                  }),
                  this.moreButtonActive
                    ? this.moreButton.classList.add('ecl-tabs__toggle--active')
                    : this.moreButton.classList.remove(
                        'ecl-tabs__toggle--active'
                      ),
                  s.length
                    ? (this.moreItem.classList.remove('ecl-tabs__item--hidden'),
                      this.moreButton.classList.remove(
                        'ecl-tabs__toggle--hidden'
                      ),
                      (this.moreLabel.textContent = this.moreLabelValue.replace(
                        '%d',
                        s.length
                      )),
                      this.dropdownItems.forEach((e, t) => {
                        s.includes(t)
                          ? e.classList.remove('ecl-tabs__item--hidden')
                          : e.classList.add('ecl-tabs__item--hidden');
                      }))
                    : (this.moreItem.classList.add('ecl-tabs__item--hidden'),
                      this.moreButton.classList.add(
                        'ecl-tabs__toggle--hidden'
                      ))),
              this.tabsKeyEvents();
          }, 100));
      }
      tabsKeyEvents() {
        (this.tabsKey = []),
          this.listItems.forEach((e, t, i) => {
            var s,
              n = null;
            (n = e.classList.contains('ecl-tabs__item--hidden')
              ? ((s = this.dropdownItems[t]), v('.ecl-tabs__link', s))
              : v('.ecl-tabs__link', e)).addEventListener(
              'keydown',
              this.handleKeyboardOnTabs
            ),
              this.tabsKey.push(n),
              0 === t && (this.firstTab = n),
              t === i.length - 1 && (this.lastTab = n);
          });
      }
      closeMoreDropdown(e) {
        for (var t = e.target; t; ) {
          if (t === this.moreButton) return;
          t = t.parentNode;
        }
        this.moreButton.setAttribute('aria-expanded', !1),
          this.dropdown.classList.remove('ecl-tabs__dropdown--show');
      }
      handleKeyboardOnTabs(e) {
        var t = e.currentTarget;
        switch (e.key) {
          case 'ArrowLeft':
          case 'ArrowUp':
            this.arrowFocusToTab(t, 'prev');
            break;
          case 'ArrowRight':
          case 'ArrowDown':
            this.arrowFocusToTab(t, 'next');
            break;
          case 'Home':
            this.moveFocus(this.firstTab);
            break;
          case 'End':
            this.moveFocus(this.lastTab);
        }
      }
      moveFocus(e) {
        e.closest('.ecl-tabs__dropdown')
          ? (this.moreButton.setAttribute('aria-expanded', !0),
            this.dropdown.classList.add('ecl-tabs__dropdown--show'))
          : (this.moreButton.setAttribute('aria-expanded', !1),
            this.dropdown.classList.remove('ecl-tabs__dropdown--show')),
          e.focus();
      }
      arrowFocusToTab(e, t) {
        var i = this.tabsKey.indexOf(e),
          i = 'next' === t ? i + 1 : i - 1,
          s = 'next' === t ? this.firstTab : this.lastTab,
          n = 'next' === t ? this.lastTab : this.firstTab;
        this.isMobile
          ? e !== n && (this.moveFocus(this.tabsKey[i]), this.shiftTabs(t))
          : e === n
            ? this.moveFocus(s)
            : this.moveFocus(this.tabsKey[i]);
      }
    }),
    (e.Timeline = class $e {
      static autoInit(e, t) {
        return (
          (t = void 0 === (t = (void 0 === t ? {} : t).TIMELINE) ? {} : t),
          (t = new $e(e, t)).init(),
          (e.ECLTimeline = t)
        );
      }
      constructor(e, t) {
        var i =
            void 0 === (i = (t = void 0 === t ? {} : t).buttonSelector)
              ? '[data-ecl-timeline-button]'
              : i,
          s = void 0 === (s = t.labelSelector) ? '[data-ecl-label]' : s,
          n = void 0 === (n = t.labelExpanded) ? 'data-ecl-label-expanded' : n,
          l =
            void 0 === (l = t.labelCollapsed) ? 'data-ecl-label-collapsed' : l,
          t = void 0 === (t = t.attachClickListener) || t;
        if (!e || e.nodeType !== Node.ELEMENT_NODE)
          throw new TypeError(
            'DOM element should be given to initialize this widget.'
          );
        (this.element = e),
          (this.buttonSelector = i),
          (this.labelSelector = s),
          (this.labelExpanded = n),
          (this.labelCollapsed = l),
          (this.attachClickListener = t),
          (this.button = null),
          (this.label = null),
          (this.handleClickOnButton = this.handleClickOnButton.bind(this));
      }
      init() {
        if (!ECL) throw new TypeError('Called init but ECL is not present');
        (ECL.components = ECL.components || new Map()),
          (this.button = v(this.buttonSelector, this.element)),
          (this.label = v(this.labelSelector, this.element)),
          this.attachClickListener &&
            this.button &&
            this.button.addEventListener('click', this.handleClickOnButton),
          this.element.setAttribute('data-ecl-auto-initialized', 'true'),
          ECL.components.set(this.element, this);
      }
      destroy() {
        this.attachClickListener &&
          this.button &&
          this.button.removeEventListener('click', this.handleClickOnButton),
          this.element &&
            (this.element.removeAttribute('data-ecl-auto-initialized'),
            ECL.components.delete(this.element));
      }
      handleClickOnButton() {
        var e,
          t = 'true' === this.button.getAttribute('aria-expanded');
        return (
          this.button.setAttribute('aria-expanded', t ? 'false' : 'true'),
          t
            ? (this.element.removeAttribute('data-ecl-timeline-expanded'),
              this.button.blur(),
              this.button.focus())
            : (this.element.setAttribute('data-ecl-timeline-expanded', 'true'),
              (e = v('.ecl-timeline__item--collapsed', this.element)) &&
                (e.setAttribute('tabindex', '-1'),
                e.focus({ focusVisible: !1 }),
                e.removeAttribute('tabindex'))),
          this.label && !t && this.button.hasAttribute(this.labelExpanded)
            ? (this.label.innerHTML = this.button.getAttribute(
                this.labelExpanded
              ))
            : this.label &&
              t &&
              this.button.hasAttribute(this.labelCollapsed) &&
              (this.label.innerHTML = this.button.getAttribute(
                this.labelCollapsed
              )),
          this
        );
      }
    }),
    (e.autoInit = function (e) {
      var t,
        i,
        e = void 0 === e ? {} : e,
        s = e.root,
        s = void 0 === s ? document : s,
        n = ((e, t) => {
          if (null == e) return {};
          var i,
            s = {};
          for (i in e)
            if ({}.hasOwnProperty.call(e, i)) {
              if (t.includes(i)) continue;
              s[i] = e[i];
            }
          return s;
        })(e, H);
      if (ECL)
        return (
          (t = p('[data-ecl-auto-init]', s)),
          (i = () => {
            t.filter(
              (e) => 'true' !== e.getAttribute('data-ecl-auto-initialized')
            ).forEach((e) => {
              var t = e.getAttribute('data-ecl-auto-init');
              if (!t)
                throw new TypeError(
                  '(ecl-auto-init) ' + t + ' data-ecl-auto-init is empty'
                );
              var i = ECL[t];
              if ('function' != typeof i)
                throw new TypeError(
                  "(ecl-auto-init) Could not find '" + t + "'"
                );
              if ('function' != typeof i.autoInit)
                throw new TypeError(
                  "(ecl-auto-init) Could not find autoInit for '" + t + "'"
                );
              i.autoInit(e, n);
            });
          })(),
          {
            update: () => i(),
            destroy: () => {
              ECL.components &&
                ECL.components.forEach((e, t) => {
                  e.destroy && (e.destroy(), ECL.components.delete(t));
                });
            },
          }
        );
      throw new TypeError('Called autoInit but ECL is not present');
    }),
    e
  );
})({});
ECL.version = '4.10.0';
