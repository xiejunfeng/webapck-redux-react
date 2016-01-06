webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(388);
	module.exports = __webpack_require__(234);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var constants = __webpack_require__(26);
	var nsPrefix = constants.NAMESPACE ? constants.NAMESPACE + '-' : '';
	
	module.exports = {
	  getClassSet: function getClassSet(ignorePrefix) {
	    var classNames = {};
	    // uses `.am-` as prefix if `classPrefix` is not defined
	    var prefix = nsPrefix;
	
	    if (this.props.classPrefix) {
	      var classPrefix = this.setClassNamespace();
	
	      prefix = classPrefix + '-';
	
	      // don't return prefix if flag set
	      !ignorePrefix && (classNames[classPrefix] = true);
	    }
	
	    var amSize = this.props.amSize;
	    var amStyle = this.props.amStyle;
	
	    if (amSize) {
	      classNames[prefix + amSize] = true;
	    }
	
	    if (amStyle) {
	      classNames[prefix + amStyle] = true;
	    }
	
	    // add theme className for widgets
	    if (this.props.theme) {
	      classNames[prefix + this.props.theme] = true;
	    }
	
	    // states
	    classNames[constants.CLASSES.active] = this.props.active;
	    classNames[constants.CLASSES.disabled] = this.props.disabled;
	
	    // shape
	    classNames[constants.CLASSES.radius] = this.props.radius;
	    classNames[constants.CLASSES.round] = this.props.round;
	
	    // clearfix
	    classNames[constants.CLASSES.cf] = this.props.cf;
	
	    // am-divider
	    if (this.props.classPrefix !== 'divider') {
	      classNames[constants.CLASSES.divider] = this.props.divider;
	    }
	
	    return classNames;
	  },
	
	  // add namespace to classPrefix
	  setClassNamespace: function setClassNamespace(classPrefix) {
	    var prefix = classPrefix || this.props.classPrefix || '';
	
	    return nsPrefix + prefix;
	  },
	
	  prefixClass: function prefixClass(subClass) {
	    return this.setClassNamespace() + '-' + subClass;
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	
	function classNames() {
		var classes = '';
		var arg;
	
		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}
	
			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}
	
	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}
	
	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var Icon = React.createClass({
	  displayName: 'Icon',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    amStyle: React.PropTypes.string,
	    fw: React.PropTypes.bool,
	    spin: React.PropTypes.bool,
	    button: React.PropTypes.bool,
	    size: React.PropTypes.string,
	    href: React.PropTypes.string,
	    componentTag: React.PropTypes.node.isRequired,
	    icon: React.PropTypes.string.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'icon',
	      componentTag: 'span'
	    };
	  },
	
	  render: function render() {
	    var classes = this.getClassSet(true);
	    var props = this.props;
	    var Component = props.href ? 'a' : props.componentTag;
	    var prefixClass = this.prefixClass;
	    var setClassNamespace = this.setClassNamespace;
	
	    // am-icon-[iconName]
	    classes[prefixClass(props.icon)] = true;
	
	    // am-icon-btn
	    classes[prefixClass('btn')] = props.button;
	
	    // button style
	    props.button && props.amStyle && (classes[setClassNamespace(props.amStyle)] = true);
	
	    // am-icon-fw
	    classes[prefixClass('fw')] = props.fw;
	
	    // am-icon-spin
	    classes[prefixClass('spin')] = props.spin;
	
	    return React.createElement(
	      Component,
	      _extends({}, props, {
	        className: classNames(classes, this.props.className) }),
	      this.props.children
	    );
	  }
	});
	
	module.exports = Icon;

/***/ },
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * object.omit <https://github.com/jonschlinkert/object.omit>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var isObject = __webpack_require__(221);
	var forOwn = __webpack_require__(256);
	
	module.exports = function omit(obj, keys) {
	  if (!isObject(obj)) return {};
	  if (!keys) return obj;
	
	  keys = Array.isArray(keys) ? keys : [keys];
	  var res = {};
	
	  forOwn(obj, function (value, key) {
	    if (keys.indexOf(key) === -1) {
	      res[key] = value;
	    }
	  });
	  return res;
	};


/***/ },
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	var bind = window.addEventListener ? 'addEventListener' : 'attachEvent';
	var unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent';
	var prefix = bind !== 'addEventListener' ? 'on' : '';
	
	var events = {
	  one: function one(node, eventNames, eventListener) {
	    var typeArray = eventNames.split(' ');
	    var recursiveFunction = function recursiveFunction(e) {
	      e.target.removeEventListener(e.type, recursiveFunction);
	      return eventListener(e);
	    };
	
	    for (var i = typeArray.length - 1; i >= 0; i--) {
	      this.on(node, typeArray[i], recursiveFunction);
	    }
	  },
	
	  /**
	   * Bind `node` event `eventName` to `eventListener`.
	   *
	   * @param {Element} node
	   * @param {String} eventName
	   * @param {Function} eventListener
	   * @param {Boolean} capture
	   * @return {Obejct}
	   * @api public
	   */
	
	  on: function on(node, eventName, eventListener, capture) {
	    node[bind](prefix + eventName, eventListener, capture || false);
	
	    return {
	      off: function off() {
	        node[unbind](prefix + eventName, eventListener, capture || false);
	      }
	    };
	  },
	
	  /**
	   * Unbind `node` event `eventName`'s callback `eventListener`.
	   *
	   * @param {Element} node
	   * @param {String} eventName
	   * @param {Function} eventListener
	   * @param {Boolean} capture
	   * @return {Function}
	   * @api public
	   */
	
	  off: function off(node, eventName, eventListener, capture) {
	    node[unbind](prefix + eventName, eventListener, capture || false);
	    return eventListener;
	  }
	};
	
	module.exports = events;

/***/ },
/* 22 */,
/* 23 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	var NAMESPACE = 'am';
	var setNamespace = function setNamespace(className) {
	  return (NAMESPACE ? NAMESPACE + '-' : '') + className;
	};
	
	module.exports = {
	  NAMESPACE: NAMESPACE,
	
	  CLASSES: {
	    active: setNamespace('active'),
	    disabled: setNamespace('disabled'),
	    round: setNamespace('round'),
	    radius: setNamespace('radius'),
	    square: setNamespace('square'),
	    circle: setNamespace('circle'),
	    divider: setNamespace('divider'),
	    cf: setNamespace('cf'),
	    fl: setNamespace('fl'),
	    fr: setNamespace('fr')
	  },
	
	  STYLES: {
	    'default': 'default',
	    primary: 'primary',
	    secondary: 'secondary',
	    success: 'success',
	    warning: 'warning',
	    danger: 'danger'
	  },
	
	  SIZES: {}
	};

/***/ },
/* 27 */,
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);
	
	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}
	
	module.exports = toObject;


/***/ },
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var omit = __webpack_require__(18);
	
	var Button = React.createClass({
	  displayName: 'Button',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string.isRequired,
	    active: React.PropTypes.bool,
	    block: React.PropTypes.bool,
	    disabled: React.PropTypes.bool,
	    radius: React.PropTypes.bool,
	    round: React.PropTypes.bool,
	    componentTag: React.PropTypes.node,
	    href: React.PropTypes.string,
	    target: React.PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn',
	      type: 'button',
	      amStyle: 'default'
	    };
	  },
	
	  renderAnchor: function renderAnchor(classSet) {
	    var Component = this.props.componentTag || 'a';
	    var href = this.props.href || '#';
	    var props = omit(this.props, 'type');
	
	    return React.createElement(
	      Component,
	      _extends({}, props, {
	        href: href,
	        className: classNames(this.props.className, classSet),
	        role: 'button' }),
	      this.props.children
	    );
	  },
	
	  renderButton: function renderButton(classSet) {
	    var Component = this.props.componentTag || 'button';
	
	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet) }),
	      this.props.children
	    );
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	    var renderType = this.props.href || this.props.target ? 'renderAnchor' : 'renderButton';
	
	    // block button
	    this.props.block && (classSet[this.prefixClass('block')] = true);
	
	    return this[renderType](classSet);
	  }
	});
	
	module.exports = Button;

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var RECEIVE_ARTICLES = exports.RECEIVE_ARTICLES = "RECEIVE_ARTICLES";
	
	var RECEIVE_ENTITIES = exports.RECEIVE_ENTITIES = "RECEIVE_ENTITIES";
	var RECEIVE_RESULTS = exports.RECEIVE_RESULTS = "RECEIVE_RESULTS";

/***/ },
/* 35 */,
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(125),
	    isLength = __webpack_require__(46),
	    isObjectLike = __webpack_require__(47);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 37 */,
/* 38 */,
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var AvgGrid = React.createClass({
	  displayName: 'AvgGrid',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string.isRequired,
	    componentTag: React.PropTypes.node,
	    sm: React.PropTypes.number,
	    md: React.PropTypes.number,
	    lg: React.PropTypes.number
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'avg',
	      componentTag: 'ul'
	    };
	  },
	
	  render: function render() {
	    var Component = this.props.componentTag;
	    var classSet = {};
	    var prefixClass = this.prefixClass;
	    var props = this.props;
	
	    ['sm', 'md', 'lg'].forEach(function (size) {
	      if (props[size]) {
	        classSet[prefixClass(size + '-' + props[size])] = true;
	      }
	    });
	
	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet) }),
	      this.props.children
	    );
	  }
	});
	
	module.exports = AvgGrid;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	/**
	 * Inputs Components
	 * @desc includes input, input-group
	 */
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var FormGroup = __webpack_require__(105);
	var Button = __webpack_require__(33);
	var Icon = __webpack_require__(13);
	var constants = __webpack_require__(26);
	
	var Input = React.createClass({
	  displayName: 'Input',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    type: React.PropTypes.string,
	    disabled: React.PropTypes.bool,
	    radius: React.PropTypes.bool,
	    round: React.PropTypes.bool,
	    amSize: React.PropTypes.oneOf(['sm', 'lg']),
	    amStyle: React.PropTypes.string,
	    validation: React.PropTypes.oneOf(['success', 'warning', 'error']),
	    label: React.PropTypes.node,
	    help: React.PropTypes.node,
	    addonBefore: React.PropTypes.node,
	    addonAfter: React.PropTypes.node,
	    btnBefore: React.PropTypes.node,
	    btnAfter: React.PropTypes.node,
	    id: React.PropTypes.string,
	    groupClassName: React.PropTypes.string,
	    wrapperClassName: React.PropTypes.string,
	    labelClassName: React.PropTypes.string,
	    helpClassName: React.PropTypes.string,
	    icon: React.PropTypes.string,
	    standalone: React.PropTypes.bool,
	    inline: React.PropTypes.bool,
	    hasFeedback: React.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      type: 'text'
	    };
	  },
	
	  getFieldDOMNode: function getFieldDOMNode() {
	    return ReactDOM.findDOMNode(this.refs.field);
	  },
	
	  getValue: function getValue() {
	    if (this.props.type === 'select' && this.props.multiple) {
	      return this.getSelectedOptions();
	    } else {
	      return this.getFieldDOMNode().value;
	    }
	  },
	
	  getChecked: function getChecked() {
	    return this.getFieldDOMNode().checked;
	  },
	
	  getSelectedOptions: function getSelectedOptions() {
	    var values = [];
	    var options = this.getFieldDOMNode().getElementsByTagName('option');
	
	    options.forEach(function (option) {
	      if (option.selected) {
	        var value = option.getAttribute('value') || option.innerHtml;
	
	        values.push(value);
	      }
	    });
	
	    return values;
	  },
	
	  isCheckboxOrRadio: function isCheckboxOrRadio() {
	    return this.props.type === 'radio' || this.props.type === 'checkbox';
	  },
	
	  isFile: function isFile() {
	    return this.props.type === 'file';
	  },
	
	  renderInput: function renderInput() {
	    var input = null;
	    var fieldClassName = this.isCheckboxOrRadio() || this.isFile() ? '' : this.setClassNamespace('form-field');
	    var classSet = {};
	
	    classSet[constants.CLASSES.round] = this.props.round;
	    classSet[constants.CLASSES.radius] = this.props.radius;
	
	    if (this.props.amSize && !this.props.standalone) {
	      classSet[this.setClassNamespace('input-' + this.props.amSize)] = true;
	    }
	
	    var classes = classNames(this.props.className, fieldClassName, classSet);
	
	    switch (this.props.type) {
	      case 'select':
	        input = React.createElement(
	          'select',
	          _extends({}, this.props, {
	            className: classes,
	            ref: 'field', key: 'field' }),
	          this.props.children
	        );
	        break;
	      case 'textarea':
	        input = React.createElement('textarea', _extends({}, this.props, {
	          className: classes,
	          ref: 'field',
	          key: 'field' }));
	        break;
	      case 'submit':
	      case 'reset':
	        input = React.createElement(Button, _extends({}, this.props, {
	          componentTag: 'input',
	          ref: 'field',
	          key: 'field' }));
	        break;
	      default:
	        input = React.createElement('input', _extends({}, this.props, {
	          className: classes,
	          ref: 'field',
	          key: 'field' }));
	    }
	
	    return input;
	  },
	
	  // Input wrapper if wrapperClassName set
	  renderWrapper: function renderWrapper(children) {
	    return this.props.wrapperClassName ? React.createElement(
	      'div',
	      {
	        className: this.props.wrapperClassName,
	        key: 'wrapper' },
	      children
	    ) : children;
	  },
	
	  // Wrap block checkbox/radio
	  renderCheckboxAndRadioWrapper: function renderCheckboxAndRadioWrapper(children) {
	    // Don't wrap inline checkbox/radio
	    return this.props.inline ? children : React.createElement(
	      'div',
	      {
	        className: this.setClassNamespace(this.props.type),
	        key: 'checkboxAndRadioWrapper' },
	      children
	    );
	  },
	
	  renderLabel: function renderLabel(children) {
	    // label doesn't work with icon
	    /*if (this.props.icon) {
	      return null;
	    }*/
	
	    var classSet = {};
	
	    if (this.isCheckboxOrRadio()) {
	      // inline checkbox and radio
	      this.props.inline && (classSet[this.setClassNamespace(this.props.type + '-inline')] = true);
	    } else {
	      // normal form label
	      classSet[this.setClassNamespace('form-label')] = true;
	    }
	
	    return this.props.label ? React.createElement(
	      'label',
	      {
	        htmlFor: this.props.id,
	        className: classNames(this.props.labelClassName, classSet),
	        key: 'label' },
	      children,
	      this.props.label
	    ) : children;
	  },
	
	  renderInputGroup: function renderInputGroup(children) {
	    var groupPrefix = this.setClassNamespace('input-group');
	    var addonClassName = groupPrefix + '-label';
	    var btnClassName = groupPrefix + '-btn';
	    var addonBefore = this.props.addonBefore ? React.createElement(
	      'span',
	      { className: addonClassName, key: 'addonBefore' },
	      this.props.addonBefore
	    ) : null;
	    var addonAfter = this.props.addonAfter ? React.createElement(
	      'span',
	      { className: addonClassName, key: 'addonAfter' },
	      this.props.addonAfter
	    ) : null;
	    var btnBefore = this.props.btnBefore ? React.createElement(
	      'span',
	      { className: btnClassName, key: 'btnBefore' },
	      this.props.btnBefore
	    ) : null;
	    var btnAfter = this.props.btnAfter ? React.createElement(
	      'span',
	      { className: btnClassName, key: 'btnAfter' },
	      this.props.btnAfter
	    ) : null;
	    var classSet = {};
	
	    if (this.props.amSize) {
	      classSet[groupPrefix + '-' + this.props.amSize] = true;
	    }
	
	    if (this.props.amStyle) {
	      classSet[groupPrefix + '-' + this.props.amStyle] = true;
	    }
	
	    return addonBefore || addonAfter || btnBefore || btnAfter ? React.createElement(
	      'div',
	      {
	        className: classNames(groupPrefix, classSet),
	        key: 'inputGroup' },
	      addonBefore,
	      btnBefore,
	      children,
	      addonAfter,
	      btnAfter
	    ) : children;
	  },
	
	  // form help
	  renderHelp: function renderHelp() {
	    return this.props.help ? React.createElement(
	      'p',
	      {
	        className: classNames(this.setClassNamespace('form-help'), this.props.helpClassName),
	        key: 'help' },
	      this.props.help
	    ) : '';
	  },
	
	  renderIcon: function renderIcon() {
	    var props = this.props;
	    var feedbackIcon = {
	      success: 'check',
	      warning: 'warning',
	      error: 'times'
	    };
	    var icon = props.icon || props.hasFeedback && props.validation && feedbackIcon[props.validation];
	
	    return icon ? React.createElement(Icon, { icon: icon, key: 'icon' }) : null;
	  },
	
	  render: function render() {
	    // standalone mode
	    if (this.props.standalone) {
	      return this.renderInput();
	    }
	
	    // render checkbox and radio, without FormGroup wrapper
	    if (this.isCheckboxOrRadio()) {
	      return this.renderWrapper(this.renderCheckboxAndRadioWrapper(this.renderLabel(this.renderInput())));
	    }
	
	    var groupClassName = classNames(this.props.type === 'select' ? this.setClassNamespace('form-select') : null, this.props.icon && this.setClassNamespace('form-icon'), this.props.groupClassName);
	
	    return React.createElement(
	      FormGroup,
	      {
	        className: groupClassName,
	        validation: this.props.validation,
	        amSize: this.props.amSize,
	        hasFeedback: this.props.hasFeedback },
	      [this.renderLabel(), this.renderWrapper(this.renderInputGroup(this.renderInput())), this.renderIcon(), this.renderHelp()]
	    );
	  }
	});
	
	module.exports = Input;

/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @via https://github.com/facebook/react/blob/master/src/vendor/core/CSSCore.js
	 */
	
	'use strict';
	
	var CSSCore = {
	
	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function addClass(element, className) {
	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },
	
	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function removeClass(element, className) {
	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },
	
	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function conditionClass(element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },
	
	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function hasClass(element, className) {
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  },
	
	  toggleClass: function toggleClass(element, className) {
	    return CSSCore.hasClass(element, className) ? CSSCore.removeClass(element, className) : CSSCore.addClass(element, className);
	  }
	};
	
	module.exports = CSSCore;

/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * modified version of:
	 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/utils/createChainedFunction.js
	 */
	
	'use strict';
	
	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} one
	 * @param {function} two
	 * @returns {function|null}
	 */
	
	function createChainedFunction(one, two) {
	  var hasOne = typeof one === 'function';
	  var hasTwo = typeof two === 'function';
	
	  if (!hasOne && !hasTwo) {
	    return null;
	  }
	
	  if (!hasOne) {
	    return two;
	  }
	
	  if (!hasTwo) {
	    return one;
	  }
	
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}
	
	module.exports = createChainedFunction;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	
	/**
	 * Get ownerDocument
	 * @param {ReactComponent|HTMLElement} componentOrElement
	 * @returns {HTMLDocument}
	 */
	function ownerDocument(componentOrElement) {
	  var element = ReactDOM.findDOMNode(componentOrElement);
	
	  return element && element.ownerDocument || document;
	}
	
	/**
	 * Get ownerWindow
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 * @refer https://github.com/jquery/jquery/blob/6df669f0fb87cd9975a18bf6bbe3c3548afa4fee/src/event.js#L294-L297
	 */
	function ownerWindow(element) {
	  var doc = ownerDocument(element);
	
	  return doc.defaultView || doc.parentWindow || window;
	}
	
	module.exports = {
	  ownerDocument: ownerDocument,
	
	  ownerWindow: ownerWindow,
	
	  scrollTop: function scrollTop(element, value) {
	    if (!element) {
	      return;
	    }
	
	    var hasScrollTop = ('scrollTop' in element);
	
	    if (value === undefined) {
	      return hasScrollTop ? element.scrollTop : element.pageYOffset;
	    }
	
	    hasScrollTop ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
	  },
	
	  offset: function offset(element) {
	    if (element) {
	      var rect = element.getBoundingClientRect();
	      var body = document.body;
	      var clientTop = element.clientTop || body.clientTop || 0;
	      var clientLeft = element.clientLeft || body.clientLeft || 0;
	      var scrollTop = window.pageYOffset || element.scrollTop;
	      var scrollLeft = window.pageXOffset || element.scrollLeft;
	
	      return {
	        top: rect.top + scrollTop - clientTop,
	        left: rect.left + scrollLeft - clientLeft
	      };
	    }
	
	    return null;
	  },
	
	  position: function position(element) {
	    return {
	      left: element.offsetLeft,
	      top: element.offsetTop
	    };
	  }
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};


/***/ },
/* 45 */,
/* 46 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * modified version of:
	 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CollapsibleMixin.js
	 */
	
	'use strict';
	
	var React = __webpack_require__(2);
	var TransitionEvents = __webpack_require__(70);
	
	var CollapseMixin = {
	  propTypes: {
	    defaultExpanded: React.PropTypes.bool,
	    expanded: React.PropTypes.bool
	  },
	
	  getInitialState: function getInitialState() {
	    var defaultExpanded = this.props.defaultExpanded != null ? this.props.defaultExpanded : this.props.expanded != null ? this.props.expanded : false;
	
	    return {
	      expanded: defaultExpanded,
	      collapsing: false
	    };
	  },
	
	  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	    var willExpanded = nextProps.expanded != null ? nextProps.expanded : nextState.expanded;
	
	    if (willExpanded === this.isExpanded()) {
	      return;
	    }
	
	    // if the expanded state is being toggled, ensure node has a dimension value
	    // this is needed for the animation to work and needs to be set before
	    // the collapsing class is applied (after collapsing is applied the in class
	    // is removed and the node's dimension will be wrong)
	
	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();
	    var value = '0';
	
	    if (!willExpanded) {
	      // get height
	      value = this.getCollapsibleDimensionValue();
	    }
	
	    node.style[dimension] = value + 'px';
	
	    this._afterWillUpdate();
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    // check if expanded is being toggled; if so, set collapsing
	    this._checkToggleCollapsing(prevProps, prevState);
	
	    // check if collapsing was turned on; if so, start animation
	    this._checkStartAnimation();
	  },
	
	  // helps enable test stubs
	  _afterWillUpdate: function _afterWillUpdate() {},
	
	  _checkStartAnimation: function _checkStartAnimation() {
	    if (!this.state.collapsing) {
	      return;
	    }
	
	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();
	    var value = this.getCollapsibleDimensionValue();
	
	    // setting the dimension here starts the transition animation
	    var result;
	
	    if (this.isExpanded()) {
	      result = value + 'px';
	    } else {
	      result = '0px';
	    }
	    node.style[dimension] = result;
	  },
	
	  _checkToggleCollapsing: function _checkToggleCollapsing(prevProps, prevState) {
	    var wasExpanded = prevProps.expanded != null ? prevProps.expanded : prevState.expanded;
	    var isExpanded = this.isExpanded();
	
	    if (wasExpanded !== isExpanded) {
	      if (wasExpanded) {
	        this._handleCollapse();
	      } else {
	        this._handleExpand();
	      }
	    }
	  },
	
	  _handleExpand: function _handleExpand() {
	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();
	
	    var complete = (function () {
	      this._removeEndEventListener(node, complete);
	      // remove dimension value - this ensures the collapsible item can grow
	      // in dimension after initial display (such as an image loading)
	      node.style[dimension] = '';
	      this.setState({
	        collapsing: false
	      });
	    }).bind(this);
	
	    this._addEndEventListener(node, complete);
	
	    this.setState({
	      collapsing: true
	    });
	  },
	
	  _handleCollapse: function _handleCollapse() {
	    var node = this.getCollapsibleDOMNode();
	    var _this = this;
	    var complete = function complete() {
	      _this._removeEndEventListener(node, complete);
	      _this.setState({
	        collapsing: false
	      });
	    };
	
	    this._addEndEventListener(node, complete);
	
	    this.setState({
	      collapsing: true
	    });
	  },
	
	  // helps enable test stubs
	  _addEndEventListener: function _addEndEventListener(node, complete) {
	    TransitionEvents.on(node, complete);
	  },
	
	  // helps enable test stubs
	  _removeEndEventListener: function _removeEndEventListener(node, complete) {
	    TransitionEvents.off(node, complete);
	  },
	
	  dimension: function dimension() {
	    return typeof this.getCollapsibleDimension === 'function' ? this.getCollapsibleDimension() : 'height';
	  },
	
	  isExpanded: function isExpanded() {
	    return this.props.expanded != null ? this.props.expanded : this.state.expanded;
	  },
	
	  getCollapsibleClassSet: function getCollapsibleClassSet(className) {
	    var classSet = {};
	
	    if (typeof className === 'string') {
	      className.split(' ').forEach(function (subClass) {
	        if (subClass) {
	          classSet[subClass] = true;
	        }
	      });
	    }
	
	    classSet[this.setClassNamespace('collapsing')] = this.state.collapsing;
	    classSet[this.setClassNamespace('collapse')] = !this.state.collapsing;
	    classSet[this.setClassNamespace('in')] = this.isExpanded() && !this.state.collapsing;
	
	    return classSet;
	  }
	};
	
	module.exports = CollapseMixin;

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Debounce function
	 * @param {function} fn  Function to be debounced
	 * @param {number} wait Function execution threshold in milliseconds
	 * @param {bool} immediate  Whether the function should be called at
	 *                          the beginning of the delay instead of the
	 *                          end. Default is false.
	 * @desc Executes a function when it stops being invoked for n seconds
	 * @via  _.debounce() http://underscorejs.org
	 */
	
	module.exports = function (fn, wait, immediate) {
	  var timeout;
	
	  return function () {
	    var context = this;
	    var args = arguments;
	    var later = function later() {
	      timeout = null;
	      if (!immediate) {
	        fn.apply(context, args);
	      }
	    };
	    var callNow = immediate && !timeout;
	
	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	
	    if (callNow) {
	      fn.apply(context, args);
	    }
	  };
	};

/***/ },
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	var classNames = __webpack_require__(4);
	var getScrollbarWidth = __webpack_require__(220);
	var CSSCore = __webpack_require__(41);
	
	module.exports = {
	  setDimmerContainer: function setDimmerContainer() {
	    var container = this.props.container && ReactDOM.findDOMNode(this.props.container) || document.body;
	    var bodyPaddingRight = parseInt(container.style.paddingRight || 0, 10);
	    var barWidth = getScrollbarWidth();
	
	    if (barWidth) {
	      container.style.paddingRight = bodyPaddingRight + barWidth + 'px';
	    }
	
	    CSSCore.addClass(container, this.setClassNamespace('dimmer-active'));
	  },
	
	  resetDimmerContainer: function resetDimmerContainer(nextProps, nextState) {
	    var container = this.props.container && ReactDOM.findDOMNode(this.props.container) || document.body;
	
	    CSSCore.removeClass(container, this.setClassNamespace('dimmer-active'));
	
	    container.style.paddingRight = '';
	  },
	
	  renderDimmer: function renderDimmer(children) {
	    var onClick = this.handleDimmerClick || null;
	    var classSet = {};
	
	    classSet[this.setClassNamespace('dimmer')] = true;
	    classSet[this.setClassNamespace('active')] = true;
	
	    return React.createElement(
	      'div',
	      null,
	      React.createElement('div', {
	        onClick: onClick,
	        ref: 'dimmer',
	        style: { display: 'block' },
	        className: classNames(classSet) }),
	      children
	    );
	  }
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	/**
	 * Overlay Mixin
	 *
	 * @desc `overlay` is something like Popover, Modal, etc.
	 * */
	
	module.exports = {
	  propTypes: {
	    container: React.PropTypes.node
	  },
	
	  componentDidMount: function componentDidMount() {
	    this._renderOverlay();
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    this._renderOverlay();
	  },
	
	  // Remove Overlay related DOM node
	  componentWillUnmount: function componentWillUnmount() {
	    this._unmountOverlay();
	
	    if (this._overlayWrapper) {
	      this.getContainerDOMNode().removeChild(this._overlayWrapper);
	      this._overlayWrapper = null;
	    }
	  },
	
	  // Create Overlay wrapper
	  _mountOverlayWrapper: function _mountOverlayWrapper() {
	    this._overlayWrapper = document.createElement('div');
	    this.getContainerDOMNode().appendChild(this._overlayWrapper);
	  },
	
	  // Render Overlay to wrapper
	  _renderOverlay: function _renderOverlay() {
	    if (!this._overlayWrapper) {
	      this._mountOverlayWrapper();
	    }
	
	    var overlay = this.renderOverlay();
	
	    if (overlay !== null) {
	      this._overlayInstance = ReactDOM.render(overlay, this._overlayWrapper);
	    } else {
	      // Unmount if the component is null for transitions to null
	      this._unmountOverlay();
	    }
	  },
	
	  // Remove a mounted Overlay from wrapper
	  _unmountOverlay: function _unmountOverlay() {
	    ReactDOM.unmountComponentAtNode(this._overlayWrapper);
	    this._overlayInstance = null;
	  },
	
	  getOverlayDOMNode: function getOverlayDOMNode() {
	    if (!this.isMounted()) {
	      throw new Error('getOverlayDOMNode(): A component must be mounted to' + ' have a DOM node.');
	    }
	
	    if (this._overlayInstance) {
	      return ReactDOM.findDOMNode(this._overlayInstance);
	    }
	
	    return null;
	  },
	
	  getContainerDOMNode: function getContainerDOMNode() {
	    return ReactDOM.findDOMNode(this.props.container) || document.body;
	  }
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * modified version of:
	 * http://mir.aculo.us/2014/01/19/scrolling-dom-elements-to-the-top-a-zepto-plugin/
	 */
	
	'use strict';
	
	var React = __webpack_require__(2);
	var Events = __webpack_require__(21);
	var dom = __webpack_require__(43);
	var rAF = __webpack_require__(71);
	var scrollInProgress = false;
	
	var SmoothScrollMixin = {
	  smoothScroll: function smoothScroll(element, options) {
	    options = options || {};
	    var scrollTarget = element || window;
	    var targetY = options.position && parseInt(options.position, 10) || 0;
	    var initialY = dom.scrollTop(scrollTarget);
	    var lastY = initialY;
	    var delta = targetY - initialY;
	    // duration in ms, make it a bit shorter for short distances
	    // this is not scientific and you might want to adjust this for
	    // your preferences
	    var speed = options.speed || Math.min(750, Math.min(1500, Math.abs(initialY - targetY)));
	    // temp variables (t will be a position between 0 and 1, y is the calculated scrollTop)
	    var start;
	    var t;
	    var y;
	    var cancelScroll = function cancelScroll() {
	      abort();
	    };
	
	    // abort if already in progress or nothing to scroll
	    if (scrollInProgress) {
	      console.log(scrollInProgress);
	      return;
	    }
	
	    if (delta === 0) {
	      return;
	    }
	
	    // quint ease-in-out smoothing, from
	    // https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js#L127-L136
	    function smooth(pos) {
	      if ((pos /= 0.5) < 1) {
	        return 0.5 * Math.pow(pos, 5);
	      }
	
	      return 0.5 * (Math.pow(pos - 2, 5) + 2);
	    }
	
	    function abort() {
	      Events.off(scrollTarget, 'touchstart', cancelScroll);
	      scrollInProgress = false;
	    }
	
	    // when there's a touch detected while scrolling is in progress, abort
	    // the scrolling (emulates native scrolling behavior)
	    Events.on(scrollTarget, 'touchstart', cancelScroll);
	    scrollInProgress = true;
	
	    // start rendering away! note the function given to frame
	    // is named "render" so we can reference it again further down
	    rAF(function render(now) {
	      if (!scrollInProgress) {
	        return;
	      }
	
	      if (!start) {
	        start = now;
	      }
	
	      // calculate t, position of animation in [0..1]
	      t = Math.min(1, Math.max((now - start) / speed, 0));
	      // calculate the new scrollTop position (don't forget to smooth)
	      y = Math.round(initialY + delta * smooth(t));
	      // bracket scrollTop so we're never over-scrolling
	      if (delta > 0 && y > targetY) {
	        y = targetY;
	      }
	
	      if (delta < 0 && y < targetY) {
	        y = targetY;
	      }
	      // only actually set scrollTop if there was a change front he last frame
	      if (lastY !== y) {
	        dom.scrollTop(scrollTarget, y);
	      }
	
	      lastY = y;
	      // if we're not done yet, queue up an other frame to render,
	      // or clean up
	      if (y !== targetY) {
	        rAF(render);
	      } else {
	        abort();
	      }
	    });
	  }
	};
	
	module.exports = SmoothScrollMixin;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * modified version of:
	 * https://github.com/facebook/react/blob/0.13-stable/src/addons/transitions/ReactTransitionEvents.js
	 */
	
	'use strict';
	
	var CSSCore = __webpack_require__(41);
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },
	
	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	var support = {};
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    support[baseEventName] = false;
	
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        support[baseEventName] = baseEvents[styleName];
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}
	
	if (canUseDOM) {
	  detectEvents();
	}
	
	if (support.animationend) {
	  CSSCore.addClass(document.documentElement, 'cssanimations');
	}
	
	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var TransitionEvents = {
	  on: function on(node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  off: function off(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  support: support
	};
	
	module.exports = TransitionEvents;

/***/ },
/* 71 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * modified version of:
	 * https://github.com/facebook/react/blob/0.13-stable/src/vendor/core/requestAnimationFrame.js
	 */
	
	'use strict';
	
	var nativeRAF = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame;
	
	var lastTime = 0;
	
	var requestAnimationFrame = nativeRAF || function (callback) {
	  var currTime = Date.now();
	  var timeDelay = Math.max(0, 16 - (currTime - lastTime));
	
	  lastTime = currTime + timeDelay;
	  return global.setTimeout(function () {
	    callback(Date.now());
	  }, timeDelay);
	};
	
	// Works around a rare bug in Safari 6 where the first request is never invoked.
	requestAnimationFrame(function () {});
	
	module.exports = requestAnimationFrame;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;(function (main) {
		'use strict';
	
		/**
		 * Parse or format dates
		 * @class fecha
		 */
		var fecha = {},
			token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
			dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			amPm = ['am', 'pm'],
			twoDigits = /\d\d?/, threeDigits = /\d{3}/, fourDigits = /\d{4}/,
			word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
			noop = function () {},
			dayNamesShort = [], monthNamesShort = [],
			parseFlags = {
				D: [twoDigits, function (d, v) {
					d.day = v;
				}],
				M: [twoDigits, function (d, v) {
					d.month = v - 1;
				}],
				YY: [twoDigits, function (d, v) {
					var da = new Date(), cent = +('' + da.getFullYear()).substr(0, 2);
					d.year = '' + (v > 68 ? cent - 1 : cent) + v;
				}],
				h: [twoDigits, function (d, v) {
					d.hour = v;
				}],
				m: [twoDigits, function (d, v) {
					d.minute = v;
				}],
				s: [twoDigits, function (d, v) {
					d.second = v;
				}],
				YYYY: [fourDigits, function (d, v) {
					d.year = v;
				}],
				S: [/\d/, function (d, v) {
					d.millisecond = v * 100;
				}],
				SS: [/\d{2}/, function (d, v) {
					d.millisecond = v * 10;
				}],
				SSS: [threeDigits, function (d, v) {
					d.millisecond = v;
				}],
				d: [twoDigits, noop],
				ddd: [word, noop],
				MMM: [word, monthUpdate('monthNamesShort')],
				MMMM: [word, monthUpdate('monthNames')],
				a: [word, function (d, v) {
					if (amPm.indexOf(v.toLowerCase())) {
						d.isPm = true;
					}
				}],
				ZZ: [/[\+\-]\d\d:?\d\d/, function (d, v) {
					var parts = (v + '').match(/([\+\-]|\d\d)/gi), minutes;
	
					if (parts) {
						minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
						d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
					}
	
				}]
			};
		parseFlags.dd = parseFlags.d;
		parseFlags.dddd = parseFlags.ddd;
		parseFlags.Do = parseFlags.DD = parseFlags.D;
		parseFlags.mm = parseFlags.m;
		parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
		parseFlags.MM = parseFlags.M;
		parseFlags.ss = parseFlags.s;
		parseFlags.A = parseFlags.a;
	
		shorten(monthNames, monthNamesShort, 3);
		shorten(dayNames, dayNamesShort, 3);
	
		function monthUpdate(arrName) {
			return function (d, v) {
				var index = fecha.i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
				if (~index) {
					d.month = index;
				}
			}
		}
	
		function pad(val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) {
				val = '0' + val;
			}
			return val;
		}
	
		function shorten(arr, newArr, sLen) {
			for (var i = 0, len = arr.length; i < len; i++) {
				newArr.push(arr[i].substr(0, sLen));
			}
		}
	
		function DoFn(D) {
			return D + [ 'th', 'st', 'nd', 'rd' ][ D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10 ];
		}
	
		fecha.i18n = {
			dayNamesShort: dayNamesShort,
			dayNames: dayNames,
			monthNamesShort: monthNamesShort,
			monthNames: monthNames,
			amPm: amPm,
			DoFn: DoFn
		};
	
		// Some common format strings
		fecha.masks = {
			'default': 'ddd MMM DD YYYY HH:mm:ss',
			shortDate: 'M/D/YY',
			mediumDate: 'MMM D, YYYY',
			longDate: 'MMMM D, YYYY',
			fullDate: 'dddd, MMMM D, YYYY',
			shortTime: 'HH:mm',
			mediumTime: 'HH:mm:ss',
			longTime: 'HH:mm:ss.SSS'
		};
	
		/***
		 * Format a date
		 * @method format
		 * @param {Date|string} dateObj
		 * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
		 */
		fecha.format = function (dateObj, mask) {
			// Passing date through Date applies Date.parse, if necessary
			if (typeof dateObj === 'string') {
				dateObj = fecha.parse(dateObj);
			} else if (!dateObj) {
				dateObj = new Date();
			}
			if (isNaN(dateObj)) {
				throw new SyntaxError('invalid date');
			}
	
			mask = fecha.masks[mask] || mask || fecha.masks['default'];
	
			var D = dateObj.getDate(),
				d = dateObj.getDay(),
				M = dateObj.getMonth(),
				y = dateObj.getFullYear(),
				H = dateObj.getHours(),
				m = dateObj.getMinutes(),
				s = dateObj.getSeconds(),
				S = dateObj.getMilliseconds(),
				o = dateObj.getTimezoneOffset(),
				flags = {
					D: D,
					DD: pad(D),
					Do: fecha.i18n.DoFn(D),
					d: d,
					dd: pad(d),
					ddd: fecha.i18n.dayNamesShort[d],
					dddd: fecha.i18n.dayNames[d],
					M: M + 1,
					MM: pad(M + 1),
					MMM: fecha.i18n.monthNamesShort[M],
					MMMM: fecha.i18n.monthNames[M],
					YY: String(y).slice(2),
					YYYY: y,
					h: H % 12 || 12,
					hh: pad(H % 12 || 12),
					H: H,
					HH: pad(H),
					m: m,
					mm: pad(m),
					s: s,
					ss: pad(s),
					S: Math.round(S / 100),
					SS: pad(Math.round(S / 10), 2),
					SSS: pad(S, 3),
					a: H < 12 ? fecha.i18n.amPm[0] : fecha.i18n.amPm[1],
					A: H < 12 ? fecha.i18n.amPm[0].toUpperCase() : fecha.i18n.amPm[1].toUpperCase(),
					ZZ: (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4)
				};
	
			return mask.replace(token, function ($0) {
				return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
			});
		};
	
		/**
		 * Parse a date string into an object, changes - into /
		 * @method parse
		 * @param {string} dateStr Date string
		 * @param {string} format Date parse format
		 * @returns {Date|boolean}
		 */
		fecha.parse = function (dateStr, format) {
			var time, isValid, dateInfo, today, date, info, index;
	
			if (!format) {
				time = Date.parse(dateStr.replace(/\-/g, '/'));
				if (!isNaN(time)) {
					return new Date(time);
				} else {
					return false;
				}
	
			} else {
				format = fecha.masks[format] || format;
	
				isValid = true;
				dateInfo = {};
				format.replace(token, function ($0) {
					if (parseFlags[$0]) {
						info = parseFlags[$0];
						index = dateStr.search(info[0]);
						if (!~index) {
							isValid = false;
						} else {
							dateStr.replace(info[0], function (result) {
								info[1](dateInfo, result);
								dateStr = dateStr.substr(index + result.length);
								return result;
							});
						}
					}
	
					return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
				});
			}
	
			if (!isValid) {
				return false;
			}
	
			today = new Date();
			if (dateInfo.isPm && dateInfo.hour) {
				dateInfo.hour = +dateInfo.hour + 12
			}
	
			if (dateInfo.timezoneOffset) {
				dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
				date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
					dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
			} else {
				date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
					dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
			}
			return date;
		};
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = fecha;
		} else if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return fecha;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			main.fecha = fecha;
		}
	})(this);


/***/ },
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(272),
	    isObject = __webpack_require__(23),
	    isObjectLike = __webpack_require__(47);
	
	/**
	 * The base implementation of `_.isEqual` without support for `this` binding
	 * `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(125),
	    isArrayLike = __webpack_require__(126),
	    isObject = __webpack_require__(23),
	    shimKeys = __webpack_require__(286);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var ButtonGroup = React.createClass({
	  displayName: 'ButtonGroup',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string.isRequired,
	    stacked: React.PropTypes.bool,
	    justify: React.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn-group'
	    };
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	
	    classSet[this.prefixClass('stacked')] = this.props.stacked;
	    classSet[this.prefixClass('justify')] = this.props.justify;
	
	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet) }),
	      this.props.children
	    );
	  }
	});
	
	module.exports = ButtonGroup;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var Icon = __webpack_require__(13);
	
	var Close = React.createClass({
	  displayName: 'Close',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string.isRequired,
	    componentTag: React.PropTypes.node,
	    spin: React.PropTypes.bool,
	    alt: React.PropTypes.bool,
	    icon: React.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'close',
	      type: 'button'
	    };
	  },
	
	  render: function render() {
	    var Component = this.props.componentTag || 'button';
	    var classSet = this.getClassSet();
	    var props = this.props;
	
	    // transfer type
	    if (Component !== 'button') {
	      props.type = undefined;
	    }
	
	    // className am-close-alt am-close-spin
	    classSet[this.prefixClass('alt')] = this.props.alt;
	    classSet[this.prefixClass('spin')] = this.props.spin;
	
	    return React.createElement(
	      Component,
	      _extends({}, props, {
	        className: classNames(classSet, this.props.className),
	        role: 'close' }),
	      this.props.icon ? React.createElement(Icon, { icon: 'times' }) : '×'
	    );
	  }
	});
	
	module.exports = Close;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var Col = React.createClass({
	  displayName: 'Col',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    sm: React.PropTypes.number,
	    md: React.PropTypes.number,
	    lg: React.PropTypes.number,
	    smOffset: React.PropTypes.number,
	    mdOffset: React.PropTypes.number,
	    lgOffset: React.PropTypes.number,
	    smPush: React.PropTypes.number,
	    mdPush: React.PropTypes.number,
	    lgPush: React.PropTypes.number,
	    smPull: React.PropTypes.number,
	    mdPull: React.PropTypes.number,
	    lgPull: React.PropTypes.number,
	    classPrefix: React.PropTypes.string.isRequired,
	    componentTag: React.PropTypes.node.isRequired,
	    end: React.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'u',
	      componentTag: 'div'
	    };
	  },
	
	  render: function render() {
	    var Component = this.props.componentTag;
	    var classSet = {};
	    var props = this.props;
	    var prefixClass = this.prefixClass;
	
	    ['sm', 'md', 'lg'].forEach(function (size) {
	      var prop = size;
	
	      if (props[size]) {
	        classSet[prefixClass(size + '-' + props[prop])] = true;
	      }
	
	      prop = size + 'Offset';
	      if (props[prop] >= 0) {
	        classSet[prefixClass(size + '-offset-') + props[prop]] = true;
	      }
	
	      prop = size + 'Push';
	      if (props[prop] >= 0) {
	        classSet[prefixClass(size + '-push-') + props[prop]] = true;
	      }
	
	      prop = size + 'Pull';
	      if (props[prop] >= 0) {
	        classSet[prefixClass(size + '-pull-') + props[prop]] = true;
	      }
	
	      // `xxResetOrder` prop
	      // - smResetOrder
	      // - mdResetOrder
	      // - lgResetOrder
	      if (props[size + 'ResetOrder']) {
	        classSet[prefixClass(size + '-reset-order')] = true;
	      }
	
	      // `xxCentered` prop
	      // - smCentered
	      // - mdCentered
	      // - lgCentered
	      if (props[size + 'Centered']) {
	        classSet[prefixClass(size + '-centered')] = true;
	      }
	
	      // `xxUnCentered` prop
	      // - smUnCentered
	      // - mdUnCentered
	      // - lgUnCentered
	      if (props[size + 'UnCentered']) {
	        classSet[prefixClass(size + '-uncentered')] = true;
	      }
	    });
	
	    // `end` prop - end column
	    props.end && (classSet[prefixClass('end')] = true);
	
	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet) }),
	      this.props.children
	    );
	  }
	});
	
	module.exports = Col;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var fecha = __webpack_require__(72);
	var ClassNameMixin = __webpack_require__(3);
	var dateUtils = __webpack_require__(219);
	
	var DatePicker = React.createClass({
	  displayName: 'DatePicker',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    onSelect: React.PropTypes.func.isRequired,
	    onClose: React.PropTypes.func,
	    viewMode: React.PropTypes.string,
	    minViewMode: React.PropTypes.string,
	    daysOfWeekDisabled: React.PropTypes.array,
	    format: React.PropTypes.string,
	    date: React.PropTypes.object,
	    weekStart: React.PropTypes.number,
	    minDate: React.PropTypes.string,
	    maxDate: React.PropTypes.string,
	    locale: React.PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker',
	      date: new Date(),
	      daysOfWeekDisabled: [],
	      viewMode: 'days',
	      minViewMode: 'days',
	      format: 'YYYY-MM-DD',
	      displayed: {
	        days: { display: 'block' },
	        months: { display: 'none' },
	        years: { display: 'none' }
	      }
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var displayed;
	
	    switch (this.props.viewMode) {
	      case 'days':
	        displayed = {
	          days: { display: 'block' },
	          months: { display: 'none' },
	          years: { display: 'none' }
	        };
	        break;
	
	      case 'months':
	        displayed = {
	          days: { display: 'none' },
	          months: { display: 'block' },
	          years: { display: 'none' }
	        };
	        break;
	
	      case 'years':
	        displayed = {
	          days: { display: 'none' },
	          months: { display: 'none' },
	          years: { display: 'block' }
	        };
	        break;
	    }
	
	    return {
	      locale: dateUtils.getLocale(this.props.locale),
	      viewDate: this.props.date,
	      selectedDate: this.props.date,
	      displayed: displayed
	    };
	  },
	
	  // DaysPicker props function
	
	  subtractMonth: function subtractMonth() {
	    var viewDate = this.state.viewDate;
	    var newDate = new Date(viewDate.valueOf());
	
	    newDate.setMonth(viewDate.getMonth() - 1);
	    this.setState({
	      viewDate: newDate
	    });
	  },
	
	  addMonth: function addMonth() {
	    var viewDate = this.state.viewDate;
	    var newDate = new Date(viewDate.valueOf());
	
	    newDate.setMonth(viewDate.getMonth() + 1);
	    this.setState({
	      viewDate: newDate
	    });
	  },
	
	  setSelectedDate: function setSelectedDate(event) {
	    if (/disabled/ig.test(event.target.className)) {
	      return;
	    }
	
	    var viewDate = this.state.viewDate;
	
	    if (/new/ig.test(event.target.className)) {
	      viewDate.setMonth(viewDate.getMonth() + 1);
	    } else if (/old/ig.test(event.target.className)) {
	      viewDate.setMonth(viewDate.getMonth() - 1);
	    }
	
	    viewDate.setDate(event.target.innerHTML);
	
	    this.setViewDate(viewDate);
	  },
	
	  setViewDate: function setViewDate(viewDate) {
	    this.setState({
	      viewDate: viewDate,
	      selectedDate: new Date(viewDate.valueOf())
	    }, function () {
	      this.props.onSelect(this.state.selectedDate);
	      this.props.onClose && this.props.onClose();
	    });
	  },
	
	  showMonths: function showMonths() {
	    return this.setState({
	      displayed: {
	        days: { display: 'none' },
	        months: { display: 'block' },
	        years: { display: 'none' }
	      }
	    });
	  },
	
	  // MonthsPicker props function
	
	  subtractYear: function subtractYear() {
	    var viewDate = this.state.viewDate;
	    var newDate = new Date(viewDate.valueOf());
	
	    newDate.setFullYear(viewDate.getFullYear() - 1);
	
	    return this.setState({
	      viewDate: newDate
	    });
	  },
	
	  addYear: function addYear() {
	    var viewDate = this.state.viewDate;
	    var newDate = new Date(viewDate.valueOf());
	
	    newDate.setFullYear(viewDate.getFullYear() + 1);
	    return this.setState({
	      viewDate: newDate
	    });
	  },
	
	  showYears: function showYears() {
	    return this.setState({
	      displayed: {
	        days: { display: 'none' },
	        months: { display: 'none' },
	        years: { display: 'block' }
	      }
	    });
	  },
	
	  setViewMonth: function setViewMonth(event) {
	    var viewDate = this.state.viewDate;
	    var month = event.target.innerHTML;
	    var months = this.state.locale.monthsShort;
	    var i = 0;
	    var len = months.length;
	
	    for (; i < len; i++) {
	      if (month === months[i]) {
	        viewDate.setMonth(i);
	      }
	    }
	
	    if (this.props.minViewMode === 'months') {
	      this.setViewDate(viewDate);
	    }
	
	    this.setState({
	      viewDate: viewDate,
	      displayed: {
	        days: { display: 'block' },
	        months: { display: 'none' },
	        years: { display: 'none' }
	      }
	    });
	  },
	
	  // YearsPicker props function
	
	  setViewYear: function setViewYear(event) {
	    var year = event.target.innerHTML;
	    var viewDate = this.state.viewDate;
	
	    viewDate.setFullYear(year);
	
	    if (this.props.minViewMode === 'years') {
	      this.setViewDate(viewDate);
	    }
	
	    this.setState({
	      viewDate: viewDate,
	      displayed: {
	        days: { display: 'none' },
	        months: { display: 'block' },
	        years: { display: 'none' }
	      }
	    });
	  },
	
	  addDecade: function addDecade() {
	    var viewDate = this.state.viewDate;
	    var newDate = new Date(viewDate.valueOf());
	
	    newDate.setFullYear(viewDate.getFullYear() + 10);
	    this.setState({
	      viewDate: newDate
	    });
	  },
	
	  subtractDecade: function subtractDecade() {
	    var viewDate = this.state.viewDate;
	    var newDate = new Date(viewDate.valueOf());
	
	    newDate.setFullYear(viewDate.getFullYear() - 10);
	
	    this.setState({
	      viewDate: newDate
	    });
	  },
	
	  // render children
	  renderDays: function renderDays() {
	    return React.createElement(DaysPicker, {
	      style: this.state.displayed.days,
	      selectedDate: this.state.selectedDate,
	      viewDate: this.state.viewDate,
	
	      subtractMonth: this.subtractMonth,
	      addMonth: this.addMonth,
	      setSelectedDate: this.setSelectedDate,
	      showMonths: this.showMonths,
	
	      locale: this.state.locale,
	      weekStart: this.props.weekStart,
	      daysOfWeekDisabled: this.props.daysOfWeekDisabled,
	      minDate: this.props.minDate,
	      maxDate: this.props.maxDate
	    });
	  },
	
	  renderMonths: function renderMonths() {
	    return React.createElement(MonthsPicker, {
	      style: this.state.displayed.months,
	      locale: this.state.locale,
	      addYear: this.addYear,
	      subtractYear: this.subtractYear,
	      viewDate: this.state.viewDate,
	      selectedDate: this.state.selectedDate,
	      showYears: this.showYears,
	      setViewMonth: this.setViewMonth });
	  },
	
	  renderYears: function renderYears() {
	    return React.createElement(YearsPicker, {
	      style: this.state.displayed.years,
	      viewDate: this.state.viewDate,
	      selectDate: this.state.selectedDate,
	      setViewYear: this.setViewYear,
	      addDecade: this.addDecade,
	      subtractDecade: this.subtractDecade });
	  },
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: this.prefixClass('body') },
	      this.renderDays(),
	      this.renderMonths(),
	      this.renderYears()
	    );
	  }
	});
	
	var DaysPicker = React.createClass({
	  displayName: 'DaysPicker',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    subtractMonth: React.PropTypes.func.isRequired,
	    addMonth: React.PropTypes.func.isRequired,
	
	    setSelectedDate: React.PropTypes.func.isRequired,
	    selectedDate: React.PropTypes.object.isRequired,
	
	    viewDate: React.PropTypes.object.isRequired,
	    showMonths: React.PropTypes.func.isRequired,
	
	    locale: React.PropTypes.object,
	    weekStart: React.PropTypes.number,
	    daysOfWeekDisabled: React.PropTypes.array,
	    minDate: React.PropTypes.string,
	    maxDate: React.PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker'
	    };
	  },
	
	  renderDays: function renderDays() {
	    var row;
	    var i;
	    var _ref;
	    var _i;
	    var _len;
	    var prevY;
	    var prevM;
	    var classes = {};
	    var html = [];
	    var cells = [];
	    var weekStart = this.props.weekStart || this.props.locale.weekStart;
	
	    var weekEnd = (weekStart + 6) % 7;
	
	    var d = this.props.viewDate;
	    var year = d.getFullYear();
	    var month = d.getMonth();
	    var selectedDate = this.props.selectedDate;
	
	    var currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 0, 0, 0, 0).valueOf();
	
	    var prevMonth = new Date(year, month - 1, 28, 0, 0, 0, 0);
	    var day = dateUtils.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());
	
	    prevMonth.setDate(day);
	    prevMonth.setDate(day - (prevMonth.getDay() - weekStart + 7) % 7);
	
	    var nextMonth = new Date(prevMonth);
	
	    nextMonth.setDate(nextMonth.getDate() + 42);
	    nextMonth = nextMonth.valueOf();
	
	    var minDate = this.props.minDate && fecha.parse(this.props.minDate);
	    var maxDate = this.props.maxDate && fecha.parse(this.props.maxDate);
	
	    while (prevMonth.valueOf() < nextMonth) {
	      classes[this.prefixClass('day')] = true;
	
	      prevY = prevMonth.getFullYear();
	      prevM = prevMonth.getMonth();
	
	      // set className old new
	      if (prevM < month && prevY === year || prevY < year) {
	        classes[this.prefixClass('old')] = true;
	      } else if (prevM > month && prevY === year || prevY > year) {
	        classes[this.prefixClass('new')] = true;
	      }
	
	      // set className active
	      if (prevMonth.valueOf() === currentDate) {
	        classes[this.setClassNamespace('active')] = true;
	      }
	
	      // set className disabled
	      if (minDate && prevMonth.valueOf() < minDate || maxDate && prevMonth.valueOf() > maxDate) {
	        classes[this.setClassNamespace('disabled')] = true;
	      }
	
	      // week disabled
	      if (this.props.daysOfWeekDisabled) {
	        _ref = this.props.daysOfWeekDisabled;
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          i = _ref[_i];
	          if (prevMonth.getDay() === this.props.daysOfWeekDisabled[i]) {
	            classes[this.setClassNamespace('disabled')] = true;
	            break;
	          }
	        }
	      }
	
	      cells.push(React.createElement(
	        'td',
	        {
	          key: prevMonth.getMonth() + '-' + prevMonth.getDate(),
	          className: classNames(classes),
	          onClick: this.props.setSelectedDate },
	        prevMonth.getDate()
	      ));
	
	      // add tr
	      if (prevMonth.getDay() === weekEnd) {
	        row = React.createElement(
	          'tr',
	          { key: prevMonth.getMonth() + '-' + prevMonth.getDate() },
	          cells
	        );
	        html.push(row);
	        cells = [];
	      }
	
	      classes = {};
	      prevMonth.setDate(prevMonth.getDate() + 1);
	    }
	
	    return html;
	  },
	
	  renderWeek: function renderWeek() {
	    var ths = [];
	    var locale = this.props.locale;
	    var weekStart = this.props.weekStart || this.props.locale.weekStart;
	    var weekEnd = weekStart + 7;
	
	    while (weekStart < weekEnd) {
	      ths.push(React.createElement(
	        'th',
	        { key: weekStart, className: this.prefixClass('dow') },
	        locale.daysMin[weekStart++ % 7]
	      ));
	    }
	
	    return React.createElement(
	      'tr',
	      null,
	      ths
	    );
	  },
	
	  render: function render() {
	    var viewDate = this.props.viewDate;
	    var prefixClass = this.prefixClass;
	    var locale = this.props.locale;
	
	    return React.createElement(
	      'div',
	      {
	        className: prefixClass('days'),
	        style: this.props.style },
	      React.createElement(
	        'table',
	        { className: prefixClass('table') },
	        React.createElement(
	          'thead',
	          null,
	          React.createElement(
	            'tr',
	            { className: prefixClass('header') },
	            React.createElement(
	              'th',
	              { className: prefixClass('prev'), onClick: this.props.subtractMonth },
	              React.createElement('i', { className: prefixClass('prev-icon') })
	            ),
	            React.createElement(
	              'th',
	              {
	                className: prefixClass('switch'),
	                colSpan: '5',
	                onClick: this.props.showMonths },
	              React.createElement(
	                'div',
	                { className: this.prefixClass('select') },
	                locale.monthsShort[viewDate.getMonth()],
	                viewDate.getFullYear()
	              )
	            ),
	            React.createElement(
	              'th',
	              { className: prefixClass('next'), onClick: this.props.addMonth },
	              React.createElement('i', { className: prefixClass('next-icon') })
	            )
	          ),
	          this.renderWeek()
	        ),
	        React.createElement(
	          'tbody',
	          null,
	          this.renderDays()
	        )
	      )
	    );
	  }
	});
	
	var MonthsPicker = React.createClass({
	  displayName: 'MonthsPicker',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    locale: React.PropTypes.object,
	    subtractYear: React.PropTypes.func.isRequired,
	    addYear: React.PropTypes.func.isRequired,
	    viewDate: React.PropTypes.object.isRequired,
	    selectedDate: React.PropTypes.object.isRequired,
	    showYears: React.PropTypes.func.isRequired,
	    setViewMonth: React.PropTypes.func.isRequired,
	    minDate: React.PropTypes.string,
	    maxDate: React.PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker'
	    };
	  },
	
	  renderMonths: function renderMonths() {
	    var classes = {};
	    var month = this.props.selectedDate.getMonth();
	    var year = this.props.selectedDate.getFullYear();
	    var i = 0;
	    var months = [];
	    var minDate = this.props.minDate && fecha.parse(this.props.minDate);
	    var maxDate = this.props.maxDate && fecha.parse(this.props.maxDate);
	    var prevMonth = new Date(year, month);
	
	    // TODO: minDate maxDate months
	    while (i < 12) {
	      classes[this.prefixClass('month')] = true;
	
	      if (this.props.viewDate.getFullYear() === this.props.selectedDate.getFullYear() && i === month) {
	        classes[this.setClassNamespace('active')] = true;
	      }
	
	      // set className disabled
	      if (minDate && prevMonth.valueOf() < minDate || maxDate && prevMonth.valueOf() > maxDate) {
	        classes[this.setClassNamespace('disabled')] = true;
	      }
	
	      months.push(React.createElement(
	        'span',
	        {
	          className: classNames(classes),
	          onClick: this.props.setViewMonth,
	          key: i },
	        this.props.locale.monthsShort[i]
	      ));
	
	      classes = {};
	      i++;
	    }
	
	    return months;
	  },
	
	  render: function render() {
	    return React.createElement(SubPicker, {
	      displayName: 'months',
	      style: this.props.style,
	      subtract: this.props.subtractYear,
	      add: this.props.addYear,
	      showFunc: this.props.showYears,
	      showText: this.props.viewDate.getFullYear(),
	      body: this.renderMonths() });
	  }
	});
	
	var YearsPicker = React.createClass({
	  displayName: 'YearsPicker',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    viewDate: React.PropTypes.object.isRequired,
	    selectDate: React.PropTypes.object.isRequired,
	    subtractDecade: React.PropTypes.func.isRequired,
	    addDecade: React.PropTypes.func.isRequired,
	    setViewYear: React.PropTypes.func.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker'
	    };
	  },
	
	  renderYears: function renderYears() {
	    var classes = {};
	    var years = [];
	    var i = -1;
	    var year = parseInt(this.props.viewDate.getFullYear() / 10, 10) * 10;
	
	    year--;
	
	    while (i < 11) {
	      classes[this.prefixClass('year')] = true;
	
	      if (i === -1 || i === 10) {
	        classes[this.prefixClass('old')] = true;
	      }
	
	      if (this.props.selectDate.getFullYear() === year) {
	        classes[this.setClassNamespace('active')] = true;
	      }
	
	      years.push(React.createElement(
	        'span',
	        {
	          className: classNames(classes),
	          onClick: this.props.setViewYear,
	          key: year },
	        year
	      ));
	
	      classes = {};
	      year++;
	      i++;
	    }
	
	    return years;
	  },
	
	  render: function render() {
	    var year = parseInt(this.props.viewDate.getFullYear() / 10, 10) * 10;
	    var addYear = year + 9;
	    var showYear = year + '-' + addYear;
	
	    return React.createElement(SubPicker, {
	      displayName: 'years',
	      style: this.props.style,
	      subtract: this.props.subtractDecade,
	      add: this.props.addDecade,
	      showText: showYear,
	      body: this.renderYears() });
	  }
	});
	
	var SubPicker = React.createClass({
	  displayName: 'SubPicker',
	
	  mixins: [ClassNameMixin],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker'
	    };
	  },
	
	  render: function render() {
	    var prefixClass = this.prefixClass;
	
	    return React.createElement(
	      'div',
	      {
	        className: prefixClass(this.props.displayName),
	        style: this.props.style },
	      React.createElement(
	        'table',
	        { className: prefixClass('table') },
	        React.createElement(
	          'thead',
	          null,
	          React.createElement(
	            'tr',
	            { className: prefixClass('header') },
	            React.createElement(
	              'th',
	              { className: prefixClass('prev'), onClick: this.props.subtract },
	              React.createElement('i', { className: prefixClass('prev-icon') })
	            ),
	            React.createElement(
	              'th',
	              {
	                className: prefixClass('switch'),
	                colSpan: '5',
	                onClick: this.props.showFunc },
	              React.createElement(
	                'div',
	                { className: this.prefixClass('select') },
	                this.props.showText
	              )
	            ),
	            React.createElement(
	              'th',
	              { className: prefixClass('next'), onClick: this.props.add },
	              React.createElement('i', { className: prefixClass('next-icon') })
	            )
	          )
	        ),
	        React.createElement(
	          'tbody',
	          null,
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'td',
	              { colSpan: '7' },
	              this.props.body
	            )
	          )
	        )
	      )
	    );
	  }
	});
	
	module.exports = DatePicker;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var DatePicker = __webpack_require__(102);
	var TimePicker = __webpack_require__(108);
	var fecha = __webpack_require__(72);
	var Icon = __webpack_require__(13);
	
	var DateTimePicker = React.createClass({
	  displayName: 'DateTimePicker',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    showTimePicker: React.PropTypes.bool,
	    showDatePicker: React.PropTypes.bool,
	    caretDisplayed: React.PropTypes.bool,
	    amStyle: React.PropTypes.oneOfType(['success', 'danger', 'warning']),
	    viewMode: React.PropTypes.string,
	    minViewMode: React.PropTypes.string,
	    onSelect: React.PropTypes.func.isRequired,
	    onClose: React.PropTypes.func,
	    daysOfWeekDisabled: React.PropTypes.array,
	    format: React.PropTypes.string,
	    dateTime: React.PropTypes.string,
	    locale: React.PropTypes.string,
	    weekStart: React.PropTypes.number,
	    minDate: React.PropTypes.string,
	    maxDate: React.PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker',
	      dateTime: '',
	      format: 'YYYY-MM-DD HH:mm',
	      showTimePicker: true,
	      showDatePicker: true,
	      caretDisplayed: true
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var showToggle;
	    var showTimePicker;
	
	    if (this.props.showTimePicker && this.props.showDatePicker) {
	      showToggle = true;
	      showTimePicker = false;
	    }
	
	    if (!showToggle && !this.props.showDatePicker) {
	      showTimePicker = true;
	    }
	
	    return {
	      showTimePicker: showTimePicker,
	      showDatePicker: this.props.showDatePicker,
	      caretDisplayed: this.props.caretDisplayed,
	      showToggle: showToggle,
	      date: fecha.parse(this.props.dateTime, this.props.format),
	      toggleDisplay: {
	        toggleTime: { display: 'block' },
	        toggleDate: { display: 'none' }
	      }
	    };
	  },
	
	  handleToggleTime: function handleToggleTime() {
	    this.setState({
	      showDatePicker: false,
	      showTimePicker: true,
	      toggleDisplay: {
	        toggleTime: { display: 'none' },
	        toggleDate: { display: 'block' }
	      }
	    });
	  },
	
	  handleToggleDate: function handleToggleDate() {
	    this.setState({
	      showDatePicker: true,
	      showTimePicker: false,
	      toggleDisplay: {
	        toggleTime: { display: 'block' },
	        toggleDate: { display: 'none' }
	      }
	    });
	  },
	
	  handleSelect: function handleSelect(date) {
	    this.setState({
	      date: date
	    });
	    this.props.onSelect(fecha.format(date, this.props.format));
	  },
	
	  renderToggleTime: function renderToggleTime() {
	    if (this.state.showToggle) {
	      return React.createElement(
	        'div',
	        { style: this.state.toggleDisplay.toggleTime, className: this.prefixClass('toggle'), onClick: this.handleToggleTime },
	        React.createElement(Icon, { icon: 'clock-o' })
	      );
	    }
	  },
	
	  renderToggleDate: function renderToggleDate() {
	    if (this.state.showToggle) {
	      return React.createElement(
	        'div',
	        { style: this.state.toggleDisplay.toggleDate, className: this.prefixClass('toggle'), onClick: this.handleToggleDate },
	        React.createElement(Icon, { icon: 'calendar' })
	      );
	    }
	  },
	
	  renderDatePicker: function renderDatePicker() {
	    if (this.state.showDatePicker) {
	      return React.createElement(DatePicker, {
	        onSelect: this.handleSelect,
	        onClose: this.props.onClose,
	        weekStart: this.props.weekStart,
	        viewMode: this.props.viewMode,
	        minViewMode: this.props.minViewMode,
	        daysOfWeekDisabled: this.props.daysOfWeekDisabled,
	        format: this.props.format,
	        date: this.state.date,
	        locale: this.props.locale,
	        minDate: this.props.minDate,
	        maxDate: this.props.maxDate });
	    }
	  },
	
	  renderTimePicker: function renderTimePicker() {
	    if (this.state.showTimePicker) {
	      return React.createElement(TimePicker, {
	        onSelect: this.handleSelect,
	        date: this.state.date,
	        format: this.props.format });
	    }
	  },
	
	  renderCaret: function renderCaret() {
	    if (this.state.caretDisplayed) {
	      return React.createElement('div', { className: this.prefixClass('caret') });
	    }
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	
	    this.props.amStyle && (classSet[this.prefixClass(this.props.amStyle)] = true);
	
	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        className: classNames(classSet, this.props.className),
	        style: this.props.style }),
	      this.renderCaret(),
	      React.createElement(
	        'div',
	        { className: this.prefixClass('date') },
	        this.renderDatePicker()
	      ),
	      React.createElement(
	        'div',
	        { className: this.prefixClass('time') },
	        this.renderTimePicker()
	      ),
	      this.renderToggleTime(),
	      this.renderToggleDate()
	    );
	  }
	});
	
	module.exports = DateTimePicker;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var constants = __webpack_require__(26);
	var Button = __webpack_require__(33);
	var Icon = __webpack_require__(13);
	var Events = __webpack_require__(21);
	var isNodeInTree = __webpack_require__(110);
	
	var Dropdown = React.createClass({
	  displayName: 'Dropdown',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    title: React.PropTypes.node.isRequired,
	    dropup: React.PropTypes.bool,
	    navItem: React.PropTypes.bool,
	    btnStyle: React.PropTypes.string,
	    btnInlineStyle: React.PropTypes.object,
	    contentInlineStyle: React.PropTypes.object,
	    contentTag: React.PropTypes.node,
	    toggleClassName: React.PropTypes.string,
	    caretClassName: React.PropTypes.string,
	    contentClassName: React.PropTypes.string,
	    onOpen: React.PropTypes.func, // open callback
	    onClose: React.PropTypes.func // close callback
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'dropdown',
	      contentTag: 'ul'
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      open: false
	    };
	  },
	
	  componentWillMount: function componentWillMount() {
	    this.unbindOuterHandlers();
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.unbindOuterHandlers();
	  },
	
	  setDropdownState: function setDropdownState(state, callback) {
	    if (state) {
	      this.bindOuterHandlers();
	    } else {
	      this.unbindOuterHandlers();
	    }
	
	    this.setState({
	      open: state
	    }, function () {
	      callback && callback();
	
	      state && this.props.onOpen && this.props.onOpen();
	      !state && this.props.onClose && this.props.onClose();
	    });
	  },
	
	  // close dropdown on `esc` keyup
	  handleKeyup: function handleKeyup(e) {
	    e.keyCode === 27 && this.setDropdownState(false);
	  },
	
	  // close dropdown when click outer dropdown
	  handleOuterClick: function handleOuterClick(e) {
	    if (isNodeInTree(e.target, ReactDOM.findDOMNode(this))) {
	      return false;
	    }
	
	    this.setDropdownState(false);
	  },
	
	  bindOuterHandlers: function bindOuterHandlers() {
	    Events.on(document, 'click', this.handleOuterClick);
	    Events.on(document, 'keyup', this.handleKeyup);
	  },
	
	  unbindOuterHandlers: function unbindOuterHandlers() {
	    Events.off(document, 'click', this.handleOuterClick);
	    Events.off(document, 'keyup', this.handleKeyup);
	  },
	
	  handleDropdownClick: function handleDropdownClick(e) {
	    e.preventDefault();
	
	    this.setDropdownState(!this.state.open);
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	    var Component = this.props.navItem ? 'li' : 'div';
	    var btnClassPrefix = this.props.navItem ? '' : 'btn';
	    var btnComponentTag = this.props.navItem ? 'a' : null;
	    var caret = React.createElement(Icon, {
	      className: this.props.caretClassName,
	      icon: 'caret-' + (this.props.dropup ? 'up' : 'down') });
	    var animation = this.state.open ? this.setClassNamespace('animation-slide-top-fixed') : this.setClassNamespace('dropdown-animation');
	    var ContentTag = this.props.contentTag;
	
	    classSet[constants.CLASSES.active] = this.state.open;
	    classSet[this.prefixClass('up')] = this.props.dropup;
	
	    return React.createElement(
	      Component,
	      {
	        btnStyle: null,
	        className: classNames(this.props.className, classSet) },
	      React.createElement(
	        Button,
	        {
	          onClick: this.handleDropdownClick,
	          amStyle: this.props.btnStyle,
	          style: this.props.btnInlineStyle,
	          className: classNames(this.prefixClass('toggle'), this.props.toggleClassName),
	          classPrefix: btnClassPrefix,
	          componentTag: btnComponentTag,
	          ref: 'dropdownToggle' },
	        this.props.title,
	        ' ',
	        caret
	      ),
	      React.createElement(
	        ContentTag,
	        {
	          ref: 'dropdownContent',
	          style: this.props.contentInlineStyle,
	          className: classNames(this.prefixClass('content'), animation, this.props.contentClassName) },
	        this.props.children
	      )
	    );
	  }
	});
	
	Dropdown.Item = React.createClass({
	  displayName: 'Item',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    href: React.PropTypes.string,
	    target: React.PropTypes.string,
	    title: React.PropTypes.string,
	    header: React.PropTypes.bool,
	    divider: React.PropTypes.bool
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	    var children = null;
	
	    classSet[this.setClassNamespace('dropdown-header')] = this.props.header;
	
	    if (this.props.header) {
	      children = this.props.children;
	    } else if (!this.props.divider) {
	      children = React.createElement(
	        'a',
	        {
	          onClick: this.handleClick,
	          href: this.props.href,
	          target: this.props.target,
	          title: this.props.title },
	        this.props.children
	      );
	    }
	
	    return React.createElement(
	      'li',
	      _extends({}, this.props, {
	        title: null,
	        href: null,
	        className: classNames(this.props.className, classSet) }),
	      children
	    );
	  }
	});
	
	module.exports = Dropdown;
	
	/*
	* TODO:
	*   1. 关闭动画
	*   2. 位置检测/宽度适应
	* */

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var FormGroup = React.createClass({
	  displayName: 'FormGroup',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    validation: React.PropTypes.string,
	    amSize: React.PropTypes.oneOf(['sm', 'lg']),
	    hasFeedback: React.PropTypes.bool
	  },
	
	  render: function render() {
	    var classSet = {};
	
	    classSet[this.setClassNamespace('form-group')] = true;
	    this.props.validation && (classSet[this.setClassNamespace('form-' + this.props.validation)] = true);
	    classSet[this.setClassNamespace('form-feedback')] = this.props.hasFeedback;
	    classSet[this.setClassNamespace('form-icon')] = this.props.hasFeedback;
	
	    if (this.props.amSize) {
	      classSet[this.setClassNamespace('form-group-' + this.props.amSize)] = true;
	    }
	
	    return React.createElement(
	      'div',
	      { className: classNames(classSet, this.props.className) },
	      this.props.children
	    );
	  }
	});
	
	module.exports = FormGroup;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var Nav = React.createClass({
	  displayName: 'Nav',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    justify: React.PropTypes.bool,
	    pills: React.PropTypes.bool,
	    tabs: React.PropTypes.bool,
	    componentTag: React.PropTypes.node.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'nav',
	      componentTag: 'ul'
	    };
	  },
	
	  render: function render() {
	    var classes = this.getClassSet();
	    var Component = this.props.componentTag;
	
	    // set classes
	    classes[this.prefixClass('pills')] = this.props.pills || this.props.topbar;
	    classes[this.prefixClass('tabs')] = this.props.tabs;
	    classes[this.prefixClass('justify')] = this.props.justify;
	
	    // topbar class
	    classes[this.setClassNamespace('topbar-nav')] = this.props.topbar;
	
	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(classes, this.props.className) }),
	      this.props.children
	    );
	  }
	});
	
	module.exports = Nav;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var NavItem = React.createClass({
	  displayName: 'NavItem',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    active: React.PropTypes.bool,
	    disabled: React.PropTypes.bool,
	    header: React.PropTypes.bool,
	    divider: React.PropTypes.bool,
	    href: React.PropTypes.any,
	    componentTag: React.PropTypes.node.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'nav',
	      componentTag: 'li'
	    };
	  },
	
	  render: function render() {
	    var classes = this.getClassSet();
	    var props = this.props;
	    var Component = props.componentTag;
	
	    // del am-nav
	    classes[this.setClassNamespace(props.classPrefix)] = false;
	
	    // set classes
	    classes[this.prefixClass('header')] = props.header;
	    classes[this.prefixClass('divider')] = props.divider;
	
	    if (props.href) {
	      return this.renderAnchor(classes);
	    }
	
	    return React.createElement(
	      Component,
	      _extends({}, props, {
	        className: classNames(classes, props.className) }),
	      this.props.children
	    );
	  },
	
	  renderAnchor: function renderAnchor(classes) {
	    var Component = this.props.componentTag;
	
	    var linkProps = {
	      href: this.props.href,
	      title: this.props.tilte,
	      target: this.props.target
	    };
	
	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(classes, this.props.className) }),
	      React.createElement(
	        'a',
	        linkProps,
	        this.props.children
	      )
	    );
	  }
	});
	
	module.exports = NavItem;
	
	// TODO: DropDown Tab 处理
	//       disabled 没有禁止链接跳转

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var TimePicker = React.createClass({
	  displayName: 'TimePicker',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    onSelect: React.PropTypes.func.isRequired,
	    date: React.PropTypes.object,
	    format: React.PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker',
	      format: 'HH:mm'
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      viewDate: this.props.date,
	      selectedDate: this.props.date,
	      displayed: {
	        times: { display: 'block' },
	        minutes: { display: 'none' },
	        hours: { display: 'none' }
	      }
	    };
	  },
	
	  // Minutes
	  addMinute: function addMinute() {
	    var viewDate = this.state.viewDate;
	
	    viewDate.setMinutes(viewDate.getMinutes() + 1);
	
	    this.setTime(viewDate);
	  },
	
	  subtractMinute: function subtractMinute() {
	    var viewDate = this.state.viewDate;
	
	    viewDate.setMinutes(viewDate.getMinutes() - 1);
	
	    this.setTime(viewDate);
	  },
	
	  setTime: function setTime(viewDate) {
	    this.setState({
	      viewDate: viewDate,
	      selectedDate: new Date(viewDate.valueOf())
	    }, function () {
	      this.props.onSelect(this.state.selectedDate);
	    });
	  },
	
	  // set Minutes
	  setSelectedMinute: function setSelectedMinute(event) {
	    var viewDate = this.state.viewDate;
	    var minute = parseInt(event.target.innerHTML.substr(3));
	
	    viewDate.setMinutes(minute);
	    this.setTime(viewDate);
	
	    this.setState({
	      displayed: {
	        times: { display: 'block' },
	        minutes: { display: 'none' },
	        hours: { display: 'none' }
	      }
	    });
	  },
	
	  showMinutes: function showMinutes() {
	    this.setState({
	      displayed: {
	        times: { display: 'none' },
	        minutes: { display: 'block' },
	        hours: { display: 'none' }
	      }
	    });
	  },
	
	  // Hours
	  showHours: function showHours() {
	    this.setState({
	      displayed: {
	        times: { display: 'none' },
	        minutes: { display: 'none' },
	        hours: { display: 'block' }
	      }
	    });
	  },
	
	  setSelectedHour: function setSelectedHour(event) {
	    var viewDate = this.state.viewDate;
	    var hour = parseInt(event.target.innerHTML);
	
	    viewDate.setHours(hour);
	    this.setTime(viewDate);
	
	    this.setState({
	      displayed: {
	        times: { display: 'block' },
	        minutes: { display: 'none' },
	        hours: { display: 'none' }
	      }
	    });
	  },
	
	  addHour: function addHour() {
	    var viewDate = this.state.viewDate;
	
	    viewDate.setHours(viewDate.getHours() + 1);
	
	    this.setTime(viewDate);
	  },
	
	  subtractHour: function subtractHour() {
	    var viewDate = this.state.viewDate;
	
	    viewDate.setHours(viewDate.getHours() - 1);
	
	    this.setTime(viewDate);
	  },
	
	  showTimeText: function showTimeText() {
	    var hour = this.state.viewDate.getHours();
	    var minute = this.state.viewDate.getMinutes();
	
	    if (minute < 10) {
	      minute = '0' + minute;
	    }
	
	    if (hour < 10) {
	      hour = '0' + hour;
	    }
	
	    return {
	      hour: hour,
	      minute: minute
	    };
	  },
	
	  renderHours: function renderHours() {
	    var time = this.showTimeText().hour + ':' + this.showTimeText().minute;
	
	    return React.createElement(HoursPicker, {
	      style: this.state.displayed.hours,
	      setSelectedHour: this.setSelectedHour,
	      selectedDate: this.state.selectedDate,
	      addHour: this.addHour,
	      subtractHour: this.subtractHour,
	      showTime: time });
	  },
	
	  renderMinutes: function renderMinutes() {
	    var time = this.showTimeText().hour + ':' + this.showTimeText().minute;
	
	    return React.createElement(MinutesPicker, {
	      style: this.state.displayed.minutes,
	      setSelectedMinute: this.setSelectedMinute,
	      selectedDate: this.state.selectedDate,
	      addMinute: this.addMinute,
	      subtractMinute: this.subtractMinute,
	      showTime: time });
	  },
	
	  render: function render() {
	    var time = this.showTimeText();
	
	    var content = React.createElement(
	      'div',
	      { className: this.prefixClass('time-box') },
	      React.createElement(
	        'strong',
	        { onClick: this.showHours },
	        time.hour
	      ),
	      React.createElement(
	        'em',
	        null,
	        ':'
	      ),
	      React.createElement(
	        'strong',
	        { onClick: this.showMinutes },
	        time.minute
	      )
	    );
	
	    return React.createElement(
	      'div',
	      { className: this.prefixClass('body') },
	      React.createElement(SubPicker, {
	        style: this.state.displayed.times,
	        displayName: 'time-wrapper',
	        body: content,
	        add: this.addMinute,
	        subtract: this.subtractMinute,
	        showFunc: this.props.showDate,
	        showText: 'today' }),
	      this.renderHours(),
	      this.renderMinutes()
	    );
	  }
	});
	
	var HoursPicker = React.createClass({
	  displayName: 'HoursPicker',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    setSelectedHour: React.PropTypes.func.isRequired,
	    selectedDate: React.PropTypes.object.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker'
	    };
	  },
	
	  renderHour: function renderHour() {
	    var classes;
	    var hour = this.props.selectedDate.getHours();
	    var i = 0;
	    var hours = [];
	
	    while (i < 24) {
	      classes = {};
	      classes[this.prefixClass('hour')] = true;
	
	      if (i === hour) {
	        classes[this.setClassNamespace('active')] = true;
	      }
	
	      hours.push(React.createElement(
	        'span',
	        {
	          className: classNames(classes),
	          onClick: this.props.setSelectedHour,
	          key: i },
	        i < 10 ? '0' + i + ':00' : i + ':00'
	      ));
	
	      i++;
	    }
	
	    return hours;
	  },
	
	  render: function render() {
	    return React.createElement(SubPicker, {
	      displayName: 'hours',
	      style: this.props.style,
	      subtract: this.props.subtractHour,
	      add: this.props.addHour,
	      showText: this.props.showTime,
	      body: this.renderHour() });
	  }
	});
	
	var MinutesPicker = React.createClass({
	  displayName: 'MinutesPicker',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    setSelectedMinute: React.PropTypes.func.isRequired,
	    selectedDate: React.PropTypes.object.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker'
	    };
	  },
	
	  renderMinute: function renderMinute() {
	    var classes;
	    var minute = this.props.selectedDate.getMinutes();
	    var hour = this.props.selectedDate.getHours();
	    var i = 0;
	    var minutes = [];
	
	    while (i < 60) {
	      classes = {};
	      classes[this.prefixClass('minute')] = true;
	
	      if (i === minute) {
	        classes[this.setClassNamespace('active')] = true;
	      }
	
	      if (i % 5 === 0) {
	        minutes.push(React.createElement(
	          'span',
	          {
	            className: classNames(classes),
	            onClick: this.props.setSelectedMinute,
	            key: i
	          },
	          i < 10 ? hour + ':0' + i : hour + ':' + i
	        ));
	      }
	
	      i++;
	    }
	
	    return minutes;
	  },
	
	  render: function render() {
	    return React.createElement(SubPicker, {
	      displayName: 'minutes',
	      style: this.props.style,
	      subtract: this.props.subtractMinute,
	      add: this.props.addMinute,
	      showText: this.props.showTime,
	      body: this.renderMinute() });
	  }
	});
	
	var SubPicker = React.createClass({
	  displayName: 'SubPicker',
	
	  mixins: [ClassNameMixin],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'datepicker'
	    };
	  },
	
	  render: function render() {
	    var prefixClass = this.prefixClass;
	
	    return React.createElement(
	      'div',
	      {
	        className: prefixClass(this.props.displayName),
	        style: this.props.style },
	      React.createElement(
	        'table',
	        { className: prefixClass('table') },
	        React.createElement(
	          'thead',
	          null,
	          React.createElement(
	            'tr',
	            { className: prefixClass('header') },
	            React.createElement(
	              'th',
	              { className: prefixClass('prev'), onClick: this.props.subtract },
	              React.createElement('i', { className: prefixClass('prev-icon') })
	            ),
	            React.createElement(
	              'th',
	              {
	                className: prefixClass('switch'),
	                colSpan: '5',
	                onClick: this.props.showFunc
	              },
	              React.createElement(
	                'div',
	                { className: this.prefixClass('select') },
	                this.props.showText
	              )
	            ),
	            React.createElement(
	              'th',
	              { className: prefixClass('next'), onClick: this.props.add },
	              React.createElement('i', { className: prefixClass('next-icon') })
	            )
	          )
	        ),
	        React.createElement(
	          'tbody',
	          null,
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'td',
	              { colSpan: '7' },
	              this.props.body
	            )
	          )
	        )
	      )
	    );
	  }
	});
	
	module.exports = TimePicker;

/***/ },
/* 109 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * isInViewport
	 *
	 * @desc determine if any part of the element is visible in the viewport
	 * @reference https://github.com/Josh-Miller/isInViewport
	 * @param {HTMLElement} element
	 * @returns {boolean}
	 */
	
	function isInViewport(element) {
	  var top = element.offsetTop;
	  var left = element.offsetLeft;
	  var width = element.offsetWidth;
	  var height = element.offsetHeight;
	
	  while (element.offsetParent) {
	    element = element.offsetParent;
	    top += element.offsetTop;
	    left += element.offsetLeft;
	  }
	
	  return top < window.pageYOffset + window.innerHeight && left < window.pageXOffset + window.innerWidth && top + height > window.pageYOffset && left + width > window.pageXOffset;
	}
	
	module.exports = isInViewport;

/***/ },
/* 110 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (node, tree) {
	  while (node) {
	    if (node === tree) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getArticle = getArticle;
	exports.getAllArticles = getAllArticles;
	exports.default = articles;
	
	var _actionTyeps = __webpack_require__(34);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function getArticle(state, id) {
	
	    return state.entities.articles[id];
	}
	
	function getAllArticles(state) {
	
	    var ids = state.result.articles || [];
	    return ids.map(function (id) {
	        return getArticle(state, id);
	    });
	}
	
	function articles() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _actionTyeps.RECEIVE_ARTICLES:
	            return [].concat(_toConsumableArray(state), _toConsumableArray(action.articles));
	        default:
	            return state;
	    }
	}

/***/ },
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(28);
	
	/**
	 * The base implementation of `get` without support for string paths
	 * and default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path of the property to get.
	 * @param {string} [pathKey] The key representation of path.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path, pathKey) {
	  if (object == null) {
	    return;
	  }
	  if (pathKey !== undefined && pathKey in toObject(object)) {
	    path = [pathKey];
	  }
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 123 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(132);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(289);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(284),
	    isLength = __webpack_require__(46);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 127 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(36),
	    toObject = __webpack_require__(28);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	    return true;
	  }
	  if (isArray(value)) {
	    return false;
	  }
	  var result = !reIsDeepProp.test(value);
	  return result || (object != null && value in toObject(object));
	}
	
	module.exports = isKey;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(278),
	    isArray = __webpack_require__(36);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `value` to property path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Array} Returns the property path array.
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return value;
	  }
	  var result = [];
	  baseToString(value).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}
	
	module.exports = toPath;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(126),
	    isObjectLike = __webpack_require__(47);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 132 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.arrayOf = arrayOf;
	exports.valuesOf = valuesOf;
	exports.normalize = normalize;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _EntitySchema = __webpack_require__(295);
	
	var _EntitySchema2 = _interopRequireDefault(_EntitySchema);
	
	var _IterableSchema = __webpack_require__(296);
	
	var _IterableSchema2 = _interopRequireDefault(_IterableSchema);
	
	var _lodashLangIsObject = __webpack_require__(23);
	
	var _lodashLangIsObject2 = _interopRequireDefault(_lodashLangIsObject);
	
	var _lodashLangIsEqual = __webpack_require__(287);
	
	var _lodashLangIsEqual2 = _interopRequireDefault(_lodashLangIsEqual);
	
	var _lodashObjectMapValues = __webpack_require__(292);
	
	var _lodashObjectMapValues2 = _interopRequireDefault(_lodashObjectMapValues);
	
	function defaultAssignEntity(normalized, key, entity) {
	  normalized[key] = entity;
	}
	
	function visitObject(obj, schema, bag, options) {
	  var _options$assignEntity = options.assignEntity;
	  var assignEntity = _options$assignEntity === undefined ? defaultAssignEntity : _options$assignEntity;
	
	  var normalized = {};
	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      var entity = visit(obj[key], schema[key], bag, options);
	      assignEntity.call(null, normalized, key, entity);
	    }
	  }
	  return normalized;
	}
	
	function defaultMapper(iterableSchema, itemSchema, bag, options) {
	  return function (obj) {
	    return visit(obj, itemSchema, bag, options);
	  };
	}
	
	function polymorphicMapper(iterableSchema, itemSchema, bag, options) {
	  return function (obj) {
	    var schemaKey = iterableSchema.getSchemaKey(obj);
	    var result = visit(obj, itemSchema[schemaKey], bag, options);
	    return { id: result, schema: schemaKey };
	  };
	}
	
	function visitIterable(obj, iterableSchema, bag, options) {
	  var isPolymorphicSchema = iterableSchema.isPolymorphicSchema();
	  var itemSchema = iterableSchema.getItemSchema();
	  var itemMapper = isPolymorphicSchema ? polymorphicMapper : defaultMapper;
	  var curriedItemMapper = itemMapper(iterableSchema, itemSchema, bag, options);
	
	  if (Array.isArray(obj)) {
	    return obj.map(curriedItemMapper);
	  } else {
	    return _lodashObjectMapValues2['default'](obj, curriedItemMapper);
	  }
	}
	
	function defaultMergeIntoEntity(entityA, entityB, entityKey) {
	  for (var key in entityB) {
	    if (!entityB.hasOwnProperty(key)) {
	      continue;
	    }
	
	    if (!entityA.hasOwnProperty(key) || _lodashLangIsEqual2['default'](entityA[key], entityB[key])) {
	      entityA[key] = entityB[key];
	      continue;
	    }
	
	    console.warn('When merging two ' + entityKey + ', found unequal data in their "' + key + '" values. Using the earlier value.', entityA[key], entityB[key]);
	  }
	}
	
	function visitEntity(entity, entitySchema, bag, options) {
	  var _options$mergeIntoEntity = options.mergeIntoEntity;
	  var mergeIntoEntity = _options$mergeIntoEntity === undefined ? defaultMergeIntoEntity : _options$mergeIntoEntity;
	
	  var entityKey = entitySchema.getKey();
	  var id = entitySchema.getId(entity);
	
	  if (!bag.hasOwnProperty(entityKey)) {
	    bag[entityKey] = {};
	  }
	
	  if (!bag[entityKey].hasOwnProperty(id)) {
	    bag[entityKey][id] = {};
	  }
	
	  var stored = bag[entityKey][id];
	  var normalized = visitObject(entity, entitySchema, bag, options);
	  mergeIntoEntity(stored, normalized, entityKey);
	
	  return id;
	}
	
	function visit(obj, schema, bag, options) {
	  if (!_lodashLangIsObject2['default'](obj) || !_lodashLangIsObject2['default'](schema)) {
	    return obj;
	  }
	
	  if (schema instanceof _EntitySchema2['default']) {
	    return visitEntity(obj, schema, bag, options);
	  } else if (schema instanceof _IterableSchema2['default']) {
	    return visitIterable(obj, schema, bag, options);
	  } else {
	    return visitObject(obj, schema, bag, options);
	  }
	}
	
	function arrayOf(schema, options) {
	  return new _IterableSchema2['default'](schema, options);
	}
	
	function valuesOf(schema, options) {
	  return new _IterableSchema2['default'](schema, options);
	}
	
	exports.Schema = _EntitySchema2['default'];
	
	function normalize(obj, schema) {
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  if (!_lodashLangIsObject2['default'](obj) && !Array.isArray(obj)) {
	    throw new Error('Normalize accepts an object or an array as its input.');
	  }
	
	  if (!_lodashLangIsObject2['default'](schema) || Array.isArray(schema)) {
	    throw new Error('Normalize accepts an object for schema.');
	  }
	
	  var bag = {};
	  var result = visit(obj, schema, bag, options);
	
	  return {
	    entities: bag,
	    result: result
	  };
	}

/***/ },
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	
	if (!React) {
	  throw new Error('AMUIReact requires React.');
	}
	
	module.exports = {
	  VERSION: '1.0.0-beta2',
	
	  // layout
	  Grid: __webpack_require__(189),
	  Col: __webpack_require__(101),
	  Container: __webpack_require__(181),
	  AvgGrid: __webpack_require__(39),
	
	  // elements
	  Button: __webpack_require__(33),
	  ButtonToolbar: __webpack_require__(179),
	  ButtonCheck: __webpack_require__(178),
	  ButtonGroup: __webpack_require__(99),
	
	  // form related
	  Form: __webpack_require__(185),
	  FormGroup: __webpack_require__(105),
	  FormFile: __webpack_require__(186),
	  Input: __webpack_require__(40),
	  UCheck: __webpack_require__(217),
	
	  Image: __webpack_require__(191),
	  Thumbnail: __webpack_require__(213),
	  Thumbnails: __webpack_require__(214),
	  Table: __webpack_require__(211),
	  // Code: require('./Code'),
	
	  // Navs
	  Nav: __webpack_require__(106),
	  NavItem: __webpack_require__(107),
	  Breadcrumb: __webpack_require__(177),
	  Pagination: __webpack_require__(200),
	  Topbar: __webpack_require__(216),
	  Tabs: __webpack_require__(212),
	  CollapsibleNav: __webpack_require__(180),
	
	  Article: __webpack_require__(175),
	  Badge: __webpack_require__(176),
	  Close: __webpack_require__(100),
	  Icon: __webpack_require__(13),
	  List: __webpack_require__(192),
	  ListItem: __webpack_require__(193),
	  Panel: __webpack_require__(201),
	  PanelGroup: __webpack_require__(202),
	  Progress: __webpack_require__(205),
	
	  Alert: __webpack_require__(174),
	  Date: __webpack_require__(102),
	  DateTimeInput: __webpack_require__(182),
	  DateTimePicker: __webpack_require__(103),
	  TimePicker: __webpack_require__(108),
	  Dropdown: __webpack_require__(104),
	  Modal: __webpack_require__(196),
	  ModalTrigger: __webpack_require__(197),
	  Popover: __webpack_require__(203),
	  PopoverTrigger: __webpack_require__(204),
	  NProgress: __webpack_require__(198),
	  ScrollSpy: __webpack_require__(206),
	  ScrollSpyNav: __webpack_require__(207),
	  Selected: __webpack_require__(208),
	  Slider: __webpack_require__(209),
	  Sticky: __webpack_require__(210),
	
	  // widgets
	  Accordion: __webpack_require__(173),
	  Divider: __webpack_require__(183),
	  Footer: __webpack_require__(184),
	  Gallery: __webpack_require__(187),
	  GoTop: __webpack_require__(188),
	  Header: __webpack_require__(190),
	  ListNews: __webpack_require__(194),
	  Menu: __webpack_require__(195),
	  Navbar: __webpack_require__(199),
	  Titlebar: __webpack_require__(215),
	
	  // mixins
	  mixins: __webpack_require__(218)
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var CollapseMixin = __webpack_require__(53);
	
	var Accordion = React.createClass({
	  displayName: 'Accordion',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    theme: React.PropTypes.oneOf(['default', 'basic', 'gapped']),
	    data: React.PropTypes.array,
	    activeKey: React.PropTypes.any,
	    defaultActiveKey: React.PropTypes.any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'accordion',
	      theme: 'default'
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      activeKey: this.props.defaultActiveKey
	    };
	  },
	
	  handleSelect: function handleSelect(e, key) {
	    e.preventDefault();
	
	    if (this.state.activeKey === key) {
	      key = null;
	    }
	
	    this.setState({
	      activeKey: key
	    });
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	
	    classSet[this.prefixClass(this.props.theme)] = true;
	
	    return React.createElement(
	      'section',
	      _extends({}, this.props, {
	        'data-am-widget': this.props.classPrefix,
	        className: classNames(classSet, this.props.className) }),
	      this.props.data.map(function (item, index) {
	        return React.createElement(
	          Accordion.Item,
	          {
	            title: item.title,
	            expanded: item.active && item.disabled,
	            defaultExpanded: item.active && !item.disabled,
	            eventKey: index,
	            key: index },
	          item.content
	        );
	      })
	    );
	  }
	});
	
	Accordion.Item = React.createClass({
	  displayName: 'Item',
	
	  mixins: [ClassNameMixin, CollapseMixin],
	
	  propTypes: {
	    title: React.PropTypes.node,
	    expanded: React.PropTypes.bool
	  },
	
	  handleToggle: function handleToggle() {
	    this.setState({ expanded: !this.state.expanded });
	  },
	
	  getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
	    return ReactDOM.findDOMNode(this.refs.panel).scrollHeight;
	  },
	
	  getCollapsibleDOMNode: function getCollapsibleDOMNode() {
	    if (!this.isMounted() || !this.refs || !this.refs.panel) {
	      return null;
	    }
	
	    return ReactDOM.findDOMNode(this.refs.panel);
	  },
	
	  render: function render() {
	    return React.createElement(
	      'dl',
	      { className: classNames(this.setClassNamespace('accordion-item'), this.isExpanded() ? this.setClassNamespace('active') : null, this.props.expanded ? this.setClassNamespace('disabled') : null) },
	      React.createElement(
	        'dt',
	        {
	          onClick: this.handleToggle,
	          className: this.setClassNamespace('accordion-title') },
	        this.props.title
	      ),
	      React.createElement(
	        'dd',
	        {
	          className: classNames(this.getCollapsibleClassSet()),
	          ref: 'panel' },
	        React.createElement('div', {
	          className: this.setClassNamespace('accordion-content'),
	          dangerouslySetInnerHTML: { __html: this.props.children } })
	      )
	    );
	  }
	});
	
	module.exports = Accordion;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var Alert = React.createClass({
	  displayName: 'Alert',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string.isRequired,
	    amStyle: React.PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),
	    onClose: React.PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'alert'
	    };
	  },
	
	  renderCloseBtn: function renderCloseBtn() {
	    return React.createElement(
	      'button',
	      {
	        type: 'button',
	        className: this.setClassNamespace('close'),
	        onClick: this.props.onClose },
	      '×'
	    );
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	    var isCloseable = !!this.props.onClose;
	
	    if (this.props.amStyle) {
	      classSet[this.prefixClass(this.props.amStyle)] = true;
	    }
	
	    classSet[this.prefixClass('closeable')] = isCloseable;
	
	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet) }),
	      isCloseable ? this.renderCloseBtn() : null,
	      this.props.children
	    );
	  }
	});
	
	module.exports = Alert;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var Article = React.createClass({
	  displayName: 'Article',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string,
	    title: React.PropTypes.node,
	    meta: React.PropTypes.node,
	    lead: React.PropTypes.node
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'article'
	    };
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	
	    return React.createElement(
	      'article',
	      _extends({}, this.props, {
	        className: classNames(classSet, this.props.className) }),
	      React.createElement(
	        'header',
	        { className: this.prefixClass('hd') },
	        this.props.title ? React.createElement(
	          Article.Child,
	          { role: 'title' },
	          this.props.title
	        ) : null,
	        this.props.meta ? React.createElement(
	          Article.Child,
	          { role: 'meta' },
	          this.props.meta
	        ) : null
	      ),
	      React.createElement(
	        'div',
	        { className: this.prefixClass('bd') },
	        this.props.lead ? React.createElement(
	          Article.Child,
	          { role: 'lead' },
	          this.props.lead
	        ) : null,
	        this.props.children
	      )
	    );
	  }
	});
	
	Article.Child = React.createClass({
	  displayName: 'Child',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    role: React.PropTypes.string.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      role: 'title'
	    };
	  },
	
	  render: function render() {
	    var role = this.props.role;
	    var Component;
	    var classes = classNames(this.props.className, this.setClassNamespace('article-' + role));
	
	    switch (role) {
	      case 'meta':
	      case 'lead':
	        Component = 'p';
	        break;
	      case 'title':
	        Component = 'h1';
	        break;
	      default:
	        Component = 'div';
	    }
	
	    return role === 'divider' ? React.createElement('hr', _extends({}, this.props, {
	      className: classes })) : React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classes }),
	      this.props.children
	    );
	  }
	});
	
	module.exports = Article;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var Badge = React.createClass({
	  displayName: 'Badge',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    componentTag: React.PropTypes.node,
	    href: React.PropTypes.string,
	    round: React.PropTypes.bool,
	    radius: React.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'badge',
	      componentTag: 'span'
	    };
	  },
	
	  renderAnchor: function renderAnchor(classSet) {
	    var Component = this.props.componentTag || 'a';
	    var href = this.props.href || '#';
	
	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        href: href,
	        className: classNames(classSet, this.props.className),
	        role: 'badge' }),
	      this.props.children
	    );
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	    var Component = this.props.componentTag;
	    var renderAnchor = this.props.href;
	
	    if (renderAnchor) {
	      return this.renderAnchor(classSet);
	    }
	
	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(classSet, this.props.className) }),
	      this.props.children
	    );
	  }
	});
	
	module.exports = Badge;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var Breadcrumb = React.createClass({
	  displayName: 'Breadcrumb',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    slash: React.PropTypes.bool,
	    componentTag: React.PropTypes.node.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'breadcrumb',
	      componentTag: 'ul'
	    };
	  },
	
	  render: function render() {
	    var classes = this.getClassSet();
	    var Component = this.props.componentTag;
	
	    classes[this.prefixClass('slash')] = this.props.slash;
	
	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(classes, this.props.className) }),
	      this.props.children
	    );
	  }
	});
	
	Breadcrumb.Item = React.createClass({
	  displayName: 'Item',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    active: React.PropTypes.bool,
	    href: React.PropTypes.string,
	    title: React.PropTypes.string,
	    target: React.PropTypes.string
	  },
	
	  renderAnchor: function renderAnchor(classes) {
	    return React.createElement(
	      'li',
	      _extends({}, this.props, {
	        className: classes }),
	      React.createElement(
	        'a',
	        {
	          href: this.props.href,
	          title: this.props.title,
	          target: this.props.target },
	        this.props.children
	      )
	    );
	  },
	
	  render: function render() {
	    var classes = classNames(this.props.className);
	
	    if (this.props.href) {
	      return this.renderAnchor(classes);
	    }
	
	    return React.createElement(
	      'li',
	      _extends({}, this.props, {
	        className: classes }),
	      this.props.children
	    );
	  }
	});
	
	module.exports = Breadcrumb;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var CSSCore = __webpack_require__(41);
	var ClassNameMixin = __webpack_require__(3);
	var ButtonGroup = __webpack_require__(99);
	var constants = __webpack_require__(26);
	
	var ButtonCheck = React.createClass({
	  displayName: 'ButtonCheck',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    clickHandler: React.PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      clickHandler: function clickHandler() {}
	    };
	  },
	
	  handleClick: function handleClick(e) {
	    var changed = true;
	    var target = e.target;
	    var activeClassName = constants.CLASSES.active;
	
	    if (target && target.nodeName === 'INPUT') {
	      var parent = target.parentNode;
	
	      if (target.type === 'radio') {
	        if (target.checked && CSSCore.hasClass(parent, activeClassName)) {
	          changed = false;
	        } else {
	          var siblings = parent.parentNode.children;
	
	          // remove siblings activeClassName
	          for (var i = 0; i < siblings.length; i++) {
	            siblings[i] !== parent && CSSCore.removeClass(siblings[i], activeClassName);
	          }
	        }
	      }
	
	      if (changed) {
	        CSSCore.toggleClass(parent, activeClassName);
	      }
	    }
	
	    this.props.clickHandler.call(this);
	  },
	
	  render: function render() {
	    return React.createElement(
	      ButtonGroup,
	      _extends({}, this.props, {
	        onClick: this.handleClick,
	        className: this.setClassNamespace('btn-group-check') }),
	      this.props.children
	    );
	  }
	});
	
	module.exports = ButtonCheck;

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var ButtonToolbar = React.createClass({
	  displayName: 'ButtonToolbar',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn-toolbar'
	    };
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	
	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet) }),
	      this.props.children
	    );
	  }
	});
	
	module.exports = ButtonToolbar;

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*
	* https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CollapsibleNav.js
	* */
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var CollapseMixin = __webpack_require__(53);
	var createChainedFunction = __webpack_require__(42);
	
	var CollapsibleNav = React.createClass({
	  displayName: 'CollapsibleNav',
	
	  mixins: [ClassNameMixin, CollapseMixin],
	
	  propTypes: {
	    collapsible: React.PropTypes.bool,
	    onSelect: React.PropTypes.func,
	    activeHref: React.PropTypes.string,
	    activeKey: React.PropTypes.any,
	    expanded: React.PropTypes.bool,
	    eventKey: React.PropTypes.any
	  },
	
	  handleToggle: function handleToggle() {
	    this.setState({ expanded: !this.state.expanded });
	  },
	
	  getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
	    var height = 0;
	    var nodes = this.refs;
	
	    for (var key in nodes) {
	      if (nodes.hasOwnProperty(key)) {
	        var n = ReactDOM.findDOMNode(nodes[key]);
	        var h = n.offsetHeight;
	        var computedStyles = getComputedStyle(n, null);
	
	        height += h + parseInt(computedStyles.marginTop, 10) + parseInt(computedStyles.marginBottom, 10);
	      }
	    }
	
	    return height;
	  },
	
	  getCollapsibleDOMNode: function getCollapsibleDOMNode() {
	    return ReactDOM.findDOMNode(this);
	  },
	
	  getChildActiveProp: function getChildActiveProp(child) {
	    if (child.props.active) {
	      return true;
	    }
	
	    if (this.props.activeKey != null) {
	      if (child.props.eventKey === this.props.activeKey) {
	        return true;
	      }
	    }
	
	    if (this.props.activeHref != null) {
	      if (child.props.href === this.props.activeHref) {
	        return true;
	      }
	    }
	
	    return child.props.active;
	  },
	
	  renderChildren: function renderChildren(child, index) {
	    var key = child.key ? child.key : index;
	
	    return React.cloneElement(child, {
	      activeKey: this.props.activeKey,
	      activeHref: this.props.activeHref,
	      ref: 'nocollapse_' + key,
	      key: key,
	      navItem: true
	    });
	  },
	
	  renderCollapsibleNavChildren: function renderCollapsibleNavChildren(child, index) {
	    var key = child.key ? child.key : index;
	
	    return React.cloneElement(child, {
	      active: this.getChildActiveProp(child),
	      activeKey: this.props.activeKey,
	      activeHref: this.props.activeHref,
	      onSelect: createChainedFunction(child.props.onSelect, this.props.onSelect),
	      ref: 'collapsible_' + key,
	      key: key
	    });
	  },
	
	  render: function render() {
	    var collapsible = this.props.collapsible;
	    var classSet = collapsible ? this.getCollapsibleClassSet() : {};
	
	    classSet[this.setClassNamespace('topbar-collapse')] = this.props.topbar;
	
	    return React.createElement(
	      'div',
	      {
	        eventKey: this.props.eventKey,
	        className: classNames(classSet, this.props.className) },
	      React.Children.map(this.props.children, collapsible ? this.renderCollapsibleNavChildren : this.renderChildren)
	    );
	  }
	});
	
	module.exports = CollapsibleNav;

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var Container = React.createClass({
	  displayName: 'Container',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string.isRequired,
	    componentTag: React.PropTypes.node.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'container',
	      componentTag: 'div'
	    };
	  },
	
	  render: function render() {
	    var Component = this.props.componentTag;
	    var classSet = this.getClassSet();
	
	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet) }),
	      this.props.children
	    );
	  }
	});
	
	module.exports = Container;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	var fecha = __webpack_require__(72);
	var Events = __webpack_require__(21);
	var isNodeInTree = __webpack_require__(110);
	var Input = __webpack_require__(40);
	var DateTimePicker = __webpack_require__(103);
	
	var DateTimeInput = React.createClass({
	  displayName: 'DateTimeInput',
	
	  propTypes: {
	    format: React.PropTypes.string,
	    dateTime: React.PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      dateTime: '',
	      format: 'YYYY-MM-DD HH:mm'
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      value: this.props.dateTime || fecha.format(new Date(), this.props.format),
	      showPicker: false
	    };
	  },
	
	  handleOuterClick: function handleOuterClick(event) {
	    var picker = ReactDOM.findDOMNode(this.refs.DateTimePicker.getDOMNode());
	
	    if (!isNodeInTree(event.target, picker)) {
	      this.handleClose();
	    }
	  },
	
	  bindOuterHandlers: function bindOuterHandlers() {
	    Events.on(document, 'click', this.handleOuterClick);
	  },
	
	  unbindOuterHandlers: function unbindOuterHandlers() {
	    Events.off(document, 'click', this.handleOuterClick);
	  },
	
	  handleClose: function handleClose() {
	    this.unbindOuterHandlers();
	    return this.setState({
	      showPicker: false
	    });
	  },
	
	  handleClick: function handleClick() {
	    this.bindOuterHandlers();
	    var posObj = this.refs.dateInput.getDOMNode();
	
	    var offset = {
	      top: posObj.offsetTop + posObj.offsetHeight,
	      left: posObj.offsetLeft
	    };
	
	    var styles = {
	      display: 'block',
	      top: offset.top,
	      left: offset.left,
	      position: 'absolute',
	      zIndex: 1120
	    };
	
	    this.setState({
	      showPicker: true,
	      pickerStyle: styles
	    });
	  },
	
	  handleChange: function handleChange(event) {
	    return this.setState({
	      value: event.target.value
	    });
	  },
	
	  handleSelect: function handleSelect(date) {
	    return this.setState({
	      value: date
	    });
	  },
	
	  renderPicker: function renderPicker() {
	    if (this.state.showPicker) {
	      return React.createElement(DateTimePicker, {
	        style: this.state.pickerStyle,
	        ref: 'DateTimePicker',
	        showDatePicker: this.props.showDatePicker,
	        showTimePicker: this.props.showTimePicker,
	        onSelect: this.handleSelect,
	        onClose: this.handleClose,
	        amStyle: this.props.amStyle,
	        dateTime: this.state.value,
	        viewMode: this.props.viewMode,
	        minViewMode: this.props.minViewMode,
	        daysOfWeekDisabled: this.props.daysOfWeekDisabled,
	        weekStart: this.props.weekStart,
	        format: this.props.format,
	        locale: this.props.locale,
	        maxDate: this.props.maxDate,
	        minDate: this.props.minDate });
	    }
	  },
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(Input, _extends({}, this.props, {
	        type: 'text',
	        onClick: this.handleClick,
	        value: this.state.value,
	        onChange: this.handleChange,
	        ref: 'dateInput' })),
	      this.renderPicker()
	    );
	  }
	});
	
	module.exports = DateTimeInput;
	
	// TODO: 动画

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var Divider = React.createClass({
	  displayName: 'Divider',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    theme: React.PropTypes.oneOf(['default', 'dotted', 'dashed']),
	    classPrefix: React.PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'divider',
	      theme: 'default'
	    };
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	
	    return React.createElement('hr', _extends({}, this.props, {
	      'data-am-widget': this.props.classPrefix,
	      className: classNames(this.props.className, classSet) }));
	  }
	});
	
	module.exports = Divider;

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var Footer = React.createClass({
	  displayName: 'Footer',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    theme: React.PropTypes.oneOf(['default']),
	    classPrefix: React.PropTypes.string,
	    mobileTitle: React.PropTypes.string,
	    mobileLink: React.PropTypes.string,
	    desktopTitle: React.PropTypes.string,
	    desktopLink: React.PropTypes.string,
	    onRequestMobile: React.PropTypes.func,
	    onRequestDesktop: React.PropTypes.func,
	    data: React.PropTypes.array
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'footer',
	      theme: 'default',
	      mobileTitle: '适配版',
	      desktopTitle: '电脑版'
	    };
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	    var MobileTag = this.props.mobileLink ? 'a' : 'span';
	
	    return React.createElement(
	      'footer',
	      _extends({}, this.props, {
	        'data-am-widget': this.props.classPrefix,
	        className: classNames(this.props.className, classSet) }),
	      React.createElement(
	        'div',
	        { className: this.prefixClass('switch') },
	        React.createElement(
	          MobileTag,
	          {
	            className: this.prefixClass('ysp'),
	            onClick: this.props.onRequestMobile,
	            href: this.props.mobileLink,
	            'data-rel': 'mobile' },
	          this.props.mobileTitle
	        ),
	        React.createElement(
	          'span',
	          { className: this.prefixClass('divider') },
	          '|'
	        ),
	        React.createElement(
	          'a',
	          {
	            'data-rel': 'desktop',
	            href: this.props.desktopLink,
	            onClick: this.props.onRequestDesktop,
	            className: this.prefixClass('desktop') },
	          this.props.desktopTitle
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: this.prefixClass('miscs') },
	        this.props.data ? this.props.data.map(function (item, i) {
	          return React.createElement(
	            'p',
	            { key: i },
	            item
	          );
	        }) : this.props.children
	      )
	    );
	  }
	});
	
	module.exports = Footer;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var Form = React.createClass({
	  displayName: 'Form',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string.isRequired,
	    horizontal: React.PropTypes.bool,
	    inline: React.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'form'
	    };
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	
	    classSet[this.prefixClass('horizontal')] = this.props.horizontal;
	    classSet[this.prefixClass('inline')] = this.props.inline;
	
	    return React.createElement(
	      'form',
	      _extends({}, this.props, {
	        className: classNames(classSet, this.props.className) }),
	      this.props.children
	    );
	  }
	});
	
	module.exports = Form;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var Button = __webpack_require__(33);
	var Input = __webpack_require__(40);
	
	var FormFile = React.createClass({
	  displayName: 'FormFile',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {},
	
	  getDefaultProps: function getDefaultProps() {
	    return {};
	  },
	
	  render: function render() {
	    return React.createElement(
	      FormGroup,
	      {
	        className: this.setClassNamespace('form-file') },
	      React.createElement(Input, { type: 'file', standalone: true })
	    );
	  }
	});
	
	module.exports = FormFile;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var AvgGrid = __webpack_require__(39);
	var omit = __webpack_require__(18);
	
	var Gallery = React.createClass({
	  displayName: 'Gallery',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string,
	    theme: React.PropTypes.oneOf(['default', 'overlay', 'bordered', 'imgbordered']),
	    data: React.PropTypes.array,
	    sm: React.PropTypes.number,
	    md: React.PropTypes.number,
	    lg: React.PropTypes.number
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'gallery',
	      theme: 'default',
	      data: []
	    };
	  },
	
	  renderItem: function renderItem(item) {
	    var img = item.img ? React.createElement('img', {
	      src: item.img,
	      key: 'galeryImg',
	      alt: item.alt || item.title || null }) : null;
	    var title = item.title ? React.createElement(
	      'h3',
	      {
	        key: 'galleryTitle',
	        className: this.prefixClass('title') },
	      item.title
	    ) : null;
	    var desc = item.desc ? React.createElement(
	      'div',
	      {
	        key: 'galleryDesc',
	        className: this.prefixClass('desc') },
	      item.desc
	    ) : null;
	    var galleryItem = item.link ? React.createElement(
	      'a',
	      { href: item.link },
	      img,
	      title,
	      desc
	    ) : [img, title, desc];
	
	    return React.createElement(
	      'div',
	      {
	        className: classNames(this.props.className, this.prefixClass('item')) },
	      galleryItem
	    );
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	    var props = omit(this.props, ['classPrefix', 'data', 'theme']);
	
	    return React.createElement(
	      AvgGrid,
	      _extends({}, props, {
	        sm: this.props.sm || 2,
	        md: this.props.md || 3,
	        lg: this.props.lg || 4,
	        'data-am-widget': this.props.classPrefix,
	        className: classNames(this.props.className, classSet) }),
	      this.props.data.map((function (item, i) {
	        return React.createElement(
	          'li',
	          { key: i },
	          this.renderItem(item)
	        );
	      }).bind(this))
	    );
	  }
	});
	
	module.exports = Gallery;

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var SmoothScrollMixin = __webpack_require__(69);
	var Events = __webpack_require__(21);
	var debounce = __webpack_require__(54);
	var dom = __webpack_require__(43);
	var CSSCore = __webpack_require__(41);
	var Icon = __webpack_require__(13);
	
	var GoTop = React.createClass({
	  displayName: 'GoTop',
	
	  mixins: [ClassNameMixin, SmoothScrollMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string.isRequired,
	    theme: React.PropTypes.oneOf(['default', 'fixed']),
	    title: React.PropTypes.string,
	    src: React.PropTypes.string,
	    icon: React.PropTypes.string,
	    autoHide: React.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'gotop',
	      theme: 'default'
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    if (this.isAutoHide()) {
	      var check = this.checkPosition;
	
	      check();
	
	      this._listener = Events.on(window, 'scroll', debounce(check, 100));
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this._listener && this._listener.off();
	  },
	
	  checkPosition: function checkPosition() {
	    var action = (dom.scrollTop(window) > 50 ? 'add' : 'remove') + 'Class';
	
	    CSSCore[action](ReactDOM.findDOMNode(this), this.setClassNamespace('active'));
	  },
	
	  isAutoHide: function isAutoHide() {
	    return this.props.theme === 'fixed' && this.props.autoHide;
	  },
	
	  handleClick: function handleClick(e) {
	    e.preventDefault();
	    this.smoothScroll();
	  },
	
	  renderIcon: function renderIcon() {
	    return this.props.src ? React.createElement('img', {
	      className: this.prefixClass('icon-custom'),
	      src: this.props.src,
	      alt: this.props.title }) : React.createElement(Icon, {
	      className: this.prefixClass('icon'),
	      icon: this.props.icon || 'chevron-up' });
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	
	    classSet[this.prefixClass(this.props.theme)] = true;
	    classSet[this.setClassNamespace('active')] = !this.isAutoHide();
	
	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        'data-am-widget': this.props.classPrefix,
	        className: classNames(classSet, this.props.className) }),
	      React.createElement(
	        'a',
	        {
	          href: '#top',
	          onClick: this.handleClick,
	          title: this.props.title },
	        this.props.title ? React.createElement(
	          'span',
	          { className: this.prefixClass('title') },
	          this.props.title
	        ) : null,
	        this.renderIcon()
	      )
	    );
	  }
	});
	
	module.exports = GoTop;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var Grid = React.createClass({
	  displayName: 'Grid',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string.isRequired,
	    componentTag: React.PropTypes.node.isRequired,
	    collapse: React.PropTypes.bool,
	    fixed: React.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'g',
	      componentTag: 'div'
	    };
	  },
	
	  render: function render() {
	    var Component = this.props.componentTag;
	    var classSet = this.getClassSet();
	    var props = this.props;
	
	    // .am-g-fixed
	    classSet[this.prefixClass('fixed')] = props.fixed;
	
	    // .am-g-collapse
	    classSet[this.prefixClass('collapse')] = props.collapse;
	
	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet) }),
	      this.props.children
	    );
	  }
	});
	
	module.exports = Grid;

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var Icon = __webpack_require__(13);
	var omit = __webpack_require__(18);
	
	var Header = React.createClass({
	  displayName: 'Header',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string,
	    theme: React.PropTypes.oneOf(['default']),
	    data: React.PropTypes.object,
	    fixed: React.PropTypes.bool,
	    title: React.PropTypes.node,
	    link: React.PropTypes.string,
	    onSelect: React.PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'header',
	      theme: 'default',
	      onSelect: function onSelect() {}
	    };
	  },
	
	  renderTitle: function renderTitle() {
	    return this.props.title ? React.createElement(
	      'h1',
	      {
	        className: this.prefixClass('title'),
	        onClick: this.props.onSelect.bind(this, {
	          title: this.props.title,
	          link: this.props.link
	        }) },
	      this.props.link ? React.createElement(
	        'a',
	        { href: this.props.link },
	        this.props.title
	      ) : this.props.title
	    ) : null;
	  },
	
	  renderNav: function renderNav(position) {
	    var data = this.props.data;
	    var renderItem = (function (item, i) {
	      return React.createElement(
	        'a',
	        { href: item.link,
	          onClick: this.props.onSelect.bind(this, item),
	          key: 'headerNavItem' + i },
	        item.title ? React.createElement(
	          'span',
	          { className: this.prefixClass('nav-title') },
	          item.title
	        ) : null,
	        item.customIcon ? React.createElement('img', { src: item.customIcon, alt: item.title || null }) : item.icon ? React.createElement(Icon, {
	          className: this.prefixClass('icon'),
	          icon: item.icon }) : null
	      );
	    }).bind(this);
	
	    return data && data[position] ? React.createElement(
	      'div',
	      {
	        className: classNames(this.prefixClass('nav'), this.prefixClass(position)) },
	      data[position].map(function (item, i) {
	        return renderItem(item, i);
	      })
	    ) : null;
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	
	    // am-header-fixed: fixed header
	    classSet[this.prefixClass('fixed')] = this.props.fixed;
	
	    return React.createElement(
	      'header',
	      _extends({}, omit(this.props, ['data', 'title']), {
	        'data-am-widget': this.props.classPrefix,
	        className: classNames(this.props.className, classSet) }),
	      this.renderNav('left'),
	      this.renderTitle(),
	      this.renderNav('right')
	    );
	  }
	});
	
	module.exports = Header;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var constants = __webpack_require__(26);
	
	var Image = React.createClass({
	  displayName: 'Image',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    src: React.PropTypes.string.isRequired,
	    circle: React.PropTypes.bool,
	    radius: React.PropTypes.bool,
	    round: React.PropTypes.bool,
	    responsive: React.PropTypes.bool,
	    thumbnail: React.PropTypes.bool,
	    placeholder: React.PropTypes.string,
	    threshold: React.PropTypes.number,
	    callback: React.PropTypes.func,
	    asBgImage: React.PropTypes.bool
	  },
	
	  render: function render() {
	    var classSet = {};
	
	    classSet[constants.CLASSES.radius] = this.props.radius;
	    classSet[constants.CLASSES.round] = this.props.round;
	    classSet[constants.CLASSES.circle] = this.props.circle;
	    classSet[this.setClassNamespace('img-responsive')] = this.props.responsive;
	    classSet[this.setClassNamespace('img-thumbnail')] = this.props.thumbnail;
	
	    return React.createElement('img', _extends({}, this.props, {
	      className: classNames(this.props.className, classSet) }));
	  }
	});
	
	module.exports = Image;
	
	/*
	TODO:
	- srcset/sizes 支持
	  - http://caniuse.com/#feat=srcset
	  - http://www.w3.org/html/wg/drafts/html/master/semantics.html#attr-img-srcset
	  - https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/
	- lazyload
	- asBackground ?
	*/
	/*
	 http://odin.s0.no/web/srcset/polyfill.htm
	 https://github.com/borismus/srcset-polyfill
	 https://github.com/JimBobSquarePants/srcset-polyfill
	 http://www.html5rocks.com/en/mobile/high-dpi/
	 http://www.html5rocks.com/en/tutorials/responsive/picture-element/
	 https://ericportis.com/posts/2014/srcset-sizes/
	
	 gif 占位符
	 http://proger.i-forge.net/The_smallest_transparent_pixel/eBQ
	 http://stackoverflow.com/questions/9126105/blank-image-encoded-as-data-uri
	*/

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var List = React.createClass({
	  displayName: 'List',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    border: React.PropTypes.bool,
	    striped: React.PropTypes.bool,
	    'static': React.PropTypes.bool,
	    componentTag: React.PropTypes.node.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'list',
	      componentTag: 'ul'
	    };
	  },
	
	  render: function render() {
	    var classes = this.getClassSet();
	    var Component = this.props.componentTag;
	    var props = this.props;
	    var prefixClass = this.prefixClass;
	
	    // am-list-border
	    classes[prefixClass('border')] = props.border;
	
	    // am-list-striped
	    classes[prefixClass('striped')] = props.striped;
	
	    // am-list-static
	    classes[prefixClass('static')] = props['static'];
	
	    return React.createElement(
	      Component,
	      _extends({}, props, {
	        className: classNames(classes, props.className) }),
	      props.children
	    );
	  }
	});
	
	module.exports = List;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var ListItem = React.createClass({
	  displayName: 'ListItem',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    href: React.PropTypes.string,
	    truncate: React.PropTypes.bool,
	    componentTag: React.PropTypes.node.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      componentTag: 'li'
	    };
	  },
	
	  render: function render() {
	    var classes = {};
	    var Component = this.props.componentTag;
	
	    // set .am-text-truncate
	    classes['am-text-truncate'] = this.props.truncate;
	
	    // render Anchor
	    if (this.props.href) {
	      return this.renderAnchor(classes);
	    }
	
	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(classes, this.props.className) }),
	      this.props.children
	    );
	  },
	
	  renderAnchor: function renderAnchor(classes) {
	    var props = this.props;
	    var Component = props.componentTag;
	    var truncate = props.truncate ? 'am-text-truncate' : '';
	
	    return React.createElement(
	      Component,
	      _extends({}, props, {
	        className: classNames(classes, this.props.className) }),
	      React.createElement(
	        'a',
	        {
	          className: truncate,
	          href: this.props.href,
	          title: this.props.title,
	          target: this.props.target },
	        this.props.children
	      )
	    );
	  }
	});
	
	module.exports = ListItem;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var Button = __webpack_require__(33);
	var Col = __webpack_require__(101);
	
	var ListNews = React.createClass({
	  displayName: 'ListNews',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string,
	    theme: React.PropTypes.oneOf(['default']),
	    data: React.PropTypes.object,
	    header: React.PropTypes.node,
	    footer: React.PropTypes.node,
	    morePosition: React.PropTypes.oneOf(['top', 'bottom']),
	    moreText: React.PropTypes.string,
	    thumbPosition: React.PropTypes.oneOf(['top', 'left', 'right', 'bottom-left', 'bottom-right'])
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'list-news',
	      theme: 'default',
	      moreText: '更多 »'
	    };
	  },
	
	  renderHeader: function renderHeader() {
	    var data = this.props.data;
	
	    return data && data.header && data.header.title ? React.createElement(
	      'div',
	      {
	        className: classNames(this.prefixClass('hd'), this.setClassNamespace('cf')) },
	      data.header.link ? React.createElement(
	        'a',
	        { href: data.header.link },
	        React.createElement(
	          'h2',
	          null,
	          data.header.title
	        ),
	        this.props.morePosition === 'top' ? React.createElement(
	          'span',
	          {
	            className: classNames(this.prefixClass('more'), this.setClassNamespace('fr')) },
	          this.props.moreText
	        ) : null
	      ) : React.createElement(
	        'h2',
	        null,
	        data.header.title
	      )
	    ) : null;
	  },
	
	  // `more` on bottom
	  renderFooter: function renderFooter() {
	    return this.props.morePosition === 'bottom' && this.props.data.header.link ? React.createElement(
	      'div',
	      { className: this.prefixClass('ft') },
	      React.createElement(
	        Button,
	        {
	          className: this.prefixClass('more'),
	          href: this.props.data.header.link },
	        this.props.moreText
	      )
	    ) : null;
	  },
	
	  getListItemClasses: function getListItemClasses(item) {
	    return classNames(this.setClassNamespace('g'), item.date ? this.setClassNamespace('list-item-dated') : false, item.desc ? this.setClassNamespace('list-item-desced') : false, item.img ? this.setClassNamespace('list-item-thumbed') : false, this.props.thumbPosition ? this.setClassNamespace('list-item-thumb-' + this.props.thumbPosition) : false);
	  },
	
	  renderBody: function renderBody(children) {
	    return React.createElement(
	      'div',
	      { className: this.prefixClass('bd') },
	      React.createElement(
	        'ul',
	        { className: this.setClassNamespace('list') },
	        children
	      )
	    );
	  },
	
	  renderList: function renderList() {
	    var position = this.props.thumbPosition;
	    var orderChildren = (function (item, i) {
	      var thumb = this.renderItemThumb(item, i);
	      var main = this.renderItemMain(item, i);
	
	      return position === 'right' || position === 'bottom-right' ? [main, thumb] : [thumb, main];
	    }).bind(this);
	
	    return this.props.data.main.map((function (item, i) {
	      return React.createElement(
	        'li',
	        {
	          key: i,
	          className: this.getListItemClasses(item) },
	        position === 'bottom-left' || position === 'bottom-right' ? this.renderThumbItemTitle(item) : null,
	        orderChildren(item, i)
	      );
	    }).bind(this));
	  },
	
	  renderItemMisc: function renderItemMisc(item, type) {
	    var Tag = type === 'date' ? 'span' : 'div';
	    var className;
	
	    switch (type) {
	      case 'date':
	        className = 'list-date';
	        break;
	      case 'desc':
	        className = 'list-item-text';
	        break;
	      case 'mainAddition':
	        className = 'list-news-addon';
	        break;
	      case 'thumbAddition':
	        className = 'list-thumb-addon';
	    }
	
	    return item[type] ? React.createElement(
	      Tag,
	      { className: this.setClassNamespace(className) },
	      item[type]
	    ) : null;
	  },
	
	  renderItemThumb: function renderItemThumb(item, i) {
	    var cols = this.props.thumbPosition === 'top' ? 12 : 4;
	
	    return item.img ? React.createElement(
	      Col,
	      {
	        key: 'thumb' + i,
	        sm: cols,
	        className: this.setClassNamespace('list-thumb') },
	      React.createElement(
	        'a',
	        { href: item.link },
	        React.createElement('img', { src: item.img, alt: item.title })
	      ),
	      this.renderItemMisc(item, 'thumbAddition')
	    ) : null;
	  },
	
	  renderItemMain: function renderItemMain(item, i) {
	    var position = this.props.thumbPosition;
	    var date = this.renderItemMisc(item, 'date');
	    var desc = this.renderItemMisc(item, 'desc');
	    var addon = this.renderItemMisc(item, 'mainAddition');
	    // title of list without thumbnail
	    var itemWithoutThumbTitle = !position && item.title ? React.createElement(
	      'a',
	      {
	        key: 'title' + i,
	        className: this.setClassNamespace('list-item-hd'),
	        href: item.link },
	      item.title
	    ) : null;
	    var cols = position === 'top' ? 12 : item.img ? 8 : 12;
	
	    return position ? React.createElement(
	      Col,
	      {
	        sm: cols,
	        className: this.setClassNamespace('list-main'),
	        key: 'itemMain' + i },
	      position !== 'bottom-left' && position !== 'bottom-right' ? this.renderThumbItemTitle(item) : null,
	      date,
	      desc,
	      addon
	    ) : [itemWithoutThumbTitle, date, desc, addon];
	  },
	
	  renderThumbItemTitle: function renderThumbItemTitle(item) {
	    return item.title ? React.createElement(
	      'h3',
	      { className: this.setClassNamespace('list-item-hd') },
	      React.createElement(
	        'a',
	        { href: item.link },
	        item.title
	      )
	    ) : null;
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	
	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        'data-am-widget': this.props.classPrefix,
	        className: classNames(this.props.className, classSet) }),
	      this.props.header || this.renderHeader(),
	      this.renderBody(this.renderList()),
	      this.props.footer || this.renderFooter()
	    );
	  }
	});
	
	module.exports = ListNews;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var Icon = __webpack_require__(13);
	var AvgGrid = __webpack_require__(39);
	var omit = __webpack_require__(18);
	
	var Menu = React.createClass({
	  displayName: 'Menu',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string,
	    theme: React.PropTypes.oneOf(['default', 'dropdown1', 'dropdown2', 'slide1', 'stack']),
	    data: React.PropTypes.array,
	    onSelect: React.PropTypes.func,
	    toggleTitle: React.PropTypes.string,
	    toggleCustomIcon: React.PropTypes.string,
	    toggleIcon: React.PropTypes.string,
	    cols: React.PropTypes.number
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'menu',
	      theme: 'default',
	      data: [],
	      onSelect: function onSelect() {}
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      data: this.props.data,
	      expanded: !this.isDropdown()
	    };
	  },
	
	  handleClick: function handleClick(nav, index, closeAll, e) {
	    if (nav && nav.subMenu) {
	      this.handleParentClick(nav, index, closeAll, e);
	    }
	
	    this.props.onSelect.call(this, nav, index, e);
	  },
	
	  /**
	   * handle nav with subMenu click
	   * @param {object} nav - clicked nav
	   * @param {number} index - clicked nav index
	   * @param {bool} closeAll - close all submenu
	   * @param {object} e
	   */
	  handleParentClick: function handleParentClick(nav, index, closeAll, e) {
	    e && e.preventDefault();
	
	    var data = this.state.data.map(function (item, i) {
	      item.subActive = closeAll ? false : index === i ? !item.subActive : false;
	      return item;
	    });
	
	    this.setState({
	      data: data
	    });
	  },
	
	  closeAll: function closeAll() {
	    this.handleParentClick(null, null, true, undefined);
	  },
	
	  // handle toggle button click for dropdown/slide theme
	  handleToggle: function handleToggle(e) {
	    e && e.preventDefault();
	    this.setState({
	      expanded: !this.state.expanded
	    }, (function () {
	      !this.state.expanded && this.closeAll();
	    }).bind(this));
	  },
	
	  isDropdown: function isDropdown() {
	    return ['dropdown1', 'dropdown2', 'slide1'].indexOf(this.props.theme) > -1;
	  },
	
	  renderMenuToggle: function renderMenuToggle() {
	    var title = this.props.toggleTitle ? React.createElement(
	      'span',
	      { className: this.prefixClass('toggle-title') },
	      this.props.toggleTitle
	    ) : null;
	    var icon = this.props.toggleCustomIcon ? React.createElement('img', { src: this.props.toggleCustomIcon, alt: 'Menu Toggle' }) : React.createElement(Icon, {
	      className: this.prefixClass('toggle-icon'),
	      icon: this.props.toggleIcon || 'bars' });
	
	    return React.createElement(
	      'a',
	      {
	        href: '#',
	        onClick: this.handleToggle,
	        className: classNames(this.prefixClass('toggle'), this.state.expanded ? this.setClassNamespace('active') : null) },
	      title,
	      icon
	    );
	  },
	
	  renderNavs: function renderNavs() {
	    var _this = this;
	    var openClassName = this.setClassNamespace('open');
	    var inClassName = this.setClassNamespace('in');
	
	    return this.state.data.map(function (nav, i) {
	      return React.createElement(
	        'li',
	        {
	          key: i,
	          className: classNames(nav.subMenu ? _this.setClassNamespace('parent') : null, nav.subActive ? openClassName : null) },
	        React.createElement(
	          'a',
	          {
	            onClick: _this.handleClick.bind(_this, nav, i, false),
	            href: nav.link },
	          nav.title
	        ),
	        nav.subMenu ? React.createElement(
	          AvgGrid,
	          {
	            sm: nav.subCols || 1,
	            className: classNames(_this.prefixClass('sub'), _this.setClassNamespace('collapse'), nav.subActive ? inClassName : null) },
	          nav.subMenu.map(function (subNav, index) {
	            return React.createElement(
	              'li',
	              { key: index },
	              React.createElement(
	                'a',
	                {
	                  onClick: _this.handleClick.bind(_this, subNav, [i, index], false),
	                  target: subNav.target,
	                  href: subNav.link },
	                subNav.title
	              )
	            );
	          })
	        ) : null
	      );
	    });
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	    var props = omit(this.props, 'data');
	    var hideTopLevel = !this.state.expanded ? this.setClassNamespace('collapse') : null;
	
	    return React.createElement(
	      'nav',
	      _extends({}, props, {
	        'data-am-widget': this.props.classPrefix,
	        className: classNames(this.props.className, classSet) }),
	      this.renderMenuToggle(),
	      React.createElement(
	        AvgGrid,
	        {
	          sm: this.props.cols,
	          className: classNames(this.prefixClass('nav'), hideTopLevel) },
	        this.renderNavs()
	      )
	    );
	  }
	});
	
	module.exports = Menu;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var DimmerMixin = __webpack_require__(67);
	var Events = __webpack_require__(21);
	var Close = __webpack_require__(100);
	var Icon = __webpack_require__(13);
	
	var Modal = React.createClass({
	  displayName: 'Modal',
	
	  mixins: [ClassNameMixin, DimmerMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string.isRequired,
	    type: React.PropTypes.oneOf(['alert', 'confirm', 'prompt', 'loading', 'actions', 'popup']),
	    title: React.PropTypes.node,
	    confirmText: React.PropTypes.string,
	    cancelText: React.PropTypes.string,
	    closeIcon: React.PropTypes.bool,
	    closeViaDimmer: React.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'modal',
	      closeIcon: true,
	      confirmText: '确定',
	      cancelText: '取消'
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      transitioning: false
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    this._documentKeyupListener = Events.on(document, 'keyup', this.handleDocumentKeyUp, false);
	
	    this.setDimmerContainer();
	
	    // TODO: 何为添加动画效果的最佳时机？ render 完成以后添加动画 Class？
	    this.setState({
	      transitioning: true
	    });
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this._documentKeyupListener.off();
	    this.resetDimmerContainer();
	  },
	
	  handleDimmerClick: function handleDimmerClick() {
	    if (this.props.closeViaDimmer) {
	      this.props.onRequestClose();
	    }
	  },
	
	  handleBackdropClick: function handleBackdropClick(e) {
	    if (e.target !== e.currentTarget) {
	      return;
	    }
	
	    this.props.onRequestClose();
	  },
	
	  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
	    if (!this.props.keyboard && e.keyCode === 27) {
	      this.props.onRequestClose();
	    }
	  },
	
	  isPopup: function isPopup() {
	    return this.props.type === 'popup';
	  },
	
	  isActions: function isActions() {
	    return this.props.type === 'actions';
	  },
	
	  // Get input data for prompt modal
	  getPromptData: function getPromptData() {
	    var data = [];
	    var inputs = ReactDOM.findDOMNode(this).querySelectorAll('input');
	
	    if (inputs) {
	      var i = 0;
	
	      for (; i < inputs.length; i++) {
	        data.push(inputs[i].value);
	      }
	    }
	
	    return data.length === 0 ? null : data.length === 1 ? data[0] : data;
	  },
	
	  handleConfirm: function handleConfirm(e) {
	    var data = e;
	
	    if (this.props.type === 'prompt') {
	      data = this.getPromptData();
	    }
	
	    this.props.onConfirm(data);
	  },
	
	  renderActions: function renderActions() {
	    return React.createElement(
	      'div',
	      {
	        style: { display: 'block' },
	        className: classNames(this.props.className, this.setClassNamespace('modal-actions'), this.setClassNamespace('modal-active')) },
	      this.props.children
	    );
	  },
	
	  renderPopup: function renderPopup() {
	    return React.createElement(
	      'div',
	      {
	        style: { display: 'block' },
	        className: classNames(this.props.className, this.setClassNamespace('popup'), this.setClassNamespace('modal-active')) },
	      React.createElement(
	        'div',
	        { className: this.setClassNamespace('popup-inner') },
	        React.createElement(
	          'div',
	          { className: this.setClassNamespace('popup-hd') },
	          this.props.title ? React.createElement(
	            'h4',
	            { className: this.setClassNamespace('popup-title') },
	            this.props.title
	          ) : null,
	          React.createElement(Close, { onClick: this.props.onRequestClose })
	        ),
	        React.createElement(
	          'div',
	          { className: this.setClassNamespace('popup-bd') },
	          this.props.children
	        )
	      )
	    );
	  },
	
	  renderHeader: function renderHeader() {
	    var title = this.props.title;
	    var closeIcon = this.props.closeIcon && !this.props.type ? React.createElement(Close, {
	      spin: true,
	      onClick: this.props.onRequestClose }) : null;
	
	    return this.props.title || closeIcon ? React.createElement(
	      'div',
	      { className: this.prefixClass('hd') },
	      title ? React.createElement(
	        'h4',
	        {
	          className: this.setClassNamespace('margin-bottom-sm') },
	        title
	      ) : null,
	      closeIcon
	    ) : null;
	  },
	
	  // Render alert/confirm/prompt buttons
	  renderFooter: function renderFooter() {
	    var buttons;
	    var btnClass = this.prefixClass('btn');
	    var props = this.props;
	
	    switch (this.props.type) {
	      case 'alert':
	        buttons = React.createElement(
	          'span',
	          {
	            onClick: this.props.onConfirm,
	            className: btnClass },
	          this.props.confirmText
	        );
	        break;
	      case 'confirm':
	      case 'prompt':
	        buttons = [props.cancelText, props.confirmText].map((function (text, i) {
	          return React.createElement(
	            'span',
	            {
	              key: i,
	              onClick: i === 0 ? this.props.onCancel : this.handleConfirm,
	              className: btnClass },
	            text
	          );
	        }).bind(this));
	        break;
	      default:
	        buttons = null;
	    }
	
	    return buttons ? React.createElement(
	      'div',
	      { className: this.prefixClass('footer') },
	      buttons
	    ) : null;
	  },
	
	  render: function render() {
	    if (this.isActions()) {
	      return this.renderDimmer(this.renderActions());
	    }
	
	    if (this.isPopup()) {
	      return this.renderDimmer(this.renderPopup());
	    }
	
	    var classSet = this.getClassSet();
	    var props = this.props;
	    var footer = this.renderFooter();
	    var style = {
	      display: 'block',
	      width: props.modalWidth,
	      height: props.modalHeight,
	      marginLeft: props.marginLeft,
	      marginTop: props.marginTop
	    };
	
	    classSet[this.prefixClass('active')] = this.state.transitioning;
	
	    // .am-modal-no-btn -> refactor this style using `~` selector
	    classSet[this.prefixClass('no-btn')] = !footer;
	    props.type && (classSet[this.prefixClass(props.type)] = true);
	
	    var modal = React.createElement(
	      'div',
	      _extends({}, props, {
	        style: style,
	        ref: 'modal',
	        title: null,
	        className: classNames(classSet, props.className) }),
	      React.createElement(
	        'div',
	        { className: this.prefixClass('dialog') },
	        this.renderHeader(),
	        React.createElement(
	          'div',
	          { className: this.prefixClass('bd'), ref: 'modalBody' },
	          props.type === 'loading' ? props.children ? props.children : React.createElement(Icon, { icon: 'spinner', spin: true }) : props.children
	        ),
	        footer
	      )
	    );
	
	    return this.renderDimmer(modal);
	  }
	});
	
	module.exports = Modal;
	
	// TODO: Modal 动画效果实现
	// -> 如何关闭 Loading Modal?
	// -> 关闭 Modal 以后窗口滚动会原来滚动条所在位置

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var cloneElement = React.cloneElement;
	var OverlayMixin = __webpack_require__(68);
	var DimmerMixin = __webpack_require__(67);
	var createChainedFunction = __webpack_require__(42);
	
	var ModalTrigger = React.createClass({
	  displayName: 'ModalTrigger',
	
	  mixins: [OverlayMixin, DimmerMixin],
	
	  propTypes: {
	    modal: React.PropTypes.node.isRequired,
	    onConfirm: React.PropTypes.func,
	    onCancel: React.PropTypes.func,
	    title: React.PropTypes.string
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      isModalActive: false,
	      modalWidth: null,
	      modalMarginLeft: null,
	      modalHeight: null,
	      modalMarginTop: null
	    };
	  },
	
	  open: function open() {
	    this.setState({
	      isModalActive: true
	    }, this.setModalStyle);
	  },
	
	  close: function close() {
	    this.setState({
	      isModalActive: false
	    });
	  },
	
	  toggle: function toggle() {
	    if (this.state.isModalActive) {
	      this.close();
	    } else {
	      this.open();
	    }
	  },
	
	  setModalStyle: function setModalStyle() {
	    if (!this.isMounted()) {
	      return;
	    }
	
	    // TODO: selector
	    var modal = this.getOverlayDOMNode().querySelector('.am-modal');
	
	    if (!modal) {
	      return;
	    }
	
	    var style = {};
	
	    if (this.props.modalHeight) {
	      style.modalHeight = this.props.modalHeight;
	      style.modalMarginTop = -this.props.height / 2;
	    } else {
	      style.modalMarginTop = -modal.offsetHeight / 2;
	    }
	
	    if (this.props.modalWidth) {
	      style.modalWidth = this.props.modalWidth;
	      style.modalMarginLeft = -this.props.modalWidth / 2;
	    }
	
	    this.setState(style);
	  },
	
	  // overlay is the modal
	  renderOverlay: function renderOverlay() {
	    if (!this.state.isModalActive) {
	      return React.createElement('span', null);
	    }
	
	    return cloneElement(this.props.modal, {
	      onRequestClose: this.close,
	      marginTop: this.state.modalMarginTop,
	      marginLeft: this.state.modalMarginLeft,
	      modalWidth: this.state.modalWidth,
	      modalHeight: this.state.modalHeight,
	      title: this.props.modal.props.title || this.props.title,
	      onConfirm: createChainedFunction(this.close, this.props.onConfirm),
	      onCancel: createChainedFunction(this.close, this.props.onCancel)
	    });
	  },
	
	  render: function render() {
	    var child = React.Children.only(this.props.children);
	    var props = {};
	
	    props.onClick = createChainedFunction(child.props.onClick, this.toggle);
	    props.onMouseOver = createChainedFunction(child.props.onMouseOver, this.props.onMouseOver);
	    props.onMouseOut = createChainedFunction(child.props.onMouseOut, this.props.onMouseOut);
	    props.onFocus = createChainedFunction(child.props.onFocus, this.props.onFocus);
	    props.onBlur = createChainedFunction(child.props.onBlur, this.props.onBlur);
	
	    return cloneElement(child, props);
	  }
	});
	
	module.exports = ModalTrigger;

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * React version of NProgress
	 * https://github.com/rstacruz/nprogress/
	 */
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	var ClassNameMixin = __webpack_require__(3);
	
	function clamp(n, min, max) {
	  if (n < min) {
	    return min;
	  }
	
	  if (n > max) {
	    return max;
	  }
	
	  return n;
	}
	
	function toBarPercentage(n) {
	  return (-1 + n) * 100;
	}
	
	var NProgress = React.createClass({
	  displayName: 'NProgress',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    minimum: React.PropTypes.number,
	    easing: React.PropTypes.string,
	    speed: React.PropTypes.number,
	    spinner: React.PropTypes.bool,
	    trickle: React.PropTypes.bool,
	    trickleRate: React.PropTypes.number,
	    trickleSpeed: React.PropTypes.number
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      status: null
	    };
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      minimum: 0.08,
	      easing: 'ease',
	      speed: 200,
	      trickle: true,
	      trickleRate: 0.02,
	      trickleSpeed: 800
	    };
	  },
	
	  start: function start() {
	    var _this = this;
	
	    !this.state.status && this.set(0);
	
	    var work = function work() {
	      setTimeout(function () {
	        if (!_this.state.status || _this.state.status === 1) {
	          return;
	        }
	
	        _this.trickle();
	        work();
	      }, _this.props.trickleSpeed);
	    };
	
	    this.props.trickle && work();
	  },
	
	  set: function set(n) {
	    var _this = this;
	
	    n = clamp(n, this.props.minimum, 1);
	    this.setState({
	      status: n
	    });
	
	    if (n === 1) {
	      var progress = ReactDOM.findDOMNode(this.refs.progress);
	
	      progress.style.opacity = 1;
	      progress.style.transition = 'none';
	      progress.offsetWidth;
	
	      setTimeout(function () {
	        progress.style.opacity = 0;
	        progress.style.transition = 'all ' + _this.props.speed + 'ms linear';
	
	        setTimeout(function () {
	          _this.reset();
	        }, _this.props.speed + 100);
	      }, _this.props.speed);
	    }
	  },
	
	  reset: function reset() {
	    this.setState({
	      status: null
	    });
	  },
	
	  done: function done() {
	    if (this.state.status) {
	      this.inc(0.3 + 0.5 * Math.random());
	      this.set(1);
	    }
	  },
	
	  inc: function inc(amount) {
	    var n = this.state.status;
	
	    if (!n) {
	      return this.start();
	    } else {
	      if (typeof amount !== 'number') {
	        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
	      }
	
	      n = clamp(n + amount, 0, 0.994);
	      return this.set(n);
	    }
	  },
	
	  trickle: function trickle() {
	    if (this.state.status < 1) {
	      this.inc(Math.random() * this.props.trickleRate);
	    }
	  },
	
	  render: function render() {
	    var props = this.props;
	    var percent = this.state.status === null ? '-100' : toBarPercentage(this.state.status);
	    var barStyle = {
	      transition: 'all ' + props.speed + 'ms ' + props.easing,
	      transform: 'translate(' + percent + '%,0)'
	    };
	    var spinner = props.spinner ? React.createElement(
	      'div',
	      { className: 'nprogress-spinner', ref: 'spinner' },
	      React.createElement('div', { className: 'nprogress-spinner-icon' })
	    ) : null;
	
	    return this.state.status ? React.createElement(
	      'div',
	      { id: 'nprogress', ref: 'progress' },
	      React.createElement(
	        'div',
	        { className: 'nprogress-bar', ref: 'bar', style: barStyle },
	        React.createElement('div', { className: 'nprogress-peg' })
	      ),
	      spinner
	    ) : null;
	  }
	});
	
	module.exports = NProgress;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var Icon = __webpack_require__(13);
	var omit = __webpack_require__(18);
	
	var Navbar = React.createClass({
	  displayName: 'Navbar',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string,
	    theme: React.PropTypes.oneOf(['default']),
	    data: React.PropTypes.array,
	    onSelect: React.PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'navbar',
	      theme: 'default',
	      data: [],
	      onSelect: function onSelect() {}
	    };
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	    var props = omit(this.props, 'data');
	
	    return React.createElement(
	      'div',
	      _extends({}, props, {
	        'data-am-widget': this.props.classPrefix,
	        cf: true,
	        className: classNames(this.props.className, classSet) }),
	      React.createElement(
	        'ul',
	        { className: this.prefixClass('nav') },
	        this.props.data.map((function (item, i) {
	          return React.createElement(
	            'li',
	            { key: i,
	              onClick: this.props.onSelect.bind(this, item.link) },
	            React.createElement(
	              'a',
	              { href: item.link },
	              item.customIcon ? React.createElement('img', { src: item.customIcon, alt: item.title }) : item.icon ? React.createElement(Icon, { icon: item.icon }) : null,
	              item.title ? React.createElement(
	                'span',
	                { className: this.prefixClass('label') },
	                item.title
	              ) : null
	            )
	          );
	        }).bind(this))
	      )
	    );
	  }
	});
	
	module.exports = Navbar;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var Pagination = React.createClass({
	  displayName: 'Pagination',
	
	  mixins: [ClassNameMixin],
	
	  PropTypes: {
	    componentTag: React.PropTypes.node.isRequired,
	    centered: React.PropTypes.bool,
	    right: React.PropTypes.bool,
	    theme: React.PropTypes.oneOf(['default', 'select']),
	    data: React.PropTypes.object,
	    onSelect: React.PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'pagination',
	      componentTag: 'ul'
	    };
	  },
	
	  renderItem: function renderItem(type) {
	    var data = this.props.data;
	
	    return data && data[type + 'Title'] && data[type + 'Link'] ? React.createElement(
	      Pagination.Item,
	      {
	        onClick: this.props.onSelect && this.props.onSelect.bind(this, data[type + 'Link']),
	        key: type,
	        href: data[type + 'Link'],
	        className: this.prefixClass(type) },
	      data[type + 'Title']
	    ) : null;
	  },
	
	  handleChange: function handleChange(e) {
	    if (this.props.onSelect) {
	      var select = ReactDOM.findDOMNode(this.refs.select);
	
	      this.props.onSelect.call(this, select && select.value, e);
	    }
	  },
	
	  renderPages: function renderPages() {
	    var data = this.props.data;
	
	    if (data.pages) {
	      return this.props.theme === 'select' ? React.createElement(
	        'li',
	        { className: this.prefixClass('select') },
	        React.createElement(
	          'select',
	          {
	            onChange: this.handleChange,
	            ref: 'select' },
	          data.pages.map(function (page, i) {
	            return React.createElement(
	              'option',
	              { value: page.link, key: i },
	              page.title,
	              ' / ',
	              data.pages.length
	            );
	          })
	        )
	      ) : data.pages.map((function (page, i) {
	        return React.createElement(
	          Pagination.Item,
	          {
	            key: i,
	            onClick: this.props.onSelect && this.props.onSelect.bind(this, page.link),
	            active: page.active,
	            disabled: page.disabled,
	            href: page.link },
	          page.title
	        );
	      }).bind(this));
	    }
	  },
	
	  render: function render() {
	    var props = this.props;
	    var Component = props.componentTag;
	    var classSet = this.getClassSet();
	    var notSelect = props.theme !== 'select';
	
	    // .am-pagination-right
	    classSet[this.prefixClass('right')] = props.right;
	
	    // .am-pagination-centered
	    classSet[this.prefixClass('centered')] = props.centered;
	
	    return props.data ? React.createElement(
	      Component,
	      _extends({}, props, {
	        className: classNames(classSet, props.className) }),
	      notSelect && this.renderItem('first'),
	      this.renderItem('prev'),
	      this.renderPages(),
	      this.renderItem('next'),
	      notSelect && this.renderItem('last')
	    ) : React.createElement(
	      Component,
	      _extends({}, props, {
	        className: classNames(classSet, props.className) }),
	      this.props.children
	    );
	  }
	});
	
	Pagination.Item = React.createClass({
	  displayName: 'Item',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    active: React.PropTypes.bool,
	    disabled: React.PropTypes.bool,
	    prev: React.PropTypes.bool,
	    next: React.PropTypes.bool,
	    href: React.PropTypes.string,
	    componentTag: React.PropTypes.node.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'pagination',
	      href: '#',
	      componentTag: 'li'
	    };
	  },
	
	  render: function render() {
	    var Component = this.props.componentTag;
	    var classSet = this.getClassSet(true);
	    var props = this.props;
	
	    // .am-pagination-prev
	    classSet[this.prefixClass('prev')] = props.prev;
	
	    // .am-pagination-next
	    classSet[this.prefixClass('next')] = props.next;
	
	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(classSet, this.props.className) }),
	      React.createElement(
	        'a',
	        {
	          href: this.props.href,
	          title: this.props.title,
	          target: this.props.target,
	          ref: 'anchor' },
	        this.props.children
	      )
	    );
	  }
	});
	
	module.exports = Pagination;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var CollapseMixin = __webpack_require__(53);
	
	var Panel = React.createClass({
	  displayName: 'Panel',
	
	  mixins: [ClassNameMixin, CollapseMixin],
	
	  propTypes: {
	    collapsible: React.PropTypes.bool,
	    header: React.PropTypes.node,
	    footer: React.PropTypes.node,
	    id: React.PropTypes.string,
	    amStyle: React.PropTypes.string,
	    onSelect: React.PropTypes.func,
	    eventKey: React.PropTypes.any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'panel',
	      amStyle: 'default'
	    };
	  },
	
	  handleClick: function handleClick(e) {
	    e.selected = true;
	
	    if (this.props.onSelect) {
	      this.props.onSelect(e, this.props.eventKey);
	    } else {
	      e.preventDefault();
	    }
	
	    if (e.selected) {
	      this.handleToggle();
	    }
	  },
	
	  handleToggle: function handleToggle() {
	    this.setState({ expanded: !this.state.expanded });
	  },
	
	  getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
	    return ReactDOM.findDOMNode(this.refs.panel).scrollHeight;
	  },
	
	  getCollapsibleDOMNode: function getCollapsibleDOMNode() {
	    if (!this.isMounted() || !this.refs || !this.refs.panel) {
	      return null;
	    }
	
	    return ReactDOM.findDOMNode(this.refs.panel);
	  },
	
	  renderHeader: function renderHeader() {
	    if (!this.props.header) {
	      return null;
	    }
	
	    var header = this.props.header;
	
	    return React.createElement(
	      'div',
	      { className: this.prefixClass('hd') },
	      this.props.collapsible ? React.createElement(
	        'h4',
	        {
	          'data-am-collapse': true,
	          className: classNames(this.prefixClass('title'), this.isExpanded() ? null : this.setClassNamespace('collapsed')),
	          onClick: this.handleClick },
	        header
	      ) : header
	    );
	  },
	
	  renderBody: function renderBody() {
	    var bodyClass = this.prefixClass('bd');
	    var bodyChildren = this.props.children;
	    var bodyElements = [];
	    var panelBodyChildren = [];
	
	    function getProps() {
	      return {
	        key: bodyElements.length
	      };
	    }
	
	    function addFillChild(child) {
	      bodyElements.push(React.cloneElement(child, getProps()));
	    }
	
	    function addPanelBody(child) {
	      bodyElements.push(React.createElement(
	        'div',
	        _extends({ className: bodyClass }, getProps, { key: 'panelBody' }),
	        child
	      ));
	    }
	
	    function maybeRenderPanelBody() {
	      if (panelBodyChildren.length === 0) {
	        return;
	      }
	
	      addPanelBody(panelBodyChildren);
	      panelBodyChildren = [];
	    }
	
	    if (Array.isArray(bodyChildren)) {
	      bodyChildren.forEach((function (child) {
	        // props fill and isValidElement
	        if (this.shouldRenderFill(child)) {
	          maybeRenderPanelBody();
	
	          addFillChild(child);
	        } else {
	          panelBodyChildren.push(child);
	        }
	      }).bind(this));
	
	      maybeRenderPanelBody();
	    } else {
	      if (this.shouldRenderFill(bodyChildren)) {
	        addFillChild(bodyChildren);
	      } else {
	        addPanelBody(bodyChildren);
	      }
	    }
	
	    return bodyElements;
	  },
	
	  renderCollapsibleBody: function renderCollapsibleBody() {
	    var collapseClass = this.prefixClass('collapse');
	
	    return React.createElement(
	      'div',
	      {
	        className: classNames(this.getCollapsibleClassSet(collapseClass)),
	        id: this.props.id,
	        ref: 'panel' },
	      this.renderBody()
	    );
	  },
	
	  shouldRenderFill: function shouldRenderFill(child) {
	    return React.isValidElement(child) && child.props.fill;
	  },
	
	  renderFooter: function renderFooter() {
	    if (!this.props.footer) {
	      return null;
	    }
	
	    return React.createElement(
	      'div',
	      { className: this.prefixClass('footer') },
	      this.props.footer
	    );
	  },
	
	  render: function render() {
	    var classes = this.getClassSet();
	    var collapsible = this.props.collapsible;
	
	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        id: collapsible ? null : this.props.id,
	        className: classNames(classes, this.props.className) }),
	      this.renderHeader(),
	      collapsible ? this.renderCollapsibleBody() : this.renderBody(),
	      this.renderFooter()
	    );
	  }
	});
	
	module.exports = Panel;
	// just for `pointer` style

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var PanelGroup = React.createClass({
	  displayName: 'PanelGroup',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    amStyle: React.PropTypes.string,
	    activeKey: React.PropTypes.any,
	    defaultActiveKey: React.PropTypes.any,
	    onSelect: React.PropTypes.func,
	    accordion: React.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'panel-group'
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      activeKey: this.props.defaultActiveKey
	    };
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate() {
	    // Defer any updates to this component during the `onSelect` handler.
	    return !this._isChanging;
	  },
	
	  handleSelect: function handleSelect(e, key) {
	    e.preventDefault();
	
	    if (this.props.onSelect) {
	      this._isChanging = true;
	      this.props.onSelect(key);
	      this._isChanging = false;
	    }
	
	    if (this.state.activeKey === key) {
	      key = null;
	    }
	
	    this.setState({
	      activeKey: key
	    });
	  },
	
	  renderPanel: function renderPanel(child, index) {
	    var activeKey = this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;
	
	    var props = {
	      amStyle: child.props.amStyle || this.props.amStyle,
	      key: child.key ? child.key : index,
	      ref: child.ref
	    };
	
	    if (this.props.accordion) {
	      props.collapsible = true;
	      props.expanded = child.props.eventKey === activeKey;
	      props.onSelect = this.handleSelect;
	    }
	
	    return React.cloneElement(child, props);
	  },
	
	  render: function render() {
	    var classes = this.getClassSet();
	
	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        className: classNames(classes, this.props.className) }),
	      React.Children.map(this.props.children, this.renderPanel)
	    );
	  }
	});
	
	module.exports = PanelGroup;

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var Popover = React.createClass({
	  displayName: 'Popover',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string.isRequired,
	    placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
	    positionLeft: React.PropTypes.number,
	    positionTop: React.PropTypes.number,
	    amSize: React.PropTypes.oneOf(['sm', 'lg']),
	    amStyle: React.PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'popover'
	    };
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	    var style = {
	      left: this.props.positionLeft,
	      top: this.props.positionTop,
	      display: 'block'
	    };
	
	    classSet[this.setClassNamespace('active')] = true;
	    classSet[this.prefixClass(this.props.placement)] = true;
	
	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        style: style,
	        className: classNames(classSet, this.props.className) }),
	      React.createElement(
	        'div',
	        { className: this.prefixClass('inner') },
	        this.props.children
	      ),
	      React.createElement('div', { className: this.prefixClass('caret') })
	    );
	  }
	});
	
	module.exports = Popover;

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	var cloneElement = React.cloneElement;
	var OverlayMixin = __webpack_require__(68);
	var assign = __webpack_require__(44);
	var dom = __webpack_require__(43);
	var createChainedFunction = __webpack_require__(42);
	
	function isOneOf(one, of) {
	  if (Array.isArray(of)) {
	    return of.indexOf(one) >= 0;
	  }
	  return one === of;
	}
	
	var PopoverTrigger = React.createClass({
	  displayName: 'PopoverTrigger',
	
	  mixins: [OverlayMixin],
	
	  propTypes: {
	    trigger: React.PropTypes.oneOfType([React.PropTypes.oneOf(['click', 'hover', 'focus']), React.PropTypes.arrayOf(React.PropTypes.oneOf(['click', 'hover', 'focus']))]),
	    placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
	    delay: React.PropTypes.number,
	    delayOpen: React.PropTypes.number,
	    delayClose: React.PropTypes.number,
	    defaultPopoverActive: React.PropTypes.bool,
	    popover: React.PropTypes.node.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      placement: 'right',
	      trigger: ['hover', 'focus']
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      isPopoverActive: this.props.defaultPopoverActive == null ? false : this.props.defaultPopoverActive,
	      popoverLeft: null,
	      popoverTop: null
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    if (this.props.defaultPopoverActive) {
	      this.updatePopoverPosition();
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    clearTimeout(this._hoverDelay);
	  },
	
	  open: function open() {
	    this.setState({
	      isPopoverActive: true
	    }, function () {
	      this.updatePopoverPosition();
	    });
	  },
	
	  close: function close() {
	    this.setState({
	      isPopoverActive: false
	    });
	  },
	
	  toggle: function toggle() {
	    this.state.isPopoverActive ? this.close() : this.open();
	  },
	
	  handleDelayedOpen: function handleDelayedOpen() {
	    if (this._hoverDelay != null) {
	      clearTimeout(this._hoverDelay);
	      this._hoverDelay = null;
	      return;
	    }
	
	    var delay = this.props.delayOpen != null ? this.props.delayOpen : this.props.delay;
	
	    if (!delay) {
	      this.open();
	      return;
	    }
	
	    this._hoverDelay = setTimeout((function () {
	      this._hoverDelay = null;
	      this.open();
	    }).bind(this), delay);
	  },
	
	  handleDelayedClose: function handleDelayedClose() {
	    if (this._hoverDelay != null) {
	      clearTimeout(this._hoverDelay);
	      this._hoverDelay = null;
	      return;
	    }
	
	    var delay = this.props.delayClose != null ? this.props.delayClose : this.props.delay;
	
	    if (!delay) {
	      this.close();
	      return;
	    }
	
	    this._hoverDelay = setTimeout((function () {
	      this._hoverDelay = null;
	      this.close();
	    }).bind(this), delay);
	  },
	
	  updatePopoverPosition: function updatePopoverPosition() {
	    if (!this.isMounted()) {
	      return;
	    }
	
	    var position = this.calcPopoverPosition();
	
	    this.setState({
	      popoverLeft: position.left,
	      popoverTop: position.top
	    });
	  },
	
	  calcPopoverPosition: function calcPopoverPosition() {
	    var childOffset = this.getPosition();
	    var popoverNode = this.getOverlayDOMNode();
	    var popoverHeight = popoverNode.offsetHeight;
	    var popoverWidth = popoverNode.offsetWidth;
	    var caretSize = 8;
	
	    switch (this.props.placement) {
	      case 'right':
	        return {
	          top: childOffset.top + childOffset.height / 2 - popoverHeight / 2,
	          left: childOffset.left + childOffset.width + caretSize
	        };
	      case 'left':
	        return {
	          top: childOffset.top + childOffset.height / 2 - popoverHeight / 2,
	          left: childOffset.left - popoverWidth - caretSize
	        };
	      case 'top':
	        return {
	          top: childOffset.top - popoverHeight - caretSize,
	          left: childOffset.left + childOffset.width / 2 - popoverWidth / 2
	        };
	      case 'bottom':
	        return {
	          top: childOffset.top + childOffset.height + caretSize,
	          left: childOffset.left + childOffset.width / 2 - popoverWidth / 2
	        };
	      default:
	        throw new Error('calcPopoverPosition(): No such placement of [' + this.props.placement + '] found.');
	    }
	  },
	
	  getPosition: function getPosition() {
	    var node = ReactDOM.findDOMNode(this);
	    var container = this.getContainerDOMNode();
	
	    var offset = container.tagName === 'BODY' ? dom.offset(node) : dom.position(node, container);
	
	    return assign({}, offset, {
	      height: node.offsetHeight,
	      width: node.offsetWidth
	    });
	  },
	
	  // used by Mixin
	  renderOverlay: function renderOverlay() {
	    if (!this.state.isPopoverActive) {
	      return React.createElement('span', null);
	    }
	
	    var popover = this.props.popover;
	
	    return cloneElement(this.props.popover, {
	      onRequestHide: this.close,
	      placement: this.props.placement,
	      positionLeft: this.state.popoverLeft,
	      positionTop: this.state.popoverTop,
	      amStyle: popover.props.amStyle || this.props.amStyle,
	      amSize: popover.props.amSize || this.props.amSize
	    });
	  },
	
	  render: function render() {
	    var child = React.Children.only(this.props.children);
	
	    var props = {};
	
	    props.onClick = createChainedFunction(child.props.onClick, this.props.onClick);
	
	    if (isOneOf('click', this.props.trigger)) {
	      props.onClick = createChainedFunction(this.toggle, props.onClick);
	    }
	
	    if (isOneOf('hover', this.props.trigger)) {
	      props.onMouseOver = createChainedFunction(this.handleDelayedOpen, this.props.onMouseOver);
	      props.onMouseOut = createChainedFunction(this.handleDelayedClose, this.props.onMouseOut);
	    }
	
	    if (isOneOf('focus', this.props.trigger)) {
	      props.onFocus = createChainedFunction(this.handleDelayedOpen, this.props.onFocus);
	      props.onBlur = createChainedFunction(this.handleDelayedClose, this.props.onBlur);
	    }
	
	    return cloneElement(child, props);
	  }
	});
	
	module.exports = PopoverTrigger;

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var Progress = React.createClass({
	  displayName: 'Progress',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    now: React.PropTypes.number,
	    label: React.PropTypes.string,
	    active: React.PropTypes.bool,
	    striped: React.PropTypes.bool,
	    amSize: React.PropTypes.string,
	    amStyle: React.PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'progress'
	    };
	  },
	
	  renderProgressBar: function renderProgressBar() {
	    var styleSheet = {
	      width: this.props.now + '%'
	    };
	    var classes = {};
	    var prefix = this.prefixClass('bar');
	    var amStyle = this.props.amStyle;
	
	    // set am-progress-bar
	    classes[prefix] = true;
	
	    if (amStyle) {
	      classes[prefix + '-' + amStyle] = true;
	    }
	
	    return React.createElement(
	      'div',
	      {
	        className: classNames(classes),
	        style: styleSheet,
	        role: 'progressbar' },
	      this.props.label
	    );
	  },
	
	  renderChildBar: function renderChildBar(child, index) {
	    return React.cloneElement(child, {
	      isChild: true,
	      key: child.key ? child.key : index
	    });
	  },
	
	  render: function render() {
	    var classes = this.getClassSet();
	
	    // set class
	    classes[this.prefixClass('striped')] = this.props.striped;
	
	    if (this.props.active) {
	      classes[this.prefixClass('striped')] = true;
	    }
	
	    if (!this.props.children) {
	      if (!this.props.isChild) {
	        return React.createElement(
	          'div',
	          _extends({}, this.props, {
	            className: classNames(classes, this.props.className)
	          }),
	          this.renderProgressBar()
	        );
	      } else {
	        return this.renderProgressBar();
	      }
	    } else {
	      return React.createElement(
	        'div',
	        _extends({}, this.props, {
	          className: classNames(classes, this.props.className)
	        }),
	        React.Children.map(this.props.children, this.renderChildBar)
	      );
	    }
	  }
	});
	
	module.exports = Progress;
	
	// Todo: 删除无用 class
	//     : key ref 处理问题

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	var cloneElement = React.cloneElement;
	var assign = __webpack_require__(44);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var isInViewport = __webpack_require__(109);
	var Events = __webpack_require__(21);
	var TransitionEvents = __webpack_require__(70);
	var requestAnimationFrame = __webpack_require__(71);
	var debounce = __webpack_require__(54);
	
	var ScrollSpy = React.createClass({
	  displayName: 'ScrollSpy',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    animation: React.PropTypes.string,
	    delay: React.PropTypes.number,
	    repeat: React.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: 'fade',
	      delay: 0,
	      repeat: false
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      inViewport: false
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.checkRAF();
	
	    var debounced = debounce(this.checkRAF, 60).bind(this);
	
	    this._scrollListener = Events.on(window, 'scroll', this.checkRAF);
	    this._resizeListener = Events.on(window, 'resize', debounced);
	    this._orientationListener = Events.on(window, 'orientationchange', debounced);
	  },
	
	  componentWillMount: function componentWillMount() {
	    this._scrollListener && this._scrollListener.off();
	    this._resizeListener && this._resizeListener.off();
	    this._orientationListener && this._orientationListener.off();
	    clearTimeout(this._timer);
	  },
	
	  checkIsInView: function checkIsInView() {
	    if (!TransitionEvents.support.animationend) {
	      return;
	    }
	
	    if (this.isMounted) {
	      var isInView = isInViewport(ReactDOM.findDOMNode(this));
	
	      if (isInView && !this.state.inViewport) {
	        if (this._timer) {
	          clearTimeout(this._timer);
	        }
	
	        this._timer = setTimeout((function () {
	          this.setState({
	            inViewport: true
	          });
	        }).bind(this), this.props.delay);
	      }
	
	      if (this.props.repeat && !isInView) {
	        this.setState({
	          inViewport: false
	        });
	      }
	    }
	  },
	
	  checkRAF: function checkRAF() {
	    requestAnimationFrame(this.checkIsInView);
	  },
	
	  render: function render() {
	    var animation = this.state.inViewport ? this.setClassNamespace('animation-' + this.props.animation) : null;
	    var child = React.Children.only(this.props.children);
	
	    // transfer child's props to cloned element
	    return cloneElement(child, assign({}, child.props, {
	      className: classNames(child.props.className, animation),
	      'data-am-scrollspy': 'animation', // style helper
	      delay: this.props.delay
	    }));
	  }
	});
	
	module.exports = ScrollSpy;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	var cloneElement = React.cloneElement;
	var assign = __webpack_require__(44);
	var classNames = __webpack_require__(4);
	var SmoothScrollMixin = __webpack_require__(69);
	var isInViewport = __webpack_require__(109);
	var Events = __webpack_require__(21);
	var requestAnimationFrame = __webpack_require__(71);
	var debounce = __webpack_require__(54);
	var CSSCore = __webpack_require__(41);
	var domUtils = __webpack_require__(43);
	var createChainedFunction = __webpack_require__(42);
	var constants = __webpack_require__(26);
	
	var ScrollSpyNav = React.createClass({
	  displayName: 'ScrollSpyNav',
	
	  mixins: [SmoothScrollMixin],
	
	  propTypes: {
	    activeClass: React.PropTypes.string,
	    offsetTop: React.PropTypes.number
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      activeClass: constants.CLASSES.active
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    this._init();
	    this.checkRAF();
	
	    var debounced = debounce(this.checkRAF, 100).bind(this);
	
	    this._scrollListener = Events.on(window, 'scroll', this.checkRAF);
	    this._resizeListener = Events.on(window, 'resize', debounced);
	    this._orientationListener = Events.on(window, 'orientationchange', debounced);
	  },
	
	  componentWillMount: function componentWillMount() {
	    this._scrollListener && this._scrollListener.off();
	    this._resizeListener && this._resizeListener.off();
	    this._orientationListener && this._orientationListener.off();
	  },
	
	  _init: function _init() {
	    this._linkNodes = ReactDOM.findDOMNode(this).querySelectorAll('a[href^="#"]');
	    this._anchorNodes = [];
	
	    Array.prototype.forEach.call(this._linkNodes, (function (link) {
	      var anchor = document.getElementById(link.getAttribute('href').substr(1));
	
	      if (anchor) {
	        this._anchorNodes.push(anchor);
	      }
	    }).bind(this));
	  },
	
	  checkIsInView: function checkIsInView() {
	    if (this.isMounted) {
	      var inViewsNodes = [];
	
	      this._anchorNodes.forEach(function (anchor) {
	        if (isInViewport(anchor)) {
	          inViewsNodes.push(anchor);
	        }
	      });
	
	      if (inViewsNodes.length) {
	        var targetNode;
	
	        inViewsNodes.every(function (node) {
	          if (domUtils.offset(node).top >= domUtils.scrollTop(window)) {
	            targetNode = node;
	            return false; // break loop
	          }
	          return true;
	        });
	
	        if (!targetNode) {
	          return;
	        }
	
	        Array.prototype.forEach.call(this._linkNodes, (function (link) {
	          CSSCore.removeClass(link, this.props.activeClass);
	        }).bind(this));
	
	        var targetLink = ReactDOM.findDOMNode(this).querySelector('a[href="#' + targetNode.id + '"]');
	
	        targetLink && CSSCore.addClass(targetLink, this.props.activeClass);
	      }
	    }
	  },
	
	  checkRAF: function checkRAF() {
	    requestAnimationFrame(this.checkIsInView);
	  },
	
	  // Smooth scroll
	  handleClick: function handleClick(e) {
	    e.preventDefault();
	
	    if (e.target && e.target.nodeName === 'A') {
	      var targetNode = document.getElementById(e.target.getAttribute('href').substr(1));
	
	      targetNode && this.smoothScroll(window, {
	        position: domUtils.offset(targetNode).top - this.props.offsetTop || 0
	      });
	    }
	  },
	
	  render: function render() {
	    var child = React.Children.only(this.props.children);
	
	    // transfer child's props to cloned element
	    return cloneElement(child, assign({}, this.props, child.props, {
	      onClick: createChainedFunction(this.handleClick, child.props.onClick),
	      className: classNames(this.props.className, child.props.className)
	    }));
	  }
	});
	
	module.exports = ScrollSpyNav;
	
	// TODO: improve in view logic

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var Dropdown = __webpack_require__(104);
	var Icon = __webpack_require__(13);
	var Input = __webpack_require__(40);
	
	var Selected = React.createClass({
	  displayName: 'Selected',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string,
	    data: React.PropTypes.array.isRequired,
	    placeholder: React.PropTypes.string,
	    value: React.PropTypes.string,
	    multiple: React.PropTypes.bool,
	    searchBox: React.PropTypes.bool,
	    name: React.PropTypes.string,
	    onChange: React.PropTypes.func,
	    optionFilter: React.PropTypes.func,
	    dropup: React.PropTypes.bool,
	    btnWidth: React.PropTypes.number,
	    btnStyle: React.PropTypes.string,
	    maxHeight: React.PropTypes.number,
	
	    // delimiter to use to join multiple values
	    delimiter: React.PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'selected',
	      placeholder: '点击选择...',
	      onChange: function onChange() {},
	      delimiter: ',',
	      optionFilter: function optionFilter(filterText, option) {
	        return option.label.toLowerCase().indexOf(filterText) > -1;
	      }
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      value: this.props.value,
	      dropdownWidth: null,
	      filterText: null
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.setDropdownWidth();
	  },
	
	  setDropdownWidth: function setDropdownWidth() {
	    if (this.isMounted) {
	      var toggleButton = ReactDOM.findDOMNode(this.refs.dropdown.refs.dropdownToggle);
	
	      toggleButton && this.setState({ dropdownWidth: toggleButton.offsetWidth });
	    }
	  },
	
	  getValueArray: function getValueArray() {
	    return this.state.value ? this.state.value.split(this.props.delimiter) : [];
	  },
	
	  hasValue: function hasValue(value) {
	    return this.getValueArray().indexOf(value) > -1;
	  },
	
	  setValue: function setValue(value, callback) {
	    this.setState({
	      value: value
	    }, function () {
	      this.props.onChange(value);
	      callback && callback();
	    });
	  },
	
	  handleCheck: function handleCheck(option, e) {
	    e.preventDefault();
	
	    var clickedValue = option.value;
	
	    // multiple select
	    if (this.props.multiple) {
	      var values = this.getValueArray();
	
	      if (this.hasValue(clickedValue)) {
	        values.splice(values.indexOf(clickedValue), 1);
	      } else {
	        values.push(clickedValue);
	      }
	
	      this.setValue(values.join(this.props.delimiter));
	    } else {
	      this.setValue(clickedValue);
	      this.refs.dropdown.setDropdownState(false);
	    }
	  },
	
	  handleUserInput: function handleUserInput(e) {
	    e.preventDefault();
	
	    this.setState({
	      filterText: ReactDOM.findDOMNode(this.refs.filterInput).value
	    });
	  },
	
	  // clear filter
	  clearFilterInput: function clearFilterInput() {
	    if (this.props.multiple && this.props.searchBox) {
	      this.setState({
	        filterText: null
	      });
	      ReactDOM.findDOMNode(this.refs.filterInput).value = null;
	    }
	  },
	
	  // API for getting component value
	  getValue: function getValue() {
	    return this.state.value;
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	    var selectedLabel = [];
	    var items = [];
	    var filterText = this.state.filterText;
	    var groupHeader;
	
	    this.props.data.forEach((function (option, i) {
	      var checked = this.hasValue(option.value);
	      var checkedClass = checked ? this.setClassNamespace('checked') : null;
	      var checkedIcon = checked ? React.createElement(Icon, { icon: 'check' }) : null;
	
	      checked && selectedLabel.push(option.label);
	
	      // add group header
	      if (option.group && groupHeader !== option.group) {
	        groupHeader = option.group;
	        items.push(React.createElement(
	          'li',
	          {
	            className: this.prefixClass('list-header'),
	            key: 'header' + i },
	          groupHeader
	        ));
	      }
	
	      if (filterText && !this.props.optionFilter(filterText, option)) {
	        return;
	      }
	
	      items.push(React.createElement(
	        'li',
	        {
	          className: checkedClass,
	          onClick: this.handleCheck.bind(this, option),
	          key: i },
	        React.createElement(
	          'span',
	          { className: this.prefixClass('text') },
	          option.label
	        ),
	        checkedIcon
	      ));
	    }).bind(this));
	
	    var status = React.createElement(
	      'span',
	      {
	        className: classNames(this.prefixClass('status'), this.setClassNamespace('fl')) },
	      selectedLabel.length ? selectedLabel.join(', ') : React.createElement(
	        'span',
	        { className: this.prefixClass('placeholder ') },
	        this.props.placeholder
	      )
	    );
	    var optionsStyle = {};
	
	    if (this.props.maxHeight) {
	      optionsStyle = {
	        maxHeight: this.props.maxHeight,
	        overflowY: 'scroll'
	      };
	    }
	
	    return React.createElement(
	      Dropdown,
	      {
	        className: classNames(this.props.className, classSet),
	        title: status,
	        onClose: this.clearFilterInput,
	        btnStyle: this.props.btnStyle,
	        btnInlineStyle: { width: this.props.btnWidth },
	        contentInlineStyle: { minWidth: this.state.dropdownWidth },
	        toggleClassName: this.prefixClass('btn'),
	        caretClassName: this.prefixClass('icon'),
	        contentClassName: this.prefixClass('content'),
	        contentTag: 'div',
	        dropup: this.props.dropup,
	        ref: 'dropdown' },
	      this.props.searchBox ? React.createElement(
	        'div',
	        { className: this.prefixClass('search') },
	        React.createElement(Input, {
	          onChange: this.handleUserInput,
	          autoComplete: 'off',
	          standalone: true,
	          ref: 'filterInput' })
	      ) : null,
	      React.createElement(
	        'ul',
	        {
	          style: optionsStyle,
	          className: this.prefixClass('list') },
	        items
	      ),
	      React.createElement('input', {
	        name: this.props.name,
	        type: 'hidden',
	        ref: 'selectedField',
	        value: this.state.value })
	    );
	  }
	});
	
	module.exports = Selected;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var TransitionEvents = __webpack_require__(70);
	
	//React.initializeTouchEvents(true);
	
	var Slider = React.createClass({
	  displayName: 'Slider',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    theme: React.PropTypes.oneOf(['default', 'a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'c1', 'c2', 'c3', 'c4', 'd1', 'd2', 'd3']),
	    directionNav: React.PropTypes.bool, // prev/next icon
	    controlNav: React.PropTypes.bool,
	
	    animation: React.PropTypes.string, // not working
	    slide: React.PropTypes.bool,
	    autoPlay: React.PropTypes.bool,
	    slideSpeed: React.PropTypes.number, // interval
	    loop: React.PropTypes.bool, // loop slide
	
	    pauseOnHover: React.PropTypes.bool,
	    touch: React.PropTypes.bool, // TODO: add touch support
	
	    onSelect: React.PropTypes.func,
	    onSlideEnd: React.PropTypes.func,
	    activeIndex: React.PropTypes.number,
	    defaultActiveIndex: React.PropTypes.number,
	    direction: React.PropTypes.oneOf(['prev', 'next'])
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'slider',
	      theme: 'default',
	      directionNav: true,
	      controlNav: true,
	      slide: true,
	      autoPlay: true,
	      loop: true,
	      slideSpeed: 5000,
	      pauseOnHover: true
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      activeIndex: this.props.defaultActiveIndex == null ? 0 : this.props.defaultActiveIndex,
	      previousActiveIndex: null,
	      direction: null
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var activeIndex = this.getActiveIndex();
	
	    if (nextProps.activeIndex != null && nextProps.activeIndex !== activeIndex) {
	      clearTimeout(this.timeout);
	      this.setState({
	        previousActiveIndex: activeIndex,
	        direction: nextProps.direction != null ? nextProps.direction : this.getDirection(activeIndex, nextProps.activeIndex)
	      });
	    }
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.props.autoPlay && this.waitForNext();
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    clearTimeout(this.timeout);
	  },
	
	  getDirection: function getDirection(prevIndex, index) {
	    if (prevIndex === index) {
	      return null;
	    }
	
	    return prevIndex > index ? 'prev' : 'next';
	  },
	
	  next: function next(e) {
	    e && e.preventDefault();
	
	    var index = this.getActiveIndex() + 1;
	    var count = React.Children.count(this.props.children);
	
	    if (index > count - 1) {
	      if (!this.props.loop) {
	        return;
	      }
	      index = 0;
	    }
	
	    this.handleSelect(index, 'next');
	  },
	
	  prev: function prev(e) {
	    e && e.preventDefault();
	
	    var index = this.getActiveIndex() - 1;
	
	    if (index < 0) {
	      if (!this.props.loop) {
	        return;
	      }
	      index = React.Children.count(this.props.children) - 1;
	    }
	
	    this.handleSelect(index, 'prev');
	  },
	
	  pause: function pause() {
	    this.isPaused = true;
	    clearTimeout(this.timeout);
	  },
	
	  play: function play() {
	    this.isPaused = false;
	    this.waitForNext();
	  },
	
	  waitForNext: function waitForNext() {
	    if (!this.isPaused && this.props.slide && this.props.slideSpeed && this.props.activeIndex == null) {
	      this.timeout = setTimeout(this.next, this.props.slideSpeed);
	    }
	  },
	
	  handleMouseOver: function handleMouseOver() {
	    if (this.props.pauseOnHover) {
	      this.pause();
	    }
	  },
	
	  handleMouseOut: function handleMouseOut() {
	    if (this.isPaused) {
	      this.play();
	    }
	  },
	
	  getActiveIndex: function getActiveIndex() {
	    return this.props.activeIndex != null ? this.props.activeIndex : this.state.activeIndex;
	  },
	
	  handleItemAnimateOutEnd: function handleItemAnimateOutEnd() {
	    this.setState({
	      previousActiveIndex: null,
	      direction: null
	    }, function () {
	      this.waitForNext();
	
	      if (this.props.onSlideEnd) {
	        this.props.onSlideEnd();
	      }
	    });
	  },
	
	  handleSelect: function handleSelect(index, direction, e) {
	    e && e.preventDefault();
	    clearTimeout(this.timeout);
	
	    var previousActiveIndex = this.getActiveIndex();
	
	    direction = direction || this.getDirection(previousActiveIndex, index);
	
	    if (this.props.onSelect) {
	      this.props.onSelect(index, direction);
	    }
	
	    if (this.props.activeIndex == null && index !== previousActiveIndex) {
	      if (this.state.previousActiveIndex != null) {
	        // If currently animating don't activate the new index.
	        // TODO: look into queuing this canceled call and
	        // animating after the current animation has ended.
	        return;
	      }
	
	      this.setState({
	        activeIndex: index,
	        previousActiveIndex: previousActiveIndex,
	        direction: direction
	      });
	    }
	  },
	
	  renderDirectionNav: function renderDirectionNav() {
	    return this.props.directionNav ? React.createElement(
	      'ul',
	      { className: this.setClassNamespace('direction-nav') },
	      React.createElement(
	        'li',
	        null,
	        React.createElement(
	          'a',
	          {
	            onClick: this.prev,
	            className: this.setClassNamespace('prev'),
	            href: '#prev' },
	          'Previous'
	        )
	      ),
	      React.createElement(
	        'li',
	        null,
	        React.createElement(
	          'a',
	          {
	            onClick: this.next,
	            className: this.setClassNamespace('next'),
	            href: '#next' },
	          'Next'
	        )
	      )
	    ) : null;
	  },
	
	  renderControlNav: function renderControlNav() {
	    if (this.props.controlNav) {
	      var isThumbnailNav = false;
	      var children = React.Children.map(this.props.children, (function (child, i) {
	        var className = i === this.getActiveIndex() ? this.setClassNamespace('active') : null;
	
	        if (!isThumbnailNav) {
	          isThumbnailNav = !!child.props.thumbnail;
	        }
	
	        var thumb = child.props.thumbnail;
	
	        return React.createElement(
	          'li',
	          {
	            onClick: this.handleSelect.bind(this, i, null),
	            key: i },
	          thumb ? React.createElement('img', { className: className, src: thumb }) : React.createElement('a', { href: '#' + i, className: className }),
	          React.createElement('i', null)
	        );
	      }).bind(this));
	      var controlClass = this.setClassNamespace('control-' + (isThumbnailNav ? 'thumbs' : 'paging'));
	
	      return React.createElement(
	        'ol',
	        {
	          className: classNames(this.setClassNamespace('control-nav'), controlClass) },
	        children
	      );
	    }
	
	    return null;
	  },
	
	  renderItem: function renderItem(child, index) {
	    var activeIndex = this.getActiveIndex();
	    var isActive = index === activeIndex;
	    var isPreviousActive = this.state.previousActiveIndex != null && this.state.previousActiveIndex === index && this.props.slide;
	
	    return React.cloneElement(child, {
	      active: isActive,
	      ref: child.ref,
	      key: child.key ? child.key : index,
	      index: index,
	      animateOut: isPreviousActive,
	      animateIn: isActive && this.state.previousActiveIndex != null && this.props.slide,
	      direction: this.state.direction,
	      onAnimateOutEnd: isPreviousActive ? this.handleItemAnimateOutEnd : null
	    });
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	    var viewportStyle = {
	      overflow: 'hidden',
	      position: 'relative',
	      width: '100%'
	    };
	
	    // React version slider style
	    classSet[this.prefixClass('slide')] = true;
	
	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        className: classNames(classSet, this.props.className),
	        onMouseOver: this.handleMouseOver,
	        onMouseOut: this.handleMouseOut }),
	      React.createElement(
	        'div',
	        {
	          className: this.setClassNamespace('viewport'),
	          style: viewportStyle },
	        React.createElement(
	          'ul',
	          { className: this.setClassNamespace('slides') },
	          React.Children.map(this.props.children, this.renderItem)
	        )
	      ),
	      this.renderDirectionNav(),
	      this.renderControlNav()
	    );
	  }
	});
	
	Slider.Item = React.createClass({
	  displayName: 'Item',
	
	  propTypes: {
	    direction: React.PropTypes.oneOf(['prev', 'next']),
	    onAnimateOutEnd: React.PropTypes.func,
	    active: React.PropTypes.bool,
	    animateIn: React.PropTypes.bool,
	    animateOut: React.PropTypes.bool,
	    caption: React.PropTypes.node,
	    index: React.PropTypes.number,
	    thumbnail: React.PropTypes.string
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      direction: null
	    };
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: true
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this.props.active !== nextProps.active) {
	      this.setState({
	        direction: null
	      });
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    if (!this.props.active && prevProps.active) {
	      TransitionEvents.on(ReactDOM.findDOMNode(this), this.handleAnimateOutEnd);
	    }
	
	    if (this.props.active !== prevProps.active) {
	      setTimeout(this.startAnimation, 20);
	    }
	  },
	
	  handleAnimateOutEnd: function handleAnimateOutEnd() {
	    if (this.props.onAnimateOutEnd && this.isMounted()) {
	      this.props.onAnimateOutEnd(this.props.index);
	    }
	  },
	
	  startAnimation: function startAnimation() {
	    if (!this.isMounted()) {
	      return;
	    }
	
	    this.setState({
	      direction: this.props.direction === 'prev' ? 'right' : 'left'
	    });
	  },
	
	  render: function render() {
	    var classSet = {
	      active: this.props.active && !this.props.animateIn || this.props.animateOut,
	      next: this.props.active && this.props.animateIn && this.props.direction === 'next',
	      prev: this.props.active && this.props.animateIn && this.props.direction === 'prev'
	    };
	
	    if (this.state.direction && (this.props.animateIn || this.props.animateOut)) {
	      classSet[this.state.direction] = true;
	    }
	
	    return React.createElement(
	      'li',
	      {
	        className: classNames(this.props.className, classSet) },
	      this.props.children
	    );
	  }
	});
	
	module.exports = Slider;

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(8);
	var assign = __webpack_require__(44);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var Events = __webpack_require__(21);
	var debounce = __webpack_require__(54);
	var domUtils = __webpack_require__(43);
	
	var Sticky = React.createClass({
	  displayName: 'Sticky',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string,
	    media: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	    top: React.PropTypes.number,
	    animation: React.PropTypes.string,
	    bottom: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.func])
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'sticky',
	      top: 0
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      sticked: false,
	      holderStyle: null,
	      initialized: false,
	      stickerStyle: null
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    this._init();
	    this.checkPosition();
	    var ownerWindow = domUtils.ownerWindow(ReactDOM.findDOMNode(this.refs.sticker));
	
	    this._scrollListener = Events.on(ownerWindow, 'scroll', debounce(this.checkPosition, 10).bind(this));
	    this._resizeListener = Events.on(ownerWindow, 'resize', debounce(this.checkPosition, 50).bind(this));
	  },
	
	  componentWillMount: function componentWillMount() {
	    this._scrollListener && this._scrollListener.off();
	    this._resizeListener && this._resizeListener.off();
	  },
	
	  _init: function _init() {
	    if (this.state.initialized || !this.isMounted || !this.checkMedia()) {
	      return;
	    }
	
	    var sticker = ReactDOM.findDOMNode(this.refs.sticker);
	    var elStyle = getComputedStyle(sticker);
	    var outerHeight = parseInt(elStyle.height, 10) + parseInt(elStyle.marginTop, 10) + parseInt(elStyle.marginBottom, 10);
	    var style = {
	      height: elStyle.position !== 'absolute' ? outerHeight : '',
	      float: elStyle.float !== 'none' ? elStyle.float : '',
	      margin: elStyle.margin
	    };
	
	    this.setState({
	      initialized: true,
	      holderStyle: style,
	      stickerStyle: {
	        margin: 0
	      }
	    });
	  },
	
	  checkPosition: function checkPosition() {
	    if (this.isMounted) {
	      var scrollTop = domUtils.scrollTop(window);
	      var offsetTop = this.props.top;
	      var offsetBottom = this.props.bottom;
	      var holder = ReactDOM.findDOMNode(this);
	
	      if (typeof offsetBottom === 'function') {
	        offsetBottom = offsetBottom();
	      }
	
	      var checkResult = scrollTop > domUtils.offset(holder).top;
	
	      if (checkResult && !this.state.sticked) {
	        this.setState({
	          stickerStyle: {
	            top: offsetTop,
	            left: domUtils.offset(holder).left,
	            width: holder.offsetWidth
	          }
	        });
	      }
	
	      if (this.state.sticked && !checkResult) {
	        this.resetSticker();
	      }
	
	      this.setState({
	        sticked: checkResult
	      });
	    }
	  },
	
	  checkMedia: function checkMedia() {
	    // TODO: add element visible detector
	    /*if (!this.$element.is(':visible')) {
	     return false;
	     }*/
	
	    var media = this.props.media;
	
	    if (media) {
	      switch (typeof media) {
	        case 'number':
	          if (window.innerWidth < media) {
	            return false;
	          }
	          break;
	
	        case 'string':
	          if (window.matchMedia && !window.matchMedia(media).matches) {
	            return false;
	          }
	          break;
	      }
	    }
	
	    return true;
	  },
	
	  resetSticker: function resetSticker() {
	    this.setState({
	      stickerStyle: {
	        position: '',
	        top: '',
	        width: '',
	        left: '',
	        margin: 0
	      }
	    });
	  },
	
	  // Smooth scroll
	  handleClick: function handleClick(e) {
	    e.preventDefault();
	
	    if (e.target && e.target.nodeName === 'A') {
	      var targetNode = document.getElementById(e.target.getAttribute('href').substr(1));
	
	      targetNode && this.smoothScroll(window, {
	        position: domUtils.offset(targetNode).top - this.props.offsetTop || 0
	      });
	    }
	  },
	
	  render: function render() {
	    var stickyClass = this.getClassSet();
	    var child = React.Children.only(this.props.children);
	    var animation = this.props.animation && this.state.sticked ? this.setClassNamespace('animation-' + this.props.animation) : null;
	
	    // transfer child's props to cloned element
	    return React.createElement(
	      'div',
	      _extends({}, this.props, {
	        style: this.state.holderStyle,
	        className: classNames(this.props.className, this.prefixClass('placeholder')) }),
	      React.cloneElement(child, assign({}, child.props, {
	        style: this.state.stickerStyle,
	        ref: 'sticker',
	        className: classNames(child.props.className, this.state.sticked ? stickyClass : null, animation)
	      }))
	    );
	  }
	});
	
	module.exports = Sticky;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	
	var Table = React.createClass({
	  displayName: 'Table',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string.isRequired,
	    bordered: React.PropTypes.bool,
	    compact: React.PropTypes.bool,
	    hover: React.PropTypes.bool,
	    striped: React.PropTypes.bool,
	    radius: React.PropTypes.bool,
	    responsive: React.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'table'
	    };
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	    var responsive = this.props.responsive;
	
	    classSet[this.prefixClass('bordered')] = this.props.bordered;
	    classSet[this.prefixClass('compact')] = this.props.compact;
	    classSet[this.prefixClass('hover')] = this.props.hover;
	    classSet[this.prefixClass('striped')] = this.props.striped;
	    classSet[this.prefixClass('radius')] = this.props.radius;
	
	    // add `.am-text-nowrap` to responsive table
	    classSet[this.setClassNamespace('text-nowrap')] = responsive;
	
	    var table = React.createElement(
	      'table',
	      _extends({}, this.props, {
	        className: classNames(this.props.className, classSet) }),
	      this.props.children
	    );
	
	    return responsive ? React.createElement(
	      'div',
	      { className: this.setClassNamespace('scrollable-horizontal') },
	      table
	    ) : table;
	  }
	});
	
	module.exports = Table;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var omit = __webpack_require__(18);
	var ClassNameMixin = __webpack_require__(3);
	var Nav = __webpack_require__(106);
	var NavItem = __webpack_require__(107);
	
	var Tabs = React.createClass({
	  displayName: 'Tabs',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    theme: React.PropTypes.oneOf(['default', 'd2']),
	    onSelect: React.PropTypes.func,
	    animation: React.PropTypes.oneOf(['slide', 'fade']),
	    defaultActiveKey: React.PropTypes.any,
	    justify: React.PropTypes.bool,
	    data: React.PropTypes.array
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'tabs',
	      animation: 'fade'
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var defaultActiveKey = this.props.defaultActiveKey != null ? this.props.defaultActiveKey : this.getDefaultActiveKey(this.props.children);
	
	    return {
	      activeKey: defaultActiveKey,
	      previousActiveKey: null
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.activeKey != null && nextProps.activeKey !== this.props.activeKey) {
	      this.setState({
	        previousActiveKey: this.props.activeKey
	      });
	    }
	  },
	
	  getDefaultActiveKey: function getDefaultActiveKey(children) {
	    var defaultActiveKey = null;
	
	    if (this.props.data) {
	      this.props.data.every(function (item, i) {
	        if (item.active) {
	          defaultActiveKey = i;
	          return false;
	        }
	
	        return true;
	      });
	
	      return defaultActiveKey == null ? 0 : defaultActiveKey;
	    }
	
	    React.Children.forEach(children, function (child) {
	      if (defaultActiveKey == null) {
	        defaultActiveKey = child.props.eventKey;
	      }
	    });
	
	    return defaultActiveKey;
	  },
	
	  handleClick: function handleClick(key, disabled, e) {
	    e.preventDefault();
	    var activeKey = this.state.activeKey;
	
	    if (disabled) {
	      return null;
	    }
	
	    if (this.props.onSelect) {
	      this.props.onSelect(key);
	    }
	
	    if (activeKey !== key) {
	      this.setState({
	        activeKey: key,
	        previousActiveKey: activeKey
	      });
	    }
	  },
	
	  renderNav: function renderNav() {
	    var activeKey = this.state.activeKey;
	
	    return React.Children.map(this.props.children, (function (child, index) {
	      var key = child.props.key || child.props.eventKey || index;
	      var disabled = child.props.disabled;
	
	      return React.createElement(
	        NavItem,
	        {
	          href: '#',
	          ref: 'ref' + key,
	          key: key,
	          onClick: this.handleClick.bind(this, key, disabled),
	          active: child.props.eventKey === activeKey,
	          disabled: disabled },
	        child.props.title
	      );
	    }).bind(this));
	  },
	
	  renderTabPanels: function renderTabPanels() {
	    var activeKey = this.state.activeKey;
	
	    return React.Children.map(this.props.children, function (child, index) {
	      return React.createElement(
	        Tabs.Item,
	        {
	          active: child.props.eventKey === activeKey,
	          key: child.props.key ? child.props.key : index },
	        child.props.children
	      );
	    });
	  },
	
	  // for Amaze UI tabs widget
	  renderData: function renderData() {
	    var activeKey = this.state.activeKey;
	    var navs = [];
	    var panels = [];
	
	    this.props.data.forEach((function (item, key) {
	      navs.push(React.createElement(
	        NavItem,
	        {
	          href: '#',
	          ref: 'ref' + key,
	          key: key,
	          onClick: this.handleClick.bind(this, key, item.disabled),
	          active: key === activeKey,
	          disabled: item.disabled },
	        item.title
	      ));
	
	      panels.push(React.createElement(
	        Tabs.Item,
	        {
	          eventKey: key,
	          // active={item.active}
	          active: key === activeKey,
	          key: key },
	        item.content
	      ));
	    }).bind(this));
	
	    return {
	      navs: navs,
	      panels: panels
	    };
	  },
	
	  renderWrapper: function renderWrapper(children) {
	    var classSet = this.getClassSet();
	    var props = omit(this.props, 'data');
	
	    return React.createElement(
	      'div',
	      _extends({}, props, {
	        'data-am-widget': this.props.theme ? this.props.classPrefix : null,
	        className: classNames(classSet, this.props.className) }),
	      children
	    );
	  },
	
	  renderNavWrapper: function renderNavWrapper(children) {
	    var TabsNav = this.props.theme ? 'ul' : Nav;
	
	    return React.createElement(
	      TabsNav,
	      {
	        key: 'tabsNav',
	        tabs: true,
	        className: classNames(this.prefixClass('nav'), this.setClassNamespace('cf')),
	        justify: this.props.justify },
	      children
	    );
	  },
	
	  renderBodyWrapper: function renderBodyWrapper(children) {
	    var animationClass = this.prefixClass(this.props.animation);
	
	    return React.createElement(
	      'div',
	      {
	        key: 'tabsBody',
	        className: classNames(this.prefixClass('bd'), animationClass) },
	      children
	    );
	  },
	
	  render: function render() {
	    var children = this.props.data ? this.renderData() : {};
	
	    return this.renderWrapper([this.renderNavWrapper(children.navs || this.renderNav()), this.renderBodyWrapper(children.panels || this.renderTabPanels())]);
	  }
	});
	
	Tabs.Item = React.createClass({
	  displayName: 'Item',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    title: React.PropTypes.string,
	    disabled: React.PropTypes.bool,
	    eventKey: React.PropTypes.any,
	    active: React.PropTypes.bool
	  },
	
	  render: function render() {
	    var classSet = {};
	
	    classSet[this.setClassNamespace('tab-panel')] = true;
	    classSet[this.setClassNamespace('fade')] = true;
	    classSet[this.setClassNamespace('active')] = this.props.active;
	    classSet[this.setClassNamespace('in')] = this.props.active;
	
	    return React.createElement(
	      'div',
	      { className: classNames(classSet) },
	      this.props.children
	    );
	  }
	});
	
	module.exports = Tabs;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var omit = __webpack_require__(18);
	
	var Thumbnail = React.createClass({
	  displayName: 'Thumbnail',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string,
	    standalone: React.PropTypes.bool,
	    caption: React.PropTypes.node,
	    componentTag: React.PropTypes.node
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'thumbnail',
	      componentTag: 'figure'
	    };
	  },
	
	  renderImg: function renderImg(classes, props) {
	    props = props || {};
	
	    return props.src ? React.createElement('img', _extends({}, props, {
	      className: classes })) : null;
	  },
	
	  render: function render() {
	    var classes = classNames(this.getClassSet(), this.props.className);
	
	    if (this.props.standalone) {
	      return this.renderImg(classes, this.props);
	    }
	
	    var Component = this.props.href ? 'a' : this.props.componentTag;
	    var imgProps = {
	      alt: this.props.alt,
	      src: this.props.src,
	      width: this.props.width,
	      height: this.props.height
	    };
	    var props = omit(this.props, ['alt', 'src', 'width', 'height']);
	    var caption = this.props.caption;
	
	    return React.createElement(
	      Component,
	      _extends({}, props, {
	        className: classes }),
	      this.renderImg(null, imgProps),
	      caption || this.props.children ? React.createElement(
	        Thumbnail.Caption,
	        {
	          componentTag: typeof caption === 'string' ? 'figcaption' : 'div' },
	        this.props.caption || this.props.children
	      ) : null
	    );
	  }
	});
	
	Thumbnail.Caption = React.createClass({
	  displayName: 'Caption',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    componentTag: React.PropTypes.node
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      componentTag: 'div'
	    };
	  },
	
	  render: function render() {
	    var Component = this.props.componentTag;
	    var classes = classNames(this.props.className, this.setClassNamespace('thumbnail-caption'));
	
	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classes }),
	      this.props.children
	    );
	  }
	});
	
	module.exports = Thumbnail;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var AvgGrid = __webpack_require__(39);
	var omit = __webpack_require__(18);
	
	var Thumbnails = React.createClass({
	  displayName: 'Thumbnails',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'thumbnails'
	    };
	  },
	
	  render: function render() {
	    var classes = classNames(this.getClassSet(), this.props.className);
	    var props = omit(this.props, 'classPrefix');
	
	    return React.createElement(
	      AvgGrid,
	      _extends({}, props, {
	        className: classes }),
	      React.Children.map(this.props.children, function (child, i) {
	        return React.createElement(
	          'li',
	          { key: i },
	          child
	        );
	      })
	    );
	  }
	});
	
	module.exports = Thumbnails;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var AvgGrid = __webpack_require__(39);
	var omit = __webpack_require__(18);
	
	var Titlebar = React.createClass({
	  displayName: 'Titlebar',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    classPrefix: React.PropTypes.string,
	    theme: React.PropTypes.oneOf(['default', 'multi', 'cols']),
	    nav: React.PropTypes.array,
	    title: React.PropTypes.node
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'titlebar',
	      theme: 'default',
	      data: []
	    };
	  },
	
	  render: function render() {
	    var classSet = this.getClassSet();
	    var props = omit(this.props, ['classPrefix', 'nav', 'theme']);
	
	    return React.createElement(
	      'div',
	      _extends({}, props, {
	        'data-am-widget': this.props.classPrefix,
	        className: classNames(this.props.className, classSet) }),
	      React.createElement(
	        'h2',
	        { className: this.prefixClass('title') },
	        this.props.href ? React.createElement(
	          'a',
	          { href: this.props.href },
	          this.props.title
	        ) : this.props.title
	      ),
	      this.props.nav ? React.createElement(
	        'nav',
	        { className: this.prefixClass('nav') },
	        this.props.nav.map(function (item, i) {
	          return React.createElement(
	            'a',
	            { href: item.link, key: i },
	            item.title
	          );
	        })
	      ) : null
	    );
	  }
	});
	
	module.exports = Titlebar;

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var assign = __webpack_require__(44);
	var ClassNameMixin = __webpack_require__(3);
	var createChainedFunction = __webpack_require__(42);
	var Icon = __webpack_require__(13);
	var Button = __webpack_require__(33);
	
	var Topbar = React.createClass({
	  displayName: 'Topbar',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    componentTag: React.PropTypes.node,
	    brand: React.PropTypes.node,
	    brandLink: React.PropTypes.string,
	    inverse: React.PropTypes.bool,
	    fixedTop: React.PropTypes.bool,
	    fixedBottom: React.PropTypes.bool,
	    toggleBtn: React.PropTypes.node,
	    toggleNavKey: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	    onToggle: React.PropTypes.func,
	    navExpanded: React.PropTypes.bool,
	    defaultNavExpanded: React.PropTypes.bool,
	    fluid: React.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'topbar',
	      componentTag: 'header'
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      navExpanded: this.props.defaultNavExpanded
	    };
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate() {
	    // Defer any updates to this component during the `onSelect` handler.
	    return !this._isChanging;
	  },
	
	  handleToggle: function handleToggle() {
	    if (this.props.onToggle) {
	      this._isChanging = true;
	      this.props.onToggle();
	      this._isChanging = false;
	    }
	
	    this.setState({
	      navExpanded: !this.state.navExpanded
	    });
	  },
	
	  isNavExpanded: function isNavExpanded() {
	    return this.props.navExpanded != null ? this.props.navExpanded : this.state.navExpanded;
	  },
	
	  renderBrand: function renderBrand() {
	    var brand = this.props.brand;
	    var brandClassName = this.prefixClass('brand');
	
	    if (React.isValidElement(brand)) {
	      return React.cloneElement(brand, assign({}, brand.props, {
	        className: classNames(brand.props.className, brandClassName),
	        onClick: createChainedFunction(this.handleToggle, brand.props.onClick)
	      }));
	    }
	
	    return brand ? React.createElement(
	      'h1',
	      { className: brandClassName },
	      this.props.brandLink ? React.createElement(
	        'a',
	        { href: this.props.brandLink },
	        this.props.brand
	      ) : this.props.brand
	    ) : null;
	  },
	
	  renderToggleButton: function renderToggleButton() {
	    var toggleBtn = this.props.toggleBtn;
	    var toggleBtnClassName = this.prefixClass('toggle');
	
	    if (React.isValidElement(toggleBtn)) {
	      return React.cloneElement(toggleBtn, assign({}, toggleBtn.props, {
	        className: classNames(toggleBtn.props.className, toggleBtnClassName),
	        onClick: createChainedFunction(this.handleToggle, toggleBtn.props.onClick)
	      }));
	    }
	
	    return React.createElement(
	      Button,
	      {
	        amSize: 'sm',
	        onClick: this.handleToggle,
	        className: classNames(this.prefixClass('btn'), this.prefixClass('toggle'), this.setClassNamespace('show-sm-only')) },
	      React.createElement(
	        'span',
	        { className: this.setClassNamespace('sr-only') },
	        '导航切换'
	      ),
	      React.createElement(Icon, { icon: 'bars' })
	    );
	  },
	
	  renderChild: function renderChild(child, i) {
	    return React.cloneElement(child, assign({}, child.props, {
	      topbar: true,
	      collapsible: this.props.toggleNavKey != null && this.props.toggleNavKey === child.props.eventKey,
	      expanded: this.props.toggleNavKey != null && this.props.toggleNavKey === child.props.eventKey && this.isNavExpanded(),
	      key: child.key ? child.key : i,
	      className: classNames(child.props.className, child.props.right ? this.prefixClass('right') : null)
	    }));
	  },
	
	  render: function render() {
	    var classes = this.getClassSet();
	    var Component = this.props.componentTag;
	
	    // set classes
	    classes[this.prefixClass('inverse')] = this.props.inverse;
	    classes[this.prefixClass('fixed-top')] = this.props.fixedTop;
	    classes[this.prefixClass('fixed-bottom')] = this.props.fixedBottom;
	
	    return React.createElement(
	      Component,
	      _extends({}, this.props, {
	        className: classNames(classes, this.props.className) }),
	      React.createElement(
	        'div',
	        {
	          className: !this.props.fluid ? this.setClassNamespace('container') : null },
	        this.renderBrand(),
	        this.renderToggleButton(),
	        React.Children.map(this.props.children, this.renderChild)
	      )
	    );
	  }
	});
	
	module.exports = Topbar;

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	/**
	 * Custom radio/checkbox style
	 */
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(4);
	var ClassNameMixin = __webpack_require__(3);
	var Input = __webpack_require__(40);
	var constants = __webpack_require__(26);
	
	var UCheck = React.createClass({
	  displayName: 'UCheck',
	
	  mixins: [ClassNameMixin],
	
	  propTypes: {
	    type: React.PropTypes.oneOf(['radio', 'checkbox']),
	    disabled: React.PropTypes.bool,
	    amStyle: React.PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),
	    inline: React.PropTypes.bool,
	    hasFeedback: React.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      type: 'checkbox'
	    };
	  },
	
	  render: function render() {
	    var classSet = {};
	
	    classSet[this.setClassNamespace(this.props.type)] = !this.props.inline;
	    classSet[this.setClassNamespace(this.props.type + '-inline')] = this.props.inline;
	
	    if (this.props.amStyle) {
	      classSet[this.setClassNamespace(this.props.amStyle)] = true;
	    }
	
	    return React.createElement(
	      'label',
	      { className: classNames(this.props.className, classSet) },
	      React.createElement(Input, _extends({}, this.props, {
	        ref: 'field',
	        className: this.setClassNamespace('ucheck-checkbox'), standalone: true })),
	      React.createElement(
	        'span',
	        { className: this.setClassNamespace('ucheck-icons') },
	        React.createElement('i', { className: 'am-icon-unchecked' }),
	        React.createElement('i', { className: 'am-icon-checked' })
	      ),
	      this.props.label
	    );
	  }
	});
	
	module.exports = UCheck;
	
	// TODO: replace icon with Icon component

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  ClassNameMixin: __webpack_require__(3),
	  CollapseMixin: __webpack_require__(53),
	  DimmerMixin: __webpack_require__(67),
	  OverlayMixin: __webpack_require__(68),
	  SmoothScrollMixin: __webpack_require__(69)
	};

/***/ },
/* 219 */
/***/ function(module, exports) {

	'use strict';
	
	var locales = {
	  'en_US': {
	    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
	    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
	    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	    today: 'Today',
	    weekStart: 0
	  },
	  'zh_CN': {
	    days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
	    daysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
	    daysMin: ['日', '一', '二', '三', '四', '五', '六'],
	    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	    monthsShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	    today: '今天',
	    weekStart: 0
	  }
	};
	
	var dateUtils = {
	  isLeapYear: function isLeapYear(year) {
	    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
	  },
	
	  getDaysInMonth: function getDaysInMonth(year, month) {
	    return [31, this.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
	  },
	
	  getLocale: function getLocale(locale) {
	    if (!locale) {
	      locale = navigator.language && navigator.language.split('-');
	      locale[1] = locale[1].toUpperCase();
	      locale = locale.join('_');
	    }
	
	    return locales[locale] || locales['en_US'];
	  }
	};
	
	module.exports = dateUtils;

/***/ },
/* 220 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * getScrollbarWidth
	 *
	 * @desc via http://davidwalsh.name/detect-scrollbar-width
	 * @returns {number}
	 */
	
	function getScrollbarWidth() {
	  if (document.body.clientWidth >= window.innerWidth) {
	    return 0;
	  }
	
	  // Create the measurement node
	  var measure = document.createElement('div');
	
	  measure.className = 'am-scrollbar-measure';
	  document.body.appendChild(measure);
	
	  // Get the scrollbar width
	  var scrollbarWidth = measure.offsetWidth - measure.clientWidth;
	
	  // Delete the DIV
	  document.body.removeChild(measure);
	
	  return scrollbarWidth;
	}
	
	module.exports = getScrollbarWidth;

/***/ },
/* 221 */
/***/ function(module, exports) {

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function isObject(val) {
	  return val != null && typeof val === 'object'
	    && !Array.isArray(val);
	};


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getArticlesLists;
	
	var _actionTyeps = __webpack_require__(34);
	
	var types = _interopRequireWildcard(_actionTyeps);
	
	var _index = __webpack_require__(225);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(223);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function receiveArticles(result) {
	    return {
	        type: types.RECEIVE_ARTICLES,
	        articles: result.articles
	    };
	}
	
	function getArticlesLists() {
	    return function (dispatch) {
	        _index2.default.getArticles(function (articles) {
	            dispatch((0, _index3.receiveEntities)(articles.entities));
	            dispatch(receiveArticles(articles.result));
	        });
	    };
	}

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.receiveEntities = receiveEntities;
	exports.receiveResults = receiveResults;
	
	var _actionTyeps = __webpack_require__(34);
	
	var types = _interopRequireWildcard(_actionTyeps);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function receiveEntities(entities) {
	    return {
	        type: types.RECEIVE_ENTITIES,
	        entities: entities
	    };
	}
	
	function receiveResults(result) {
	    return {
	        type: types.RECEIVE_RESULTS,
	        result: result
	    };
	}

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.comment = exports.user = exports.article = undefined;
	
	var _normalizr = __webpack_require__(133);
	
	var _articles2 = __webpack_require__(265);
	
	var _articles3 = _interopRequireDefault(_articles2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var article = exports.article = new _normalizr.Schema('articles');
	var user = exports.user = new _normalizr.Schema('users');
	var comment = exports.comment = new _normalizr.Schema('comments');
	
	article.define({
	    author: user
	});
	comment.define({
	    article: article,
	    reviewer: user
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _superagent = __webpack_require__(386);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	var _superagentJsonapify = __webpack_require__(384);
	
	var _superagentJsonapify2 = _interopRequireDefault(_superagentJsonapify);
	
	var _normalizr = __webpack_require__(133);
	
	var _dataNormalize = __webpack_require__(224);
	
	var Schemas = _interopRequireWildcard(_dataNormalize);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _superagentJsonapify2.default)(_superagent2.default);
	
	exports.default = {
	    getArticles: function getArticles(cb) {
	        _superagent2.default.get('./mock/articles.json').end(function (err, res) {
	            if (!err) {
	                var articles = res.body;
	                articles = (0, _normalizr.normalize)(articles, {
	                    articles: (0, _normalizr.arrayOf)(Schemas.article)
	                });
	                cb && cb(articles);
	            }
	        });
	    }
	};

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _amazeuiReact = __webpack_require__(172);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ListInstance = (function (_Component) {
	    _inherits(ListInstance, _Component);
	
	    function ListInstance() {
	        _classCallCheck(this, ListInstance);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ListInstance).apply(this, arguments));
	    }
	
	    _createClass(ListInstance, [{
	        key: 'render',
	        value: function render() {
	            console.log(this.props);
	            return _react2.default.createElement(
	                _amazeuiReact.List,
	                null,
	                this.props.listdatas.map(function (cell) {
	                    return _react2.default.createElement(
	                        _amazeuiReact.ListItem,
	                        { key: cell.id },
	                        cell.content
	                    );
	                })
	            );
	        }
	    }]);
	
	    return ListInstance;
	})(_react.Component);
	
	exports.default = ListInstance;
	
	ListInstance.propTypes = {
	    listdatas: _react.PropTypes.array
	};

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(8);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(57);
	
	var _reactRouter = __webpack_require__(58);
	
	var _articleList = __webpack_require__(226);
	
	var _articleList2 = _interopRequireDefault(_articleList);
	
	var _article = __webpack_require__(111);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = (function (_Component) {
	    _inherits(App, _Component);
	
	    function App() {
	        _classCallCheck(this, App);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	    }
	
	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            var articleListDatas = this.props.articleListDatas;
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'App'
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/information' },
	                            'information'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/inbox' },
	                            'Inbox'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(_articleList2.default, { listdatas: articleListDatas })
	                )
	            );
	        }
	    }]);
	
	    return App;
	})(_react.Component);
	
	exports.default = App;
	
	App.propTypes = {
	    articleListDatas: _react.PropTypes.array
	};
	
	//文章相关
	function getArticles(state) {}
	
	function mapStateToProps(state) {
	    return {
	        articleListDatas: (0, _article.getAllArticles)(state)
	    };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(57);
	
	var _redux = __webpack_require__(38);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Information = (function (_Component) {
	    _inherits(Information, _Component);
	
	    function Information() {
	        _classCallCheck(this, Information);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Information).apply(this, arguments));
	    }
	
	    _createClass(Information, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                'test'
	            );
	        }
	    }]);
	
	    return Information;
	})(_react.Component);
	
	exports.default = Information;
	
	Information.propTypes = {
	    children: _react.PropTypes.object
	};

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = entities;
	
	var _actionTyeps = __webpack_require__(34);
	
	var initialState = {
	    articles: {}
	};
	
	function entities() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case _actionTyeps.RECEIVE_ENTITIES:
	            return Object.assign(state, action.entities);
	        default:
	            return state;
	    }
	}

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = toApp;
	
	var _redux = __webpack_require__(38);
	
	var _actionTyeps = __webpack_require__(34);
	
	var types = _interopRequireWildcard(_actionTyeps);
	
	var _result = __webpack_require__(231);
	
	var _result2 = _interopRequireDefault(_result);
	
	var _entity = __webpack_require__(229);
	
	var _entity2 = _interopRequireDefault(_entity);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function toApp(state) {
	
	  return state;
	}
	
	exports.default = (0, _redux.combineReducers)({
	  result: _result2.default,
	  entities: _entity2.default
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actionTyeps = __webpack_require__(34);
	
	var _redux = __webpack_require__(38);
	
	var _article = __webpack_require__(111);
	
	var _article2 = _interopRequireDefault(_article);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initialState = {
	    result: {}
	};
	
	exports.default = (0, _redux.combineReducers)({
	    articles: _article2.default
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(58);
	
	var _index = __webpack_require__(228);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _App = __webpack_require__(227);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/' },
	    _react2.default.createElement(_reactRouter.IndexRoute, {
	        component: _App2.default
	    }),
	    _react2.default.createElement(_reactRouter.Route, {
	        path: 'information',
	        component: _index2.default })
	);

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(57);
	
	var _reactRouter = __webpack_require__(58);
	
	var _createBrowserHistory = __webpack_require__(258);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	var _routes = __webpack_require__(232);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _index = __webpack_require__(235);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _amazeui = __webpack_require__(240);
	
	var _amazeui2 = _interopRequireDefault(_amazeui);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var history = (0, _createBrowserHistory2.default)();
	
	exports.default = function (props) {
	    var store = (0, _index2.default)(props);
	
	    return _react2.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react2.default.createElement(_reactRouter.Router, { history: history, children: _routes2.default })
	    );
	};

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ClientApp = __webpack_require__(233);
	
	var _ClientApp2 = _interopRequireDefault(_ClientApp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.App = _ClientApp2.default;

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(38);
	
	var _reduxThunk = __webpack_require__(378);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _index = __webpack_require__(230);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _article = __webpack_require__(222);
	
	var _article2 = _interopRequireDefault(_article);
	
	var _reduxLogger = __webpack_require__(166);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = function (props) {
	    var reducer = _index2.default;
	    var middleware = [];
	    var finalCreateStore = undefined;
	    var initialState = props;
	
	    if (process.env.NODE_ENV === 'production') {
	        middleware = [_reduxThunk2.default];
	        finalCreateStore = _redux.applyMiddleware.apply(undefined, _toConsumableArray(middleware))(_redux.createStore);
	    } else {
	        middleware = [_reduxThunk2.default, (0, _reduxLogger2.default)()];
	        finalCreateStore = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, _toConsumableArray(middleware)));
	    }
	
	    var stroe = finalCreateStore(_redux.createStore)(reducer, initialState);
	
	    setTimeout(function () {
	        stroe.dispatch((0, _article2.default)());
	    }, 1000);
	
	    return stroe;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 236 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};
	
	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */
/***/ function(module, exports) {

	/*!
	 * for-in <https://github.com/jonschlinkert/for-in>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function forIn(o, fn, thisArg) {
	  for (var key in o) {
	    if (fn.call(thisArg, o[key], key, o) === false) {
	      break;
	    }
	  }
	};

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * for-own <https://github.com/jonschlinkert/for-own>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var forIn = __webpack_require__(255);
	var hasOwn = Object.prototype.hasOwnProperty;
	
	module.exports = function forOwn(o, fn, thisArg) {
	  forIn(o, function (val, key) {
	    if (hasOwn.call(o, key)) {
	      return fn.call(thisArg, o[key], key, o);
	    }
	  });
	};


/***/ },
/* 257 */,
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(11);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Actions = __webpack_require__(35);
	
	var _ExecutionEnvironment = __webpack_require__(56);
	
	var _DOMUtils = __webpack_require__(73);
	
	var _DOMStateStorage = __webpack_require__(118);
	
	var _createDOMHistory = __webpack_require__(119);
	
	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);
	
	var _parsePath = __webpack_require__(27);
	
	var _parsePath2 = _interopRequireDefault(_parsePath);
	
	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;
	
	  var forceRefresh = options.forceRefresh;
	
	  var isSupported = _DOMUtils.supportsHistory();
	  var useRefresh = !isSupported || forceRefresh;
	
	  function getCurrentLocation(historyState) {
	    historyState = historyState || window.history.state || {};
	
	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;
	
	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();
	
	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
	    }
	
	    var location = _parsePath2['default'](path);
	
	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }
	
	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;
	
	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.
	
	      transitionTo(getCurrentLocation(event.state));
	    }
	
	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);
	
	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }
	
	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;
	
	    if (action === _Actions.POP) return; // Nothing to do.
	
	    _DOMStateStorage.saveState(key, state);
	
	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };
	
	    if (action === _Actions.PUSH) {
	      if (useRefresh) {
	        window.location.href = path;
	        return false; // Prevent location update.
	      } else {
	          window.history.pushState(historyState, null, path);
	        }
	    } else {
	      // REPLACE
	      if (useRefresh) {
	        window.location.replace(path);
	        return false; // Prevent location update.
	      } else {
	          window.history.replaceState(historyState, null, path);
	        }
	    }
	  }
	
	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));
	
	  var listenerCount = 0,
	      stopPopStateListener = undefined;
	
	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
	
	    var unlisten = history.listenBefore(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }
	
	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
	
	    var unlisten = history.listen(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }
	
	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
	
	    history.registerTransitionHook(hook);
	  }
	
	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);
	
	    if (--listenerCount === 0) stopPopStateListener();
	  }
	
	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}
	
	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */
/***/ function(module, exports) {

	module.exports = {
		"articles": [
			{
				"id": "1",
				"title": "title1",
				"content": "content1",
				"author": {
					"id": "1",
					"name": "sky"
				}
			},
			{
				"id": "2",
				"title": "title2",
				"content": "content2",
				"author": {
					"id": "2",
					"name": "tom"
				}
			}
		]
	};

/***/ },
/* 266 */
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}
	
	module.exports = last;


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * @license
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern -d -o ./index.js`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	;(function() {
	
	  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
	  var undefined;
	
	  /** Used as the semantic version number. */
	  var VERSION = '3.10.1';
	
	  /** Used to compose bitmasks for wrapper metadata. */
	  var BIND_FLAG = 1,
	      BIND_KEY_FLAG = 2,
	      CURRY_BOUND_FLAG = 4,
	      CURRY_FLAG = 8,
	      CURRY_RIGHT_FLAG = 16,
	      PARTIAL_FLAG = 32,
	      PARTIAL_RIGHT_FLAG = 64,
	      ARY_FLAG = 128,
	      REARG_FLAG = 256;
	
	  /** Used as default options for `_.trunc`. */
	  var DEFAULT_TRUNC_LENGTH = 30,
	      DEFAULT_TRUNC_OMISSION = '...';
	
	  /** Used to detect when a function becomes hot. */
	  var HOT_COUNT = 150,
	      HOT_SPAN = 16;
	
	  /** Used as the size to enable large array optimizations. */
	  var LARGE_ARRAY_SIZE = 200;
	
	  /** Used to indicate the type of lazy iteratees. */
	  var LAZY_FILTER_FLAG = 1,
	      LAZY_MAP_FLAG = 2;
	
	  /** Used as the `TypeError` message for "Functions" methods. */
	  var FUNC_ERROR_TEXT = 'Expected a function';
	
	  /** Used as the internal argument placeholder. */
	  var PLACEHOLDER = '__lodash_placeholder__';
	
	  /** `Object#toString` result references. */
	  var argsTag = '[object Arguments]',
	      arrayTag = '[object Array]',
	      boolTag = '[object Boolean]',
	      dateTag = '[object Date]',
	      errorTag = '[object Error]',
	      funcTag = '[object Function]',
	      mapTag = '[object Map]',
	      numberTag = '[object Number]',
	      objectTag = '[object Object]',
	      regexpTag = '[object RegExp]',
	      setTag = '[object Set]',
	      stringTag = '[object String]',
	      weakMapTag = '[object WeakMap]';
	
	  var arrayBufferTag = '[object ArrayBuffer]',
	      float32Tag = '[object Float32Array]',
	      float64Tag = '[object Float64Array]',
	      int8Tag = '[object Int8Array]',
	      int16Tag = '[object Int16Array]',
	      int32Tag = '[object Int32Array]',
	      uint8Tag = '[object Uint8Array]',
	      uint8ClampedTag = '[object Uint8ClampedArray]',
	      uint16Tag = '[object Uint16Array]',
	      uint32Tag = '[object Uint32Array]';
	
	  /** Used to match empty string literals in compiled template source. */
	  var reEmptyStringLeading = /\b__p \+= '';/g,
	      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
	
	  /** Used to match HTML entities and HTML characters. */
	  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
	      reUnescapedHtml = /[&<>"'`]/g,
	      reHasEscapedHtml = RegExp(reEscapedHtml.source),
	      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
	
	  /** Used to match template delimiters. */
	  var reEscape = /<%-([\s\S]+?)%>/g,
	      reEvaluate = /<%([\s\S]+?)%>/g,
	      reInterpolate = /<%=([\s\S]+?)%>/g;
	
	  /** Used to match property names within property paths. */
	  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	      reIsPlainProp = /^\w*$/,
	      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
	
	  /**
	   * Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns)
	   * and those outlined by [`EscapeRegExpPattern`](http://ecma-international.org/ecma-262/6.0/#sec-escaperegexppattern).
	   */
	  var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
	      reHasRegExpChars = RegExp(reRegExpChars.source);
	
	  /** Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks). */
	  var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;
	
	  /** Used to match backslashes in property paths. */
	  var reEscapeChar = /\\(\\)?/g;
	
	  /** Used to match [ES template delimiters](http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components). */
	  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
	
	  /** Used to match `RegExp` flags from their coerced string values. */
	  var reFlags = /\w*$/;
	
	  /** Used to detect hexadecimal string values. */
	  var reHasHexPrefix = /^0[xX]/;
	
	  /** Used to detect host constructors (Safari > 5). */
	  var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	  /** Used to detect unsigned integer values. */
	  var reIsUint = /^\d+$/;
	
	  /** Used to match latin-1 supplementary letters (excluding mathematical operators). */
	  var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;
	
	  /** Used to ensure capturing order of template delimiters. */
	  var reNoMatch = /($^)/;
	
	  /** Used to match unescaped characters in compiled string literals. */
	  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
	
	  /** Used to match words to create compound words. */
	  var reWords = (function() {
	    var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
	        lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';
	
	    return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
	  }());
	
	  /** Used to assign default `context` object properties. */
	  var contextProps = [
	    'Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array',
	    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number',
	    'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'isFinite',
	    'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array',
	    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap'
	  ];
	
	  /** Used to make template sourceURLs easier to identify. */
	  var templateCounter = -1;
	
	  /** Used to identify `toStringTag` values of typed arrays. */
	  var typedArrayTags = {};
	  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	  typedArrayTags[uint32Tag] = true;
	  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	  typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	  typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	  typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	  typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	  typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	  /** Used to identify `toStringTag` values supported by `_.clone`. */
	  var cloneableTags = {};
	  cloneableTags[argsTag] = cloneableTags[arrayTag] =
	  cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
	  cloneableTags[dateTag] = cloneableTags[float32Tag] =
	  cloneableTags[float64Tag] = cloneableTags[int8Tag] =
	  cloneableTags[int16Tag] = cloneableTags[int32Tag] =
	  cloneableTags[numberTag] = cloneableTags[objectTag] =
	  cloneableTags[regexpTag] = cloneableTags[stringTag] =
	  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	  cloneableTags[errorTag] = cloneableTags[funcTag] =
	  cloneableTags[mapTag] = cloneableTags[setTag] =
	  cloneableTags[weakMapTag] = false;
	
	  /** Used to map latin-1 supplementary letters to basic latin letters. */
	  var deburredLetters = {
	    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	    '\xc7': 'C',  '\xe7': 'c',
	    '\xd0': 'D',  '\xf0': 'd',
	    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	    '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	    '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	    '\xd1': 'N',  '\xf1': 'n',
	    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	    '\xc6': 'Ae', '\xe6': 'ae',
	    '\xde': 'Th', '\xfe': 'th',
	    '\xdf': 'ss'
	  };
	
	  /** Used to map characters to HTML entities. */
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '`': '&#96;'
	  };
	
	  /** Used to map HTML entities to characters. */
	  var htmlUnescapes = {
	    '&amp;': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&#39;': "'",
	    '&#96;': '`'
	  };
	
	  /** Used to determine if values are of the language type `Object`. */
	  var objectTypes = {
	    'function': true,
	    'object': true
	  };
	
	  /** Used to escape characters for inclusion in compiled regexes. */
	  var regexpEscapes = {
	    '0': 'x30', '1': 'x31', '2': 'x32', '3': 'x33', '4': 'x34',
	    '5': 'x35', '6': 'x36', '7': 'x37', '8': 'x38', '9': 'x39',
	    'A': 'x41', 'B': 'x42', 'C': 'x43', 'D': 'x44', 'E': 'x45', 'F': 'x46',
	    'a': 'x61', 'b': 'x62', 'c': 'x63', 'd': 'x64', 'e': 'x65', 'f': 'x66',
	    'n': 'x6e', 'r': 'x72', 't': 'x74', 'u': 'x75', 'v': 'x76', 'x': 'x78'
	  };
	
	  /** Used to escape characters for inclusion in compiled string literals. */
	  var stringEscapes = {
	    '\\': '\\',
	    "'": "'",
	    '\n': 'n',
	    '\r': 'r',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  /** Detect free variable `exports`. */
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
	
	  /** Detect free variable `module`. */
	  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
	
	  /** Detect free variable `global` from Node.js. */
	  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;
	
	  /** Detect free variable `self`. */
	  var freeSelf = objectTypes[typeof self] && self && self.Object && self;
	
	  /** Detect free variable `window`. */
	  var freeWindow = objectTypes[typeof window] && window && window.Object && window;
	
	  /** Detect the popular CommonJS extension `module.exports`. */
	  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;
	
	  /**
	   * Used as a reference to the global object.
	   *
	   * The `this` value is used if it's the global object to avoid Greasemonkey's
	   * restricted `window` object, otherwise the `window` object is used.
	   */
	  var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * The base implementation of `compareAscending` which compares values and
	   * sorts them in ascending order without guaranteeing a stable sort.
	   *
	   * @private
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @returns {number} Returns the sort order indicator for `value`.
	   */
	  function baseCompareAscending(value, other) {
	    if (value !== other) {
	      var valIsNull = value === null,
	          valIsUndef = value === undefined,
	          valIsReflexive = value === value;
	
	      var othIsNull = other === null,
	          othIsUndef = other === undefined,
	          othIsReflexive = other === other;
	
	      if ((value > other && !othIsNull) || !valIsReflexive ||
	          (valIsNull && !othIsUndef && othIsReflexive) ||
	          (valIsUndef && othIsReflexive)) {
	        return 1;
	      }
	      if ((value < other && !valIsNull) || !othIsReflexive ||
	          (othIsNull && !valIsUndef && valIsReflexive) ||
	          (othIsUndef && valIsReflexive)) {
	        return -1;
	      }
	    }
	    return 0;
	  }
	
	  /**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseFindIndex(array, predicate, fromRight) {
	    var length = array.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (predicate(array[index], index, array)) {
	        return index;
	      }
	    }
	    return -1;
	  }
	
	  /**
	   * The base implementation of `_.indexOf` without support for binary searches.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseIndexOf(array, value, fromIndex) {
	    if (value !== value) {
	      return indexOfNaN(array, fromIndex);
	    }
	    var index = fromIndex - 1,
	        length = array.length;
	
	    while (++index < length) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }
	
	  /**
	   * The base implementation of `_.isFunction` without support for environments
	   * with incorrect `typeof` results.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	   */
	  function baseIsFunction(value) {
	    // Avoid a Chakra JIT bug in compatibility modes of IE 11.
	    // See https://github.com/jashkenas/underscore/issues/1621 for more details.
	    return typeof value == 'function' || false;
	  }
	
	  /**
	   * Converts `value` to a string if it's not one. An empty string is returned
	   * for `null` or `undefined` values.
	   *
	   * @private
	   * @param {*} value The value to process.
	   * @returns {string} Returns the string.
	   */
	  function baseToString(value) {
	    return value == null ? '' : (value + '');
	  }
	
	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the first character not found in `chars`.
	   */
	  function charsLeftIndex(string, chars) {
	    var index = -1,
	        length = string.length;
	
	    while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }
	
	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the last character not found in `chars`.
	   */
	  function charsRightIndex(string, chars) {
	    var index = string.length;
	
	    while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }
	
	  /**
	   * Used by `_.sortBy` to compare transformed elements of a collection and stable
	   * sort them in ascending order.
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareAscending(object, other) {
	    return baseCompareAscending(object.criteria, other.criteria) || (object.index - other.index);
	  }
	
	  /**
	   * Used by `_.sortByOrder` to compare multiple properties of a value to another
	   * and stable sort them.
	   *
	   * If `orders` is unspecified, all valuess are sorted in ascending order. Otherwise,
	   * a value is sorted in ascending order if its corresponding order is "asc", and
	   * descending if "desc".
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @param {boolean[]} orders The order to sort by for each property.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareMultiple(object, other, orders) {
	    var index = -1,
	        objCriteria = object.criteria,
	        othCriteria = other.criteria,
	        length = objCriteria.length,
	        ordersLength = orders.length;
	
	    while (++index < length) {
	      var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
	      if (result) {
	        if (index >= ordersLength) {
	          return result;
	        }
	        var order = orders[index];
	        return result * ((order === 'asc' || order === true) ? 1 : -1);
	      }
	    }
	    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	    // that causes it, under certain circumstances, to provide the same value for
	    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	    // for more details.
	    //
	    // This also ensures a stable sort in V8 and other engines.
	    // See https://code.google.com/p/v8/issues/detail?id=90 for more details.
	    return object.index - other.index;
	  }
	
	  /**
	   * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
	   *
	   * @private
	   * @param {string} letter The matched letter to deburr.
	   * @returns {string} Returns the deburred letter.
	   */
	  function deburrLetter(letter) {
	    return deburredLetters[letter];
	  }
	
	  /**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeHtmlChar(chr) {
	    return htmlEscapes[chr];
	  }
	
	  /**
	   * Used by `_.escapeRegExp` to escape characters for inclusion in compiled regexes.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @param {string} leadingChar The capture group for a leading character.
	   * @param {string} whitespaceChar The capture group for a whitespace character.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeRegExpChar(chr, leadingChar, whitespaceChar) {
	    if (leadingChar) {
	      chr = regexpEscapes[chr];
	    } else if (whitespaceChar) {
	      chr = stringEscapes[chr];
	    }
	    return '\\' + chr;
	  }
	
	  /**
	   * Used by `_.template` to escape characters for inclusion in compiled string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeStringChar(chr) {
	    return '\\' + stringEscapes[chr];
	  }
	
	  /**
	   * Gets the index at which the first occurrence of `NaN` is found in `array`.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	   */
	  function indexOfNaN(array, fromIndex, fromRight) {
	    var length = array.length,
	        index = fromIndex + (fromRight ? 0 : -1);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var other = array[index];
	      if (other !== other) {
	        return index;
	      }
	    }
	    return -1;
	  }
	
	  /**
	   * Checks if `value` is object-like.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	   */
	  function isObjectLike(value) {
	    return !!value && typeof value == 'object';
	  }
	
	  /**
	   * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
	   * character code is whitespace.
	   *
	   * @private
	   * @param {number} charCode The character code to inspect.
	   * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
	   */
	  function isSpace(charCode) {
	    return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 ||
	      (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
	  }
	
	  /**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */
	  function replaceHolders(array, placeholder) {
	    var index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];
	
	    while (++index < length) {
	      if (array[index] === placeholder) {
	        array[index] = PLACEHOLDER;
	        result[++resIndex] = index;
	      }
	    }
	    return result;
	  }
	
	  /**
	   * An implementation of `_.uniq` optimized for sorted arrays without support
	   * for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} [iteratee] The function invoked per iteration.
	   * @returns {Array} Returns the new duplicate-value-free array.
	   */
	  function sortedUniq(array, iteratee) {
	    var seen,
	        index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];
	
	    while (++index < length) {
	      var value = array[index],
	          computed = iteratee ? iteratee(value, index, array) : value;
	
	      if (!index || seen !== computed) {
	        seen = computed;
	        result[++resIndex] = value;
	      }
	    }
	    return result;
	  }
	
	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the first non-whitespace character.
	   */
	  function trimmedLeftIndex(string) {
	    var index = -1,
	        length = string.length;
	
	    while (++index < length && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }
	
	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the last non-whitespace character.
	   */
	  function trimmedRightIndex(string) {
	    var index = string.length;
	
	    while (index-- && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }
	
	  /**
	   * Used by `_.unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} chr The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */
	  function unescapeHtmlChar(chr) {
	    return htmlUnescapes[chr];
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Create a new pristine `lodash` function using the given `context` object.
	   *
	   * @static
	   * @memberOf _
	   * @category Utility
	   * @param {Object} [context=root] The context object.
	   * @returns {Function} Returns a new `lodash` function.
	   * @example
	   *
	   * _.mixin({ 'foo': _.constant('foo') });
	   *
	   * var lodash = _.runInContext();
	   * lodash.mixin({ 'bar': lodash.constant('bar') });
	   *
	   * _.isFunction(_.foo);
	   * // => true
	   * _.isFunction(_.bar);
	   * // => false
	   *
	   * lodash.isFunction(lodash.foo);
	   * // => false
	   * lodash.isFunction(lodash.bar);
	   * // => true
	   *
	   * // using `context` to mock `Date#getTime` use in `_.now`
	   * var mock = _.runInContext({
	   *   'Date': function() {
	   *     return { 'getTime': getTimeMock };
	   *   }
	   * });
	   *
	   * // or creating a suped-up `defer` in Node.js
	   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
	   */
	  function runInContext(context) {
	    // Avoid issues with some ES3 environments that attempt to use values, named
	    // after built-in constructors like `Object`, for the creation of literals.
	    // ES5 clears this up by stating that literals must use built-in constructors.
	    // See https://es5.github.io/#x11.1.5 for more details.
	    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;
	
	    /** Native constructor references. */
	    var Array = context.Array,
	        Date = context.Date,
	        Error = context.Error,
	        Function = context.Function,
	        Math = context.Math,
	        Number = context.Number,
	        Object = context.Object,
	        RegExp = context.RegExp,
	        String = context.String,
	        TypeError = context.TypeError;
	
	    /** Used for native method references. */
	    var arrayProto = Array.prototype,
	        objectProto = Object.prototype,
	        stringProto = String.prototype;
	
	    /** Used to resolve the decompiled source of functions. */
	    var fnToString = Function.prototype.toString;
	
	    /** Used to check objects for own properties. */
	    var hasOwnProperty = objectProto.hasOwnProperty;
	
	    /** Used to generate unique IDs. */
	    var idCounter = 0;
	
	    /**
	     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var objToString = objectProto.toString;
	
	    /** Used to restore the original `_` reference in `_.noConflict`. */
	    var oldDash = root._;
	
	    /** Used to detect if a method is native. */
	    var reIsNative = RegExp('^' +
	      fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	    );
	
	    /** Native method references. */
	    var ArrayBuffer = context.ArrayBuffer,
	        clearTimeout = context.clearTimeout,
	        parseFloat = context.parseFloat,
	        pow = Math.pow,
	        propertyIsEnumerable = objectProto.propertyIsEnumerable,
	        Set = getNative(context, 'Set'),
	        setTimeout = context.setTimeout,
	        splice = arrayProto.splice,
	        Uint8Array = context.Uint8Array,
	        WeakMap = getNative(context, 'WeakMap');
	
	    /* Native method references for those with the same name as other `lodash` methods. */
	    var nativeCeil = Math.ceil,
	        nativeCreate = getNative(Object, 'create'),
	        nativeFloor = Math.floor,
	        nativeIsArray = getNative(Array, 'isArray'),
	        nativeIsFinite = context.isFinite,
	        nativeKeys = getNative(Object, 'keys'),
	        nativeMax = Math.max,
	        nativeMin = Math.min,
	        nativeNow = getNative(Date, 'now'),
	        nativeParseInt = context.parseInt,
	        nativeRandom = Math.random;
	
	    /** Used as references for `-Infinity` and `Infinity`. */
	    var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
	        POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
	
	    /** Used as references for the maximum length and index of an array. */
	    var MAX_ARRAY_LENGTH = 4294967295,
	        MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
	        HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
	
	    /**
	     * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	     * of an array-like value.
	     */
	    var MAX_SAFE_INTEGER = 9007199254740991;
	
	    /** Used to store function metadata. */
	    var metaMap = WeakMap && new WeakMap;
	
	    /** Used to lookup unminified function names. */
	    var realNames = {};
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a `lodash` object which wraps `value` to enable implicit chaining.
	     * Methods that operate on and return arrays, collections, and functions can
	     * be chained together. Methods that retrieve a single value or may return a
	     * primitive value will automatically end the chain returning the unwrapped
	     * value. Explicit chaining may be enabled using `_.chain`. The execution of
	     * chained methods is lazy, that is, execution is deferred until `_#value`
	     * is implicitly or explicitly called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
	     * fusion is an optimization strategy which merge iteratee calls; this can help
	     * to avoid the creation of intermediate data structures and greatly reduce the
	     * number of iteratee executions.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
	     * `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
	     * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
	     * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
	     * and `where`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
	     * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
	     * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
	     * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
	     * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
	     * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
	     * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
	     * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
	     * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
	     * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
	     * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
	     * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
	     * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
	     * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
	     * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
	     * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
	     * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
	     * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
	     * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
	     * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
	     * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
	     * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
	     * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
	     * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
	     * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
	     * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
	     * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
	     * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
	     * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
	     * `unescape`, `uniqueId`, `value`, and `words`
	     *
	     * The wrapper method `sample` will return a wrapped value when `n` is provided,
	     * otherwise an unwrapped value is returned.
	     *
	     * @name _
	     * @constructor
	     * @category Chain
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // returns an unwrapped value
	     * wrapped.reduce(function(total, n) {
	     *   return total + n;
	     * });
	     * // => 6
	     *
	     * // returns a wrapped value
	     * var squares = wrapped.map(function(n) {
	     *   return n * n;
	     * });
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */
	    function lodash(value) {
	      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	        if (value instanceof LodashWrapper) {
	          return value;
	        }
	        if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
	          return wrapperClone(value);
	        }
	      }
	      return new LodashWrapper(value);
	    }
	
	    /**
	     * The function whose prototype all chaining wrappers inherit from.
	     *
	     * @private
	     */
	    function baseLodash() {
	      // No operation performed.
	    }
	
	    /**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
	     * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
	     */
	    function LodashWrapper(value, chainAll, actions) {
	      this.__wrapped__ = value;
	      this.__actions__ = actions || [];
	      this.__chain__ = !!chainAll;
	    }
	
	    /**
	     * An object environment feature flags.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    var support = lodash.support = {};
	
	    /**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB). Change the following template settings to use
	     * alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    lodash.templateSettings = {
	
	      /**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'escape': reEscape,
	
	      /**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'evaluate': reEvaluate,
	
	      /**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'interpolate': reInterpolate,
	
	      /**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type string
	       */
	      'variable': '',
	
	      /**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type Object
	       */
	      'imports': {
	
	        /**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type Function
	         */
	        '_': lodash
	      }
	    };
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     */
	    function LazyWrapper(value) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__dir__ = 1;
	      this.__filtered__ = false;
	      this.__iteratees__ = [];
	      this.__takeCount__ = POSITIVE_INFINITY;
	      this.__views__ = [];
	    }
	
	    /**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */
	    function lazyClone() {
	      var result = new LazyWrapper(this.__wrapped__);
	      result.__actions__ = arrayCopy(this.__actions__);
	      result.__dir__ = this.__dir__;
	      result.__filtered__ = this.__filtered__;
	      result.__iteratees__ = arrayCopy(this.__iteratees__);
	      result.__takeCount__ = this.__takeCount__;
	      result.__views__ = arrayCopy(this.__views__);
	      return result;
	    }
	
	    /**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */
	    function lazyReverse() {
	      if (this.__filtered__) {
	        var result = new LazyWrapper(this);
	        result.__dir__ = -1;
	        result.__filtered__ = true;
	      } else {
	        result = this.clone();
	        result.__dir__ *= -1;
	      }
	      return result;
	    }
	
	    /**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */
	    function lazyValue() {
	      var array = this.__wrapped__.value(),
	          dir = this.__dir__,
	          isArr = isArray(array),
	          isRight = dir < 0,
	          arrLength = isArr ? array.length : 0,
	          view = getView(0, arrLength, this.__views__),
	          start = view.start,
	          end = view.end,
	          length = end - start,
	          index = isRight ? end : (start - 1),
	          iteratees = this.__iteratees__,
	          iterLength = iteratees.length,
	          resIndex = 0,
	          takeCount = nativeMin(length, this.__takeCount__);
	
	      if (!isArr || arrLength < LARGE_ARRAY_SIZE || (arrLength == length && takeCount == length)) {
	        return baseWrapperValue((isRight && isArr) ? array.reverse() : array, this.__actions__);
	      }
	      var result = [];
	
	      outer:
	      while (length-- && resIndex < takeCount) {
	        index += dir;
	
	        var iterIndex = -1,
	            value = array[index];
	
	        while (++iterIndex < iterLength) {
	          var data = iteratees[iterIndex],
	              iteratee = data.iteratee,
	              type = data.type,
	              computed = iteratee(value);
	
	          if (type == LAZY_MAP_FLAG) {
	            value = computed;
	          } else if (!computed) {
	            if (type == LAZY_FILTER_FLAG) {
	              continue outer;
	            } else {
	              break outer;
	            }
	          }
	        }
	        result[resIndex++] = value;
	      }
	      return result;
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a cache object to store key/value pairs.
	     *
	     * @private
	     * @static
	     * @name Cache
	     * @memberOf _.memoize
	     */
	    function MapCache() {
	      this.__data__ = {};
	    }
	
	    /**
	     * Removes `key` and its value from the cache.
	     *
	     * @private
	     * @name delete
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
	     */
	    function mapDelete(key) {
	      return this.has(key) && delete this.__data__[key];
	    }
	
	    /**
	     * Gets the cached value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the cached value.
	     */
	    function mapGet(key) {
	      return key == '__proto__' ? undefined : this.__data__[key];
	    }
	
	    /**
	     * Checks if a cached value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function mapHas(key) {
	      return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
	    }
	
	    /**
	     * Sets `value` to `key` of the cache.
	     *
	     * @private
	     * @name set
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to cache.
	     * @param {*} value The value to cache.
	     * @returns {Object} Returns the cache object.
	     */
	    function mapSet(key, value) {
	      if (key != '__proto__') {
	        this.__data__[key] = value;
	      }
	      return this;
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     *
	     * Creates a cache object to store unique values.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     */
	    function SetCache(values) {
	      var length = values ? values.length : 0;
	
	      this.data = { 'hash': nativeCreate(null), 'set': new Set };
	      while (length--) {
	        this.push(values[length]);
	      }
	    }
	
	    /**
	     * Checks if `value` is in `cache` mimicking the return signature of
	     * `_.indexOf` by returning `0` if the value is found, else `-1`.
	     *
	     * @private
	     * @param {Object} cache The cache to search.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `0` if `value` is found, else `-1`.
	     */
	    function cacheIndexOf(cache, value) {
	      var data = cache.data,
	          result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
	
	      return result ? 0 : -1;
	    }
	
	    /**
	     * Adds `value` to the cache.
	     *
	     * @private
	     * @name push
	     * @memberOf SetCache
	     * @param {*} value The value to cache.
	     */
	    function cachePush(value) {
	      var data = this.data;
	      if (typeof value == 'string' || isObject(value)) {
	        data.set.add(value);
	      } else {
	        data.hash[value] = true;
	      }
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a new array joining `array` with `other`.
	     *
	     * @private
	     * @param {Array} array The array to join.
	     * @param {Array} other The other array to join.
	     * @returns {Array} Returns the new concatenated array.
	     */
	    function arrayConcat(array, other) {
	      var index = -1,
	          length = array.length,
	          othIndex = -1,
	          othLength = other.length,
	          result = Array(length + othLength);
	
	      while (++index < length) {
	        result[index] = array[index];
	      }
	      while (++othIndex < othLength) {
	        result[index++] = other[othIndex];
	      }
	      return result;
	    }
	
	    /**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayCopy(source, array) {
	      var index = -1,
	          length = source.length;
	
	      array || (array = Array(length));
	      while (++index < length) {
	        array[index] = source[index];
	      }
	      return array;
	    }
	
	    /**
	     * A specialized version of `_.forEach` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEach(array, iteratee) {
	      var index = -1,
	          length = array.length;
	
	      while (++index < length) {
	        if (iteratee(array[index], index, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }
	
	    /**
	     * A specialized version of `_.forEachRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEachRight(array, iteratee) {
	      var length = array.length;
	
	      while (length--) {
	        if (iteratee(array[length], length, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }
	
	    /**
	     * A specialized version of `_.every` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     */
	    function arrayEvery(array, predicate) {
	      var index = -1,
	          length = array.length;
	
	      while (++index < length) {
	        if (!predicate(array[index], index, array)) {
	          return false;
	        }
	      }
	      return true;
	    }
	
	    /**
	     * A specialized version of `baseExtremum` for arrays which invokes `iteratee`
	     * with one argument: (value).
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function arrayExtremum(array, iteratee, comparator, exValue) {
	      var index = -1,
	          length = array.length,
	          computed = exValue,
	          result = computed;
	
	      while (++index < length) {
	        var value = array[index],
	            current = +iteratee(value);
	
	        if (comparator(current, computed)) {
	          computed = current;
	          result = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * A specialized version of `_.filter` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function arrayFilter(array, predicate) {
	      var index = -1,
	          length = array.length,
	          resIndex = -1,
	          result = [];
	
	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * A specialized version of `_.map` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function arrayMap(array, iteratee) {
	      var index = -1,
	          length = array.length,
	          result = Array(length);
	
	      while (++index < length) {
	        result[index] = iteratee(array[index], index, array);
	      }
	      return result;
	    }
	
	    /**
	     * Appends the elements of `values` to `array`.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to append.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayPush(array, values) {
	      var index = -1,
	          length = values.length,
	          offset = array.length;
	
	      while (++index < length) {
	        array[offset + index] = values[index];
	      }
	      return array;
	    }
	
	    /**
	     * A specialized version of `_.reduce` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the first element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduce(array, iteratee, accumulator, initFromArray) {
	      var index = -1,
	          length = array.length;
	
	      if (initFromArray && length) {
	        accumulator = array[++index];
	      }
	      while (++index < length) {
	        accumulator = iteratee(accumulator, array[index], index, array);
	      }
	      return accumulator;
	    }
	
	    /**
	     * A specialized version of `_.reduceRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the last element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
	      var length = array.length;
	      if (initFromArray && length) {
	        accumulator = array[--length];
	      }
	      while (length--) {
	        accumulator = iteratee(accumulator, array[length], length, array);
	      }
	      return accumulator;
	    }
	
	    /**
	     * A specialized version of `_.some` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function arraySome(array, predicate) {
	      var index = -1,
	          length = array.length;
	
	      while (++index < length) {
	        if (predicate(array[index], index, array)) {
	          return true;
	        }
	      }
	      return false;
	    }
	
	    /**
	     * A specialized version of `_.sum` for arrays without support for callback
	     * shorthands and `this` binding..
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function arraySum(array, iteratee) {
	      var length = array.length,
	          result = 0;
	
	      while (length--) {
	        result += +iteratee(array[length]) || 0;
	      }
	      return result;
	    }
	
	    /**
	     * Used by `_.defaults` to customize its `_.assign` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : objectValue;
	    }
	
	    /**
	     * Used by `_.template` to customize its `_.assign` use.
	     *
	     * **Note:** This function is like `assignDefaults` except that it ignores
	     * inherited property values when checking if a property is `undefined`.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @param {string} key The key associated with the object and source values.
	     * @param {Object} object The destination object.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignOwnDefaults(objectValue, sourceValue, key, object) {
	      return (objectValue === undefined || !hasOwnProperty.call(object, key))
	        ? sourceValue
	        : objectValue;
	    }
	
	    /**
	     * A specialized version of `_.assign` for customizing assigned values without
	     * support for argument juggling, multiple sources, and `this` binding `customizer`
	     * functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     */
	    function assignWith(object, source, customizer) {
	      var index = -1,
	          props = keys(source),
	          length = props.length;
	
	      while (++index < length) {
	        var key = props[index],
	            value = object[key],
	            result = customizer(value, source[key], key, object, source);
	
	        if ((result === result ? (result !== value) : (value === value)) ||
	            (value === undefined && !(key in object))) {
	          object[key] = result;
	        }
	      }
	      return object;
	    }
	
	    /**
	     * The base implementation of `_.assign` without support for argument juggling,
	     * multiple sources, and `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */
	    function baseAssign(object, source) {
	      return source == null
	        ? object
	        : baseCopy(source, keys(source), object);
	    }
	
	    /**
	     * The base implementation of `_.at` without support for string collections
	     * and individual key arguments.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {number[]|string[]} props The property names or indexes of elements to pick.
	     * @returns {Array} Returns the new array of picked elements.
	     */
	    function baseAt(collection, props) {
	      var index = -1,
	          isNil = collection == null,
	          isArr = !isNil && isArrayLike(collection),
	          length = isArr ? collection.length : 0,
	          propsLength = props.length,
	          result = Array(propsLength);
	
	      while(++index < propsLength) {
	        var key = props[index];
	        if (isArr) {
	          result[index] = isIndex(key, length) ? collection[key] : undefined;
	        } else {
	          result[index] = isNil ? undefined : collection[key];
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property names to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @returns {Object} Returns `object`.
	     */
	    function baseCopy(source, props, object) {
	      object || (object = {});
	
	      var index = -1,
	          length = props.length;
	
	      while (++index < length) {
	        var key = props[index];
	        object[key] = source[key];
	      }
	      return object;
	    }
	
	    /**
	     * The base implementation of `_.callback` which supports specifying the
	     * number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function baseCallback(func, thisArg, argCount) {
	      var type = typeof func;
	      if (type == 'function') {
	        return thisArg === undefined
	          ? func
	          : bindCallback(func, thisArg, argCount);
	      }
	      if (func == null) {
	        return identity;
	      }
	      if (type == 'object') {
	        return baseMatches(func);
	      }
	      return thisArg === undefined
	        ? property(func)
	        : baseMatchesProperty(func, thisArg);
	    }
	
	    /**
	     * The base implementation of `_.clone` without support for argument juggling
	     * and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {string} [key] The key of `value`.
	     * @param {Object} [object] The object `value` belongs to.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates clones with source counterparts.
	     * @returns {*} Returns the cloned value.
	     */
	    function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
	      var result;
	      if (customizer) {
	        result = object ? customizer(value, key, object) : customizer(value);
	      }
	      if (result !== undefined) {
	        return result;
	      }
	      if (!isObject(value)) {
	        return value;
	      }
	      var isArr = isArray(value);
	      if (isArr) {
	        result = initCloneArray(value);
	        if (!isDeep) {
	          return arrayCopy(value, result);
	        }
	      } else {
	        var tag = objToString.call(value),
	            isFunc = tag == funcTag;
	
	        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	          result = initCloneObject(isFunc ? {} : value);
	          if (!isDeep) {
	            return baseAssign(result, value);
	          }
	        } else {
	          return cloneableTags[tag]
	            ? initCloneByTag(value, tag, isDeep)
	            : (object ? value : {});
	        }
	      }
	      // Check for circular references and return its corresponding clone.
	      stackA || (stackA = []);
	      stackB || (stackB = []);
	
	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == value) {
	          return stackB[length];
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate it with its clone.
	      stackA.push(value);
	      stackB.push(result);
	
	      // Recursively populate clone (susceptible to call stack limits).
	      (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
	        result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} prototype The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */
	    var baseCreate = (function() {
	      function object() {}
	      return function(prototype) {
	        if (isObject(prototype)) {
	          object.prototype = prototype;
	          var result = new object;
	          object.prototype = undefined;
	        }
	        return result || {};
	      };
	    }());
	
	    /**
	     * The base implementation of `_.delay` and `_.defer` which accepts an index
	     * of where to slice the arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Object} args The arguments provide to `func`.
	     * @returns {number} Returns the timer id.
	     */
	    function baseDelay(func, wait, args) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return setTimeout(function() { func.apply(undefined, args); }, wait);
	    }
	
	    /**
	     * The base implementation of `_.difference` which accepts a single array
	     * of values to exclude.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     */
	    function baseDifference(array, values) {
	      var length = array ? array.length : 0,
	          result = [];
	
	      if (!length) {
	        return result;
	      }
	      var index = -1,
	          indexOf = getIndexOf(),
	          isCommon = indexOf == baseIndexOf,
	          cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	          valuesLength = values.length;
	
	      if (cache) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	        values = cache;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index];
	
	        if (isCommon && value === value) {
	          var valuesIndex = valuesLength;
	          while (valuesIndex--) {
	            if (values[valuesIndex] === value) {
	              continue outer;
	            }
	          }
	          result.push(value);
	        }
	        else if (indexOf(values, value, 0) < 0) {
	          result.push(value);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.forEach` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEach = createBaseEach(baseForOwn);
	
	    /**
	     * The base implementation of `_.forEachRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEachRight = createBaseEach(baseForOwnRight, true);
	
	    /**
	     * The base implementation of `_.every` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */
	    function baseEvery(collection, predicate) {
	      var result = true;
	      baseEach(collection, function(value, index, collection) {
	        result = !!predicate(value, index, collection);
	        return result;
	      });
	      return result;
	    }
	
	    /**
	     * Gets the extremum value of `collection` invoking `iteratee` for each value
	     * in `collection` to generate the criterion by which the value is ranked.
	     * The `iteratee` is invoked with three arguments: (value, index|key, collection).
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function baseExtremum(collection, iteratee, comparator, exValue) {
	      var computed = exValue,
	          result = computed;
	
	      baseEach(collection, function(value, index, collection) {
	        var current = +iteratee(value, index, collection);
	        if (comparator(current, computed) || (current === exValue && current === result)) {
	          computed = current;
	          result = value;
	        }
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */
	    function baseFill(array, value, start, end) {
	      var length = array.length;
	
	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : (end >>> 0);
	      start >>>= 0;
	
	      while (start < length) {
	        array[start++] = value;
	      }
	      return array;
	    }
	
	    /**
	     * The base implementation of `_.filter` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function baseFilter(collection, predicate) {
	      var result = [];
	      baseEach(collection, function(value, index, collection) {
	        if (predicate(value, index, collection)) {
	          result.push(value);
	        }
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
	     * without support for callback shorthands and `this` binding, which iterates
	     * over `collection` using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @param {boolean} [retKey] Specify returning the key of the found element
	     *  instead of the element itself.
	     * @returns {*} Returns the found element or its key, else `undefined`.
	     */
	    function baseFind(collection, predicate, eachFunc, retKey) {
	      var result;
	      eachFunc(collection, function(value, key, collection) {
	        if (predicate(value, key, collection)) {
	          result = retKey ? key : value;
	          return false;
	        }
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.flatten` with added support for restricting
	     * flattening and specifying the start index.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	     * @param {Array} [result=[]] The initial result value.
	     * @returns {Array} Returns the new flattened array.
	     */
	    function baseFlatten(array, isDeep, isStrict, result) {
	      result || (result = []);
	
	      var index = -1,
	          length = array.length;
	
	      while (++index < length) {
	        var value = array[index];
	        if (isObjectLike(value) && isArrayLike(value) &&
	            (isStrict || isArray(value) || isArguments(value))) {
	          if (isDeep) {
	            // Recursively flatten arrays (susceptible to call stack limits).
	            baseFlatten(value, isDeep, isStrict, result);
	          } else {
	            arrayPush(result, value);
	          }
	        } else if (!isStrict) {
	          result[result.length] = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `baseForIn` and `baseForOwn` which iterates
	     * over `object` properties returned by `keysFunc` invoking `iteratee` for
	     * each property. Iteratee functions may exit iteration early by explicitly
	     * returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseFor = createBaseFor();
	
	    /**
	     * This function is like `baseFor` except that it iterates over properties
	     * in the opposite order.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseForRight = createBaseFor(true);
	
	    /**
	     * The base implementation of `_.forIn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForIn(object, iteratee) {
	      return baseFor(object, iteratee, keysIn);
	    }
	
	    /**
	     * The base implementation of `_.forOwn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwn(object, iteratee) {
	      return baseFor(object, iteratee, keys);
	    }
	
	    /**
	     * The base implementation of `_.forOwnRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwnRight(object, iteratee) {
	      return baseForRight(object, iteratee, keys);
	    }
	
	    /**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from those provided.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the new array of filtered property names.
	     */
	    function baseFunctions(object, props) {
	      var index = -1,
	          length = props.length,
	          resIndex = -1,
	          result = [];
	
	      while (++index < length) {
	        var key = props[index];
	        if (isFunction(object[key])) {
	          result[++resIndex] = key;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `get` without support for string paths
	     * and default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path of the property to get.
	     * @param {string} [pathKey] The key representation of path.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseGet(object, path, pathKey) {
	      if (object == null) {
	        return;
	      }
	      if (pathKey !== undefined && pathKey in toObject(object)) {
	        path = [pathKey];
	      }
	      var index = 0,
	          length = path.length;
	
	      while (object != null && index < length) {
	        object = object[path[index++]];
	      }
	      return (index && index == length) ? object : undefined;
	    }
	
	    /**
	     * The base implementation of `_.isEqual` without support for `this` binding
	     * `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     */
	    function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	      if (value === other) {
	        return true;
	      }
	      if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	        return value !== value && other !== other;
	      }
	      return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	    }
	
	    /**
	     * A specialized version of `baseIsEqual` for arrays and objects which performs
	     * deep comparisons and tracks traversed objects enabling objects with circular
	     * references to be compared.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	     * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objIsArr = isArray(object),
	          othIsArr = isArray(other),
	          objTag = arrayTag,
	          othTag = arrayTag;
	
	      if (!objIsArr) {
	        objTag = objToString.call(object);
	        if (objTag == argsTag) {
	          objTag = objectTag;
	        } else if (objTag != objectTag) {
	          objIsArr = isTypedArray(object);
	        }
	      }
	      if (!othIsArr) {
	        othTag = objToString.call(other);
	        if (othTag == argsTag) {
	          othTag = objectTag;
	        } else if (othTag != objectTag) {
	          othIsArr = isTypedArray(other);
	        }
	      }
	      var objIsObj = objTag == objectTag,
	          othIsObj = othTag == objectTag,
	          isSameTag = objTag == othTag;
	
	      if (isSameTag && !(objIsArr || objIsObj)) {
	        return equalByTag(object, other, objTag);
	      }
	      if (!isLoose) {
	        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	        if (objIsWrapped || othIsWrapped) {
	          return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	        }
	      }
	      if (!isSameTag) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      // For more information on detecting circular references see https://es5.github.io/#JO.
	      stackA || (stackA = []);
	      stackB || (stackB = []);
	
	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == object) {
	          return stackB[length] == other;
	        }
	      }
	      // Add `object` and `other` to the stack of traversed objects.
	      stackA.push(object);
	      stackB.push(other);
	
	      var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
	
	      stackA.pop();
	      stackB.pop();
	
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.isMatch` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} matchData The propery names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */
	    function baseIsMatch(object, matchData, customizer) {
	      var index = matchData.length,
	          length = index,
	          noCustomizer = !customizer;
	
	      if (object == null) {
	        return !length;
	      }
	      object = toObject(object);
	      while (index--) {
	        var data = matchData[index];
	        if ((noCustomizer && data[2])
	              ? data[1] !== object[data[0]]
	              : !(data[0] in object)
	            ) {
	          return false;
	        }
	      }
	      while (++index < length) {
	        data = matchData[index];
	        var key = data[0],
	            objValue = object[key],
	            srcValue = data[1];
	
	        if (noCustomizer && data[2]) {
	          if (objValue === undefined && !(key in object)) {
	            return false;
	          }
	        } else {
	          var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	          if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }
	
	    /**
	     * The base implementation of `_.map` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function baseMap(collection, iteratee) {
	      var index = -1,
	          result = isArrayLike(collection) ? Array(collection.length) : [];
	
	      baseEach(collection, function(value, key, collection) {
	        result[++index] = iteratee(value, key, collection);
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.matches` which does not clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatches(source) {
	      var matchData = getMatchData(source);
	      if (matchData.length == 1 && matchData[0][2]) {
	        var key = matchData[0][0],
	            value = matchData[0][1];
	
	        return function(object) {
	          if (object == null) {
	            return false;
	          }
	          return object[key] === value && (value !== undefined || (key in toObject(object)));
	        };
	      }
	      return function(object) {
	        return baseIsMatch(object, matchData);
	      };
	    }
	
	    /**
	     * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to compare.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatchesProperty(path, srcValue) {
	      var isArr = isArray(path),
	          isCommon = isKey(path) && isStrictComparable(srcValue),
	          pathKey = (path + '');
	
	      path = toPath(path);
	      return function(object) {
	        if (object == null) {
	          return false;
	        }
	        var key = pathKey;
	        object = toObject(object);
	        if ((isArr || !isCommon) && !(key in object)) {
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          if (object == null) {
	            return false;
	          }
	          key = last(path);
	          object = toObject(object);
	        }
	        return object[key] === srcValue
	          ? (srcValue !== undefined || (key in object))
	          : baseIsEqual(srcValue, object[key], undefined, true);
	      };
	    }
	
	    /**
	     * The base implementation of `_.merge` without support for argument juggling,
	     * multiple sources, and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {Object} Returns `object`.
	     */
	    function baseMerge(object, source, customizer, stackA, stackB) {
	      if (!isObject(object)) {
	        return object;
	      }
	      var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
	          props = isSrcArr ? undefined : keys(source);
	
	      arrayEach(props || source, function(srcValue, key) {
	        if (props) {
	          key = srcValue;
	          srcValue = source[key];
	        }
	        if (isObjectLike(srcValue)) {
	          stackA || (stackA = []);
	          stackB || (stackB = []);
	          baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
	        }
	        else {
	          var value = object[key],
	              result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	              isCommon = result === undefined;
	
	          if (isCommon) {
	            result = srcValue;
	          }
	          if ((result !== undefined || (isSrcArr && !(key in object))) &&
	              (isCommon || (result === result ? (result !== value) : (value === value)))) {
	            object[key] = result;
	          }
	        }
	      });
	      return object;
	    }
	
	    /**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
	      var length = stackA.length,
	          srcValue = source[key];
	
	      while (length--) {
	        if (stackA[length] == srcValue) {
	          object[key] = stackB[length];
	          return;
	        }
	      }
	      var value = object[key],
	          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	          isCommon = result === undefined;
	
	      if (isCommon) {
	        result = srcValue;
	        if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
	          result = isArray(value)
	            ? value
	            : (isArrayLike(value) ? arrayCopy(value) : []);
	        }
	        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	          result = isArguments(value)
	            ? toPlainObject(value)
	            : (isPlainObject(value) ? value : {});
	        }
	        else {
	          isCommon = false;
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate
	      // it with its merged value.
	      stackA.push(srcValue);
	      stackB.push(result);
	
	      if (isCommon) {
	        // Recursively merge objects and arrays (susceptible to call stack limits).
	        object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
	      } else if (result === result ? (result !== value) : (value === value)) {
	        object[key] = result;
	      }
	    }
	
	    /**
	     * The base implementation of `_.property` without support for deep paths.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function baseProperty(key) {
	      return function(object) {
	        return object == null ? undefined : object[key];
	      };
	    }
	
	    /**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function basePropertyDeep(path) {
	      var pathKey = (path + '');
	      path = toPath(path);
	      return function(object) {
	        return baseGet(object, path, pathKey);
	      };
	    }
	
	    /**
	     * The base implementation of `_.pullAt` without support for individual
	     * index arguments and capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */
	    function basePullAt(array, indexes) {
	      var length = array ? indexes.length : 0;
	      while (length--) {
	        var index = indexes[length];
	        if (index != previous && isIndex(index)) {
	          var previous = index;
	          splice.call(array, index, 1);
	        }
	      }
	      return array;
	    }
	
	    /**
	     * The base implementation of `_.random` without support for argument juggling
	     * and returning floating-point numbers.
	     *
	     * @private
	     * @param {number} min The minimum possible value.
	     * @param {number} max The maximum possible value.
	     * @returns {number} Returns the random number.
	     */
	    function baseRandom(min, max) {
	      return min + nativeFloor(nativeRandom() * (max - min + 1));
	    }
	
	    /**
	     * The base implementation of `_.reduce` and `_.reduceRight` without support
	     * for callback shorthands and `this` binding, which iterates over `collection`
	     * using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} accumulator The initial value.
	     * @param {boolean} initFromCollection Specify using the first or last element
	     *  of `collection` as the initial value.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @returns {*} Returns the accumulated value.
	     */
	    function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
	      eachFunc(collection, function(value, index, collection) {
	        accumulator = initFromCollection
	          ? (initFromCollection = false, value)
	          : iteratee(accumulator, value, index, collection);
	      });
	      return accumulator;
	    }
	
	    /**
	     * The base implementation of `setData` without support for hot loop detection.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var baseSetData = !metaMap ? identity : function(func, data) {
	      metaMap.set(func, data);
	      return func;
	    };
	
	    /**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseSlice(array, start, end) {
	      var index = -1,
	          length = array.length;
	
	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : ((end - start) >>> 0);
	      start >>>= 0;
	
	      var result = Array(length);
	      while (++index < length) {
	        result[index] = array[index + start];
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.some` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function baseSome(collection, predicate) {
	      var result;
	
	      baseEach(collection, function(value, index, collection) {
	        result = predicate(value, index, collection);
	        return !result;
	      });
	      return !!result;
	    }
	
	    /**
	     * The base implementation of `_.sortBy` which uses `comparer` to define
	     * the sort order of `array` and replaces criteria objects with their
	     * corresponding values.
	     *
	     * @private
	     * @param {Array} array The array to sort.
	     * @param {Function} comparer The function to define sort order.
	     * @returns {Array} Returns `array`.
	     */
	    function baseSortBy(array, comparer) {
	      var length = array.length;
	
	      array.sort(comparer);
	      while (length--) {
	        array[length] = array[length].value;
	      }
	      return array;
	    }
	
	    /**
	     * The base implementation of `_.sortByOrder` without param guards.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */
	    function baseSortByOrder(collection, iteratees, orders) {
	      var callback = getCallback(),
	          index = -1;
	
	      iteratees = arrayMap(iteratees, function(iteratee) { return callback(iteratee); });
	
	      var result = baseMap(collection, function(value) {
	        var criteria = arrayMap(iteratees, function(iteratee) { return iteratee(value); });
	        return { 'criteria': criteria, 'index': ++index, 'value': value };
	      });
	
	      return baseSortBy(result, function(object, other) {
	        return compareMultiple(object, other, orders);
	      });
	    }
	
	    /**
	     * The base implementation of `_.sum` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function baseSum(collection, iteratee) {
	      var result = 0;
	      baseEach(collection, function(value, index, collection) {
	        result += +iteratee(value, index, collection) || 0;
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.uniq` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The function invoked per iteration.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     */
	    function baseUniq(array, iteratee) {
	      var index = -1,
	          indexOf = getIndexOf(),
	          length = array.length,
	          isCommon = indexOf == baseIndexOf,
	          isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
	          seen = isLarge ? createCache() : null,
	          result = [];
	
	      if (seen) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	      } else {
	        isLarge = false;
	        seen = iteratee ? [] : result;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value, index, array) : value;
	
	        if (isCommon && value === value) {
	          var seenIndex = seen.length;
	          while (seenIndex--) {
	            if (seen[seenIndex] === computed) {
	              continue outer;
	            }
	          }
	          if (iteratee) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	        else if (indexOf(seen, computed, 0) < 0) {
	          if (iteratee || isLarge) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.values` and `_.valuesIn` which creates an
	     * array of `object` property values corresponding to the property names
	     * of `props`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} props The property names to get values for.
	     * @returns {Object} Returns the array of property values.
	     */
	    function baseValues(object, props) {
	      var index = -1,
	          length = props.length,
	          result = Array(length);
	
	      while (++index < length) {
	        result[index] = object[props[index]];
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.dropRightWhile`, `_.dropWhile`, `_.takeRightWhile`,
	     * and `_.takeWhile` without support for callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseWhile(array, predicate, isDrop, fromRight) {
	      var length = array.length,
	          index = fromRight ? length : -1;
	
	      while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
	      return isDrop
	        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
	        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
	    }
	
	    /**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to peform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseWrapperValue(value, actions) {
	      var result = value;
	      if (result instanceof LazyWrapper) {
	        result = result.value();
	      }
	      var index = -1,
	          length = actions.length;
	
	      while (++index < length) {
	        var action = actions[index];
	        result = action.func.apply(action.thisArg, arrayPush([result], action.args));
	      }
	      return result;
	    }
	
	    /**
	     * Performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndex(array, value, retHighest) {
	      var low = 0,
	          high = array ? array.length : low;
	
	      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
	        while (low < high) {
	          var mid = (low + high) >>> 1,
	              computed = array[mid];
	
	          if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
	            low = mid + 1;
	          } else {
	            high = mid;
	          }
	        }
	        return high;
	      }
	      return binaryIndexBy(array, value, identity, retHighest);
	    }
	
	    /**
	     * This function is like `binaryIndex` except that it invokes `iteratee` for
	     * `value` and each element of `array` to compute their sort ranking. The
	     * iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndexBy(array, value, iteratee, retHighest) {
	      value = iteratee(value);
	
	      var low = 0,
	          high = array ? array.length : 0,
	          valIsNaN = value !== value,
	          valIsNull = value === null,
	          valIsUndef = value === undefined;
	
	      while (low < high) {
	        var mid = nativeFloor((low + high) / 2),
	            computed = iteratee(array[mid]),
	            isDef = computed !== undefined,
	            isReflexive = computed === computed;
	
	        if (valIsNaN) {
	          var setLow = isReflexive || retHighest;
	        } else if (valIsNull) {
	          setLow = isReflexive && isDef && (retHighest || computed != null);
	        } else if (valIsUndef) {
	          setLow = isReflexive && (retHighest || isDef);
	        } else if (computed == null) {
	          setLow = false;
	        } else {
	          setLow = retHighest ? (computed <= value) : (computed < value);
	        }
	        if (setLow) {
	          low = mid + 1;
	        } else {
	          high = mid;
	        }
	      }
	      return nativeMin(high, MAX_ARRAY_INDEX);
	    }
	
	    /**
	     * A specialized version of `baseCallback` which only supports `this` binding
	     * and specifying the number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function bindCallback(func, thisArg, argCount) {
	      if (typeof func != 'function') {
	        return identity;
	      }
	      if (thisArg === undefined) {
	        return func;
	      }
	      switch (argCount) {
	        case 1: return function(value) {
	          return func.call(thisArg, value);
	        };
	        case 3: return function(value, index, collection) {
	          return func.call(thisArg, value, index, collection);
	        };
	        case 4: return function(accumulator, value, index, collection) {
	          return func.call(thisArg, accumulator, value, index, collection);
	        };
	        case 5: return function(value, other, key, object, source) {
	          return func.call(thisArg, value, other, key, object, source);
	        };
	      }
	      return function() {
	        return func.apply(thisArg, arguments);
	      };
	    }
	
	    /**
	     * Creates a clone of the given array buffer.
	     *
	     * @private
	     * @param {ArrayBuffer} buffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */
	    function bufferClone(buffer) {
	      var result = new ArrayBuffer(buffer.byteLength),
	          view = new Uint8Array(result);
	
	      view.set(new Uint8Array(buffer));
	      return result;
	    }
	
	    /**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgs(args, partials, holders) {
	      var holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          leftIndex = -1,
	          leftLength = partials.length,
	          result = Array(leftLength + argsLength);
	
	      while (++leftIndex < leftLength) {
	        result[leftIndex] = partials[leftIndex];
	      }
	      while (++argsIndex < holdersLength) {
	        result[holders[argsIndex]] = args[argsIndex];
	      }
	      while (argsLength--) {
	        result[leftIndex++] = args[argsIndex++];
	      }
	      return result;
	    }
	
	    /**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgsRight(args, partials, holders) {
	      var holdersIndex = -1,
	          holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          rightIndex = -1,
	          rightLength = partials.length,
	          result = Array(argsLength + rightLength);
	
	      while (++argsIndex < argsLength) {
	        result[argsIndex] = args[argsIndex];
	      }
	      var offset = argsIndex;
	      while (++rightIndex < rightLength) {
	        result[offset + rightIndex] = partials[rightIndex];
	      }
	      while (++holdersIndex < holdersLength) {
	        result[offset + holders[holdersIndex]] = args[argsIndex++];
	      }
	      return result;
	    }
	
	    /**
	     * Creates a `_.countBy`, `_.groupBy`, `_.indexBy`, or `_.partition` function.
	     *
	     * @private
	     * @param {Function} setter The function to set keys and values of the accumulator object.
	     * @param {Function} [initializer] The function to initialize the accumulator object.
	     * @returns {Function} Returns the new aggregator function.
	     */
	    function createAggregator(setter, initializer) {
	      return function(collection, iteratee, thisArg) {
	        var result = initializer ? initializer() : {};
	        iteratee = getCallback(iteratee, thisArg, 3);
	
	        if (isArray(collection)) {
	          var index = -1,
	              length = collection.length;
	
	          while (++index < length) {
	            var value = collection[index];
	            setter(result, value, iteratee(value, index, collection), collection);
	          }
	        } else {
	          baseEach(collection, function(value, key, collection) {
	            setter(result, value, iteratee(value, key, collection), collection);
	          });
	        }
	        return result;
	      };
	    }
	
	    /**
	     * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */
	    function createAssigner(assigner) {
	      return restParam(function(object, sources) {
	        var index = -1,
	            length = object == null ? 0 : sources.length,
	            customizer = length > 2 ? sources[length - 2] : undefined,
	            guard = length > 2 ? sources[2] : undefined,
	            thisArg = length > 1 ? sources[length - 1] : undefined;
	
	        if (typeof customizer == 'function') {
	          customizer = bindCallback(customizer, thisArg, 5);
	          length -= 2;
	        } else {
	          customizer = typeof thisArg == 'function' ? thisArg : undefined;
	          length -= (customizer ? 1 : 0);
	        }
	        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	          customizer = length < 3 ? undefined : customizer;
	          length = 1;
	        }
	        while (++index < length) {
	          var source = sources[index];
	          if (source) {
	            assigner(object, source, customizer);
	          }
	        }
	        return object;
	      });
	    }
	
	    /**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseEach(eachFunc, fromRight) {
	      return function(collection, iteratee) {
	        var length = collection ? getLength(collection) : 0;
	        if (!isLength(length)) {
	          return eachFunc(collection, iteratee);
	        }
	        var index = fromRight ? length : -1,
	            iterable = toObject(collection);
	
	        while ((fromRight ? index-- : ++index < length)) {
	          if (iteratee(iterable[index], index, iterable) === false) {
	            break;
	          }
	        }
	        return collection;
	      };
	    }
	
	    /**
	     * Creates a base function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseFor(fromRight) {
	      return function(object, iteratee, keysFunc) {
	        var iterable = toObject(object),
	            props = keysFunc(object),
	            length = props.length,
	            index = fromRight ? length : -1;
	
	        while ((fromRight ? index-- : ++index < length)) {
	          var key = props[index];
	          if (iteratee(iterable[key], key, iterable) === false) {
	            break;
	          }
	        }
	        return object;
	      };
	    }
	
	    /**
	     * Creates a function that wraps `func` and invokes it with the `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createBindWrapper(func, thisArg) {
	      var Ctor = createCtorWrapper(func);
	
	      function wrapper() {
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(thisArg, arguments);
	      }
	      return wrapper;
	    }
	
	    /**
	     * Creates a `Set` cache object to optimize linear searches of large arrays.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	     */
	    function createCache(values) {
	      return (nativeCreate && Set) ? new SetCache(values) : null;
	    }
	
	    /**
	     * Creates a function that produces compound words out of the words in a
	     * given string.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */
	    function createCompounder(callback) {
	      return function(string) {
	        var index = -1,
	            array = words(deburr(string)),
	            length = array.length,
	            result = '';
	
	        while (++index < length) {
	          result = callback(result, array[index], index);
	        }
	        return result;
	      };
	    }
	
	    /**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createCtorWrapper(Ctor) {
	      return function() {
	        // Use a `switch` statement to work with class constructors.
	        // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	        // for more details.
	        var args = arguments;
	        switch (args.length) {
	          case 0: return new Ctor;
	          case 1: return new Ctor(args[0]);
	          case 2: return new Ctor(args[0], args[1]);
	          case 3: return new Ctor(args[0], args[1], args[2]);
	          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	        }
	        var thisBinding = baseCreate(Ctor.prototype),
	            result = Ctor.apply(thisBinding, args);
	
	        // Mimic the constructor's `return` behavior.
	        // See https://es5.github.io/#x13.2.2 for more details.
	        return isObject(result) ? result : thisBinding;
	      };
	    }
	
	    /**
	     * Creates a `_.curry` or `_.curryRight` function.
	     *
	     * @private
	     * @param {boolean} flag The curry bit flag.
	     * @returns {Function} Returns the new curry function.
	     */
	    function createCurry(flag) {
	      function curryFunc(func, arity, guard) {
	        if (guard && isIterateeCall(func, arity, guard)) {
	          arity = undefined;
	        }
	        var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
	        result.placeholder = curryFunc.placeholder;
	        return result;
	      }
	      return curryFunc;
	    }
	
	    /**
	     * Creates a `_.defaults` or `_.defaultsDeep` function.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Function} Returns the new defaults function.
	     */
	    function createDefaults(assigner, customizer) {
	      return restParam(function(args) {
	        var object = args[0];
	        if (object == null) {
	          return object;
	        }
	        args.push(customizer);
	        return assigner.apply(undefined, args);
	      });
	    }
	
	    /**
	     * Creates a `_.max` or `_.min` function.
	     *
	     * @private
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {Function} Returns the new extremum function.
	     */
	    function createExtremum(comparator, exValue) {
	      return function(collection, iteratee, thisArg) {
	        if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	          iteratee = undefined;
	        }
	        iteratee = getCallback(iteratee, thisArg, 3);
	        if (iteratee.length == 1) {
	          collection = isArray(collection) ? collection : toIterable(collection);
	          var result = arrayExtremum(collection, iteratee, comparator, exValue);
	          if (!(collection.length && result === exValue)) {
	            return result;
	          }
	        }
	        return baseExtremum(collection, iteratee, comparator, exValue);
	      };
	    }
	
	    /**
	     * Creates a `_.find` or `_.findLast` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFind(eachFunc, fromRight) {
	      return function(collection, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        if (isArray(collection)) {
	          var index = baseFindIndex(collection, predicate, fromRight);
	          return index > -1 ? collection[index] : undefined;
	        }
	        return baseFind(collection, predicate, eachFunc);
	      };
	    }
	
	    /**
	     * Creates a `_.findIndex` or `_.findLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindIndex(fromRight) {
	      return function(array, predicate, thisArg) {
	        if (!(array && array.length)) {
	          return -1;
	        }
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFindIndex(array, predicate, fromRight);
	      };
	    }
	
	    /**
	     * Creates a `_.findKey` or `_.findLastKey` function.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindKey(objectFunc) {
	      return function(object, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFind(object, predicate, objectFunc, true);
	      };
	    }
	
	    /**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */
	    function createFlow(fromRight) {
	      return function() {
	        var wrapper,
	            length = arguments.length,
	            index = fromRight ? length : -1,
	            leftIndex = 0,
	            funcs = Array(length);
	
	        while ((fromRight ? index-- : ++index < length)) {
	          var func = funcs[leftIndex++] = arguments[index];
	          if (typeof func != 'function') {
	            throw new TypeError(FUNC_ERROR_TEXT);
	          }
	          if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
	            wrapper = new LodashWrapper([], true);
	          }
	        }
	        index = wrapper ? -1 : length;
	        while (++index < length) {
	          func = funcs[index];
	
	          var funcName = getFuncName(func),
	              data = funcName == 'wrapper' ? getData(func) : undefined;
	
	          if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
	            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
	          } else {
	            wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
	          }
	        }
	        return function() {
	          var args = arguments,
	              value = args[0];
	
	          if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
	            return wrapper.plant(value).value();
	          }
	          var index = 0,
	              result = length ? funcs[index].apply(this, args) : value;
	
	          while (++index < length) {
	            result = funcs[index].call(this, result);
	          }
	          return result;
	        };
	      };
	    }
	
	    /**
	     * Creates a function for `_.forEach` or `_.forEachRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForEach(arrayFunc, eachFunc) {
	      return function(collection, iteratee, thisArg) {
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee)
	          : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
	      };
	    }
	
	    /**
	     * Creates a function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForIn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee, keysIn);
	      };
	    }
	
	    /**
	     * Creates a function for `_.forOwn` or `_.forOwnRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForOwn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee);
	      };
	    }
	
	    /**
	     * Creates a function for `_.mapKeys` or `_.mapValues`.
	     *
	     * @private
	     * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
	     * @returns {Function} Returns the new map function.
	     */
	    function createObjectMapper(isMapKeys) {
	      return function(object, iteratee, thisArg) {
	        var result = {};
	        iteratee = getCallback(iteratee, thisArg, 3);
	
	        baseForOwn(object, function(value, key, object) {
	          var mapped = iteratee(value, key, object);
	          key = isMapKeys ? mapped : key;
	          value = isMapKeys ? value : mapped;
	          result[key] = value;
	        });
	        return result;
	      };
	    }
	
	    /**
	     * Creates a function for `_.padLeft` or `_.padRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify padding from the right.
	     * @returns {Function} Returns the new pad function.
	     */
	    function createPadDir(fromRight) {
	      return function(string, length, chars) {
	        string = baseToString(string);
	        return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
	      };
	    }
	
	    /**
	     * Creates a `_.partial` or `_.partialRight` function.
	     *
	     * @private
	     * @param {boolean} flag The partial bit flag.
	     * @returns {Function} Returns the new partial function.
	     */
	    function createPartial(flag) {
	      var partialFunc = restParam(function(func, partials) {
	        var holders = replaceHolders(partials, partialFunc.placeholder);
	        return createWrapper(func, flag, undefined, partials, holders);
	      });
	      return partialFunc;
	    }
	
	    /**
	     * Creates a function for `_.reduce` or `_.reduceRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createReduce(arrayFunc, eachFunc) {
	      return function(collection, iteratee, accumulator, thisArg) {
	        var initFromArray = arguments.length < 3;
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee, accumulator, initFromArray)
	          : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
	      };
	    }
	
	    /**
	     * Creates a function that wraps `func` and invokes it with optional `this`
	     * binding of, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	      var isAry = bitmask & ARY_FLAG,
	          isBind = bitmask & BIND_FLAG,
	          isBindKey = bitmask & BIND_KEY_FLAG,
	          isCurry = bitmask & CURRY_FLAG,
	          isCurryBound = bitmask & CURRY_BOUND_FLAG,
	          isCurryRight = bitmask & CURRY_RIGHT_FLAG,
	          Ctor = isBindKey ? undefined : createCtorWrapper(func);
	
	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it to other functions.
	        var length = arguments.length,
	            index = length,
	            args = Array(length);
	
	        while (index--) {
	          args[index] = arguments[index];
	        }
	        if (partials) {
	          args = composeArgs(args, partials, holders);
	        }
	        if (partialsRight) {
	          args = composeArgsRight(args, partialsRight, holdersRight);
	        }
	        if (isCurry || isCurryRight) {
	          var placeholder = wrapper.placeholder,
	              argsHolders = replaceHolders(args, placeholder);
	
	          length -= argsHolders.length;
	          if (length < arity) {
	            var newArgPos = argPos ? arrayCopy(argPos) : undefined,
	                newArity = nativeMax(arity - length, 0),
	                newsHolders = isCurry ? argsHolders : undefined,
	                newHoldersRight = isCurry ? undefined : argsHolders,
	                newPartials = isCurry ? args : undefined,
	                newPartialsRight = isCurry ? undefined : args;
	
	            bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
	            bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
	
	            if (!isCurryBound) {
	              bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
	            }
	            var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
	                result = createHybridWrapper.apply(undefined, newData);
	
	            if (isLaziable(func)) {
	              setData(result, newData);
	            }
	            result.placeholder = placeholder;
	            return result;
	          }
	        }
	        var thisBinding = isBind ? thisArg : this,
	            fn = isBindKey ? thisBinding[func] : func;
	
	        if (argPos) {
	          args = reorder(args, argPos);
	        }
	        if (isAry && ary < args.length) {
	          args.length = ary;
	        }
	        if (this && this !== root && this instanceof wrapper) {
	          fn = Ctor || createCtorWrapper(func);
	        }
	        return fn.apply(thisBinding, args);
	      }
	      return wrapper;
	    }
	
	    /**
	     * Creates the padding required for `string` based on the given `length`.
	     * The `chars` string is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {string} string The string to create padding for.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the pad for `string`.
	     */
	    function createPadding(string, length, chars) {
	      var strLength = string.length;
	      length = +length;
	
	      if (strLength >= length || !nativeIsFinite(length)) {
	        return '';
	      }
	      var padLength = length - strLength;
	      chars = chars == null ? ' ' : (chars + '');
	      return repeat(chars, nativeCeil(padLength / chars.length)).slice(0, padLength);
	    }
	
	    /**
	     * Creates a function that wraps `func` and invokes it with the optional `this`
	     * binding of `thisArg` and the `partials` prepended to those provided to
	     * the wrapper.
	     *
	     * @private
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to the new function.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createPartialWrapper(func, bitmask, thisArg, partials) {
	      var isBind = bitmask & BIND_FLAG,
	          Ctor = createCtorWrapper(func);
	
	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it `func`.
	        var argsIndex = -1,
	            argsLength = arguments.length,
	            leftIndex = -1,
	            leftLength = partials.length,
	            args = Array(leftLength + argsLength);
	
	        while (++leftIndex < leftLength) {
	          args[leftIndex] = partials[leftIndex];
	        }
	        while (argsLength--) {
	          args[leftIndex++] = arguments[++argsIndex];
	        }
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(isBind ? thisArg : this, args);
	      }
	      return wrapper;
	    }
	
	    /**
	     * Creates a `_.ceil`, `_.floor`, or `_.round` function.
	     *
	     * @private
	     * @param {string} methodName The name of the `Math` method to use when rounding.
	     * @returns {Function} Returns the new round function.
	     */
	    function createRound(methodName) {
	      var func = Math[methodName];
	      return function(number, precision) {
	        precision = precision === undefined ? 0 : (+precision || 0);
	        if (precision) {
	          precision = pow(10, precision);
	          return func(number * precision) / precision;
	        }
	        return func(number);
	      };
	    }
	
	    /**
	     * Creates a `_.sortedIndex` or `_.sortedLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {Function} Returns the new index function.
	     */
	    function createSortedIndex(retHighest) {
	      return function(array, value, iteratee, thisArg) {
	        var callback = getCallback(iteratee);
	        return (iteratee == null && callback === baseCallback)
	          ? binaryIndex(array, value, retHighest)
	          : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
	      };
	    }
	
	    /**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags.
	     *  The bitmask may be composed of the following flags:
	     *     1 - `_.bind`
	     *     2 - `_.bindKey`
	     *     4 - `_.curry` or `_.curryRight` of a bound function
	     *     8 - `_.curry`
	     *    16 - `_.curryRight`
	     *    32 - `_.partial`
	     *    64 - `_.partialRight`
	     *   128 - `_.rearg`
	     *   256 - `_.ary`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	      var isBindKey = bitmask & BIND_KEY_FLAG;
	      if (!isBindKey && typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = partials ? partials.length : 0;
	      if (!length) {
	        bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
	        partials = holders = undefined;
	      }
	      length -= (holders ? holders.length : 0);
	      if (bitmask & PARTIAL_RIGHT_FLAG) {
	        var partialsRight = partials,
	            holdersRight = holders;
	
	        partials = holders = undefined;
	      }
	      var data = isBindKey ? undefined : getData(func),
	          newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
	
	      if (data) {
	        mergeData(newData, data);
	        bitmask = newData[1];
	        arity = newData[9];
	      }
	      newData[9] = arity == null
	        ? (isBindKey ? 0 : func.length)
	        : (nativeMax(arity - length, 0) || 0);
	
	      if (bitmask == BIND_FLAG) {
	        var result = createBindWrapper(newData[0], newData[2]);
	      } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
	        result = createPartialWrapper.apply(undefined, newData);
	      } else {
	        result = createHybridWrapper.apply(undefined, newData);
	      }
	      var setter = data ? baseSetData : setData;
	      return setter(result, newData);
	    }
	
	    /**
	     * A specialized version of `baseIsEqualDeep` for arrays with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Array} array The array to compare.
	     * @param {Array} other The other array to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing arrays.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	     */
	    function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var index = -1,
	          arrLength = array.length,
	          othLength = other.length;
	
	      if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	        return false;
	      }
	      // Ignore non-index properties.
	      while (++index < arrLength) {
	        var arrValue = array[index],
	            othValue = other[index],
	            result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
	
	        if (result !== undefined) {
	          if (result) {
	            continue;
	          }
	          return false;
	        }
	        // Recursively compare arrays (susceptible to call stack limits).
	        if (isLoose) {
	          if (!arraySome(other, function(othValue) {
	                return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	              })) {
	            return false;
	          }
	        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	          return false;
	        }
	      }
	      return true;
	    }
	
	    /**
	     * A specialized version of `baseIsEqualDeep` for comparing objects of
	     * the same `toStringTag`.
	     *
	     * **Note:** This function only supports comparing values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {string} tag The `toStringTag` of the objects to compare.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalByTag(object, other, tag) {
	      switch (tag) {
	        case boolTag:
	        case dateTag:
	          // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	          // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	          return +object == +other;
	
	        case errorTag:
	          return object.name == other.name && object.message == other.message;
	
	        case numberTag:
	          // Treat `NaN` vs. `NaN` as equal.
	          return (object != +object)
	            ? other != +other
	            : object == +other;
	
	        case regexpTag:
	        case stringTag:
	          // Coerce regexes to strings and treat strings primitives and string
	          // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	          return object == (other + '');
	      }
	      return false;
	    }
	
	    /**
	     * A specialized version of `baseIsEqualDeep` for objects with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objProps = keys(object),
	          objLength = objProps.length,
	          othProps = keys(other),
	          othLength = othProps.length;
	
	      if (objLength != othLength && !isLoose) {
	        return false;
	      }
	      var index = objLength;
	      while (index--) {
	        var key = objProps[index];
	        if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	          return false;
	        }
	      }
	      var skipCtor = isLoose;
	      while (++index < objLength) {
	        key = objProps[index];
	        var objValue = object[key],
	            othValue = other[key],
	            result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;
	
	        // Recursively compare objects (susceptible to call stack limits).
	        if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	          return false;
	        }
	        skipCtor || (skipCtor = key == 'constructor');
	      }
	      if (!skipCtor) {
	        var objCtor = object.constructor,
	            othCtor = other.constructor;
	
	        // Non `Object` object instances with different constructors are not equal.
	        if (objCtor != othCtor &&
	            ('constructor' in object && 'constructor' in other) &&
	            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	          return false;
	        }
	      }
	      return true;
	    }
	
	    /**
	     * Gets the appropriate "callback" function. If the `_.callback` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseCallback` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function} Returns the chosen function or its result.
	     */
	    function getCallback(func, thisArg, argCount) {
	      var result = lodash.callback || callback;
	      result = result === callback ? baseCallback : result;
	      return argCount ? result(func, thisArg, argCount) : result;
	    }
	
	    /**
	     * Gets metadata for `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {*} Returns the metadata for `func`.
	     */
	    var getData = !metaMap ? noop : function(func) {
	      return metaMap.get(func);
	    };
	
	    /**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */
	    function getFuncName(func) {
	      var result = func.name,
	          array = realNames[result],
	          length = array ? array.length : 0;
	
	      while (length--) {
	        var data = array[length],
	            otherFunc = data.func;
	        if (otherFunc == null || otherFunc == func) {
	          return data.name;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseIndexOf` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function|number} Returns the chosen function or its result.
	     */
	    function getIndexOf(collection, target, fromIndex) {
	      var result = lodash.indexOf || indexOf;
	      result = result === indexOf ? baseIndexOf : result;
	      return collection ? result(collection, target, fromIndex) : result;
	    }
	
	    /**
	     * Gets the "length" property value of `object`.
	     *
	     * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	     * that affects Safari on at least iOS 8.1-8.3 ARM64.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {*} Returns the "length" value.
	     */
	    var getLength = baseProperty('length');
	
	    /**
	     * Gets the propery names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */
	    function getMatchData(object) {
	      var result = pairs(object),
	          length = result.length;
	
	      while (length--) {
	        result[length][2] = isStrictComparable(result[length][1]);
	      }
	      return result;
	    }
	
	    /**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */
	    function getNative(object, key) {
	      var value = object == null ? undefined : object[key];
	      return isNative(value) ? value : undefined;
	    }
	
	    /**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} transforms The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */
	    function getView(start, end, transforms) {
	      var index = -1,
	          length = transforms.length;
	
	      while (++index < length) {
	        var data = transforms[index],
	            size = data.size;
	
	        switch (data.type) {
	          case 'drop':      start += size; break;
	          case 'dropRight': end -= size; break;
	          case 'take':      end = nativeMin(end, start + size); break;
	          case 'takeRight': start = nativeMax(start, end - size); break;
	        }
	      }
	      return { 'start': start, 'end': end };
	    }
	
	    /**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */
	    function initCloneArray(array) {
	      var length = array.length,
	          result = new array.constructor(length);
	
	      // Add array properties assigned by `RegExp#exec`.
	      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	        result.index = array.index;
	        result.input = array.input;
	      }
	      return result;
	    }
	
	    /**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneObject(object) {
	      var Ctor = object.constructor;
	      if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
	        Ctor = Object;
	      }
	      return new Ctor;
	    }
	
	    /**
	     * Initializes an object clone based on its `toStringTag`.
	     *
	     * **Note:** This function only supports cloning values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @param {string} tag The `toStringTag` of the object to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneByTag(object, tag, isDeep) {
	      var Ctor = object.constructor;
	      switch (tag) {
	        case arrayBufferTag:
	          return bufferClone(object);
	
	        case boolTag:
	        case dateTag:
	          return new Ctor(+object);
	
	        case float32Tag: case float64Tag:
	        case int8Tag: case int16Tag: case int32Tag:
	        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	          var buffer = object.buffer;
	          return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);
	
	        case numberTag:
	        case stringTag:
	          return new Ctor(object);
	
	        case regexpTag:
	          var result = new Ctor(object.source, reFlags.exec(object));
	          result.lastIndex = object.lastIndex;
	      }
	      return result;
	    }
	
	    /**
	     * Invokes the method at `path` on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */
	    function invokePath(object, path, args) {
	      if (object != null && !isKey(path, object)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        path = last(path);
	      }
	      var func = object == null ? object : object[path];
	      return func == null ? undefined : func.apply(object, args);
	    }
	
	    /**
	     * Checks if `value` is array-like.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     */
	    function isArrayLike(value) {
	      return value != null && isLength(getLength(value));
	    }
	
	    /**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */
	    function isIndex(value, length) {
	      value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	      length = length == null ? MAX_SAFE_INTEGER : length;
	      return value > -1 && value % 1 == 0 && value < length;
	    }
	
	    /**
	     * Checks if the provided arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	     */
	    function isIterateeCall(value, index, object) {
	      if (!isObject(object)) {
	        return false;
	      }
	      var type = typeof index;
	      if (type == 'number'
	          ? (isArrayLike(object) && isIndex(index, object.length))
	          : (type == 'string' && index in object)) {
	        var other = object[index];
	        return value === value ? (value === other) : (other !== other);
	      }
	      return false;
	    }
	
	    /**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */
	    function isKey(value, object) {
	      var type = typeof value;
	      if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	        return true;
	      }
	      if (isArray(value)) {
	        return false;
	      }
	      var result = !reIsDeepProp.test(value);
	      return result || (object != null && value in toObject(object));
	    }
	
	    /**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
	     */
	    function isLaziable(func) {
	      var funcName = getFuncName(func);
	      if (!(funcName in LazyWrapper.prototype)) {
	        return false;
	      }
	      var other = lodash[funcName];
	      if (func === other) {
	        return true;
	      }
	      var data = getData(other);
	      return !!data && func === data[0];
	    }
	
	    /**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	     */
	    function isLength(value) {
	      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	    }
	
	    /**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */
	    function isStrictComparable(value) {
	      return value === value && !isObject(value);
	    }
	
	    /**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers required to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
	     * augment function arguments, making the order in which they are executed important,
	     * preventing the merging of metadata. However, we make an exception for a safe
	     * common case where curried functions have `_.ary` and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */
	    function mergeData(data, source) {
	      var bitmask = data[1],
	          srcBitmask = source[1],
	          newBitmask = bitmask | srcBitmask,
	          isCommon = newBitmask < ARY_FLAG;
	
	      var isCombo =
	        (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) ||
	        (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) ||
	        (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);
	
	      // Exit early if metadata can't be merged.
	      if (!(isCommon || isCombo)) {
	        return data;
	      }
	      // Use source `thisArg` if available.
	      if (srcBitmask & BIND_FLAG) {
	        data[2] = source[2];
	        // Set when currying a bound function.
	        newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
	      }
	      // Compose partial arguments.
	      var value = source[3];
	      if (value) {
	        var partials = data[3];
	        data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
	        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
	      }
	      // Compose partial right arguments.
	      value = source[5];
	      if (value) {
	        partials = data[5];
	        data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
	        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
	      }
	      // Use source `argPos` if available.
	      value = source[7];
	      if (value) {
	        data[7] = arrayCopy(value);
	      }
	      // Use source `ary` if it's smaller.
	      if (srcBitmask & ARY_FLAG) {
	        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	      }
	      // Use source `arity` if one is not provided.
	      if (data[9] == null) {
	        data[9] = source[9];
	      }
	      // Use source `func` and merge bitmasks.
	      data[0] = source[0];
	      data[1] = newBitmask;
	
	      return data;
	    }
	
	    /**
	     * Used by `_.defaultsDeep` to customize its `_.merge` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function mergeDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : merge(objectValue, sourceValue, mergeDefaults);
	    }
	
	    /**
	     * A specialized version of `_.pick` which picks `object` properties specified
	     * by `props`.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} props The property names to pick.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByArray(object, props) {
	      object = toObject(object);
	
	      var index = -1,
	          length = props.length,
	          result = {};
	
	      while (++index < length) {
	        var key = props[index];
	        if (key in object) {
	          result[key] = object[key];
	        }
	      }
	      return result;
	    }
	
	    /**
	     * A specialized version of `_.pick` which picks `object` properties `predicate`
	     * returns truthy for.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByCallback(object, predicate) {
	      var result = {};
	      baseForIn(object, function(value, key, object) {
	        if (predicate(value, key, object)) {
	          result[key] = value;
	        }
	      });
	      return result;
	    }
	
	    /**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */
	    function reorder(array, indexes) {
	      var arrLength = array.length,
	          length = nativeMin(indexes.length, arrLength),
	          oldArray = arrayCopy(array);
	
	      while (length--) {
	        var index = indexes[length];
	        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	      }
	      return array;
	    }
	
	    /**
	     * Sets metadata for `func`.
	     *
	     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	     * period of time, it will trip its breaker and transition to an identity function
	     * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
	     * for more details.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var setData = (function() {
	      var count = 0,
	          lastCalled = 0;
	
	      return function(key, value) {
	        var stamp = now(),
	            remaining = HOT_SPAN - (stamp - lastCalled);
	
	        lastCalled = stamp;
	        if (remaining > 0) {
	          if (++count >= HOT_COUNT) {
	            return key;
	          }
	        } else {
	          count = 0;
	        }
	        return baseSetData(key, value);
	      };
	    }());
	
	    /**
	     * A fallback implementation of `Object.keys` which creates an array of the
	     * own enumerable property names of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function shimKeys(object) {
	      var props = keysIn(object),
	          propsLength = props.length,
	          length = propsLength && object.length;
	
	      var allowIndexes = !!length && isLength(length) &&
	        (isArray(object) || isArguments(object));
	
	      var index = -1,
	          result = [];
	
	      while (++index < propsLength) {
	        var key = props[index];
	        if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	          result.push(key);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Converts `value` to an array-like object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array|Object} Returns the array-like object.
	     */
	    function toIterable(value) {
	      if (value == null) {
	        return [];
	      }
	      if (!isArrayLike(value)) {
	        return values(value);
	      }
	      return isObject(value) ? value : Object(value);
	    }
	
	    /**
	     * Converts `value` to an object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Object} Returns the object.
	     */
	    function toObject(value) {
	      return isObject(value) ? value : Object(value);
	    }
	
	    /**
	     * Converts `value` to property path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array} Returns the property path array.
	     */
	    function toPath(value) {
	      if (isArray(value)) {
	        return value;
	      }
	      var result = [];
	      baseToString(value).replace(rePropName, function(match, number, quote, string) {
	        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	      });
	      return result;
	    }
	
	    /**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */
	    function wrapperClone(wrapper) {
	      return wrapper instanceof LazyWrapper
	        ? wrapper.clone()
	        : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `collection` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=1] The length of each chunk.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new array containing chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */
	    function chunk(array, size, guard) {
	      if (guard ? isIterateeCall(array, size, guard) : size == null) {
	        size = 1;
	      } else {
	        size = nativeMax(nativeFloor(size) || 1, 1);
	      }
	      var index = 0,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = Array(nativeCeil(length / size));
	
	      while (index < length) {
	        result[++resIndex] = baseSlice(array, index, (index += size));
	      }
	      return result;
	    }
	
	    /**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */
	    function compact(array) {
	      var index = -1,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = [];
	
	      while (++index < length) {
	        var value = array[index];
	        if (value) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Creates an array of unique `array` values not included in the other
	     * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The arrays of values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.difference([1, 2, 3], [4, 2]);
	     * // => [1, 3]
	     */
	    var difference = restParam(function(array, values) {
	      return (isObjectLike(array) && isArrayLike(array))
	        ? baseDifference(array, baseFlatten(values, false, true))
	        : [];
	    });
	
	    /**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function drop(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, n < 0 ? 0 : n);
	    }
	
	    /**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function dropRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }
	
	    /**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that match the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [1]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active', false), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true)
	        : [];
	    }
	
	    /**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active', false), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true)
	        : [];
	    }
	
	    /**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8], '*', 1, 2);
	     * // => [4, '*', 8]
	     */
	    function fill(array, value, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
	        start = 0;
	        end = length;
	      }
	      return baseFill(array, value, start, end);
	    }
	
	    /**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(chr) {
	     *   return chr.user == 'barney';
	     * });
	     * // => 0
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findIndex(users, 'active', false);
	     * // => 0
	     *
	     * // using the `_.property` callback shorthand
	     * _.findIndex(users, 'active');
	     * // => 2
	     */
	    var findIndex = createFindIndex();
	
	    /**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(chr) {
	     *   return chr.user == 'pebbles';
	     * });
	     * // => 2
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastIndex(users, 'active', false);
	     * // => 2
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */
	    var findLastIndex = createFindIndex(true);
	
	    /**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias head
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.first([1, 2, 3]);
	     * // => 1
	     *
	     * _.first([]);
	     * // => undefined
	     */
	    function first(array) {
	      return array ? array[0] : undefined;
	    }
	
	    /**
	     * Flattens a nested array. If `isDeep` is `true` the array is recursively
	     * flattened, otherwise it is only flattened a single level.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, [4]]
	     *
	     * // using `isDeep`
	     * _.flatten([1, [2, 3, [4]]], true);
	     * // => [1, 2, 3, 4]
	     */
	    function flatten(array, isDeep, guard) {
	      var length = array ? array.length : 0;
	      if (guard && isIterateeCall(array, isDeep, guard)) {
	        isDeep = false;
	      }
	      return length ? baseFlatten(array, isDeep) : [];
	    }
	
	    /**
	     * Recursively flattens a nested array.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to recursively flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, 4]
	     */
	    function flattenDeep(array) {
	      var length = array ? array.length : 0;
	      return length ? baseFlatten(array, true) : [];
	    }
	
	    /**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	     * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
	     * performs a faster binary search.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=0] The index to search from or `true`
	     *  to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // using `fromIndex`
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     *
	     * // performing a binary search
	     * _.indexOf([1, 1, 2, 2], 2, true);
	     * // => 2
	     */
	    function indexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      if (typeof fromIndex == 'number') {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
	      } else if (fromIndex) {
	        var index = binaryIndex(array, value);
	        if (index < length &&
	            (value === value ? (value === array[index]) : (array[index] !== array[index]))) {
	          return index;
	        }
	        return -1;
	      }
	      return baseIndexOf(array, value, fromIndex || 0);
	    }
	
	    /**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */
	    function initial(array) {
	      return dropRight(array, 1);
	    }
	
	    /**
	     * Creates an array of unique values that are included in all of the provided
	     * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of shared values.
	     * @example
	     * _.intersection([1, 2], [4, 2], [2, 1]);
	     * // => [2]
	     */
	    var intersection = restParam(function(arrays) {
	      var othLength = arrays.length,
	          othIndex = othLength,
	          caches = Array(length),
	          indexOf = getIndexOf(),
	          isCommon = indexOf == baseIndexOf,
	          result = [];
	
	      while (othIndex--) {
	        var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
	        caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
	      }
	      var array = arrays[0],
	          index = -1,
	          length = array ? array.length : 0,
	          seen = caches[0];
	
	      outer:
	      while (++index < length) {
	        value = array[index];
	        if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
	          var othIndex = othLength;
	          while (--othIndex) {
	            var cache = caches[othIndex];
	            if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
	              continue outer;
	            }
	          }
	          if (seen) {
	            seen.push(value);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    });
	
	    /**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */
	    function last(array) {
	      var length = array ? array.length : 0;
	      return length ? array[length - 1] : undefined;
	    }
	
	    /**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=array.length-1] The index to search from
	     *  or `true` to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // using `fromIndex`
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     *
	     * // performing a binary search
	     * _.lastIndexOf([1, 1, 2, 2], 2, true);
	     * // => 3
	     */
	    function lastIndexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      var index = length;
	      if (typeof fromIndex == 'number') {
	        index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
	      } else if (fromIndex) {
	        index = binaryIndex(array, value, true) - 1;
	        var other = array[index];
	        if (value === value ? (value === other) : (other !== other)) {
	          return index;
	        }
	        return -1;
	      }
	      if (value !== value) {
	        return indexOfNaN(array, index, true);
	      }
	      while (index--) {
	        if (array[index] === value) {
	          return index;
	        }
	      }
	      return -1;
	    }
	
	    /**
	     * Removes all provided values from `array` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.without`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...*} [values] The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3, 1, 2, 3];
	     *
	     * _.pull(array, 2, 3);
	     * console.log(array);
	     * // => [1, 1]
	     */
	    function pull() {
	      var args = arguments,
	          array = args[0];
	
	      if (!(array && array.length)) {
	        return array;
	      }
	      var index = 0,
	          indexOf = getIndexOf(),
	          length = args.length;
	
	      while (++index < length) {
	        var fromIndex = 0,
	            value = args[index];
	
	        while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
	          splice.call(array, fromIndex, 1);
	        }
	      }
	      return array;
	    }
	
	    /**
	     * Removes elements from `array` corresponding to the given indexes and returns
	     * an array of the removed elements. Indexes may be specified as an array of
	     * indexes or as individual arguments.
	     *
	     * **Note:** Unlike `_.at`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...(number|number[])} [indexes] The indexes of elements to remove,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [5, 10, 15, 20];
	     * var evens = _.pullAt(array, 1, 3);
	     *
	     * console.log(array);
	     * // => [5, 15]
	     *
	     * console.log(evens);
	     * // => [10, 20]
	     */
	    var pullAt = restParam(function(array, indexes) {
	      indexes = baseFlatten(indexes);
	
	      var result = baseAt(array, indexes);
	      basePullAt(array, indexes.sort(baseCompareAscending));
	      return result;
	    });
	
	    /**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */
	    function remove(array, predicate, thisArg) {
	      var result = [];
	      if (!(array && array.length)) {
	        return result;
	      }
	      var index = -1,
	          indexes = [],
	          length = array.length;
	
	      predicate = getCallback(predicate, thisArg, 3);
	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result.push(value);
	          indexes.push(index);
	        }
	      }
	      basePullAt(array, indexes);
	      return result;
	    }
	
	    /**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias tail
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.rest([1, 2, 3]);
	     * // => [2, 3]
	     */
	    function rest(array) {
	      return drop(array, 1);
	    }
	
	    /**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of `Array#slice` to support node
	     * lists in IE < 9 and to ensure dense arrays are returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function slice(array, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
	        start = 0;
	        end = length;
	      }
	      return baseSlice(array, start, end);
	    }
	
	    /**
	     * Uses a binary search to determine the lowest index at which `value` should
	     * be inserted into `array` in order to maintain its sort order. If an iteratee
	     * function is provided it is invoked for `value` and each element of `array`
	     * to compute their sort ranking. The iteratee is bound to `thisArg` and
	     * invoked with one argument; (value).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     *
	     * _.sortedIndex([4, 4, 5, 5], 5);
	     * // => 2
	     *
	     * var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
	     *
	     * // using an iteratee function
	     * _.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
	     *   return this.data[word];
	     * }, dict);
	     * // => 1
	     *
	     * // using the `_.property` callback shorthand
	     * _.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
	     * // => 1
	     */
	    var sortedIndex = createSortedIndex();
	
	    /**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 4, 5, 5], 5);
	     * // => 4
	     */
	    var sortedLastIndex = createSortedIndex(true);
	
	    /**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */
	    function take(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }
	
	    /**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */
	    function takeRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, n < 0 ? 0 : n);
	    }
	
	    /**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is bound to `thisArg`
	     * and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [2, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active', false), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true)
	        : [];
	    }
	
	    /**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [1, 2]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false},
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active', false), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3))
	        : [];
	    }
	
	    /**
	     * Creates an array of unique values, in order, from all of the provided arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.union([1, 2], [4, 2], [2, 1]);
	     * // => [1, 2, 4]
	     */
	    var union = restParam(function(arrays) {
	      return baseUniq(baseFlatten(arrays, false, true));
	    });
	
	    /**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurence of each element
	     * is kept. Providing `true` for `isSorted` performs a faster search algorithm
	     * for sorted arrays. If an iteratee function is provided it is invoked for
	     * each element in the array to generate the criterion by which uniqueness
	     * is computed. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, array).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias unique
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {boolean} [isSorted] Specify the array is sorted.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     *
	     * // using `isSorted`
	     * _.uniq([1, 1, 2], true);
	     * // => [1, 2]
	     *
	     * // using an iteratee function
	     * _.uniq([1, 2.5, 1.5, 2], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => [1, 2.5]
	     *
	     * // using the `_.property` callback shorthand
	     * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
	    function uniq(array, isSorted, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (isSorted != null && typeof isSorted != 'boolean') {
	        thisArg = iteratee;
	        iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
	        isSorted = false;
	      }
	      var callback = getCallback();
	      if (!(iteratee == null && callback === baseCallback)) {
	        iteratee = callback(iteratee, thisArg, 3);
	      }
	      return (isSorted && getIndexOf() == baseIndexOf)
	        ? sortedUniq(array, iteratee)
	        : baseUniq(array, iteratee);
	    }
	
	    /**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['fred', 'barney'], [30, 40], [true, false]]
	     */
	    function unzip(array) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var index = -1,
	          length = 0;
	
	      array = arrayFilter(array, function(group) {
	        if (isArrayLike(group)) {
	          length = nativeMax(group.length, length);
	          return true;
	        }
	      });
	      var result = Array(length);
	      while (++index < length) {
	        result[index] = arrayMap(array, baseProperty(index));
	      }
	      return result;
	    }
	
	    /**
	     * This method is like `_.unzip` except that it accepts an iteratee to specify
	     * how regrouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee] The function to combine regrouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */
	    function unzipWith(array, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      var result = unzip(array);
	      if (iteratee == null) {
	        return result;
	      }
	      iteratee = bindCallback(iteratee, thisArg, 4);
	      return arrayMap(result, function(group) {
	        return arrayReduce(group, iteratee, undefined, true);
	      });
	    }
	
	    /**
	     * Creates an array excluding all provided values using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to filter.
	     * @param {...*} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.without([1, 2, 1, 3], 1, 2);
	     * // => [3]
	     */
	    var without = restParam(function(array, values) {
	      return isArrayLike(array)
	        ? baseDifference(array, values)
	        : [];
	    });
	
	    /**
	     * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	     * of the provided arrays.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of values.
	     * @example
	     *
	     * _.xor([1, 2], [4, 2]);
	     * // => [1, 4]
	     */
	    function xor() {
	      var index = -1,
	          length = arguments.length;
	
	      while (++index < length) {
	        var array = arguments[index];
	        if (isArrayLike(array)) {
	          var result = result
	            ? arrayPush(baseDifference(result, array), baseDifference(array, result))
	            : array;
	        }
	      }
	      return result ? baseUniq(result) : [];
	    }
	
	    /**
	     * Creates an array of grouped elements, the first of which contains the first
	     * elements of the given arrays, the second of which contains the second elements
	     * of the given arrays, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     */
	    var zip = restParam(unzip);
	
	    /**
	     * The inverse of `_.pairs`; this method returns an object composed from arrays
	     * of property names and values. Provide either a single two dimensional array,
	     * e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
	     * and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @alias object
	     * @category Array
	     * @param {Array} props The property names.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject([['fred', 30], ['barney', 40]]);
	     * // => { 'fred': 30, 'barney': 40 }
	     *
	     * _.zipObject(['fred', 'barney'], [30, 40]);
	     * // => { 'fred': 30, 'barney': 40 }
	     */
	    function zipObject(props, values) {
	      var index = -1,
	          length = props ? props.length : 0,
	          result = {};
	
	      if (length && !values && !isArray(props[0])) {
	        values = [];
	      }
	      while (++index < length) {
	        var key = props[index];
	        if (values) {
	          result[key] = values[index];
	        } else if (key) {
	          result[key[0]] = key[1];
	        }
	      }
	      return result;
	    }
	
	    /**
	     * This method is like `_.zip` except that it accepts an iteratee to specify
	     * how grouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @param {Function} [iteratee] The function to combine grouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zipWith([1, 2], [10, 20], [100, 200], _.add);
	     * // => [111, 222]
	     */
	    var zipWith = restParam(function(arrays) {
	      var length = arrays.length,
	          iteratee = length > 2 ? arrays[length - 2] : undefined,
	          thisArg = length > 1 ? arrays[length - 1] : undefined;
	
	      if (length > 2 && typeof iteratee == 'function') {
	        length -= 2;
	      } else {
	        iteratee = (length > 1 && typeof thisArg == 'function') ? (--length, thisArg) : undefined;
	        thisArg = undefined;
	      }
	      arrays.length = length;
	      return unzipWith(arrays, iteratee, thisArg);
	    });
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a `lodash` object that wraps `value` with explicit method
	     * chaining enabled.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _.chain(users)
	     *   .sortBy('age')
	     *   .map(function(chr) {
	     *     return chr.user + ' is ' + chr.age;
	     *   })
	     *   .first()
	     *   .value();
	     * // => 'pebbles is 1'
	     */
	    function chain(value) {
	      var result = lodash(value);
	      result.__chain__ = true;
	      return result;
	    }
	
	    /**
	     * This method invokes `interceptor` and returns `value`. The interceptor is
	     * bound to `thisArg` and invoked with one argument; (value). The purpose of
	     * this method is to "tap into" a method chain in order to perform operations
	     * on intermediate results within the chain.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */
	    function tap(value, interceptor, thisArg) {
	      interceptor.call(thisArg, value);
	      return value;
	    }
	
	    /**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */
	    function thru(value, interceptor, thisArg) {
	      return interceptor.call(thisArg, value);
	    }
	
	    /**
	     * Enables explicit method chaining on the wrapper object.
	     *
	     * @name chain
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // without explicit chaining
	     * _(users).first();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // with explicit chaining
	     * _(users).chain()
	     *   .first()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */
	    function wrapperChain() {
	      return chain(this);
	    }
	
	    /**
	     * Executes the chained sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapped = wrapped.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapped.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */
	    function wrapperCommit() {
	      return new LodashWrapper(this.value(), this.__chain__);
	    }
	
	    /**
	     * Creates a new array joining a wrapped array with any additional arrays
	     * and/or values.
	     *
	     * @name concat
	     * @memberOf _
	     * @category Chain
	     * @param {...*} [values] The values to concatenate.
	     * @returns {Array} Returns the new concatenated array.
	     * @example
	     *
	     * var array = [1];
	     * var wrapped = _(array).concat(2, [3], [[4]]);
	     *
	     * console.log(wrapped.value());
	     * // => [1, 2, 3, [4]]
	     *
	     * console.log(array);
	     * // => [1]
	     */
	    var wrapperConcat = restParam(function(values) {
	      values = baseFlatten(values);
	      return this.thru(function(array) {
	        return arrayConcat(isArray(array) ? array : [toObject(array)], values);
	      });
	    });
	
	    /**
	     * Creates a clone of the chained sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).map(function(value) {
	     *   return Math.pow(value, 2);
	     * });
	     *
	     * var other = [3, 4];
	     * var otherWrapped = wrapped.plant(other);
	     *
	     * otherWrapped.value();
	     * // => [9, 16]
	     *
	     * wrapped.value();
	     * // => [1, 4]
	     */
	    function wrapperPlant(value) {
	      var result,
	          parent = this;
	
	      while (parent instanceof baseLodash) {
	        var clone = wrapperClone(parent);
	        if (result) {
	          previous.__wrapped__ = clone;
	        } else {
	          result = clone;
	        }
	        var previous = clone;
	        parent = parent.__wrapped__;
	      }
	      previous.__wrapped__ = value;
	      return result;
	    }
	
	    /**
	     * Reverses the wrapped array so the first element becomes the last, the
	     * second element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new reversed `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
	    function wrapperReverse() {
	      var value = this.__wrapped__;
	
	      var interceptor = function(value) {
	        return (wrapped && wrapped.__dir__ < 0) ? value : value.reverse();
	      };
	      if (value instanceof LazyWrapper) {
	        var wrapped = value;
	        if (this.__actions__.length) {
	          wrapped = new LazyWrapper(this);
	        }
	        wrapped = wrapped.reverse();
	        wrapped.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
	        return new LodashWrapper(wrapped, this.__chain__);
	      }
	      return this.thru(interceptor);
	    }
	
	    /**
	     * Produces the result of coercing the unwrapped value to a string.
	     *
	     * @name toString
	     * @memberOf _
	     * @category Chain
	     * @returns {string} Returns the coerced string value.
	     * @example
	     *
	     * _([1, 2, 3]).toString();
	     * // => '1,2,3'
	     */
	    function wrapperToString() {
	      return (this.value() + '');
	    }
	
	    /**
	     * Executes the chained sequence to extract the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @alias run, toJSON, valueOf
	     * @category Chain
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */
	    function wrapperValue() {
	      return baseWrapperValue(this.__wrapped__, this.__actions__);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates an array of elements corresponding to the given keys, or indexes,
	     * of `collection`. Keys may be specified as individual arguments or as arrays
	     * of keys.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(number|number[]|string|string[])} [props] The property names
	     *  or indexes of elements to pick, specified individually or in arrays.
	     * @returns {Array} Returns the new array of picked elements.
	     * @example
	     *
	     * _.at(['a', 'b', 'c'], [0, 2]);
	     * // => ['a', 'c']
	     *
	     * _.at(['barney', 'fred', 'pebbles'], 0, 2);
	     * // => ['barney', 'pebbles']
	     */
	    var at = restParam(function(collection, props) {
	      return baseAt(collection, baseFlatten(props));
	    });
	
	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the number of times the key was returned by `iteratee`.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy(['one', 'two', 'three'], 'length');
	     * // => { '3': 2, '5': 1 }
	     */
	    var countBy = createAggregator(function(result, value, key) {
	      hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
	    });
	
	    /**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * The predicate is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias all
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': false },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.every(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.every(users, 'active');
	     * // => false
	     */
	    function every(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayEvery : baseEvery;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = undefined;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }
	
	    /**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias select
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.filter([4, 5, 6], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 6]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.filter(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.filter(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function filter(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, predicate);
	    }
	
	    /**
	     * Iterates over elements of `collection`, returning the first element
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias detect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': true },
	     *   { 'user': 'fred',    'age': 40, 'active': false },
	     *   { 'user': 'pebbles', 'age': 1,  'active': true }
	     * ];
	     *
	     * _.result(_.find(users, function(chr) {
	     *   return chr.age < 40;
	     * }), 'user');
	     * // => 'barney'
	     *
	     * // using the `_.matches` callback shorthand
	     * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.result(_.find(users, 'active', false), 'user');
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.result(_.find(users, 'active'), 'user');
	     * // => 'barney'
	     */
	    var find = createFind(baseEach);
	
	    /**
	     * This method is like `_.find` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * _.findLast([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 1;
	     * });
	     * // => 3
	     */
	    var findLast = createFind(baseEachRight, true);
	
	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning the first element that has equivalent property
	     * values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
	     * // => 'barney'
	     *
	     * _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
	     * // => 'fred'
	     */
	    function findWhere(collection, source) {
	      return find(collection, baseMatches(source));
	    }
	
	    /**
	     * Iterates over elements of `collection` invoking `iteratee` for each element.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection). Iteratee functions may exit iteration early
	     * by explicitly returning `false`.
	     *
	     * **Note:** As with other "Collections" methods, objects with a "length" property
	     * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	     * may be used for object iteration.
	     *
	     * @static
	     * @memberOf _
	     * @alias each
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEach(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from left to right and returns the array
	     *
	     * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
	     *   console.log(n, key);
	     * });
	     * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
	     */
	    var forEach = createForEach(arrayEach, baseEach);
	
	    /**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEachRight(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from right to left and returns the array
	     */
	    var forEachRight = createForEach(arrayEachRight, baseEachRight);
	
	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is an array of the elements responsible for generating the key.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * // using the `_.property` callback shorthand
	     * _.groupBy(['one', 'two', 'three'], 'length');
	     * // => { '3': ['one', 'two'], '5': ['three'] }
	     */
	    var groupBy = createAggregator(function(result, value, key) {
	      if (hasOwnProperty.call(result, key)) {
	        result[key].push(value);
	      } else {
	        result[key] = [value];
	      }
	    });
	
	    /**
	     * Checks if `value` is in `collection` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	     * from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @alias contains, include
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {*} target The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {boolean} Returns `true` if a matching element is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
	     * // => true
	     *
	     * _.includes('pebbles', 'eb');
	     * // => true
	     */
	    function includes(collection, target, fromIndex, guard) {
	      var length = collection ? getLength(collection) : 0;
	      if (!isLength(length)) {
	        collection = values(collection);
	        length = collection.length;
	      }
	      if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
	        fromIndex = 0;
	      } else {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
	      }
	      return (typeof collection == 'string' || !isArray(collection) && isString(collection))
	        ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
	        : (!!length && getIndexOf(collection, target, fromIndex) > -1);
	    }
	
	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the last element responsible for generating the key. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * var keyData = [
	     *   { 'dir': 'left', 'code': 97 },
	     *   { 'dir': 'right', 'code': 100 }
	     * ];
	     *
	     * _.indexBy(keyData, 'dir');
	     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return String.fromCharCode(object.code);
	     * });
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return this.fromCharCode(object.code);
	     * }, String);
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     */
	    var indexBy = createAggregator(function(result, value, key) {
	      result[key] = value;
	    });
	
	    /**
	     * Invokes the method at `path` of each element in `collection`, returning
	     * an array of the results of each invoked method. Any additional arguments
	     * are provided to each invoked method. If `methodName` is a function it is
	     * invoked for, and `this` bound to, each element in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|Function|string} path The path of the method to invoke or
	     *  the function invoked per iteration.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
	     * // => [[1, 5, 7], [1, 2, 3]]
	     *
	     * _.invoke([123, 456], String.prototype.split, '');
	     * // => [['1', '2', '3'], ['4', '5', '6']]
	     */
	    var invoke = restParam(function(collection, path, args) {
	      var index = -1,
	          isFunc = typeof path == 'function',
	          isProp = isKey(path),
	          result = isArrayLike(collection) ? Array(collection.length) : [];
	
	      baseEach(collection, function(value) {
	        var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
	        result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
	      });
	      return result;
	    });
	
	    /**
	     * Creates an array of values by running each element in `collection` through
	     * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	     *
	     * The guarded methods are:
	     * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
	     * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
	     * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
	     * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
	     * `sum`, `uniq`, and `words`
	     *
	     * @static
	     * @memberOf _
	     * @alias collect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new mapped array.
	     * @example
	     *
	     * function timesThree(n) {
	     *   return n * 3;
	     * }
	     *
	     * _.map([1, 2], timesThree);
	     * // => [3, 6]
	     *
	     * _.map({ 'a': 1, 'b': 2 }, timesThree);
	     * // => [3, 6] (iteration order is not guaranteed)
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(users, 'user');
	     * // => ['barney', 'fred']
	     */
	    function map(collection, iteratee, thisArg) {
	      var func = isArray(collection) ? arrayMap : baseMap;
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return func(collection, iteratee);
	    }
	
	    /**
	     * Creates an array of elements split into two groups, the first of which
	     * contains elements `predicate` returns truthy for, while the second of which
	     * contains elements `predicate` returns falsey for. The predicate is bound
	     * to `thisArg` and invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the array of grouped elements.
	     * @example
	     *
	     * _.partition([1, 2, 3], function(n) {
	     *   return n % 2;
	     * });
	     * // => [[1, 3], [2]]
	     *
	     * _.partition([1.2, 2.3, 3.4], function(n) {
	     *   return this.floor(n) % 2;
	     * }, Math);
	     * // => [[1.2, 3.4], [2.3]]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': false },
	     *   { 'user': 'fred',    'age': 40, 'active': true },
	     *   { 'user': 'pebbles', 'age': 1,  'active': false }
	     * ];
	     *
	     * var mapper = function(array) {
	     *   return _.pluck(array, 'user');
	     * };
	     *
	     * // using the `_.matches` callback shorthand
	     * _.map(_.partition(users, { 'age': 1, 'active': false }), mapper);
	     * // => [['pebbles'], ['barney', 'fred']]
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.map(_.partition(users, 'active', false), mapper);
	     * // => [['barney', 'pebbles'], ['fred']]
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(_.partition(users, 'active'), mapper);
	     * // => [['fred'], ['barney', 'pebbles']]
	     */
	    var partition = createAggregator(function(result, value, key) {
	      result[key ? 0 : 1].push(value);
	    }, function() { return [[], []]; });
	
	    /**
	     * Gets the property value of `path` from all elements in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|string} path The path of the property to pluck.
	     * @returns {Array} Returns the property values.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.pluck(users, 'user');
	     * // => ['barney', 'fred']
	     *
	     * var userIndex = _.indexBy(users, 'user');
	     * _.pluck(userIndex, 'age');
	     * // => [36, 40] (iteration order is not guaranteed)
	     */
	    function pluck(collection, path) {
	      return map(collection, property(path));
	    }
	
	    /**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` through `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not provided the first element of `collection` is used as the initial
	     * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `sortByAll`,
	     * and `sortByOrder`
	     *
	     * @static
	     * @memberOf _
	     * @alias foldl, inject
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.reduce([1, 2], function(total, n) {
	     *   return total + n;
	     * });
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     *   return result;
	     * }, {});
	     * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
	     */
	    var reduce = createReduce(arrayReduce, baseEach);
	
	    /**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias foldr
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */
	    var reduceRight = createReduce(arrayReduceRight, baseEachRight);
	
	    /**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.reject([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [1, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.reject(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.reject(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function reject(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, function(value, index, collection) {
	        return !predicate(value, index, collection);
	      });
	    }
	
	    /**
	     * Gets a random element or `n` random elements from a collection.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to sample.
	     * @param {number} [n] The number of elements to sample.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {*} Returns the random sample(s).
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     *
	     * _.sample([1, 2, 3, 4], 2);
	     * // => [3, 1]
	     */
	    function sample(collection, n, guard) {
	      if (guard ? isIterateeCall(collection, n, guard) : n == null) {
	        collection = toIterable(collection);
	        var length = collection.length;
	        return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
	      }
	      var index = -1,
	          result = toArray(collection),
	          length = result.length,
	          lastIndex = length - 1;
	
	      n = nativeMin(n < 0 ? 0 : (+n || 0), length);
	      while (++index < n) {
	        var rand = baseRandom(index, lastIndex),
	            value = result[rand];
	
	        result[rand] = result[index];
	        result[index] = value;
	      }
	      result.length = n;
	      return result;
	    }
	
	    /**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */
	    function shuffle(collection) {
	      return sample(collection, POSITIVE_INFINITY);
	    }
	
	    /**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @returns {number} Returns the size of `collection`.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */
	    function size(collection) {
	      var length = collection ? getLength(collection) : 0;
	      return isLength(length) ? length : keys(collection).length;
	    }
	
	    /**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * The function returns as soon as it finds a passing value and does not iterate
	     * over the entire collection. The predicate is bound to `thisArg` and invoked
	     * with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias any
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.some(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.some(users, 'active');
	     * // => true
	     */
	    function some(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arraySome : baseSome;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = undefined;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }
	
	    /**
	     * Creates an array of elements, sorted in ascending order by the results of
	     * running each element in a collection through `iteratee`. This method performs
	     * a stable sort, that is, it preserves the original sort order of equal elements.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return Math.sin(n);
	     * });
	     * // => [3, 1, 2]
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return this.sin(n);
	     * }, Math);
	     * // => [3, 1, 2]
	     *
	     * var users = [
	     *   { 'user': 'fred' },
	     *   { 'user': 'pebbles' },
	     *   { 'user': 'barney' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.sortBy(users, 'user'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function sortBy(collection, iteratee, thisArg) {
	      if (collection == null) {
	        return [];
	      }
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = undefined;
	      }
	      var index = -1;
	      iteratee = getCallback(iteratee, thisArg, 3);
	
	      var result = baseMap(collection, function(value, key, collection) {
	        return { 'criteria': iteratee(value, key, collection), 'index': ++index, 'value': value };
	      });
	      return baseSortBy(result, compareAscending);
	    }
	
	    /**
	     * This method is like `_.sortBy` except that it can sort by multiple iteratees
	     * or property names.
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(Function|Function[]|Object|Object[]|string|string[])} iteratees
	     *  The iteratees to sort by, specified as individual values or arrays of values.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 34 }
	     * ];
	     *
	     * _.map(_.sortByAll(users, ['user', 'age']), _.values);
	     * // => [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
	     *
	     * _.map(_.sortByAll(users, 'user', function(chr) {
	     *   return Math.floor(chr.age / 10);
	     * }), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    var sortByAll = restParam(function(collection, iteratees) {
	      if (collection == null) {
	        return [];
	      }
	      var guard = iteratees[2];
	      if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
	        iteratees.length = 1;
	      }
	      return baseSortByOrder(collection, baseFlatten(iteratees), []);
	    });
	
	    /**
	     * This method is like `_.sortByAll` except that it allows specifying the
	     * sort orders of the iteratees to sort by. If `orders` is unspecified, all
	     * values are sorted in ascending order. Otherwise, a value is sorted in
	     * ascending order if its corresponding order is "asc", and descending if "desc".
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} [orders] The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // sort by `user` in ascending order and by `age` in descending order
	     * _.map(_.sortByOrder(users, ['user', 'age'], ['asc', 'desc']), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    function sortByOrder(collection, iteratees, orders, guard) {
	      if (collection == null) {
	        return [];
	      }
	      if (guard && isIterateeCall(iteratees, orders, guard)) {
	        orders = undefined;
	      }
	      if (!isArray(iteratees)) {
	        iteratees = iteratees == null ? [] : [iteratees];
	      }
	      if (!isArray(orders)) {
	        orders = orders == null ? [] : [orders];
	      }
	      return baseSortByOrder(collection, iteratees, orders);
	    }
	
	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning an array of all elements that have equivalent
	     * property values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
	     *   { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
	     * ];
	     *
	     * _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * _.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
	     * // => ['fred']
	     */
	    function where(collection, source) {
	      return filter(collection, baseMatches(source));
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Gets the number of milliseconds that have elapsed since the Unix epoch
	     * (1 January 1970 00:00:00 UTC).
	     *
	     * @static
	     * @memberOf _
	     * @category Date
	     * @example
	     *
	     * _.defer(function(stamp) {
	     *   console.log(_.now() - stamp);
	     * }, _.now());
	     * // => logs the number of milliseconds it took for the deferred function to be invoked
	     */
	    var now = nativeNow || function() {
	      return new Date().getTime();
	    };
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it is called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => logs 'done saving!' after the two async saves have completed
	     */
	    function after(n, func) {
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      n = nativeIsFinite(n = +n) ? n : 0;
	      return function() {
	        if (--n < 1) {
	          return func.apply(this, arguments);
	        }
	      };
	    }
	
	    /**
	     * Creates a function that accepts up to `n` arguments ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */
	    function ary(func, n, guard) {
	      if (guard && isIterateeCall(func, n, guard)) {
	        n = undefined;
	      }
	      n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
	      return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
	    }
	
	    /**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it is called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery('#add').on('click', _.before(5, addContactToList));
	     * // => allows adding up to 4 contacts to the list
	     */
	    function before(n, func) {
	      var result;
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      return function() {
	        if (--n > 0) {
	          result = func.apply(this, arguments);
	        }
	        if (n <= 1) {
	          func = undefined;
	        }
	        return result;
	      };
	    }
	
	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and prepends any additional `_.bind` arguments to those provided to the
	     * bound function.
	     *
	     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** Unlike native `Function#bind` this method does not set the "length"
	     * property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var greet = function(greeting, punctuation) {
	     *   return greeting + ' ' + this.user + punctuation;
	     * };
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * var bound = _.bind(greet, object, 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * // using placeholders
	     * var bound = _.bind(greet, object, _, '!');
	     * bound('hi');
	     * // => 'hi fred!'
	     */
	    var bind = restParam(function(func, thisArg, partials) {
	      var bitmask = BIND_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bind.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(func, bitmask, thisArg, partials, holders);
	    });
	
	    /**
	     * Binds methods of an object to the object itself, overwriting the existing
	     * method. Method names may be specified as individual arguments or as arrays
	     * of method names. If no method names are provided all enumerable function
	     * properties, own and inherited, of `object` are bound.
	     *
	     * **Note:** This method does not set the "length" property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object to bind and assign the bound methods to.
	     * @param {...(string|string[])} [methodNames] The object method names to bind,
	     *  specified as individual method names or arrays of method names.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var view = {
	     *   'label': 'docs',
	     *   'onClick': function() {
	     *     console.log('clicked ' + this.label);
	     *   }
	     * };
	     *
	     * _.bindAll(view);
	     * jQuery('#docs').on('click', view.onClick);
	     * // => logs 'clicked docs' when the element is clicked
	     */
	    var bindAll = restParam(function(object, methodNames) {
	      methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);
	
	      var index = -1,
	          length = methodNames.length;
	
	      while (++index < length) {
	        var key = methodNames[index];
	        object[key] = createWrapper(object[key], BIND_FLAG, object);
	      }
	      return object;
	    });
	
	    /**
	     * Creates a function that invokes the method at `object[key]` and prepends
	     * any additional `_.bindKey` arguments to those provided to the bound function.
	     *
	     * This method differs from `_.bind` by allowing bound functions to reference
	     * methods that may be redefined or don't yet exist.
	     * See [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	     * for more details.
	     *
	     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object the method belongs to.
	     * @param {string} key The key of the method.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var object = {
	     *   'user': 'fred',
	     *   'greet': function(greeting, punctuation) {
	     *     return greeting + ' ' + this.user + punctuation;
	     *   }
	     * };
	     *
	     * var bound = _.bindKey(object, 'greet', 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * object.greet = function(greeting, punctuation) {
	     *   return greeting + 'ya ' + this.user + punctuation;
	     * };
	     *
	     * bound('!');
	     * // => 'hiya fred!'
	     *
	     * // using placeholders
	     * var bound = _.bindKey(object, 'greet', _, '!');
	     * bound('hi');
	     * // => 'hiya fred!'
	     */
	    var bindKey = restParam(function(object, key, partials) {
	      var bitmask = BIND_FLAG | BIND_KEY_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bindKey.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(key, bitmask, object, partials, holders);
	    });
	
	    /**
	     * Creates a function that accepts one or more arguments of `func` that when
	     * called either invokes `func` returning its result, if all `func` arguments
	     * have been provided, or returns a function that accepts one or more of the
	     * remaining `func` arguments, and so on. The arity of `func` may be specified
	     * if `func.length` is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */
	    var curry = createCurry(CURRY_FLAG);
	
	    /**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */
	    var curryRight = createCurry(CURRY_RIGHT_FLAG);
	
	    /**
	     * Creates a debounced function that delays invoking `func` until after `wait`
	     * milliseconds have elapsed since the last time the debounced function was
	     * invoked. The debounced function comes with a `cancel` method to cancel
	     * delayed invocations. Provide an options object to indicate that `func`
	     * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	     * Subsequent calls to the debounced function return the result of the last
	     * `func` invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the debounced function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.debounce` and `_.throttle`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to debounce.
	     * @param {number} [wait=0] The number of milliseconds to delay.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=false] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	     *  delayed before it is invoked.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new debounced function.
	     * @example
	     *
	     * // avoid costly calculations while the window size is in flux
	     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	     *
	     * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	     * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	     *   'leading': true,
	     *   'trailing': false
	     * }));
	     *
	     * // ensure `batchLog` is invoked once after 1 second of debounced calls
	     * var source = new EventSource('/stream');
	     * jQuery(source).on('message', _.debounce(batchLog, 250, {
	     *   'maxWait': 1000
	     * }));
	     *
	     * // cancel a debounced call
	     * var todoChanges = _.debounce(batchLog, 1000);
	     * Object.observe(models.todo, todoChanges);
	     *
	     * Object.observe(models, function(changes) {
	     *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	     *     todoChanges.cancel();
	     *   }
	     * }, ['delete']);
	     *
	     * // ...at some point `models.todo` is changed
	     * models.todo.completed = true;
	     *
	     * // ...before 1 second has passed `models.todo` is deleted
	     * // which cancels the debounced `todoChanges` call
	     * delete models.todo;
	     */
	    function debounce(func, wait, options) {
	      var args,
	          maxTimeoutId,
	          result,
	          stamp,
	          thisArg,
	          timeoutId,
	          trailingCall,
	          lastCalled = 0,
	          maxWait = false,
	          trailing = true;
	
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      wait = wait < 0 ? 0 : (+wait || 0);
	      if (options === true) {
	        var leading = true;
	        trailing = false;
	      } else if (isObject(options)) {
	        leading = !!options.leading;
	        maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	
	      function cancel() {
	        if (timeoutId) {
	          clearTimeout(timeoutId);
	        }
	        if (maxTimeoutId) {
	          clearTimeout(maxTimeoutId);
	        }
	        lastCalled = 0;
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	      }
	
	      function complete(isCalled, id) {
	        if (id) {
	          clearTimeout(id);
	        }
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	        if (isCalled) {
	          lastCalled = now();
	          result = func.apply(thisArg, args);
	          if (!timeoutId && !maxTimeoutId) {
	            args = thisArg = undefined;
	          }
	        }
	      }
	
	      function delayed() {
	        var remaining = wait - (now() - stamp);
	        if (remaining <= 0 || remaining > wait) {
	          complete(trailingCall, maxTimeoutId);
	        } else {
	          timeoutId = setTimeout(delayed, remaining);
	        }
	      }
	
	      function maxDelayed() {
	        complete(trailing, timeoutId);
	      }
	
	      function debounced() {
	        args = arguments;
	        stamp = now();
	        thisArg = this;
	        trailingCall = trailing && (timeoutId || !leading);
	
	        if (maxWait === false) {
	          var leadingCall = leading && !timeoutId;
	        } else {
	          if (!maxTimeoutId && !leading) {
	            lastCalled = stamp;
	          }
	          var remaining = maxWait - (stamp - lastCalled),
	              isCalled = remaining <= 0 || remaining > maxWait;
	
	          if (isCalled) {
	            if (maxTimeoutId) {
	              maxTimeoutId = clearTimeout(maxTimeoutId);
	            }
	            lastCalled = stamp;
	            result = func.apply(thisArg, args);
	          }
	          else if (!maxTimeoutId) {
	            maxTimeoutId = setTimeout(maxDelayed, remaining);
	          }
	        }
	        if (isCalled && timeoutId) {
	          timeoutId = clearTimeout(timeoutId);
	        }
	        else if (!timeoutId && wait !== maxWait) {
	          timeoutId = setTimeout(delayed, wait);
	        }
	        if (leadingCall) {
	          isCalled = true;
	          result = func.apply(thisArg, args);
	        }
	        if (isCalled && !timeoutId && !maxTimeoutId) {
	          args = thisArg = undefined;
	        }
	        return result;
	      }
	      debounced.cancel = cancel;
	      return debounced;
	    }
	
	    /**
	     * Defers invoking the `func` until the current call stack has cleared. Any
	     * additional arguments are provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to defer.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.defer(function(text) {
	     *   console.log(text);
	     * }, 'deferred');
	     * // logs 'deferred' after one or more milliseconds
	     */
	    var defer = restParam(function(func, args) {
	      return baseDelay(func, 1, args);
	    });
	
	    /**
	     * Invokes `func` after `wait` milliseconds. Any additional arguments are
	     * provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.delay(function(text) {
	     *   console.log(text);
	     * }, 1000, 'later');
	     * // => logs 'later' after one second
	     */
	    var delay = restParam(function(func, wait, args) {
	      return baseDelay(func, wait, args);
	    });
	
	    /**
	     * Creates a function that returns the result of invoking the provided
	     * functions with the `this` binding of the created function, where each
	     * successive invocation is supplied the return value of the previous.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flow(_.add, square);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flow = createFlow();
	
	    /**
	     * This method is like `_.flow` except that it creates a function that
	     * invokes the provided functions from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias backflow, compose
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flowRight(square, _.add);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flowRight = createFlow(true);
	
	    /**
	     * Creates a function that memoizes the result of `func`. If `resolver` is
	     * provided it determines the cache key for storing the result based on the
	     * arguments provided to the memoized function. By default, the first argument
	     * provided to the memoized function is coerced to a string and used as the
	     * cache key. The `func` is invoked with the `this` binding of the memoized
	     * function.
	     *
	     * **Note:** The cache is exposed as the `cache` property on the memoized
	     * function. Its creation may be customized by replacing the `_.memoize.Cache`
	     * constructor with one whose instances implement the [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	     * method interface of `get`, `has`, and `set`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to have its output memoized.
	     * @param {Function} [resolver] The function to resolve the cache key.
	     * @returns {Function} Returns the new memoizing function.
	     * @example
	     *
	     * var upperCase = _.memoize(function(string) {
	     *   return string.toUpperCase();
	     * });
	     *
	     * upperCase('fred');
	     * // => 'FRED'
	     *
	     * // modifying the result cache
	     * upperCase.cache.set('fred', 'BARNEY');
	     * upperCase('fred');
	     * // => 'BARNEY'
	     *
	     * // replacing `_.memoize.Cache`
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'barney' };
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'fred' }
	     *
	     * _.memoize.Cache = WeakMap;
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'barney' }
	     */
	    function memoize(func, resolver) {
	      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var memoized = function() {
	        var args = arguments,
	            key = resolver ? resolver.apply(this, args) : args[0],
	            cache = memoized.cache;
	
	        if (cache.has(key)) {
	          return cache.get(key);
	        }
	        var result = func.apply(this, args);
	        memoized.cache = cache.set(key, result);
	        return result;
	      };
	      memoized.cache = new memoize.Cache;
	      return memoized;
	    }
	
	    /**
	     * Creates a function that runs each argument through a corresponding
	     * transform function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to wrap.
	     * @param {...(Function|Function[])} [transforms] The functions to transform
	     * arguments, specified as individual functions or arrays of functions.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function doubled(n) {
	     *   return n * 2;
	     * }
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var modded = _.modArgs(function(x, y) {
	     *   return [x, y];
	     * }, square, doubled);
	     *
	     * modded(1, 2);
	     * // => [1, 4]
	     *
	     * modded(5, 10);
	     * // => [25, 20]
	     */
	    var modArgs = restParam(function(func, transforms) {
	      transforms = baseFlatten(transforms);
	      if (typeof func != 'function' || !arrayEvery(transforms, baseIsFunction)) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = transforms.length;
	      return restParam(function(args) {
	        var index = nativeMin(args.length, length);
	        while (index--) {
	          args[index] = transforms[index](args[index]);
	        }
	        return func.apply(this, args);
	      });
	    });
	
	    /**
	     * Creates a function that negates the result of the predicate `func`. The
	     * `func` predicate is invoked with the `this` binding and arguments of the
	     * created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} predicate The predicate to negate.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function isEven(n) {
	     *   return n % 2 == 0;
	     * }
	     *
	     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	     * // => [1, 3, 5]
	     */
	    function negate(predicate) {
	      if (typeof predicate != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function() {
	        return !predicate.apply(this, arguments);
	      };
	    }
	
	    /**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first call. The `func` is invoked
	     * with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // `initialize` invokes `createApplication` once
	     */
	    function once(func) {
	      return before(2, func);
	    }
	
	    /**
	     * Creates a function that invokes `func` with `partial` arguments prepended
	     * to those provided to the new function. This method is like `_.bind` except
	     * it does **not** alter the `this` binding.
	     *
	     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var sayHelloTo = _.partial(greet, 'hello');
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     *
	     * // using placeholders
	     * var greetFred = _.partial(greet, _, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     */
	    var partial = createPartial(PARTIAL_FLAG);
	
	    /**
	     * This method is like `_.partial` except that partially applied arguments
	     * are appended to those provided to the new function.
	     *
	     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var greetFred = _.partialRight(greet, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     *
	     * // using placeholders
	     * var sayHelloTo = _.partialRight(greet, 'hello', _);
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     */
	    var partialRight = createPartial(PARTIAL_RIGHT_FLAG);
	
	    /**
	     * Creates a function that invokes `func` with arguments arranged according
	     * to the specified indexes where the argument value at the first index is
	     * provided as the first argument, the argument value at the second index is
	     * provided as the second argument, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to rearrange arguments for.
	     * @param {...(number|number[])} indexes The arranged argument indexes,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var rearged = _.rearg(function(a, b, c) {
	     *   return [a, b, c];
	     * }, 2, 0, 1);
	     *
	     * rearged('b', 'c', 'a')
	     * // => ['a', 'b', 'c']
	     *
	     * var map = _.rearg(_.map, [1, 0]);
	     * map(function(n) {
	     *   return n * 3;
	     * }, [1, 2, 3]);
	     * // => [3, 6, 9]
	     */
	    var rearg = restParam(function(func, indexes) {
	      return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
	    });
	
	    /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as an array.
	     *
	     * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.restParam(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */
	    function restParam(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	      return function() {
	        var args = arguments,
	            index = -1,
	            length = nativeMax(args.length - start, 0),
	            rest = Array(length);
	
	        while (++index < length) {
	          rest[index] = args[start + index];
	        }
	        switch (start) {
	          case 0: return func.call(this, rest);
	          case 1: return func.call(this, args[0], rest);
	          case 2: return func.call(this, args[0], args[1], rest);
	        }
	        var otherArgs = Array(start + 1);
	        index = -1;
	        while (++index < start) {
	          otherArgs[index] = args[index];
	        }
	        otherArgs[start] = rest;
	        return func.apply(this, otherArgs);
	      };
	    }
	
	    /**
	     * Creates a function that invokes `func` with the `this` binding of the created
	     * function and an array of arguments much like [`Function#apply`](https://es5.github.io/#x15.3.4.3).
	     *
	     * **Note:** This method is based on the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to spread arguments over.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.spread(function(who, what) {
	     *   return who + ' says ' + what;
	     * });
	     *
	     * say(['fred', 'hello']);
	     * // => 'fred says hello'
	     *
	     * // with a Promise
	     * var numbers = Promise.all([
	     *   Promise.resolve(40),
	     *   Promise.resolve(36)
	     * ]);
	     *
	     * numbers.then(_.spread(function(x, y) {
	     *   return x + y;
	     * }));
	     * // => a Promise of 76
	     */
	    function spread(func) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function(array) {
	        return func.apply(this, array);
	      };
	    }
	
	    /**
	     * Creates a throttled function that only invokes `func` at most once per
	     * every `wait` milliseconds. The throttled function comes with a `cancel`
	     * method to cancel delayed invocations. Provide an options object to indicate
	     * that `func` should be invoked on the leading and/or trailing edge of the
	     * `wait` timeout. Subsequent calls to the throttled function return the
	     * result of the last `func` call.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the throttled function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.throttle` and `_.debounce`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to throttle.
	     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=true] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new throttled function.
	     * @example
	     *
	     * // avoid excessively updating the position while scrolling
	     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	     *
	     * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
	     * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	     *   'trailing': false
	     * }));
	     *
	     * // cancel a trailing throttled call
	     * jQuery(window).on('popstate', throttled.cancel);
	     */
	    function throttle(func, wait, options) {
	      var leading = true,
	          trailing = true;
	
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      if (options === false) {
	        leading = false;
	      } else if (isObject(options)) {
	        leading = 'leading' in options ? !!options.leading : leading;
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	      return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
	    }
	
	    /**
	     * Creates a function that provides `value` to the wrapper function as its
	     * first argument. Any additional arguments provided to the function are
	     * appended to those provided to the wrapper function. The wrapper is invoked
	     * with the `this` binding of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {*} value The value to wrap.
	     * @param {Function} wrapper The wrapper function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var p = _.wrap(_.escape, function(func, text) {
	     *   return '<p>' + func(text) + '</p>';
	     * });
	     *
	     * p('fred, barney, & pebbles');
	     * // => '<p>fred, barney, &amp; pebbles</p>'
	     */
	    function wrap(value, wrapper) {
	      wrapper = wrapper == null ? identity : wrapper;
	      return createWrapper(wrapper, PARTIAL_FLAG, undefined, [value], []);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
	     * otherwise they are assigned by reference. If `customizer` is provided it is
	     * invoked to produce the cloned values. If `customizer` returns `undefined`
	     * cloning is handled by the method instead. The `customizer` is bound to
	     * `thisArg` and invoked with two argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var shallow = _.clone(users);
	     * shallow[0] === users[0];
	     * // => true
	     *
	     * var deep = _.clone(users, true);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.clone(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(false);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 0
	     */
	    function clone(value, isDeep, customizer, thisArg) {
	      if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
	        isDeep = false;
	      }
	      else if (typeof isDeep == 'function') {
	        thisArg = customizer;
	        customizer = isDeep;
	        isDeep = false;
	      }
	      return typeof customizer == 'function'
	        ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1))
	        : baseClone(value, isDeep);
	    }
	
	    /**
	     * Creates a deep clone of `value`. If `customizer` is provided it is invoked
	     * to produce the cloned values. If `customizer` returns `undefined` cloning
	     * is handled by the method instead. The `customizer` is bound to `thisArg`
	     * and invoked with two argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the deep cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var deep = _.cloneDeep(users);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.cloneDeep(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(true);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 20
	     */
	    function cloneDeep(value, customizer, thisArg) {
	      return typeof customizer == 'function'
	        ? baseClone(value, true, bindCallback(customizer, thisArg, 1))
	        : baseClone(value, true);
	    }
	
	    /**
	     * Checks if `value` is greater than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
	     * @example
	     *
	     * _.gt(3, 1);
	     * // => true
	     *
	     * _.gt(3, 3);
	     * // => false
	     *
	     * _.gt(1, 3);
	     * // => false
	     */
	    function gt(value, other) {
	      return value > other;
	    }
	
	    /**
	     * Checks if `value` is greater than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.gte(3, 1);
	     * // => true
	     *
	     * _.gte(3, 3);
	     * // => true
	     *
	     * _.gte(1, 3);
	     * // => false
	     */
	    function gte(value, other) {
	      return value >= other;
	    }
	
	    /**
	     * Checks if `value` is classified as an `arguments` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArguments(function() { return arguments; }());
	     * // => true
	     *
	     * _.isArguments([1, 2, 3]);
	     * // => false
	     */
	    function isArguments(value) {
	      return isObjectLike(value) && isArrayLike(value) &&
	        hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	    }
	
	    /**
	     * Checks if `value` is classified as an `Array` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArray([1, 2, 3]);
	     * // => true
	     *
	     * _.isArray(function() { return arguments; }());
	     * // => false
	     */
	    var isArray = nativeIsArray || function(value) {
	      return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	    };
	
	    /**
	     * Checks if `value` is classified as a boolean primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isBoolean(false);
	     * // => true
	     *
	     * _.isBoolean(null);
	     * // => false
	     */
	    function isBoolean(value) {
	      return value === true || value === false || (isObjectLike(value) && objToString.call(value) == boolTag);
	    }
	
	    /**
	     * Checks if `value` is classified as a `Date` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isDate(new Date);
	     * // => true
	     *
	     * _.isDate('Mon April 23 2012');
	     * // => false
	     */
	    function isDate(value) {
	      return isObjectLike(value) && objToString.call(value) == dateTag;
	    }
	
	    /**
	     * Checks if `value` is a DOM element.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	     * @example
	     *
	     * _.isElement(document.body);
	     * // => true
	     *
	     * _.isElement('<body>');
	     * // => false
	     */
	    function isElement(value) {
	      return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
	    }
	
	    /**
	     * Checks if `value` is empty. A value is considered empty unless it is an
	     * `arguments` object, array, string, or jQuery-like collection with a length
	     * greater than `0` or an object with own enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Array|Object|string} value The value to inspect.
	     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	     * @example
	     *
	     * _.isEmpty(null);
	     * // => true
	     *
	     * _.isEmpty(true);
	     * // => true
	     *
	     * _.isEmpty(1);
	     * // => true
	     *
	     * _.isEmpty([1, 2, 3]);
	     * // => false
	     *
	     * _.isEmpty({ 'a': 1 });
	     * // => false
	     */
	    function isEmpty(value) {
	      if (value == null) {
	        return true;
	      }
	      if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
	          (isObjectLike(value) && isFunction(value.splice)))) {
	        return !value.length;
	      }
	      return !keys(value).length;
	    }
	
	    /**
	     * Performs a deep comparison between two values to determine if they are
	     * equivalent. If `customizer` is provided it is invoked to compare values.
	     * If `customizer` returns `undefined` comparisons are handled by the method
	     * instead. The `customizer` is bound to `thisArg` and invoked with three
	     * arguments: (value, other [, index|key]).
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. Functions and DOM nodes
	     * are **not** supported. Provide a customizer function to extend support
	     * for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @alias eq
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'fred' };
	     *
	     * object == other;
	     * // => false
	     *
	     * _.isEqual(object, other);
	     * // => true
	     *
	     * // using a customizer callback
	     * var array = ['hello', 'goodbye'];
	     * var other = ['hi', 'goodbye'];
	     *
	     * _.isEqual(array, other, function(value, other) {
	     *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
	     *     return true;
	     *   }
	     * });
	     * // => true
	     */
	    function isEqual(value, other, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      var result = customizer ? customizer(value, other) : undefined;
	      return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
	    }
	
	    /**
	     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	     * `SyntaxError`, `TypeError`, or `URIError` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	     * @example
	     *
	     * _.isError(new Error);
	     * // => true
	     *
	     * _.isError(Error);
	     * // => false
	     */
	    function isError(value) {
	      return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
	    }
	
	    /**
	     * Checks if `value` is a finite primitive number.
	     *
	     * **Note:** This method is based on [`Number.isFinite`](http://ecma-international.org/ecma-262/6.0/#sec-number.isfinite).
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	     * @example
	     *
	     * _.isFinite(10);
	     * // => true
	     *
	     * _.isFinite('10');
	     * // => false
	     *
	     * _.isFinite(true);
	     * // => false
	     *
	     * _.isFinite(Object(10));
	     * // => false
	     *
	     * _.isFinite(Infinity);
	     * // => false
	     */
	    function isFinite(value) {
	      return typeof value == 'number' && nativeIsFinite(value);
	    }
	
	    /**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */
	    function isFunction(value) {
	      // The use of `Object#toString` avoids issues with the `typeof` operator
	      // in older versions of Chrome and Safari which return 'function' for regexes
	      // and Safari 8 equivalents which return 'object' for typed array constructors.
	      return isObject(value) && objToString.call(value) == funcTag;
	    }
	
	    /**
	     * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(1);
	     * // => false
	     */
	    function isObject(value) {
	      // Avoid a V8 JIT bug in Chrome 19-20.
	      // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	      var type = typeof value;
	      return !!value && (type == 'object' || type == 'function');
	    }
	
	    /**
	     * Performs a deep comparison between `object` and `source` to determine if
	     * `object` contains equivalent property values. If `customizer` is provided
	     * it is invoked to compare values. If `customizer` returns `undefined`
	     * comparisons are handled by the method instead. The `customizer` is bound
	     * to `thisArg` and invoked with three arguments: (value, other, index|key).
	     *
	     * **Note:** This method supports comparing properties of arrays, booleans,
	     * `Date` objects, numbers, `Object` objects, regexes, and strings. Functions
	     * and DOM nodes are **not** supported. Provide a customizer function to extend
	     * support for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.isMatch(object, { 'age': 40 });
	     * // => true
	     *
	     * _.isMatch(object, { 'age': 36 });
	     * // => false
	     *
	     * // using a customizer callback
	     * var object = { 'greeting': 'hello' };
	     * var source = { 'greeting': 'hi' };
	     *
	     * _.isMatch(object, source, function(value, other) {
	     *   return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
	     * });
	     * // => true
	     */
	    function isMatch(object, source, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      return baseIsMatch(object, getMatchData(source), customizer);
	    }
	
	    /**
	     * Checks if `value` is `NaN`.
	     *
	     * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
	     * which returns `true` for `undefined` and other non-numeric values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     * @example
	     *
	     * _.isNaN(NaN);
	     * // => true
	     *
	     * _.isNaN(new Number(NaN));
	     * // => true
	     *
	     * isNaN(undefined);
	     * // => true
	     *
	     * _.isNaN(undefined);
	     * // => false
	     */
	    function isNaN(value) {
	      // An `NaN` primitive is the only value that is not equal to itself.
	      // Perform the `toStringTag` check first to avoid errors with some host objects in IE.
	      return isNumber(value) && value != +value;
	    }
	
	    /**
	     * Checks if `value` is a native function.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	     * @example
	     *
	     * _.isNative(Array.prototype.push);
	     * // => true
	     *
	     * _.isNative(_);
	     * // => false
	     */
	    function isNative(value) {
	      if (value == null) {
	        return false;
	      }
	      if (isFunction(value)) {
	        return reIsNative.test(fnToString.call(value));
	      }
	      return isObjectLike(value) && reIsHostCtor.test(value);
	    }
	
	    /**
	     * Checks if `value` is `null`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	     * @example
	     *
	     * _.isNull(null);
	     * // => true
	     *
	     * _.isNull(void 0);
	     * // => false
	     */
	    function isNull(value) {
	      return value === null;
	    }
	
	    /**
	     * Checks if `value` is classified as a `Number` primitive or object.
	     *
	     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
	     * as numbers, use the `_.isFinite` method.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isNumber(8.4);
	     * // => true
	     *
	     * _.isNumber(NaN);
	     * // => true
	     *
	     * _.isNumber('8.4');
	     * // => false
	     */
	    function isNumber(value) {
	      return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag);
	    }
	
	    /**
	     * Checks if `value` is a plain object, that is, an object created by the
	     * `Object` constructor or one with a `[[Prototype]]` of `null`.
	     *
	     * **Note:** This method assumes objects created by the `Object` constructor
	     * have no inherited enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * _.isPlainObject(new Foo);
	     * // => false
	     *
	     * _.isPlainObject([1, 2, 3]);
	     * // => false
	     *
	     * _.isPlainObject({ 'x': 0, 'y': 0 });
	     * // => true
	     *
	     * _.isPlainObject(Object.create(null));
	     * // => true
	     */
	    function isPlainObject(value) {
	      var Ctor;
	
	      // Exit early for non `Object` objects.
	      if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	          (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	        return false;
	      }
	      // IE < 9 iterates inherited properties before own properties. If the first
	      // iterated property is an object's own property then there are no inherited
	      // enumerable properties.
	      var result;
	      // In most environments an object's own properties are iterated before
	      // its inherited properties. If the last iterated property is an object's
	      // own property then there are no inherited enumerable properties.
	      baseForIn(value, function(subValue, key) {
	        result = key;
	      });
	      return result === undefined || hasOwnProperty.call(value, result);
	    }
	
	    /**
	     * Checks if `value` is classified as a `RegExp` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isRegExp(/abc/);
	     * // => true
	     *
	     * _.isRegExp('/abc/');
	     * // => false
	     */
	    function isRegExp(value) {
	      return isObject(value) && objToString.call(value) == regexpTag;
	    }
	
	    /**
	     * Checks if `value` is classified as a `String` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isString('abc');
	     * // => true
	     *
	     * _.isString(1);
	     * // => false
	     */
	    function isString(value) {
	      return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
	    }
	
	    /**
	     * Checks if `value` is classified as a typed array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isTypedArray(new Uint8Array);
	     * // => true
	     *
	     * _.isTypedArray([]);
	     * // => false
	     */
	    function isTypedArray(value) {
	      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	    }
	
	    /**
	     * Checks if `value` is `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	     * @example
	     *
	     * _.isUndefined(void 0);
	     * // => true
	     *
	     * _.isUndefined(null);
	     * // => false
	     */
	    function isUndefined(value) {
	      return value === undefined;
	    }
	
	    /**
	     * Checks if `value` is less than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
	     * @example
	     *
	     * _.lt(1, 3);
	     * // => true
	     *
	     * _.lt(3, 3);
	     * // => false
	     *
	     * _.lt(3, 1);
	     * // => false
	     */
	    function lt(value, other) {
	      return value < other;
	    }
	
	    /**
	     * Checks if `value` is less than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.lte(1, 3);
	     * // => true
	     *
	     * _.lte(3, 3);
	     * // => true
	     *
	     * _.lte(3, 1);
	     * // => false
	     */
	    function lte(value, other) {
	      return value <= other;
	    }
	
	    /**
	     * Converts `value` to an array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the converted array.
	     * @example
	     *
	     * (function() {
	     *   return _.toArray(arguments).slice(1);
	     * }(1, 2, 3));
	     * // => [2, 3]
	     */
	    function toArray(value) {
	      var length = value ? getLength(value) : 0;
	      if (!isLength(length)) {
	        return values(value);
	      }
	      if (!length) {
	        return [];
	      }
	      return arrayCopy(value);
	    }
	
	    /**
	     * Converts `value` to a plain object flattening inherited enumerable
	     * properties of `value` to own properties of the plain object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Object} Returns the converted plain object.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.assign({ 'a': 1 }, new Foo);
	     * // => { 'a': 1, 'b': 2 }
	     *
	     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	     * // => { 'a': 1, 'b': 2, 'c': 3 }
	     */
	    function toPlainObject(value) {
	      return baseCopy(value, keysIn(value));
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Recursively merges own enumerable properties of the source object(s), that
	     * don't resolve to `undefined` into the destination object. Subsequent sources
	     * overwrite property assignments of previous sources. If `customizer` is
	     * provided it is invoked to produce the merged values of the destination and
	     * source properties. If `customizer` returns `undefined` merging is handled
	     * by the method instead. The `customizer` is bound to `thisArg` and invoked
	     * with five arguments: (objectValue, sourceValue, key, object, source).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var users = {
	     *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	     * };
	     *
	     * var ages = {
	     *   'data': [{ 'age': 36 }, { 'age': 40 }]
	     * };
	     *
	     * _.merge(users, ages);
	     * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	     *
	     * // using a customizer callback
	     * var object = {
	     *   'fruits': ['apple'],
	     *   'vegetables': ['beet']
	     * };
	     *
	     * var other = {
	     *   'fruits': ['banana'],
	     *   'vegetables': ['carrot']
	     * };
	     *
	     * _.merge(object, other, function(a, b) {
	     *   if (_.isArray(a)) {
	     *     return a.concat(b);
	     *   }
	     * });
	     * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	     */
	    var merge = createAssigner(baseMerge);
	
	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object. Subsequent sources overwrite property assignments of previous sources.
	     * If `customizer` is provided it is invoked to produce the assigned values.
	     * The `customizer` is bound to `thisArg` and invoked with five arguments:
	     * (objectValue, sourceValue, key, object, source).
	     *
	     * **Note:** This method mutates `object` and is based on
	     * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	     *
	     * @static
	     * @memberOf _
	     * @alias extend
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using a customizer callback
	     * var defaults = _.partialRight(_.assign, function(value, other) {
	     *   return _.isUndefined(value) ? other : value;
	     * });
	     *
	     * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var assign = createAssigner(function(object, source, customizer) {
	      return customizer
	        ? assignWith(object, source, customizer)
	        : baseAssign(object, source);
	    });
	
	    /**
	     * Creates an object that inherits from the given `prototype` object. If a
	     * `properties` object is provided its own enumerable properties are assigned
	     * to the created object.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} prototype The object to inherit from.
	     * @param {Object} [properties] The properties to assign to the object.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * function Shape() {
	     *   this.x = 0;
	     *   this.y = 0;
	     * }
	     *
	     * function Circle() {
	     *   Shape.call(this);
	     * }
	     *
	     * Circle.prototype = _.create(Shape.prototype, {
	     *   'constructor': Circle
	     * });
	     *
	     * var circle = new Circle;
	     * circle instanceof Circle;
	     * // => true
	     *
	     * circle instanceof Shape;
	     * // => true
	     */
	    function create(prototype, properties, guard) {
	      var result = baseCreate(prototype);
	      if (guard && isIterateeCall(prototype, properties, guard)) {
	        properties = undefined;
	      }
	      return properties ? baseAssign(result, properties) : result;
	    }
	
	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object for all destination properties that resolve to `undefined`. Once a
	     * property is set, additional values of the same property are ignored.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var defaults = createDefaults(assign, assignDefaults);
	
	    /**
	     * This method is like `_.defaults` except that it recursively assigns
	     * default properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
	     * // => { 'user': { 'name': 'barney', 'age': 36 } }
	     *
	     */
	    var defaultsDeep = createDefaults(merge, mergeDefaults);
	
	    /**
	     * This method is like `_.find` except that it returns the key of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => 'barney' (iteration order is not guaranteed)
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findKey(users, { 'age': 1, 'active': true });
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findKey(users, 'active');
	     * // => 'barney'
	     */
	    var findKey = createFindKey(baseForOwn);
	
	    /**
	     * This method is like `_.findKey` except that it iterates over elements of
	     * a collection in the opposite order.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findLastKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => returns `pebbles` assuming `_.findKey` returns `barney`
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastKey(users, { 'age': 36, 'active': true });
	     * // => 'barney'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastKey(users, 'active');
	     * // => 'pebbles'
	     */
	    var findLastKey = createFindKey(baseForOwnRight);
	
	    /**
	     * Iterates over own and inherited enumerable properties of an object invoking
	     * `iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
	     * with three arguments: (value, key, object). Iteratee functions may exit
	     * iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forIn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a', 'b', and 'c' (iteration order is not guaranteed)
	     */
	    var forIn = createForIn(baseFor);
	
	    /**
	     * This method is like `_.forIn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forInRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'c', 'b', and 'a' assuming `_.forIn ` logs 'a', 'b', and 'c'
	     */
	    var forInRight = createForIn(baseForRight);
	
	    /**
	     * Iterates over own enumerable properties of an object invoking `iteratee`
	     * for each property. The `iteratee` is bound to `thisArg` and invoked with
	     * three arguments: (value, key, object). Iteratee functions may exit iteration
	     * early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a' and 'b' (iteration order is not guaranteed)
	     */
	    var forOwn = createForOwn(baseForOwn);
	
	    /**
	     * This method is like `_.forOwn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwnRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'b' and 'a' assuming `_.forOwn` logs 'a' and 'b'
	     */
	    var forOwnRight = createForOwn(baseForOwnRight);
	
	    /**
	     * Creates an array of function property names from all enumerable properties,
	     * own and inherited, of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @alias methods
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the new array of property names.
	     * @example
	     *
	     * _.functions(_);
	     * // => ['after', 'ary', 'assign', ...]
	     */
	    function functions(object) {
	      return baseFunctions(object, keysIn(object));
	    }
	
	    /**
	     * Gets the property value at `path` of `object`. If the resolved value is
	     * `undefined` the `defaultValue` is used in its place.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.get(object, 'a[0].b.c');
	     * // => 3
	     *
	     * _.get(object, ['a', '0', 'b', 'c']);
	     * // => 3
	     *
	     * _.get(object, 'a.b.c', 'default');
	     * // => 'default'
	     */
	    function get(object, path, defaultValue) {
	      var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
	      return result === undefined ? defaultValue : result;
	    }
	
	    /**
	     * Checks if `path` is a direct property.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` is a direct property, else `false`.
	     * @example
	     *
	     * var object = { 'a': { 'b': { 'c': 3 } } };
	     *
	     * _.has(object, 'a');
	     * // => true
	     *
	     * _.has(object, 'a.b.c');
	     * // => true
	     *
	     * _.has(object, ['a', 'b', 'c']);
	     * // => true
	     */
	    function has(object, path) {
	      if (object == null) {
	        return false;
	      }
	      var result = hasOwnProperty.call(object, path);
	      if (!result && !isKey(path)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        if (object == null) {
	          return false;
	        }
	        path = last(path);
	        result = hasOwnProperty.call(object, path);
	      }
	      return result || (isLength(object.length) && isIndex(path, object.length) &&
	        (isArray(object) || isArguments(object)));
	    }
	
	    /**
	     * Creates an object composed of the inverted keys and values of `object`.
	     * If `object` contains duplicate values, subsequent values overwrite property
	     * assignments of previous values unless `multiValue` is `true`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @param {boolean} [multiValue] Allow multiple values per key.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invert(object);
	     * // => { '1': 'c', '2': 'b' }
	     *
	     * // with `multiValue`
	     * _.invert(object, true);
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     */
	    function invert(object, multiValue, guard) {
	      if (guard && isIterateeCall(object, multiValue, guard)) {
	        multiValue = undefined;
	      }
	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = {};
	
	      while (++index < length) {
	        var key = props[index],
	            value = object[key];
	
	        if (multiValue) {
	          if (hasOwnProperty.call(result, value)) {
	            result[value].push(key);
	          } else {
	            result[value] = [key];
	          }
	        }
	        else {
	          result[value] = key;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */
	    var keys = !nativeKeys ? shimKeys : function(object) {
	      var Ctor = object == null ? undefined : object.constructor;
	      if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	          (typeof object != 'function' && isArrayLike(object))) {
	        return shimKeys(object);
	      }
	      return isObject(object) ? nativeKeys(object) : [];
	    };
	
	    /**
	     * Creates an array of the own and inherited enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keysIn(new Foo);
	     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	     */
	    function keysIn(object) {
	      if (object == null) {
	        return [];
	      }
	      if (!isObject(object)) {
	        object = Object(object);
	      }
	      var length = object.length;
	      length = (length && isLength(length) &&
	        (isArray(object) || isArguments(object)) && length) || 0;
	
	      var Ctor = object.constructor,
	          index = -1,
	          isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	          result = Array(length),
	          skipIndexes = length > 0;
	
	      while (++index < length) {
	        result[index] = (index + '');
	      }
	      for (var key in object) {
	        if (!(skipIndexes && isIndex(key, length)) &&
	            !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	          result.push(key);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The opposite of `_.mapValues`; this method creates an object with the
	     * same values as `object` and keys generated by running each own enumerable
	     * property of `object` through `iteratee`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   return key + value;
	     * });
	     * // => { 'a1': 1, 'b2': 2 }
	     */
	    var mapKeys = createObjectMapper(true);
	
	    /**
	     * Creates an object with the same keys as `object` and values generated by
	     * running each own enumerable property of `object` through `iteratee`. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, key, object).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
	     *   return n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     *
	     * var users = {
	     *   'fred':    { 'user': 'fred',    'age': 40 },
	     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	     * };
	     *
	     * // using the `_.property` callback shorthand
	     * _.mapValues(users, 'age');
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     */
	    var mapValues = createObjectMapper();
	
	    /**
	     * The opposite of `_.pick`; this method creates an object composed of the
	     * own and inherited enumerable properties of `object` that are not omitted.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to omit, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.omit(object, 'age');
	     * // => { 'user': 'fred' }
	     *
	     * _.omit(object, _.isNumber);
	     * // => { 'user': 'fred' }
	     */
	    var omit = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      if (typeof props[0] != 'function') {
	        var props = arrayMap(baseFlatten(props), String);
	        return pickByArray(object, baseDifference(keysIn(object), props));
	      }
	      var predicate = bindCallback(props[0], props[1], 3);
	      return pickByCallback(object, function(value, key, object) {
	        return !predicate(value, key, object);
	      });
	    });
	
	    /**
	     * Creates a two dimensional array of the key-value pairs for `object`,
	     * e.g. `[[key1, value1], [key2, value2]]`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the new array of key-value pairs.
	     * @example
	     *
	     * _.pairs({ 'barney': 36, 'fred': 40 });
	     * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	     */
	    function pairs(object) {
	      object = toObject(object);
	
	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = Array(length);
	
	      while (++index < length) {
	        var key = props[index];
	        result[index] = [key, object[key]];
	      }
	      return result;
	    }
	
	    /**
	     * Creates an object composed of the picked `object` properties. Property
	     * names may be specified as individual arguments or as arrays of property
	     * names. If `predicate` is provided it is invoked for each property of `object`
	     * picking the properties `predicate` returns truthy for. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to pick, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.pick(object, 'user');
	     * // => { 'user': 'fred' }
	     *
	     * _.pick(object, _.isString);
	     * // => { 'user': 'fred' }
	     */
	    var pick = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      return typeof props[0] == 'function'
	        ? pickByCallback(object, bindCallback(props[0], props[1], 3))
	        : pickByArray(object, baseFlatten(props));
	    });
	
	    /**
	     * This method is like `_.get` except that if the resolved value is a function
	     * it is invoked with the `this` binding of its parent object and its result
	     * is returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to resolve.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	     *
	     * _.result(object, 'a[0].b.c1');
	     * // => 3
	     *
	     * _.result(object, 'a[0].b.c2');
	     * // => 4
	     *
	     * _.result(object, 'a.b.c', 'default');
	     * // => 'default'
	     *
	     * _.result(object, 'a.b.c', _.constant('default'));
	     * // => 'default'
	     */
	    function result(object, path, defaultValue) {
	      var result = object == null ? undefined : object[path];
	      if (result === undefined) {
	        if (object != null && !isKey(path, object)) {
	          path = toPath(path);
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          result = object == null ? undefined : object[last(path)];
	        }
	        result = result === undefined ? defaultValue : result;
	      }
	      return isFunction(result) ? result.call(object) : result;
	    }
	
	    /**
	     * Sets the property value of `path` on `object`. If a portion of `path`
	     * does not exist it is created.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to augment.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.set(object, 'a[0].b.c', 4);
	     * console.log(object.a[0].b.c);
	     * // => 4
	     *
	     * _.set(object, 'x[0].y.z', 5);
	     * console.log(object.x[0].y.z);
	     * // => 5
	     */
	    function set(object, path, value) {
	      if (object == null) {
	        return object;
	      }
	      var pathKey = (path + '');
	      path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);
	
	      var index = -1,
	          length = path.length,
	          lastIndex = length - 1,
	          nested = object;
	
	      while (nested != null && ++index < length) {
	        var key = path[index];
	        if (isObject(nested)) {
	          if (index == lastIndex) {
	            nested[key] = value;
	          } else if (nested[key] == null) {
	            nested[key] = isIndex(path[index + 1]) ? [] : {};
	          }
	        }
	        nested = nested[key];
	      }
	      return object;
	    }
	
	    /**
	     * An alternative to `_.reduce`; this method transforms `object` to a new
	     * `accumulator` object which is the result of running each of its own enumerable
	     * properties through `iteratee`, with each invocation potentially mutating
	     * the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
	     * with four arguments: (accumulator, value, key, object). Iteratee functions
	     * may exit iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Array|Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The custom accumulator value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.transform([2, 3, 4], function(result, n) {
	     *   result.push(n *= n);
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 9]
	     *
	     * _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     */
	    function transform(object, iteratee, accumulator, thisArg) {
	      var isArr = isArray(object) || isTypedArray(object);
	      iteratee = getCallback(iteratee, thisArg, 4);
	
	      if (accumulator == null) {
	        if (isArr || isObject(object)) {
	          var Ctor = object.constructor;
	          if (isArr) {
	            accumulator = isArray(object) ? new Ctor : [];
	          } else {
	            accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
	          }
	        } else {
	          accumulator = {};
	        }
	      }
	      (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
	        return iteratee(accumulator, value, index, object);
	      });
	      return accumulator;
	    }
	
	    /**
	     * Creates an array of the own enumerable property values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.values(new Foo);
	     * // => [1, 2] (iteration order is not guaranteed)
	     *
	     * _.values('hi');
	     * // => ['h', 'i']
	     */
	    function values(object) {
	      return baseValues(object, keys(object));
	    }
	
	    /**
	     * Creates an array of the own and inherited enumerable property values
	     * of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.valuesIn(new Foo);
	     * // => [1, 2, 3] (iteration order is not guaranteed)
	     */
	    function valuesIn(object) {
	      return baseValues(object, keysIn(object));
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Checks if `n` is between `start` and up to but not including, `end`. If
	     * `end` is not specified it is set to `start` with `start` then set to `0`.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} n The number to check.
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `n` is in the range, else `false`.
	     * @example
	     *
	     * _.inRange(3, 2, 4);
	     * // => true
	     *
	     * _.inRange(4, 8);
	     * // => true
	     *
	     * _.inRange(4, 2);
	     * // => false
	     *
	     * _.inRange(2, 2);
	     * // => false
	     *
	     * _.inRange(1.2, 2);
	     * // => true
	     *
	     * _.inRange(5.2, 4);
	     * // => false
	     */
	    function inRange(value, start, end) {
	      start = +start || 0;
	      if (end === undefined) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      return value >= nativeMin(start, end) && value < nativeMax(start, end);
	    }
	
	    /**
	     * Produces a random number between `min` and `max` (inclusive). If only one
	     * argument is provided a number between `0` and the given number is returned.
	     * If `floating` is `true`, or either `min` or `max` are floats, a floating-point
	     * number is returned instead of an integer.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} [min=0] The minimum possible value.
	     * @param {number} [max=1] The maximum possible value.
	     * @param {boolean} [floating] Specify returning a floating-point number.
	     * @returns {number} Returns the random number.
	     * @example
	     *
	     * _.random(0, 5);
	     * // => an integer between 0 and 5
	     *
	     * _.random(5);
	     * // => also an integer between 0 and 5
	     *
	     * _.random(5, true);
	     * // => a floating-point number between 0 and 5
	     *
	     * _.random(1.2, 5.2);
	     * // => a floating-point number between 1.2 and 5.2
	     */
	    function random(min, max, floating) {
	      if (floating && isIterateeCall(min, max, floating)) {
	        max = floating = undefined;
	      }
	      var noMin = min == null,
	          noMax = max == null;
	
	      if (floating == null) {
	        if (noMax && typeof min == 'boolean') {
	          floating = min;
	          min = 1;
	        }
	        else if (typeof max == 'boolean') {
	          floating = max;
	          noMax = true;
	        }
	      }
	      if (noMin && noMax) {
	        max = 1;
	        noMax = false;
	      }
	      min = +min || 0;
	      if (noMax) {
	        max = min;
	        min = 0;
	      } else {
	        max = +max || 0;
	      }
	      if (floating || min % 1 || max % 1) {
	        var rand = nativeRandom();
	        return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
	      }
	      return baseRandom(min, max);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the camel cased string.
	     * @example
	     *
	     * _.camelCase('Foo Bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('--foo-bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('__foo_bar__');
	     * // => 'fooBar'
	     */
	    var camelCase = createCompounder(function(result, word, index) {
	      word = word.toLowerCase();
	      return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
	    });
	
	    /**
	     * Capitalizes the first character of `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to capitalize.
	     * @returns {string} Returns the capitalized string.
	     * @example
	     *
	     * _.capitalize('fred');
	     * // => 'Fred'
	     */
	    function capitalize(string) {
	      string = baseToString(string);
	      return string && (string.charAt(0).toUpperCase() + string.slice(1));
	    }
	
	    /**
	     * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	     * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to deburr.
	     * @returns {string} Returns the deburred string.
	     * @example
	     *
	     * _.deburr('déjà vu');
	     * // => 'deja vu'
	     */
	    function deburr(string) {
	      string = baseToString(string);
	      return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
	    }
	
	    /**
	     * Checks if `string` ends with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=string.length] The position to search from.
	     * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
	     * @example
	     *
	     * _.endsWith('abc', 'c');
	     * // => true
	     *
	     * _.endsWith('abc', 'b');
	     * // => false
	     *
	     * _.endsWith('abc', 'b', 2);
	     * // => true
	     */
	    function endsWith(string, target, position) {
	      string = baseToString(string);
	      target = (target + '');
	
	      var length = string.length;
	      position = position === undefined
	        ? length
	        : nativeMin(position < 0 ? 0 : (+position || 0), length);
	
	      position -= target.length;
	      return position >= 0 && string.indexOf(target, position) == position;
	    }
	
	    /**
	     * Converts the characters "&", "<", ">", '"', "'", and "\`", in `string` to
	     * their corresponding HTML entities.
	     *
	     * **Note:** No other characters are escaped. To escape additional characters
	     * use a third-party library like [_he_](https://mths.be/he).
	     *
	     * Though the ">" character is escaped for symmetry, characters like
	     * ">" and "/" don't need escaping in HTML and have no special meaning
	     * unless they're part of a tag or unquoted attribute value.
	     * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	     * (under "semi-related fun fact") for more details.
	     *
	     * Backticks are escaped because in Internet Explorer < 9, they can break out
	     * of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
	     * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
	     * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
	     * for more details.
	     *
	     * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
	     * to reduce XSS vectors.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escape('fred, barney, & pebbles');
	     * // => 'fred, barney, &amp; pebbles'
	     */
	    function escape(string) {
	      // Reset `lastIndex` because in IE < 9 `String#replace` does not.
	      string = baseToString(string);
	      return (string && reHasUnescapedHtml.test(string))
	        ? string.replace(reUnescapedHtml, escapeHtmlChar)
	        : string;
	    }
	
	    /**
	     * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
	     * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escapeRegExp('[lodash](https://lodash.com/)');
	     * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
	     */
	    function escapeRegExp(string) {
	      string = baseToString(string);
	      return (string && reHasRegExpChars.test(string))
	        ? string.replace(reRegExpChars, escapeRegExpChar)
	        : (string || '(?:)');
	    }
	
	    /**
	     * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the kebab cased string.
	     * @example
	     *
	     * _.kebabCase('Foo Bar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('fooBar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('__foo_bar__');
	     * // => 'foo-bar'
	     */
	    var kebabCase = createCompounder(function(result, word, index) {
	      return result + (index ? '-' : '') + word.toLowerCase();
	    });
	
	    /**
	     * Pads `string` on the left and right sides if it's shorter than `length`.
	     * Padding characters are truncated if they can't be evenly divided by `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.pad('abc', 8);
	     * // => '  abc   '
	     *
	     * _.pad('abc', 8, '_-');
	     * // => '_-abc_-_'
	     *
	     * _.pad('abc', 3);
	     * // => 'abc'
	     */
	    function pad(string, length, chars) {
	      string = baseToString(string);
	      length = +length;
	
	      var strLength = string.length;
	      if (strLength >= length || !nativeIsFinite(length)) {
	        return string;
	      }
	      var mid = (length - strLength) / 2,
	          leftLength = nativeFloor(mid),
	          rightLength = nativeCeil(mid);
	
	      chars = createPadding('', rightLength, chars);
	      return chars.slice(0, leftLength) + string + chars;
	    }
	
	    /**
	     * Pads `string` on the left side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padLeft('abc', 6);
	     * // => '   abc'
	     *
	     * _.padLeft('abc', 6, '_-');
	     * // => '_-_abc'
	     *
	     * _.padLeft('abc', 3);
	     * // => 'abc'
	     */
	    var padLeft = createPadDir();
	
	    /**
	     * Pads `string` on the right side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padRight('abc', 6);
	     * // => 'abc   '
	     *
	     * _.padRight('abc', 6, '_-');
	     * // => 'abc_-_'
	     *
	     * _.padRight('abc', 3);
	     * // => 'abc'
	     */
	    var padRight = createPadDir(true);
	
	    /**
	     * Converts `string` to an integer of the specified radix. If `radix` is
	     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
	     * in which case a `radix` of `16` is used.
	     *
	     * **Note:** This method aligns with the [ES5 implementation](https://es5.github.io/#E)
	     * of `parseInt`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} string The string to convert.
	     * @param {number} [radix] The radix to interpret `value` by.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.parseInt('08');
	     * // => 8
	     *
	     * _.map(['6', '08', '10'], _.parseInt);
	     * // => [6, 8, 10]
	     */
	    function parseInt(string, radix, guard) {
	      // Firefox < 21 and Opera < 15 follow ES3 for `parseInt`.
	      // Chrome fails to trim leading <BOM> whitespace characters.
	      // See https://code.google.com/p/v8/issues/detail?id=3109 for more details.
	      if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
	        radix = 0;
	      } else if (radix) {
	        radix = +radix;
	      }
	      string = trim(string);
	      return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
	    }
	
	    /**
	     * Repeats the given string `n` times.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to repeat.
	     * @param {number} [n=0] The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     * @example
	     *
	     * _.repeat('*', 3);
	     * // => '***'
	     *
	     * _.repeat('abc', 2);
	     * // => 'abcabc'
	     *
	     * _.repeat('abc', 0);
	     * // => ''
	     */
	    function repeat(string, n) {
	      var result = '';
	      string = baseToString(string);
	      n = +n;
	      if (n < 1 || !string || !nativeIsFinite(n)) {
	        return result;
	      }
	      // Leverage the exponentiation by squaring algorithm for a faster repeat.
	      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	      do {
	        if (n % 2) {
	          result += string;
	        }
	        n = nativeFloor(n / 2);
	        string += string;
	      } while (n);
	
	      return result;
	    }
	
	    /**
	     * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the snake cased string.
	     * @example
	     *
	     * _.snakeCase('Foo Bar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('fooBar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('--foo-bar');
	     * // => 'foo_bar'
	     */
	    var snakeCase = createCompounder(function(result, word, index) {
	      return result + (index ? '_' : '') + word.toLowerCase();
	    });
	
	    /**
	     * Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the start cased string.
	     * @example
	     *
	     * _.startCase('--foo-bar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('fooBar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('__foo_bar__');
	     * // => 'Foo Bar'
	     */
	    var startCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
	    });
	
	    /**
	     * Checks if `string` starts with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=0] The position to search from.
	     * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
	     * @example
	     *
	     * _.startsWith('abc', 'a');
	     * // => true
	     *
	     * _.startsWith('abc', 'b');
	     * // => false
	     *
	     * _.startsWith('abc', 'b', 1);
	     * // => true
	     */
	    function startsWith(string, target, position) {
	      string = baseToString(string);
	      position = position == null
	        ? 0
	        : nativeMin(position < 0 ? 0 : (+position || 0), string.length);
	
	      return string.lastIndexOf(target, position) == position;
	    }
	
	    /**
	     * Creates a compiled template function that can interpolate data properties
	     * in "interpolate" delimiters, HTML-escape interpolated data properties in
	     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	     * properties may be accessed as free variables in the template. If a setting
	     * object is provided it takes precedence over `_.templateSettings` values.
	     *
	     * **Note:** In the development build `_.template` utilizes
	     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	     * for easier debugging.
	     *
	     * For more information on precompiling templates see
	     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	     *
	     * For more information on Chrome extension sandboxes see
	     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The template string.
	     * @param {Object} [options] The options object.
	     * @param {RegExp} [options.escape] The HTML "escape" delimiter.
	     * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
	     * @param {Object} [options.imports] An object to import into the template as free variables.
	     * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
	     * @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
	     * @param {string} [options.variable] The data object variable name.
	     * @param- {Object} [otherOptions] Enables the legacy `options` param signature.
	     * @returns {Function} Returns the compiled template function.
	     * @example
	     *
	     * // using the "interpolate" delimiter to create a compiled template
	     * var compiled = _.template('hello <%= user %>!');
	     * compiled({ 'user': 'fred' });
	     * // => 'hello fred!'
	     *
	     * // using the HTML "escape" delimiter to escape data property values
	     * var compiled = _.template('<b><%- value %></b>');
	     * compiled({ 'value': '<script>' });
	     * // => '<b>&lt;script&gt;</b>'
	     *
	     * // using the "evaluate" delimiter to execute JavaScript and generate HTML
	     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the internal `print` function in "evaluate" delimiters
	     * var compiled = _.template('<% print("hello " + user); %>!');
	     * compiled({ 'user': 'barney' });
	     * // => 'hello barney!'
	     *
	     * // using the ES delimiter as an alternative to the default "interpolate" delimiter
	     * var compiled = _.template('hello ${ user }!');
	     * compiled({ 'user': 'pebbles' });
	     * // => 'hello pebbles!'
	     *
	     * // using custom template delimiters
	     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	     * var compiled = _.template('hello {{ user }}!');
	     * compiled({ 'user': 'mustache' });
	     * // => 'hello mustache!'
	     *
	     * // using backslashes to treat delimiters as plain text
	     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	     * compiled({ 'value': 'ignored' });
	     * // => '<%- value %>'
	     *
	     * // using the `imports` option to import `jQuery` as `jq`
	     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the `sourceURL` option to specify a custom sourceURL for the template
	     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	     * compiled(data);
	     * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
	     *
	     * // using the `variable` option to ensure a with-statement isn't used in the compiled template
	     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	     * compiled.source;
	     * // => function(data) {
	     * //   var __t, __p = '';
	     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	     * //   return __p;
	     * // }
	     *
	     * // using the `source` property to inline compiled templates for meaningful
	     * // line numbers in error messages and a stack trace
	     * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
	     *   var JST = {\
	     *     "main": ' + _.template(mainText).source + '\
	     *   };\
	     * ');
	     */
	    function template(string, options, otherOptions) {
	      // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
	      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
	      var settings = lodash.templateSettings;
	
	      if (otherOptions && isIterateeCall(string, options, otherOptions)) {
	        options = otherOptions = undefined;
	      }
	      string = baseToString(string);
	      options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);
	
	      var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
	          importsKeys = keys(imports),
	          importsValues = baseValues(imports, importsKeys);
	
	      var isEscaping,
	          isEvaluating,
	          index = 0,
	          interpolate = options.interpolate || reNoMatch,
	          source = "__p += '";
	
	      // Compile the regexp to match each delimiter.
	      var reDelimiters = RegExp(
	        (options.escape || reNoMatch).source + '|' +
	        interpolate.source + '|' +
	        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
	        (options.evaluate || reNoMatch).source + '|$'
	      , 'g');
	
	      // Use a sourceURL for easier debugging.
	      var sourceURL = '//# sourceURL=' +
	        ('sourceURL' in options
	          ? options.sourceURL
	          : ('lodash.templateSources[' + (++templateCounter) + ']')
	        ) + '\n';
	
	      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
	        interpolateValue || (interpolateValue = esTemplateValue);
	
	        // Escape characters that can't be included in string literals.
	        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
	
	        // Replace delimiters with snippets.
	        if (escapeValue) {
	          isEscaping = true;
	          source += "' +\n__e(" + escapeValue + ") +\n'";
	        }
	        if (evaluateValue) {
	          isEvaluating = true;
	          source += "';\n" + evaluateValue + ";\n__p += '";
	        }
	        if (interpolateValue) {
	          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	        }
	        index = offset + match.length;
	
	        // The JS engine embedded in Adobe products requires returning the `match`
	        // string in order to produce the correct `offset` value.
	        return match;
	      });
	
	      source += "';\n";
	
	      // If `variable` is not specified wrap a with-statement around the generated
	      // code to add the data object to the top of the scope chain.
	      var variable = options.variable;
	      if (!variable) {
	        source = 'with (obj) {\n' + source + '\n}\n';
	      }
	      // Cleanup code by stripping empty strings.
	      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
	        .replace(reEmptyStringMiddle, '$1')
	        .replace(reEmptyStringTrailing, '$1;');
	
	      // Frame code as the function body.
	      source = 'function(' + (variable || 'obj') + ') {\n' +
	        (variable
	          ? ''
	          : 'obj || (obj = {});\n'
	        ) +
	        "var __t, __p = ''" +
	        (isEscaping
	           ? ', __e = _.escape'
	           : ''
	        ) +
	        (isEvaluating
	          ? ', __j = Array.prototype.join;\n' +
	            "function print() { __p += __j.call(arguments, '') }\n"
	          : ';\n'
	        ) +
	        source +
	        'return __p\n}';
	
	      var result = attempt(function() {
	        return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
	      });
	
	      // Provide the compiled function's source by its `toString` method or
	      // the `source` property as a convenience for inlining compiled templates.
	      result.source = source;
	      if (isError(result)) {
	        throw result;
	      }
	      return result;
	    }
	
	    /**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */
	    function trim(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
	      }
	      chars = (chars + '');
	      return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
	    }
	
	    /**
	     * Removes leading whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimLeft('  abc  ');
	     * // => 'abc  '
	     *
	     * _.trimLeft('-_-abc-_-', '_-');
	     * // => 'abc-_-'
	     */
	    function trimLeft(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string));
	      }
	      return string.slice(charsLeftIndex(string, (chars + '')));
	    }
	
	    /**
	     * Removes trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimRight('  abc  ');
	     * // => '  abc'
	     *
	     * _.trimRight('-_-abc-_-', '_-');
	     * // => '-_-abc'
	     */
	    function trimRight(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(0, trimmedRightIndex(string) + 1);
	      }
	      return string.slice(0, charsRightIndex(string, (chars + '')) + 1);
	    }
	
	    /**
	     * Truncates `string` if it's longer than the given maximum string length.
	     * The last characters of the truncated string are replaced with the omission
	     * string which defaults to "...".
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to truncate.
	     * @param {Object|number} [options] The options object or maximum string length.
	     * @param {number} [options.length=30] The maximum string length.
	     * @param {string} [options.omission='...'] The string to indicate text is omitted.
	     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the truncated string.
	     * @example
	     *
	     * _.trunc('hi-diddly-ho there, neighborino');
	     * // => 'hi-diddly-ho there, neighbo...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', 24);
	     * // => 'hi-diddly-ho there, n...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': ' '
	     * });
	     * // => 'hi-diddly-ho there,...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': /,? +/
	     * });
	     * // => 'hi-diddly-ho there...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'omission': ' [...]'
	     * });
	     * // => 'hi-diddly-ho there, neig [...]'
	     */
	    function trunc(string, options, guard) {
	      if (guard && isIterateeCall(string, options, guard)) {
	        options = undefined;
	      }
	      var length = DEFAULT_TRUNC_LENGTH,
	          omission = DEFAULT_TRUNC_OMISSION;
	
	      if (options != null) {
	        if (isObject(options)) {
	          var separator = 'separator' in options ? options.separator : separator;
	          length = 'length' in options ? (+options.length || 0) : length;
	          omission = 'omission' in options ? baseToString(options.omission) : omission;
	        } else {
	          length = +options || 0;
	        }
	      }
	      string = baseToString(string);
	      if (length >= string.length) {
	        return string;
	      }
	      var end = length - omission.length;
	      if (end < 1) {
	        return omission;
	      }
	      var result = string.slice(0, end);
	      if (separator == null) {
	        return result + omission;
	      }
	      if (isRegExp(separator)) {
	        if (string.slice(end).search(separator)) {
	          var match,
	              newEnd,
	              substring = string.slice(0, end);
	
	          if (!separator.global) {
	            separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
	          }
	          separator.lastIndex = 0;
	          while ((match = separator.exec(substring))) {
	            newEnd = match.index;
	          }
	          result = result.slice(0, newEnd == null ? end : newEnd);
	        }
	      } else if (string.indexOf(separator, end) != end) {
	        var index = result.lastIndexOf(separator);
	        if (index > -1) {
	          result = result.slice(0, index);
	        }
	      }
	      return result + omission;
	    }
	
	    /**
	     * The inverse of `_.escape`; this method converts the HTML entities
	     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
	     * corresponding characters.
	     *
	     * **Note:** No other HTML entities are unescaped. To unescape additional HTML
	     * entities use a third-party library like [_he_](https://mths.be/he).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to unescape.
	     * @returns {string} Returns the unescaped string.
	     * @example
	     *
	     * _.unescape('fred, barney, &amp; pebbles');
	     * // => 'fred, barney, & pebbles'
	     */
	    function unescape(string) {
	      string = baseToString(string);
	      return (string && reHasEscapedHtml.test(string))
	        ? string.replace(reEscapedHtml, unescapeHtmlChar)
	        : string;
	    }
	
	    /**
	     * Splits `string` into an array of its words.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {RegExp|string} [pattern] The pattern to match words.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the words of `string`.
	     * @example
	     *
	     * _.words('fred, barney, & pebbles');
	     * // => ['fred', 'barney', 'pebbles']
	     *
	     * _.words('fred, barney, & pebbles', /[^, ]+/g);
	     * // => ['fred', 'barney', '&', 'pebbles']
	     */
	    function words(string, pattern, guard) {
	      if (guard && isIterateeCall(string, pattern, guard)) {
	        pattern = undefined;
	      }
	      string = baseToString(string);
	      return string.match(pattern || reWords) || [];
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Attempts to invoke `func`, returning either the result or the caught error
	     * object. Any additional arguments are provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function} func The function to attempt.
	     * @returns {*} Returns the `func` result or error object.
	     * @example
	     *
	     * // avoid throwing errors for invalid selectors
	     * var elements = _.attempt(function(selector) {
	     *   return document.querySelectorAll(selector);
	     * }, '>_>');
	     *
	     * if (_.isError(elements)) {
	     *   elements = [];
	     * }
	     */
	    var attempt = restParam(function(func, args) {
	      try {
	        return func.apply(undefined, args);
	      } catch(e) {
	        return isError(e) ? e : new Error(e);
	      }
	    });
	
	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and arguments of the created function. If `func` is a property name the
	     * created callback returns the property value for a given element. If `func`
	     * is an object the created callback returns `true` for elements that contain
	     * the equivalent object properties, otherwise it returns `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias iteratee
	     * @category Utility
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the callback.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // wrap to create custom callback shorthands
	     * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
	     *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
	     *   if (!match) {
	     *     return callback(func, thisArg);
	     *   }
	     *   return function(object) {
	     *     return match[2] == 'gt'
	     *       ? object[match[1]] > match[3]
	     *       : object[match[1]] < match[3];
	     *   };
	     * });
	     *
	     * _.filter(users, 'age__gt36');
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     */
	    function callback(func, thisArg, guard) {
	      if (guard && isIterateeCall(func, thisArg, guard)) {
	        thisArg = undefined;
	      }
	      return isObjectLike(func)
	        ? matches(func)
	        : baseCallback(func, thisArg);
	    }
	
	    /**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var getter = _.constant(object);
	     *
	     * getter() === object;
	     * // => true
	     */
	    function constant(value) {
	      return function() {
	        return value;
	      };
	    }
	
	    /**
	     * This method returns the first argument provided to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.identity(object) === object;
	     * // => true
	     */
	    function identity(value) {
	      return value;
	    }
	
	    /**
	     * Creates a function that performs a deep comparison between a given object
	     * and `source`, returning `true` if the given object has equivalent property
	     * values, else `false`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, _.matches({ 'age': 40, 'active': false }));
	     * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
	     */
	    function matches(source) {
	      return baseMatches(baseClone(source, true));
	    }
	
	    /**
	     * Creates a function that compares the property value of `path` on a given
	     * object to `value`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * _.find(users, _.matchesProperty('user', 'fred'));
	     * // => { 'user': 'fred' }
	     */
	    function matchesProperty(path, srcValue) {
	      return baseMatchesProperty(path, baseClone(srcValue, true));
	    }
	
	    /**
	     * Creates a function that invokes the method at `path` on a given object.
	     * Any additional arguments are provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': _.constant(2) } } },
	     *   { 'a': { 'b': { 'c': _.constant(1) } } }
	     * ];
	     *
	     * _.map(objects, _.method('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.invoke(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    var method = restParam(function(path, args) {
	      return function(object) {
	        return invokePath(object, path, args);
	      };
	    });
	
	    /**
	     * The opposite of `_.method`; this method creates a function that invokes
	     * the method at a given path on `object`. Any additional arguments are
	     * provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = _.times(3, _.constant),
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
	     * // => [2, 0]
	     */
	    var methodOf = restParam(function(object, args) {
	      return function(path) {
	        return invokePath(object, path, args);
	      };
	    });
	
	    /**
	     * Adds all own enumerable function properties of a source object to the
	     * destination object. If `object` is a function then methods are added to
	     * its prototype as well.
	     *
	     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	     * avoid conflicts caused by modifying the original.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function|Object} [object=lodash] The destination object.
	     * @param {Object} source The object of functions to add.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.chain=true] Specify whether the functions added
	     *  are chainable.
	     * @returns {Function|Object} Returns `object`.
	     * @example
	     *
	     * function vowels(string) {
	     *   return _.filter(string, function(v) {
	     *     return /[aeiou]/i.test(v);
	     *   });
	     * }
	     *
	     * _.mixin({ 'vowels': vowels });
	     * _.vowels('fred');
	     * // => ['e']
	     *
	     * _('fred').vowels().value();
	     * // => ['e']
	     *
	     * _.mixin({ 'vowels': vowels }, { 'chain': false });
	     * _('fred').vowels();
	     * // => ['e']
	     */
	    function mixin(object, source, options) {
	      if (options == null) {
	        var isObj = isObject(source),
	            props = isObj ? keys(source) : undefined,
	            methodNames = (props && props.length) ? baseFunctions(source, props) : undefined;
	
	        if (!(methodNames ? methodNames.length : isObj)) {
	          methodNames = false;
	          options = source;
	          source = object;
	          object = this;
	        }
	      }
	      if (!methodNames) {
	        methodNames = baseFunctions(source, keys(source));
	      }
	      var chain = true,
	          index = -1,
	          isFunc = isFunction(object),
	          length = methodNames.length;
	
	      if (options === false) {
	        chain = false;
	      } else if (isObject(options) && 'chain' in options) {
	        chain = options.chain;
	      }
	      while (++index < length) {
	        var methodName = methodNames[index],
	            func = source[methodName];
	
	        object[methodName] = func;
	        if (isFunc) {
	          object.prototype[methodName] = (function(func) {
	            return function() {
	              var chainAll = this.__chain__;
	              if (chain || chainAll) {
	                var result = object(this.__wrapped__),
	                    actions = result.__actions__ = arrayCopy(this.__actions__);
	
	                actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
	                result.__chain__ = chainAll;
	                return result;
	              }
	              return func.apply(object, arrayPush([this.value()], arguments));
	            };
	          }(func));
	        }
	      }
	      return object;
	    }
	
	    /**
	     * Reverts the `_` variable to its previous value and returns a reference to
	     * the `lodash` function.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @returns {Function} Returns the `lodash` function.
	     * @example
	     *
	     * var lodash = _.noConflict();
	     */
	    function noConflict() {
	      root._ = oldDash;
	      return this;
	    }
	
	    /**
	     * A no-operation function that returns `undefined` regardless of the
	     * arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.noop(object) === undefined;
	     * // => true
	     */
	    function noop() {
	      // No operation performed.
	    }
	
	    /**
	     * Creates a function that returns the property value at `path` on a
	     * given object.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': 2 } } },
	     *   { 'a': { 'b': { 'c': 1 } } }
	     * ];
	     *
	     * _.map(objects, _.property('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    function property(path) {
	      return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	    }
	
	    /**
	     * The opposite of `_.property`; this method creates a function that returns
	     * the property value at a given path on `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = [0, 1, 2],
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
	     * // => [2, 0]
	     */
	    function propertyOf(object) {
	      return function(path) {
	        return baseGet(object, toPath(path), path + '');
	      };
	    }
	
	    /**
	     * Creates an array of numbers (positive and/or negative) progressing from
	     * `start` up to, but not including, `end`. If `end` is not specified it is
	     * set to `start` with `start` then set to `0`. If `end` is less than `start`
	     * a zero-length range is created unless a negative `step` is specified.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the new array of numbers.
	     * @example
	     *
	     * _.range(4);
	     * // => [0, 1, 2, 3]
	     *
	     * _.range(1, 5);
	     * // => [1, 2, 3, 4]
	     *
	     * _.range(0, 20, 5);
	     * // => [0, 5, 10, 15]
	     *
	     * _.range(0, -4, -1);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.range(0);
	     * // => []
	     */
	    function range(start, end, step) {
	      if (step && isIterateeCall(start, end, step)) {
	        end = step = undefined;
	      }
	      start = +start || 0;
	      step = step == null ? 1 : (+step || 0);
	
	      if (end == null) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      // Use `Array(length)` so engines like Chakra and V8 avoid slower modes.
	      // See https://youtu.be/XAqIpGU8ZZk#t=17m25s for more details.
	      var index = -1,
	          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	          result = Array(length);
	
	      while (++index < length) {
	        result[index] = start;
	        start += step;
	      }
	      return result;
	    }
	
	    /**
	     * Invokes the iteratee function `n` times, returning an array of the results
	     * of each invocation. The `iteratee` is bound to `thisArg` and invoked with
	     * one argument; (index).
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
	     * // => [3, 6, 4]
	     *
	     * _.times(3, function(n) {
	     *   mage.castSpell(n);
	     * });
	     * // => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`
	     *
	     * _.times(3, function(n) {
	     *   this.cast(n);
	     * }, mage);
	     * // => also invokes `mage.castSpell(n)` three times
	     */
	    function times(n, iteratee, thisArg) {
	      n = nativeFloor(n);
	
	      // Exit early to avoid a JSC JIT bug in Safari 8
	      // where `Array(0)` is treated as `Array(1)`.
	      if (n < 1 || !nativeIsFinite(n)) {
	        return [];
	      }
	      var index = -1,
	          result = Array(nativeMin(n, MAX_ARRAY_LENGTH));
	
	      iteratee = bindCallback(iteratee, thisArg, 1);
	      while (++index < n) {
	        if (index < MAX_ARRAY_LENGTH) {
	          result[index] = iteratee(index);
	        } else {
	          iteratee(index);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Generates a unique ID. If `prefix` is provided the ID is appended to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {string} [prefix] The value to prefix the ID with.
	     * @returns {string} Returns the unique ID.
	     * @example
	     *
	     * _.uniqueId('contact_');
	     * // => 'contact_104'
	     *
	     * _.uniqueId();
	     * // => '105'
	     */
	    function uniqueId(prefix) {
	      var id = ++idCounter;
	      return baseToString(prefix) + id;
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Adds two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} augend The first number to add.
	     * @param {number} addend The second number to add.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.add(6, 4);
	     * // => 10
	     */
	    function add(augend, addend) {
	      return (+augend || 0) + (+addend || 0);
	    }
	
	    /**
	     * Calculates `n` rounded up to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round up.
	     * @param {number} [precision=0] The precision to round up to.
	     * @returns {number} Returns the rounded up number.
	     * @example
	     *
	     * _.ceil(4.006);
	     * // => 5
	     *
	     * _.ceil(6.004, 2);
	     * // => 6.01
	     *
	     * _.ceil(6040, -2);
	     * // => 6100
	     */
	    var ceil = createRound('ceil');
	
	    /**
	     * Calculates `n` rounded down to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round down.
	     * @param {number} [precision=0] The precision to round down to.
	     * @returns {number} Returns the rounded down number.
	     * @example
	     *
	     * _.floor(4.006);
	     * // => 4
	     *
	     * _.floor(0.046, 2);
	     * // => 0.04
	     *
	     * _.floor(4060, -2);
	     * // => 4000
	     */
	    var floor = createRound('floor');
	
	    /**
	     * Gets the maximum value of `collection`. If `collection` is empty or falsey
	     * `-Infinity` is returned. If an iteratee function is provided it is invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * _.max([4, 2, 8, 6]);
	     * // => 8
	     *
	     * _.max([]);
	     * // => -Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.max(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.max(users, 'age');
	     * // => { 'user': 'fred', 'age': 40 }
	     */
	    var max = createExtremum(gt, NEGATIVE_INFINITY);
	
	    /**
	     * Gets the minimum value of `collection`. If `collection` is empty or falsey
	     * `Infinity` is returned. If an iteratee function is provided it is invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * _.min([4, 2, 8, 6]);
	     * // => 2
	     *
	     * _.min([]);
	     * // => Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.min(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.min(users, 'age');
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var min = createExtremum(lt, POSITIVE_INFINITY);
	
	    /**
	     * Calculates `n` rounded to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round.
	     * @param {number} [precision=0] The precision to round to.
	     * @returns {number} Returns the rounded number.
	     * @example
	     *
	     * _.round(4.006);
	     * // => 4
	     *
	     * _.round(4.006, 2);
	     * // => 4.01
	     *
	     * _.round(4060, -2);
	     * // => 4100
	     */
	    var round = createRound('round');
	
	    /**
	     * Gets the sum of the values in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.sum([4, 6]);
	     * // => 10
	     *
	     * _.sum({ 'a': 4, 'b': 6 });
	     * // => 10
	     *
	     * var objects = [
	     *   { 'n': 4 },
	     *   { 'n': 6 }
	     * ];
	     *
	     * _.sum(objects, function(object) {
	     *   return object.n;
	     * });
	     * // => 10
	     *
	     * // using the `_.property` callback shorthand
	     * _.sum(objects, 'n');
	     * // => 10
	     */
	    function sum(collection, iteratee, thisArg) {
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = undefined;
	      }
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return iteratee.length == 1
	        ? arraySum(isArray(collection) ? collection : toIterable(collection), iteratee)
	        : baseSum(collection, iteratee);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    // Ensure wrappers are instances of `baseLodash`.
	    lodash.prototype = baseLodash.prototype;
	
	    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	    LodashWrapper.prototype.constructor = LodashWrapper;
	
	    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	    LazyWrapper.prototype.constructor = LazyWrapper;
	
	    // Add functions to the `Map` cache.
	    MapCache.prototype['delete'] = mapDelete;
	    MapCache.prototype.get = mapGet;
	    MapCache.prototype.has = mapHas;
	    MapCache.prototype.set = mapSet;
	
	    // Add functions to the `Set` cache.
	    SetCache.prototype.push = cachePush;
	
	    // Assign cache to `_.memoize`.
	    memoize.Cache = MapCache;
	
	    // Add functions that return wrapped values when chaining.
	    lodash.after = after;
	    lodash.ary = ary;
	    lodash.assign = assign;
	    lodash.at = at;
	    lodash.before = before;
	    lodash.bind = bind;
	    lodash.bindAll = bindAll;
	    lodash.bindKey = bindKey;
	    lodash.callback = callback;
	    lodash.chain = chain;
	    lodash.chunk = chunk;
	    lodash.compact = compact;
	    lodash.constant = constant;
	    lodash.countBy = countBy;
	    lodash.create = create;
	    lodash.curry = curry;
	    lodash.curryRight = curryRight;
	    lodash.debounce = debounce;
	    lodash.defaults = defaults;
	    lodash.defaultsDeep = defaultsDeep;
	    lodash.defer = defer;
	    lodash.delay = delay;
	    lodash.difference = difference;
	    lodash.drop = drop;
	    lodash.dropRight = dropRight;
	    lodash.dropRightWhile = dropRightWhile;
	    lodash.dropWhile = dropWhile;
	    lodash.fill = fill;
	    lodash.filter = filter;
	    lodash.flatten = flatten;
	    lodash.flattenDeep = flattenDeep;
	    lodash.flow = flow;
	    lodash.flowRight = flowRight;
	    lodash.forEach = forEach;
	    lodash.forEachRight = forEachRight;
	    lodash.forIn = forIn;
	    lodash.forInRight = forInRight;
	    lodash.forOwn = forOwn;
	    lodash.forOwnRight = forOwnRight;
	    lodash.functions = functions;
	    lodash.groupBy = groupBy;
	    lodash.indexBy = indexBy;
	    lodash.initial = initial;
	    lodash.intersection = intersection;
	    lodash.invert = invert;
	    lodash.invoke = invoke;
	    lodash.keys = keys;
	    lodash.keysIn = keysIn;
	    lodash.map = map;
	    lodash.mapKeys = mapKeys;
	    lodash.mapValues = mapValues;
	    lodash.matches = matches;
	    lodash.matchesProperty = matchesProperty;
	    lodash.memoize = memoize;
	    lodash.merge = merge;
	    lodash.method = method;
	    lodash.methodOf = methodOf;
	    lodash.mixin = mixin;
	    lodash.modArgs = modArgs;
	    lodash.negate = negate;
	    lodash.omit = omit;
	    lodash.once = once;
	    lodash.pairs = pairs;
	    lodash.partial = partial;
	    lodash.partialRight = partialRight;
	    lodash.partition = partition;
	    lodash.pick = pick;
	    lodash.pluck = pluck;
	    lodash.property = property;
	    lodash.propertyOf = propertyOf;
	    lodash.pull = pull;
	    lodash.pullAt = pullAt;
	    lodash.range = range;
	    lodash.rearg = rearg;
	    lodash.reject = reject;
	    lodash.remove = remove;
	    lodash.rest = rest;
	    lodash.restParam = restParam;
	    lodash.set = set;
	    lodash.shuffle = shuffle;
	    lodash.slice = slice;
	    lodash.sortBy = sortBy;
	    lodash.sortByAll = sortByAll;
	    lodash.sortByOrder = sortByOrder;
	    lodash.spread = spread;
	    lodash.take = take;
	    lodash.takeRight = takeRight;
	    lodash.takeRightWhile = takeRightWhile;
	    lodash.takeWhile = takeWhile;
	    lodash.tap = tap;
	    lodash.throttle = throttle;
	    lodash.thru = thru;
	    lodash.times = times;
	    lodash.toArray = toArray;
	    lodash.toPlainObject = toPlainObject;
	    lodash.transform = transform;
	    lodash.union = union;
	    lodash.uniq = uniq;
	    lodash.unzip = unzip;
	    lodash.unzipWith = unzipWith;
	    lodash.values = values;
	    lodash.valuesIn = valuesIn;
	    lodash.where = where;
	    lodash.without = without;
	    lodash.wrap = wrap;
	    lodash.xor = xor;
	    lodash.zip = zip;
	    lodash.zipObject = zipObject;
	    lodash.zipWith = zipWith;
	
	    // Add aliases.
	    lodash.backflow = flowRight;
	    lodash.collect = map;
	    lodash.compose = flowRight;
	    lodash.each = forEach;
	    lodash.eachRight = forEachRight;
	    lodash.extend = assign;
	    lodash.iteratee = callback;
	    lodash.methods = functions;
	    lodash.object = zipObject;
	    lodash.select = filter;
	    lodash.tail = rest;
	    lodash.unique = uniq;
	
	    // Add functions to `lodash.prototype`.
	    mixin(lodash, lodash);
	
	    /*------------------------------------------------------------------------*/
	
	    // Add functions that return unwrapped values when chaining.
	    lodash.add = add;
	    lodash.attempt = attempt;
	    lodash.camelCase = camelCase;
	    lodash.capitalize = capitalize;
	    lodash.ceil = ceil;
	    lodash.clone = clone;
	    lodash.cloneDeep = cloneDeep;
	    lodash.deburr = deburr;
	    lodash.endsWith = endsWith;
	    lodash.escape = escape;
	    lodash.escapeRegExp = escapeRegExp;
	    lodash.every = every;
	    lodash.find = find;
	    lodash.findIndex = findIndex;
	    lodash.findKey = findKey;
	    lodash.findLast = findLast;
	    lodash.findLastIndex = findLastIndex;
	    lodash.findLastKey = findLastKey;
	    lodash.findWhere = findWhere;
	    lodash.first = first;
	    lodash.floor = floor;
	    lodash.get = get;
	    lodash.gt = gt;
	    lodash.gte = gte;
	    lodash.has = has;
	    lodash.identity = identity;
	    lodash.includes = includes;
	    lodash.indexOf = indexOf;
	    lodash.inRange = inRange;
	    lodash.isArguments = isArguments;
	    lodash.isArray = isArray;
	    lodash.isBoolean = isBoolean;
	    lodash.isDate = isDate;
	    lodash.isElement = isElement;
	    lodash.isEmpty = isEmpty;
	    lodash.isEqual = isEqual;
	    lodash.isError = isError;
	    lodash.isFinite = isFinite;
	    lodash.isFunction = isFunction;
	    lodash.isMatch = isMatch;
	    lodash.isNaN = isNaN;
	    lodash.isNative = isNative;
	    lodash.isNull = isNull;
	    lodash.isNumber = isNumber;
	    lodash.isObject = isObject;
	    lodash.isPlainObject = isPlainObject;
	    lodash.isRegExp = isRegExp;
	    lodash.isString = isString;
	    lodash.isTypedArray = isTypedArray;
	    lodash.isUndefined = isUndefined;
	    lodash.kebabCase = kebabCase;
	    lodash.last = last;
	    lodash.lastIndexOf = lastIndexOf;
	    lodash.lt = lt;
	    lodash.lte = lte;
	    lodash.max = max;
	    lodash.min = min;
	    lodash.noConflict = noConflict;
	    lodash.noop = noop;
	    lodash.now = now;
	    lodash.pad = pad;
	    lodash.padLeft = padLeft;
	    lodash.padRight = padRight;
	    lodash.parseInt = parseInt;
	    lodash.random = random;
	    lodash.reduce = reduce;
	    lodash.reduceRight = reduceRight;
	    lodash.repeat = repeat;
	    lodash.result = result;
	    lodash.round = round;
	    lodash.runInContext = runInContext;
	    lodash.size = size;
	    lodash.snakeCase = snakeCase;
	    lodash.some = some;
	    lodash.sortedIndex = sortedIndex;
	    lodash.sortedLastIndex = sortedLastIndex;
	    lodash.startCase = startCase;
	    lodash.startsWith = startsWith;
	    lodash.sum = sum;
	    lodash.template = template;
	    lodash.trim = trim;
	    lodash.trimLeft = trimLeft;
	    lodash.trimRight = trimRight;
	    lodash.trunc = trunc;
	    lodash.unescape = unescape;
	    lodash.uniqueId = uniqueId;
	    lodash.words = words;
	
	    // Add aliases.
	    lodash.all = every;
	    lodash.any = some;
	    lodash.contains = includes;
	    lodash.eq = isEqual;
	    lodash.detect = find;
	    lodash.foldl = reduce;
	    lodash.foldr = reduceRight;
	    lodash.head = first;
	    lodash.include = includes;
	    lodash.inject = reduce;
	
	    mixin(lodash, (function() {
	      var source = {};
	      baseForOwn(lodash, function(func, methodName) {
	        if (!lodash.prototype[methodName]) {
	          source[methodName] = func;
	        }
	      });
	      return source;
	    }()), false);
	
	    /*------------------------------------------------------------------------*/
	
	    // Add functions capable of returning wrapped and unwrapped values when chaining.
	    lodash.sample = sample;
	
	    lodash.prototype.sample = function(n) {
	      if (!this.__chain__ && n == null) {
	        return sample(this.value());
	      }
	      return this.thru(function(value) {
	        return sample(value, n);
	      });
	    };
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * The semantic version number.
	     *
	     * @static
	     * @memberOf _
	     * @type string
	     */
	    lodash.VERSION = VERSION;
	
	    // Assign default placeholders.
	    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
	      lodash[methodName].placeholder = lodash;
	    });
	
	    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
	    arrayEach(['drop', 'take'], function(methodName, index) {
	      LazyWrapper.prototype[methodName] = function(n) {
	        var filtered = this.__filtered__;
	        if (filtered && !index) {
	          return new LazyWrapper(this);
	        }
	        n = n == null ? 1 : nativeMax(nativeFloor(n) || 0, 0);
	
	        var result = this.clone();
	        if (filtered) {
	          result.__takeCount__ = nativeMin(result.__takeCount__, n);
	        } else {
	          result.__views__.push({ 'size': n, 'type': methodName + (result.__dir__ < 0 ? 'Right' : '') });
	        }
	        return result;
	      };
	
	      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
	        return this.reverse()[methodName](n).reverse();
	      };
	    });
	
	    // Add `LazyWrapper` methods that accept an `iteratee` value.
	    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
	      var type = index + 1,
	          isFilter = type != LAZY_MAP_FLAG;
	
	      LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
	        var result = this.clone();
	        result.__iteratees__.push({ 'iteratee': getCallback(iteratee, thisArg, 1), 'type': type });
	        result.__filtered__ = result.__filtered__ || isFilter;
	        return result;
	      };
	    });
	
	    // Add `LazyWrapper` methods for `_.first` and `_.last`.
	    arrayEach(['first', 'last'], function(methodName, index) {
	      var takeName = 'take' + (index ? 'Right' : '');
	
	      LazyWrapper.prototype[methodName] = function() {
	        return this[takeName](1).value()[0];
	      };
	    });
	
	    // Add `LazyWrapper` methods for `_.initial` and `_.rest`.
	    arrayEach(['initial', 'rest'], function(methodName, index) {
	      var dropName = 'drop' + (index ? '' : 'Right');
	
	      LazyWrapper.prototype[methodName] = function() {
	        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
	      };
	    });
	
	    // Add `LazyWrapper` methods for `_.pluck` and `_.where`.
	    arrayEach(['pluck', 'where'], function(methodName, index) {
	      var operationName = index ? 'filter' : 'map',
	          createCallback = index ? baseMatches : property;
	
	      LazyWrapper.prototype[methodName] = function(value) {
	        return this[operationName](createCallback(value));
	      };
	    });
	
	    LazyWrapper.prototype.compact = function() {
	      return this.filter(identity);
	    };
	
	    LazyWrapper.prototype.reject = function(predicate, thisArg) {
	      predicate = getCallback(predicate, thisArg, 1);
	      return this.filter(function(value) {
	        return !predicate(value);
	      });
	    };
	
	    LazyWrapper.prototype.slice = function(start, end) {
	      start = start == null ? 0 : (+start || 0);
	
	      var result = this;
	      if (result.__filtered__ && (start > 0 || end < 0)) {
	        return new LazyWrapper(result);
	      }
	      if (start < 0) {
	        result = result.takeRight(-start);
	      } else if (start) {
	        result = result.drop(start);
	      }
	      if (end !== undefined) {
	        end = (+end || 0);
	        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
	      }
	      return result;
	    };
	
	    LazyWrapper.prototype.takeRightWhile = function(predicate, thisArg) {
	      return this.reverse().takeWhile(predicate, thisArg).reverse();
	    };
	
	    LazyWrapper.prototype.toArray = function() {
	      return this.take(POSITIVE_INFINITY);
	    };
	
	    // Add `LazyWrapper` methods to `lodash.prototype`.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
	          retUnwrapped = /^(?:first|last)$/.test(methodName),
	          lodashFunc = lodash[retUnwrapped ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName];
	
	      if (!lodashFunc) {
	        return;
	      }
	      lodash.prototype[methodName] = function() {
	        var args = retUnwrapped ? [1] : arguments,
	            chainAll = this.__chain__,
	            value = this.__wrapped__,
	            isHybrid = !!this.__actions__.length,
	            isLazy = value instanceof LazyWrapper,
	            iteratee = args[0],
	            useLazy = isLazy || isArray(value);
	
	        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
	          // Avoid lazy use if the iteratee has a "length" value other than `1`.
	          isLazy = useLazy = false;
	        }
	        var interceptor = function(value) {
	          return (retUnwrapped && chainAll)
	            ? lodashFunc(value, 1)[0]
	            : lodashFunc.apply(undefined, arrayPush([value], args));
	        };
	
	        var action = { 'func': thru, 'args': [interceptor], 'thisArg': undefined },
	            onlyLazy = isLazy && !isHybrid;
	
	        if (retUnwrapped && !chainAll) {
	          if (onlyLazy) {
	            value = value.clone();
	            value.__actions__.push(action);
	            return func.call(value);
	          }
	          return lodashFunc.call(undefined, this.value())[0];
	        }
	        if (!retUnwrapped && useLazy) {
	          value = onlyLazy ? value : new LazyWrapper(this);
	          var result = func.apply(value, args);
	          result.__actions__.push(action);
	          return new LodashWrapper(result, chainAll);
	        }
	        return this.thru(interceptor);
	      };
	    });
	
	    // Add `Array` and `String` methods to `lodash.prototype`.
	    arrayEach(['join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function(methodName) {
	      var func = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
	          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
	          retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);
	
	      lodash.prototype[methodName] = function() {
	        var args = arguments;
	        if (retUnwrapped && !this.__chain__) {
	          return func.apply(this.value(), args);
	        }
	        return this[chainName](function(value) {
	          return func.apply(value, args);
	        });
	      };
	    });
	
	    // Map minified function names to their real names.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var lodashFunc = lodash[methodName];
	      if (lodashFunc) {
	        var key = lodashFunc.name,
	            names = realNames[key] || (realNames[key] = []);
	
	        names.push({ 'name': methodName, 'func': lodashFunc });
	      }
	    });
	
	    realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{ 'name': 'wrapper', 'func': undefined }];
	
	    // Add functions to the lazy wrapper.
	    LazyWrapper.prototype.clone = lazyClone;
	    LazyWrapper.prototype.reverse = lazyReverse;
	    LazyWrapper.prototype.value = lazyValue;
	
	    // Add chaining functions to the `lodash` wrapper.
	    lodash.prototype.chain = wrapperChain;
	    lodash.prototype.commit = wrapperCommit;
	    lodash.prototype.concat = wrapperConcat;
	    lodash.prototype.plant = wrapperPlant;
	    lodash.prototype.reverse = wrapperReverse;
	    lodash.prototype.toString = wrapperToString;
	    lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
	
	    // Add function aliases to the `lodash` wrapper.
	    lodash.prototype.collect = lodash.prototype.map;
	    lodash.prototype.head = lodash.prototype.first;
	    lodash.prototype.select = lodash.prototype.filter;
	    lodash.prototype.tail = lodash.prototype.rest;
	
	    return lodash;
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  // Export lodash.
	  var _ = runInContext();
	
	  // Some AMD build optimizers like r.js check for condition patterns like the following:
	  if (true) {
	    // Expose lodash to the global object when an AMD loader is present to avoid
	    // errors in cases where lodash is loaded by a script tag and not intended
	    // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
	    // more details.
	    root._ = _;
	
	    // Define as an anonymous module so, through path mapping, it can be
	    // referenced as the "underscore" module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
	  else if (freeExports && freeModule) {
	    // Export for Node.js or RingoJS.
	    if (moduleExports) {
	      (freeModule.exports = _)._ = _;
	    }
	    // Export for Rhino with CommonJS support.
	    else {
	      freeExports._ = _;
	    }
	  }
	  else {
	    // Export for a browser or Rhino.
	    root._ = _;
	  }
	}.call(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(171)(module), (function() { return this; }())))

/***/ },
/* 268 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(274),
	    baseMatchesProperty = __webpack_require__(275),
	    bindCallback = __webpack_require__(124),
	    identity = __webpack_require__(132),
	    property = __webpack_require__(294);
	
	/**
	 * The base implementation of `_.callback` which supports specifying the
	 * number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function baseCallback(func, thisArg, argCount) {
	  var type = typeof func;
	  if (type == 'function') {
	    return thisArg === undefined
	      ? func
	      : bindCallback(func, thisArg, argCount);
	  }
	  if (func == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return baseMatches(func);
	  }
	  return thisArg === undefined
	    ? property(func)
	    : baseMatchesProperty(func, thisArg);
	}
	
	module.exports = baseCallback;


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(279);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(270),
	    keys = __webpack_require__(77);
	
	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var equalArrays = __webpack_require__(281),
	    equalByTag = __webpack_require__(282),
	    equalObjects = __webpack_require__(283),
	    isArray = __webpack_require__(36),
	    isTypedArray = __webpack_require__(290);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  if (!isLoose) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);
	
	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == object) {
	      return stackB[length] == other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);
	
	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
	
	  stackA.pop();
	  stackB.pop();
	
	  return result;
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(76),
	    toObject = __webpack_require__(28);
	
	/**
	 * The base implementation of `_.isMatch` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Array} matchData The propery names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = toObject(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(273),
	    getMatchData = __webpack_require__(285),
	    toObject = __webpack_require__(28);
	
	/**
	 * The base implementation of `_.matches` which does not clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    var key = matchData[0][0],
	        value = matchData[0][1];
	
	    return function(object) {
	      if (object == null) {
	        return false;
	      }
	      return object[key] === value && (value !== undefined || (key in toObject(object)));
	    };
	  }
	  return function(object) {
	    return baseIsMatch(object, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(122),
	    baseIsEqual = __webpack_require__(76),
	    baseSlice = __webpack_require__(277),
	    isArray = __webpack_require__(36),
	    isKey = __webpack_require__(128),
	    isStrictComparable = __webpack_require__(129),
	    last = __webpack_require__(266),
	    toObject = __webpack_require__(28),
	    toPath = __webpack_require__(130);
	
	/**
	 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to compare.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  var isArr = isArray(path),
	      isCommon = isKey(path) && isStrictComparable(srcValue),
	      pathKey = (path + '');
	
	  path = toPath(path);
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    var key = pathKey;
	    object = toObject(object);
	    if ((isArr || !isCommon) && !(key in object)) {
	      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	      if (object == null) {
	        return false;
	      }
	      key = last(path);
	      object = toObject(object);
	    }
	    return object[key] === srcValue
	      ? (srcValue !== undefined || (key in object))
	      : baseIsEqual(srcValue, object[key], undefined, true);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(122),
	    toPath = __webpack_require__(130);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  var pathKey = (path + '');
	  path = toPath(path);
	  return function(object) {
	    return baseGet(object, path, pathKey);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ },
/* 277 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	
	  start = start == null ? 0 : (+start || 0);
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = (end === undefined || end > length) ? length : (+end || 0);
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;
	
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	module.exports = baseSlice;


/***/ },
/* 278 */
/***/ function(module, exports) {

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  return value == null ? '' : (value + '');
	}
	
	module.exports = baseToString;


/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(28);
	
	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var baseCallback = __webpack_require__(269),
	    baseForOwn = __webpack_require__(271);
	
	/**
	 * Creates a function for `_.mapKeys` or `_.mapValues`.
	 *
	 * @private
	 * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
	 * @returns {Function} Returns the new map function.
	 */
	function createObjectMapper(isMapKeys) {
	  return function(object, iteratee, thisArg) {
	    var result = {};
	    iteratee = baseCallback(iteratee, thisArg, 3);
	
	    baseForOwn(object, function(value, key, object) {
	      var mapped = iteratee(value, key, object);
	      key = isMapKeys ? mapped : key;
	      value = isMapKeys ? value : mapped;
	      result[key] = value;
	    });
	    return result;
	  };
	}
	
	module.exports = createObjectMapper;


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(268);
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing arrays.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	    return false;
	  }
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index],
	        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
	
	    if (result !== undefined) {
	      if (result) {
	        continue;
	      }
	      return false;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isLoose) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	          })) {
	        return false;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalArrays;


/***/ },
/* 282 */
/***/ function(module, exports) {

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object)
	        ? other != +other
	        : object == +other;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(77);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isLoose) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  var skipCtor = isLoose;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key],
	        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;
	
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	      return false;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (!skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalObjects;


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(123);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(129),
	    pairs = __webpack_require__(293);
	
	/**
	 * Gets the propery names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = pairs(object),
	      length = result.length;
	
	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(131),
	    isArray = __webpack_require__(36),
	    isIndex = __webpack_require__(127),
	    isLength = __webpack_require__(46),
	    keysIn = __webpack_require__(291);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(76),
	    bindCallback = __webpack_require__(124);
	
	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent. If `customizer` is provided it's invoked to compare values.
	 * If `customizer` returns `undefined` comparisons are handled by the method
	 * instead. The `customizer` is bound to `thisArg` and invoked with up to
	 * three arguments: (value, other [, index|key]).
	 *
	 * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	 * numbers, `Object` objects, regexes, and strings. Objects are compared by
	 * their own, not inherited, enumerable properties. Functions and DOM nodes
	 * are **not** supported. Provide a customizer function to extend support
	 * for comparing other values.
	 *
	 * @static
	 * @memberOf _
	 * @alias eq
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize value comparisons.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * object == other;
	 * // => false
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * // using a customizer callback
	 * var array = ['hello', 'goodbye'];
	 * var other = ['hi', 'goodbye'];
	 *
	 * _.isEqual(array, other, function(value, other) {
	 *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
	 *     return true;
	 *   }
	 * });
	 * // => true
	 */
	function isEqual(value, other, customizer, thisArg) {
	  customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	  var result = customizer ? customizer(value, other) : undefined;
	  return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
	}
	
	module.exports = isEqual;


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(288),
	    isObjectLike = __webpack_require__(47);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(46),
	    isObjectLike = __webpack_require__(47);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}
	
	module.exports = isTypedArray;


/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(131),
	    isArray = __webpack_require__(36),
	    isIndex = __webpack_require__(127),
	    isLength = __webpack_require__(46),
	    isObject = __webpack_require__(23);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var createObjectMapper = __webpack_require__(280);
	
	/**
	 * Creates an object with the same keys as `object` and values generated by
	 * running each own enumerable property of `object` through `iteratee`. The
	 * iteratee function is bound to `thisArg` and invoked with three arguments:
	 * (value, key, object).
	 *
	 * If a property name is provided for `iteratee` the created `_.property`
	 * style callback returns the property value of the given element.
	 *
	 * If a value is also provided for `thisArg` the created `_.matchesProperty`
	 * style callback returns `true` for elements that have a matching property
	 * value, else `false`.
	 *
	 * If an object is provided for `iteratee` the created `_.matches` style
	 * callback returns `true` for elements that have the properties of the given
	 * object, else `false`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Object} Returns the new mapped object.
	 * @example
	 *
	 * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
	 *   return n * 3;
	 * });
	 * // => { 'a': 3, 'b': 6 }
	 *
	 * var users = {
	 *   'fred':    { 'user': 'fred',    'age': 40 },
	 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	 * };
	 *
	 * // using the `_.property` callback shorthand
	 * _.mapValues(users, 'age');
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 */
	var mapValues = createObjectMapper();
	
	module.exports = mapValues;


/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(77),
	    toObject = __webpack_require__(28);
	
	/**
	 * Creates a two dimensional array of the key-value pairs for `object`,
	 * e.g. `[[key1, value1], [key2, value2]]`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * _.pairs({ 'barney': 36, 'fred': 40 });
	 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	 */
	function pairs(object) {
	  object = toObject(object);
	
	  var index = -1,
	      props = keys(object),
	      length = props.length,
	      result = Array(length);
	
	  while (++index < length) {
	    var key = props[index];
	    result[index] = [key, object[key]];
	  }
	  return result;
	}
	
	module.exports = pairs;


/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(123),
	    basePropertyDeep = __webpack_require__(276),
	    isKey = __webpack_require__(128);
	
	/**
	 * Creates a function that returns the property value at `path` on a
	 * given object.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': { 'c': 2 } } },
	 *   { 'a': { 'b': { 'c': 1 } } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b.c'));
	 * // => [2, 1]
	 *
	 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ },
/* 295 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var EntitySchema = (function () {
	  function EntitySchema(key) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, EntitySchema);
	
	    if (!key || typeof key !== 'string') {
	      throw new Error('A string non-empty key is required');
	    }
	
	    this._key = key;
	
	    var idAttribute = options.idAttribute || 'id';
	    this._getId = typeof idAttribute === 'function' ? idAttribute : function (x) {
	      return x[idAttribute];
	    };
	  }
	
	  EntitySchema.prototype.getKey = function getKey() {
	    return this._key;
	  };
	
	  EntitySchema.prototype.getId = function getId(entity) {
	    return this._getId(entity);
	  };
	
	  EntitySchema.prototype.define = function define(nestedSchema) {
	    for (var key in nestedSchema) {
	      if (nestedSchema.hasOwnProperty(key)) {
	        this[key] = nestedSchema[key];
	      }
	    }
	  };
	
	  return EntitySchema;
	})();
	
	exports['default'] = EntitySchema;
	module.exports = exports['default'];

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _lodashLangIsObject = __webpack_require__(23);
	
	var _lodashLangIsObject2 = _interopRequireDefault(_lodashLangIsObject);
	
	var ArraySchema = (function () {
	  function ArraySchema(itemSchema) {
	    var _this = this;
	
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, ArraySchema);
	
	    if (!_lodashLangIsObject2['default'](itemSchema)) {
	      throw new Error('ArraySchema requires item schema to be an object.');
	    }
	
	    this._itemSchema = itemSchema;
	
	    if (options.schemaAttribute) {
	      (function () {
	        var schemaAttribute = options.schemaAttribute;
	        _this._getSchema = typeof schemaAttribute === 'function' ? schemaAttribute : function (x) {
	          return x[schemaAttribute];
	        };
	      })();
	    }
	  }
	
	  ArraySchema.prototype.getItemSchema = function getItemSchema() {
	    return this._itemSchema;
	  };
	
	  ArraySchema.prototype.isPolymorphicSchema = function isPolymorphicSchema() {
	    return !!this._getSchema;
	  };
	
	  ArraySchema.prototype.getSchemaKey = function getSchemaKey(item) {
	    return this._getSchema(item);
	  };
	
	  return ArraySchema;
	})();
	
	exports['default'] = ArraySchema;
	module.exports = exports['default'];

/***/ },
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */
/***/ function(module, exports) {

	
	/**
	 * Reduce `arr` with `fn`.
	 *
	 * @param {Array} arr
	 * @param {Function} fn
	 * @param {Mixed} initial
	 *
	 * TODO: combatible error handling?
	 */
	
	module.exports = function(arr, fn, initial){  
	  var idx = 0;
	  var len = arr.length;
	  var curr = arguments.length == 3
	    ? initial
	    : arr[idx++];
	
	  while (idx < len) {
	    curr = fn.call(null, curr, arr[idx], ++idx, arr);
	  }
	  
	  return curr;
	};

/***/ },
/* 378 */
/***/ function(module, exports) {

	'use strict';
	
	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;
	
	  return function (next) {
	    return function (action) {
	      return typeof action === 'function' ? action(dispatch, getState) : next(action);
	    };
	  };
	}
	
	module.exports = thunkMiddleware;

/***/ },
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	var common = __webpack_require__(385);
	
	var parse = common.parse;
	var serialize = common.serialize;
	
	module.exports = function(request) {
		request.parse['application/vnd.api+json'] = parse;
		request.serialize['application/vnd.api+json'] = serialize;
	};


/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(267);
	
	exports.parse = function(text) {
		var response = JSON.parse(text);
		if (!_.isUndefined(response.data))
			response.data = parseResourceData(response, response.data);
		return response;
	};
	
	exports.serialize = JSON.stringify;
	
	function parseResourceData(response, data) {
		if (!data) {
			return data;
		} else if (_.isArray(data)) {
			return _.map(data, _.partial(parseResourceDataObject, response));
		} else {
			return parseResourceDataObject(response, data);
		}
	}
	
	function parseResourceDataObject(response, data) {
		var result = _.clone(data);
		_.each(data.attributes, function(value, name) {
			Object.defineProperty(result, _.camelCase(name), { value: value });
		});
		_.each(data.relationships, function(value, name) {
			if (_.isArray(value.data)) {
				Object.defineProperty(result, _.camelCase(name), {
					get: _.memoize(function() {
						return _(value.data).map(function(related) {
							var resdata = _.find(response.included, 'id', related.id);
							if(resdata)
								return parseResourceDataObject(response, resdata);
						}).compact().value();
					})
				});
			} else if (value.data) {
				Object.defineProperty(result, _.camelCase(name), {
					get: _.memoize(function() {
						var resdata = _.find(response.included, 'id', value.data.id);
						return resdata ? parseResourceDataObject(response, resdata)
						               : null;
					})
				});
			}
		});
		return result;
	}


/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Emitter = __webpack_require__(236);
	var reduce = __webpack_require__(377);
	
	/**
	 * Root reference for iframes.
	 */
	
	var root;
	if (typeof window !== 'undefined') { // Browser window
	  root = window;
	} else if (typeof self !== 'undefined') { // Web Worker
	  root = self;
	} else { // Other environments
	  root = this;
	}
	
	/**
	 * Noop.
	 */
	
	function noop(){};
	
	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isHost(obj) {
	  var str = {}.toString.call(obj);
	
	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}
	
	/**
	 * Determine XHR.
	 */
	
	request.getXHR = function () {
	  if (root.XMLHttpRequest
	      && (!root.location || 'file:' != root.location.protocol
	          || !root.ActiveXObject)) {
	    return new XMLHttpRequest;
	  } else {
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	  }
	  return false;
	};
	
	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */
	
	var trim = ''.trim
	  ? function(s) { return s.trim(); }
	  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };
	
	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject(obj) {
	  return obj === Object(obj);
	}
	
	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */
	
	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    if (null != obj[key]) {
	      pushEncodedKeyValuePair(pairs, key, obj[key]);
	        }
	      }
	  return pairs.join('&');
	}
	
	/**
	 * Helps 'serialize' with serializing arrays.
	 * Mutates the pairs array.
	 *
	 * @param {Array} pairs
	 * @param {String} key
	 * @param {Mixed} val
	 */
	
	function pushEncodedKeyValuePair(pairs, key, val) {
	  if (Array.isArray(val)) {
	    return val.forEach(function(v) {
	      pushEncodedKeyValuePair(pairs, key, v);
	    });
	  }
	  pairs.push(encodeURIComponent(key)
	    + '=' + encodeURIComponent(val));
	}
	
	/**
	 * Expose serialization method.
	 */
	
	 request.serializeObject = serialize;
	
	 /**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */
	
	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var parts;
	  var pair;
	
	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    parts = pair.split('=');
	    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
	  }
	
	  return obj;
	}
	
	/**
	 * Expose parser.
	 */
	
	request.parseString = parseString;
	
	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */
	
	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};
	
	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */
	
	 request.serialize = {
	   'application/x-www-form-urlencoded': serialize,
	   'application/json': JSON.stringify
	 };
	
	 /**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */
	
	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};
	
	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;
	
	  lines.pop(); // trailing CRLF
	
	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }
	
	  return fields;
	}
	
	/**
	 * Check if `mime` is json or has +json structured syntax suffix.
	 *
	 * @param {String} mime
	 * @return {Boolean}
	 * @api private
	 */
	
	function isJSON(mime) {
	  return /[\/+]json\b/.test(mime);
	}
	
	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */
	
	function type(str){
	  return str.split(/ *; */).shift();
	};
	
	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function params(str){
	  return reduce(str.split(/ *; */), function(obj, str){
	    var parts = str.split(/ *= */)
	      , key = parts.shift()
	      , val = parts.shift();
	
	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};
	
	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */
	
	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
	     ? this.xhr.responseText
	     : null;
	  this.statusText = this.req.xhr.statusText;
	  this.setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this.setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD'
	    ? this.parseBody(this.text ? this.text : this.xhr.response)
	    : null;
	}
	
	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */
	
	Response.prototype.get = function(field){
	  return this.header[field.toLowerCase()];
	};
	
	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */
	
	Response.prototype.setHeaderProperties = function(header){
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);
	
	  // params
	  var obj = params(ct);
	  for (var key in obj) this[key] = obj[key];
	};
	
	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */
	
	Response.prototype.parseBody = function(str){
	  var parse = request.parse[this.type];
	  return parse && str && (str.length || str instanceof Object)
	    ? parse(str)
	    : null;
	};
	
	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */
	
	Response.prototype.setStatusProperties = function(status){
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }
	
	  var type = status / 100 | 0;
	
	  // status / class
	  this.status = this.statusCode = status;
	  this.statusType = type;
	
	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = (4 == type || 5 == type)
	    ? this.toError()
	    : false;
	
	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};
	
	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */
	
	Response.prototype.toError = function(){
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;
	
	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;
	
	  return err;
	};
	
	/**
	 * Expose `Response`.
	 */
	
	request.Response = Response;
	
	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */
	
	function Request(method, url) {
	  var self = this;
	  Emitter.call(this);
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {};
	  this._header = {};
	  this.on('end', function(){
	    var err = null;
	    var res = null;
	
	    try {
	      res = new Response(self);
	    } catch(e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      // issue #675: return the raw response if the response parsing fails
	      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
	      return self.callback(err);
	    }
	
	    self.emit('response', res);
	
	    if (err) {
	      return self.callback(err, res);
	    }
	
	    if (res.status >= 200 && res.status < 300) {
	      return self.callback(err, res);
	    }
	
	    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	    new_err.original = err;
	    new_err.response = res;
	    new_err.status = res.status;
	
	    self.callback(new_err, res);
	  });
	}
	
	/**
	 * Mixin `Emitter`.
	 */
	
	Emitter(Request.prototype);
	
	/**
	 * Allow for extension
	 */
	
	Request.prototype.use = function(fn) {
	  fn(this);
	  return this;
	}
	
	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.timeout = function(ms){
	  this._timeout = ms;
	  return this;
	};
	
	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.clearTimeout = function(){
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};
	
	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */
	
	Request.prototype.abort = function(){
	  if (this.aborted) return;
	  this.aborted = true;
	  this.xhr.abort();
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};
	
	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.set = function(field, val){
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};
	
	/**
	 * Remove header `field`.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.unset = function(field){
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};
	
	/**
	 * Get case-insensitive header `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 */
	
	Request.prototype.getHeader = function(field){
	  return this._header[field.toLowerCase()];
	};
	
	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.type = function(type){
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Force given parser
	 *
	 * Sets the body parser no matter type.
	 *
	 * @param {Function}
	 * @api public
	 */
	
	Request.prototype.parse = function(fn){
	  this._parser = fn;
	  return this;
	};
	
	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.accept = function(type){
	  this.set('Accept', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.auth = function(user, pass){
	  var str = btoa(user + ':' + pass);
	  this.set('Authorization', 'Basic ' + str);
	  return this;
	};
	
	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/
	
	Request.prototype.query = function(val){
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};
	
	/**
	 * Write the field `name` and `val` for "multipart/form-data"
	 * request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} name
	 * @param {String|Blob|File} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.field = function(name, val){
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(name, val);
	  return this;
	};
	
	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.attach = function(field, file, filename){
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(field, file, filename);
	  return this;
	};
	
	/**
	 * Send `data`, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // querystring
	 *       request.get('/search')
	 *         .end(callback)
	 *
	 *       // multiple data "writes"
	 *       request.get('/search')
	 *         .send({ search: 'query' })
	 *         .send({ range: '1..5' })
	 *         .send({ order: 'desc' })
	 *         .end(callback)
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"}')
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	  *      request.post('/user')
	  *        .send('name=tobi')
	  *        .send('species=ferret')
	  *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.send = function(data){
	  var obj = isObject(data);
	  var type = this.getHeader('Content-Type');
	
	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    if (!type) this.type('form');
	    type = this.getHeader('Content-Type');
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data
	        ? this._data + '&' + data
	        : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }
	
	  if (!obj || isHost(data)) return this;
	  if (!type) this.type('json');
	  return this;
	};
	
	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */
	
	Request.prototype.callback = function(err, res){
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};
	
	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */
	
	Request.prototype.crossDomainError = function(){
	  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
	  err.crossDomain = true;
	
	  err.status = this.status;
	  err.method = this.method;
	  err.url = this.url;
	
	  this.callback(err);
	};
	
	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */
	
	Request.prototype.timeoutError = function(){
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};
	
	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */
	
	Request.prototype.withCredentials = function(){
	  this._withCredentials = true;
	  return this;
	};
	
	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.end = function(fn){
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var query = this._query.join('&');
	  var timeout = this._timeout;
	  var data = this._formData || this._data;
	
	  // store callback
	  this._callback = fn || noop;
	
	  // state change
	  xhr.onreadystatechange = function(){
	    if (4 != xhr.readyState) return;
	
	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try { status = xhr.status } catch(e) { status = 0; }
	
	    if (0 == status) {
	      if (self.timedout) return self.timeoutError();
	      if (self.aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };
	
	  // progress
	  var handleProgress = function(e){
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    xhr.onprogress = handleProgress;
	  }
	  try {
	    if (xhr.upload && this.hasListeners('progress')) {
	      xhr.upload.onprogress = handleProgress;
	    }
	  } catch(e) {
	    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	    // Reported here:
	    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	  }
	
	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function(){
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }
	
	  // querystring
	  if (query) {
	    query = request.serializeObject(query);
	    this.url += ~this.url.indexOf('?')
	      ? '&' + query
	      : '?' + query;
	  }
	
	  // initiate request
	  xhr.open(this.method, this.url, true);
	
	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;
	
	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
	    // serialize stuff
	    var contentType = this.getHeader('Content-Type');
	    var serialize = this._parser || request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
	    if (serialize) data = serialize(data);
	  }
	
	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }
	
	  // send stuff
	  this.emit('request', this);
	
	  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
	  // We need null here if data is undefined
	  xhr.send(typeof data !== 'undefined' ? data : null);
	  return this;
	};
	
	/**
	 * Faux promise support
	 *
	 * @param {Function} fulfill
	 * @param {Function} reject
	 * @return {Request}
	 */
	
	Request.prototype.then = function (fulfill, reject) {
	  return this.end(function(err, res) {
	    err ? reject(err) : fulfill(res);
	  });
	}
	
	/**
	 * Expose `Request`.
	 */
	
	request.Request = Request;
	
	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */
	
	function request(method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new Request('GET', method).end(url);
	  }
	
	  // url first
	  if (1 == arguments.length) {
	    return new Request('GET', method);
	  }
	
	  return new Request(method, url);
	}
	
	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.get = function(url, data, fn){
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.head = function(url, data, fn){
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	function del(url, fn){
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};
	
	request.del = del;
	request.delete = del;
	
	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.patch = function(url, data, fn){
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.post = function(url, data, fn){
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.put = function(url, data, fn){
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * Expose `request`.
	 */
	
	module.exports = request;


/***/ },
/* 387 */
/***/ function(module, exports) {

	/*eslint-env browser*/
	
	var clientOverlay = document.createElement('div');
	clientOverlay.style.display = 'none';
	clientOverlay.style.background = '#fdd';
	clientOverlay.style.color = '#000';
	clientOverlay.style.whiteSpace = 'pre';
	clientOverlay.style.fontFamily = 'monospace';
	clientOverlay.style.position = 'fixed';
	clientOverlay.style.zIndex = 9999;
	clientOverlay.style.padding = '10px';
	clientOverlay.style.left = 0;
	clientOverlay.style.right = 0;
	clientOverlay.style.top = 0;
	clientOverlay.style.bottom = 0;
	clientOverlay.style.overflow = 'auto';
	
	if (document.body) {
	  document.body.appendChild(clientOverlay);
	}
	
	exports.showProblems =
	function showProblems(lines) {
	  clientOverlay.innerHTML = '';
	  clientOverlay.style.display = 'block';
	  lines.forEach(function(msg) {
	    var div = document.createElement('div');
	    div.textContent = msg;
	    clientOverlay.appendChild(div);
	  });
	};
	
	exports.clear =
	function clear() {
	  clientOverlay.innerHTML = '';
	  clientOverlay.style.display = 'none';
	};
	


/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*eslint-env browser*/
	/*global __resourceQuery*/
	
	var options = {
	  path: "/__webpack_hmr",
	  timeout: 20 * 1000,
	  overlay: true,
	  reload: false,
	  log: true,
	  warn: true
	};
	if (false) {
	  var querystring = require('querystring');
	  var overrides = querystring.parse(__resourceQuery.slice(1));
	  if (overrides.path) options.path = overrides.path;
	  if (overrides.timeout) options.timeout = overrides.timeout;
	  if (overrides.overlay) options.overlay = overrides.overlay !== 'false';
	  if (overrides.reload) options.reload = overrides.reload !== 'false';
	  if (overrides.noInfo && overrides.noInfo !== 'false') {
	    options.log = false;
	  }
	  if (overrides.quiet && overrides.quiet !== 'false') {
	    options.log = false;
	    options.warn = false;
	  }
	}
	
	if (typeof window.EventSource === 'undefined') {
	  console.warn(
	    "webpack-hot-middleware's client requires EventSource to work. " +
	    "You should include a polyfill if you want to support this browser: " +
	    "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools"
	  );
	} else {
	  connect();
	}
	
	function connect() {
	  var source = new window.EventSource(options.path);
	  var lastActivity = new Date();
	
	  source.onopen = handleOnline;
	  source.onmessage = handleMessage;
	  source.onerror = handleDisconnect;
	
	  var timer = setInterval(function() {
	    if ((new Date() - lastActivity) > options.timeout) {
	      handleDisconnect();
	    }
	  }, options.timeout / 2);
	
	  function handleOnline() {
	    if (options.log) console.log("[HMR] connected");
	    lastActivity = new Date();
	  }
	
	  function handleMessage(event) {
	    lastActivity = new Date();
	    if (event.data == "\uD83D\uDC93") {
	      return;
	    }
	    try {
	      processMessage(JSON.parse(event.data));
	    } catch (ex) {
	      if (options.warn) {
	        console.warn("Invalid HMR message: " + event.data + "\n" + ex);
	      }
	    }
	  }
	
	  function handleDisconnect() {
	    clearInterval(timer);
	    source.close();
	    setTimeout(connect, options.timeout);
	  }
	
	}
	
	var strip = __webpack_require__(390);
	
	var overlay;
	if (options.overlay) {
	  overlay = __webpack_require__(387);
	}
	
	function problems(type, obj) {
	  if (options.warn) console.warn("[HMR] bundle has " + type + ":");
	  var list = [];
	  obj[type].forEach(function(msg) {
	    var clean = strip(msg);
	    if (options.warn) console.warn("[HMR] " + clean);
	    list.push(clean);
	  });
	  if (overlay && type !== 'warnings') overlay.showProblems(list);
	}
	
	function success() {
	  if (overlay) overlay.clear();
	}
	
	var processUpdate = __webpack_require__(391);
	
	var customHandler;
	function processMessage(obj) {
	  if (obj.action == "building") {
	    if (options.log) console.log("[HMR] bundle rebuilding");
	  } else if (obj.action == "built") {
	    if (options.log) console.log("[HMR] bundle rebuilt in " + obj.time + "ms");
	    if (obj.errors.length > 0) {
	      problems('errors', obj);
	    } else {
	      if (obj.warnings.length > 0) problems('warnings', obj);
	      success();
	
	      processUpdate(obj.hash, obj.modules, options);
	    }
	  } else if (customHandler) {
	    customHandler(obj);
	  }
	}
	
	if (module) {
	  module.exports = {
	    subscribe: function subscribe(handler) {
	      customHandler = handler;
	    }
	  };
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(171)(module)))

/***/ },
/* 389 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function () {
		return /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/g;
	};


/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(389)();
	
	module.exports = function (str) {
		return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
	};


/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Based heavily on https://github.com/webpack/webpack/blob/
	 *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
	 * Original copyright Tobias Koppers @sokra (MIT license)
	 */
	
	/* global window __webpack_hash__ */
	
	if (false) {
	  throw new Error("[HMR] Hot Module Replacement is disabled.");
	}
	
	var lastHash;
	var failureStatuses = { abort: 1, fail: 1 };
	var applyOptions = { ignoreUnaccepted: true };
	
	function upToDate(hash) {
	  if (hash) lastHash = hash;
	  return lastHash == __webpack_require__.h();
	}
	
	module.exports = function(hash, moduleMap, options) {
	  var reload = options.reload;
	  if (!upToDate(hash) && module.hot.status() == "idle") {
	    if (options.log) console.log("[HMR] Checking for updates on the server...");
	    check();
	  }
	
	  function check() {
	    module.hot.check(function(err, updatedModules) {
	      if (err) return handleError(err);
	
	      if(!updatedModules) {
	        if (options.warn) {
	          console.warn("[HMR] Cannot find update (Full reload needed)");
	          console.warn("[HMR] (Probably because of restarting the server)");
	        }
	        performReload();
	        return null;
	      }
	
	      module.hot.apply(applyOptions, function(applyErr, renewedModules) {
	        if (applyErr) return handleError(applyErr);
	
	        if (!upToDate()) check();
	
	        logUpdates(updatedModules, renewedModules);
	      });
	    });
	  }
	
	  function logUpdates(updatedModules, renewedModules) {
	    var unacceptedModules = updatedModules.filter(function(moduleId) {
	      return renewedModules && renewedModules.indexOf(moduleId) < 0;
	    });
	
	    if(unacceptedModules.length > 0) {
	      if (options.warn) {
	        console.warn(
	          "[HMR] The following modules couldn't be hot updated: " +
	          "(Full reload needed)"
	        );
	        unacceptedModules.forEach(function(moduleId) {
	          console.warn("[HMR]  - " + moduleMap[moduleId]);
	        });
	      }
	      performReload();
	      return;
	    }
	
	    if (options.log) {
	      if(!renewedModules || renewedModules.length === 0) {
	        console.log("[HMR] Nothing hot updated.");
	      } else {
	        console.log("[HMR] Updated modules:");
	        renewedModules.forEach(function(moduleId) {
	          console.log("[HMR]  - " + moduleMap[moduleId]);
	        });
	      }
	
	      if (upToDate()) {
	        console.log("[HMR] App is up to date.");
	      }
	    }
	  }
	
	  function handleError(err) {
	    if (module.hot.status() in failureStatuses) {
	      if (options.warn) {
	        console.warn("[HMR] Cannot check for update (Full reload needed)");
	        console.warn("[HMR] " + err.stack || err.message);
	      }
	      performReload();
	      return;
	    }
	    if (options.warn) {
	      console.warn("[HMR] Update check failed: " + err.stack || err.message);
	    }
	  }
	
	  function performReload() {
	    if (reload) {
	      if (options.warn) console.warn("[HMR] Reloading page");
	      window.location.reload();
	    }
	  }
	};


/***/ }
]);
//# sourceMappingURL=app-bundle.js.map