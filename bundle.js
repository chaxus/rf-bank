/*eslint-disable*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["rf-bank"] = {}));
})(this, (function (exports) { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var arrayLikeToArray = createCommonjsModule(function (module) {
	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	module.exports = _arrayLikeToArray;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(arrayLikeToArray);

	var arrayWithoutHoles = createCommonjsModule(function (module) {
	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) return arrayLikeToArray(arr);
	}

	module.exports = _arrayWithoutHoles;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(arrayWithoutHoles);

	var iterableToArray = createCommonjsModule(function (module) {
	function _iterableToArray(iter) {
	  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	}

	module.exports = _iterableToArray;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(iterableToArray);

	var unsupportedIterableToArray = createCommonjsModule(function (module) {
	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
	}

	module.exports = _unsupportedIterableToArray;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(unsupportedIterableToArray);

	var nonIterableSpread = createCommonjsModule(function (module) {
	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	module.exports = _nonIterableSpread;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	unwrapExports(nonIterableSpread);

	var toConsumableArray = createCommonjsModule(function (module) {
	function _toConsumableArray(arr) {
	  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
	}

	module.exports = _toConsumableArray;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _toConsumableArray = unwrapExports(toConsumableArray);

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var toString = {}.toString;

	var _cof = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = {
	  version: '2.6.12'
	};
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});
	_core.version;

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
	: Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var _shared = createCommonjsModule(function (module) {
	var SHARED = '__core-js_shared__';
	var store = _global[SHARED] || (_global[SHARED] = {});
	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: _core.version,
	  mode: 'global',
	  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
	});
	});

	var id = 0;
	var px = Math.random();

	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var _wks = createCommonjsModule(function (module) {
	var store = _shared('wks');



	var Symbol = _global.Symbol;

	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
	};

	$exports.store = store;
	});

	// 7.2.8 IsRegExp(argument)




	var MATCH = _wks('match');

	var _isRegexp = function (it) {
	  var isRegExp;
	  return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
	};

	var _anObject = function (it) {
	  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _aFunction = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)




	var SPECIES$3 = _wks('species');

	var _speciesConstructor = function (O, D) {
	  var C = _anObject(O).constructor;
	  var S;
	  return C === undefined || (S = _anObject(C)[SPECIES$3]) == undefined ? D : _aFunction(S);
	};

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor$1 = Math.floor;

	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor$1 : ceil)(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// true  -> String#at
	// false -> String#codePointAt


	var _stringAt = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(_defined(that));
	    var i = _toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

	var at = _stringAt(true); // `AdvanceStringIndex` abstract operation
	// https://tc39.github.io/ecma262/#sec-advancestringindex


	var _advanceStringIndex = function (S, index, unicode) {
	  return index + (unicode ? at(S, index).length : 1);
	};

	// 7.1.15 ToLength


	var min$2 = Math.min;

	var _toLength = function (it) {
	  return it > 0 ? min$2(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	// getting tag from 19.1.3.6 Object.prototype.toString()


	var TAG$1 = _wks('toStringTag'); // ES3 wrong here


	var ARG = _cof(function () {
	  return arguments;
	}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) {
	    /* empty */
	  }
	};

	var _classof = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T // builtinTag case
	  : ARG ? _cof(O) // ES3 arguments fallback
	  : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

	var builtinExec = RegExp.prototype.exec; // `RegExpExec` abstract operation
	// https://tc39.github.io/ecma262/#sec-regexpexec

	var _regexpExecAbstract = function (R, S) {
	  var exec = R.exec;

	  if (typeof exec === 'function') {
	    var result = exec.call(R, S);

	    if (typeof result !== 'object') {
	      throw new TypeError('RegExp exec method returned something other than an Object or null');
	    }

	    return result;
	  }

	  if (_classof(R) !== 'RegExp') {
	    throw new TypeError('RegExp#exec called on incompatible receiver');
	  }

	  return builtinExec.call(R, S);
	};

	var _flags = function () {
	  var that = _anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

	var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
	// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
	// which loads this file before patching the method.

	var nativeReplace = String.prototype.replace;
	var patchedExec = nativeExec;
	var LAST_INDEX$1 = 'lastIndex';

	var UPDATES_LAST_INDEX_WRONG = function () {
	  var re1 = /a/,
	      re2 = /b*/g;
	  nativeExec.call(re1, 'a');
	  nativeExec.call(re2, 'a');
	  return re1[LAST_INDEX$1] !== 0 || re2[LAST_INDEX$1] !== 0;
	}(); // nonparticipating capturing group, copied from es5-shim's String#split patch.


	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

	if (PATCH) {
	  patchedExec = function exec(str) {
	    var re = this;
	    var lastIndex, reCopy, match, i;

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + re.source + '$(?!\\s)', _flags.call(re));
	    }

	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX$1];
	    match = nativeExec.call(re, str);

	    if (UPDATES_LAST_INDEX_WRONG && match) {
	      re[LAST_INDEX$1] = re.global ? match.index + match[0].length : lastIndex;
	    }

	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
	      // eslint-disable-next-line no-loop-func
	      nativeReplace.call(match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    return match;
	  };
	}

	var _regexpExec = patchedExec;

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function () {
	  return Object.defineProperty({}, 'a', {
	    get: function () {
	      return 7;
	    }
	  }).a != 7;
	});

	var document$2 = _global.document; // typeof document.createElement is 'object' in old IE


	var is = _isObject(document$2) && _isObject(document$2.createElement);

	var _domCreate = function (it) {
	  return is ? document$2.createElement(it) : {};
	};

	var _ie8DomDefine = !_descriptors && !_fails(function () {
	  return Object.defineProperty(_domCreate('div'), 'a', {
	    get: function () {
	      return 7;
	    }
	  }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])
	 // instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string


	var _toPrimitive = function (it, S) {
	  if (!_isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP$2 = Object.defineProperty;
	var f$4 = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  _anObject(O);
	  P = _toPrimitive(P, true);
	  _anObject(Attributes);
	  if (_ie8DomDefine) try {
	    return dP$2(O, P, Attributes);
	  } catch (e) {
	    /* empty */
	  }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var _objectDp = {
		f: f$4
	};

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide = _descriptors ? function (object, key, value) {
	  return _objectDp.f(object, key, _propertyDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var hasOwnProperty = {}.hasOwnProperty;

	var _has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var _functionToString = _shared('native-function-to-string', Function.toString);

	var _redefine = createCommonjsModule(function (module) {
	var SRC = _uid('src');



	var TO_STRING = 'toString';
	var TPL = ('' + _functionToString).split(TO_STRING);

	_core.inspectSource = function (it) {
	  return _functionToString.call(it);
	};

	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

	  if (O === _global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    _hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    _hide(O, key, val);
	  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || _functionToString.call(this);
	});
	});

	// optional / simple context binding


	var _ctx = function (fn, that, length) {
	  _aFunction(fn);
	  if (that === undefined) return fn;

	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };

	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };

	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }

	  return function
	    /* ...args */
	  () {
	    return fn.apply(that, arguments);
	  };
	};

	var PROTOTYPE$1 = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE$1];
	  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
	  var expProto = exports[PROTOTYPE$1] || (exports[PROTOTYPE$1] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) source = name;

	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

	    out = (own ? target : source)[key]; // bind timers to global for call from export context

	    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out; // extend global

	    if (target) _redefine(target, key, out, type & $export.U); // export

	    if (exports[key] != out) _hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};

	_global.core = _core; // type bitmap

	$export.F = 1; // forced

	$export.G = 2; // global

	$export.S = 4; // static

	$export.P = 8; // proto

	$export.B = 16; // bind

	$export.W = 32; // wrap

	$export.U = 64; // safe

	$export.R = 128; // real proto method for `library`

	var _export = $export;

	_export({
	  target: 'RegExp',
	  proto: true,
	  forced: _regexpExec !== /./.exec
	}, {
	  exec: _regexpExec
	});

	var SPECIES$2 = _wks('species');
	var REPLACE_SUPPORTS_NAMED_GROUPS = !_fails(function () {
	  // #replace needs built-in support for named groups.
	  // #match works fine because it just return the exec results, even if it has
	  // a "grops" property.
	  var re = /./;

	  re.exec = function () {
	    var result = [];
	    result.groups = {
	      a: '7'
	    };
	    return result;
	  };

	  return ''.replace(re, '$<a>') !== '7';
	});

	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function () {
	  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	  var re = /(?:)/;
	  var originalExec = re.exec;

	  re.exec = function () {
	    return originalExec.apply(this, arguments);
	  };

	  var result = 'ab'.split(re);
	  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
	}();

	var _fixReWks = function (KEY, length, exec) {
	  var SYMBOL = _wks(KEY);
	  var DELEGATES_TO_SYMBOL = !_fails(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};

	    O[SYMBOL] = function () {
	      return 7;
	    };

	    return ''[KEY](O) != 7;
	  });
	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !_fails(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;

	    re.exec = function () {
	      execCalled = true;
	      return null;
	    };

	    if (KEY === 'split') {
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};

	      re.constructor[SPECIES$2] = function () {
	        return re;
	      };
	    }

	    re[SYMBOL]('');
	    return !execCalled;
	  }) : undefined;

	  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
	    var nativeRegExpMethod = /./[SYMBOL];
	    var fns = exec(_defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
	      if (regexp.exec === _regexpExec) {
	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	          // The native String method already delegates to @@method (this
	          // polyfilled function), leasing to infinite recursion.
	          // We avoid it by directly calling the native @@method method.
	          return {
	            done: true,
	            value: nativeRegExpMethod.call(regexp, str, arg2)
	          };
	        }

	        return {
	          done: true,
	          value: nativeMethod.call(str, regexp, arg2)
	        };
	      }

	      return {
	        done: false
	      };
	    });
	    var strfn = fns[0];
	    var rxfn = fns[1];
	    _redefine(String.prototype, KEY, strfn);
	    _hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	    ? function (string, arg) {
	      return rxfn.call(string, this, arg);
	    } // 21.2.5.6 RegExp.prototype[@@match](string)
	    // 21.2.5.9 RegExp.prototype[@@search](string)
	    : function (string) {
	      return rxfn.call(string, this);
	    });
	  }
	};

	var $min = Math.min;
	var $push = [].push;
	var $SPLIT = 'split';
	var LENGTH = 'length';
	var LAST_INDEX = 'lastIndex';
	var MAX_UINT32 = 0xffffffff; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

	var SUPPORTS_Y = !_fails(function () {
	  RegExp(MAX_UINT32, 'y');
	}); // @@split logic

	_fixReWks('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
	  var internalSplit;

	  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
	    // based on es5-shim implementation, need to rework it
	    internalSplit = function (separator, limit) {
	      var string = String(this);
	      if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

	      if (!_isRegexp(separator)) return $split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var match, lastIndex, lastLength;

	      while (match = _regexpExec.call(separatorCopy, string)) {
	        lastIndex = separatorCopy[LAST_INDEX];

	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if (output[LENGTH] >= splitLimit) break;
	        }

	        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }

	      if (lastLastIndex === string[LENGTH]) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));

	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    }; // Chakra, V8

	  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	    internalSplit = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
	    };
	  } else {
	    internalSplit = $split;
	  }

	  return [// `String.prototype.split` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.split
	  function split(separator, limit) {
	    var O = defined(this);
	    var splitter = separator == undefined ? undefined : separator[SPLIT];
	    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
	  }, // `RegExp.prototype[@@split]` method
	  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
	  //
	  // NOTE: This cannot be properly polyfilled in engines that don't support
	  // the 'y' flag.
	  function (regexp, limit) {
	    var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
	    if (res.done) return res.value;
	    var rx = _anObject(regexp);
	    var S = String(this);
	    var C = _speciesConstructor(rx, RegExp);
	    var unicodeMatching = rx.unicode;
	    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
	    // simulate the 'y' flag.

	    var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
	    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	    if (lim === 0) return [];
	    if (S.length === 0) return _regexpExecAbstract(splitter, S) === null ? [S] : [];
	    var p = 0;
	    var q = 0;
	    var A = [];

	    while (q < S.length) {
	      splitter.lastIndex = SUPPORTS_Y ? q : 0;
	      var z = _regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
	      var e;

	      if (z === null || (e = $min(_toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
	        q = _advanceStringIndex(S, q, unicodeMatching);
	      } else {
	        A.push(S.slice(p, q));
	        if (A.length === lim) return A;

	        for (var i = 1; i <= z.length - 1; i++) {
	          A.push(z[i]);
	          if (A.length === lim) return A;
	        }

	        q = p = e;
	      }
	    }

	    A.push(S.slice(p));
	    return A;
	  }];
	});

	var test = {};
	test[_wks('toStringTag')] = 'z';

	if (test + '' != '[object z]') {
	  _redefine(Object.prototype, 'toString', function toString() {
	    return '[object ' + _classof(this) + ']';
	  }, true);
	}

	// 21.2.5.3 get RegExp.prototype.flags()
	if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: _flags
	});

	var TO_STRING = 'toString';
	var $toString = /./[TO_STRING];

	var define = function (fn) {
	  _redefine(RegExp.prototype, TO_STRING, fn, true);
	}; // 21.2.5.14 RegExp.prototype.toString()


	if (_fails(function () {
	  return $toString.call({
	    source: 'a',
	    flags: 'b'
	  }) != '/a/b';
	})) {
	  define(function toString() {
	    var R = _anObject(this);
	    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
	  }); // FF44- RegExp#toString has a wrong name
	} else if ($toString.name != TO_STRING) {
	  define(function toString() {
	    return $toString.call(this);
	  });
	}

	// 7.1.13 ToObject(argument)


	var _toObject = function (it) {
	  return Object(_defined(it));
	};

	var max$1 = Math.max;
	var min$1 = Math.min;
	var floor = Math.floor;
	var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

	var maybeToString = function (it) {
	  return it === undefined ? it : String(it);
	}; // @@replace logic


	_fixReWks('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
	  return [// `String.prototype.replace` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
	  function replace(searchValue, replaceValue) {
	    var O = defined(this);
	    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
	  }, // `RegExp.prototype[@@replace]` method
	  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
	  function (regexp, replaceValue) {
	    var res = maybeCallNative($replace, regexp, this, replaceValue);
	    if (res.done) return res.value;
	    var rx = _anObject(regexp);
	    var S = String(this);
	    var functionalReplace = typeof replaceValue === 'function';
	    if (!functionalReplace) replaceValue = String(replaceValue);
	    var global = rx.global;

	    if (global) {
	      var fullUnicode = rx.unicode;
	      rx.lastIndex = 0;
	    }

	    var results = [];

	    while (true) {
	      var result = _regexpExecAbstract(rx, S);
	      if (result === null) break;
	      results.push(result);
	      if (!global) break;
	      var matchStr = String(result[0]);
	      if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
	    }

	    var accumulatedResult = '';
	    var nextSourcePosition = 0;

	    for (var i = 0; i < results.length; i++) {
	      result = results[i];
	      var matched = String(result[0]);
	      var position = max$1(min$1(_toInteger(result.index), S.length), 0);
	      var captures = []; // NOTE: This is equivalent to
	      //   captures = result.slice(1).map(maybeToString)
	      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

	      for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));

	      var namedCaptures = result.groups;

	      if (functionalReplace) {
	        var replacerArgs = [matched].concat(captures, position, S);
	        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
	        var replacement = String(replaceValue.apply(undefined, replacerArgs));
	      } else {
	        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
	      }

	      if (position >= nextSourcePosition) {
	        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
	        nextSourcePosition = position + matched.length;
	      }
	    }

	    return accumulatedResult + S.slice(nextSourcePosition);
	  }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

	  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
	    var tailPos = position + matched.length;
	    var m = captures.length;
	    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

	    if (namedCaptures !== undefined) {
	      namedCaptures = _toObject(namedCaptures);
	      symbols = SUBSTITUTION_SYMBOLS;
	    }

	    return $replace.call(replacement, symbols, function (match, ch) {
	      var capture;

	      switch (ch.charAt(0)) {
	        case '$':
	          return '$';

	        case '&':
	          return matched;

	        case '`':
	          return str.slice(0, position);

	        case "'":
	          return str.slice(tailPos);

	        case '<':
	          capture = namedCaptures[ch.slice(1, -1)];
	          break;

	        default:
	          // \d\d?
	          var n = +ch;
	          if (n === 0) return match;

	          if (n > m) {
	            var f = floor(n / 10);
	            if (f === 0) return match;
	            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
	            return match;
	          }

	          capture = captures[n - 1];
	      }

	      return capture === undefined ? '' : capture;
	    });
	  }
	});

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	 // eslint-disable-next-line no-prototype-builtins


	var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return _cof(it) == 'String' ? it.split('') : Object(it);
	};

	// 7.2.2 IsArray(argument)


	var _isArray = Array.isArray || function isArray(arg) {
	  return _cof(arg) == 'Array';
	};

	var SPECIES$1 = _wks('species');

	var _arraySpeciesConstructor = function (original) {
	  var C;

	  if (_isArray(original)) {
	    C = original.constructor; // cross-realm fallback

	    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;

	    if (_isObject(C)) {
	      C = C[SPECIES$1];
	      if (C === null) C = undefined;
	    }
	  }

	  return C === undefined ? Array : C;
	};

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


	var _arraySpeciesCreate = function (original, length) {
	  return new (_arraySpeciesConstructor(original))(length);
	};

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex










	var _arrayMethods = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || _arraySpeciesCreate;
	  return function ($this, callbackfn, that) {
	    var O = _toObject($this);
	    var self = _iobject(O);
	    var f = _ctx(callbackfn, that, 3);
	    var length = _toLength(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;

	    for (; length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);

	      if (TYPE) {
	        if (IS_MAP) result[index] = res; // map
	        else if (res) switch (TYPE) {
	          case 3:
	            return true;
	          // some

	          case 5:
	            return val;
	          // find

	          case 6:
	            return index;
	          // findIndex

	          case 2:
	            result.push(val);
	          // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }

	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

	var _strictMethod = function (method, arg) {
	  return !!method && _fails(function () {
	    // eslint-disable-next-line no-useless-call
	    arg ? method.call(null, function () {
	      /* empty */
	    }, 1) : method.call(null);
	  });
	};

	var $map = _arrayMethods(1);

	_export(_export.P + _export.F * !_strictMethod([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn
	  /* , thisArg */
	  ) {
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

	var _anInstance = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }

	  return it;
	};

	// call something on iterator step with safe closing on error


	var _iterCall = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(_anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) _anObject(ret.call(iterator));
	    throw e;
	  }
	};

	var _iterators = {};

	// check on default Array iterator


	var ITERATOR$4 = _wks('iterator');

	var ArrayProto$1 = Array.prototype;

	var _isArrayIter = function (it) {
	  return it !== undefined && (_iterators.Array === it || ArrayProto$1[ITERATOR$4] === it);
	};

	var ITERATOR$3 = _wks('iterator');



	var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$3] || it['@@iterator'] || _iterators[_classof(it)];
	};

	var _forOf = createCommonjsModule(function (module) {
	var BREAK = {};
	var RETURN = {};

	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () {
	    return iterable;
	  } : core_getIteratorMethod(iterable);
	  var f = _ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

	  if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
	    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = _iterCall(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};

	exports.BREAK = BREAK;
	exports.RETURN = RETURN;
	});

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	var _invoke = function (fn, args, that) {
	  var un = that === undefined;

	  switch (args.length) {
	    case 0:
	      return un ? fn() : fn.call(that);

	    case 1:
	      return un ? fn(args[0]) : fn.call(that, args[0]);

	    case 2:
	      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

	    case 3:
	      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

	    case 4:
	      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	  }

	  return fn.apply(that, args);
	};

	var document$1 = _global.document;

	var _html = document$1 && document$1.documentElement;

	var process$2 = _global.process;
	var setTask = _global.setImmediate;
	var clearTask = _global.clearImmediate;
	var MessageChannel = _global.MessageChannel;
	var Dispatch = _global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;

	var run = function () {
	  var id = +this; // eslint-disable-next-line no-prototype-builtins

	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};

	var listener = function (event) {
	  run.call(event.data);
	}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;

	    while (arguments.length > i) args.push(arguments[i++]);

	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      _invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };

	    defer(counter);
	    return counter;
	  };

	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  }; // Node.js 0.8-


	  if (_cof(process$2) == 'process') {
	    defer = function (id) {
	      process$2.nextTick(_ctx(run, id, 1));
	    }; // Sphere (JS game engine) Dispatch API

	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(_ctx(run, id, 1));
	    }; // Browsers with MessageChannel, includes WebWorkers

	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = _ctx(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
	    defer = function (id) {
	      _global.postMessage(id + '', '*');
	    };

	    _global.addEventListener('message', listener, false); // IE8-
	  } else if (ONREADYSTATECHANGE in _domCreate('script')) {
	    defer = function (id) {
	      _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
	        _html.removeChild(this);
	        run.call(id);
	      };
	    }; // Rest old browsers

	  } else {
	    defer = function (id) {
	      setTimeout(_ctx(run, id, 1), 0);
	    };
	  }
	}

	var _task = {
	  set: setTask,
	  clear: clearTask
	};

	var macrotask = _task.set;

	var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
	var process$1 = _global.process;
	var Promise$1 = _global.Promise;
	var isNode$1 = _cof(process$1) == 'process';

	var _microtask = function () {
	  var head, last, notify;

	  var flush = function () {
	    var parent, fn;
	    if (isNode$1 && (parent = process$1.domain)) parent.exit();

	    while (head) {
	      fn = head.fn;
	      head = head.next;

	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();else last = undefined;
	        throw e;
	      }
	    }

	    last = undefined;
	    if (parent) parent.enter();
	  }; // Node.js


	  if (isNode$1) {
	    notify = function () {
	      process$1.nextTick(flush);
	    }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

	  } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, {
	      characterData: true
	    }); // eslint-disable-line no-new

	    notify = function () {
	      node.data = toggle = !toggle;
	    }; // environments with maybe non-completely correct, but existent Promise

	  } else if (Promise$1 && Promise$1.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    var promise = Promise$1.resolve(undefined);

	    notify = function () {
	      promise.then(flush);
	    }; // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout

	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(_global, flush);
	    };
	  }

	  return function (fn) {
	    var task = {
	      fn: fn,
	      next: undefined
	    };
	    if (last) last.next = task;

	    if (!head) {
	      head = task;
	      notify();
	    }

	    last = task;
	  };
	};

	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = _aFunction(resolve);
	  this.reject = _aFunction(reject);
	}

	var f$3 = function (C) {
	  return new PromiseCapability(C);
	};

	var _newPromiseCapability = {
		f: f$3
	};

	var _perform = function (exec) {
	  try {
	    return {
	      e: false,
	      v: exec()
	    };
	  } catch (e) {
	    return {
	      e: true,
	      v: e
	    };
	  }
	};

	var navigator$1 = _global.navigator;
	var _userAgent = navigator$1 && navigator$1.userAgent || '';

	var _promiseResolve = function (C, x) {
	  _anObject(C);
	  if (_isObject(x) && x.constructor === C) return x;
	  var promiseCapability = _newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var _redefineAll = function (target, src, safe) {
	  for (var key in src) _redefine(target, key, src[key], safe);

	  return target;
	};

	var def = _objectDp.f;



	var TAG = _wks('toStringTag');

	var _setToStringTag = function (it, tag, stat) {
	  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
	    configurable: true,
	    value: tag
	  });
	};

	var SPECIES = _wks('species');

	var _setSpecies = function (KEY) {
	  var C = _global[KEY];
	  if (_descriptors && C && !C[SPECIES]) _objectDp.f(C, SPECIES, {
	    configurable: true,
	    get: function () {
	      return this;
	    }
	  });
	};

	var ITERATOR$2 = _wks('iterator');

	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR$2]();

	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  }; // eslint-disable-next-line no-throw-literal


	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {
	  /* empty */
	}

	var _iterDetect = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;

	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR$2]();

	    iter.next = function () {
	      return {
	        done: safe = true
	      };
	    };

	    arr[ITERATOR$2] = function () {
	      return iter;
	    };

	    exec(arr);
	  } catch (e) {
	    /* empty */
	  }

	  return safe;
	};

	var task = _task.set;

	var microtask = _microtask();









	var PROMISE = 'Promise';
	var TypeError$1 = _global.TypeError;
	var process = _global.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8 || '';
	var $Promise = _global[PROMISE];
	var isNode = _classof(process) == 'process';

	var empty = function () {
	  /* empty */
	};

	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;
	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);

	    var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
	      exec(empty, empty);
	    }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	    // we can't detect it synchronously, so just check versions
	    && v8.indexOf('6.6') !== 0 && _userAgent.indexOf('Chrome/66') === -1;
	  } catch (e) {
	    /* empty */
	  }
	}(); // helpers

	var isThenable = function (it) {
	  var then;
	  return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};

	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;

	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;

	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }

	          if (handler === true) result = value;else {
	            if (domain) domain.enter();
	            result = handler(value); // may throw

	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }

	          if (result === reaction.promise) {
	            reject(TypeError$1('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        if (domain && !exited) domain.exit();
	        reject(e);
	      }
	    };

	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach


	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};

	var onUnhandled = function (promise) {
	  task.call(_global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;

	    if (unhandled) {
	      result = _perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = _global.onunhandledrejection) {
	          handler({
	            promise: promise,
	            reason: value
	          });
	        } else if ((console = _global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    }

	    promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};

	var isUnhandled = function (promise) {
	  return promise._h !== 1 && (promise._a || promise._c).length === 0;
	};

	var onHandleUnhandled = function (promise) {
	  task.call(_global, function () {
	    var handler;

	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = _global.onrejectionhandled) {
	      handler({
	        promise: promise,
	        reason: promise._v
	      });
	    }
	  });
	};

	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap

	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};

	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap

	  try {
	    if (promise === value) throw TypeError$1("Promise can't be resolved itself");

	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = {
	          _w: promise,
	          _d: false
	        }; // wrap

	        try {
	          then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({
	      _w: promise,
	      _d: false
	    }, e); // wrap
	  }
	}; // constructor polyfill


	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    _anInstance(this, $Promise, PROMISE, '_h');
	    _aFunction(executor);
	    Internal.call(this);

	    try {
	      executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  }; // eslint-disable-next-line no-unused-vars


	  Internal = function Promise(executor) {
	    this._c = []; // <- awaiting reactions

	    this._a = undefined; // <- checked in isUnhandled reactions

	    this._s = 0; // <- state

	    this._d = false; // <- done

	    this._v = undefined; // <- value

	    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

	    this._n = false; // <- notify
	  };

	  Internal.prototype = _redefineAll($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;

	      this._c.push(reaction);

	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });

	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = _ctx($resolve, promise, 1);
	    this.reject = _ctx($reject, promise, 1);
	  };

	  _newPromiseCapability.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
	  };
	}

	_export(_export.G + _export.W + _export.F * !USE_NATIVE, {
	  Promise: $Promise
	});

	_setToStringTag($Promise, PROMISE);

	_setSpecies(PROMISE);

	Wrapper = _core[PROMISE]; // statics

	_export(_export.S + _export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	_export(_export.S + _export.F * (!USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return _promiseResolve(this, x);
	  }
	});
	_export(_export.S + _export.F * !(USE_NATIVE && _iterDetect(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = _perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      _forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = _perform(function () {
	      _forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});

	// to indexed object, toObject with fallback for non-array-like ES3 strings




	var _toIobject = function (it) {
	  return _iobject(_defined(it));
	};

	var max = Math.max;
	var min = Math.min;

	var _toAbsoluteIndex = function (index, length) {
	  index = _toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes






	var _arrayIncludes = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = _toIobject($this);
	    var length = _toLength(O.length);
	    var index = _toAbsoluteIndex(fromIndex, length);
	    var value; // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare

	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++]; // eslint-disable-next-line no-self-compare

	      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
	    } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    }
	    return !IS_INCLUDES && -1;
	  };
	};

	var shared = _shared('keys');



	var _sharedKey = function (key) {
	  return shared[key] || (shared[key] = _uid(key));
	};

	var arrayIndexOf = _arrayIncludes(false);

	var IE_PROTO$2 = _sharedKey('IE_PROTO');

	var _objectKeysInternal = function (object, names) {
	  var O = _toIobject(object);
	  var i = 0;
	  var result = [];
	  var key;

	  for (key in O) if (key != IE_PROTO$2) _has(O, key) && result.push(key); // Don't enum bug & hidden keys


	  while (names.length > i) if (_has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }

	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)




	var _objectKeys = Object.keys || function keys(O) {
	  return _objectKeysInternal(O, _enumBugKeys);
	};

	var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  _anObject(O);
	  var keys = _objectKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;

	  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);

	  return O;
	};

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])






	var IE_PROTO$1 = _sharedKey('IE_PROTO');

	var Empty = function () {
	  /* empty */
	};

	var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = _domCreate('iframe');

	  var i = _enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';

	  _html.appendChild(iframe);

	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);

	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;

	  while (i--) delete createDict[PROTOTYPE][_enumBugKeys[i]];

	  return createDict();
	};

	var _objectCreate = Object.create || function create(O, Properties) {
	  var result;

	  if (O !== null) {
	    Empty[PROTOTYPE] = _anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

	    result[IE_PROTO$1] = O;
	  } else result = createDict();

	  return Properties === undefined ? result : _objectDps(result, Properties);
	};

	var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

	_hide(IteratorPrototype, _wks('iterator'), function () {
	  return this;
	});

	var _iterCreate = function (Constructor, NAME, next) {
	  Constructor.prototype = _objectCreate(IteratorPrototype, {
	    next: _propertyDesc(1, next)
	  });
	  _setToStringTag(Constructor, NAME + ' Iterator');
	};

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)




	var IE_PROTO = _sharedKey('IE_PROTO');

	var ObjectProto = Object.prototype;

	var _objectGpo = Object.getPrototypeOf || function (O) {
	  O = _toObject(O);
	  if (_has(O, IE_PROTO)) return O[IE_PROTO];

	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }

	  return O instanceof Object ? ObjectProto : null;
	};

	var ITERATOR$1 = _wks('iterator');

	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () {
	  return this;
	};

	var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  _iterCreate(Constructor, NAME, next);

	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];

	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };

	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }

	    return function entries() {
	      return new Constructor(this, kind);
	    };
	  };

	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR$1] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype; // Fix native

	  if ($anyNative) {
	    IteratorPrototype = _objectGpo($anyNative.call(new Base()));

	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      _setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

	      if (typeof IteratorPrototype[ITERATOR$1] != 'function') _hide(IteratorPrototype, ITERATOR$1, returnThis);
	    }
	  } // fix Array#{values, @@iterator}.name in V8 / FF


	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;

	    $default = function values() {
	      return $native.call(this);
	    };
	  } // Define iterator


	  if ((BUGGY || VALUES_BUG || !proto[ITERATOR$1])) {
	    _hide(proto, ITERATOR$1, $default);
	  } // Plug for library


	  _iterators[NAME] = $default;
	  _iterators[TAG] = returnThis;

	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) _redefine(proto, key, methods[key]);
	    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }

	  return methods;
	};

	var $at = _stringAt(true); // 21.1.3.27 String.prototype[@@iterator]()


	_iterDefine(String, 'String', function (iterated) {
	  this._t = String(iterated); // target

	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return {
	    value: undefined,
	    done: true
	  };
	  point = $at(O, index);
	  this._i += point.length;
	  return {
	    value: point,
	    done: false
	  };
	});

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = _wks('unscopables');

	var ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});

	var _addToUnscopables = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

	var _iterStep = function (done, value) {
	  return {
	    value: value,
	    done: !!done
	  };
	};

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()


	var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
	  this._t = _toIobject(iterated); // target

	  this._i = 0; // next index

	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;

	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return _iterStep(1);
	  }

	  if (kind == 'keys') return _iterStep(0, index);
	  if (kind == 'values') return _iterStep(0, O[index]);
	  return _iterStep(0, [index, O[index]]);
	}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

	_iterators.Arguments = _iterators.Array;
	_addToUnscopables('keys');
	_addToUnscopables('values');
	_addToUnscopables('entries');

	var ITERATOR = _wks('iterator');
	var TO_STRING_TAG = _wks('toStringTag');
	var ArrayValues = _iterators.Array;
	var DOMIterables = {
	  CSSRuleList: true,
	  // TODO: Not spec compliant, should be false.
	  CSSStyleDeclaration: false,
	  CSSValueList: false,
	  ClientRectList: false,
	  DOMRectList: false,
	  DOMStringList: false,
	  DOMTokenList: true,
	  DataTransferItemList: false,
	  FileList: false,
	  HTMLAllCollection: false,
	  HTMLCollection: false,
	  HTMLFormElement: false,
	  HTMLSelectElement: false,
	  MediaList: true,
	  // TODO: Not spec compliant, should be false.
	  MimeTypeArray: false,
	  NamedNodeMap: false,
	  NodeList: true,
	  PaintRequestList: false,
	  Plugin: false,
	  PluginArray: false,
	  SVGLengthList: false,
	  SVGNumberList: false,
	  SVGPathSegList: false,
	  SVGPointList: false,
	  SVGStringList: false,
	  SVGTransformList: false,
	  SourceBufferList: false,
	  StyleSheetList: true,
	  // TODO: Not spec compliant, should be false.
	  TextTrackCueList: false,
	  TextTrackList: false,
	  TouchList: false
	};

	for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
	  var NAME$1 = collections[i];
	  var explicit = DOMIterables[NAME$1];
	  var Collection = _global[NAME$1];
	  var proto$1 = Collection && Collection.prototype;
	  var key$1;

	  if (proto$1) {
	    if (!proto$1[ITERATOR]) _hide(proto$1, ITERATOR, ArrayValues);
	    if (!proto$1[TO_STRING_TAG]) _hide(proto$1, TO_STRING_TAG, NAME$1);
	    _iterators[NAME$1] = ArrayValues;
	    if (explicit) for (key$1 in es6_array_iterator) if (!proto$1[key$1]) _redefine(proto$1, key$1, es6_array_iterator[key$1], true);
	  }
	}

	var dP$1 = _objectDp.f;

	var FProto = Function.prototype;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME = 'name'; // 19.2.4.2 name

	NAME in FProto || _descriptors && dP$1(FProto, NAME, {
	  configurable: true,
	  get: function () {
	    try {
	      return ('' + this).match(nameRE)[1];
	    } catch (e) {
	      return '';
	    }
	  }
	});

	// 20.1.2.4 Number.isNaN(number)


	_export(_export.S, 'Number', {
	  isNaN: function isNaN(number) {
	    // eslint-disable-next-line no-self-compare
	    return number != number;
	  }
	});

	var f$2 = {}.propertyIsEnumerable;

	var _objectPie = {
		f: f$2
	};

	var gOPD$1 = Object.getOwnPropertyDescriptor;
	var f$1 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
	  O = _toIobject(O);
	  P = _toPrimitive(P, true);
	  if (_ie8DomDefine) try {
	    return gOPD$1(O, P);
	  } catch (e) {
	    /* empty */
	  }
	  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
	};

	var _objectGopd = {
		f: f$1
	};

	// Works with __proto__ only. Old v8 can't work with null proto objects.

	/* eslint-disable no-proto */




	var check = function (O, proto) {
	  _anObject(O);
	  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};

	var _setProto = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	  function (test, buggy, set) {
	    try {
	      set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
	      set(test, []);
	      buggy = !(test instanceof Array);
	    } catch (e) {
	      buggy = true;
	    }

	    return function setPrototypeOf(O, proto) {
	      check(O, proto);
	      if (buggy) O.__proto__ = proto;else set(O, proto);
	      return O;
	    };
	  }({}, false) : undefined),
	  check: check
	};

	var setPrototypeOf = _setProto.set;

	var _inheritIfRequired = function (that, target, C) {
	  var S = target.constructor;
	  var P;

	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  }

	  return that;
	};

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)


	var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

	var f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return _objectKeysInternal(O, hiddenKeys);
	};

	var _objectGopn = {
		f: f
	};

	var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var space = '[' + _stringWs + ']';
	var non = '\u200b\u0085';
	var ltrim = RegExp('^' + space + space + '*');
	var rtrim = RegExp(space + space + '*$');

	var exporter = function (KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = _fails(function () {
	    return !!_stringWs[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  _export(_export.P + _export.F * FORCE, 'String', exp);
	}; // 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim


	var trim = exporter.trim = function (string, TYPE) {
	  string = String(_defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};

	var _stringTrim = exporter;

	var gOPN = _objectGopn.f;

	var gOPD = _objectGopd.f;

	var dP = _objectDp.f;

	var $trim = _stringTrim.trim;

	var NUMBER = 'Number';
	var $Number = _global[NUMBER];
	var Base = $Number;
	var proto = $Number.prototype; // Opera ~12 has broken Object#toString

	var BROKEN_COF = _cof(_objectCreate(proto)) == NUMBER;
	var TRIM = ('trim' in String.prototype); // 7.1.3 ToNumber(argument)

	var toNumber = function (argument) {
	  var it = _toPrimitive(argument, false);

	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0);
	    var third, radix, maxCode;

	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66:
	        case 98:
	          radix = 2;
	          maxCode = 49;
	          break;
	        // fast equal /^0b[01]+$/i

	        case 79:
	        case 111:
	          radix = 8;
	          maxCode = 55;
	          break;
	        // fast equal /^0o[0-7]+$/i

	        default:
	          return +it;
	      }

	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i); // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols

	        if (code < 48 || code > maxCode) return NaN;
	      }

	      return parseInt(digits, radix);
	    }
	  }

	  return +it;
	};

	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var that = this;
	    return that instanceof $Number // check on 1..constructor(foo) case
	    && (BROKEN_COF ? _fails(function () {
	      proto.valueOf.call(that);
	    }) : _cof(that) != NUMBER) ? _inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };

	  for (var keys = _descriptors ? gOPN(Base) : ( // ES3:
	  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):
	  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
	    if (_has(Base, key = keys[j]) && !_has($Number, key)) {
	      dP($Number, key, gOPD(Base, key));
	    }
	  }

	  $Number.prototype = proto;
	  proto.constructor = $Number;

	  _redefine(_global, NUMBER, $Number);
	}

	var classCallCheck = createCommonjsModule(function (module) {
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	module.exports = _classCallCheck;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _classCallCheck = unwrapExports(classCallCheck);

	var defineProperty = createCommonjsModule(function (module) {
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	module.exports = _defineProperty;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _defineProperty = unwrapExports(defineProperty);

	// can-promise has a crash in some versions of react native that dont have
	// standard global objects
	// https://github.com/soldair/node-qrcode/issues/157
	var canPromise = function () {
	  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then;
	};

	let toSJISFunction;
	const CODEWORDS_COUNT = [0, // Not used
	26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
	/**
	 * Returns the QR Code size for the specified version
	 *
	 * @param  {Number} version QR Code version
	 * @return {Number}         size of QR code
	 */

	var getSymbolSize$1 = function getSymbolSize(version) {
	  if (!version) throw new Error('"version" cannot be null or undefined');
	  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
	  return version * 4 + 17;
	};
	/**
	 * Returns the total number of codewords used to store data and EC information.
	 *
	 * @param  {Number} version QR Code version
	 * @return {Number}         Data length in bits
	 */


	var getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
	  return CODEWORDS_COUNT[version];
	};
	/**
	 * Encode data with Bose-Chaudhuri-Hocquenghem
	 *
	 * @param  {Number} data Value to encode
	 * @return {Number}      Encoded value
	 */


	var getBCHDigit = function (data) {
	  let digit = 0;

	  while (data !== 0) {
	    digit++;
	    data >>>= 1;
	  }

	  return digit;
	};

	var setToSJISFunction = function setToSJISFunction(f) {
	  if (typeof f !== 'function') {
	    throw new Error('"toSJISFunc" is not a valid function.');
	  }

	  toSJISFunction = f;
	};

	var isKanjiModeEnabled = function () {
	  return typeof toSJISFunction !== 'undefined';
	};

	var toSJIS = function toSJIS(kanji) {
	  return toSJISFunction(kanji);
	};

	var utils$1 = {
		getSymbolSize: getSymbolSize$1,
		getSymbolTotalCodewords: getSymbolTotalCodewords,
		getBCHDigit: getBCHDigit,
		setToSJISFunction: setToSJISFunction,
		isKanjiModeEnabled: isKanjiModeEnabled,
		toSJIS: toSJIS
	};

	var errorCorrectionLevel = createCommonjsModule(function (module, exports) {
	exports.L = {
	  bit: 1
	};
	exports.M = {
	  bit: 0
	};
	exports.Q = {
	  bit: 3
	};
	exports.H = {
	  bit: 2
	};

	function fromString(string) {
	  if (typeof string !== 'string') {
	    throw new Error('Param is not a string');
	  }

	  const lcStr = string.toLowerCase();

	  switch (lcStr) {
	    case 'l':
	    case 'low':
	      return exports.L;

	    case 'm':
	    case 'medium':
	      return exports.M;

	    case 'q':
	    case 'quartile':
	      return exports.Q;

	    case 'h':
	    case 'high':
	      return exports.H;

	    default:
	      throw new Error('Unknown EC Level: ' + string);
	  }
	}

	exports.isValid = function isValid(level) {
	  return level && typeof level.bit !== 'undefined' && level.bit >= 0 && level.bit < 4;
	};

	exports.from = function from(value, defaultValue) {
	  if (exports.isValid(value)) {
	    return value;
	  }

	  try {
	    return fromString(value);
	  } catch (e) {
	    return defaultValue;
	  }
	};
	});
	errorCorrectionLevel.L;
	errorCorrectionLevel.M;
	errorCorrectionLevel.Q;
	errorCorrectionLevel.H;
	errorCorrectionLevel.isValid;

	function BitBuffer() {
	  this.buffer = [];
	  this.length = 0;
	}

	BitBuffer.prototype = {
	  get: function (index) {
	    const bufIndex = Math.floor(index / 8);
	    return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
	  },
	  put: function (num, length) {
	    for (let i = 0; i < length; i++) {
	      this.putBit((num >>> length - i - 1 & 1) === 1);
	    }
	  },
	  getLengthInBits: function () {
	    return this.length;
	  },
	  putBit: function (bit) {
	    const bufIndex = Math.floor(this.length / 8);

	    if (this.buffer.length <= bufIndex) {
	      this.buffer.push(0);
	    }

	    if (bit) {
	      this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
	    }

	    this.length++;
	  }
	};
	var bitBuffer = BitBuffer;

	/**
	 * Helper class to handle QR Code symbol modules
	 *
	 * @param {Number} size Symbol size
	 */
	function BitMatrix(size) {
	  if (!size || size < 1) {
	    throw new Error('BitMatrix size must be defined and greater than 0');
	  }

	  this.size = size;
	  this.data = new Uint8Array(size * size);
	  this.reservedBit = new Uint8Array(size * size);
	}
	/**
	 * Set bit value at specified location
	 * If reserved flag is set, this bit will be ignored during masking process
	 *
	 * @param {Number}  row
	 * @param {Number}  col
	 * @param {Boolean} value
	 * @param {Boolean} reserved
	 */


	BitMatrix.prototype.set = function (row, col, value, reserved) {
	  const index = row * this.size + col;
	  this.data[index] = value;
	  if (reserved) this.reservedBit[index] = true;
	};
	/**
	 * Returns bit value at specified location
	 *
	 * @param  {Number}  row
	 * @param  {Number}  col
	 * @return {Boolean}
	 */


	BitMatrix.prototype.get = function (row, col) {
	  return this.data[row * this.size + col];
	};
	/**
	 * Applies xor operator at specified location
	 * (used during masking process)
	 *
	 * @param {Number}  row
	 * @param {Number}  col
	 * @param {Boolean} value
	 */


	BitMatrix.prototype.xor = function (row, col, value) {
	  this.data[row * this.size + col] ^= value;
	};
	/**
	 * Check if bit at specified location is reserved
	 *
	 * @param {Number}   row
	 * @param {Number}   col
	 * @return {Boolean}
	 */


	BitMatrix.prototype.isReserved = function (row, col) {
	  return this.reservedBit[row * this.size + col];
	};

	var bitMatrix = BitMatrix;

	var alignmentPattern = createCommonjsModule(function (module, exports) {
	/**
	 * Alignment pattern are fixed reference pattern in defined positions
	 * in a matrix symbology, which enables the decode software to re-synchronise
	 * the coordinate mapping of the image modules in the event of moderate amounts
	 * of distortion of the image.
	 *
	 * Alignment patterns are present only in QR Code symbols of version 2 or larger
	 * and their number depends on the symbol version.
	 */
	const getSymbolSize = utils$1.getSymbolSize;
	/**
	 * Calculate the row/column coordinates of the center module of each alignment pattern
	 * for the specified QR Code version.
	 *
	 * The alignment patterns are positioned symmetrically on either side of the diagonal
	 * running from the top left corner of the symbol to the bottom right corner.
	 *
	 * Since positions are simmetrical only half of the coordinates are returned.
	 * Each item of the array will represent in turn the x and y coordinate.
	 * @see {@link getPositions}
	 *
	 * @param  {Number} version QR Code version
	 * @return {Array}          Array of coordinate
	 */


	exports.getRowColCoords = function getRowColCoords(version) {
	  if (version === 1) return [];
	  const posCount = Math.floor(version / 7) + 2;
	  const size = getSymbolSize(version);
	  const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
	  const positions = [size - 7]; // Last coord is always (size - 7)

	  for (let i = 1; i < posCount - 1; i++) {
	    positions[i] = positions[i - 1] - intervals;
	  }

	  positions.push(6); // First coord is always 6

	  return positions.reverse();
	};
	/**
	 * Returns an array containing the positions of each alignment pattern.
	 * Each array's element represent the center point of the pattern as (x, y) coordinates
	 *
	 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
	 * and filtering out the items that overlaps with finder pattern
	 *
	 * @example
	 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
	 * The alignment patterns, therefore, are to be centered on (row, column)
	 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
	 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
	 * and are not therefore used for alignment patterns.
	 *
	 * let pos = getPositions(7)
	 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
	 *
	 * @param  {Number} version QR Code version
	 * @return {Array}          Array of coordinates
	 */


	exports.getPositions = function getPositions(version) {
	  const coords = [];
	  const pos = exports.getRowColCoords(version);
	  const posLength = pos.length;

	  for (let i = 0; i < posLength; i++) {
	    for (let j = 0; j < posLength; j++) {
	      // Skip if position is occupied by finder patterns
	      if (i === 0 && j === 0 || // top-left
	      i === 0 && j === posLength - 1 || // bottom-left
	      i === posLength - 1 && j === 0) {
	        // top-right
	        continue;
	      }

	      coords.push([pos[i], pos[j]]);
	    }
	  }

	  return coords;
	};
	});
	alignmentPattern.getRowColCoords;
	alignmentPattern.getPositions;

	const getSymbolSize = utils$1.getSymbolSize;

	const FINDER_PATTERN_SIZE = 7;
	/**
	 * Returns an array containing the positions of each finder pattern.
	 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
	 *
	 * @param  {Number} version QR Code version
	 * @return {Array}          Array of coordinates
	 */

	var getPositions = function getPositions(version) {
	  const size = getSymbolSize(version);
	  return [// top-left
	  [0, 0], // top-right
	  [size - FINDER_PATTERN_SIZE, 0], // bottom-left
	  [0, size - FINDER_PATTERN_SIZE]];
	};

	var finderPattern = {
		getPositions: getPositions
	};

	var maskPattern = createCommonjsModule(function (module, exports) {
	/**
	 * Data mask pattern reference
	 * @type {Object}
	 */
	exports.Patterns = {
	  PATTERN000: 0,
	  PATTERN001: 1,
	  PATTERN010: 2,
	  PATTERN011: 3,
	  PATTERN100: 4,
	  PATTERN101: 5,
	  PATTERN110: 6,
	  PATTERN111: 7
	};
	/**
	 * Weighted penalty scores for the undesirable features
	 * @type {Object}
	 */

	const PenaltyScores = {
	  N1: 3,
	  N2: 3,
	  N3: 40,
	  N4: 10
	};
	/**
	 * Check if mask pattern value is valid
	 *
	 * @param  {Number}  mask    Mask pattern
	 * @return {Boolean}         true if valid, false otherwise
	 */

	exports.isValid = function isValid(mask) {
	  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7;
	};
	/**
	 * Returns mask pattern from a value.
	 * If value is not valid, returns undefined
	 *
	 * @param  {Number|String} value        Mask pattern value
	 * @return {Number}                     Valid mask pattern or undefined
	 */


	exports.from = function from(value) {
	  return exports.isValid(value) ? parseInt(value, 10) : undefined;
	};
	/**
	* Find adjacent modules in row/column with the same color
	* and assign a penalty value.
	*
	* Points: N1 + i
	* i is the amount by which the number of adjacent modules of the same color exceeds 5
	*/


	exports.getPenaltyN1 = function getPenaltyN1(data) {
	  const size = data.size;
	  let points = 0;
	  let sameCountCol = 0;
	  let sameCountRow = 0;
	  let lastCol = null;
	  let lastRow = null;

	  for (let row = 0; row < size; row++) {
	    sameCountCol = sameCountRow = 0;
	    lastCol = lastRow = null;

	    for (let col = 0; col < size; col++) {
	      let module = data.get(row, col);

	      if (module === lastCol) {
	        sameCountCol++;
	      } else {
	        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
	        lastCol = module;
	        sameCountCol = 1;
	      }

	      module = data.get(col, row);

	      if (module === lastRow) {
	        sameCountRow++;
	      } else {
	        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
	        lastRow = module;
	        sameCountRow = 1;
	      }
	    }

	    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
	    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
	  }

	  return points;
	};
	/**
	 * Find 2x2 blocks with the same color and assign a penalty value
	 *
	 * Points: N2 * (m - 1) * (n - 1)
	 */


	exports.getPenaltyN2 = function getPenaltyN2(data) {
	  const size = data.size;
	  let points = 0;

	  for (let row = 0; row < size - 1; row++) {
	    for (let col = 0; col < size - 1; col++) {
	      const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
	      if (last === 4 || last === 0) points++;
	    }
	  }

	  return points * PenaltyScores.N2;
	};
	/**
	 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
	 * preceded or followed by light area 4 modules wide
	 *
	 * Points: N3 * number of pattern found
	 */


	exports.getPenaltyN3 = function getPenaltyN3(data) {
	  const size = data.size;
	  let points = 0;
	  let bitsCol = 0;
	  let bitsRow = 0;

	  for (let row = 0; row < size; row++) {
	    bitsCol = bitsRow = 0;

	    for (let col = 0; col < size; col++) {
	      bitsCol = bitsCol << 1 & 0x7FF | data.get(row, col);
	      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;
	      bitsRow = bitsRow << 1 & 0x7FF | data.get(col, row);
	      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
	    }
	  }

	  return points * PenaltyScores.N3;
	};
	/**
	 * Calculate proportion of dark modules in entire symbol
	 *
	 * Points: N4 * k
	 *
	 * k is the rating of the deviation of the proportion of dark modules
	 * in the symbol from 50% in steps of 5%
	 */


	exports.getPenaltyN4 = function getPenaltyN4(data) {
	  let darkCount = 0;
	  const modulesCount = data.data.length;

	  for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];

	  const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
	  return k * PenaltyScores.N4;
	};
	/**
	 * Return mask value at given position
	 *
	 * @param  {Number} maskPattern Pattern reference value
	 * @param  {Number} i           Row
	 * @param  {Number} j           Column
	 * @return {Boolean}            Mask value
	 */


	function getMaskAt(maskPattern, i, j) {
	  switch (maskPattern) {
	    case exports.Patterns.PATTERN000:
	      return (i + j) % 2 === 0;

	    case exports.Patterns.PATTERN001:
	      return i % 2 === 0;

	    case exports.Patterns.PATTERN010:
	      return j % 3 === 0;

	    case exports.Patterns.PATTERN011:
	      return (i + j) % 3 === 0;

	    case exports.Patterns.PATTERN100:
	      return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;

	    case exports.Patterns.PATTERN101:
	      return i * j % 2 + i * j % 3 === 0;

	    case exports.Patterns.PATTERN110:
	      return (i * j % 2 + i * j % 3) % 2 === 0;

	    case exports.Patterns.PATTERN111:
	      return (i * j % 3 + (i + j) % 2) % 2 === 0;

	    default:
	      throw new Error('bad maskPattern:' + maskPattern);
	  }
	}
	/**
	 * Apply a mask pattern to a BitMatrix
	 *
	 * @param  {Number}    pattern Pattern reference number
	 * @param  {BitMatrix} data    BitMatrix data
	 */


	exports.applyMask = function applyMask(pattern, data) {
	  const size = data.size;

	  for (let col = 0; col < size; col++) {
	    for (let row = 0; row < size; row++) {
	      if (data.isReserved(row, col)) continue;
	      data.xor(row, col, getMaskAt(pattern, row, col));
	    }
	  }
	};
	/**
	 * Returns the best mask pattern for data
	 *
	 * @param  {BitMatrix} data
	 * @return {Number} Mask pattern reference number
	 */


	exports.getBestMask = function getBestMask(data, setupFormatFunc) {
	  const numPatterns = Object.keys(exports.Patterns).length;
	  let bestPattern = 0;
	  let lowerPenalty = Infinity;

	  for (let p = 0; p < numPatterns; p++) {
	    setupFormatFunc(p);
	    exports.applyMask(p, data); // Calculate penalty

	    const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data); // Undo previously applied mask

	    exports.applyMask(p, data);

	    if (penalty < lowerPenalty) {
	      lowerPenalty = penalty;
	      bestPattern = p;
	    }
	  }

	  return bestPattern;
	};
	});
	maskPattern.Patterns;
	maskPattern.isValid;
	maskPattern.getPenaltyN1;
	maskPattern.getPenaltyN2;
	maskPattern.getPenaltyN3;
	maskPattern.getPenaltyN4;
	maskPattern.applyMask;
	maskPattern.getBestMask;

	const EC_BLOCKS_TABLE = [// L  M  Q  H
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81];
	const EC_CODEWORDS_TABLE = [// L  M  Q  H
	7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
	/**
	 * Returns the number of error correction block that the QR Code should contain
	 * for the specified version and error correction level.
	 *
	 * @param  {Number} version              QR Code version
	 * @param  {Number} errorCorrectionLevel Error correction level
	 * @return {Number}                      Number of error correction blocks
	 */

	var getBlocksCount = function getBlocksCount(version, errorCorrectionLevel$1) {
	  switch (errorCorrectionLevel$1) {
	    case errorCorrectionLevel.L:
	      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];

	    case errorCorrectionLevel.M:
	      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];

	    case errorCorrectionLevel.Q:
	      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];

	    case errorCorrectionLevel.H:
	      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];

	    default:
	      return undefined;
	  }
	};
	/**
	 * Returns the number of error correction codewords to use for the specified
	 * version and error correction level.
	 *
	 * @param  {Number} version              QR Code version
	 * @param  {Number} errorCorrectionLevel Error correction level
	 * @return {Number}                      Number of error correction codewords
	 */


	var getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel$1) {
	  switch (errorCorrectionLevel$1) {
	    case errorCorrectionLevel.L:
	      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];

	    case errorCorrectionLevel.M:
	      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];

	    case errorCorrectionLevel.Q:
	      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];

	    case errorCorrectionLevel.H:
	      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];

	    default:
	      return undefined;
	  }
	};

	var errorCorrectionCode = {
		getBlocksCount: getBlocksCount,
		getTotalCodewordsCount: getTotalCodewordsCount
	};

	const EXP_TABLE = new Uint8Array(512);
	const LOG_TABLE = new Uint8Array(256)
	/**
	 * Precompute the log and anti-log tables for faster computation later
	 *
	 * For each possible value in the galois field 2^8, we will pre-compute
	 * the logarithm and anti-logarithm (exponential) of this value
	 *
	 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
	 */
	;

	(function initTables() {
	  let x = 1;

	  for (let i = 0; i < 255; i++) {
	    EXP_TABLE[i] = x;
	    LOG_TABLE[x] = i;
	    x <<= 1; // multiply by 2
	    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
	    // This means that when a number is 256 or larger, it should be XORed with 0x11D.

	    if (x & 0x100) {
	      // similar to x >= 256, but a lot faster (because 0x100 == 256)
	      x ^= 0x11D;
	    }
	  } // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
	  // stay inside the bounds (because we will mainly use this table for the multiplication of
	  // two GF numbers, no more).
	  // @see {@link mul}


	  for (let i = 255; i < 512; i++) {
	    EXP_TABLE[i] = EXP_TABLE[i - 255];
	  }
	})();
	/**
	 * Returns log value of n inside Galois Field
	 *
	 * @param  {Number} n
	 * @return {Number}
	 */


	var log$1 = function log(n) {
	  if (n < 1) throw new Error('log(' + n + ')');
	  return LOG_TABLE[n];
	};
	/**
	 * Returns anti-log value of n inside Galois Field
	 *
	 * @param  {Number} n
	 * @return {Number}
	 */


	var exp = function exp(n) {
	  return EXP_TABLE[n];
	};
	/**
	 * Multiplies two number inside Galois Field
	 *
	 * @param  {Number} x
	 * @param  {Number} y
	 * @return {Number}
	 */


	var mul = function mul(x, y) {
	  if (x === 0 || y === 0) return 0; // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
	  // @see {@link initTables}

	  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
	};

	var galoisField = {
		log: log$1,
		exp: exp,
		mul: mul
	};

	var polynomial = createCommonjsModule(function (module, exports) {
	/**
	 * Multiplies two polynomials inside Galois Field
	 *
	 * @param  {Uint8Array} p1 Polynomial
	 * @param  {Uint8Array} p2 Polynomial
	 * @return {Uint8Array}    Product of p1 and p2
	 */


	exports.mul = function mul(p1, p2) {
	  const coeff = new Uint8Array(p1.length + p2.length - 1);

	  for (let i = 0; i < p1.length; i++) {
	    for (let j = 0; j < p2.length; j++) {
	      coeff[i + j] ^= galoisField.mul(p1[i], p2[j]);
	    }
	  }

	  return coeff;
	};
	/**
	 * Calculate the remainder of polynomials division
	 *
	 * @param  {Uint8Array} divident Polynomial
	 * @param  {Uint8Array} divisor  Polynomial
	 * @return {Uint8Array}          Remainder
	 */


	exports.mod = function mod(divident, divisor) {
	  let result = new Uint8Array(divident);

	  while (result.length - divisor.length >= 0) {
	    const coeff = result[0];

	    for (let i = 0; i < divisor.length; i++) {
	      result[i] ^= galoisField.mul(divisor[i], coeff);
	    } // remove all zeros from buffer head


	    let offset = 0;

	    while (offset < result.length && result[offset] === 0) offset++;

	    result = result.slice(offset);
	  }

	  return result;
	};
	/**
	 * Generate an irreducible generator polynomial of specified degree
	 * (used by Reed-Solomon encoder)
	 *
	 * @param  {Number} degree Degree of the generator polynomial
	 * @return {Uint8Array}    Buffer containing polynomial coefficients
	 */


	exports.generateECPolynomial = function generateECPolynomial(degree) {
	  let poly = new Uint8Array([1]);

	  for (let i = 0; i < degree; i++) {
	    poly = exports.mul(poly, new Uint8Array([1, galoisField.exp(i)]));
	  }

	  return poly;
	};
	});
	polynomial.mul;
	polynomial.mod;
	polynomial.generateECPolynomial;

	function ReedSolomonEncoder(degree) {
	  this.genPoly = undefined;
	  this.degree = degree;
	  if (this.degree) this.initialize(this.degree);
	}
	/**
	 * Initialize the encoder.
	 * The input param should correspond to the number of error correction codewords.
	 *
	 * @param  {Number} degree
	 */


	ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
	  // create an irreducible generator polynomial
	  this.degree = degree;
	  this.genPoly = polynomial.generateECPolynomial(this.degree);
	};
	/**
	 * Encodes a chunk of data
	 *
	 * @param  {Uint8Array} data Buffer containing input data
	 * @return {Uint8Array}      Buffer containing encoded data
	 */


	ReedSolomonEncoder.prototype.encode = function encode(data) {
	  if (!this.genPoly) {
	    throw new Error('Encoder not initialized');
	  } // Calculate EC for this data block
	  // extends data size to data+genPoly size


	  const paddedData = new Uint8Array(data.length + this.degree);
	  paddedData.set(data); // The error correction codewords are the remainder after dividing the data codewords
	  // by a generator polynomial

	  const remainder = polynomial.mod(paddedData, this.genPoly); // return EC data blocks (last n byte, where n is the degree of genPoly)
	  // If coefficients number in remainder are less than genPoly degree,
	  // pad with 0s to the left to reach the needed number of coefficients

	  const start = this.degree - remainder.length;

	  if (start > 0) {
	    const buff = new Uint8Array(this.degree);
	    buff.set(remainder, start);
	    return buff;
	  }

	  return remainder;
	};

	var reedSolomonEncoder = ReedSolomonEncoder;

	/**
	 * Check if QR Code version is valid
	 *
	 * @param  {Number}  version QR Code version
	 * @return {Boolean}         true if valid version, false otherwise
	 */
	var isValid = function isValid(version) {
	  return !isNaN(version) && version >= 1 && version <= 40;
	};

	var versionCheck = {
		isValid: isValid
	};

	const numeric = '[0-9]+';
	const alphanumeric = '[A-Z $%*+\\-./:]+';
	let kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' + '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' + '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' + '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
	kanji = kanji.replace(/u/g, '\\u');
	const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';
	var KANJI = new RegExp(kanji, 'g');
	var BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
	var BYTE = new RegExp(byte, 'g');
	var NUMERIC = new RegExp(numeric, 'g');
	var ALPHANUMERIC = new RegExp(alphanumeric, 'g');
	const TEST_KANJI = new RegExp('^' + kanji + '$');
	const TEST_NUMERIC = new RegExp('^' + numeric + '$');
	const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');

	var testKanji = function testKanji(str) {
	  return TEST_KANJI.test(str);
	};

	var testNumeric = function testNumeric(str) {
	  return TEST_NUMERIC.test(str);
	};

	var testAlphanumeric = function testAlphanumeric(str) {
	  return TEST_ALPHANUMERIC.test(str);
	};

	var regex = {
		KANJI: KANJI,
		BYTE_KANJI: BYTE_KANJI,
		BYTE: BYTE,
		NUMERIC: NUMERIC,
		ALPHANUMERIC: ALPHANUMERIC,
		testKanji: testKanji,
		testNumeric: testNumeric,
		testAlphanumeric: testAlphanumeric
	};

	var mode = createCommonjsModule(function (module, exports) {
	/**
	 * Numeric mode encodes data from the decimal digit set (0 - 9)
	 * (byte values 30HEX to 39HEX).
	 * Normally, 3 data characters are represented by 10 bits.
	 *
	 * @type {Object}
	 */


	exports.NUMERIC = {
	  id: 'Numeric',
	  bit: 1 << 0,
	  ccBits: [10, 12, 14]
	};
	/**
	 * Alphanumeric mode encodes data from a set of 45 characters,
	 * i.e. 10 numeric digits (0 - 9),
	 *      26 alphabetic characters (A - Z),
	 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
	 * Normally, two input characters are represented by 11 bits.
	 *
	 * @type {Object}
	 */

	exports.ALPHANUMERIC = {
	  id: 'Alphanumeric',
	  bit: 1 << 1,
	  ccBits: [9, 11, 13]
	};
	/**
	 * In byte mode, data is encoded at 8 bits per character.
	 *
	 * @type {Object}
	 */

	exports.BYTE = {
	  id: 'Byte',
	  bit: 1 << 2,
	  ccBits: [8, 16, 16]
	};
	/**
	 * The Kanji mode efficiently encodes Kanji characters in accordance with
	 * the Shift JIS system based on JIS X 0208.
	 * The Shift JIS values are shifted from the JIS X 0208 values.
	 * JIS X 0208 gives details of the shift coded representation.
	 * Each two-byte character value is compacted to a 13-bit binary codeword.
	 *
	 * @type {Object}
	 */

	exports.KANJI = {
	  id: 'Kanji',
	  bit: 1 << 3,
	  ccBits: [8, 10, 12]
	};
	/**
	 * Mixed mode will contain a sequences of data in a combination of any of
	 * the modes described above
	 *
	 * @type {Object}
	 */

	exports.MIXED = {
	  bit: -1
	};
	/**
	 * Returns the number of bits needed to store the data length
	 * according to QR Code specifications.
	 *
	 * @param  {Mode}   mode    Data mode
	 * @param  {Number} version QR Code version
	 * @return {Number}         Number of bits
	 */

	exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
	  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode);

	  if (!versionCheck.isValid(version)) {
	    throw new Error('Invalid version: ' + version);
	  }

	  if (version >= 1 && version < 10) return mode.ccBits[0];else if (version < 27) return mode.ccBits[1];
	  return mode.ccBits[2];
	};
	/**
	 * Returns the most efficient mode to store the specified data
	 *
	 * @param  {String} dataStr Input data string
	 * @return {Mode}           Best mode
	 */


	exports.getBestModeForData = function getBestModeForData(dataStr) {
	  if (regex.testNumeric(dataStr)) return exports.NUMERIC;else if (regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;else if (regex.testKanji(dataStr)) return exports.KANJI;else return exports.BYTE;
	};
	/**
	 * Return mode name as string
	 *
	 * @param {Mode} mode Mode object
	 * @returns {String}  Mode name
	 */


	exports.toString = function toString(mode) {
	  if (mode && mode.id) return mode.id;
	  throw new Error('Invalid mode');
	};
	/**
	 * Check if input param is a valid mode object
	 *
	 * @param   {Mode}    mode Mode object
	 * @returns {Boolean} True if valid mode, false otherwise
	 */


	exports.isValid = function isValid(mode) {
	  return mode && mode.bit && mode.ccBits;
	};
	/**
	 * Get mode object from its name
	 *
	 * @param   {String} string Mode name
	 * @returns {Mode}          Mode object
	 */


	function fromString(string) {
	  if (typeof string !== 'string') {
	    throw new Error('Param is not a string');
	  }

	  const lcStr = string.toLowerCase();

	  switch (lcStr) {
	    case 'numeric':
	      return exports.NUMERIC;

	    case 'alphanumeric':
	      return exports.ALPHANUMERIC;

	    case 'kanji':
	      return exports.KANJI;

	    case 'byte':
	      return exports.BYTE;

	    default:
	      throw new Error('Unknown mode: ' + string);
	  }
	}
	/**
	 * Returns mode from a value.
	 * If value is not a valid mode, returns defaultValue
	 *
	 * @param  {Mode|String} value        Encoding mode
	 * @param  {Mode}        defaultValue Fallback value
	 * @return {Mode}                     Encoding mode
	 */


	exports.from = function from(value, defaultValue) {
	  if (exports.isValid(value)) {
	    return value;
	  }

	  try {
	    return fromString(value);
	  } catch (e) {
	    return defaultValue;
	  }
	};
	});
	mode.NUMERIC;
	mode.ALPHANUMERIC;
	mode.BYTE;
	mode.KANJI;
	mode.MIXED;
	mode.getCharCountIndicator;
	mode.getBestModeForData;
	mode.isValid;

	var version = createCommonjsModule(function (module, exports) {
	// Generator polynomial used to encode version information


	const G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
	const G18_BCH = utils$1.getBCHDigit(G18);

	function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
	  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
	    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
	      return currentVersion;
	    }
	  }

	  return undefined;
	}

	function getReservedBitsCount(mode$1, version) {
	  // Character count indicator + mode indicator bits
	  return mode.getCharCountIndicator(mode$1, version) + 4;
	}

	function getTotalBitsFromDataArray(segments, version) {
	  let totalBits = 0;
	  segments.forEach(function (data) {
	    const reservedBits = getReservedBitsCount(data.mode, version);
	    totalBits += reservedBits + data.getBitsLength();
	  });
	  return totalBits;
	}

	function getBestVersionForMixedData(segments, errorCorrectionLevel) {
	  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
	    const length = getTotalBitsFromDataArray(segments, currentVersion);

	    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode.MIXED)) {
	      return currentVersion;
	    }
	  }

	  return undefined;
	}
	/**
	 * Returns version number from a value.
	 * If value is not a valid version, returns defaultValue
	 *
	 * @param  {Number|String} value        QR Code version
	 * @param  {Number}        defaultValue Fallback value
	 * @return {Number}                     QR Code version number
	 */


	exports.from = function from(value, defaultValue) {
	  if (versionCheck.isValid(value)) {
	    return parseInt(value, 10);
	  }

	  return defaultValue;
	};
	/**
	 * Returns how much data can be stored with the specified QR code version
	 * and error correction level
	 *
	 * @param  {Number} version              QR Code version (1-40)
	 * @param  {Number} errorCorrectionLevel Error correction level
	 * @param  {Mode}   mode                 Data mode
	 * @return {Number}                      Quantity of storable data
	 */


	exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode$1) {
	  if (!versionCheck.isValid(version)) {
	    throw new Error('Invalid QR Code version');
	  } // Use Byte mode as default


	  if (typeof mode$1 === 'undefined') mode$1 = mode.BYTE; // Total codewords for this QR code version (Data + Error correction)

	  const totalCodewords = utils$1.getSymbolTotalCodewords(version); // Total number of error correction codewords

	  const ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(version, errorCorrectionLevel); // Total number of data codewords

	  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
	  if (mode$1 === mode.MIXED) return dataTotalCodewordsBits;
	  const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode$1, version); // Return max number of storable codewords

	  switch (mode$1) {
	    case mode.NUMERIC:
	      return Math.floor(usableBits / 10 * 3);

	    case mode.ALPHANUMERIC:
	      return Math.floor(usableBits / 11 * 2);

	    case mode.KANJI:
	      return Math.floor(usableBits / 13);

	    case mode.BYTE:
	    default:
	      return Math.floor(usableBits / 8);
	  }
	};
	/**
	 * Returns the minimum version needed to contain the amount of data
	 *
	 * @param  {Segment} data                    Segment of data
	 * @param  {Number} [errorCorrectionLevel=H] Error correction level
	 * @param  {Mode} mode                       Data mode
	 * @return {Number}                          QR Code version
	 */


	exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel$1) {
	  let seg;
	  const ecl = errorCorrectionLevel.from(errorCorrectionLevel$1, errorCorrectionLevel.M);

	  if (Array.isArray(data)) {
	    if (data.length > 1) {
	      return getBestVersionForMixedData(data, ecl);
	    }

	    if (data.length === 0) {
	      return 1;
	    }

	    seg = data[0];
	  } else {
	    seg = data;
	  }

	  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
	};
	/**
	 * Returns version information with relative error correction bits
	 *
	 * The version information is included in QR Code symbols of version 7 or larger.
	 * It consists of an 18-bit sequence containing 6 data bits,
	 * with 12 error correction bits calculated using the (18, 6) Golay code.
	 *
	 * @param  {Number} version QR Code version
	 * @return {Number}         Encoded version info bits
	 */


	exports.getEncodedBits = function getEncodedBits(version) {
	  if (!versionCheck.isValid(version) || version < 7) {
	    throw new Error('Invalid QR Code version');
	  }

	  let d = version << 12;

	  while (utils$1.getBCHDigit(d) - G18_BCH >= 0) {
	    d ^= G18 << utils$1.getBCHDigit(d) - G18_BCH;
	  }

	  return version << 12 | d;
	};
	});
	version.getCapacity;
	version.getBestVersionForData;
	version.getEncodedBits;

	const G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
	const G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
	const G15_BCH = utils$1.getBCHDigit(G15);
	/**
	 * Returns format information with relative error correction bits
	 *
	 * The format information is a 15-bit sequence containing 5 data bits,
	 * with 10 error correction bits calculated using the (15, 5) BCH code.
	 *
	 * @param  {Number} errorCorrectionLevel Error correction level
	 * @param  {Number} mask                 Mask pattern
	 * @return {Number}                      Encoded format information bits
	 */

	var getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
	  const data = errorCorrectionLevel.bit << 3 | mask;
	  let d = data << 10;

	  while (utils$1.getBCHDigit(d) - G15_BCH >= 0) {
	    d ^= G15 << utils$1.getBCHDigit(d) - G15_BCH;
	  } // xor final data with mask pattern in order to ensure that
	  // no combination of Error Correction Level and data mask pattern
	  // will result in an all-zero data string


	  return (data << 10 | d) ^ G15_MASK;
	};

	var formatInfo = {
		getEncodedBits: getEncodedBits
	};

	function NumericData(data) {
	  this.mode = mode.NUMERIC;
	  this.data = data.toString();
	}

	NumericData.getBitsLength = function getBitsLength(length) {
	  return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
	};

	NumericData.prototype.getLength = function getLength() {
	  return this.data.length;
	};

	NumericData.prototype.getBitsLength = function getBitsLength() {
	  return NumericData.getBitsLength(this.data.length);
	};

	NumericData.prototype.write = function write(bitBuffer) {
	  let i, group, value; // The input data string is divided into groups of three digits,
	  // and each group is converted to its 10-bit binary equivalent.

	  for (i = 0; i + 3 <= this.data.length; i += 3) {
	    group = this.data.substr(i, 3);
	    value = parseInt(group, 10);
	    bitBuffer.put(value, 10);
	  } // If the number of input digits is not an exact multiple of three,
	  // the final one or two digits are converted to 4 or 7 bits respectively.


	  const remainingNum = this.data.length - i;

	  if (remainingNum > 0) {
	    group = this.data.substr(i);
	    value = parseInt(group, 10);
	    bitBuffer.put(value, remainingNum * 3 + 1);
	  }
	};

	var numericData = NumericData;

	/**
	 * Array of characters available in alphanumeric mode
	 *
	 * As per QR Code specification, to each character
	 * is assigned a value from 0 to 44 which in this case coincides
	 * with the array index
	 *
	 * @type {Array}
	 */


	const ALPHA_NUM_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '$', '%', '*', '+', '-', '.', '/', ':'];

	function AlphanumericData(data) {
	  this.mode = mode.ALPHANUMERIC;
	  this.data = data;
	}

	AlphanumericData.getBitsLength = function getBitsLength(length) {
	  return 11 * Math.floor(length / 2) + 6 * (length % 2);
	};

	AlphanumericData.prototype.getLength = function getLength() {
	  return this.data.length;
	};

	AlphanumericData.prototype.getBitsLength = function getBitsLength() {
	  return AlphanumericData.getBitsLength(this.data.length);
	};

	AlphanumericData.prototype.write = function write(bitBuffer) {
	  let i; // Input data characters are divided into groups of two characters
	  // and encoded as 11-bit binary codes.

	  for (i = 0; i + 2 <= this.data.length; i += 2) {
	    // The character value of the first character is multiplied by 45
	    let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45; // The character value of the second digit is added to the product

	    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]); // The sum is then stored as 11-bit binary number

	    bitBuffer.put(value, 11);
	  } // If the number of input data characters is not a multiple of two,
	  // the character value of the final character is encoded as a 6-bit binary number.


	  if (this.data.length % 2) {
	    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
	  }
	};

	var alphanumericData = AlphanumericData;

	var encodeUtf8 = function encodeUtf8(input) {
	  var result = [];
	  var size = input.length;

	  for (var index = 0; index < size; index++) {
	    var point = input.charCodeAt(index);

	    if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {
	      var second = input.charCodeAt(index + 1);

	      if (second >= 0xDC00 && second <= 0xDFFF) {
	        // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	        point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
	        index += 1;
	      }
	    } // US-ASCII


	    if (point < 0x80) {
	      result.push(point);
	      continue;
	    } // 2-byte UTF-8


	    if (point < 0x800) {
	      result.push(point >> 6 | 192);
	      result.push(point & 63 | 128);
	      continue;
	    } // 3-byte UTF-8


	    if (point < 0xD800 || point >= 0xE000 && point < 0x10000) {
	      result.push(point >> 12 | 224);
	      result.push(point >> 6 & 63 | 128);
	      result.push(point & 63 | 128);
	      continue;
	    } // 4-byte UTF-8


	    if (point >= 0x10000 && point <= 0x10FFFF) {
	      result.push(point >> 18 | 240);
	      result.push(point >> 12 & 63 | 128);
	      result.push(point >> 6 & 63 | 128);
	      result.push(point & 63 | 128);
	      continue;
	    } // Invalid character


	    result.push(0xEF, 0xBF, 0xBD);
	  }

	  return new Uint8Array(result).buffer;
	};

	function ByteData(data) {
	  this.mode = mode.BYTE;
	  this.data = new Uint8Array(encodeUtf8(data));
	}

	ByteData.getBitsLength = function getBitsLength(length) {
	  return length * 8;
	};

	ByteData.prototype.getLength = function getLength() {
	  return this.data.length;
	};

	ByteData.prototype.getBitsLength = function getBitsLength() {
	  return ByteData.getBitsLength(this.data.length);
	};

	ByteData.prototype.write = function (bitBuffer) {
	  for (let i = 0, l = this.data.length; i < l; i++) {
	    bitBuffer.put(this.data[i], 8);
	  }
	};

	var byteData = ByteData;

	function KanjiData(data) {
	  this.mode = mode.KANJI;
	  this.data = data;
	}

	KanjiData.getBitsLength = function getBitsLength(length) {
	  return length * 13;
	};

	KanjiData.prototype.getLength = function getLength() {
	  return this.data.length;
	};

	KanjiData.prototype.getBitsLength = function getBitsLength() {
	  return KanjiData.getBitsLength(this.data.length);
	};

	KanjiData.prototype.write = function (bitBuffer) {
	  let i; // In the Shift JIS system, Kanji characters are represented by a two byte combination.
	  // These byte values are shifted from the JIS X 0208 values.
	  // JIS X 0208 gives details of the shift coded representation.

	  for (i = 0; i < this.data.length; i++) {
	    let value = utils$1.toSJIS(this.data[i]); // For characters with Shift JIS values from 0x8140 to 0x9FFC:

	    if (value >= 0x8140 && value <= 0x9FFC) {
	      // Subtract 0x8140 from Shift JIS value
	      value -= 0x8140; // For characters with Shift JIS values from 0xE040 to 0xEBBF
	    } else if (value >= 0xE040 && value <= 0xEBBF) {
	      // Subtract 0xC140 from Shift JIS value
	      value -= 0xC140;
	    } else {
	      throw new Error('Invalid SJIS character: ' + this.data[i] + '\n' + 'Make sure your charset is UTF-8');
	    } // Multiply most significant byte of result by 0xC0
	    // and add least significant byte to product


	    value = (value >>> 8 & 0xff) * 0xC0 + (value & 0xff); // Convert result to a 13-bit binary string

	    bitBuffer.put(value, 13);
	  }
	};

	var kanjiData = KanjiData;

	var dijkstra_1 = createCommonjsModule(function (module) {
	/******************************************************************************
	 * Created 2008-08-19.
	 *
	 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
	 *
	 * Copyright (C) 2008
	 *   Wyatt Baldwin <self@wyattbaldwin.com>
	 *   All rights reserved
	 *
	 * Licensed under the MIT license.
	 *
	 *   http://www.opensource.org/licenses/mit-license.php
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 *****************************************************************************/

	var dijkstra = {
	  single_source_shortest_paths: function (graph, s, d) {
	    // Predecessor map for each node that has been encountered.
	    // node ID => predecessor node ID
	    var predecessors = {}; // Costs of shortest paths from s to all nodes encountered.
	    // node ID => cost

	    var costs = {};
	    costs[s] = 0; // Costs of shortest paths from s to all nodes encountered; differs from
	    // `costs` in that it provides easy access to the node that currently has
	    // the known shortest path from s.
	    // XXX: Do we actually need both `costs` and `open`?

	    var open = dijkstra.PriorityQueue.make();
	    open.push(s, 0);
	    var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;

	    while (!open.empty()) {
	      // In the nodes remaining in graph that have a known cost from s,
	      // find the node, u, that currently has the shortest path from s.
	      closest = open.pop();
	      u = closest.value;
	      cost_of_s_to_u = closest.cost; // Get nodes adjacent to u...

	      adjacent_nodes = graph[u] || {}; // ...and explore the edges that connect u to those nodes, updating
	      // the cost of the shortest paths to any or all of those nodes as
	      // necessary. v is the node across the current edge from u.

	      for (v in adjacent_nodes) {
	        if (adjacent_nodes.hasOwnProperty(v)) {
	          // Get the cost of the edge running from u to v.
	          cost_of_e = adjacent_nodes[v]; // Cost of s to u plus the cost of u to v across e--this is *a*
	          // cost from s to v that may or may not be less than the current
	          // known cost to v.

	          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e; // If we haven't visited v yet OR if the current known cost from s to
	          // v is greater than the new cost we just found (cost of s to u plus
	          // cost of u to v across e), update v's cost in the cost list and
	          // update v's predecessor in the predecessor list (it's now u).

	          cost_of_s_to_v = costs[v];
	          first_visit = typeof costs[v] === 'undefined';

	          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
	            costs[v] = cost_of_s_to_u_plus_cost_of_e;
	            open.push(v, cost_of_s_to_u_plus_cost_of_e);
	            predecessors[v] = u;
	          }
	        }
	      }
	    }

	    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
	      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
	      throw new Error(msg);
	    }

	    return predecessors;
	  },
	  extract_shortest_path_from_predecessor_list: function (predecessors, d) {
	    var nodes = [];
	    var u = d;

	    while (u) {
	      nodes.push(u);
	      u = predecessors[u];
	    }

	    nodes.reverse();
	    return nodes;
	  },
	  find_path: function (graph, s, d) {
	    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
	    return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
	  },

	  /**
	   * A very naive priority queue implementation.
	   */
	  PriorityQueue: {
	    make: function (opts) {
	      var T = dijkstra.PriorityQueue,
	          t = {},
	          key;
	      opts = opts || {};

	      for (key in T) {
	        if (T.hasOwnProperty(key)) {
	          t[key] = T[key];
	        }
	      }

	      t.queue = [];
	      t.sorter = opts.sorter || T.default_sorter;
	      return t;
	    },
	    default_sorter: function (a, b) {
	      return a.cost - b.cost;
	    },

	    /**
	     * Add a new item to the queue and ensure the highest priority element
	     * is at the front of the queue.
	     */
	    push: function (value, cost) {
	      var item = {
	        value: value,
	        cost: cost
	      };
	      this.queue.push(item);
	      this.queue.sort(this.sorter);
	    },

	    /**
	     * Return the highest priority element in the queue.
	     */
	    pop: function () {
	      return this.queue.shift();
	    },
	    empty: function () {
	      return this.queue.length === 0;
	    }
	  }
	}; // node.js module exports

	{
	  module.exports = dijkstra;
	}
	});

	var segments = createCommonjsModule(function (module, exports) {
	/**
	 * Returns UTF8 byte length
	 *
	 * @param  {String} str Input string
	 * @return {Number}     Number of byte
	 */


	function getStringByteLength(str) {
	  return unescape(encodeURIComponent(str)).length;
	}
	/**
	 * Get a list of segments of the specified mode
	 * from a string
	 *
	 * @param  {Mode}   mode Segment mode
	 * @param  {String} str  String to process
	 * @return {Array}       Array of object with segments data
	 */


	function getSegments(regex, mode, str) {
	  const segments = [];
	  let result;

	  while ((result = regex.exec(str)) !== null) {
	    segments.push({
	      data: result[0],
	      index: result.index,
	      mode: mode,
	      length: result[0].length
	    });
	  }

	  return segments;
	}
	/**
	 * Extracts a series of segments with the appropriate
	 * modes from a string
	 *
	 * @param  {String} dataStr Input string
	 * @return {Array}          Array of object with segments data
	 */


	function getSegmentsFromString(dataStr) {
	  const numSegs = getSegments(regex.NUMERIC, mode.NUMERIC, dataStr);
	  const alphaNumSegs = getSegments(regex.ALPHANUMERIC, mode.ALPHANUMERIC, dataStr);
	  let byteSegs;
	  let kanjiSegs;

	  if (utils$1.isKanjiModeEnabled()) {
	    byteSegs = getSegments(regex.BYTE, mode.BYTE, dataStr);
	    kanjiSegs = getSegments(regex.KANJI, mode.KANJI, dataStr);
	  } else {
	    byteSegs = getSegments(regex.BYTE_KANJI, mode.BYTE, dataStr);
	    kanjiSegs = [];
	  }

	  const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
	  return segs.sort(function (s1, s2) {
	    return s1.index - s2.index;
	  }).map(function (obj) {
	    return {
	      data: obj.data,
	      mode: obj.mode,
	      length: obj.length
	    };
	  });
	}
	/**
	 * Returns how many bits are needed to encode a string of
	 * specified length with the specified mode
	 *
	 * @param  {Number} length String length
	 * @param  {Mode} mode     Segment mode
	 * @return {Number}        Bit length
	 */


	function getSegmentBitsLength(length, mode$1) {
	  switch (mode$1) {
	    case mode.NUMERIC:
	      return numericData.getBitsLength(length);

	    case mode.ALPHANUMERIC:
	      return alphanumericData.getBitsLength(length);

	    case mode.KANJI:
	      return kanjiData.getBitsLength(length);

	    case mode.BYTE:
	      return byteData.getBitsLength(length);
	  }
	}
	/**
	 * Merges adjacent segments which have the same mode
	 *
	 * @param  {Array} segs Array of object with segments data
	 * @return {Array}      Array of object with segments data
	 */


	function mergeSegments(segs) {
	  return segs.reduce(function (acc, curr) {
	    const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;

	    if (prevSeg && prevSeg.mode === curr.mode) {
	      acc[acc.length - 1].data += curr.data;
	      return acc;
	    }

	    acc.push(curr);
	    return acc;
	  }, []);
	}
	/**
	 * Generates a list of all possible nodes combination which
	 * will be used to build a segments graph.
	 *
	 * Nodes are divided by groups. Each group will contain a list of all the modes
	 * in which is possible to encode the given text.
	 *
	 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
	 * The group for '12345' will contain then 3 objects, one for each
	 * possible encoding mode.
	 *
	 * Each node represents a possible segment.
	 *
	 * @param  {Array} segs Array of object with segments data
	 * @return {Array}      Array of object with segments data
	 */


	function buildNodes(segs) {
	  const nodes = [];

	  for (let i = 0; i < segs.length; i++) {
	    const seg = segs[i];

	    switch (seg.mode) {
	      case mode.NUMERIC:
	        nodes.push([seg, {
	          data: seg.data,
	          mode: mode.ALPHANUMERIC,
	          length: seg.length
	        }, {
	          data: seg.data,
	          mode: mode.BYTE,
	          length: seg.length
	        }]);
	        break;

	      case mode.ALPHANUMERIC:
	        nodes.push([seg, {
	          data: seg.data,
	          mode: mode.BYTE,
	          length: seg.length
	        }]);
	        break;

	      case mode.KANJI:
	        nodes.push([seg, {
	          data: seg.data,
	          mode: mode.BYTE,
	          length: getStringByteLength(seg.data)
	        }]);
	        break;

	      case mode.BYTE:
	        nodes.push([{
	          data: seg.data,
	          mode: mode.BYTE,
	          length: getStringByteLength(seg.data)
	        }]);
	    }
	  }

	  return nodes;
	}
	/**
	 * Builds a graph from a list of nodes.
	 * All segments in each node group will be connected with all the segments of
	 * the next group and so on.
	 *
	 * At each connection will be assigned a weight depending on the
	 * segment's byte length.
	 *
	 * @param  {Array} nodes    Array of object with segments data
	 * @param  {Number} version QR Code version
	 * @return {Object}         Graph of all possible segments
	 */


	function buildGraph(nodes, version) {
	  const table = {};
	  const graph = {
	    start: {}
	  };
	  let prevNodeIds = ['start'];

	  for (let i = 0; i < nodes.length; i++) {
	    const nodeGroup = nodes[i];
	    const currentNodeIds = [];

	    for (let j = 0; j < nodeGroup.length; j++) {
	      const node = nodeGroup[j];
	      const key = '' + i + j;
	      currentNodeIds.push(key);
	      table[key] = {
	        node: node,
	        lastCount: 0
	      };
	      graph[key] = {};

	      for (let n = 0; n < prevNodeIds.length; n++) {
	        const prevNodeId = prevNodeIds[n];

	        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
	          graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
	          table[prevNodeId].lastCount += node.length;
	        } else {
	          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
	          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + mode.getCharCountIndicator(node.mode, version); // switch cost
	        }
	      }
	    }

	    prevNodeIds = currentNodeIds;
	  }

	  for (let n = 0; n < prevNodeIds.length; n++) {
	    graph[prevNodeIds[n]].end = 0;
	  }

	  return {
	    map: graph,
	    table: table
	  };
	}
	/**
	 * Builds a segment from a specified data and mode.
	 * If a mode is not specified, the more suitable will be used.
	 *
	 * @param  {String} data             Input data
	 * @param  {Mode | String} modesHint Data mode
	 * @return {Segment}                 Segment
	 */


	function buildSingleSegment(data, modesHint) {
	  let mode$1;
	  const bestMode = mode.getBestModeForData(data);
	  mode$1 = mode.from(modesHint, bestMode); // Make sure data can be encoded

	  if (mode$1 !== mode.BYTE && mode$1.bit < bestMode.bit) {
	    throw new Error('"' + data + '"' + ' cannot be encoded with mode ' + mode.toString(mode$1) + '.\n Suggested mode is: ' + mode.toString(bestMode));
	  } // Use Mode.BYTE if Kanji support is disabled


	  if (mode$1 === mode.KANJI && !utils$1.isKanjiModeEnabled()) {
	    mode$1 = mode.BYTE;
	  }

	  switch (mode$1) {
	    case mode.NUMERIC:
	      return new numericData(data);

	    case mode.ALPHANUMERIC:
	      return new alphanumericData(data);

	    case mode.KANJI:
	      return new kanjiData(data);

	    case mode.BYTE:
	      return new byteData(data);
	  }
	}
	/**
	 * Builds a list of segments from an array.
	 * Array can contain Strings or Objects with segment's info.
	 *
	 * For each item which is a string, will be generated a segment with the given
	 * string and the more appropriate encoding mode.
	 *
	 * For each item which is an object, will be generated a segment with the given
	 * data and mode.
	 * Objects must contain at least the property "data".
	 * If property "mode" is not present, the more suitable mode will be used.
	 *
	 * @param  {Array} array Array of objects with segments data
	 * @return {Array}       Array of Segments
	 */


	exports.fromArray = function fromArray(array) {
	  return array.reduce(function (acc, seg) {
	    if (typeof seg === 'string') {
	      acc.push(buildSingleSegment(seg, null));
	    } else if (seg.data) {
	      acc.push(buildSingleSegment(seg.data, seg.mode));
	    }

	    return acc;
	  }, []);
	};
	/**
	 * Builds an optimized sequence of segments from a string,
	 * which will produce the shortest possible bitstream.
	 *
	 * @param  {String} data    Input string
	 * @param  {Number} version QR Code version
	 * @return {Array}          Array of segments
	 */


	exports.fromString = function fromString(data, version) {
	  const segs = getSegmentsFromString(data);
	  const nodes = buildNodes(segs);
	  const graph = buildGraph(nodes, version);
	  const path = dijkstra_1.find_path(graph.map, 'start', 'end');
	  const optimizedSegs = [];

	  for (let i = 1; i < path.length - 1; i++) {
	    optimizedSegs.push(graph.table[path[i]].node);
	  }

	  return exports.fromArray(mergeSegments(optimizedSegs));
	};
	/**
	 * Splits a string in various segments with the modes which
	 * best represent their content.
	 * The produced segments are far from being optimized.
	 * The output of this function is only used to estimate a QR Code version
	 * which may contain the data.
	 *
	 * @param  {string} data Input string
	 * @return {Array}       Array of segments
	 */


	exports.rawSplit = function rawSplit(data) {
	  return exports.fromArray(getSegmentsFromString(data));
	};
	});
	segments.fromArray;
	segments.fromString;
	segments.rawSplit;

	/**
	 * QRCode for JavaScript
	 *
	 * modified by Ryan Day for nodejs support
	 * Copyright (c) 2011 Ryan Day
	 *
	 * Licensed under the MIT license:
	 *   http://www.opensource.org/licenses/mit-license.php
	 *
	//---------------------------------------------------------------------
	// QRCode for JavaScript
	//
	// Copyright (c) 2009 Kazuhiko Arase
	//
	// URL: http://www.d-project.com/
	//
	// Licensed under the MIT license:
	//   http://www.opensource.org/licenses/mit-license.php
	//
	// The word "QR Code" is registered trademark of
	// DENSO WAVE INCORPORATED
	//   http://www.denso-wave.com/qrcode/faqpatent-e.html
	//
	//---------------------------------------------------------------------
	*/

	/**
	 * Add finder patterns bits to matrix
	 *
	 * @param  {BitMatrix} matrix  Modules matrix
	 * @param  {Number}    version QR Code version
	 */


	function setupFinderPattern(matrix, version) {
	  const size = matrix.size;
	  const pos = finderPattern.getPositions(version);

	  for (let i = 0; i < pos.length; i++) {
	    const row = pos[i][0];
	    const col = pos[i][1];

	    for (let r = -1; r <= 7; r++) {
	      if (row + r <= -1 || size <= row + r) continue;

	      for (let c = -1; c <= 7; c++) {
	        if (col + c <= -1 || size <= col + c) continue;

	        if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
	          matrix.set(row + r, col + c, true, true);
	        } else {
	          matrix.set(row + r, col + c, false, true);
	        }
	      }
	    }
	  }
	}
	/**
	 * Add timing pattern bits to matrix
	 *
	 * Note: this function must be called before {@link setupAlignmentPattern}
	 *
	 * @param  {BitMatrix} matrix Modules matrix
	 */


	function setupTimingPattern(matrix) {
	  const size = matrix.size;

	  for (let r = 8; r < size - 8; r++) {
	    const value = r % 2 === 0;
	    matrix.set(r, 6, value, true);
	    matrix.set(6, r, value, true);
	  }
	}
	/**
	 * Add alignment patterns bits to matrix
	 *
	 * Note: this function must be called after {@link setupTimingPattern}
	 *
	 * @param  {BitMatrix} matrix  Modules matrix
	 * @param  {Number}    version QR Code version
	 */


	function setupAlignmentPattern(matrix, version) {
	  const pos = alignmentPattern.getPositions(version);

	  for (let i = 0; i < pos.length; i++) {
	    const row = pos[i][0];
	    const col = pos[i][1];

	    for (let r = -2; r <= 2; r++) {
	      for (let c = -2; c <= 2; c++) {
	        if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
	          matrix.set(row + r, col + c, true, true);
	        } else {
	          matrix.set(row + r, col + c, false, true);
	        }
	      }
	    }
	  }
	}
	/**
	 * Add version info bits to matrix
	 *
	 * @param  {BitMatrix} matrix  Modules matrix
	 * @param  {Number}    version QR Code version
	 */


	function setupVersionInfo(matrix, version$1) {
	  const size = matrix.size;
	  const bits = version.getEncodedBits(version$1);
	  let row, col, mod;

	  for (let i = 0; i < 18; i++) {
	    row = Math.floor(i / 3);
	    col = i % 3 + size - 8 - 3;
	    mod = (bits >> i & 1) === 1;
	    matrix.set(row, col, mod, true);
	    matrix.set(col, row, mod, true);
	  }
	}
	/**
	 * Add format info bits to matrix
	 *
	 * @param  {BitMatrix} matrix               Modules matrix
	 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
	 * @param  {Number}    maskPattern          Mask pattern reference value
	 */


	function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
	  const size = matrix.size;
	  const bits = formatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
	  let i, mod;

	  for (i = 0; i < 15; i++) {
	    mod = (bits >> i & 1) === 1; // vertical

	    if (i < 6) {
	      matrix.set(i, 8, mod, true);
	    } else if (i < 8) {
	      matrix.set(i + 1, 8, mod, true);
	    } else {
	      matrix.set(size - 15 + i, 8, mod, true);
	    } // horizontal


	    if (i < 8) {
	      matrix.set(8, size - i - 1, mod, true);
	    } else if (i < 9) {
	      matrix.set(8, 15 - i - 1 + 1, mod, true);
	    } else {
	      matrix.set(8, 15 - i - 1, mod, true);
	    }
	  } // fixed module


	  matrix.set(size - 8, 8, 1, true);
	}
	/**
	 * Add encoded data bits to matrix
	 *
	 * @param  {BitMatrix}  matrix Modules matrix
	 * @param  {Uint8Array} data   Data codewords
	 */


	function setupData(matrix, data) {
	  const size = matrix.size;
	  let inc = -1;
	  let row = size - 1;
	  let bitIndex = 7;
	  let byteIndex = 0;

	  for (let col = size - 1; col > 0; col -= 2) {
	    if (col === 6) col--;

	    while (true) {
	      for (let c = 0; c < 2; c++) {
	        if (!matrix.isReserved(row, col - c)) {
	          let dark = false;

	          if (byteIndex < data.length) {
	            dark = (data[byteIndex] >>> bitIndex & 1) === 1;
	          }

	          matrix.set(row, col - c, dark);
	          bitIndex--;

	          if (bitIndex === -1) {
	            byteIndex++;
	            bitIndex = 7;
	          }
	        }
	      }

	      row += inc;

	      if (row < 0 || size <= row) {
	        row -= inc;
	        inc = -inc;
	        break;
	      }
	    }
	  }
	}
	/**
	 * Create encoded codewords from data input
	 *
	 * @param  {Number}   version              QR Code version
	 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
	 * @param  {ByteData} data                 Data input
	 * @return {Uint8Array}                    Buffer containing encoded codewords
	 */


	function createData(version, errorCorrectionLevel, segments) {
	  // Prepare data buffer
	  const buffer = new bitBuffer();
	  segments.forEach(function (data) {
	    // prefix data with mode indicator (4 bits)
	    buffer.put(data.mode.bit, 4); // Prefix data with character count indicator.
	    // The character count indicator is a string of bits that represents the
	    // number of characters that are being encoded.
	    // The character count indicator must be placed after the mode indicator
	    // and must be a certain number of bits long, depending on the QR version
	    // and data mode
	    // @see {@link Mode.getCharCountIndicator}.

	    buffer.put(data.getLength(), mode.getCharCountIndicator(data.mode, version)); // add binary data sequence to buffer

	    data.write(buffer);
	  }); // Calculate required number of bits

	  const totalCodewords = utils$1.getSymbolTotalCodewords(version);
	  const ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(version, errorCorrectionLevel);
	  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8; // Add a terminator.
	  // If the bit string is shorter than the total number of required bits,
	  // a terminator of up to four 0s must be added to the right side of the string.
	  // If the bit string is more than four bits shorter than the required number of bits,
	  // add four 0s to the end.

	  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
	    buffer.put(0, 4);
	  } // If the bit string is fewer than four bits shorter, add only the number of 0s that
	  // are needed to reach the required number of bits.
	  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
	  // pad the string on the right with 0s to make the string's length a multiple of 8.


	  while (buffer.getLengthInBits() % 8 !== 0) {
	    buffer.putBit(0);
	  } // Add pad bytes if the string is still shorter than the total number of required bits.
	  // Extend the buffer to fill the data capacity of the symbol corresponding to
	  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
	  // and 00010001 (0x11) alternately.


	  const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;

	  for (let i = 0; i < remainingByte; i++) {
	    buffer.put(i % 2 ? 0x11 : 0xEC, 8);
	  }

	  return createCodewords(buffer, version, errorCorrectionLevel);
	}
	/**
	 * Encode input data with Reed-Solomon and return codewords with
	 * relative error correction bits
	 *
	 * @param  {BitBuffer} bitBuffer            Data to encode
	 * @param  {Number}    version              QR Code version
	 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
	 * @return {Uint8Array}                     Buffer containing encoded codewords
	 */


	function createCodewords(bitBuffer, version, errorCorrectionLevel) {
	  // Total codewords for this QR code version (Data + Error correction)
	  const totalCodewords = utils$1.getSymbolTotalCodewords(version); // Total number of error correction codewords

	  const ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(version, errorCorrectionLevel); // Total number of data codewords

	  const dataTotalCodewords = totalCodewords - ecTotalCodewords; // Total number of blocks

	  const ecTotalBlocks = errorCorrectionCode.getBlocksCount(version, errorCorrectionLevel); // Calculate how many blocks each group should contain

	  const blocksInGroup2 = totalCodewords % ecTotalBlocks;
	  const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
	  const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
	  const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
	  const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1; // Number of EC codewords is the same for both groups

	  const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1; // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount

	  const rs = new reedSolomonEncoder(ecCount);
	  let offset = 0;
	  const dcData = new Array(ecTotalBlocks);
	  const ecData = new Array(ecTotalBlocks);
	  let maxDataSize = 0;
	  const buffer = new Uint8Array(bitBuffer.buffer); // Divide the buffer into the required number of blocks

	  for (let b = 0; b < ecTotalBlocks; b++) {
	    const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2; // extract a block of data from buffer

	    dcData[b] = buffer.slice(offset, offset + dataSize); // Calculate EC codewords for this data block

	    ecData[b] = rs.encode(dcData[b]);
	    offset += dataSize;
	    maxDataSize = Math.max(maxDataSize, dataSize);
	  } // Create final data
	  // Interleave the data and error correction codewords from each block


	  const data = new Uint8Array(totalCodewords);
	  let index = 0;
	  let i, r; // Add data codewords

	  for (i = 0; i < maxDataSize; i++) {
	    for (r = 0; r < ecTotalBlocks; r++) {
	      if (i < dcData[r].length) {
	        data[index++] = dcData[r][i];
	      }
	    }
	  } // Apped EC codewords


	  for (i = 0; i < ecCount; i++) {
	    for (r = 0; r < ecTotalBlocks; r++) {
	      data[index++] = ecData[r][i];
	    }
	  }

	  return data;
	}
	/**
	 * Build QR Code symbol
	 *
	 * @param  {String} data                 Input string
	 * @param  {Number} version              QR Code version
	 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
	 * @param  {MaskPattern} maskPattern     Mask pattern
	 * @return {Object}                      Object containing symbol data
	 */


	function createSymbol(data, version$1, errorCorrectionLevel, maskPattern$1) {
	  let segments$1;

	  if (Array.isArray(data)) {
	    segments$1 = segments.fromArray(data);
	  } else if (typeof data === 'string') {
	    let estimatedVersion = version$1;

	    if (!estimatedVersion) {
	      const rawSegments = segments.rawSplit(data); // Estimate best version that can contain raw splitted segments

	      estimatedVersion = version.getBestVersionForData(rawSegments, errorCorrectionLevel);
	    } // Build optimized segments
	    // If estimated version is undefined, try with the highest version


	    segments$1 = segments.fromString(data, estimatedVersion || 40);
	  } else {
	    throw new Error('Invalid data');
	  } // Get the min version that can contain data


	  const bestVersion = version.getBestVersionForData(segments$1, errorCorrectionLevel); // If no version is found, data cannot be stored

	  if (!bestVersion) {
	    throw new Error('The amount of data is too big to be stored in a QR Code');
	  } // If not specified, use min version as default


	  if (!version$1) {
	    version$1 = bestVersion; // Check if the specified version can contain the data
	  } else if (version$1 < bestVersion) {
	    throw new Error('\n' + 'The chosen QR Code version cannot contain this amount of data.\n' + 'Minimum version required to store current data is: ' + bestVersion + '.\n');
	  }

	  const dataBits = createData(version$1, errorCorrectionLevel, segments$1); // Allocate matrix buffer

	  const moduleCount = utils$1.getSymbolSize(version$1);
	  const modules = new bitMatrix(moduleCount); // Add function modules

	  setupFinderPattern(modules, version$1);
	  setupTimingPattern(modules);
	  setupAlignmentPattern(modules, version$1); // Add temporary dummy bits for format info just to set them as reserved.
	  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
	  // since the masking operation must be performed only on the encoding region.
	  // These blocks will be replaced with correct values later in code.

	  setupFormatInfo(modules, errorCorrectionLevel, 0);

	  if (version$1 >= 7) {
	    setupVersionInfo(modules, version$1);
	  } // Add data codewords


	  setupData(modules, dataBits);

	  if (isNaN(maskPattern$1)) {
	    // Find best mask pattern
	    maskPattern$1 = maskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
	  } // Apply mask pattern


	  maskPattern.applyMask(maskPattern$1, modules); // Replace format info bits with correct values

	  setupFormatInfo(modules, errorCorrectionLevel, maskPattern$1);
	  return {
	    modules: modules,
	    version: version$1,
	    errorCorrectionLevel: errorCorrectionLevel,
	    maskPattern: maskPattern$1,
	    segments: segments$1
	  };
	}
	/**
	 * QR Code
	 *
	 * @param {String | Array} data                 Input data
	 * @param {Object} options                      Optional configurations
	 * @param {Number} options.version              QR Code version
	 * @param {String} options.errorCorrectionLevel Error correction level
	 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
	 */


	var create$1 = function create(data, options) {
	  if (typeof data === 'undefined' || data === '') {
	    throw new Error('No input text');
	  }

	  let errorCorrectionLevel$1 = errorCorrectionLevel.M;
	  let version$1;
	  let mask;

	  if (typeof options !== 'undefined') {
	    // Use higher error correction level as default
	    errorCorrectionLevel$1 = errorCorrectionLevel.from(options.errorCorrectionLevel, errorCorrectionLevel.M);
	    version$1 = version.from(options.version);
	    mask = maskPattern.from(options.maskPattern);

	    if (options.toSJISFunc) {
	      utils$1.setToSJISFunction(options.toSJISFunc);
	    }
	  }

	  return createSymbol(data, version$1, errorCorrectionLevel$1, mask);
	};

	var qrcode = {
		create: create$1
	};

	var utils = createCommonjsModule(function (module, exports) {
	function hex2rgba(hex) {
	  if (typeof hex === 'number') {
	    hex = hex.toString();
	  }

	  if (typeof hex !== 'string') {
	    throw new Error('Color should be defined as hex string');
	  }

	  let hexCode = hex.slice().replace('#', '').split('');

	  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
	    throw new Error('Invalid hex color: ' + hex);
	  } // Convert from short to long form (fff -> ffffff)


	  if (hexCode.length === 3 || hexCode.length === 4) {
	    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
	      return [c, c];
	    }));
	  } // Add default alpha value


	  if (hexCode.length === 6) hexCode.push('F', 'F');
	  const hexValue = parseInt(hexCode.join(''), 16);
	  return {
	    r: hexValue >> 24 & 255,
	    g: hexValue >> 16 & 255,
	    b: hexValue >> 8 & 255,
	    a: hexValue & 255,
	    hex: '#' + hexCode.slice(0, 6).join('')
	  };
	}

	exports.getOptions = function getOptions(options) {
	  if (!options) options = {};
	  if (!options.color) options.color = {};
	  const margin = typeof options.margin === 'undefined' || options.margin === null || options.margin < 0 ? 4 : options.margin;
	  const width = options.width && options.width >= 21 ? options.width : undefined;
	  const scale = options.scale || 4;
	  return {
	    width: width,
	    scale: width ? 4 : scale,
	    margin: margin,
	    color: {
	      dark: hex2rgba(options.color.dark || '#000000ff'),
	      light: hex2rgba(options.color.light || '#ffffffff')
	    },
	    type: options.type,
	    rendererOpts: options.rendererOpts || {}
	  };
	};

	exports.getScale = function getScale(qrSize, opts) {
	  return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
	};

	exports.getImageWidth = function getImageWidth(qrSize, opts) {
	  const scale = exports.getScale(qrSize, opts);
	  return Math.floor((qrSize + opts.margin * 2) * scale);
	};

	exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
	  const size = qr.modules.size;
	  const data = qr.modules.data;
	  const scale = exports.getScale(size, opts);
	  const symbolSize = Math.floor((size + opts.margin * 2) * scale);
	  const scaledMargin = opts.margin * scale;
	  const palette = [opts.color.light, opts.color.dark];

	  for (let i = 0; i < symbolSize; i++) {
	    for (let j = 0; j < symbolSize; j++) {
	      let posDst = (i * symbolSize + j) * 4;
	      let pxColor = opts.color.light;

	      if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
	        const iSrc = Math.floor((i - scaledMargin) / scale);
	        const jSrc = Math.floor((j - scaledMargin) / scale);
	        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
	      }

	      imgData[posDst++] = pxColor.r;
	      imgData[posDst++] = pxColor.g;
	      imgData[posDst++] = pxColor.b;
	      imgData[posDst] = pxColor.a;
	    }
	  }
	};
	});
	utils.getOptions;
	utils.getScale;
	utils.getImageWidth;
	utils.qrToImageData;

	var canvas = createCommonjsModule(function (module, exports) {
	function clearCanvas(ctx, canvas, size) {
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  if (!canvas.style) canvas.style = {};
	  canvas.height = size;
	  canvas.width = size;
	  canvas.style.height = size + 'px';
	  canvas.style.width = size + 'px';
	}

	function getCanvasElement() {
	  try {
	    return document.createElement('canvas');
	  } catch (e) {
	    throw new Error('You need to specify a canvas element');
	  }
	}

	exports.render = function render(qrData, canvas, options) {
	  let opts = options;
	  let canvasEl = canvas;

	  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
	    opts = canvas;
	    canvas = undefined;
	  }

	  if (!canvas) {
	    canvasEl = getCanvasElement();
	  }

	  opts = utils.getOptions(opts);
	  const size = utils.getImageWidth(qrData.modules.size, opts);
	  const ctx = canvasEl.getContext('2d');
	  const image = ctx.createImageData(size, size);
	  utils.qrToImageData(image.data, qrData, opts);
	  clearCanvas(ctx, canvasEl, size);
	  ctx.putImageData(image, 0, 0);
	  return canvasEl;
	};

	exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
	  let opts = options;

	  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
	    opts = canvas;
	    canvas = undefined;
	  }

	  if (!opts) opts = {};
	  const canvasEl = exports.render(qrData, canvas, opts);
	  const type = opts.type || 'image/png';
	  const rendererOpts = opts.rendererOpts || {};
	  return canvasEl.toDataURL(type, rendererOpts.quality);
	};
	});
	canvas.render;
	canvas.renderToDataURL;

	function getColorAttrib(color, attrib) {
	  const alpha = color.a / 255;
	  const str = attrib + '="' + color.hex + '"';
	  return alpha < 1 ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
	}

	function svgCmd(cmd, x, y) {
	  let str = cmd + x;
	  if (typeof y !== 'undefined') str += ' ' + y;
	  return str;
	}

	function qrToPath(data, size, margin) {
	  let path = '';
	  let moveBy = 0;
	  let newRow = false;
	  let lineLength = 0;

	  for (let i = 0; i < data.length; i++) {
	    const col = Math.floor(i % size);
	    const row = Math.floor(i / size);
	    if (!col && !newRow) newRow = true;

	    if (data[i]) {
	      lineLength++;

	      if (!(i > 0 && col > 0 && data[i - 1])) {
	        path += newRow ? svgCmd('M', col + margin, 0.5 + row + margin) : svgCmd('m', moveBy, 0);
	        moveBy = 0;
	        newRow = false;
	      }

	      if (!(col + 1 < size && data[i + 1])) {
	        path += svgCmd('h', lineLength);
	        lineLength = 0;
	      }
	    } else {
	      moveBy++;
	    }
	  }

	  return path;
	}

	var render = function render(qrData, options, cb) {
	  const opts = utils.getOptions(options);
	  const size = qrData.modules.size;
	  const data = qrData.modules.data;
	  const qrcodesize = size + opts.margin * 2;
	  const bg = !opts.color.light.a ? '' : '<path ' + getColorAttrib(opts.color.light, 'fill') + ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';
	  const path = '<path ' + getColorAttrib(opts.color.dark, 'stroke') + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
	  const viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';
	  const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';
	  const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';

	  if (typeof cb === 'function') {
	    cb(null, svgTag);
	  }

	  return svgTag;
	};

	var svgTag = {
		render: render
	};

	function renderCanvas(renderFunc, canvas, text, opts, cb) {
	  const args = [].slice.call(arguments, 1);
	  const argsNum = args.length;
	  const isLastArgCb = typeof args[argsNum - 1] === 'function';

	  if (!isLastArgCb && !canPromise()) {
	    throw new Error('Callback required as last argument');
	  }

	  if (isLastArgCb) {
	    if (argsNum < 2) {
	      throw new Error('Too few arguments provided');
	    }

	    if (argsNum === 2) {
	      cb = text;
	      text = canvas;
	      canvas = opts = undefined;
	    } else if (argsNum === 3) {
	      if (canvas.getContext && typeof cb === 'undefined') {
	        cb = opts;
	        opts = undefined;
	      } else {
	        cb = opts;
	        opts = text;
	        text = canvas;
	        canvas = undefined;
	      }
	    }
	  } else {
	    if (argsNum < 1) {
	      throw new Error('Too few arguments provided');
	    }

	    if (argsNum === 1) {
	      text = canvas;
	      canvas = opts = undefined;
	    } else if (argsNum === 2 && !canvas.getContext) {
	      opts = text;
	      text = canvas;
	      canvas = undefined;
	    }

	    return new Promise(function (resolve, reject) {
	      try {
	        const data = qrcode.create(text, opts);
	        resolve(renderFunc(data, canvas, opts));
	      } catch (e) {
	        reject(e);
	      }
	    });
	  }

	  try {
	    const data = qrcode.create(text, opts);
	    cb(null, renderFunc(data, canvas, opts));
	  } catch (e) {
	    cb(e);
	  }
	}

	var create = qrcode.create;
	var toCanvas = renderCanvas.bind(null, canvas.render);
	var toDataURL = renderCanvas.bind(null, canvas.renderToDataURL); // only svg for now.

	var toString_1 = renderCanvas.bind(null, function (data, _, opts) {
	  return svgTag.render(data, opts);
	});

	var browser = {
		create: create,
		toCanvas: toCanvas,
		toDataURL: toDataURL,
		toString: toString_1
	};

	/**
	 * @description: 绘制图片的基础方法
	 */

	var canvasToImage = function canvasToImage(width) {
	  var _this = this;

	  _classCallCheck(this, canvasToImage);

	  _defineProperty(this, "writeText", function (option) {
	    var fontWeight = option.fontWeight,
	        fontSize = option.fontSize,
	        textColor = option.textColor,
	        text = option.text,
	        x = option.x,
	        y = option.y,
	        _option$fontFamily = option.fontFamily,
	        fontFamily = _option$fontFamily === void 0 ? 'AlibabaPuHuiTiH' : _option$fontFamily;
	    return new Promise(function (reslove) {
	      _this.context.font = "".concat(fontWeight, " ").concat(fontSize * _this.base, "px ").concat(fontFamily);
	      _this.context.fillStyle = textColor;

	      _this.context.fillText(text, x * _this.base, y * _this.base);

	      reslove();
	    });
	  });

	  _defineProperty(this, "loadingImage", function (imageData) {
	    return new Promise(function (resolve) {
	      var image = new Image();
	      image.setAttribute('crossOrigin', 'anonymous');
	      image.src = imageData;

	      image.onload = function () {
	        resolve(image);
	      };
	    });
	  });

	  _defineProperty(this, "drawQrcode", function (option) {
	    var url = option.url,
	        _option$margin = option.margin,
	        margin = _option$margin === void 0 ? 1.5 : _option$margin;
	    return browser.toDataURL(url, {
	      margin: margin
	    });
	  });

	  _defineProperty(this, "drawImageToCancas", function (option) {
	    var image = option.image,
	        x = option.x,
	        y = option.y,
	        w = option.w,
	        h = option.h;
	    return new Promise(function (reslove) {
	      _this.context.drawImage(image, x * _this.base, y * _this.base, w * _this.base, h * _this.base);

	      reslove();
	    });
	  });

	  _defineProperty(this, "initImageBackground", function (_ref) {
	    var image = _ref.image;
	    _this.canvas.width = image.width;
	    _this.canvas.height = image.height;

	    if (_this.width) {
	      _this.base = image.width / _this.width;
	    }

	    return _this.drawImageToCancas({
	      image: image,
	      x: 0,
	      y: 0,
	      w: image.width / _this.base,
	      h: image.height / _this.base
	    });
	  });

	  _defineProperty(this, "outputImage", function () {
	    return new Promise(function (resolve) {
	      var url = _this.canvas.toDataURL('image/png');

	      resolve(url);
	    });
	  });

	  _defineProperty(this, "importFont", function (fontName, fontUrl) {
	    return new Promise(function (resolve) {
	      var fontface = new FontFace(fontName, fontUrl);
	      document.fonts.add(fontface);
	      fontface.load();
	      fontface.loaded.then(function () {
	        return resolve();
	      });
	    });
	  });

	  this.width = width;
	  this.base = 1;
	  this.canvas = document.createElement('canvas');
	  this.context = this.canvas.getContext('2d');
	}
	/**
	* @description: 写文字
	*/
