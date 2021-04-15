/*global jQuery, console, opera */
/*jslint plusplus: true */

var MSF = MSF || {};
(function ($) {
	'use strict';
	function flattenObject(input, output, prefix, includeNulls) {
		var propertyName, inputType, value;
		if ($.isPlainObject(input)) {
			for (propertyName in input) {
				if (includeNulls === true || (typeof (input[propertyName]) !== "undefined" && input[propertyName] !== null)) {
					flattenObject(input[propertyName], output, prefix.length > 0 ? prefix + "." + propertyName : propertyName, includeNulls);
				}
			}
		}
		else {
			if ($.isArray(input)) {
				$.each(input, function (index, value) {
					flattenObject(value, output, prefix + '[' + index + ']');
				});
				return;
			}
			if (!$.isFunction(input)) {
				inputType = typeof (input);
				switch (inputType) {
					case "boolean":
					case "number":
						value = input;
						break;
					case "object":
						if (input instanceof Date) {
							value = input.toUTCString();
							break;
						}
						// probably null, non-null object types are processed above
						if (includeNulls !== true) {
							return;
						}
						break;
					default:
						value = input || "";
				}
				//output.push({ name: prefix, value: val });
				output.push('<input type="hidden" name="' + prefix + '" value="' + value + '" />');
			}
		}
	}

	MSF.Utilities = {
		namespace: function (nsString) {
			var parts = nsString.split('.'),
					parent = MSF,
					i;

			// strip redundant leading global
			if (parts[0] === "MSF") {
				parts = parts.slice(1);
			}

			for (i = 0; i < parts.length; i += 1) {
				// create a property if it doesn't exist
				if (typeof parent[parts[i]] === "undefined") {
					parent[parts[i]] = {};
				}
				parent = parent[parts[i]];
			}
			return parent;
		},
		escapeHtml: function (str) {
			return String(str)
				.replace(/&/g, '&amp;')
				.replace(/"/g, '&quot;')
				.replace(/'/g, '&#39;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;');
		},
		getQueryStringValue: function (param) {
			return this.getQueryStringValues()[param];
		},
		getQueryStringValues: function (url) {
			if (!url) {
				url = window.location.search;
			}

			var b, i, p, qs = url.slice(url.indexOf('?') + 1).split('&');
			if (qs === "") {
				return {};
			}
			b = {};
			for (i = 0; i < qs.length; ++i) {
				p = qs[i].split('=');
				if (p.length !== 2) {
					continue;
				}
				b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
			}
			return b;
		},
		parseKeyValueString: function (val) {
			var hash = {},
				pieces = val.split('&'),
				i,
				pair;

			for (i = 0; i < pieces.length; i += 1) {
				pair = pieces[i].split('=');
				hash[pair[0]] = pair[1];
			}

			return hash;
		},
		serializeKeyValues : function(queryStringValues) {
			var pairs = [],
				key;
			if (queryStringValues) {
				for (key in queryStringValues) {
					if (queryStringValues.hasOwnProperty(key)) {
						pairs.push(key + '=' + queryStringValues[key]);
					}
				}
				return pairs.join('&');
			}
			return null;
		},
		createCookie: function (name, value, days, path, domain) {
			var date = new Date(),
				expiresNVP, domainNVP, pathNVP,
				val = value;
			if (typeof days !== 'undefined' && days !== null) {
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				expiresNVP = '; expires=' + date.toGMTString();
			}
			else {
				expiresNVP = '';
			}
			if (typeof path !== 'undefined') {
				pathNVP = '; path=' + path;
			}
			else {
				pathNVP = '; path=/';
			}
			if (typeof domain !== 'undefined') {
				domainNVP = '; domain=' + domain;
			}
			else {
				domainNVP = '';
			}
			if ($.isArray(value) || $.isPlainObject(value)) {
				val = this.serializeKeyValues(value);
			}
			document.cookie = name + "=" + val + expiresNVP + pathNVP + domainNVP;
		},
		readCookie: function (name) {
			var nameEQ = name + "=",
				ca = document.cookie.split(';'),
				i, c, val;

			for (i = 0; i < ca.length; i += 1) {
				c = ca[i];
				while (c.charAt(0) === ' ') {
					c = c.substring(1, c.length);
				}
				if (c.indexOf(nameEQ) === 0) {
					val = c.substring(nameEQ.length, c.length);

					if (val.indexOf('&') !== -1) {
						return this.parseKeyValueString(val);
					}

					if (val.indexOf('{') !== -1) {
						return $.parseJSON(val);
					}

					return val;
				}
			}
			return null;
		},
		removeCookie: function (name, multihost) {
			var hostname = document.location.hostname,
				position = hostname.indexOf(".");
			if (multihost && position !== -1) {
				while (position !== -1) {
				    MSF.Utilities.createCookie(name, '', -1, '/', hostname);
					hostname = hostname.substring(position + 1);
					position = hostname.indexOf(".");
				}
				return;
			}
			MSF.Utilities.createCookie(name, '', -1);
		},
		escapeAttributeValue: function (value) {
			// As mentioned on http://api.jquery.com/category/selectors/
			return value.replace(/([!"#$%&'()*+,.\/:;<=>?@\[\\\]\^`{|}~])/g, "\\$1");
		},
		createSubstringMatcher: function (stringsArray) {
			return function findMatches(query, resultsCallback) {
				var testRegex = new RegExp(query, 'i'),
					matches = [];
				$.each(stringsArray, function (i, str) {
					if (testRegex.test(str)) {
						matches.push(str);
					}
				});
				resultsCallback(matches);
			};
		},
		log: function () {
			try {
				console.log.apply(console, arguments);
			}
			catch (ea) {
				try {
					opera.postError.apply(opera, arguments);
				}
				catch (eb) {
					if ((window.console) && (window.console.firebug !== '')) {
						console.log(console, arguments);
					}
				}
			}
		},
		logError: function () {
			try {
				console.error.apply(console, arguments);
			}
			catch (ea) {
				try {
					opera.postError.apply(opera, arguments);
				}
				catch (eb) {
					if ((window.console) && (window.console.firebug !== '')) {
						console.log(console, arguments);
					}
				}
			}
		},
		url: function (src) {
		    var url = '/ual/' + MSF.AppData.Data.Session.LanguageCulture + '/' + MSF.AppData.Data.Session.POS + '/' + src;
			return url.toLowerCase();
		},
		updateSecuCookieData: function (response) {
			var crisp = $(response).find('#CoookieCrisp'),
				cval, params, name, exp;

			if (crisp.length > 0) {
				$(crisp).find('input').each(function () {
					cval = $(this).val();
					params = MSF.Utilities.parseKeyValueString(cval);
					if ($(this).data('text')) {
						params = cval;
					}
					name = $(this).attr('name');
					exp = $(this).data('exp');
					if (exp) {
						exp = parseInt(exp, 10);
					}

					MSF.Utilities.createCookie(name, params, exp);
				});
			}
			//$(crisp).html('');
		},
		removeSecuData: function () {
		    //MSF.Utilities.removeCookie("User", true);
			//MSF.Utilities.removeCookie("Session", true);
			//MSF.Utilities.removeCookie("uasession", true);
		},
		normalizeLangCode: function (langCode) {
			if (typeof langCode === 'undefined' || langCode === null) {
				return "en-US";
			}
			switch (langCode.toLowerCase()) {
				case "de-de":
					langCode = "de-DE";
					break;
				case "zh-cn":
					langCode = "zh-CN";
					break;
				case "fr":
					langCode = "fr";
					break;
				case "es":
					langCode = "es";
					break;
				case "ja-jp":
					langCode = "ja-JP";
					break;
				case "pt":
					langCode = "pt";
					break;
				case "ko":
					langCode = "ko";
					break;
				case "zh-hk":
					langCode = "zh-HK";
					break;
				default:
					langCode = "en-US";
			}
			return langCode;
		},
		normalizeDateFormatGroup: function (groupCode) {
			if (typeof groupCode === 'undefined' || groupCode === null) {
				return "MonthFirst";
			}
			switch (groupCode.toLowerCase()) {
				case "dayfirst":
					groupCode = "DayFirst";
					break;
				case "yearfirst":
					groupCode = "YearFirst";
					break;
				default:
					groupCode = "MonthFirst";
			}
			return groupCode;
		},
		isInViewport: function (element) {
			if (element instanceof $) {
				element = element[0];
			}
			var rect = element.getBoundingClientRect();
			return (
				rect.top >= 0 && rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
		},
		hasScroll: function(container){
			return container.outerHeight() < container.prop("scrollHeight");
		},
		scrollIntoView: function(item, scrollContainer){
			var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
			if (scrollContainer.length > 0 && this.hasScroll(scrollContainer)) {
				borderTop = parseFloat($.css(scrollContainer[0], "borderTopWidth")) || 0;
				paddingTop = parseFloat($.css(scrollContainer[0], "paddingTop")) || 0;
				offset = item.offset().top - scrollContainer.offset().top - borderTop - paddingTop;
				scroll = scrollContainer.scrollTop();
				elementHeight = scrollContainer.height();
				itemHeight = item.outerHeight();
				if (offset < 0) {
					scrollContainer.scrollTop(scroll + offset);
				} else if (offset + itemHeight > elementHeight) {
					scrollContainer.scrollTop(scroll + offset - elementHeight + itemHeight);
				}
			}
		},
		scrollTo: function (element, animate, container) {
			if (!(element instanceof $)) {
				element = $(element);
			}

			if (container && !(container instanceof $)) {
				container = $(container);
			}

			if (container.length > 0) {
				container.animate({
					//scrollTop: element.position().top
					scrollTop: element.offset().top - container.offset().top + container.scrollTop()
				}, animate || 0);
				return;
			}

			$('html,body').animate({
				scrollTop: element.offset().top
			}, animate || 0);
		}, 
		returnPrevious: function () {
			$(document).on('click', '#return-previous', function (e) {
				parent.history.back();
				return false;
			});
		},
		constrainFocus: function (event, container) {
			if (container && !(container instanceof $)) {
				container = $(container);
			}
			var tabbables = container.find(":tabbable"),
				first = tabbables.filter(":first"),
				last = tabbables.filter(":last");
			if ((event.target === last[0] || event.target === container) && !event.shiftKey) {
				setTimeout(function () {
					first.focus();
				});
				event.preventDefault();
			}
			else if ((event.target === first[0] || event.target === container) && event.shiftKey) {
				setTimeout(function () {
					last.focus();
				});
				event.preventDefault();
			}
		},
		revealDialog: function (dialog, callback) {
			dialog.overlay.fadeIn(100);
			dialog.container.fadeIn(100);
			dialog.data.fadeIn(100, callback);
		},
		assembleForm: function (object, action, method) {
			var form, inputs = [], prefix = '', includeNulls = false;
			if (typeof action === 'undefined' || action === null) {
				action = '';
			}
			if (typeof method === 'undefined' || method === null) {
				method = 'post';
			}
			if (object) {
				flattenObject(object, inputs, prefix || '', includeNulls);
				form = '<form method="' + method + '"' + ' action="' + action + '">' + inputs.join('') + '</form>';
			}
			return form;
		},
		loadScriptCallback: function (scriptUrl, callbackFunction) {
			var index, newScriptElement, testURL,
				scriptElements = document.getElementsByTagName("script"),
				firstScriptElement = scriptElements[0];
			newScriptElement = document.createElement("script");
			newScriptElement.type = "text/javascript";
			//normalize Url
			newScriptElement.src = scriptUrl;
			testURL = newScriptElement.src;
			// test if script has been previously loaded
			for (index = 0; index < scriptElements.length; index += 1) {
				if (scriptElements[index].src === testURL) {
					if (scriptElements[index].readyState && /loaded|complete/.test(scriptElements[index].readyState)) {
						try {
							callbackFunction();
						}
						catch (errorA) {
							//swallow
						}
						finally {
							return;
						}
					}
				}
			}
			newScriptElement.async = true;
			newScriptElement.onerror = function () {
				if (this.addEventListener) {
					try {
						this.readyState = "loaded";
					}
					catch (errorB) {
						//swallow
					}
				}
			};
			newScriptElement.onload = newScriptElement.onreadystatechange = function () {
				if (!this.readyState || "complete" === this.readyState || "loaded" === this.readyState) {
					this.onload = this.onreadystatechange = null;
					if (this.addEventListener) {
						try {
							this.readyState = "loaded";
						}
						catch (errorC) {
							//swallow
						}
					}
					try {
						callbackFunction.call(this);
					}
					catch (errorD) {
						//swallow
					}
				}
			};
			firstScriptElement.parentNode.insertBefore(newScriptElement, firstScriptElement);
		},
		encrypt: function (key, input) {
			var crypted = null,
				pubkey = RSA.getPublicKey(key);
			
			if (input) {
				crypted = RSA.encrypt(input, pubkey);
			}

			return crypted;
		},
		generateHash: function (url) {

			return $.ajax({
				type: "GET",
				url: url
			});
		}
	};
	if (!String.prototype.format) {
		String.prototype.format = function () {
			var args = arguments;
			return this.replace(/\{(\d+)\}/g, function (match, number) {
				return typeof args[number] !== 'undefined'
					? args[number]
					: match
				;
			});
		};
	}
}(jQuery));