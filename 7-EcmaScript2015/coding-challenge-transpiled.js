'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function Element(name, buildYear) {
    _classCallCheck(this, Element);

    this.name = name;
    this.buildYear = buildYear;
};

var Park = function (_Element) {
    _inherits(Park, _Element);

    function Park(name, buildYear, numOfTrees, area) {
        _classCallCheck(this, Park);

        var _this = _possibleConstructorReturn(this, (Park.__proto__ || Object.getPrototypeOf(Park)).call(this, name, buildYear));

        _this.numOfTrees = numOfTrees;
        _this.area = area;
        return _this;
    }

    _createClass(Park, [{
        key: 'treeDensity',
        value: function treeDensity() {
            return this.numOfTrees / this.area;
        }
    }, {
        key: 'calculateAge',
        value: function calculateAge() {
            var age = new Date().getFullYear() - this.buildYear;
            return age;
        }
    }]);

    return Park;
}(Element);

var Street = function (_Element2) {
    _inherits(Street, _Element2);

    function Street(name, buildYear, length) {
        var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;

        _classCallCheck(this, Street);

        var _this2 = _possibleConstructorReturn(this, (Street.__proto__ || Object.getPrototypeOf(Street)).call(this, name, buildYear));

        _this2.length = length;
        _this2.size = size;
        return _this2;
    }

    _createClass(Street, [{
        key: 'classifyStreet',
        value: function classifyStreet() {
            var streetSize = new Map();
            streetSize.set(1, 'tiny');
            streetSize.set(2, 'small');
            streetSize.set(3, 'normal');
            streetSize.set(4, 'big');
            streetSize.set(5, 'huge');

            console.log(this.name + ', built in ' + this.buildYear + ', is a ' + streetSize.get(this.size) + ' street.');
        }
    }]);

    return Street;
}(Element);

var greenPark = new Park('Green Park', 1987, 215, 0.2);
var nationalPark = new Park('National Park', 1894, 3541, 2.9);
var oakPark = new Park('Oak Park', 1953, 949, 0.4);

var allParks = [greenPark, nationalPark, oakPark];

var oceanAvenue = new Street('Ocean Avenue', 1999, 1.1, 4);
var evergreenStreet = new Street('Evergreen Street', 2008, 2.7, 2);
var fourthStreet = new Street('4th Street', 2015, 0.8);
var sunsetBoulevard = new Street('Sunset Boulevard', 1982, 2.5, 5);

var allStreets = [oceanAvenue, evergreenStreet, fourthStreet, sunsetBoulevard];

function reportParks(p) {
    console.log('----PARKS REPORT----');
    var totalAge = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = p[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var park = _step.value;

            totalAge += park.calculateAge();
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var numOfParks = p.length;
    var averageAge = numOfParks > 0 ? totalAge / numOfParks : 'n/a';
    console.log('Our ' + numOfParks + ' parks have an average age of ' + averageAge + ' years.');

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = p[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _park = _step2.value;

            console.log(_park.name + ' has a tree density of ' + _park.treeDensity() + ' trees per square km.');
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    p.forEach(function (park) {
        if (park.numOfTrees > 1000) {
            console.log(park.name + ' has more than 1000 trees.');
        }
    });
}

function reportStreets(s) {
    console.log('----STREETS REPORT----');

    var totalLength = 0;
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = s[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var street = _step3.value;

            totalLength += street.length;
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    var numOfStreets = s.length;
    var averageLength = numOfStreets > 0 ? totalLength / numOfStreets : 'n/a';
    console.log('Our ' + numOfStreets + ' streets have a total length of ' + totalLength + ' km, with an average of ' + averageLength + ' km.');

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = s[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _street = _step4.value;

            _street.classifyStreet();
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }
}

reportParks(allParks);
reportStreets(allStreets);