;

	/**
	 * @description: 判断设备
	 */

	var judgeDevice = function () {
	  var ua = navigator.userAgent.toLowerCase();

	  if (/ipad|ipod/.test(ua)) {
	    return 'ipad';
	  } else if (/android|iphone/.test(ua)) {
	    return 'mobile';
	  }

	  return 'pc';
	}();
	/**
	 * @description:  判断是否是微信环境
	 */

	function isWeiXin() {
	  var ua = window.navigator.userAgent.toLowerCase();
	  var flag = /micromessenger/.test(ua) && !/wxwork/.test(ua);
	  return flag;
	}
	/**
	 * @description: 改变网站在导航栏的图标
	 */

	var changeFavicon = function changeFavicon(link) {
	  var $favicon = document.querySelector('link[rel="icon"]');

	  if ($favicon !== null) {
	    $favicon.href = link;
	  } else {
	    $favicon = document.createElement('link');
	    $favicon.rel = 'icon';
	    $favicon.href = link;
	    document.head.appendChild($favicon);
	  }
	};
	/**
	 * @description: 获取地址栏的参数
	 */

	var getAllQueryString = function getAllQueryString(url) {
	  var r = {};

	  var _url = url || window.location.href;

	  if (_url.split('?')[1]) {
	    var str = _url.split('?')[1];

	    str = str.split('&');
	    str.forEach(function (item) {
	      var key = item.split('=')[0];
	      var val = item.split('=')[1];
	      r[key] = decodeURIComponent(val);
	    });
	  }

	  return r;
	};
	/**
	 * @description: 数字转化为中文数字
	 */

	var converToChinaNum = function converToChinaNum(num) {
	  var arr1 = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九');
	  var arr2 = new Array('', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万', '十', '百', '千', '亿'); //可继续追加更高位转换值

	  if (!num || isNaN(num)) {
	    return '零';
	  }

	  var english = num.toString().split('');
	  var result = '';

	  for (var i = 0; i < english.length; i++) {
	    var des_i = english.length - 1 - i; //倒序排列设值

	    result = arr2[i] + result;
	    var arr1_index = english[des_i];
	    result = arr1[arr1_index] + result;
	  } //将【零千、零百】换成【零】 【十零】换成【十】


	  result = result.replace(/零(千|百|十)/g, '零').replace(/十零/g, '十'); //合并中间多个零为一个零

	  result = result.replace(/零+/g, '零'); //将【零亿】换成【亿】【零万】换成【万】

	  result = result.replace(/零亿/g, '亿').replace(/零万/g, '万'); //将【亿万】换成【亿】

	  result = result.replace(/亿万/g, '亿'); //移除末尾的零

	  result = result.replace(/零+$/, ''); //将【零一十】换成【零十】
	  //result = result.replace(/零一十/g, '零十');//貌似正规读法是零一十
	  //将【一十】换成【十】

	  result = result.replace(/^一十/g, '十');
	  return result;
	};
	/**
	 * @description: 清除空格和换行
	 */

	var clearBr = function clearBr() {
	  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  if (str.length === 0) return '';
	  return str.replace(/\s+/g, '').replace(/<\/?.+?>/g, '').replace(/[\r\n]/g, '');
	};
	/**
	 * 动态插入script/link标签
	 * @param {Array | String} url script/link的url队列
	 * @param {Element} appendee 插入的父元素 默认body
	 * @param {Function} callback 所有script onload回调 也可通过返回的promise执行回调
	 */

	var scriptOnLoad = function scriptOnLoad(urls, appendee, callback) {
	  urls = Array.isArray(urls) ? urls : [urls];
	  var array = urls.map(function (src) {
	    var cssReg = /\w*.css$/;
	    var script;

	    if (cssReg.test(src)) {
	      var link = document.createElement('link');
	      link.type = 'text/css';
	      link.rel = 'stylesheet';
	      link.href = src;
	      script = link;
	    } else {
	      script = document.createElement('script');
	      script.type = 'text/javascript';
	      script.src = src;
	    }

	    var bodyElement = document.getElementsByTagName('body')[0];
	    var currentAppendee = appendee || bodyElement;
	    currentAppendee.appendChild(script);
	    return new Promise(function (resolve) {
	      script.onload = function () {
	        resolve();
	      };
	    });
	  });
	  return new Promise(function (resolve) {
	    Promise.all(array).then(function () {
	      if (typeof callback === 'function') {
	        callback();
	      }

	      resolve();
	    });
	  });
	};
	/**
	 * @description: 是否是移动端
	 */

	var isMobile = function isMobile() {
	  var ua = window.navigator.userAgent;

	  if (/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(ua)) {
	    return true;
	  }

	  return false;
	};
	/**
	 * @description: 跨浏览器获取可视窗口大小
	 */

	var getWindow = function getWindow() {
	  if (typeof window.innerWidth !== 'undefined') {
	    return {
	      width: window.innerWidth,
	      height: window.innerHeight
	    };
	  }

	  return {
	    width: document.documentElement.clientWidth,
	    height: document.documentElement.clientHeight
	  };
	};
	/**
	 * @description: 禁止用户缩放
	 */

	var prohibit = function prohibit() {
	  var meta = document.createElement('meta');
	  meta.name = 'viewport';
	  meta.content = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no';
	  document.getElementsByTagName('head')[0].appendChild(meta);
	};
	/**
	 * @description: 添加tdk
	 */

	var tdk = function tdk(name, content) {
	  var meta = document.createElement('meta');
	  meta.name = name;
	  meta.content = content;
	  document.getElementsByTagName('head')[0].appendChild(meta);
	};
	/**
	 * @description: 获取指定的cookie
	 */

	var getCookie = function getCookie(objName) {
	  var arrStr = document.cookie.split('; ');

	  for (var i = 0; i < arrStr.length; i++) {
	    var item = arrStr[i].split('=');

	    if (item[0] == objName) {
	      return unescape(item[1]);
	    }
	  }

	  return '';
	};
	/**
	 * @description: 打印中间产生的值
	 */

	var log = function log(v) {
	  console.log(v);
	  return v;
	};
	/**
	 * @description: 函数的组合
	 * @param {array} args
	 */

	var compose = function compose() {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return function (value) {
	    return args.reverse().reduce(function (acc, fn) {
	      return fn(acc);
	    }, value);
	  };
	}; //如果是表达式赋值的话，不会变量提升

	/**
	 * @description: 函数的柯里化
	 * @param {*} func
	 */

	function curry(func) {
	  return function curriedFn() {
	    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    if (args.length < func.length) {
	      return function () {
	        return curriedFn.apply(void 0, _toConsumableArray(args.concat(Array.form(arguments))));
	      };
	    } else {
	      return func.apply(void 0, args);
	    }
	  };
	}
	/**
	 * @description: 函数的缓存
	 * @param {*} fn
	 */

	function memoize(fn) {
	  var cache = {};
	  return function () {
	    var key = JSON.stringfy(arguments);
	    cache[key] = cache[key] || fn.apply(fn, arguments);
	    return cache[key];
	  };
	}
	/**
	 * @description: 移动端的toast
	 * @param {*} msg
	 * @param {*} duration
	 */

	function toast(msg) {
	  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
	  duration = Number.isNaN(duration) ? 3000 : duration;
	  var m = document.createElement('div');
	  m.innerHTML = msg;
	  m.style.cssText = 'max-width:60%;min-width: 150px;padding:0 14px;min-height: 40px;color: rgb(255, 255, 255);line-height: 150%;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 14px;';
	  document.body.appendChild(m);
	  setTimeout(function () {
	    var d = 0.5;
	    m.style.webkitTransition = "-webkit-transform ".concat(d, "s ease-in, opacity ").concat(d, "s ease-in");
	    m.style.opacity = '0';
	    setTimeout(function () {
	      document.body.removeChild(m);
	    }, d * 1000);
	  }, duration);
	}

	exports.canvasToImage = canvasToImage;
	exports.changeFavicon = changeFavicon;
	exports.clearBr = clearBr;
	exports.compose = compose;
	exports.converToChinaNum = converToChinaNum;
	exports.curry = curry;
	exports.getAllQueryString = getAllQueryString;
	exports.getCookie = getCookie;
	exports.getWindow = getWindow;
	exports.isMobile = isMobile;
	exports.isWeiXin = isWeiXin;
	exports.judgeDevice = judgeDevice;
	exports.log = log;
	exports.memoize = memoize;
	exports.prohibit = prohibit;
	exports.scriptOnLoad = scriptOnLoad;
	exports.tdk = tdk;
	exports.toast = toast;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bundle.js.map
