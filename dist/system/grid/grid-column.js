System.register([], function (_export) {
  "use strict";

  var GridColumn;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      GridColumn = function GridColumn(config, template) {
        _classCallCheck(this, GridColumn);

        this.specialColumns = ["heading", "nosort"];

        this.template = template;
        this.field = config.field;

        if (!this.field) throw new Error("field is required");

        this.heading = config.heading || config.field;
        this.nosort = config.nosort || false;
        this.filterValue = "";
        this.showFilter = config["show-filter"] === "false" ? false : true;

        for (var prop in config) {
          if (config.hasOwnProperty(prop) && this.specialColumns.indexOf(prop) < 0) {
            this[prop] = config[prop];
          }
        }
      };

      _export("GridColumn", GridColumn);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQvZ3JpZC1jb2x1bW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQWEsVUFBVTs7Ozs7OztBQUFWLGdCQUFVLEdBSVYsU0FKQSxVQUFVLENBSVQsTUFBTSxFQUFFLFFBQVEsRUFBRTs4QkFKbkIsVUFBVTs7YUFFckIsY0FBYyxHQUFHLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQzs7QUFHcEMsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsWUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDOztBQUUxQixZQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDYixNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7O0FBRXZDLFlBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQzlDLFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7QUFDckMsWUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDdEIsWUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssT0FBTyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7O0FBR25FLGFBQUssSUFBSSxJQUFJLElBQUksTUFBTSxFQUFFO0FBQ3ZCLGNBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDeEUsZ0JBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7V0FDM0I7U0FDRjtPQUNGOzs0QkF0QlUsVUFBVSIsImZpbGUiOiJncmlkL2dyaWQtY29sdW1uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEdyaWRDb2x1bW4ge1xuXG4gIHNwZWNpYWxDb2x1bW5zID0gW1wiaGVhZGluZ1wiLCBcIm5vc29ydFwiXTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcsIHRlbXBsYXRlKSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMuZmllbGQgPSBjb25maWcuZmllbGQ7XG5cbiAgICBpZiAoIXRoaXMuZmllbGQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaWVsZCBpcyByZXF1aXJlZFwiKTtcblxuICAgIHRoaXMuaGVhZGluZyA9IGNvbmZpZy5oZWFkaW5nIHx8IGNvbmZpZy5maWVsZDtcbiAgICB0aGlzLm5vc29ydCA9IGNvbmZpZy5ub3NvcnQgfHwgZmFsc2U7XG4gICAgdGhpcy5maWx0ZXJWYWx1ZSA9IFwiXCI7XG4gICAgdGhpcy5zaG93RmlsdGVyID0gY29uZmlnW1wic2hvdy1maWx0ZXJcIl0gPT09IFwiZmFsc2VcIiA/IGZhbHNlIDogdHJ1ZTtcblxuICAgIC8vIFNldCBhdHRyaWJ1dGVzXG4gICAgZm9yICh2YXIgcHJvcCBpbiBjb25maWcpIHtcbiAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgdGhpcy5zcGVjaWFsQ29sdW1ucy5pbmRleE9mKHByb3ApIDwgMCkge1xuICAgICAgICB0aGlzW3Byb3BdID0gY29uZmlnW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=