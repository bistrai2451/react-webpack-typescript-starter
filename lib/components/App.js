"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var App = function App(_ref) {
  var userName = _ref.userName,
      lang = _ref.lang;
  return /*#__PURE__*/React.createElement("h1", null, "Hi ", userName, "! Welcome to the ", lang, " Webpack starter project with React.");
};

exports.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC50c3giXSwibmFtZXMiOlsiQXBwIiwidXNlck5hbWUiLCJsYW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7O0FBT08sSUFBTUEsR0FBdUIsR0FBRyxTQUExQkEsR0FBMEI7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxJQUFiLFFBQWFBLElBQWI7QUFBQSxzQkFDbkMsdUNBQ1FELFFBRFIsdUJBQ21DQyxJQURuQyx5Q0FEbUM7QUFBQSxDQUFoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBBcHBQcm9wcyB7XG4gICAgdXNlck5hbWU6IHN0cmluZztcbiAgICBsYW5nOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IHVzZXJOYW1lLCBsYW5nIH0pID0+IChcbiAgICA8aDE+XG4gICAgICAgIEhpIHt1c2VyTmFtZX0hIFdlbGNvbWUgdG8gdGhlIHtsYW5nfSBXZWJwYWNrIHN0YXJ0ZXIgcHJvamVjdCB3aXRoIFJlYWN0LlxuICAgIDwvaDE+XG4pOyJdfQ==