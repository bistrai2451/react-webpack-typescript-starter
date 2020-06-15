"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _App = require("./components/App");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

ReactDOM.render( /*#__PURE__*/React.createElement(_App.App, {
  userName: 'Andre',
  lang: 'TypeScript'
}), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBQSxRQUFRLENBQUNDLE1BQVQsZUFDSSxvQkFBQyxRQUFEO0FBQUssRUFBQSxRQUFRLEVBQUUsT0FBZjtBQUF3QixFQUFBLElBQUksRUFBRTtBQUE5QixFQURKLEVBRUlDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUZKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPEFwcCB1c2VyTmFtZT17J0FuZHJlJ30gbGFuZz17J1R5cGVTY3JpcHQnfSAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbikiXX0=