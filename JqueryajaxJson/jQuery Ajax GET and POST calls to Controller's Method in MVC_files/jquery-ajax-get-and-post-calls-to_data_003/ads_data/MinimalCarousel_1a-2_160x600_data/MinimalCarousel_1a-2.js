/**
 * @fileoverview Provides layout specific functionality for HTML5 layout.
 * This includes layout specific directives, that are responsible for
 * interaction with the user, alignment of the blocks and texts in them.
 * Also includes layout specification and initialization.
 */


/**
 * Utils object with specific functionality for the layout.
 * @return {!Object.<function>} Available functions.
 */
var layoutUtils = (function(ng) {

  /**
   * Time to show navigation arrows in milliseconds.
   * @const {number}
   */
  var NAVIGATION_ARROWS_SHOW_TIME = 2000;

  /**
   * Dimensions of the navigation arrow in pixels.
   * @enum {number}
   * @private
   */
  var NavigationArrowSize_ = {
    HEIGHT: 21,
    WIDTH: 15
  };

  /**
   * Shorthand for style utils.
   * @type {!Object}
   */
  var styleUtils = ddab.layouts.utils.styleUtils;

  /**
   * Utils object of layout common functions.
   * @private
   */
  var localUtils = {


    /**
     * Fits the image within its container.
     * @param {!angular.JQLite} el The jQuery element object to handle.
     * @param {string} src Image source URL.
     */
    imageFit: function(el, src) {
      var scaleType = el.attr('scaletype');
      var alignType = el.attr('aligntype');

      var imgObject = new ddab.layouts.utils.DynamicImageFit(el[0],
          src, scaleType, alignType);
      var shrink = el.attr('shrink');
      if (shrink) {
        imgObject.addEventListener('image_load', function() {
          var resizedImg = imgObject.getImage();
          localUtils.shrink(el, resizedImg, 'width');
          localUtils.shrink(el, resizedImg, 'height');
        });
      }
    },


    /**
     * Resizes the image container depending on its aspect ratio.
     * @param {!angular.JQLite} el The jQuery element object to handle.
     * @param {Element} image The DOM element of image.
     * @param {string} measure Defines which measure to change -
     *    width or height.
     */
    shrink: function(el, image, measure) {
      var original = localUtils.getStyleProperty(el[0], measure);
      var indent = localUtils.calculateIndent(el[0]);
      var availableSpace = image[measure] + indent[measure];
      el.css(measure, '{0}px'.format(availableSpace));
      el.addClass('shrink');
      if (original > availableSpace) {
        el.addClass('shrink-{0}'.format(measure));
      }
    },


    /**
     * Aligns the block within its parent container. Currently supports only
     * center.
     * @param {!angular.JQLite} el The jQuery element object to handle.
     */
    alignBlock: function(el) {
      var parent = el.parent();
      var availableWidth = parent[0].offsetWidth - el[0].offsetWidth;
      var availableHeight = parent[0].offsetHeight - el[0].offsetHeight;
      var valign = el.attr('valign') || 'middle';
      var top = availableHeight / 2;
      var left = availableWidth / 2;
      if (valign == 'bottom') {
        top = availableHeight;
      }
      this.shiftPosition(el, top, left);
    },


    /**
     * Applies alignment to the element.
     * @param {!angular.JQLite} el The jQuery element object to handle.
     * @param {number} top Vertical offset to position the element.
     * @param {number} left Horizontal offset to position the element.
     */
    shiftPosition: function(el, top, left) {
      el.css({
        'left': '{0}px'.format(left),
        'position': 'relative',
        'top': '{0}px'.format(top)
      });
    },


    /**
     * Calculates useful size of the element.
     * @param {Element} el The DOM element to get the size.
     * @return {!Object.<number>} Object with element size.
     */
    calculateAvailableSpace: function(el) {
      var indent = this.calculateIndent(el);
      return {
        width: this.getStyleProperty(el, 'width') - indent.width,
        height: this.getStyleProperty(el, 'height') - indent.height
      };
    },


    /**
     * Calculates horizontal and vertical indents for the element.
     * Includes padding and borders.
     * @param {Element} el The DOM element to get the indent.
     * @return {!Object.<number>} Object with horizontal and vertical indents.
     */
    calculateIndent: function(el) {
      var paddingBorderBox = styleUtils.getPaddingBorderBox(el);

      return {
        width: paddingBorderBox.left + paddingBorderBox.right,
        height: paddingBorderBox.top + paddingBorderBox.bottom
      };
    },


    /**
     * Gets requested CSS property value from the element.
     * @param {Element} el The DOM element to get the indent.
     * @param {string} name Property name.
     * @return {number} Property value.
     */
    getStyleProperty: function(el, name) {
      var style = window.getComputedStyle(el, null);
      var value;
      var rect = el.getBoundingClientRect();

      if (style) {
        if (name == 'height') {
          value = rect.bottom - rect.top;
        } else if (name == 'width') {
          value = rect.right - rect.left;
        } else {
          value = style[name];
        }
      }

      return !isNaN(value) ? Math.round(value) : 0;
    },


    /**
     * Checks if the backround image exits.
     * @param {!Object} design The payload object with design properties.
     */
    hasBgImage: function(design) {
      /**
       * Possible values in the payload for the bg image.
       * @enum {string}
       */
      var PayloadValues = {
        BLANK: 'blank',
        NONE: 'none'
      };
      return design['bgImageUrl'] &&
          design['bgImageUrl'].toLowerCase() !== PayloadValues.NONE &&
          design['bgImageUrl'].toLowerCase() !== PayloadValues.BLANK;
    }
  };

  var module = ng.module('custom', []);

  /**
   * Carousel iterator.
   * @type {!Object}
   */
  var Iterator = {
    init: function(length, current) {
      this.length = length || 0;
      this.current = current || 0;
      this.wrapped = false;
    },
    increment: function() {
      this.wrapped = false;
      this.dir = 'right';
      if (++this.current >= this.length) {
        this.current = 0;
        this.wrapped = true;
      }
      return this.current;
    },
    decrement: function() {
      this.wrapped = false;
      this.dir = 'left';
      if (--this.current < 0) {
        this.current = this.length - 1;
        this.wrapped = true;
      }
      return this.current;
    }
  };

  window.onAdData = function(data, util) {
    initPreloading(data);
    utils.preloader.addCompletionListener(function() {
      utils.onAdData(data, util);
    });
    utils.preloader.start();
  };


  /**
   * Creates the list of the CSS classes to apply to the layout content
   * depending on parameters from DAB.
   * @param {!angular.Scope} scope AngularJS layout $scope.
   * @return {!Object.<string>} All available CSS classes.
   */
  var getClasses = function(scope) {
    var design = scope.design;
    var layout = [design['cornerStyle']];

    if (scope.toBoolean(design['bgGradient'])) {
      layout.push('gradient');
    }
    if (localUtils.hasBgImage(design)) {
      layout.push('image');
    }
    return {
      layout: layout.join(' ')
    };
  };


  /**
   * Controller for using data binding in layout.
   * @param {!angular.Scope} $scope AngularJS layout $scope.
   * @param {Object} dynamicData Dynamic data from DAB.
   * @param {!angular.$timeout} $timeout AngularJS timeout to control carousel.
   */
  function LayoutController($scope, dynamicData, $timeout) {
    helpers.LayoutController($scope, dynamicData);

    $scope.classes = getClasses($scope);

    angular.forEach($scope.products, function(product, index) {
      product.index = index;
    });

    // Inject Math into the scope.
    $scope.Math = window.Math;

    var maxAspectRatio = 0;
    var theWidest = 0;
    // Find the widest element and place it at the end in order to fill more
    // space (case for 3 products in square sizes).
    if ($scope.products.length == 3 && $scope.layoutType == SQUARE_TYPE) {
      var loaded = utils.preloader.getLoadedImages();
      angular.forEach($scope.products, function(product, index) {
        var ratio = loaded[product.imageUrl][0].width /
            loaded[product.imageUrl][0].height;
        if (ratio > maxAspectRatio) {
          maxAspectRatio = ratio;
          theWidest = index;
        }
      });
      if (maxAspectRatio > 1) {
        $scope.products.push($scope.products.splice(theWidest, 1)[0]);
      }
    }

    var main = document.querySelector('.layout');
    var timeoutId = 0;
    var i;
    var arrowsContainer = document.querySelectorAll('.arrow');

    /**
     * @type {Array.<angular.JQLite>}
     */
    var arrows = [];
    var arrowOver = false;

    for (i = 0; i < 2; i++) {
      arrows.push(ng.element(arrowsContainer[i]));
      arrows[i].bind('mouseover', function() {
        arrowOver = true;
      });
      arrows[i].bind('mouseleave', function() {
        arrowOver = false;
      });
    }


    /**
     * Hides navigation arrows on timer.
     */
    var timerFunction = function() {
      if (!arrowOver) {
        $scope.showArrows(false);
      }
      $timeout.cancel(timeoutId);
      timeoutId = 0;
    };

    main.addEventListener('mousemove', function() {
      if (!timeoutId) {
        $scope.showArrows(true);
      }
      $timeout.cancel(timeoutId);
      timeoutId = $timeout(timerFunction, NAVIGATION_ARROWS_SHOW_TIME);
    });


    /**
     * Shows and hides navigation arrows.
     * @param {boolean} show Whether the navigation arrows should be visible.
     */
    $scope.showArrows = function(show) {
      for (i = 0; i < 2; i++) {
        if (show) {
          arrows[i].removeClass('invisible');
        } else {
          arrows[i].addClass('invisible');
        }
      }
    };


    /**
     * Builds lists of the products to be used in the carousels.
     * @param {number} maxItems Maximum number of items in the list.
     * @param {number} maxLists Maximum number of lists.
     * @return {Array.<Object>} All the products lists available.
     */
    $scope.buildProductLists = function(maxItems, maxLists) {
      var res = [];
      var products = $scope.products;
      var chunk = maxItems || 4;
      var max = maxLists || 10;

      // Running through the products building the lists of them, at the same
      // time counting the number of lists built. Then carousel will be
      // scrolling through these lists.
      for (var i = 0, j = 0; i < products.length && j++ < max; i += chunk) {
        var list = products.slice(i, i + chunk);
        list = list.concat(products.slice(0, chunk - list.length));
        res.push(list);
      }

      // Do not create duplicates when products number is less then maximum
      // visible elements.
      if (products.length < maxItems) {
        res = [];
        res.push(products);
      }
      return res;
    };
  }


  /**
   * Exposes carousel as a custom attribute. Draws navigation arrows.
   * @param {!angular.$timeout} $timeout The Angular timeput service.
   * @return {angular.Directive} Directive definition object.
   */
  module.directive('arrow', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, el) {
        $timeout(function() {
          var canvas = document.createElement('canvas');
          canvas.width = NavigationArrowSize_.WIDTH;
          canvas.height = NavigationArrowSize_.HEIGHT;
          canvas.style.position = 'absolute';
          var context = canvas.getContext('2d');
          context.moveTo(0, 4);
          context.lineTo(3, 4);
          context.lineTo(3, 0);
          context.lineTo(14, 10);
          context.lineTo(3, 21);
          context.lineTo(3, 21);
          context.lineTo(3, 17);
          context.lineTo(0, 17);
          context.lineTo(0, 4);
          var grd = context.createLinearGradient(0, 0, 0, canvas.height);

          if (scope.toBoolean(scope.design['bgGradient'])) {
            grd.addColorStop(0, scope.design['btnColor'].toColor());
            grd.addColorStop(1,
                scope.design['btnColor'].changeBrightness(-0.4));
            context.fillStyle = grd;
          } else {
            context.fillStyle = scope.design['btnColor'].toColor();
          }

          context.fill();

          el[0].appendChild(canvas);
          canvas.style.left = '{0}px'.format((el[0].offsetWidth -
              canvas.width) / 2);
          canvas.style.top = '{0}px'.format((el[0].offsetHeight -
              canvas.height) / 2);

          el.bind('mouseover', function() {
            if (scope.toBoolean(scope.design['bgGradient'])) {
              grd.addColorStop(0, scope.design['btnRollColor'].toColor());
              grd.addColorStop(1,
                  scope.design['btnRollColor'].changeBrightness(-0.4));
              context.fillStyle = grd;
            } else {
              context.fillStyle = scope.design['btnRollColor'].toColor();
            }
            context.fill();
          });

          el.bind('mouseleave', function() {
            if (scope.toBoolean(scope.design['bgGradient'])) {
              grd.addColorStop(0, scope.design['btnColor'].toColor());
              grd.addColorStop(1,
                  scope.design['btnColor'].changeBrightness(-0.4));
              context.fillStyle = grd;
            } else {
              context.fillStyle = scope.design['btnColor'].toColor();
            }
            context.fill();
          });

          el.bind('click', function(e) {
            // These functions are added to prevent exit URL event from firing
            // upon click. Exit URL event is bound to the entire layout.
            e.preventDefault();
            e.stopImmediatePropagation();

            if (el.hasClass('left')) {
              scope.$emit('carousel_previous_item');
            } else {
              scope.$emit('carousel_next_item');
            }
          });
        });
      }
    };
  });


  /**
   * Exposes carousel as a custom attribute. Implements carousel main
   * functionality.
   * @param {!angular.$timeout} $timeout The Angular timeput service.
   * @return {angular.Directive} Directive definition object.
   */
  module.directive('carousel', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        $timeout(function() {
          var element = el[0];
          var timeoutId;
          var vertical = attrs.vertical;
          var iterator = Object.create(Iterator);
          var listWidth = localUtils.calculateAvailableSpace(el[0]).width;
          var listHeight = localUtils.calculateAvailableSpace(el[0]).height;
          var listWBorderWidth = listWidth + 2;
          var listWBorderHeight = listHeight + 2;
          var carousel = ng.element(element.querySelector('.carousel'));
          var count = scope.$eval(element.attributes.total.value);
          var time = attrs.timer && attrs.timer.toNumber();
          var duration = attrs.duration && attrs.duration.toNumber();
          var visibleItems;
          var shiftItems = visibleItems = Math.min(scope.maxItems,
              scope.products.length);

          if (vertical) {
            carousel.css('width', '{0}px'.format(listWBorderWidth));
          }

          // Convert NodeList to Array. Products array is used to track current
          // visible elements.
          var products = [].slice.call(element.querySelectorAll('.product'));

          // Set up variables according to layout type and remove unnecessary
          // animation elements (that are used for smooth animation) from array.
          products = products.slice(visibleItems, (count + 1) *
              visibleItems);

          for (var i = 0; i < products.length; i++) {
            products[i] = ng.element(products[i]);
          }

          for (i = 0; i < visibleItems; i++) {
            products[i].addClass('visible');
          }

          /**
           * Sets active slide.
           * @param {number} index Current slide index.
           */
          var setActive = function(index) {
            scope.$emit('active:change', index);
            if (iterator.wrapped) {
              var i;
              carousel.removeClass('transition');
              if (iterator.dir === 'left') {
                i = iterator.length + 1;
              }
              if (iterator.dir === 'right') {
                i = 0;
              }
              if (vertical) {
                carousel.css('top', '-{0}px'.format(i * listHeight));
              } else {
                carousel.css('left', '-{0}px'.format(i * listWidth));
              }

            }

            for (i = 0; i < products.length; i++) {
              products[i].removeClass('visible');
            }
            for (i = 0; i < visibleItems; i++) {
              products[i].addClass('visible');
            }

            $timeout(function() {
              move(index);
            }, iterator.wrapped ? 50 : 0);

            iterator.current = index;
          };


          /**
           * Moves slides of the carousel.
           * @param {number} index Current slide index.
           */
          var move = function(index) {
            if (multiMode) {
              carousel.addClass('transition fast');
            }
            $timeout(function() {
              if (vertical) {
                carousel.css('top', '-{0}px'.format((index) *
                    listHeight + listHeight));
              } else {
                carousel.css('left', '-{0}px'.format((index) *
                    listWidth + listWidth));
              }
            }, 50);
          };


          /**
           * Timer initialization for carousel auto rotation.
           */
          var initTimer = function() {
            onTimeout();
            if (duration) {
              $timeout(function() {
                onCancel();
              }, duration);
            }
          };


          /**
           * Updates carousel.
           * @param {number} index Current slide index.
           */
          var update = function(index) {
            setActive(index);
          };


          /**
           * Triggered on next navigation arrow click.
           */
          var onNext = function() {
            for (var i = 0; i < shiftItems; i++) {
              products.push(products.shift());
            }
            iterator.increment();
            setActive(iterator.current);
          };


          /**
           * Triggered on previous navigation arrow click.
           */
          var onPrev = function() {
            for (var i = 0; i < shiftItems; i++) {
              products.unshift(products.pop());
            }
            iterator.decrement();
            setActive(iterator.current);
          };


          /**
           * Triggers update for the carousel, and re-initializes carousel
           * auto rotation.
           */
          var onTimeout = function() {
            timeoutId = $timeout(function() {
              onNext();
              onTimeout();
            }, time);
          };


          /**
           * Stops carousel auto rotation.
           */
          var onCancel = function() {
            $timeout.cancel(timeoutId);
          };


          var multiMode = count > 1;

          /**
           * Initialize the iterator for automated rotation of the carousel.
           */
          iterator.init(count);
          $timeout(function() {
            var items = ng.element(element.querySelectorAll('.carousel-item'));
            if (!vertical) {
              carousel.css('width', '{0}px'.format(listWBorderWidth *
                  (count + 2)));
              items.css('width', '{0}px'.format(listWidth));
            } else {
              carousel.css('height', '{0}px'.format(listWBorderHeight *
                  (count + 2)));
              items.css('height', '{0}px'.format(listHeight));
            }
            update(0);
          });

          if (multiMode) {
            initTimer();
            scope.$on('carousel_next_item', onNext);
            scope.$on('carousel_previous_item', onPrev);
            el.bind('mouseenter $destroy', onCancel);
          } else {
            el.parent().addClass('single-mode');
          }
        });
      }
    };
  });


  /**
   * Exposes align as a custom attribute.
   * @return {angular.Directive} Directive definition object.
   */
  module.directive('align', function() {
    return {
      restrict: 'A',
      link: function(scope, el) {
        localUtils.alignBlock(el);
      }
    };
  });


  /**
   * Exposes enhanced extImageFit as a custom attribute.
   * @return {angular.Directive} Directive definition object.
   */
  module.directive('extImageFit', function() {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        scope.$watch(attrs.src, function() {
          localUtils.imageFit(el, scope.$eval(attrs.src));
        });
      }
    };
  });

  ng.module('layout', ['utils', module.name],
      function($controllerProvider) {
        $controllerProvider.allowGlobals();
  });

  return {
    LayoutController: LayoutController
  };
})(angular);


