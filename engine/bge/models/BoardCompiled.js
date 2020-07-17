var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoardReact = function (_React$Component) {
  _inherits(BoardReact, _React$Component);

  function BoardReact(props) {
    _classCallCheck(this, BoardReact);

    var _this = _possibleConstructorReturn(this, (BoardReact.__proto__ || Object.getPrototypeOf(BoardReact)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(BoardReact, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var top_tiles = [];
      var bottom_tiles = [];
      var left_tiles = [];
      var right_tiles = [];
      var j = 0;
      Object.values(this.props.tileSet.tiles).map(function (i) {
        if (_this2.props.lang && _this2.props.lang != "default") {} else {
          var ui = i.name;
        }
        if (j < _this2.props.config.top_bottom_tile) {
          top_tiles.push(React.createElement(
            "div",
            { className: "tile",style:{width:(100/_this2.props.config.top_bottom_tile).toString()+"%"} },
            ui
          ));
        } else if (j < _this2.props.config.top_bottom_tile + _this2.props.config.right_left_tile - 2) {
          right_tiles.push(React.createElement(
            "div",
            { className: "tile" },
            ui
          ));
        } else if (j < _this2.props.config.top_bottom_tile * 2 + _this2.props.config.right_left_tile - 2) {
          bottom_tiles.push(React.createElement(
            "div",
            { className: "tile", style:{width:(100/_this2.props.config.top_bottom_tile).toString()+"%"} },
            ui
          ));
        } else if (j < _this2.props.config.top_bottom_tile * 2 + _this2.props.config.right_left_tile * 2 - 4) {
          left_tiles.push(React.createElement(
            "div",
            { className: "tile" },
            ui
          ));
        }
        j++;
      });

      return React.createElement(
        "div",
        { style: {
            /* width: 1080; */
            position: "relative",
            width: "max-content",
            height: (15 * this.props.config.right_left_tile + 0.1 * (this.props.config.right_left_tile-1)).toString() + "em",
            border: "solid"
          } },
        React.createElement(
          "div",
          { "class": "tile_grid not_bottom" },
          React.createElement(
            "div",
            { "class": "tile_grid top" },
            top_tiles
          ),
          React.createElement(
            "div",
            { "class": " tile_grid middle" },
            React.createElement(
              "div",
              { "class": "tile_grid right" },
              right_tiles
            ),
            React.createElement("div", { "class": "tile_grid middle_center" }),
            React.createElement(
              "div",
              { "class": "tile_grid left" },
              left_tiles
            )
          )
        ),
        React.createElement(
          "div",
          { "class": "tile_grid bottom", "style" : {width:"initial",marginTop:"0.2em"}},
          bottom_tiles
        )
      );
    }
  }]);

  return BoardReact;
}(React.Component);
