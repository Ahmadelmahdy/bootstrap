(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('popper.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', 'popper.js', './util.js'], factory) :
  (global.Tooltip = factory(global.jQuery,global.Popper,global.Util));
}(this, (function ($,Popper,Util) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;
  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

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

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var cov_2fq140ojp5 = function () {
    var path = "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/tooltip.js",
        hash = "492d53bf073b009b27ee891b7c55444fc597d5df",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/tooltip.js",
      statementMap: {
        "0": {
          start: {
            line: 12,
            column: 16
          },
          end: {
            line: 724,
            column: 13
          }
        },
        "1": {
          start: {
            line: 19,
            column: 29
          },
          end: {
            line: 19,
            column: 38
          }
        },
        "2": {
          start: {
            line: 20,
            column: 29
          },
          end: {
            line: 20,
            column: 36
          }
        },
        "3": {
          start: {
            line: 21,
            column: 29
          },
          end: {
            line: 21,
            column: 41
          }
        },
        "4": {
          start: {
            line: 22,
            column: 29
          },
          end: {
            line: 22,
            column: 43
          }
        },
        "5": {
          start: {
            line: 23,
            column: 29
          },
          end: {
            line: 23,
            column: 39
          }
        },
        "6": {
          start: {
            line: 24,
            column: 29
          },
          end: {
            line: 24,
            column: 41
          }
        },
        "7": {
          start: {
            line: 25,
            column: 29
          },
          end: {
            line: 25,
            column: 74
          }
        },
        "8": {
          start: {
            line: 26,
            column: 30
          },
          end: {
            line: 26,
            column: 68
          }
        },
        "9": {
          start: {
            line: 28,
            column: 22
          },
          end: {
            line: 41,
            column: 3
          }
        },
        "10": {
          start: {
            line: 43,
            column: 24
          },
          end: {
            line: 49,
            column: 3
          }
        },
        "11": {
          start: {
            line: 51,
            column: 18
          },
          end: {
            line: 66,
            column: 3
          }
        },
        "12": {
          start: {
            line: 68,
            column: 21
          },
          end: {
            line: 71,
            column: 3
          }
        },
        "13": {
          start: {
            line: 73,
            column: 16
          },
          end: {
            line: 84,
            column: 3
          }
        },
        "14": {
          start: {
            line: 86,
            column: 20
          },
          end: {
            line: 89,
            column: 3
          }
        },
        "15": {
          start: {
            line: 91,
            column: 19
          },
          end: {
            line: 95,
            column: 3
          }
        },
        "16": {
          start: {
            line: 97,
            column: 18
          },
          end: {
            line: 102,
            column: 3
          }
        },
        "17": {
          start: {
            line: 117,
            column: 6
          },
          end: {
            line: 119,
            column: 7
          }
        },
        "18": {
          start: {
            line: 118,
            column: 8
          },
          end: {
            line: 118,
            column: 91
          }
        },
        "19": {
          start: {
            line: 122,
            column: 6
          },
          end: {
            line: 122,
            column: 32
          }
        },
        "20": {
          start: {
            line: 123,
            column: 6
          },
          end: {
            line: 123,
            column: 29
          }
        },
        "21": {
          start: {
            line: 124,
            column: 6
          },
          end: {
            line: 124,
            column: 30
          }
        },
        "22": {
          start: {
            line: 125,
            column: 6
          },
          end: {
            line: 125,
            column: 30
          }
        },
        "23": {
          start: {
            line: 126,
            column: 6
          },
          end: {
            line: 126,
            column: 32
          }
        },
        "24": {
          start: {
            line: 129,
            column: 6
          },
          end: {
            line: 129,
            column: 28
          }
        },
        "25": {
          start: {
            line: 130,
            column: 6
          },
          end: {
            line: 130,
            column: 44
          }
        },
        "26": {
          start: {
            line: 131,
            column: 6
          },
          end: {
            line: 131,
            column: 25
          }
        },
        "27": {
          start: {
            line: 133,
            column: 6
          },
          end: {
            line: 133,
            column: 26
          }
        },
        "28": {
          start: {
            line: 139,
            column: 6
          },
          end: {
            line: 139,
            column: 20
          }
        },
        "29": {
          start: {
            line: 143,
            column: 6
          },
          end: {
            line: 143,
            column: 20
          }
        },
        "30": {
          start: {
            line: 147,
            column: 6
          },
          end: {
            line: 147,
            column: 17
          }
        },
        "31": {
          start: {
            line: 151,
            column: 6
          },
          end: {
            line: 151,
            column: 21
          }
        },
        "32": {
          start: {
            line: 155,
            column: 6
          },
          end: {
            line: 155,
            column: 18
          }
        },
        "33": {
          start: {
            line: 159,
            column: 6
          },
          end: {
            line: 159,
            column: 22
          }
        },
        "34": {
          start: {
            line: 163,
            column: 6
          },
          end: {
            line: 163,
            column: 24
          }
        },
        "35": {
          start: {
            line: 169,
            column: 6
          },
          end: {
            line: 169,
            column: 28
          }
        },
        "36": {
          start: {
            line: 173,
            column: 6
          },
          end: {
            line: 173,
            column: 29
          }
        },
        "37": {
          start: {
            line: 177,
            column: 6
          },
          end: {
            line: 177,
            column: 40
          }
        },
        "38": {
          start: {
            line: 181,
            column: 6
          },
          end: {
            line: 183,
            column: 7
          }
        },
        "39": {
          start: {
            line: 182,
            column: 8
          },
          end: {
            line: 182,
            column: 14
          }
        },
        "40": {
          start: {
            line: 185,
            column: 6
          },
          end: {
            line: 211,
            column: 7
          }
        },
        "41": {
          start: {
            line: 186,
            column: 24
          },
          end: {
            line: 186,
            column: 49
          }
        },
        "42": {
          start: {
            line: 187,
            column: 22
          },
          end: {
            line: 187,
            column: 58
          }
        },
        "43": {
          start: {
            line: 189,
            column: 8
          },
          end: {
            line: 195,
            column: 9
          }
        },
        "44": {
          start: {
            line: 190,
            column: 10
          },
          end: {
            line: 193,
            column: 11
          }
        },
        "45": {
          start: {
            line: 194,
            column: 10
          },
          end: {
            line: 194,
            column: 55
          }
        },
        "46": {
          start: {
            line: 197,
            column: 8
          },
          end: {
            line: 197,
            column: 68
          }
        },
        "47": {
          start: {
            line: 199,
            column: 8
          },
          end: {
            line: 203,
            column: 9
          }
        },
        "48": {
          start: {
            line: 200,
            column: 10
          },
          end: {
            line: 200,
            column: 39
          }
        },
        "49": {
          start: {
            line: 202,
            column: 10
          },
          end: {
            line: 202,
            column: 39
          }
        },
        "50": {
          start: {
            line: 205,
            column: 8
          },
          end: {
            line: 208,
            column: 9
          }
        },
        "51": {
          start: {
            line: 206,
            column: 10
          },
          end: {
            line: 206,
            column: 33
          }
        },
        "52": {
          start: {
            line: 207,
            column: 10
          },
          end: {
            line: 207,
            column: 16
          }
        },
        "53": {
          start: {
            line: 210,
            column: 8
          },
          end: {
            line: 210,
            column: 31
          }
        },
        "54": {
          start: {
            line: 215,
            column: 6
          },
          end: {
            line: 215,
            column: 33
          }
        },
        "55": {
          start: {
            line: 217,
            column: 6
          },
          end: {
            line: 217,
            column: 59
          }
        },
        "56": {
          start: {
            line: 219,
            column: 6
          },
          end: {
            line: 219,
            column: 53
          }
        },
        "57": {
          start: {
            line: 220,
            column: 6
          },
          end: {
            line: 220,
            column: 60
          }
        },
        "58": {
          start: {
            line: 222,
            column: 6
          },
          end: {
            line: 224,
            column: 7
          }
        },
        "59": {
          start: {
            line: 223,
            column: 8
          },
          end: {
            line: 223,
            column: 28
          }
        },
        "60": {
          start: {
            line: 226,
            column: 6
          },
          end: {
            line: 226,
            column: 32
          }
        },
        "61": {
          start: {
            line: 227,
            column: 6
          },
          end: {
            line: 227,
            column: 32
          }
        },
        "62": {
          start: {
            line: 228,
            column: 6
          },
          end: {
            line: 228,
            column: 32
          }
        },
        "63": {
          start: {
            line: 229,
            column: 6
          },
          end: {
            line: 229,
            column: 32
          }
        },
        "64": {
          start: {
            line: 230,
            column: 6
          },
          end: {
            line: 232,
            column: 7
          }
        },
        "65": {
          start: {
            line: 231,
            column: 8
          },
          end: {
            line: 231,
            column: 30
          }
        },
        "66": {
          start: {
            line: 234,
            column: 6
          },
          end: {
            line: 234,
            column: 25
          }
        },
        "67": {
          start: {
            line: 235,
            column: 6
          },
          end: {
            line: 235,
            column: 25
          }
        },
        "68": {
          start: {
            line: 236,
            column: 6
          },
          end: {
            line: 236,
            column: 25
          }
        },
        "69": {
          start: {
            line: 237,
            column: 6
          },
          end: {
            line: 237,
            column: 25
          }
        },
        "70": {
          start: {
            line: 241,
            column: 6
          },
          end: {
            line: 243,
            column: 7
          }
        },
        "71": {
          start: {
            line: 242,
            column: 8
          },
          end: {
            line: 242,
            column: 62
          }
        },
        "72": {
          start: {
            line: 245,
            column: 24
          },
          end: {
            line: 245,
            column: 60
          }
        },
        "73": {
          start: {
            line: 246,
            column: 6
          },
          end: {
            line: 346,
            column: 7
          }
        },
        "74": {
          start: {
            line: 247,
            column: 8
          },
          end: {
            line: 247,
            column: 42
          }
        },
        "75": {
          start: {
            line: 249,
            column: 27
          },
          end: {
            line: 252,
            column: 9
          }
        },
        "76": {
          start: {
            line: 254,
            column: 8
          },
          end: {
            line: 256,
            column: 9
          }
        },
        "77": {
          start: {
            line: 255,
            column: 10
          },
          end: {
            line: 255,
            column: 16
          }
        },
        "78": {
          start: {
            line: 258,
            column: 22
          },
          end: {
            line: 258,
            column: 42
          }
        },
        "79": {
          start: {
            line: 259,
            column: 22
          },
          end: {
            line: 259,
            column: 56
          }
        },
        "80": {
          start: {
            line: 261,
            column: 8
          },
          end: {
            line: 261,
            column: 37
          }
        },
        "81": {
          start: {
            line: 262,
            column: 8
          },
          end: {
            line: 262,
            column: 60
          }
        },
        "82": {
          start: {
            line: 264,
            column: 8
          },
          end: {
            line: 264,
            column: 25
          }
        },
        "83": {
          start: {
            line: 266,
            column: 8
          },
          end: {
            line: 268,
            column: 9
          }
        },
        "84": {
          start: {
            line: 267,
            column: 10
          },
          end: {
            line: 267,
            column: 41
          }
        },
        "85": {
          start: {
            line: 270,
            column: 27
          },
          end: {
            line: 272,
            column: 33
          }
        },
        "86": {
          start: {
            line: 274,
            column: 27
          },
          end: {
            line: 274,
            column: 57
          }
        },
        "87": {
          start: {
            line: 275,
            column: 8
          },
          end: {
            line: 275,
            column: 43
          }
        },
        "88": {
          start: {
            line: 277,
            column: 26
          },
          end: {
            line: 277,
            column: 115
          }
        },
        "89": {
          start: {
            line: 279,
            column: 8
          },
          end: {
            line: 279,
            column: 52
          }
        },
        "90": {
          start: {
            line: 281,
            column: 8
          },
          end: {
            line: 283,
            column: 9
          }
        },
        "91": {
          start: {
            line: 282,
            column: 10
          },
          end: {
            line: 282,
            column: 36
          }
        },
        "92": {
          start: {
            line: 285,
            column: 8
          },
          end: {
            line: 285,
            column: 64
          }
        },
        "93": {
          start: {
            line: 287,
            column: 8
          },
          end: {
            line: 311,
            column: 10
          }
        },
        "94": {
          start: {
            line: 304,
            column: 12
          },
          end: {
            line: 306,
            column: 13
          }
        },
        "95": {
          start: {
            line: 305,
            column: 14
          },
          end: {
            line: 305,
            column: 53
          }
        },
        "96": {
          start: {
            line: 309,
            column: 12
          },
          end: {
            line: 309,
            column: 51
          }
        },
        "97": {
          start: {
            line: 313,
            column: 8
          },
          end: {
            line: 313,
            column: 39
          }
        },
        "98": {
          start: {
            line: 319,
            column: 8
          },
          end: {
            line: 321,
            column: 9
          }
        },
        "99": {
          start: {
            line: 320,
            column: 10
          },
          end: {
            line: 320,
            column: 67
          }
        },
        "100": {
          start: {
            line: 323,
            column: 25
          },
          end: {
            line: 335,
            column: 9
          }
        },
        "101": {
          start: {
            line: 324,
            column: 10
          },
          end: {
            line: 326,
            column: 11
          }
        },
        "102": {
          start: {
            line: 325,
            column: 12
          },
          end: {
            line: 325,
            column: 33
          }
        },
        "103": {
          start: {
            line: 327,
            column: 33
          },
          end: {
            line: 327,
            column: 49
          }
        },
        "104": {
          start: {
            line: 328,
            column: 10
          },
          end: {
            line: 328,
            column: 37
          }
        },
        "105": {
          start: {
            line: 330,
            column: 10
          },
          end: {
            line: 330,
            column: 63
          }
        },
        "106": {
          start: {
            line: 332,
            column: 10
          },
          end: {
            line: 334,
            column: 11
          }
        },
        "107": {
          start: {
            line: 333,
            column: 12
          },
          end: {
            line: 333,
            column: 35
          }
        },
        "108": {
          start: {
            line: 337,
            column: 8
          },
          end: {
            line: 345,
            column: 9
          }
        },
        "109": {
          start: {
            line: 338,
            column: 37
          },
          end: {
            line: 338,
            column: 84
          }
        },
        "110": {
          start: {
            line: 340,
            column: 10
          },
          end: {
            line: 342,
            column: 53
          }
        },
        "111": {
          start: {
            line: 344,
            column: 10
          },
          end: {
            line: 344,
            column: 20
          }
        },
        "112": {
          start: {
            line: 350,
            column: 24
          },
          end: {
            line: 350,
            column: 44
          }
        },
        "113": {
          start: {
            line: 351,
            column: 24
          },
          end: {
            line: 351,
            column: 60
          }
        },
        "114": {
          start: {
            line: 352,
            column: 23
          },
          end: {
            line: 367,
            column: 7
          }
        },
        "115": {
          start: {
            line: 353,
            column: 8
          },
          end: {
            line: 355,
            column: 9
          }
        },
        "116": {
          start: {
            line: 354,
            column: 10
          },
          end: {
            line: 354,
            column: 41
          }
        },
        "117": {
          start: {
            line: 357,
            column: 8
          },
          end: {
            line: 357,
            column: 29
          }
        },
        "118": {
          start: {
            line: 358,
            column: 8
          },
          end: {
            line: 358,
            column: 56
          }
        },
        "119": {
          start: {
            line: 359,
            column: 8
          },
          end: {
            line: 359,
            column: 62
          }
        },
        "120": {
          start: {
            line: 360,
            column: 8
          },
          end: {
            line: 362,
            column: 9
          }
        },
        "121": {
          start: {
            line: 361,
            column: 10
          },
          end: {
            line: 361,
            column: 32
          }
        },
        "122": {
          start: {
            line: 364,
            column: 8
          },
          end: {
            line: 366,
            column: 9
          }
        },
        "123": {
          start: {
            line: 365,
            column: 10
          },
          end: {
            line: 365,
            column: 20
          }
        },
        "124": {
          start: {
            line: 369,
            column: 6
          },
          end: {
            line: 369,
            column: 40
          }
        },
        "125": {
          start: {
            line: 371,
            column: 6
          },
          end: {
            line: 373,
            column: 7
          }
        },
        "126": {
          start: {
            line: 372,
            column: 8
          },
          end: {
            line: 372,
            column: 14
          }
        },
        "127": {
          start: {
            line: 375,
            column: 6
          },
          end: {
            line: 375,
            column: 40
          }
        },
        "128": {
          start: {
            line: 379,
            column: 6
          },
          end: {
            line: 381,
            column: 7
          }
        },
        "129": {
          start: {
            line: 380,
            column: 8
          },
          end: {
            line: 380,
            column: 66
          }
        },
        "130": {
          start: {
            line: 383,
            column: 6
          },
          end: {
            line: 383,
            column: 48
          }
        },
        "131": {
          start: {
            line: 384,
            column: 6
          },
          end: {
            line: 384,
            column: 48
          }
        },
        "132": {
          start: {
            line: 385,
            column: 6
          },
          end: {
            line: 385,
            column: 48
          }
        },
        "133": {
          start: {
            line: 387,
            column: 6
          },
          end: {
            line: 395,
            column: 7
          }
        },
        "134": {
          start: {
            line: 388,
            column: 35
          },
          end: {
            line: 388,
            column: 77
          }
        },
        "135": {
          start: {
            line: 390,
            column: 8
          },
          end: {
            line: 392,
            column: 51
          }
        },
        "136": {
          start: {
            line: 394,
            column: 8
          },
          end: {
            line: 394,
            column: 18
          }
        },
        "137": {
          start: {
            line: 397,
            column: 6
          },
          end: {
            line: 397,
            column: 27
          }
        },
        "138": {
          start: {
            line: 401,
            column: 6
          },
          end: {
            line: 403,
            column: 7
          }
        },
        "139": {
          start: {
            line: 402,
            column: 8
          },
          end: {
            line: 402,
            column: 37
          }
        },
        "140": {
          start: {
            line: 409,
            column: 6
          },
          end: {
            line: 409,
            column: 37
          }
        },
        "141": {
          start: {
            line: 413,
            column: 6
          },
          end: {
            line: 413,
            column: 71
          }
        },
        "142": {
          start: {
            line: 417,
            column: 6
          },
          end: {
            line: 417,
            column: 55
          }
        },
        "143": {
          start: {
            line: 418,
            column: 6
          },
          end: {
            line: 418,
            column: 21
          }
        },
        "144": {
          start: {
            line: 422,
            column: 18
          },
          end: {
            line: 422,
            column: 38
          }
        },
        "145": {
          start: {
            line: 423,
            column: 6
          },
          end: {
            line: 423,
            column: 94
          }
        },
        "146": {
          start: {
            line: 424,
            column: 6
          },
          end: {
            line: 424,
            column: 63
          }
        },
        "147": {
          start: {
            line: 428,
            column: 19
          },
          end: {
            line: 428,
            column: 35
          }
        },
        "148": {
          start: {
            line: 429,
            column: 6
          },
          end: {
            line: 440,
            column: 7
          }
        },
        "149": {
          start: {
            line: 431,
            column: 8
          },
          end: {
            line: 437,
            column: 9
          }
        },
        "150": {
          start: {
            line: 432,
            column: 10
          },
          end: {
            line: 434,
            column: 11
          }
        },
        "151": {
          start: {
            line: 433,
            column: 12
          },
          end: {
            line: 433,
            column: 44
          }
        },
        "152": {
          start: {
            line: 436,
            column: 10
          },
          end: {
            line: 436,
            column: 42
          }
        },
        "153": {
          start: {
            line: 439,
            column: 8
          },
          end: {
            line: 439,
            column: 49
          }
        },
        "154": {
          start: {
            line: 444,
            column: 18
          },
          end: {
            line: 444,
            column: 66
          }
        },
        "155": {
          start: {
            line: 446,
            column: 6
          },
          end: {
            line: 450,
            column: 7
          }
        },
        "156": {
          start: {
            line: 447,
            column: 8
          },
          end: {
            line: 449,
            column: 29
          }
        },
        "157": {
          start: {
            line: 452,
            column: 6
          },
          end: {
            line: 452,
            column: 18
          }
        },
        "158": {
          start: {
            line: 458,
            column: 6
          },
          end: {
            line: 458,
            column: 51
          }
        },
        "159": {
          start: {
            line: 462,
            column: 23
          },
          end: {
            line: 462,
            column: 53
          }
        },
        "160": {
          start: {
            line: 464,
            column: 6
          },
          end: {
            line: 496,
            column: 8
          }
        },
        "161": {
          start: {
            line: 465,
            column: 8
          },
          end: {
            line: 490,
            column: 9
          }
        },
        "162": {
          start: {
            line: 466,
            column: 10
          },
          end: {
            line: 470,
            column: 11
          }
        },
        "163": {
          start: {
            line: 469,
            column: 23
          },
          end: {
            line: 469,
            column: 41
          }
        },
        "164": {
          start: {
            line: 471,
            column: 15
          },
          end: {
            line: 490,
            column: 9
          }
        },
        "165": {
          start: {
            line: 472,
            column: 26
          },
          end: {
            line: 474,
            column: 44
          }
        },
        "166": {
          start: {
            line: 475,
            column: 27
          },
          end: {
            line: 477,
            column: 45
          }
        },
        "167": {
          start: {
            line: 479,
            column: 10
          },
          end: {
            line: 489,
            column: 13
          }
        },
        "168": {
          start: {
            line: 483,
            column: 25
          },
          end: {
            line: 483,
            column: 43
          }
        },
        "169": {
          start: {
            line: 488,
            column: 25
          },
          end: {
            line: 488,
            column: 43
          }
        },
        "170": {
          start: {
            line: 492,
            column: 8
          },
          end: {
            line: 495,
            column: 9
          }
        },
        "171": {
          start: {
            line: 494,
            column: 16
          },
          end: {
            line: 494,
            column: 27
          }
        },
        "172": {
          start: {
            line: 498,
            column: 6
          },
          end: {
            line: 506,
            column: 7
          }
        },
        "173": {
          start: {
            line: 499,
            column: 8
          },
          end: {
            line: 503,
            column: 9
          }
        },
        "174": {
          start: {
            line: 505,
            column: 8
          },
          end: {
            line: 505,
            column: 24
          }
        },
        "175": {
          start: {
            line: 510,
            column: 24
          },
          end: {
            line: 510,
            column: 79
          }
        },
        "176": {
          start: {
            line: 511,
            column: 6
          },
          end: {
            line: 518,
            column: 7
          }
        },
        "177": {
          start: {
            line: 513,
            column: 8
          },
          end: {
            line: 516,
            column: 9
          }
        },
        "178": {
          start: {
            line: 517,
            column: 8
          },
          end: {
            line: 517,
            column: 46
          }
        },
        "179": {
          start: {
            line: 522,
            column: 22
          },
          end: {
            line: 522,
            column: 47
          }
        },
        "180": {
          start: {
            line: 524,
            column: 6
          },
          end: {
            line: 524,
            column: 63
          }
        },
        "181": {
          start: {
            line: 526,
            column: 6
          },
          end: {
            line: 532,
            column: 7
          }
        },
        "182": {
          start: {
            line: 527,
            column: 8
          },
          end: {
            line: 530,
            column: 9
          }
        },
        "183": {
          start: {
            line: 531,
            column: 8
          },
          end: {
            line: 531,
            column: 53
          }
        },
        "184": {
          start: {
            line: 534,
            column: 6
          },
          end: {
            line: 538,
            column: 7
          }
        },
        "185": {
          start: {
            line: 535,
            column: 8
          },
          end: {
            line: 537,
            column: 16
          }
        },
        "186": {
          start: {
            line: 540,
            column: 6
          },
          end: {
            line: 544,
            column: 7
          }
        },
        "187": {
          start: {
            line: 542,
            column: 8
          },
          end: {
            line: 542,
            column: 45
          }
        },
        "188": {
          start: {
            line: 543,
            column: 8
          },
          end: {
            line: 543,
            column: 14
          }
        },
        "189": {
          start: {
            line: 546,
            column: 6
          },
          end: {
            line: 546,
            column: 36
          }
        },
        "190": {
          start: {
            line: 548,
            column: 6
          },
          end: {
            line: 548,
            column: 43
          }
        },
        "191": {
          start: {
            line: 550,
            column: 6
          },
          end: {
            line: 553,
            column: 7
          }
        },
        "192": {
          start: {
            line: 551,
            column: 8
          },
          end: {
            line: 551,
            column: 22
          }
        },
        "193": {
          start: {
            line: 552,
            column: 8
          },
          end: {
            line: 552,
            column: 14
          }
        },
        "194": {
          start: {
            line: 555,
            column: 6
          },
          end: {
            line: 559,
            column: 35
          }
        },
        "195": {
          start: {
            line: 556,
            column: 8
          },
          end: {
            line: 558,
            column: 9
          }
        },
        "196": {
          start: {
            line: 557,
            column: 10
          },
          end: {
            line: 557,
            column: 24
          }
        },
        "197": {
          start: {
            line: 563,
            column: 22
          },
          end: {
            line: 563,
            column: 47
          }
        },
        "198": {
          start: {
            line: 565,
            column: 6
          },
          end: {
            line: 565,
            column: 63
          }
        },
        "199": {
          start: {
            line: 567,
            column: 6
          },
          end: {
            line: 573,
            column: 7
          }
        },
        "200": {
          start: {
            line: 568,
            column: 8
          },
          end: {
            line: 571,
            column: 9
          }
        },
        "201": {
          start: {
            line: 572,
            column: 8
          },
          end: {
            line: 572,
            column: 53
          }
        },
        "202": {
          start: {
            line: 575,
            column: 6
          },
          end: {
            line: 579,
            column: 7
          }
        },
        "203": {
          start: {
            line: 576,
            column: 8
          },
          end: {
            line: 578,
            column: 17
          }
        },
        "204": {
          start: {
            line: 581,
            column: 6
          },
          end: {
            line: 583,
            column: 7
          }
        },
        "205": {
          start: {
            line: 582,
            column: 8
          },
          end: {
            line: 582,
            column: 14
          }
        },
        "206": {
          start: {
            line: 585,
            column: 6
          },
          end: {
            line: 585,
            column: 36
          }
        },
        "207": {
          start: {
            line: 587,
            column: 6
          },
          end: {
            line: 587,
            column: 42
          }
        },
        "208": {
          start: {
            line: 589,
            column: 6
          },
          end: {
            line: 592,
            column: 7
          }
        },
        "209": {
          start: {
            line: 590,
            column: 8
          },
          end: {
            line: 590,
            column: 22
          }
        },
        "210": {
          start: {
            line: 591,
            column: 8
          },
          end: {
            line: 591,
            column: 14
          }
        },
        "211": {
          start: {
            line: 594,
            column: 6
          },
          end: {
            line: 598,
            column: 35
          }
        },
        "212": {
          start: {
            line: 595,
            column: 8
          },
          end: {
            line: 597,
            column: 9
          }
        },
        "213": {
          start: {
            line: 596,
            column: 10
          },
          end: {
            line: 596,
            column: 24
          }
        },
        "214": {
          start: {
            line: 602,
            column: 6
          },
          end: {
            line: 606,
            column: 7
          }
        },
        "215": {
          start: {
            line: 603,
            column: 8
          },
          end: {
            line: 605,
            column: 9
          }
        },
        "216": {
          start: {
            line: 604,
            column: 10
          },
          end: {
            line: 604,
            column: 21
          }
        },
        "217": {
          start: {
            line: 608,
            column: 6
          },
          end: {
            line: 608,
            column: 18
          }
        },
        "218": {
          start: {
            line: 612,
            column: 6
          },
          end: {
            line: 616,
            column: 7
          }
        },
        "219": {
          start: {
            line: 618,
            column: 6
          },
          end: {
            line: 623,
            column: 7
          }
        },
        "220": {
          start: {
            line: 619,
            column: 8
          },
          end: {
            line: 622,
            column: 9
          }
        },
        "221": {
          start: {
            line: 625,
            column: 6
          },
          end: {
            line: 627,
            column: 7
          }
        },
        "222": {
          start: {
            line: 626,
            column: 8
          },
          end: {
            line: 626,
            column: 46
          }
        },
        "223": {
          start: {
            line: 629,
            column: 6
          },
          end: {
            line: 631,
            column: 7
          }
        },
        "224": {
          start: {
            line: 630,
            column: 8
          },
          end: {
            line: 630,
            column: 50
          }
        },
        "225": {
          start: {
            line: 633,
            column: 6
          },
          end: {
            line: 637,
            column: 7
          }
        },
        "226": {
          start: {
            line: 639,
            column: 6
          },
          end: {
            line: 639,
            column: 19
          }
        },
        "227": {
          start: {
            line: 643,
            column: 21
          },
          end: {
            line: 643,
            column: 23
          }
        },
        "228": {
          start: {
            line: 645,
            column: 6
          },
          end: {
            line: 651,
            column: 7
          }
        },
        "229": {
          start: {
            line: 646,
            column: 8
          },
          end: {
            line: 650,
            column: 9
          }
        },
        "230": {
          start: {
            line: 647,
            column: 10
          },
          end: {
            line: 649,
            column: 11
          }
        },
        "231": {
          start: {
            line: 648,
            column: 12
          },
          end: {
            line: 648,
            column: 42
          }
        },
        "232": {
          start: {
            line: 653,
            column: 6
          },
          end: {
            line: 653,
            column: 19
          }
        },
        "233": {
          start: {
            line: 657,
            column: 19
          },
          end: {
            line: 657,
            column: 42
          }
        },
        "234": {
          start: {
            line: 658,
            column: 23
          },
          end: {
            line: 658,
            column: 67
          }
        },
        "235": {
          start: {
            line: 659,
            column: 6
          },
          end: {
            line: 661,
            column: 7
          }
        },
        "236": {
          start: {
            line: 660,
            column: 8
          },
          end: {
            line: 660,
            column: 43
          }
        },
        "237": {
          start: {
            line: 665,
            column: 29
          },
          end: {
            line: 665,
            column: 48
          }
        },
        "238": {
          start: {
            line: 666,
            column: 6
          },
          end: {
            line: 666,
            column: 38
          }
        },
        "239": {
          start: {
            line: 667,
            column: 6
          },
          end: {
            line: 667,
            column: 27
          }
        },
        "240": {
          start: {
            line: 668,
            column: 6
          },
          end: {
            line: 668,
            column: 101
          }
        },
        "241": {
          start: {
            line: 672,
            column: 18
          },
          end: {
            line: 672,
            column: 38
          }
        },
        "242": {
          start: {
            line: 673,
            column: 34
          },
          end: {
            line: 673,
            column: 55
          }
        },
        "243": {
          start: {
            line: 674,
            column: 6
          },
          end: {
            line: 676,
            column: 7
          }
        },
        "244": {
          start: {
            line: 675,
            column: 8
          },
          end: {
            line: 675,
            column: 14
          }
        },
        "245": {
          start: {
            line: 677,
            column: 6
          },
          end: {
            line: 677,
            column: 40
          }
        },
        "246": {
          start: {
            line: 678,
            column: 6
          },
          end: {
            line: 678,
            column: 35
          }
        },
        "247": {
          start: {
            line: 679,
            column: 6
          },
          end: {
            line: 679,
            column: 17
          }
        },
        "248": {
          start: {
            line: 680,
            column: 6
          },
          end: {
            line: 680,
            column: 17
          }
        },
        "249": {
          start: {
            line: 681,
            column: 6
          },
          end: {
            line: 681,
            column: 49
          }
        },
        "250": {
          start: {
            line: 687,
            column: 6
          },
          end: {
            line: 706,
            column: 8
          }
        },
        "251": {
          start: {
            line: 688,
            column: 19
          },
          end: {
            line: 688,
            column: 41
          }
        },
        "252": {
          start: {
            line: 689,
            column: 24
          },
          end: {
            line: 689,
            column: 60
          }
        },
        "253": {
          start: {
            line: 691,
            column: 8
          },
          end: {
            line: 693,
            column: 9
          }
        },
        "254": {
          start: {
            line: 692,
            column: 10
          },
          end: {
            line: 692,
            column: 16
          }
        },
        "255": {
          start: {
            line: 695,
            column: 8
          },
          end: {
            line: 698,
            column: 9
          }
        },
        "256": {
          start: {
            line: 696,
            column: 10
          },
          end: {
            line: 696,
            column: 43
          }
        },
        "257": {
          start: {
            line: 697,
            column: 10
          },
          end: {
            line: 697,
            column: 38
          }
        },
        "258": {
          start: {
            line: 700,
            column: 8
          },
          end: {
            line: 705,
            column: 9
          }
        },
        "259": {
          start: {
            line: 701,
            column: 10
          },
          end: {
            line: 703,
            column: 11
          }
        },
        "260": {
          start: {
            line: 702,
            column: 12
          },
          end: {
            line: 702,
            column: 62
          }
        },
        "261": {
          start: {
            line: 704,
            column: 10
          },
          end: {
            line: 704,
            column: 24
          }
        },
        "262": {
          start: {
            line: 716,
            column: 2
          },
          end: {
            line: 716,
            column: 39
          }
        },
        "263": {
          start: {
            line: 717,
            column: 2
          },
          end: {
            line: 717,
            column: 34
          }
        },
        "264": {
          start: {
            line: 718,
            column: 2
          },
          end: {
            line: 721,
            column: 3
          }
        },
        "265": {
          start: {
            line: 719,
            column: 4
          },
          end: {
            line: 719,
            column: 35
          }
        },
        "266": {
          start: {
            line: 720,
            column: 4
          },
          end: {
            line: 720,
            column: 35
          }
        },
        "267": {
          start: {
            line: 723,
            column: 2
          },
          end: {
            line: 723,
            column: 16
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 12,
              column: 17
            },
            end: {
              line: 12,
              column: 18
            }
          },
          loc: {
            start: {
              line: 12,
              column: 24
            },
            end: {
              line: 724,
              column: 1
            }
          },
          line: 12
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 112,
              column: 4
            },
            end: {
              line: 112,
              column: 5
            }
          },
          loc: {
            start: {
              line: 112,
              column: 33
            },
            end: {
              line: 134,
              column: 5
            }
          },
          line: 112
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 138,
              column: 4
            },
            end: {
              line: 138,
              column: 5
            }
          },
          loc: {
            start: {
              line: 138,
              column: 25
            },
            end: {
              line: 140,
              column: 5
            }
          },
          line: 138
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 142,
              column: 4
            },
            end: {
              line: 142,
              column: 5
            }
          },
          loc: {
            start: {
              line: 142,
              column: 25
            },
            end: {
              line: 144,
              column: 5
            }
          },
          line: 142
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 146,
              column: 4
            },
            end: {
              line: 146,
              column: 5
            }
          },
          loc: {
            start: {
              line: 146,
              column: 22
            },
            end: {
              line: 148,
              column: 5
            }
          },
          line: 146
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 150,
              column: 4
            },
            end: {
              line: 150,
              column: 5
            }
          },
          loc: {
            start: {
              line: 150,
              column: 26
            },
            end: {
              line: 152,
              column: 5
            }
          },
          line: 150
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 154,
              column: 4
            },
            end: {
              line: 154,
              column: 5
            }
          },
          loc: {
            start: {
              line: 154,
              column: 23
            },
            end: {
              line: 156,
              column: 5
            }
          },
          line: 154
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 158,
              column: 4
            },
            end: {
              line: 158,
              column: 5
            }
          },
          loc: {
            start: {
              line: 158,
              column: 27
            },
            end: {
              line: 160,
              column: 5
            }
          },
          line: 158
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 162,
              column: 4
            },
            end: {
              line: 162,
              column: 5
            }
          },
          loc: {
            start: {
              line: 162,
              column: 29
            },
            end: {
              line: 164,
              column: 5
            }
          },
          line: 162
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 168,
              column: 4
            },
            end: {
              line: 168,
              column: 5
            }
          },
          loc: {
            start: {
              line: 168,
              column: 13
            },
            end: {
              line: 170,
              column: 5
            }
          },
          line: 168
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 172,
              column: 4
            },
            end: {
              line: 172,
              column: 5
            }
          },
          loc: {
            start: {
              line: 172,
              column: 14
            },
            end: {
              line: 174,
              column: 5
            }
          },
          line: 172
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 176,
              column: 4
            },
            end: {
              line: 176,
              column: 5
            }
          },
          loc: {
            start: {
              line: 176,
              column: 20
            },
            end: {
              line: 178,
              column: 5
            }
          },
          line: 176
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 180,
              column: 4
            },
            end: {
              line: 180,
              column: 5
            }
          },
          loc: {
            start: {
              line: 180,
              column: 18
            },
            end: {
              line: 212,
              column: 5
            }
          },
          line: 180
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 214,
              column: 4
            },
            end: {
              line: 214,
              column: 5
            }
          },
          loc: {
            start: {
              line: 214,
              column: 14
            },
            end: {
              line: 238,
              column: 5
            }
          },
          line: 214
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 240,
              column: 4
            },
            end: {
              line: 240,
              column: 5
            }
          },
          loc: {
            start: {
              line: 240,
              column: 11
            },
            end: {
              line: 347,
              column: 5
            }
          },
          line: 240
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 303,
              column: 20
            },
            end: {
              line: 303,
              column: 21
            }
          },
          loc: {
            start: {
              line: 303,
              column: 30
            },
            end: {
              line: 307,
              column: 11
            }
          },
          line: 303
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 308,
              column: 20
            },
            end: {
              line: 308,
              column: 21
            }
          },
          loc: {
            start: {
              line: 308,
              column: 30
            },
            end: {
              line: 310,
              column: 11
            }
          },
          line: 308
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 323,
              column: 25
            },
            end: {
              line: 323,
              column: 26
            }
          },
          loc: {
            start: {
              line: 323,
              column: 31
            },
            end: {
              line: 335,
              column: 9
            }
          },
          line: 323
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 349,
              column: 4
            },
            end: {
              line: 349,
              column: 5
            }
          },
          loc: {
            start: {
              line: 349,
              column: 19
            },
            end: {
              line: 398,
              column: 5
            }
          },
          line: 349
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 352,
              column: 23
            },
            end: {
              line: 352,
              column: 24
            }
          },
          loc: {
            start: {
              line: 352,
              column: 29
            },
            end: {
              line: 367,
              column: 7
            }
          },
          line: 352
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 400,
              column: 4
            },
            end: {
              line: 400,
              column: 5
            }
          },
          loc: {
            start: {
              line: 400,
              column: 13
            },
            end: {
              line: 404,
              column: 5
            }
          },
          line: 400
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 408,
              column: 4
            },
            end: {
              line: 408,
              column: 5
            }
          },
          loc: {
            start: {
              line: 408,
              column: 20
            },
            end: {
              line: 410,
              column: 5
            }
          },
          line: 408
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 412,
              column: 4
            },
            end: {
              line: 412,
              column: 5
            }
          },
          loc: {
            start: {
              line: 412,
              column: 35
            },
            end: {
              line: 414,
              column: 5
            }
          },
          line: 412
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 416,
              column: 4
            },
            end: {
              line: 416,
              column: 5
            }
          },
          loc: {
            start: {
              line: 416,
              column: 20
            },
            end: {
              line: 419,
              column: 5
            }
          },
          line: 416
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 421,
              column: 4
            },
            end: {
              line: 421,
              column: 5
            }
          },
          loc: {
            start: {
              line: 421,
              column: 17
            },
            end: {
              line: 425,
              column: 5
            }
          },
          line: 421
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 427,
              column: 4
            },
            end: {
              line: 427,
              column: 5
            }
          },
          loc: {
            start: {
              line: 427,
              column: 41
            },
            end: {
              line: 441,
              column: 5
            }
          },
          line: 427
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 443,
              column: 4
            },
            end: {
              line: 443,
              column: 5
            }
          },
          loc: {
            start: {
              line: 443,
              column: 15
            },
            end: {
              line: 453,
              column: 5
            }
          },
          line: 443
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 457,
              column: 4
            },
            end: {
              line: 457,
              column: 5
            }
          },
          loc: {
            start: {
              line: 457,
              column: 30
            },
            end: {
              line: 459,
              column: 5
            }
          },
          line: 457
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 461,
              column: 4
            },
            end: {
              line: 461,
              column: 5
            }
          },
          loc: {
            start: {
              line: 461,
              column: 20
            },
            end: {
              line: 507,
              column: 5
            }
          },
          line: 461
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 464,
              column: 23
            },
            end: {
              line: 464,
              column: 24
            }
          },
          loc: {
            start: {
              line: 464,
              column: 36
            },
            end: {
              line: 496,
              column: 7
            }
          },
          line: 464
        },
        "30": {
          name: "(anonymous_30)",
          decl: {
            start: {
              line: 469,
              column: 12
            },
            end: {
              line: 469,
              column: 13
            }
          },
          loc: {
            start: {
              line: 469,
              column: 23
            },
            end: {
              line: 469,
              column: 41
            }
          },
          line: 469
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 483,
              column: 14
            },
            end: {
              line: 483,
              column: 15
            }
          },
          loc: {
            start: {
              line: 483,
              column: 25
            },
            end: {
              line: 483,
              column: 43
            }
          },
          line: 483
        },
        "32": {
          name: "(anonymous_32)",
          decl: {
            start: {
              line: 488,
              column: 14
            },
            end: {
              line: 488,
              column: 15
            }
          },
          loc: {
            start: {
              line: 488,
              column: 25
            },
            end: {
              line: 488,
              column: 43
            }
          },
          line: 488
        },
        "33": {
          name: "(anonymous_33)",
          decl: {
            start: {
              line: 494,
              column: 10
            },
            end: {
              line: 494,
              column: 11
            }
          },
          loc: {
            start: {
              line: 494,
              column: 16
            },
            end: {
              line: 494,
              column: 27
            }
          },
          line: 494
        },
        "34": {
          name: "(anonymous_34)",
          decl: {
            start: {
              line: 509,
              column: 4
            },
            end: {
              line: 509,
              column: 5
            }
          },
          loc: {
            start: {
              line: 509,
              column: 16
            },
            end: {
              line: 519,
              column: 5
            }
          },
          line: 509
        },
        "35": {
          name: "(anonymous_35)",
          decl: {
            start: {
              line: 521,
              column: 4
            },
            end: {
              line: 521,
              column: 5
            }
          },
          loc: {
            start: {
              line: 521,
              column: 27
            },
            end: {
              line: 560,
              column: 5
            }
          },
          line: 521
        },
        "36": {
          name: "(anonymous_36)",
          decl: {
            start: {
              line: 555,
              column: 36
            },
            end: {
              line: 555,
              column: 37
            }
          },
          loc: {
            start: {
              line: 555,
              column: 42
            },
            end: {
              line: 559,
              column: 7
            }
          },
          line: 555
        },
        "37": {
          name: "(anonymous_37)",
          decl: {
            start: {
              line: 562,
              column: 4
            },
            end: {
              line: 562,
              column: 5
            }
          },
          loc: {
            start: {
              line: 562,
              column: 27
            },
            end: {
              line: 599,
              column: 5
            }
          },
          line: 562
        },
        "38": {
          name: "(anonymous_38)",
          decl: {
            start: {
              line: 594,
              column: 36
            },
            end: {
              line: 594,
              column: 37
            }
          },
          loc: {
            start: {
              line: 594,
              column: 42
            },
            end: {
              line: 598,
              column: 7
            }
          },
          line: 594
        },
        "39": {
          name: "(anonymous_39)",
          decl: {
            start: {
              line: 601,
              column: 4
            },
            end: {
              line: 601,
              column: 5
            }
          },
          loc: {
            start: {
              line: 601,
              column: 27
            },
            end: {
              line: 609,
              column: 5
            }
          },
          line: 601
        },
        "40": {
          name: "(anonymous_40)",
          decl: {
            start: {
              line: 611,
              column: 4
            },
            end: {
              line: 611,
              column: 5
            }
          },
          loc: {
            start: {
              line: 611,
              column: 23
            },
            end: {
              line: 640,
              column: 5
            }
          },
          line: 611
        },
        "41": {
          name: "(anonymous_41)",
          decl: {
            start: {
              line: 642,
              column: 4
            },
            end: {
              line: 642,
              column: 5
            }
          },
          loc: {
            start: {
              line: 642,
              column: 25
            },
            end: {
              line: 654,
              column: 5
            }
          },
          line: 642
        },
        "42": {
          name: "(anonymous_42)",
          decl: {
            start: {
              line: 656,
              column: 4
            },
            end: {
              line: 656,
              column: 5
            }
          },
          loc: {
            start: {
              line: 656,
              column: 21
            },
            end: {
              line: 662,
              column: 5
            }
          },
          line: 656
        },
        "43": {
          name: "(anonymous_43)",
          decl: {
            start: {
              line: 664,
              column: 4
            },
            end: {
              line: 664,
              column: 5
            }
          },
          loc: {
            start: {
              line: 664,
              column: 45
            },
            end: {
              line: 669,
              column: 5
            }
          },
          line: 664
        },
        "44": {
          name: "(anonymous_44)",
          decl: {
            start: {
              line: 671,
              column: 4
            },
            end: {
              line: 671,
              column: 5
            }
          },
          loc: {
            start: {
              line: 671,
              column: 21
            },
            end: {
              line: 682,
              column: 5
            }
          },
          line: 671
        },
        "45": {
          name: "(anonymous_45)",
          decl: {
            start: {
              line: 686,
              column: 4
            },
            end: {
              line: 686,
              column: 5
            }
          },
          loc: {
            start: {
              line: 686,
              column: 36
            },
            end: {
              line: 707,
              column: 5
            }
          },
          line: 686
        },
        "46": {
          name: "(anonymous_46)",
          decl: {
            start: {
              line: 687,
              column: 23
            },
            end: {
              line: 687,
              column: 24
            }
          },
          loc: {
            start: {
              line: 687,
              column: 35
            },
            end: {
              line: 706,
              column: 7
            }
          },
          line: 687
        },
        "47": {
          name: "(anonymous_47)",
          decl: {
            start: {
              line: 718,
              column: 26
            },
            end: {
              line: 718,
              column: 27
            }
          },
          loc: {
            start: {
              line: 718,
              column: 38
            },
            end: {
              line: 721,
              column: 3
            }
          },
          line: 718
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 46,
              column: 5
            },
            end: {
              line: 46,
              column: 27
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 46,
              column: 11
            },
            end: {
              line: 46,
              column: 17
            }
          }, {
            start: {
              line: 46,
              column: 20
            },
            end: {
              line: 46,
              column: 27
            }
          }],
          line: 46
        },
        "1": {
          loc: {
            start: {
              line: 48,
              column: 5
            },
            end: {
              line: 48,
              column: 27
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 48,
              column: 11
            },
            end: {
              line: 48,
              column: 18
            }
          }, {
            start: {
              line: 48,
              column: 21
            },
            end: {
              line: 48,
              column: 27
            }
          }],
          line: 48
        },
        "2": {
          loc: {
            start: {
              line: 117,
              column: 6
            },
            end: {
              line: 119,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 117,
              column: 6
            },
            end: {
              line: 119,
              column: 7
            }
          }, {
            start: {
              line: 117,
              column: 6
            },
            end: {
              line: 119,
              column: 7
            }
          }],
          line: 117
        },
        "3": {
          loc: {
            start: {
              line: 181,
              column: 6
            },
            end: {
              line: 183,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 181,
              column: 6
            },
            end: {
              line: 183,
              column: 7
            }
          }, {
            start: {
              line: 181,
              column: 6
            },
            end: {
              line: 183,
              column: 7
            }
          }],
          line: 181
        },
        "4": {
          loc: {
            start: {
              line: 185,
              column: 6
            },
            end: {
              line: 211,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 185,
              column: 6
            },
            end: {
              line: 211,
              column: 7
            }
          }, {
            start: {
              line: 185,
              column: 6
            },
            end: {
              line: 211,
              column: 7
            }
          }],
          line: 185
        },
        "5": {
          loc: {
            start: {
              line: 189,
              column: 8
            },
            end: {
              line: 195,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 189,
              column: 8
            },
            end: {
              line: 195,
              column: 9
            }
          }, {
            start: {
              line: 189,
              column: 8
            },
            end: {
              line: 195,
              column: 9
            }
          }],
          line: 189
        },
        "6": {
          loc: {
            start: {
              line: 199,
              column: 8
            },
            end: {
              line: 203,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 199,
              column: 8
            },
            end: {
              line: 203,
              column: 9
            }
          }, {
            start: {
              line: 199,
              column: 8
            },
            end: {
              line: 203,
              column: 9
            }
          }],
          line: 199
        },
        "7": {
          loc: {
            start: {
              line: 205,
              column: 8
            },
            end: {
              line: 208,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 205,
              column: 8
            },
            end: {
              line: 208,
              column: 9
            }
          }, {
            start: {
              line: 205,
              column: 8
            },
            end: {
              line: 208,
              column: 9
            }
          }],
          line: 205
        },
        "8": {
          loc: {
            start: {
              line: 222,
              column: 6
            },
            end: {
              line: 224,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 222,
              column: 6
            },
            end: {
              line: 224,
              column: 7
            }
          }, {
            start: {
              line: 222,
              column: 6
            },
            end: {
              line: 224,
              column: 7
            }
          }],
          line: 222
        },
        "9": {
          loc: {
            start: {
              line: 230,
              column: 6
            },
            end: {
              line: 232,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 230,
              column: 6
            },
            end: {
              line: 232,
              column: 7
            }
          }, {
            start: {
              line: 230,
              column: 6
            },
            end: {
              line: 232,
              column: 7
            }
          }],
          line: 230
        },
        "10": {
          loc: {
            start: {
              line: 241,
              column: 6
            },
            end: {
              line: 243,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 241,
              column: 6
            },
            end: {
              line: 243,
              column: 7
            }
          }, {
            start: {
              line: 241,
              column: 6
            },
            end: {
              line: 243,
              column: 7
            }
          }],
          line: 241
        },
        "11": {
          loc: {
            start: {
              line: 246,
              column: 6
            },
            end: {
              line: 346,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 246,
              column: 6
            },
            end: {
              line: 346,
              column: 7
            }
          }, {
            start: {
              line: 246,
              column: 6
            },
            end: {
              line: 346,
              column: 7
            }
          }],
          line: 246
        },
        "12": {
          loc: {
            start: {
              line: 246,
              column: 10
            },
            end: {
              line: 246,
              column: 49
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 246,
              column: 10
            },
            end: {
              line: 246,
              column: 30
            }
          }, {
            start: {
              line: 246,
              column: 34
            },
            end: {
              line: 246,
              column: 49
            }
          }],
          line: 246
        },
        "13": {
          loc: {
            start: {
              line: 254,
              column: 8
            },
            end: {
              line: 256,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 254,
              column: 8
            },
            end: {
              line: 256,
              column: 9
            }
          }, {
            start: {
              line: 254,
              column: 8
            },
            end: {
              line: 256,
              column: 9
            }
          }],
          line: 254
        },
        "14": {
          loc: {
            start: {
              line: 254,
              column: 12
            },
            end: {
              line: 254,
              column: 57
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 254,
              column: 12
            },
            end: {
              line: 254,
              column: 42
            }
          }, {
            start: {
              line: 254,
              column: 46
            },
            end: {
              line: 254,
              column: 57
            }
          }],
          line: 254
        },
        "15": {
          loc: {
            start: {
              line: 266,
              column: 8
            },
            end: {
              line: 268,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 266,
              column: 8
            },
            end: {
              line: 268,
              column: 9
            }
          }, {
            start: {
              line: 266,
              column: 8
            },
            end: {
              line: 268,
              column: 9
            }
          }],
          line: 266
        },
        "16": {
          loc: {
            start: {
              line: 270,
              column: 27
            },
            end: {
              line: 272,
              column: 33
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 271,
              column: 12
            },
            end: {
              line: 271,
              column: 63
            }
          }, {
            start: {
              line: 272,
              column: 12
            },
            end: {
              line: 272,
              column: 33
            }
          }],
          line: 270
        },
        "17": {
          loc: {
            start: {
              line: 277,
              column: 26
            },
            end: {
              line: 277,
              column: 115
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 277,
              column: 60
            },
            end: {
              line: 277,
              column: 73
            }
          }, {
            start: {
              line: 277,
              column: 76
            },
            end: {
              line: 277,
              column: 115
            }
          }],
          line: 277
        },
        "18": {
          loc: {
            start: {
              line: 281,
              column: 8
            },
            end: {
              line: 283,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 281,
              column: 8
            },
            end: {
              line: 283,
              column: 9
            }
          }, {
            start: {
              line: 281,
              column: 8
            },
            end: {
              line: 283,
              column: 9
            }
          }],
          line: 281
        },
        "19": {
          loc: {
            start: {
              line: 304,
              column: 12
            },
            end: {
              line: 306,
              column: 13
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 304,
              column: 12
            },
            end: {
              line: 306,
              column: 13
            }
          }, {
            start: {
              line: 304,
              column: 12
            },
            end: {
              line: 306,
              column: 13
            }
          }],
          line: 304
        },
        "20": {
          loc: {
            start: {
              line: 319,
              column: 8
            },
            end: {
              line: 321,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 319,
              column: 8
            },
            end: {
              line: 321,
              column: 9
            }
          }, {
            start: {
              line: 319,
              column: 8
            },
            end: {
              line: 321,
              column: 9
            }
          }],
          line: 319
        },
        "21": {
          loc: {
            start: {
              line: 324,
              column: 10
            },
            end: {
              line: 326,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 324,
              column: 10
            },
            end: {
              line: 326,
              column: 11
            }
          }, {
            start: {
              line: 324,
              column: 10
            },
            end: {
              line: 326,
              column: 11
            }
          }],
          line: 324
        },
        "22": {
          loc: {
            start: {
              line: 332,
              column: 10
            },
            end: {
              line: 334,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 332,
              column: 10
            },
            end: {
              line: 334,
              column: 11
            }
          }, {
            start: {
              line: 332,
              column: 10
            },
            end: {
              line: 334,
              column: 11
            }
          }],
          line: 332
        },
        "23": {
          loc: {
            start: {
              line: 337,
              column: 8
            },
            end: {
              line: 345,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 337,
              column: 8
            },
            end: {
              line: 345,
              column: 9
            }
          }, {
            start: {
              line: 337,
              column: 8
            },
            end: {
              line: 345,
              column: 9
            }
          }],
          line: 337
        },
        "24": {
          loc: {
            start: {
              line: 353,
              column: 8
            },
            end: {
              line: 355,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 353,
              column: 8
            },
            end: {
              line: 355,
              column: 9
            }
          }, {
            start: {
              line: 353,
              column: 8
            },
            end: {
              line: 355,
              column: 9
            }
          }],
          line: 353
        },
        "25": {
          loc: {
            start: {
              line: 353,
              column: 12
            },
            end: {
              line: 353,
              column: 66
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 353,
              column: 12
            },
            end: {
              line: 353,
              column: 48
            }
          }, {
            start: {
              line: 353,
              column: 52
            },
            end: {
              line: 353,
              column: 66
            }
          }],
          line: 353
        },
        "26": {
          loc: {
            start: {
              line: 360,
              column: 8
            },
            end: {
              line: 362,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 360,
              column: 8
            },
            end: {
              line: 362,
              column: 9
            }
          }, {
            start: {
              line: 360,
              column: 8
            },
            end: {
              line: 362,
              column: 9
            }
          }],
          line: 360
        },
        "27": {
          loc: {
            start: {
              line: 364,
              column: 8
            },
            end: {
              line: 366,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 364,
              column: 8
            },
            end: {
              line: 366,
              column: 9
            }
          }, {
            start: {
              line: 364,
              column: 8
            },
            end: {
              line: 366,
              column: 9
            }
          }],
          line: 364
        },
        "28": {
          loc: {
            start: {
              line: 371,
              column: 6
            },
            end: {
              line: 373,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 371,
              column: 6
            },
            end: {
              line: 373,
              column: 7
            }
          }, {
            start: {
              line: 371,
              column: 6
            },
            end: {
              line: 373,
              column: 7
            }
          }],
          line: 371
        },
        "29": {
          loc: {
            start: {
              line: 379,
              column: 6
            },
            end: {
              line: 381,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 379,
              column: 6
            },
            end: {
              line: 381,
              column: 7
            }
          }, {
            start: {
              line: 379,
              column: 6
            },
            end: {
              line: 381,
              column: 7
            }
          }],
          line: 379
        },
        "30": {
          loc: {
            start: {
              line: 387,
              column: 6
            },
            end: {
              line: 395,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 387,
              column: 6
            },
            end: {
              line: 395,
              column: 7
            }
          }, {
            start: {
              line: 387,
              column: 6
            },
            end: {
              line: 395,
              column: 7
            }
          }],
          line: 387
        },
        "31": {
          loc: {
            start: {
              line: 401,
              column: 6
            },
            end: {
              line: 403,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 401,
              column: 6
            },
            end: {
              line: 403,
              column: 7
            }
          }, {
            start: {
              line: 401,
              column: 6
            },
            end: {
              line: 403,
              column: 7
            }
          }],
          line: 401
        },
        "32": {
          loc: {
            start: {
              line: 417,
              column: 17
            },
            end: {
              line: 417,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 417,
              column: 17
            },
            end: {
              line: 417,
              column: 25
            }
          }, {
            start: {
              line: 417,
              column: 29
            },
            end: {
              line: 417,
              column: 55
            }
          }],
          line: 417
        },
        "33": {
          loc: {
            start: {
              line: 429,
              column: 6
            },
            end: {
              line: 440,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 429,
              column: 6
            },
            end: {
              line: 440,
              column: 7
            }
          }, {
            start: {
              line: 429,
              column: 6
            },
            end: {
              line: 440,
              column: 7
            }
          }],
          line: 429
        },
        "34": {
          loc: {
            start: {
              line: 429,
              column: 10
            },
            end: {
              line: 429,
              column: 77
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 429,
              column: 10
            },
            end: {
              line: 429,
              column: 37
            }
          }, {
            start: {
              line: 429,
              column: 42
            },
            end: {
              line: 429,
              column: 58
            }
          }, {
            start: {
              line: 429,
              column: 62
            },
            end: {
              line: 429,
              column: 76
            }
          }],
          line: 429
        },
        "35": {
          loc: {
            start: {
              line: 431,
              column: 8
            },
            end: {
              line: 437,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 431,
              column: 8
            },
            end: {
              line: 437,
              column: 9
            }
          }, {
            start: {
              line: 431,
              column: 8
            },
            end: {
              line: 437,
              column: 9
            }
          }],
          line: 431
        },
        "36": {
          loc: {
            start: {
              line: 432,
              column: 10
            },
            end: {
              line: 434,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 432,
              column: 10
            },
            end: {
              line: 434,
              column: 11
            }
          }, {
            start: {
              line: 432,
              column: 10
            },
            end: {
              line: 434,
              column: 11
            }
          }],
          line: 432
        },
        "37": {
          loc: {
            start: {
              line: 439,
              column: 17
            },
            end: {
              line: 439,
              column: 39
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 439,
              column: 24
            },
            end: {
              line: 439,
              column: 30
            }
          }, {
            start: {
              line: 439,
              column: 33
            },
            end: {
              line: 439,
              column: 39
            }
          }],
          line: 439
        },
        "38": {
          loc: {
            start: {
              line: 446,
              column: 6
            },
            end: {
              line: 450,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 446,
              column: 6
            },
            end: {
              line: 450,
              column: 7
            }
          }, {
            start: {
              line: 446,
              column: 6
            },
            end: {
              line: 450,
              column: 7
            }
          }],
          line: 446
        },
        "39": {
          loc: {
            start: {
              line: 447,
              column: 16
            },
            end: {
              line: 449,
              column: 29
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 448,
              column: 12
            },
            end: {
              line: 448,
              column: 48
            }
          }, {
            start: {
              line: 449,
              column: 12
            },
            end: {
              line: 449,
              column: 29
            }
          }],
          line: 447
        },
        "40": {
          loc: {
            start: {
              line: 465,
              column: 8
            },
            end: {
              line: 490,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 465,
              column: 8
            },
            end: {
              line: 490,
              column: 9
            }
          }, {
            start: {
              line: 465,
              column: 8
            },
            end: {
              line: 490,
              column: 9
            }
          }],
          line: 465
        },
        "41": {
          loc: {
            start: {
              line: 471,
              column: 15
            },
            end: {
              line: 490,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 471,
              column: 15
            },
            end: {
              line: 490,
              column: 9
            }
          }, {
            start: {
              line: 471,
              column: 15
            },
            end: {
              line: 490,
              column: 9
            }
          }],
          line: 471
        },
        "42": {
          loc: {
            start: {
              line: 472,
              column: 26
            },
            end: {
              line: 474,
              column: 44
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 473,
              column: 14
            },
            end: {
              line: 473,
              column: 47
            }
          }, {
            start: {
              line: 474,
              column: 14
            },
            end: {
              line: 474,
              column: 44
            }
          }],
          line: 472
        },
        "43": {
          loc: {
            start: {
              line: 475,
              column: 27
            },
            end: {
              line: 477,
              column: 45
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 476,
              column: 14
            },
            end: {
              line: 476,
              column: 47
            }
          }, {
            start: {
              line: 477,
              column: 14
            },
            end: {
              line: 477,
              column: 45
            }
          }],
          line: 475
        },
        "44": {
          loc: {
            start: {
              line: 498,
              column: 6
            },
            end: {
              line: 506,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 498,
              column: 6
            },
            end: {
              line: 506,
              column: 7
            }
          }, {
            start: {
              line: 498,
              column: 6
            },
            end: {
              line: 506,
              column: 7
            }
          }],
          line: 498
        },
        "45": {
          loc: {
            start: {
              line: 511,
              column: 6
            },
            end: {
              line: 518,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 511,
              column: 6
            },
            end: {
              line: 518,
              column: 7
            }
          }, {
            start: {
              line: 511,
              column: 6
            },
            end: {
              line: 518,
              column: 7
            }
          }],
          line: 511
        },
        "46": {
          loc: {
            start: {
              line: 511,
              column: 10
            },
            end: {
              line: 512,
              column: 31
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 511,
              column: 10
            },
            end: {
              line: 511,
              column: 44
            }
          }, {
            start: {
              line: 512,
              column: 9
            },
            end: {
              line: 512,
              column: 31
            }
          }],
          line: 511
        },
        "47": {
          loc: {
            start: {
              line: 515,
              column: 10
            },
            end: {
              line: 515,
              column: 50
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 515,
              column: 10
            },
            end: {
              line: 515,
              column: 44
            }
          }, {
            start: {
              line: 515,
              column: 48
            },
            end: {
              line: 515,
              column: 50
            }
          }],
          line: 515
        },
        "48": {
          loc: {
            start: {
              line: 524,
              column: 16
            },
            end: {
              line: 524,
              column: 63
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 524,
              column: 16
            },
            end: {
              line: 524,
              column: 23
            }
          }, {
            start: {
              line: 524,
              column: 27
            },
            end: {
              line: 524,
              column: 63
            }
          }],
          line: 524
        },
        "49": {
          loc: {
            start: {
              line: 526,
              column: 6
            },
            end: {
              line: 532,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 526,
              column: 6
            },
            end: {
              line: 532,
              column: 7
            }
          }, {
            start: {
              line: 526,
              column: 6
            },
            end: {
              line: 532,
              column: 7
            }
          }],
          line: 526
        },
        "50": {
          loc: {
            start: {
              line: 534,
              column: 6
            },
            end: {
              line: 538,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 534,
              column: 6
            },
            end: {
              line: 538,
              column: 7
            }
          }, {
            start: {
              line: 534,
              column: 6
            },
            end: {
              line: 538,
              column: 7
            }
          }],
          line: 534
        },
        "51": {
          loc: {
            start: {
              line: 536,
              column: 10
            },
            end: {
              line: 536,
              column: 66
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 536,
              column: 37
            },
            end: {
              line: 536,
              column: 50
            }
          }, {
            start: {
              line: 536,
              column: 53
            },
            end: {
              line: 536,
              column: 66
            }
          }],
          line: 536
        },
        "52": {
          loc: {
            start: {
              line: 540,
              column: 6
            },
            end: {
              line: 544,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 540,
              column: 6
            },
            end: {
              line: 544,
              column: 7
            }
          }, {
            start: {
              line: 540,
              column: 6
            },
            end: {
              line: 544,
              column: 7
            }
          }],
          line: 540
        },
        "53": {
          loc: {
            start: {
              line: 540,
              column: 10
            },
            end: {
              line: 541,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 540,
              column: 10
            },
            end: {
              line: 540,
              column: 61
            }
          }, {
            start: {
              line: 541,
              column: 9
            },
            end: {
              line: 541,
              column: 48
            }
          }],
          line: 540
        },
        "54": {
          loc: {
            start: {
              line: 550,
              column: 6
            },
            end: {
              line: 553,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 550,
              column: 6
            },
            end: {
              line: 553,
              column: 7
            }
          }, {
            start: {
              line: 550,
              column: 6
            },
            end: {
              line: 553,
              column: 7
            }
          }],
          line: 550
        },
        "55": {
          loc: {
            start: {
              line: 550,
              column: 10
            },
            end: {
              line: 550,
              column: 61
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 550,
              column: 10
            },
            end: {
              line: 550,
              column: 31
            }
          }, {
            start: {
              line: 550,
              column: 35
            },
            end: {
              line: 550,
              column: 61
            }
          }],
          line: 550
        },
        "56": {
          loc: {
            start: {
              line: 556,
              column: 8
            },
            end: {
              line: 558,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 556,
              column: 8
            },
            end: {
              line: 558,
              column: 9
            }
          }, {
            start: {
              line: 556,
              column: 8
            },
            end: {
              line: 558,
              column: 9
            }
          }],
          line: 556
        },
        "57": {
          loc: {
            start: {
              line: 565,
              column: 16
            },
            end: {
              line: 565,
              column: 63
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 565,
              column: 16
            },
            end: {
              line: 565,
              column: 23
            }
          }, {
            start: {
              line: 565,
              column: 27
            },
            end: {
              line: 565,
              column: 63
            }
          }],
          line: 565
        },
        "58": {
          loc: {
            start: {
              line: 567,
              column: 6
            },
            end: {
              line: 573,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 567,
              column: 6
            },
            end: {
              line: 573,
              column: 7
            }
          }, {
            start: {
              line: 567,
              column: 6
            },
            end: {
              line: 573,
              column: 7
            }
          }],
          line: 567
        },
        "59": {
          loc: {
            start: {
              line: 575,
              column: 6
            },
            end: {
              line: 579,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 575,
              column: 6
            },
            end: {
              line: 579,
              column: 7
            }
          }, {
            start: {
              line: 575,
              column: 6
            },
            end: {
              line: 579,
              column: 7
            }
          }],
          line: 575
        },
        "60": {
          loc: {
            start: {
              line: 577,
              column: 10
            },
            end: {
              line: 577,
              column: 67
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 577,
              column: 38
            },
            end: {
              line: 577,
              column: 51
            }
          }, {
            start: {
              line: 577,
              column: 54
            },
            end: {
              line: 577,
              column: 67
            }
          }],
          line: 577
        },
        "61": {
          loc: {
            start: {
              line: 581,
              column: 6
            },
            end: {
              line: 583,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 581,
              column: 6
            },
            end: {
              line: 583,
              column: 7
            }
          }, {
            start: {
              line: 581,
              column: 6
            },
            end: {
              line: 583,
              column: 7
            }
          }],
          line: 581
        },
        "62": {
          loc: {
            start: {
              line: 589,
              column: 6
            },
            end: {
              line: 592,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 589,
              column: 6
            },
            end: {
              line: 592,
              column: 7
            }
          }, {
            start: {
              line: 589,
              column: 6
            },
            end: {
              line: 592,
              column: 7
            }
          }],
          line: 589
        },
        "63": {
          loc: {
            start: {
              line: 589,
              column: 10
            },
            end: {
              line: 589,
              column: 61
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 589,
              column: 10
            },
            end: {
              line: 589,
              column: 31
            }
          }, {
            start: {
              line: 589,
              column: 35
            },
            end: {
              line: 589,
              column: 61
            }
          }],
          line: 589
        },
        "64": {
          loc: {
            start: {
              line: 595,
              column: 8
            },
            end: {
              line: 597,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 595,
              column: 8
            },
            end: {
              line: 597,
              column: 9
            }
          }, {
            start: {
              line: 595,
              column: 8
            },
            end: {
              line: 597,
              column: 9
            }
          }],
          line: 595
        },
        "65": {
          loc: {
            start: {
              line: 603,
              column: 8
            },
            end: {
              line: 605,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 603,
              column: 8
            },
            end: {
              line: 605,
              column: 9
            }
          }, {
            start: {
              line: 603,
              column: 8
            },
            end: {
              line: 605,
              column: 9
            }
          }],
          line: 603
        },
        "66": {
          loc: {
            start: {
              line: 615,
              column: 11
            },
            end: {
              line: 615,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 615,
              column: 50
            },
            end: {
              line: 615,
              column: 56
            }
          }, {
            start: {
              line: 615,
              column: 59
            },
            end: {
              line: 615,
              column: 61
            }
          }],
          line: 615
        },
        "67": {
          loc: {
            start: {
              line: 615,
              column: 11
            },
            end: {
              line: 615,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 615,
              column: 11
            },
            end: {
              line: 615,
              column: 37
            }
          }, {
            start: {
              line: 615,
              column: 41
            },
            end: {
              line: 615,
              column: 47
            }
          }],
          line: 615
        },
        "68": {
          loc: {
            start: {
              line: 618,
              column: 6
            },
            end: {
              line: 623,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 618,
              column: 6
            },
            end: {
              line: 623,
              column: 7
            }
          }, {
            start: {
              line: 618,
              column: 6
            },
            end: {
              line: 623,
              column: 7
            }
          }],
          line: 618
        },
        "69": {
          loc: {
            start: {
              line: 625,
              column: 6
            },
            end: {
              line: 627,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 625,
              column: 6
            },
            end: {
              line: 627,
              column: 7
            }
          }, {
            start: {
              line: 625,
              column: 6
            },
            end: {
              line: 627,
              column: 7
            }
          }],
          line: 625
        },
        "70": {
          loc: {
            start: {
              line: 629,
              column: 6
            },
            end: {
              line: 631,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 629,
              column: 6
            },
            end: {
              line: 631,
              column: 7
            }
          }, {
            start: {
              line: 629,
              column: 6
            },
            end: {
              line: 631,
              column: 7
            }
          }],
          line: 629
        },
        "71": {
          loc: {
            start: {
              line: 645,
              column: 6
            },
            end: {
              line: 651,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 645,
              column: 6
            },
            end: {
              line: 651,
              column: 7
            }
          }, {
            start: {
              line: 645,
              column: 6
            },
            end: {
              line: 651,
              column: 7
            }
          }],
          line: 645
        },
        "72": {
          loc: {
            start: {
              line: 647,
              column: 10
            },
            end: {
              line: 649,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 647,
              column: 10
            },
            end: {
              line: 649,
              column: 11
            }
          }, {
            start: {
              line: 647,
              column: 10
            },
            end: {
              line: 649,
              column: 11
            }
          }],
          line: 647
        },
        "73": {
          loc: {
            start: {
              line: 659,
              column: 6
            },
            end: {
              line: 661,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 659,
              column: 6
            },
            end: {
              line: 661,
              column: 7
            }
          }, {
            start: {
              line: 659,
              column: 6
            },
            end: {
              line: 661,
              column: 7
            }
          }],
          line: 659
        },
        "74": {
          loc: {
            start: {
              line: 659,
              column: 10
            },
            end: {
              line: 659,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 659,
              column: 10
            },
            end: {
              line: 659,
              column: 27
            }
          }, {
            start: {
              line: 659,
              column: 31
            },
            end: {
              line: 659,
              column: 46
            }
          }],
          line: 659
        },
        "75": {
          loc: {
            start: {
              line: 674,
              column: 6
            },
            end: {
              line: 676,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 674,
              column: 6
            },
            end: {
              line: 676,
              column: 7
            }
          }, {
            start: {
              line: 674,
              column: 6
            },
            end: {
              line: 676,
              column: 7
            }
          }],
          line: 674
        },
        "76": {
          loc: {
            start: {
              line: 689,
              column: 24
            },
            end: {
              line: 689,
              column: 60
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 689,
              column: 24
            },
            end: {
              line: 689,
              column: 50
            }
          }, {
            start: {
              line: 689,
              column: 54
            },
            end: {
              line: 689,
              column: 60
            }
          }],
          line: 689
        },
        "77": {
          loc: {
            start: {
              line: 691,
              column: 8
            },
            end: {
              line: 693,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 691,
              column: 8
            },
            end: {
              line: 693,
              column: 9
            }
          }, {
            start: {
              line: 691,
              column: 8
            },
            end: {
              line: 693,
              column: 9
            }
          }],
          line: 691
        },
        "78": {
          loc: {
            start: {
              line: 691,
              column: 12
            },
            end: {
              line: 691,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 691,
              column: 12
            },
            end: {
              line: 691,
              column: 17
            }
          }, {
            start: {
              line: 691,
              column: 21
            },
            end: {
              line: 691,
              column: 48
            }
          }],
          line: 691
        },
        "79": {
          loc: {
            start: {
              line: 695,
              column: 8
            },
            end: {
              line: 698,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 695,
              column: 8
            },
            end: {
              line: 698,
              column: 9
            }
          }, {
            start: {
              line: 695,
              column: 8
            },
            end: {
              line: 698,
              column: 9
            }
          }],
          line: 695
        },
        "80": {
          loc: {
            start: {
              line: 700,
              column: 8
            },
            end: {
              line: 705,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 700,
              column: 8
            },
            end: {
              line: 705,
              column: 9
            }
          }, {
            start: {
              line: 700,
              column: 8
            },
            end: {
              line: 705,
              column: 9
            }
          }],
          line: 700
        },
        "81": {
          loc: {
            start: {
              line: 701,
              column: 10
            },
            end: {
              line: 703,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 701,
              column: 10
            },
            end: {
              line: 703,
              column: 11
            }
          }, {
            start: {
              line: 701,
              column: 10
            },
            end: {
              line: 703,
              column: 11
            }
          }],
          line: 701
        }
      },
      s: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0,
        "23": 0,
        "24": 0,
        "25": 0,
        "26": 0,
        "27": 0,
        "28": 0,
        "29": 0,
        "30": 0,
        "31": 0,
        "32": 0,
        "33": 0,
        "34": 0,
        "35": 0,
        "36": 0,
        "37": 0,
        "38": 0,
        "39": 0,
        "40": 0,
        "41": 0,
        "42": 0,
        "43": 0,
        "44": 0,
        "45": 0,
        "46": 0,
        "47": 0,
        "48": 0,
        "49": 0,
        "50": 0,
        "51": 0,
        "52": 0,
        "53": 0,
        "54": 0,
        "55": 0,
        "56": 0,
        "57": 0,
        "58": 0,
        "59": 0,
        "60": 0,
        "61": 0,
        "62": 0,
        "63": 0,
        "64": 0,
        "65": 0,
        "66": 0,
        "67": 0,
        "68": 0,
        "69": 0,
        "70": 0,
        "71": 0,
        "72": 0,
        "73": 0,
        "74": 0,
        "75": 0,
        "76": 0,
        "77": 0,
        "78": 0,
        "79": 0,
        "80": 0,
        "81": 0,
        "82": 0,
        "83": 0,
        "84": 0,
        "85": 0,
        "86": 0,
        "87": 0,
        "88": 0,
        "89": 0,
        "90": 0,
        "91": 0,
        "92": 0,
        "93": 0,
        "94": 0,
        "95": 0,
        "96": 0,
        "97": 0,
        "98": 0,
        "99": 0,
        "100": 0,
        "101": 0,
        "102": 0,
        "103": 0,
        "104": 0,
        "105": 0,
        "106": 0,
        "107": 0,
        "108": 0,
        "109": 0,
        "110": 0,
        "111": 0,
        "112": 0,
        "113": 0,
        "114": 0,
        "115": 0,
        "116": 0,
        "117": 0,
        "118": 0,
        "119": 0,
        "120": 0,
        "121": 0,
        "122": 0,
        "123": 0,
        "124": 0,
        "125": 0,
        "126": 0,
        "127": 0,
        "128": 0,
        "129": 0,
        "130": 0,
        "131": 0,
        "132": 0,
        "133": 0,
        "134": 0,
        "135": 0,
        "136": 0,
        "137": 0,
        "138": 0,
        "139": 0,
        "140": 0,
        "141": 0,
        "142": 0,
        "143": 0,
        "144": 0,
        "145": 0,
        "146": 0,
        "147": 0,
        "148": 0,
        "149": 0,
        "150": 0,
        "151": 0,
        "152": 0,
        "153": 0,
        "154": 0,
        "155": 0,
        "156": 0,
        "157": 0,
        "158": 0,
        "159": 0,
        "160": 0,
        "161": 0,
        "162": 0,
        "163": 0,
        "164": 0,
        "165": 0,
        "166": 0,
        "167": 0,
        "168": 0,
        "169": 0,
        "170": 0,
        "171": 0,
        "172": 0,
        "173": 0,
        "174": 0,
        "175": 0,
        "176": 0,
        "177": 0,
        "178": 0,
        "179": 0,
        "180": 0,
        "181": 0,
        "182": 0,
        "183": 0,
        "184": 0,
        "185": 0,
        "186": 0,
        "187": 0,
        "188": 0,
        "189": 0,
        "190": 0,
        "191": 0,
        "192": 0,
        "193": 0,
        "194": 0,
        "195": 0,
        "196": 0,
        "197": 0,
        "198": 0,
        "199": 0,
        "200": 0,
        "201": 0,
        "202": 0,
        "203": 0,
        "204": 0,
        "205": 0,
        "206": 0,
        "207": 0,
        "208": 0,
        "209": 0,
        "210": 0,
        "211": 0,
        "212": 0,
        "213": 0,
        "214": 0,
        "215": 0,
        "216": 0,
        "217": 0,
        "218": 0,
        "219": 0,
        "220": 0,
        "221": 0,
        "222": 0,
        "223": 0,
        "224": 0,
        "225": 0,
        "226": 0,
        "227": 0,
        "228": 0,
        "229": 0,
        "230": 0,
        "231": 0,
        "232": 0,
        "233": 0,
        "234": 0,
        "235": 0,
        "236": 0,
        "237": 0,
        "238": 0,
        "239": 0,
        "240": 0,
        "241": 0,
        "242": 0,
        "243": 0,
        "244": 0,
        "245": 0,
        "246": 0,
        "247": 0,
        "248": 0,
        "249": 0,
        "250": 0,
        "251": 0,
        "252": 0,
        "253": 0,
        "254": 0,
        "255": 0,
        "256": 0,
        "257": 0,
        "258": 0,
        "259": 0,
        "260": 0,
        "261": 0,
        "262": 0,
        "263": 0,
        "264": 0,
        "265": 0,
        "266": 0,
        "267": 0
      },
      f: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0,
        "23": 0,
        "24": 0,
        "25": 0,
        "26": 0,
        "27": 0,
        "28": 0,
        "29": 0,
        "30": 0,
        "31": 0,
        "32": 0,
        "33": 0,
        "34": 0,
        "35": 0,
        "36": 0,
        "37": 0,
        "38": 0,
        "39": 0,
        "40": 0,
        "41": 0,
        "42": 0,
        "43": 0,
        "44": 0,
        "45": 0,
        "46": 0,
        "47": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0],
        "5": [0, 0],
        "6": [0, 0],
        "7": [0, 0],
        "8": [0, 0],
        "9": [0, 0],
        "10": [0, 0],
        "11": [0, 0],
        "12": [0, 0],
        "13": [0, 0],
        "14": [0, 0],
        "15": [0, 0],
        "16": [0, 0],
        "17": [0, 0],
        "18": [0, 0],
        "19": [0, 0],
        "20": [0, 0],
        "21": [0, 0],
        "22": [0, 0],
        "23": [0, 0],
        "24": [0, 0],
        "25": [0, 0],
        "26": [0, 0],
        "27": [0, 0],
        "28": [0, 0],
        "29": [0, 0],
        "30": [0, 0],
        "31": [0, 0],
        "32": [0, 0],
        "33": [0, 0],
        "34": [0, 0, 0],
        "35": [0, 0],
        "36": [0, 0],
        "37": [0, 0],
        "38": [0, 0],
        "39": [0, 0],
        "40": [0, 0],
        "41": [0, 0],
        "42": [0, 0],
        "43": [0, 0],
        "44": [0, 0],
        "45": [0, 0],
        "46": [0, 0],
        "47": [0, 0],
        "48": [0, 0],
        "49": [0, 0],
        "50": [0, 0],
        "51": [0, 0],
        "52": [0, 0],
        "53": [0, 0],
        "54": [0, 0],
        "55": [0, 0],
        "56": [0, 0],
        "57": [0, 0],
        "58": [0, 0],
        "59": [0, 0],
        "60": [0, 0],
        "61": [0, 0],
        "62": [0, 0],
        "63": [0, 0],
        "64": [0, 0],
        "65": [0, 0],
        "66": [0, 0],
        "67": [0, 0],
        "68": [0, 0],
        "69": [0, 0],
        "70": [0, 0],
        "71": [0, 0],
        "72": [0, 0],
        "73": [0, 0],
        "74": [0, 0],
        "75": [0, 0],
        "76": [0, 0],
        "77": [0, 0],
        "78": [0, 0],
        "79": [0, 0],
        "80": [0, 0],
        "81": [0, 0]
      },
      _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Tooltip = (cov_2fq140ojp5.s[0]++, function ($$$1) {
    var _ref;

    cov_2fq140ojp5.f[0]++;

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = (cov_2fq140ojp5.s[1]++, 'tooltip');
    var VERSION = (cov_2fq140ojp5.s[2]++, '4.1.3');
    var DATA_KEY = (cov_2fq140ojp5.s[3]++, 'bs.tooltip');
    var EVENT_KEY = (cov_2fq140ojp5.s[4]++, "." + DATA_KEY);
    var JQUERY_NO_CONFLICT = (cov_2fq140ojp5.s[5]++, $$$1.fn[NAME]);
    var CLASS_PREFIX = (cov_2fq140ojp5.s[6]++, 'bs-tooltip');
    var BSCLS_PREFIX_REGEX = (cov_2fq140ojp5.s[7]++, new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g'));
    var RTL = (cov_2fq140ojp5.s[8]++, document.documentElement.dir === 'rtl');
    var DefaultType = (cov_2fq140ojp5.s[9]++, {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)'
    });
    var AttachmentMap = (cov_2fq140ojp5.s[10]++, (_ref = {
      AUTO: 'auto',
      TOP: 'top'
    }, _ref[RTL ? (cov_2fq140ojp5.b[0][0]++, 'LEFT') : (cov_2fq140ojp5.b[0][1]++, 'RIGHT')] = 'right', _ref.BOTTOM = 'bottom', _ref[RTL ? (cov_2fq140ojp5.b[1][0]++, 'RIGHT') : (cov_2fq140ojp5.b[1][1]++, 'LEFT')] = 'left', _ref));
    var Default = (cov_2fq140ojp5.s[11]++, {
      animation: true,
      template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: false,
      selector: false,
      placement: 'top',
      offset: 0,
      container: false,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent'
    });
    var HoverState = (cov_2fq140ojp5.s[12]++, {
      SHOW: 'show',
      OUT: 'out'
    });
    var Event = (cov_2fq140ojp5.s[13]++, {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      INSERTED: "inserted" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      FOCUSIN: "focusin" + EVENT_KEY,
      FOCUSOUT: "focusout" + EVENT_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY
    });
    var ClassName = (cov_2fq140ojp5.s[14]++, {
      FADE: 'fade',
      SHOW: 'show'
    });
    var Selector = (cov_2fq140ojp5.s[15]++, {
      TOOLTIP: '.tooltip',
      TOOLTIP_INNER: '.tooltip-inner',
      ARROW: '.arrow'
    });
    var Trigger = (cov_2fq140ojp5.s[16]++, {
      HOVER: 'hover',
      FOCUS: 'focus',
      CLICK: 'click',
      MANUAL: 'manual'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    });

    var Tooltip =
    /*#__PURE__*/
    function () {
      function Tooltip(element, config) {
        cov_2fq140ojp5.f[1]++;
        cov_2fq140ojp5.s[17]++;

        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          cov_2fq140ojp5.b[2][0]++;
          cov_2fq140ojp5.s[18]++;
          throw new TypeError('Bootstrap tooltips require Popper.js (https://popper.js.org)');
        } else {
          cov_2fq140ojp5.b[2][1]++;
        } // private


        cov_2fq140ojp5.s[19]++;
        this._isEnabled = true;
        cov_2fq140ojp5.s[20]++;
        this._timeout = 0;
        cov_2fq140ojp5.s[21]++;
        this._hoverState = '';
        cov_2fq140ojp5.s[22]++;
        this._activeTrigger = {};
        cov_2fq140ojp5.s[23]++;
        this._popper = null; // Protected

        cov_2fq140ojp5.s[24]++;
        this.element = element;
        cov_2fq140ojp5.s[25]++;
        this.config = this._getConfig(config);
        cov_2fq140ojp5.s[26]++;
        this.tip = null;
        cov_2fq140ojp5.s[27]++;

        this._setListeners();
      } // Getters


      var _proto = Tooltip.prototype;

      // Public
      _proto.enable = function enable() {
        cov_2fq140ojp5.f[9]++;
        cov_2fq140ojp5.s[35]++;
        this._isEnabled = true;
      };

      _proto.disable = function disable() {
        cov_2fq140ojp5.f[10]++;
        cov_2fq140ojp5.s[36]++;
        this._isEnabled = false;
      };

      _proto.toggleEnabled = function toggleEnabled() {
        cov_2fq140ojp5.f[11]++;
        cov_2fq140ojp5.s[37]++;
        this._isEnabled = !this._isEnabled;
      };

      _proto.toggle = function toggle(event) {
        cov_2fq140ojp5.f[12]++;
        cov_2fq140ojp5.s[38]++;

        if (!this._isEnabled) {
          cov_2fq140ojp5.b[3][0]++;
          cov_2fq140ojp5.s[39]++;
          return;
        } else {
          cov_2fq140ojp5.b[3][1]++;
        }

        cov_2fq140ojp5.s[40]++;

        if (event) {
          cov_2fq140ojp5.b[4][0]++;
          var dataKey = (cov_2fq140ojp5.s[41]++, this.constructor.DATA_KEY);
          var context = (cov_2fq140ojp5.s[42]++, $$$1(event.currentTarget).data(dataKey));
          cov_2fq140ojp5.s[43]++;

          if (!context) {
            cov_2fq140ojp5.b[5][0]++;
            cov_2fq140ojp5.s[44]++;
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            cov_2fq140ojp5.s[45]++;
            $$$1(event.currentTarget).data(dataKey, context);
          } else {
            cov_2fq140ojp5.b[5][1]++;
          }

          cov_2fq140ojp5.s[46]++;
          context._activeTrigger.click = !context._activeTrigger.click;
          cov_2fq140ojp5.s[47]++;

          if (context._isWithActiveTrigger()) {
            cov_2fq140ojp5.b[6][0]++;
            cov_2fq140ojp5.s[48]++;

            context._enter(null, context);
          } else {
            cov_2fq140ojp5.b[6][1]++;
            cov_2fq140ojp5.s[49]++;

            context._leave(null, context);
          }
        } else {
          cov_2fq140ojp5.b[4][1]++;
          cov_2fq140ojp5.s[50]++;

          if ($$$1(this.getTipElement()).hasClass(ClassName.SHOW)) {
            cov_2fq140ojp5.b[7][0]++;
            cov_2fq140ojp5.s[51]++;

            this._leave(null, this);

            cov_2fq140ojp5.s[52]++;
            return;
          } else {
            cov_2fq140ojp5.b[7][1]++;
          }

          cov_2fq140ojp5.s[53]++;

          this._enter(null, this);
        }
      };

      _proto.dispose = function dispose() {
        cov_2fq140ojp5.f[13]++;
        cov_2fq140ojp5.s[54]++;
        clearTimeout(this._timeout);
        cov_2fq140ojp5.s[55]++;
        $$$1.removeData(this.element, this.constructor.DATA_KEY);
        cov_2fq140ojp5.s[56]++;
        $$$1(this.element).off(this.constructor.EVENT_KEY);
        cov_2fq140ojp5.s[57]++;
        $$$1(this.element).closest('.modal').off('hide.bs.modal');
        cov_2fq140ojp5.s[58]++;

        if (this.tip) {
          cov_2fq140ojp5.b[8][0]++;
          cov_2fq140ojp5.s[59]++;
          $$$1(this.tip).remove();
        } else {
          cov_2fq140ojp5.b[8][1]++;
        }

        cov_2fq140ojp5.s[60]++;
        this._isEnabled = null;
        cov_2fq140ojp5.s[61]++;
        this._timeout = null;
        cov_2fq140ojp5.s[62]++;
        this._hoverState = null;
        cov_2fq140ojp5.s[63]++;
        this._activeTrigger = null;
        cov_2fq140ojp5.s[64]++;

        if (this._popper !== null) {
          cov_2fq140ojp5.b[9][0]++;
          cov_2fq140ojp5.s[65]++;

          this._popper.destroy();
        } else {
          cov_2fq140ojp5.b[9][1]++;
        }

        cov_2fq140ojp5.s[66]++;
        this._popper = null;
        cov_2fq140ojp5.s[67]++;
        this.element = null;
        cov_2fq140ojp5.s[68]++;
        this.config = null;
        cov_2fq140ojp5.s[69]++;
        this.tip = null;
      };

      _proto.show = function show() {
        var _this = this;

        cov_2fq140ojp5.f[14]++;
        cov_2fq140ojp5.s[70]++;

        if ($$$1(this.element).css('display') === 'none') {
          cov_2fq140ojp5.b[10][0]++;
          cov_2fq140ojp5.s[71]++;
          throw new Error('Please use show on visible elements');
        } else {
          cov_2fq140ojp5.b[10][1]++;
        }

        var showEvent = (cov_2fq140ojp5.s[72]++, $$$1.Event(this.constructor.Event.SHOW));
        cov_2fq140ojp5.s[73]++;

        if ((cov_2fq140ojp5.b[12][0]++, this.isWithContent()) && (cov_2fq140ojp5.b[12][1]++, this._isEnabled)) {
          cov_2fq140ojp5.b[11][0]++;
          cov_2fq140ojp5.s[74]++;
          $$$1(this.element).trigger(showEvent);
          var isInTheDom = (cov_2fq140ojp5.s[75]++, $$$1.contains(this.element.ownerDocument.documentElement, this.element));
          cov_2fq140ojp5.s[76]++;

          if ((cov_2fq140ojp5.b[14][0]++, showEvent.isDefaultPrevented()) || (cov_2fq140ojp5.b[14][1]++, !isInTheDom)) {
            cov_2fq140ojp5.b[13][0]++;
            cov_2fq140ojp5.s[77]++;
            return;
          } else {
            cov_2fq140ojp5.b[13][1]++;
          }

          var tip = (cov_2fq140ojp5.s[78]++, this.getTipElement());
          var tipId = (cov_2fq140ojp5.s[79]++, Util.getUID(this.constructor.NAME));
          cov_2fq140ojp5.s[80]++;
          tip.setAttribute('id', tipId);
          cov_2fq140ojp5.s[81]++;
          this.element.setAttribute('aria-describedby', tipId);
          cov_2fq140ojp5.s[82]++;
          this.setContent();
          cov_2fq140ojp5.s[83]++;

          if (this.config.animation) {
            cov_2fq140ojp5.b[15][0]++;
            cov_2fq140ojp5.s[84]++;
            $$$1(tip).addClass(ClassName.FADE);
          } else {
            cov_2fq140ojp5.b[15][1]++;
          }

          var placement = (cov_2fq140ojp5.s[85]++, typeof this.config.placement === 'function' ? (cov_2fq140ojp5.b[16][0]++, this.config.placement.call(this, tip, this.element)) : (cov_2fq140ojp5.b[16][1]++, this.config.placement));
          var attachment = (cov_2fq140ojp5.s[86]++, this._getAttachment(placement));
          cov_2fq140ojp5.s[87]++;
          this.addAttachmentClass(attachment);
          var container = (cov_2fq140ojp5.s[88]++, this.config.container === false ? (cov_2fq140ojp5.b[17][0]++, document.body) : (cov_2fq140ojp5.b[17][1]++, $$$1(document).find(this.config.container)));
          cov_2fq140ojp5.s[89]++;
          $$$1(tip).data(this.constructor.DATA_KEY, this);
          cov_2fq140ojp5.s[90]++;

          if (!$$$1.contains(this.element.ownerDocument.documentElement, this.tip)) {
            cov_2fq140ojp5.b[18][0]++;
            cov_2fq140ojp5.s[91]++;
            $$$1(tip).appendTo(container);
          } else {
            cov_2fq140ojp5.b[18][1]++;
          }

          cov_2fq140ojp5.s[92]++;
          $$$1(this.element).trigger(this.constructor.Event.INSERTED);
          cov_2fq140ojp5.s[93]++;
          this._popper = new Popper(this.element, tip, {
            placement: attachment,
            modifiers: {
              offset: {
                offset: this.config.offset
              },
              flip: {
                behavior: this.config.fallbackPlacement
              },
              arrow: {
                element: Selector.ARROW
              },
              preventOverflow: {
                boundariesElement: this.config.boundary
              }
            },
            onCreate: function onCreate(data) {
              cov_2fq140ojp5.f[15]++;
              cov_2fq140ojp5.s[94]++;

              if (data.originalPlacement !== data.placement) {
                cov_2fq140ojp5.b[19][0]++;
                cov_2fq140ojp5.s[95]++;

                _this._handlePopperPlacementChange(data);
              } else {
                cov_2fq140ojp5.b[19][1]++;
              }
            },
            onUpdate: function onUpdate(data) {
              cov_2fq140ojp5.f[16]++;
              cov_2fq140ojp5.s[96]++;

              _this._handlePopperPlacementChange(data);
            }
          });
          cov_2fq140ojp5.s[97]++;
          $$$1(tip).addClass(ClassName.SHOW); // If this is a touch-enabled device we add extra
          // empty mouseover listeners to the body's immediate children;
          // only needed because of broken event delegation on iOS
          // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

          cov_2fq140ojp5.s[98]++;

          if ('ontouchstart' in document.documentElement) {
            cov_2fq140ojp5.b[20][0]++;
            cov_2fq140ojp5.s[99]++;
            $$$1(document.body).children().on('mouseover', null, $$$1.noop);
          } else {
            cov_2fq140ojp5.b[20][1]++;
          }

          cov_2fq140ojp5.s[100]++;

          var complete = function complete() {
            cov_2fq140ojp5.f[17]++;
            cov_2fq140ojp5.s[101]++;

            if (_this.config.animation) {
              cov_2fq140ojp5.b[21][0]++;
              cov_2fq140ojp5.s[102]++;

              _this._fixTransition();
            } else {
              cov_2fq140ojp5.b[21][1]++;
            }

            var prevHoverState = (cov_2fq140ojp5.s[103]++, _this._hoverState);
            cov_2fq140ojp5.s[104]++;
            _this._hoverState = null;
            cov_2fq140ojp5.s[105]++;
            $$$1(_this.element).trigger(_this.constructor.Event.SHOWN);
            cov_2fq140ojp5.s[106]++;

            if (prevHoverState === HoverState.OUT) {
              cov_2fq140ojp5.b[22][0]++;
              cov_2fq140ojp5.s[107]++;

              _this._leave(null, _this);
            } else {
              cov_2fq140ojp5.b[22][1]++;
            }
          };

          cov_2fq140ojp5.s[108]++;

          if ($$$1(this.tip).hasClass(ClassName.FADE)) {
            cov_2fq140ojp5.b[23][0]++;
            var transitionDuration = (cov_2fq140ojp5.s[109]++, Util.getTransitionDurationFromElement(this.tip));
            cov_2fq140ojp5.s[110]++;
            $$$1(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            cov_2fq140ojp5.b[23][1]++;
            cov_2fq140ojp5.s[111]++;
            complete();
          }
        } else {
          cov_2fq140ojp5.b[11][1]++;
        }
      };

      _proto.hide = function hide(callback) {
        var _this2 = this;

        cov_2fq140ojp5.f[18]++;
        var tip = (cov_2fq140ojp5.s[112]++, this.getTipElement());
        var hideEvent = (cov_2fq140ojp5.s[113]++, $$$1.Event(this.constructor.Event.HIDE));
        cov_2fq140ojp5.s[114]++;

        var complete = function complete() {
          cov_2fq140ojp5.f[19]++;
          cov_2fq140ojp5.s[115]++;

          if ((cov_2fq140ojp5.b[25][0]++, _this2._hoverState !== HoverState.SHOW) && (cov_2fq140ojp5.b[25][1]++, tip.parentNode)) {
            cov_2fq140ojp5.b[24][0]++;
            cov_2fq140ojp5.s[116]++;
            tip.parentNode.removeChild(tip);
          } else {
            cov_2fq140ojp5.b[24][1]++;
          }

          cov_2fq140ojp5.s[117]++;

          _this2._cleanTipClass();

          cov_2fq140ojp5.s[118]++;

          _this2.element.removeAttribute('aria-describedby');

          cov_2fq140ojp5.s[119]++;
          $$$1(_this2.element).trigger(_this2.constructor.Event.HIDDEN);
          cov_2fq140ojp5.s[120]++;

          if (_this2._popper !== null) {
            cov_2fq140ojp5.b[26][0]++;
            cov_2fq140ojp5.s[121]++;

            _this2._popper.destroy();
          } else {
            cov_2fq140ojp5.b[26][1]++;
          }

          cov_2fq140ojp5.s[122]++;

          if (callback) {
            cov_2fq140ojp5.b[27][0]++;
            cov_2fq140ojp5.s[123]++;
            callback();
          } else {
            cov_2fq140ojp5.b[27][1]++;
          }
        };

        cov_2fq140ojp5.s[124]++;
        $$$1(this.element).trigger(hideEvent);
        cov_2fq140ojp5.s[125]++;

        if (hideEvent.isDefaultPrevented()) {
          cov_2fq140ojp5.b[28][0]++;
          cov_2fq140ojp5.s[126]++;
          return;
        } else {
          cov_2fq140ojp5.b[28][1]++;
        }

        cov_2fq140ojp5.s[127]++;
        $$$1(tip).removeClass(ClassName.SHOW); // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support

        cov_2fq140ojp5.s[128]++;

        if ('ontouchstart' in document.documentElement) {
          cov_2fq140ojp5.b[29][0]++;
          cov_2fq140ojp5.s[129]++;
          $$$1(document.body).children().off('mouseover', null, $$$1.noop);
        } else {
          cov_2fq140ojp5.b[29][1]++;
        }

        cov_2fq140ojp5.s[130]++;
        this._activeTrigger[Trigger.CLICK] = false;
        cov_2fq140ojp5.s[131]++;
        this._activeTrigger[Trigger.FOCUS] = false;
        cov_2fq140ojp5.s[132]++;
        this._activeTrigger[Trigger.HOVER] = false;
        cov_2fq140ojp5.s[133]++;

        if ($$$1(this.tip).hasClass(ClassName.FADE)) {
          cov_2fq140ojp5.b[30][0]++;
          var transitionDuration = (cov_2fq140ojp5.s[134]++, Util.getTransitionDurationFromElement(tip));
          cov_2fq140ojp5.s[135]++;
          $$$1(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          cov_2fq140ojp5.b[30][1]++;
          cov_2fq140ojp5.s[136]++;
          complete();
        }

        cov_2fq140ojp5.s[137]++;
        this._hoverState = '';
      };

      _proto.update = function update() {
        cov_2fq140ojp5.f[20]++;
        cov_2fq140ojp5.s[138]++;

        if (this._popper !== null) {
          cov_2fq140ojp5.b[31][0]++;
          cov_2fq140ojp5.s[139]++;

          this._popper.scheduleUpdate();
        } else {
          cov_2fq140ojp5.b[31][1]++;
        }
      }; // Protected


      _proto.isWithContent = function isWithContent() {
        cov_2fq140ojp5.f[21]++;
        cov_2fq140ojp5.s[140]++;
        return Boolean(this.getTitle());
      };

      _proto.addAttachmentClass = function addAttachmentClass(attachment) {
        cov_2fq140ojp5.f[22]++;
        cov_2fq140ojp5.s[141]++;
        $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
      };

      _proto.getTipElement = function getTipElement() {
        cov_2fq140ojp5.f[23]++;
        cov_2fq140ojp5.s[142]++;
        this.tip = (cov_2fq140ojp5.b[32][0]++, this.tip) || (cov_2fq140ojp5.b[32][1]++, $$$1(this.config.template)[0]);
        cov_2fq140ojp5.s[143]++;
        return this.tip;
      };

      _proto.setContent = function setContent() {
        cov_2fq140ojp5.f[24]++;
        var tip = (cov_2fq140ojp5.s[144]++, this.getTipElement());
        cov_2fq140ojp5.s[145]++;
        this.setElementContent($$$1(tip.querySelectorAll(Selector.TOOLTIP_INNER)), this.getTitle());
        cov_2fq140ojp5.s[146]++;
        $$$1(tip).removeClass(ClassName.FADE + " " + ClassName.SHOW);
      };

      _proto.setElementContent = function setElementContent($element, content) {
        cov_2fq140ojp5.f[25]++;
        var html = (cov_2fq140ojp5.s[147]++, this.config.html);
        cov_2fq140ojp5.s[148]++;

        if ((cov_2fq140ojp5.b[34][0]++, typeof content === 'object') && ((cov_2fq140ojp5.b[34][1]++, content.nodeType) || (cov_2fq140ojp5.b[34][2]++, content.jquery))) {
          cov_2fq140ojp5.b[33][0]++;
          cov_2fq140ojp5.s[149]++;

          // Content is a DOM node or a jQuery
          if (html) {
            cov_2fq140ojp5.b[35][0]++;
            cov_2fq140ojp5.s[150]++;

            if (!$$$1(content).parent().is($element)) {
              cov_2fq140ojp5.b[36][0]++;
              cov_2fq140ojp5.s[151]++;
              $element.empty().append(content);
            } else {
              cov_2fq140ojp5.b[36][1]++;
            }
          } else {
            cov_2fq140ojp5.b[35][1]++;
            cov_2fq140ojp5.s[152]++;
            $element.text($$$1(content).text());
          }
        } else {
          cov_2fq140ojp5.b[33][1]++;
          cov_2fq140ojp5.s[153]++;
          $element[html ? (cov_2fq140ojp5.b[37][0]++, 'html') : (cov_2fq140ojp5.b[37][1]++, 'text')](content);
        }
      };

      _proto.getTitle = function getTitle() {
        cov_2fq140ojp5.f[26]++;
        var title = (cov_2fq140ojp5.s[154]++, this.element.getAttribute('data-original-title'));
        cov_2fq140ojp5.s[155]++;

        if (!title) {
          cov_2fq140ojp5.b[38][0]++;
          cov_2fq140ojp5.s[156]++;
          title = typeof this.config.title === 'function' ? (cov_2fq140ojp5.b[39][0]++, this.config.title.call(this.element)) : (cov_2fq140ojp5.b[39][1]++, this.config.title);
        } else {
          cov_2fq140ojp5.b[38][1]++;
        }

        cov_2fq140ojp5.s[157]++;
        return title;
      }; // Private


      _proto._getAttachment = function _getAttachment(placement) {
        cov_2fq140ojp5.f[27]++;
        cov_2fq140ojp5.s[158]++;
        return AttachmentMap[placement.toUpperCase()];
      };

      _proto._setListeners = function _setListeners() {
        var _this3 = this;

        cov_2fq140ojp5.f[28]++;
        var triggers = (cov_2fq140ojp5.s[159]++, this.config.trigger.split(' '));
        cov_2fq140ojp5.s[160]++;
        triggers.forEach(function (trigger) {
          cov_2fq140ojp5.f[29]++;
          cov_2fq140ojp5.s[161]++;

          if (trigger === 'click') {
            cov_2fq140ojp5.b[40][0]++;
            cov_2fq140ojp5.s[162]++;
            $$$1(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
              cov_2fq140ojp5.f[30]++;
              cov_2fq140ojp5.s[163]++;
              return _this3.toggle(event);
            });
          } else {
            cov_2fq140ojp5.b[40][1]++;
            cov_2fq140ojp5.s[164]++;

            if (trigger !== Trigger.MANUAL) {
              cov_2fq140ojp5.b[41][0]++;
              var eventIn = (cov_2fq140ojp5.s[165]++, trigger === Trigger.HOVER ? (cov_2fq140ojp5.b[42][0]++, _this3.constructor.Event.MOUSEENTER) : (cov_2fq140ojp5.b[42][1]++, _this3.constructor.Event.FOCUSIN));
              var eventOut = (cov_2fq140ojp5.s[166]++, trigger === Trigger.HOVER ? (cov_2fq140ojp5.b[43][0]++, _this3.constructor.Event.MOUSELEAVE) : (cov_2fq140ojp5.b[43][1]++, _this3.constructor.Event.FOCUSOUT));
              cov_2fq140ojp5.s[167]++;
              $$$1(_this3.element).on(eventIn, _this3.config.selector, function (event) {
                cov_2fq140ojp5.f[31]++;
                cov_2fq140ojp5.s[168]++;
                return _this3._enter(event);
              }).on(eventOut, _this3.config.selector, function (event) {
                cov_2fq140ojp5.f[32]++;
                cov_2fq140ojp5.s[169]++;
                return _this3._leave(event);
              });
            } else {
              cov_2fq140ojp5.b[41][1]++;
            }
          }

          cov_2fq140ojp5.s[170]++;
          $$$1(_this3.element).closest('.modal').on('hide.bs.modal', function () {
            cov_2fq140ojp5.f[33]++;
            cov_2fq140ojp5.s[171]++;
            return _this3.hide();
          });
        });
        cov_2fq140ojp5.s[172]++;

        if (this.config.selector) {
          cov_2fq140ojp5.b[44][0]++;
          cov_2fq140ojp5.s[173]++;
          this.config = _objectSpread({}, this.config, {
            trigger: 'manual',
            selector: ''
          });
        } else {
          cov_2fq140ojp5.b[44][1]++;
          cov_2fq140ojp5.s[174]++;

          this._fixTitle();
        }
      };

      _proto._fixTitle = function _fixTitle() {
        cov_2fq140ojp5.f[34]++;
        var titleType = (cov_2fq140ojp5.s[175]++, typeof this.element.getAttribute('data-original-title'));
        cov_2fq140ojp5.s[176]++;

        if ((cov_2fq140ojp5.b[46][0]++, this.element.getAttribute('title')) || (cov_2fq140ojp5.b[46][1]++, titleType !== 'string')) {
          cov_2fq140ojp5.b[45][0]++;
          cov_2fq140ojp5.s[177]++;
          this.element.setAttribute('data-original-title', (cov_2fq140ojp5.b[47][0]++, this.element.getAttribute('title')) || (cov_2fq140ojp5.b[47][1]++, ''));
          cov_2fq140ojp5.s[178]++;
          this.element.setAttribute('title', '');
        } else {
          cov_2fq140ojp5.b[45][1]++;
        }
      };

      _proto._enter = function _enter(event, context) {
        cov_2fq140ojp5.f[35]++;
        var dataKey = (cov_2fq140ojp5.s[179]++, this.constructor.DATA_KEY);
        cov_2fq140ojp5.s[180]++;
        context = (cov_2fq140ojp5.b[48][0]++, context) || (cov_2fq140ojp5.b[48][1]++, $$$1(event.currentTarget).data(dataKey));
        cov_2fq140ojp5.s[181]++;

        if (!context) {
          cov_2fq140ojp5.b[49][0]++;
          cov_2fq140ojp5.s[182]++;
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          cov_2fq140ojp5.s[183]++;
          $$$1(event.currentTarget).data(dataKey, context);
        } else {
          cov_2fq140ojp5.b[49][1]++;
        }

        cov_2fq140ojp5.s[184]++;

        if (event) {
          cov_2fq140ojp5.b[50][0]++;
          cov_2fq140ojp5.s[185]++;
          context._activeTrigger[event.type === 'focusin' ? (cov_2fq140ojp5.b[51][0]++, Trigger.FOCUS) : (cov_2fq140ojp5.b[51][1]++, Trigger.HOVER)] = true;
        } else {
          cov_2fq140ojp5.b[50][1]++;
        }

        cov_2fq140ojp5.s[186]++;

        if ((cov_2fq140ojp5.b[53][0]++, $$$1(context.getTipElement()).hasClass(ClassName.SHOW)) || (cov_2fq140ojp5.b[53][1]++, context._hoverState === HoverState.SHOW)) {
          cov_2fq140ojp5.b[52][0]++;
          cov_2fq140ojp5.s[187]++;
          context._hoverState = HoverState.SHOW;
          cov_2fq140ojp5.s[188]++;
          return;
        } else {
          cov_2fq140ojp5.b[52][1]++;
        }

        cov_2fq140ojp5.s[189]++;
        clearTimeout(context._timeout);
        cov_2fq140ojp5.s[190]++;
        context._hoverState = HoverState.SHOW;
        cov_2fq140ojp5.s[191]++;

        if ((cov_2fq140ojp5.b[55][0]++, !context.config.delay) || (cov_2fq140ojp5.b[55][1]++, !context.config.delay.show)) {
          cov_2fq140ojp5.b[54][0]++;
          cov_2fq140ojp5.s[192]++;
          context.show();
          cov_2fq140ojp5.s[193]++;
          return;
        } else {
          cov_2fq140ojp5.b[54][1]++;
        }

        cov_2fq140ojp5.s[194]++;
        context._timeout = setTimeout(function () {
          cov_2fq140ojp5.f[36]++;
          cov_2fq140ojp5.s[195]++;

          if (context._hoverState === HoverState.SHOW) {
            cov_2fq140ojp5.b[56][0]++;
            cov_2fq140ojp5.s[196]++;
            context.show();
          } else {
            cov_2fq140ojp5.b[56][1]++;
          }
        }, context.config.delay.show);
      };

      _proto._leave = function _leave(event, context) {
        cov_2fq140ojp5.f[37]++;
        var dataKey = (cov_2fq140ojp5.s[197]++, this.constructor.DATA_KEY);
        cov_2fq140ojp5.s[198]++;
        context = (cov_2fq140ojp5.b[57][0]++, context) || (cov_2fq140ojp5.b[57][1]++, $$$1(event.currentTarget).data(dataKey));
        cov_2fq140ojp5.s[199]++;

        if (!context) {
          cov_2fq140ojp5.b[58][0]++;
          cov_2fq140ojp5.s[200]++;
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          cov_2fq140ojp5.s[201]++;
          $$$1(event.currentTarget).data(dataKey, context);
        } else {
          cov_2fq140ojp5.b[58][1]++;
        }

        cov_2fq140ojp5.s[202]++;

        if (event) {
          cov_2fq140ojp5.b[59][0]++;
          cov_2fq140ojp5.s[203]++;
          context._activeTrigger[event.type === 'focusout' ? (cov_2fq140ojp5.b[60][0]++, Trigger.FOCUS) : (cov_2fq140ojp5.b[60][1]++, Trigger.HOVER)] = false;
        } else {
          cov_2fq140ojp5.b[59][1]++;
        }

        cov_2fq140ojp5.s[204]++;

        if (context._isWithActiveTrigger()) {
          cov_2fq140ojp5.b[61][0]++;
          cov_2fq140ojp5.s[205]++;
          return;
        } else {
          cov_2fq140ojp5.b[61][1]++;
        }

        cov_2fq140ojp5.s[206]++;
        clearTimeout(context._timeout);
        cov_2fq140ojp5.s[207]++;
        context._hoverState = HoverState.OUT;
        cov_2fq140ojp5.s[208]++;

        if ((cov_2fq140ojp5.b[63][0]++, !context.config.delay) || (cov_2fq140ojp5.b[63][1]++, !context.config.delay.hide)) {
          cov_2fq140ojp5.b[62][0]++;
          cov_2fq140ojp5.s[209]++;
          context.hide();
          cov_2fq140ojp5.s[210]++;
          return;
        } else {
          cov_2fq140ojp5.b[62][1]++;
        }

        cov_2fq140ojp5.s[211]++;
        context._timeout = setTimeout(function () {
          cov_2fq140ojp5.f[38]++;
          cov_2fq140ojp5.s[212]++;

          if (context._hoverState === HoverState.OUT) {
            cov_2fq140ojp5.b[64][0]++;
            cov_2fq140ojp5.s[213]++;
            context.hide();
          } else {
            cov_2fq140ojp5.b[64][1]++;
          }
        }, context.config.delay.hide);
      };

      _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
        cov_2fq140ojp5.f[39]++;
        cov_2fq140ojp5.s[214]++;

        for (var trigger in this._activeTrigger) {
          cov_2fq140ojp5.s[215]++;

          if (this._activeTrigger[trigger]) {
            cov_2fq140ojp5.b[65][0]++;
            cov_2fq140ojp5.s[216]++;
            return true;
          } else {
            cov_2fq140ojp5.b[65][1]++;
          }
        }

        cov_2fq140ojp5.s[217]++;
        return false;
      };

      _proto._getConfig = function _getConfig(config) {
        cov_2fq140ojp5.f[40]++;
        cov_2fq140ojp5.s[218]++;
        config = _objectSpread({}, this.constructor.Default, $$$1(this.element).data(), (cov_2fq140ojp5.b[67][0]++, typeof config === 'object') && (cov_2fq140ojp5.b[67][1]++, config) ? (cov_2fq140ojp5.b[66][0]++, config) : (cov_2fq140ojp5.b[66][1]++, {}));
        cov_2fq140ojp5.s[219]++;

        if (typeof config.delay === 'number') {
          cov_2fq140ojp5.b[68][0]++;
          cov_2fq140ojp5.s[220]++;
          config.delay = {
            show: config.delay,
            hide: config.delay
          };
        } else {
          cov_2fq140ojp5.b[68][1]++;
        }

        cov_2fq140ojp5.s[221]++;

        if (typeof config.title === 'number') {
          cov_2fq140ojp5.b[69][0]++;
          cov_2fq140ojp5.s[222]++;
          config.title = config.title.toString();
        } else {
          cov_2fq140ojp5.b[69][1]++;
        }

        cov_2fq140ojp5.s[223]++;

        if (typeof config.content === 'number') {
          cov_2fq140ojp5.b[70][0]++;
          cov_2fq140ojp5.s[224]++;
          config.content = config.content.toString();
        } else {
          cov_2fq140ojp5.b[70][1]++;
        }

        cov_2fq140ojp5.s[225]++;
        Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
        cov_2fq140ojp5.s[226]++;
        return config;
      };

      _proto._getDelegateConfig = function _getDelegateConfig() {
        cov_2fq140ojp5.f[41]++;
        var config = (cov_2fq140ojp5.s[227]++, {});
        cov_2fq140ojp5.s[228]++;

        if (this.config) {
          cov_2fq140ojp5.b[71][0]++;
          cov_2fq140ojp5.s[229]++;

          for (var key in this.config) {
            cov_2fq140ojp5.s[230]++;

            if (this.constructor.Default[key] !== this.config[key]) {
              cov_2fq140ojp5.b[72][0]++;
              cov_2fq140ojp5.s[231]++;
              config[key] = this.config[key];
            } else {
              cov_2fq140ojp5.b[72][1]++;
            }
          }
        } else {
          cov_2fq140ojp5.b[71][1]++;
        }

        cov_2fq140ojp5.s[232]++;
        return config;
      };

      _proto._cleanTipClass = function _cleanTipClass() {
        cov_2fq140ojp5.f[42]++;
        var $tip = (cov_2fq140ojp5.s[233]++, $$$1(this.getTipElement()));
        var tabClass = (cov_2fq140ojp5.s[234]++, $tip.attr('class').match(BSCLS_PREFIX_REGEX));
        cov_2fq140ojp5.s[235]++;

        if ((cov_2fq140ojp5.b[74][0]++, tabClass !== null) && (cov_2fq140ojp5.b[74][1]++, tabClass.length)) {
          cov_2fq140ojp5.b[73][0]++;
          cov_2fq140ojp5.s[236]++;
          $tip.removeClass(tabClass.join(''));
        } else {
          cov_2fq140ojp5.b[73][1]++;
        }
      };

      _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
        cov_2fq140ojp5.f[43]++;
        var popperInstance = (cov_2fq140ojp5.s[237]++, popperData.instance);
        cov_2fq140ojp5.s[238]++;
        this.tip = popperInstance.popper;
        cov_2fq140ojp5.s[239]++;

        this._cleanTipClass();

        cov_2fq140ojp5.s[240]++;
        this.addAttachmentClass(this._getAttachment(AttachmentMap[popperData.placement.toUpperCase()]));
      };

      _proto._fixTransition = function _fixTransition() {
        cov_2fq140ojp5.f[44]++;
        var tip = (cov_2fq140ojp5.s[241]++, this.getTipElement());
        var initConfigAnimation = (cov_2fq140ojp5.s[242]++, this.config.animation);
        cov_2fq140ojp5.s[243]++;

        if (tip.getAttribute('x-placement') !== null) {
          cov_2fq140ojp5.b[75][0]++;
          cov_2fq140ojp5.s[244]++;
          return;
        } else {
          cov_2fq140ojp5.b[75][1]++;
        }

        cov_2fq140ojp5.s[245]++;
        $$$1(tip).removeClass(ClassName.FADE);
        cov_2fq140ojp5.s[246]++;
        this.config.animation = false;
        cov_2fq140ojp5.s[247]++;
        this.hide();
        cov_2fq140ojp5.s[248]++;
        this.show();
        cov_2fq140ojp5.s[249]++;
        this.config.animation = initConfigAnimation;
      }; // Static


      Tooltip._jQueryInterface = function _jQueryInterface(config) {
        cov_2fq140ojp5.f[45]++;
        cov_2fq140ojp5.s[250]++;
        return this.each(function () {
          cov_2fq140ojp5.f[46]++;
          var data = (cov_2fq140ojp5.s[251]++, $$$1(this).data(DATA_KEY));

          var _config = (cov_2fq140ojp5.s[252]++, (cov_2fq140ojp5.b[76][0]++, typeof config === 'object') && (cov_2fq140ojp5.b[76][1]++, config));

          cov_2fq140ojp5.s[253]++;

          if ((cov_2fq140ojp5.b[78][0]++, !data) && (cov_2fq140ojp5.b[78][1]++, /dispose|hide/.test(config))) {
            cov_2fq140ojp5.b[77][0]++;
            cov_2fq140ojp5.s[254]++;
            return;
          } else {
            cov_2fq140ojp5.b[77][1]++;
          }

          cov_2fq140ojp5.s[255]++;

          if (!data) {
            cov_2fq140ojp5.b[79][0]++;
            cov_2fq140ojp5.s[256]++;
            data = new Tooltip(this, _config);
            cov_2fq140ojp5.s[257]++;
            $$$1(this).data(DATA_KEY, data);
          } else {
            cov_2fq140ojp5.b[79][1]++;
          }

          cov_2fq140ojp5.s[258]++;

          if (typeof config === 'string') {
            cov_2fq140ojp5.b[80][0]++;
            cov_2fq140ojp5.s[259]++;

            if (typeof data[config] === 'undefined') {
              cov_2fq140ojp5.b[81][0]++;
              cov_2fq140ojp5.s[260]++;
              throw new TypeError("No method named \"" + config + "\"");
            } else {
              cov_2fq140ojp5.b[81][1]++;
            }

            cov_2fq140ojp5.s[261]++;
            data[config]();
          } else {
            cov_2fq140ojp5.b[80][1]++;
          }
        });
      };

      _createClass(Tooltip, null, [{
        key: "VERSION",
        get: function get() {
          cov_2fq140ojp5.f[2]++;
          cov_2fq140ojp5.s[28]++;
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          cov_2fq140ojp5.f[3]++;
          cov_2fq140ojp5.s[29]++;
          return Default;
        }
      }, {
        key: "NAME",
        get: function get() {
          cov_2fq140ojp5.f[4]++;
          cov_2fq140ojp5.s[30]++;
          return NAME;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          cov_2fq140ojp5.f[5]++;
          cov_2fq140ojp5.s[31]++;
          return DATA_KEY;
        }
      }, {
        key: "Event",
        get: function get() {
          cov_2fq140ojp5.f[6]++;
          cov_2fq140ojp5.s[32]++;
          return Event;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          cov_2fq140ojp5.f[7]++;
          cov_2fq140ojp5.s[33]++;
          return EVENT_KEY;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          cov_2fq140ojp5.f[8]++;
          cov_2fq140ojp5.s[34]++;
          return DefaultType;
        }
      }]);

      return Tooltip;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    cov_2fq140ojp5.s[262]++;
    $$$1.fn[NAME] = Tooltip._jQueryInterface;
    cov_2fq140ojp5.s[263]++;
    $$$1.fn[NAME].Constructor = Tooltip;
    cov_2fq140ojp5.s[264]++;

    $$$1.fn[NAME].noConflict = function () {
      cov_2fq140ojp5.f[47]++;
      cov_2fq140ojp5.s[265]++;
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_2fq140ojp5.s[266]++;
      return Tooltip._jQueryInterface;
    };

    cov_2fq140ojp5.s[267]++;
    return Tooltip;
  }($, Popper));

  return Tooltip;

})));
//# sourceMappingURL=tooltip.js.map