/**
 * Layout specification.
 */
(function() {
  // DynamicX vertical.

  // Layout meta information.
  utils.defineMeta('layoutName', 'MinimalCarousel_1a-2');
  utils.defineMeta('version', '2.0');

  // Required attributes.
  utils.defineAttribute('Headline', 'productClickOnly', true);
  utils.defineAttribute('Product', 'imageUrl', true);
  utils.defineAttribute('Product', 'url', true);

  // Optional attributes.
  utils.defineAttribute('Design', 'logoImageUrl', false);
  utils.defineAttribute('Design', 'logoPadding', false);
  utils.defineAttribute('Design', 'bgImageUrl', false);
  utils.defineAttribute('Design', 'bgAlpha', false);
  utils.defineAttribute('Design', 'bgColor', false);
  utils.defineAttribute('Design', 'bgGradient', false);
  utils.defineAttribute('Design', 'borderColor', false);
  utils.defineAttribute('Design', 'cornerStyle', false);
  utils.defineAttribute('Design', 'btnColor', false);
  utils.defineAttribute('Design', 'btnRollColor', false);
  utils.defineAttribute('Design', 'glowColor', false);
  utils.defineAttribute('Design', 'fontUrl', false);

  // Occurrences.
  utils.defineOccurrences('Headline', 1, 1);
  utils.defineOccurrences('Design', 1, 1);
  utils.defineOccurrences('Product', 4, 6);

  window.setup = function() {
    document.getElementById('ad-container').addEventListener('click',
        utils.clickHandler, false);
  };

  window.initPreloading = function(dynamicData) {
    var data = dynamicData.google_template_data.adData[0];
    var design = utils.parse(data, 'Design')[0];
    var products = utils.parse(data, 'Product');
    var preloader = utils.preloader;
    preloader.addImage(design.logoImageUrl);
    preloader.addImage(design.bgImageUrl);
    for (var i = 0; i < products.length; i++) {
      preloader.addImage(products[i].imageUrl);
    }
  };
})();
