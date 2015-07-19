System.register(['aurelia-framework', './grid-column', 'gooy/aurelia-compiler', './aurelia-bs-grid.css!'], function (_export) {
  'use strict';

  var bindable, inject, skipContentProcessing, ObserverLocator, customElement, GridColumn, Compiler, Grid;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
      skipContentProcessing = _aureliaFramework.skipContentProcessing;
      ObserverLocator = _aureliaFramework.ObserverLocator;
      customElement = _aureliaFramework.customElement;
    }, function (_gridColumn) {
      GridColumn = _gridColumn.GridColumn;
    }, function (_gooyAureliaCompiler) {
      Compiler = _gooyAureliaCompiler.Compiler;
    }, function (_aureliaBsGridCss) {}],
    execute: function () {
      Grid = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(Grid, [{
          key: 'gridHeight',
          decorators: [bindable],
          initializer: function initializer() {
            return 0;
          },
          enumerable: true
        }, {
          key: 'initialLoad',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'showColumnFilters',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'serverFiltering',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'serverPaging',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'pageable',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'pageSize',
          decorators: [bindable],
          initializer: function initializer() {
            return 10;
          },
          enumerable: true
        }, {
          key: 'page',
          decorators: [bindable],
          initializer: function initializer() {
            return 1;
          },
          enumerable: true
        }, {
          key: 'pagerSize',
          decorators: [bindable],
          initializer: function initializer() {
            return 10;
          },
          enumerable: true
        }, {
          key: 'showFirstLastButtons',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'showJumpButtons',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'pageSizes',
          decorators: [bindable],
          initializer: function initializer() {
            return [10, 25, 50];
          },
          enumerable: true
        }, {
          key: 'serverSorting',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'sortable',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'autoGenerateColumns',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'selectable',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'selectedItem',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'noRowsMessage',
          decorators: [bindable],
          initializer: function initializer() {
            return '';
          },
          enumerable: true
        }, {
          key: 'autoLoad',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'loadingMessage',
          decorators: [bindable],
          initializer: function initializer() {
            return 'Loading...';
          },
          enumerable: true
        }, {
          key: 'read',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'onReadError',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function Grid(element, compiler, observerLocator) {
          _classCallCheck(this, _Grid);

          _defineDecoratedPropertyDescriptor(this, 'gridHeight', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'initialLoad', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'showColumnFilters', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'serverFiltering', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'serverPaging', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'pageable', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'pageSize', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'page', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'pagerSize', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'showFirstLastButtons', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'showJumpButtons', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'pageSizes', _instanceInitializers);

          this.firstVisibleItem = 0;
          this.lastVisibleItem = 0;
          this.pageNumber = 1;

          _defineDecoratedPropertyDescriptor(this, 'serverSorting', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers);

          this.sorting = {};
          this.Trogdor = true;

          _defineDecoratedPropertyDescriptor(this, 'autoGenerateColumns', _instanceInitializers);

          this.columnHeaders = [];
          this.columns = [];

          _defineDecoratedPropertyDescriptor(this, 'selectable', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'selectedItem', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'noRowsMessage', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'autoLoad', _instanceInitializers);

          this.loading = false;

          _defineDecoratedPropertyDescriptor(this, 'loadingMessage', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'read', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'onReadError', _instanceInitializers);

          this.cache = [];
          this.data = [];
          this.count = 0;
          this.unbinding = false;

          this.element = element;
          this.compiler = compiler;
          this.observerLocator = observerLocator;

          this.processUserTemplate();
        }

        _createDecoratedClass(Grid, [{
          key: 'processUserTemplate',
          value: function processUserTemplate() {
            var _this = this;

            var rowElement = this.element.querySelector('grid-row');
            var columnElements = Array.prototype.slice.call(rowElement.querySelectorAll('grid-col'));

            columnElements.forEach(function (c) {

              var attrs = Array.prototype.slice.call(c.attributes),
                  colHash = {};
              attrs.forEach(function (a) {
                return colHash[a.name] = a.value;
              });

              var col = new GridColumn(colHash, c.innerHTML);

              _this.addColumn(col);
            });

            this.rowAttrs = {};
            var attrs = Array.prototype.slice.call(rowElement.attributes);
            attrs.forEach(function (a) {
              return _this.rowAttrs[a.name] = a.value;
            });

            while (this.element.childNodes.length > 0) {
              this.element.removeChild(this.element.childNodes[0]);
            }
          }
        }, {
          key: 'attached',
          value: function attached() {
            this.gridHeightChanged();

            if (this.autoLoad === true) {
              this.refresh();
            }
          }
        }, {
          key: 'bind',
          value: function bind(executionContext) {
            this.ensureBooleanBindableValues();

            this['$parent'] = executionContext;

            if (this.serverPaging === true && this.serverSorting === false) {
              this.sortable = false;
            }

            var table = this.element.querySelector('table>tbody');
            var rowTemplate = table.querySelector('tr');

            var fragment = document.createDocumentFragment();

            fragment.appendChild(rowTemplate);

            rowTemplate.setAttribute('repeat.for', '$item of data');
            rowTemplate.setAttribute('class', '${ $item === $parent.selectedItem ? \'info\' : \'\' }');

            for (var prop in this.rowAttrs) {
              if (this.rowAttrs.hasOwnProperty(prop)) {
                rowTemplate.setAttribute(prop, this.rowTemplate[prop]);
              }
            }

            this.columns.forEach(function (c) {
              var td = document.createElement('td');

              for (var prop in c) {
                if (c.hasOwnProperty(prop)) {

                  if (prop == 'template') {
                    td.innerHTML = c[prop];
                  } else {
                    td.setAttribute(prop, c[prop]);
                  }
                }
              }

              rowTemplate.appendChild(td);
            });

            this.compiler.compile(table, this, undefined, fragment);

            this.noRowsMessageChanged();
          }
        }, {
          key: 'unbind',
          value: function unbind() {
            this.unbinding = true;
            this.dontWatchForChanges();
          }
        }, {
          key: 'addColumn',
          value: function addColumn(col) {
            if (this.sortable === false) {
              col.nosort = true;
            }

            this.columns.push(col);
          }
        }, {
          key: 'pageChanged',
          value: function pageChanged(page) {
            this.pageNumber = Number(page);
            this.refresh();
          }
        }, {
          key: 'pageSizeChanged',
          value: function pageSizeChanged() {
            this.pageChanged(1);
            this.updatePager();
          }
        }, {
          key: 'filterSortPage',
          value: function filterSortPage(data) {
            var tempData = data;

            if (this.showColumnFilters === true && this.serverFiltering === false) {
              tempData = this.applyFilter(tempData);
            }

            this.count = tempData.length;

            if (this.sortable === true && this.serverSorting === false) {
              tempData = this.applySort(tempData);
            }

            if (this.pageable === true && this.serverPaging === false) {
              tempData = this.applyPage(tempData);
            }

            this.data = tempData;

            this.updatePager();

            this.watchForChanges();
          }
        }, {
          key: 'applyPage',
          value: function applyPage(data) {
            var start = (Number(this.pageNumber) - 1) * Number(this.pageSize);
            data = data.slice(start, start + Number(this.pageSize));

            return data;
          }
        }, {
          key: 'updatePager',
          value: function updatePager() {
            if (this.pager) {
              this.pager.update(this.pageNumber, Number(this.pageSize), Number(this.count));
            }

            this.firstVisibleItem = (this.pageNumber - 1) * Number(this.pageSize) + 1;
            this.lastVisibleItem = this.pageNumber * Number(this.pageSize);
          }
        }, {
          key: 'fieldSorter',
          value: function fieldSorter(fields) {
            return function (a, b) {
              return fields.map(function (o) {
                var dir = 1;
                if (o[0] === '-') {
                  dir = -1;
                  o = o.substring(1);
                }
                if (a[o] > b[o]) return dir;
                if (a[o] < b[o]) return -dir;
                return 0;
              }).reduce(function firstNonZeroValue(p, n) {
                return p ? p : n;
              }, 0);
            };
          }
        }, {
          key: 'pageSizesChanged',
          value: function pageSizesChanged() {
            this.refresh();
          }
        }, {
          key: 'sortChanged',
          value: function sortChanged(field) {
            var newSort = undefined;

            switch (this.sorting[field]) {
              case 'asc':
                newSort = 'desc';
                break;
              case 'desc':
                newSort = '';
                break;
              default:
                newSort = 'asc';
                break;
            }

            this.sorting[field] = newSort;

            this.refresh();
          }
        }, {
          key: 'applySort',
          value: function applySort(data) {
            var fields = [];

            for (var prop in this.sorting) {
              if (this.sorting[prop] !== '') {
                fields.push(this.sorting[prop] === 'asc' ? prop : '-' + prop);
              }
            }

            data = data.sort(this.fieldSorter(fields));

            return data;
          }
        }, {
          key: 'applyFilter',
          value: function applyFilter(data) {
            var _this2 = this;

            return data.filter(function (row) {
              var include = true;

              for (var i = _this2.columns.length - 1; i >= 0; i--) {
                var col = _this2.columns[i];

                if (col.filterValue !== '' && row[col.field].toString().indexOf(col.filterValue) === -1) {
                  include = false;
                }
              }

              return include;
            });
          }
        }, {
          key: 'getFilterColumns',
          value: function getFilterColumns() {
            var cols = [];

            for (var i = this.columns.length - 1; i >= 0; i--) {
              var col = this.columns[i];

              if (col.filterValue !== '') {
                cols.push({ field: col.field, value: col.filterValue });
              }
            }

            return cols;
          }
        }, {
          key: 'updateFilters',
          value: function updateFilters() {
            this.refresh();
          }
        }, {
          key: 'refresh',
          value: function refresh() {
            this.dontWatchForChanges();

            var getDataFromServer = this.serverPaging === true || this.serverSorting === true || this.serverFiltering === true;
            if (getDataFromServer === true || this.initialLoad === false) {
              this.getData();
            } else {
              this.filterSortPage(this.cache);
            }
          }
        }, {
          key: 'getData',
          value: function getData() {
            var _this3 = this;

            if (!this.read) {
              throw new Error('No read method specified for grid');
            }

            this.initialLoad = true;

            this.loading = true;

            this.read({
              sorting: this.sorting,
              paging: { page: this.pageNumber, size: Number(this.pageSize) },
              filtering: this.getFilterColumns()
            }).then(function (result) {
              _this3.handleResult(result);

              _this3.loading = false;
            }, function (result) {
              if (_this3.onReadError) _this3.onReadError(result);

              _this3.loading = false;
            });
          }
        }, {
          key: 'handleResult',
          value: function handleResult(result) {
            var data = result.data;

            if (this.pageable && !this.serverPaging && !this.serverSorting && !this.serverFiltering) {
              this.cache = result.data;
              this.filterSortPage(this.cache);
            } else {
              this.data = result.data;
              this.filterSortPage(this.data);
            }

            this.count = result.count;

            this.updatePager();
          }
        }, {
          key: 'watchForChanges',
          value: function watchForChanges() {
            var _this4 = this;

            this.dontWatchForChanges();

            if (!this.unbinding) {
              this.subscription = this.observerLocator.getArrayObserver(this.cache).subscribe(function (splices) {
                _this4.refresh();
              });
            }
          }
        }, {
          key: 'dontWatchForChanges',
          value: function dontWatchForChanges() {
            if (this.subscription) {
              this.subscription();
            }
          }
        }, {
          key: 'select',
          value: function select(item) {
            if (this.selectable) {
              this.selectedItem = item;
            }
          }
        }, {
          key: 'noRowsMessageChanged',
          value: function noRowsMessageChanged() {
            this.showNoRowsMessage = this.noRowsMessage !== '';
          }
        }, {
          key: 'gridHeightChanged',
          value: function gridHeightChanged() {

            var cont = this.element.querySelector('.grid-content-container');

            if (this.gridHeight > 0) {
              cont.setAttribute('style', 'height:' + this.gridHeight + 'px');
            } else {
              cont.removeAttribute('style');
            }
          }
        }, {
          key: 'ensureBooleanBindableValues',
          value: function ensureBooleanBindableValues() {
            var _this5 = this;

            var values = ['initialLoad', 'showColumnFilters', 'serverFiltering', 'serverPaging', 'pageable', 'showFirstLastButtons', 'showJumpButtons', 'serverSorting', 'sortable', 'selectable', 'autoLoad'];

            values.forEach(function (prop) {
              var val = _this5[prop];
              if (val !== true && val !== false) {
                if (val === 'false') {
                  _this5[prop] = false;
                } else if (val === 'true') {
                  _this5[prop] = true;
                } else if (val) {
                  _this5[prop] = true;
                } else {
                  _this5[prop] = false;
                }
              }
            });
          }
        }], null, _instanceInitializers);

        var _Grid = Grid;
        Grid = inject(Element, Compiler, ObserverLocator)(Grid) || Grid;
        Grid = skipContentProcessing()(Grid) || Grid;
        Grid = customElement('grid')(Grid) || Grid;
        return Grid;
      })();

      _export('Grid', Grid);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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O2VBQUosSUFBSTs7O3NCQUFKLElBQUkiLCJmaWxlIjoiZ3JpZC9ncmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgaW5qZWN0LCBza2lwQ29udGVudFByb2Nlc3NpbmcsIE9ic2VydmVyTG9jYXRvciwgY3VzdG9tRWxlbWVudCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7R3JpZENvbHVtbn0gZnJvbSAnLi9ncmlkLWNvbHVtbic7XG5pbXBvcnQge0NvbXBpbGVyfSBmcm9tICdnb295L2F1cmVsaWEtY29tcGlsZXInO1xuaW1wb3J0ICcuL2F1cmVsaWEtYnMtZ3JpZC5jc3MhJztcblxuQGN1c3RvbUVsZW1lbnQoJ2dyaWQnKVxuQHNraXBDb250ZW50UHJvY2Vzc2luZygpXG5AaW5qZWN0KEVsZW1lbnQsIENvbXBpbGVyLCBPYnNlcnZlckxvY2F0b3IpXG5leHBvcnQgY2xhc3MgR3JpZCB7XG5cbiAgLyogPT0gU3R5bGluZyA9PSAqL1xuICBAYmluZGFibGUgZ3JpZEhlaWdodCA9IDA7XG5cbiAgLyogPT0gT3B0aW9ucyA9PSAqL1xuXG4gIC8vIEluaXRpYWwgbG9hZCBmbGFnIChmb3IgY2xpZW50IHNpZGUpXG4gIEBiaW5kYWJsZSBpbml0aWFsTG9hZCA9IGZhbHNlO1xuXG4gIC8vIEZpbHRlcmluZ1xuICBAYmluZGFibGUgc2hvd0NvbHVtbkZpbHRlcnMgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIHNlcnZlckZpbHRlcmluZyA9IGZhbHNlO1xuXG4gIC8vIFBhZ2luYXRpb25cbiAgQGJpbmRhYmxlIHNlcnZlclBhZ2luZyA9IGZhbHNlO1xuICBAYmluZGFibGUgcGFnZWFibGUgPSB0cnVlO1xuICBAYmluZGFibGUgcGFnZVNpemUgPSAxMDtcbiAgQGJpbmRhYmxlIHBhZ2UgPSAxO1xuICBAYmluZGFibGUgcGFnZXJTaXplID0gMTA7XG5cbiAgQGJpbmRhYmxlIHNob3dGaXJzdExhc3RCdXR0b25zID0gdHJ1ZTtcbiAgQGJpbmRhYmxlIHNob3dKdW1wQnV0dG9ucyA9IHRydWU7XG5cbiAgQGJpbmRhYmxlIHBhZ2VTaXplcyA9IFsxMCwgMjUsIDUwXTtcblxuICBmaXJzdFZpc2libGVJdGVtID0gMDtcbiAgbGFzdFZpc2libGVJdGVtID0gMDtcblxuICBwYWdlTnVtYmVyID0gMTtcblxuXG4gIC8vIFNvcnRpbmF0aW9uXG4gIEBiaW5kYWJsZSBzZXJ2ZXJTb3J0aW5nID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBzb3J0YWJsZSA9IHRydWU7XG4gIHNvcnRpbmcgPSB7fTtcblxuICAvLyBCdXJuaW5hdGlvbj9cbiAgVHJvZ2RvciA9IHRydWU7XG5cbiAgLy8gQ29sdW1uIGRlZnNcbiAgQGJpbmRhYmxlIGF1dG9HZW5lcmF0ZUNvbHVtbnM7XG4gIGNvbHVtbkhlYWRlcnMgPSBbXTtcbiAgY29sdW1ucyA9IFtdO1xuXG4gIC8vIFNlbGVjdGlvblxuICBAYmluZGFibGUgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICBAYmluZGFibGUgc2VsZWN0ZWRJdGVtID0gbnVsbDtcblxuICAvLyBNaXNjXG4gIEBiaW5kYWJsZSBub1Jvd3NNZXNzYWdlID0gXCJcIjtcblxuICAvLyBEYXRhIC4uLi5cbiAgQGJpbmRhYmxlIGF1dG9Mb2FkID0gdHJ1ZTtcbiAgbG9hZGluZyA9IGZhbHNlO1xuICBAYmluZGFibGUgbG9hZGluZ01lc3NhZ2UgPSBcIkxvYWRpbmcuLi5cIjtcblxuICAvLyBSZWFkXG4gIEBiaW5kYWJsZSByZWFkID0gbnVsbDtcbiAgQGJpbmRhYmxlIG9uUmVhZEVycm9yID0gbnVsbDtcblxuICAvLyBUcmFja2luZ1xuICBjYWNoZSA9IFtdO1xuICBkYXRhID0gW107XG4gIGNvdW50ID0gMDtcblxuICAvLyBTdWJzY3JpcHRpb24gaGFuZGxpbmdcbiAgdW5iaW5kaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29tcGlsZXIsIG9ic2VydmVyTG9jYXRvcikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jb21waWxlciA9IGNvbXBpbGVyO1xuICAgIHRoaXMub2JzZXJ2ZXJMb2NhdG9yID0gb2JzZXJ2ZXJMb2NhdG9yO1xuXG4gICAgLy8gR3JhYiB1c2VyIHRlbXBsYXRlIGZyb20gZWxlbWVudFxuICAgIHRoaXMucHJvY2Vzc1VzZXJUZW1wbGF0ZSgpO1xuICB9XG5cbiAgcHJvY2Vzc1VzZXJUZW1wbGF0ZSgpIHtcblxuICAgIC8vIEdldCBhbnkgY29sIHRhZ3MgZnJvbSB0aGUgY29udGVudFxuICAgIHZhciByb3dFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJncmlkLXJvd1wiKTtcbiAgICB2YXIgY29sdW1uRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChyb3dFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJncmlkLWNvbFwiKSk7XG5cbiAgICBjb2x1bW5FbGVtZW50cy5mb3JFYWNoKGMgPT4ge1xuXG4gICAgICB2YXIgYXR0cnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjLmF0dHJpYnV0ZXMpLCBjb2xIYXNoID0ge307XG4gICAgICBhdHRycy5mb3JFYWNoKGEgPT4gY29sSGFzaFthLm5hbWVdID0gYS52YWx1ZSk7XG5cbiAgICAgIHZhciBjb2wgPSBuZXcgR3JpZENvbHVtbihjb2xIYXNoLCBjLmlubmVySFRNTCk7XG5cbiAgICAgIHRoaXMuYWRkQ29sdW1uKGNvbCk7XG4gICAgfSk7XG5cbiAgICAvLyBQdWxsIGFueSByb3cgYXR0cnMgaW50byBhIGhhc2ggb2JqZWN0XG4gICAgdGhpcy5yb3dBdHRycyA9IHt9O1xuICAgIHZhciBhdHRycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHJvd0VsZW1lbnQuYXR0cmlidXRlcyk7XG4gICAgYXR0cnMuZm9yRWFjaChhID0+IHRoaXMucm93QXR0cnNbYS5uYW1lXSA9IGEudmFsdWUpO1xuXG4gICAgLy8gUmVtb3ZlIGFsbCBjaGlsZHJlblxuICAgIHdoaWxlICh0aGlzLmVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50LmNoaWxkTm9kZXNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIC8qID09PSBMaWZlY3ljbGUgPT09ICovXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMuZ3JpZEhlaWdodENoYW5nZWQoKTtcblxuICAgIGlmICh0aGlzLmF1dG9Mb2FkID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gIH1cblxuICBiaW5kKGV4ZWN1dGlvbkNvbnRleHQpIHtcbiAgICB0aGlzLmVuc3VyZUJvb2xlYW5CaW5kYWJsZVZhbHVlcygpO1xuXG4gICAgdGhpc1tcIiRwYXJlbnRcIl0gPSBleGVjdXRpb25Db250ZXh0O1xuXG4gICAgLy8gRW5zdXJlIHRoZSBncmlkIHNldHRpbmdzXG4gICAgLy8gSWYgd2UgY2FuIHBhZ2Ugb24gdGhlIHNlcnZlciBhbmQgd2UgY2FuJ3Qgc2VydmVyIHNvcnQsIHdlIGNhbid0IHNvcnQgbG9jYWxseVxuICAgIGlmICh0aGlzLnNlcnZlclBhZ2luZyA9PT0gdHJ1ZSAmJiB0aGlzLnNlcnZlclNvcnRpbmcgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnNvcnRhYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQnVpbGQgdGhlIHJvd3MgdGhlbiBkeW5hbWljYWxseSBjb21waWxlIHRoZSB0YWJsZVxuICAgIC8vIEdldCB0aGUgdGFibGUuLi5cbiAgICB2YXIgdGFibGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlPnRib2R5XCIpO1xuICAgIHZhciByb3dUZW1wbGF0ZSA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0clwiKTtcblxuICAgIC8vIENyZWF0ZSBhIGZyYWdtZW50IHdlIHdpbGwgbWFuaXB1bGF0ZSB0aGUgRE9NIGluXG4gICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgLy8gTW92ZSB0aGUgcm93IHRlbXBsYXRlIHRvIHRoZSBmcmFnbWVudFxuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHJvd1RlbXBsYXRlKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgcmVwZWF0ZXJcbiAgICByb3dUZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoXCJyZXBlYXQuZm9yXCIsIFwiJGl0ZW0gb2YgZGF0YVwiKTtcbiAgICByb3dUZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIiR7ICRpdGVtID09PSAkcGFyZW50LnNlbGVjdGVkSXRlbSA/ICdpbmZvJyA6ICcnIH1cIik7XG5cbiAgICAvLyBDb3B5IGFueSB1c2VyIHNwZWNpZmllZCByb3cgYXR0cmlidXRlcyB0byB0aGUgcm93IHRlbXBsYXRlXG4gICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLnJvd0F0dHJzKSB7XG4gICAgICBpZiAodGhpcy5yb3dBdHRycy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICByb3dUZW1wbGF0ZS5zZXRBdHRyaWJ1dGUocHJvcCwgdGhpcy5yb3dUZW1wbGF0ZVtwcm9wXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBjb2x1bW5zXG4gICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYyA9PiB7XG4gICAgICB2YXIgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgIC8vIFNldCBhdHRyaWJ1dGVzXG4gICAgICBmb3IgKHZhciBwcm9wIGluIGMpIHtcbiAgICAgICAgaWYgKGMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcblxuICAgICAgICAgIGlmIChwcm9wID09IFwidGVtcGxhdGVcIikge1xuICAgICAgICAgICAgdGQuaW5uZXJIVE1MID0gY1twcm9wXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGQuc2V0QXR0cmlidXRlKHByb3AsIGNbcHJvcF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByb3dUZW1wbGF0ZS5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgfSk7XG5cbiAgICAvLyBDb21waWxlXG4gICAgdGhpcy5jb21waWxlci5jb21waWxlKHRhYmxlLCB0aGlzLCB1bmRlZmluZWQsIGZyYWdtZW50KTtcblxuICAgIC8vIEhBQ0s6IHdoeSBpcyB0aGUgY2hhbmdlIGhhbmRsZXIgbm90IGZpcmluZyBmb3Igbm9Sb3dzTWVzc2FnZT9cbiAgICB0aGlzLm5vUm93c01lc3NhZ2VDaGFuZ2VkKCk7XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgdGhpcy51bmJpbmRpbmcgPSB0cnVlO1xuICAgIHRoaXMuZG9udFdhdGNoRm9yQ2hhbmdlcygpO1xuICB9XG5cbiAgLyogPT09IENvbHVtbiBoYW5kbGluZyA9PT0gKi9cbiAgYWRkQ29sdW1uKGNvbCkge1xuXG4gICAgLy8gTm8tc29ydCBpZiBncmlkIGlzIG5vdCBzb3J0YWJsZVxuICAgIGlmICh0aGlzLnNvcnRhYmxlID09PSBmYWxzZSkge1xuICAgICAgY29sLm5vc29ydCA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5jb2x1bW5zLnB1c2goY29sKTtcbiAgfVxuXG4gIC8qID09PSBQYWdpbmcgPT09ICovXG4gIHBhZ2VDaGFuZ2VkKHBhZ2UpIHtcbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSBOdW1iZXIocGFnZSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBwYWdlU2l6ZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5wYWdlQ2hhbmdlZCgxKTtcbiAgICB0aGlzLnVwZGF0ZVBhZ2VyKCk7XG4gIH1cblxuICBmaWx0ZXJTb3J0UGFnZShkYXRhKSB7XG4gICAgLy8gQXBwbGllcyBmaWx0ZXIsIHNvcnQgdGhlbiBwYWdlXG4gICAgLy8gMS4gRmlyc3QgZmlsdGVyIHRoZSBkYXRhIGRvd24gdG8gdGhlIHNldCB3ZSB3YW50LCBpZiB3ZSBhcmUgdXNpbmcgbG9jYWwgZGF0YVxuICAgIHZhciB0ZW1wRGF0YSA9IGRhdGE7XG5cbiAgICBpZiAodGhpcy5zaG93Q29sdW1uRmlsdGVycyA9PT0gdHJ1ZSAmJiB0aGlzLnNlcnZlckZpbHRlcmluZyA9PT0gZmFsc2UpIHtcbiAgICAgIHRlbXBEYXRhID0gdGhpcy5hcHBseUZpbHRlcih0ZW1wRGF0YSk7XG4gICAgfVxuXG4gICAgLy8gQ291bnQgdGhlIGRhdGEgbm93IGJlZm9yZSB0aGUgc29ydC9wYWdlXG4gICAgdGhpcy5jb3VudCA9IHRlbXBEYXRhLmxlbmd0aDtcblxuICAgIC8vIDIuIE5vdyBzb3J0IHRoZSBkYXRhXG4gICAgaWYgKHRoaXMuc29ydGFibGUgPT09IHRydWUgJiYgdGhpcy5zZXJ2ZXJTb3J0aW5nID09PSBmYWxzZSkge1xuICAgICAgdGVtcERhdGEgPSB0aGlzLmFwcGx5U29ydCh0ZW1wRGF0YSk7XG4gICAgfVxuXG4gICAgLy8gMy4gTm93IGFwcGx5IHBhZ2luZ1xuICAgIGlmICh0aGlzLnBhZ2VhYmxlID09PSB0cnVlICYmIHRoaXMuc2VydmVyUGFnaW5nID09PSBmYWxzZSkge1xuICAgICAgdGVtcERhdGEgPSB0aGlzLmFwcGx5UGFnZSh0ZW1wRGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhID0gdGVtcERhdGE7XG5cbiAgICB0aGlzLnVwZGF0ZVBhZ2VyKCk7XG5cbiAgICB0aGlzLndhdGNoRm9yQ2hhbmdlcygpO1xuICB9XG5cbiAgYXBwbHlQYWdlKGRhdGEpIHtcbiAgICB2YXIgc3RhcnQgPSAoTnVtYmVyKHRoaXMucGFnZU51bWJlcikgLSAxKSAqIE51bWJlcih0aGlzLnBhZ2VTaXplKTtcbiAgICBkYXRhID0gZGF0YS5zbGljZShzdGFydCwgc3RhcnQgKyBOdW1iZXIodGhpcy5wYWdlU2l6ZSkpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuXG4gIHVwZGF0ZVBhZ2VyKCkge1xuICAgIGlmICh0aGlzLnBhZ2VyKSB7XG4gICAgICB0aGlzLnBhZ2VyLnVwZGF0ZSh0aGlzLnBhZ2VOdW1iZXIsIE51bWJlcih0aGlzLnBhZ2VTaXplKSwgTnVtYmVyKHRoaXMuY291bnQpKTtcbiAgICB9XG5cbiAgICB0aGlzLmZpcnN0VmlzaWJsZUl0ZW0gPSAodGhpcy5wYWdlTnVtYmVyIC0gMSkgKiBOdW1iZXIodGhpcy5wYWdlU2l6ZSkgKyAxO1xuICAgIHRoaXMubGFzdFZpc2libGVJdGVtID0gKHRoaXMucGFnZU51bWJlcikgKiBOdW1iZXIodGhpcy5wYWdlU2l6ZSk7XG4gIH1cblxuICAvKiA9PT0gU29ydGluZyA9PT0gKi9cbiAgZmllbGRTb3J0ZXIoZmllbGRzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZmllbGRzXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICB2YXIgZGlyID0gMTtcbiAgICAgICAgICBpZiAob1swXSA9PT0gJy0nKSB7XG4gICAgICAgICAgICBkaXIgPSAtMTtcbiAgICAgICAgICAgIG8gPSBvLnN1YnN0cmluZygxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFbb10gPiBiW29dKSByZXR1cm4gZGlyO1xuICAgICAgICAgIGlmIChhW29dIDwgYltvXSkgcmV0dXJuIC0oZGlyKTtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSlcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiBmaXJzdE5vblplcm9WYWx1ZShwLCBuKSB7XG4gICAgICAgICAgcmV0dXJuIHAgPyBwIDogbjtcbiAgICAgICAgfSwgMCk7XG4gICAgfTtcbiAgfVxuXG4gIHBhZ2VTaXplc0NoYW5nZWQoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBzb3J0Q2hhbmdlZChmaWVsZCkge1xuXG4gICAgLy8gRGV0ZXJtaW5lIG5ldyBzb3J0XG4gICAgdmFyIG5ld1NvcnQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBGaWd1cmUgb3V0IHdoaWNoIHdheSB0aGlzIGZpZWxkIHNob3VsZCBiZSBzb3J0aW5nXG4gICAgc3dpdGNoICh0aGlzLnNvcnRpbmdbZmllbGRdKSB7XG4gICAgICBjYXNlIFwiYXNjXCI6XG4gICAgICAgIG5ld1NvcnQgPSBcImRlc2NcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGVzY1wiOlxuICAgICAgICBuZXdTb3J0ID0gXCJcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBuZXdTb3J0ID0gXCJhc2NcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5zb3J0aW5nW2ZpZWxkXSA9IG5ld1NvcnQ7XG5cbiAgICAvLyBUT0RPOiBBZGQgc29ydCBwcm9jZXNzaW5nIG9yZGVyXG4gICAgLy8gdGhpcy5zb3J0UHJvY2Vzc2luZ09yZGVyLnB1c2goZmllbGQpO1xuXG4gICAgLy8gQXBwbHkgdGhlIG5ldyBzb3J0XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBhcHBseVNvcnQoZGF0YSkge1xuXG4gICAgLy8gRm9ybWF0IHRoZSBzb3J0IGZpZWxkc1xuICAgIHZhciBmaWVsZHMgPSBbXTtcblxuICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5zb3J0aW5nKSB7XG4gICAgICBpZiAodGhpcy5zb3J0aW5nW3Byb3BdICE9PSBcIlwiKSB7XG4gICAgICAgIGZpZWxkcy5wdXNoKHRoaXMuc29ydGluZ1twcm9wXSA9PT0gXCJhc2NcIiA/IChwcm9wKSA6IChcIi1cIiArIHByb3ApKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBzZXJ2ZXIgc29ydCwganVzdCByZWZyZXNoXG4gICAgZGF0YSA9IGRhdGEuc29ydCh0aGlzLmZpZWxkU29ydGVyKGZpZWxkcykpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKiA9PT0gRmlsdGVyaW5nID09PSAqL1xuICBhcHBseUZpbHRlcihkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEuZmlsdGVyKChyb3cpID0+IHtcbiAgICAgIHZhciBpbmNsdWRlID0gdHJ1ZTtcblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMuY29sdW1ucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB2YXIgY29sID0gdGhpcy5jb2x1bW5zW2ldO1xuXG4gICAgICAgIGlmIChjb2wuZmlsdGVyVmFsdWUgIT09IFwiXCIgJiYgcm93W2NvbC5maWVsZF0udG9TdHJpbmcoKS5pbmRleE9mKGNvbC5maWx0ZXJWYWx1ZSkgPT09IC0xKSB7XG4gICAgICAgICAgaW5jbHVkZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbmNsdWRlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsdGVyQ29sdW1ucygpIHtcbiAgICB2YXIgY29scyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IHRoaXMuY29sdW1ucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGNvbCA9IHRoaXMuY29sdW1uc1tpXTtcblxuICAgICAgaWYgKGNvbC5maWx0ZXJWYWx1ZSAhPT0gXCJcIikge1xuICAgICAgICBjb2xzLnB1c2goe2ZpZWxkOiBjb2wuZmllbGQsIHZhbHVlOiBjb2wuZmlsdGVyVmFsdWV9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29scztcbiAgfVxuXG4gIHVwZGF0ZUZpbHRlcnMoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKiA9PT0gRGF0YSA9PT0gKi9cbiAgcmVmcmVzaCgpIHtcbiAgICAvLyBJZiB3ZSBoYXZlIGFueSBzZXJ2ZXIgc2lkZSBzdHVmZiB3ZSBuZWVkIHRvIGdldCB0aGUgZGF0YSBmaXJzdFxuICAgIHRoaXMuZG9udFdhdGNoRm9yQ2hhbmdlcygpO1xuXG4gICAgbGV0IGdldERhdGFGcm9tU2VydmVyID0gdGhpcy5zZXJ2ZXJQYWdpbmcgPT09IHRydWUgfHwgdGhpcy5zZXJ2ZXJTb3J0aW5nID09PSB0cnVlIHx8IHRoaXMuc2VydmVyRmlsdGVyaW5nID09PSB0cnVlO1xuICAgIGlmIChnZXREYXRhRnJvbVNlcnZlciA9PT0gdHJ1ZSB8fCB0aGlzLmluaXRpYWxMb2FkID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyU29ydFBhZ2UodGhpcy5jYWNoZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICBpZiAoIXRoaXMucmVhZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVhZCBtZXRob2Qgc3BlY2lmaWVkIGZvciBncmlkXCIpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdGlhbExvYWQgPSB0cnVlO1xuXG4gICAgLy8gVE9ETzogSW1wbGVtZW50IHByb2dyZXNzIGluZGljYXRvclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAvLyBUcnkgdG8gcmVhZCBmcm9tIHRoZSBkYXRhIGFkYXB0ZXJcbiAgICB0aGlzLnJlYWQoe1xuICAgICAgc29ydGluZzogdGhpcy5zb3J0aW5nLFxuICAgICAgcGFnaW5nOiB7cGFnZTogdGhpcy5wYWdlTnVtYmVyLCBzaXplOiBOdW1iZXIodGhpcy5wYWdlU2l6ZSl9LFxuICAgICAgZmlsdGVyaW5nOiB0aGlzLmdldEZpbHRlckNvbHVtbnMoKVxuICAgIH0pXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG5cbiAgICAgICAgLy8gRGF0YSBzaG91bGQgYmUgaW4gdGhlIHJlc3VsdCBzbyBncmFiIGl0IGFuZCBhc3NpZ24gaXQgdG8gdGhlIGRhdGEgcHJvcGVydHlcbiAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHQocmVzdWx0KTtcblxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0sIChyZXN1bHQpID0+IHtcbiAgICAgICAgLy8gU29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmcsIG5vdGlmeSB0aGUgY29uc3VtZXJcbiAgICAgICAgaWYgKHRoaXMub25SZWFkRXJyb3IpXG4gICAgICAgICAgdGhpcy5vblJlYWRFcnJvcihyZXN1bHQpO1xuXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBoYW5kbGVSZXN1bHQocmVzdWx0KSB7XG5cbiAgICAvLyBUT0RPOiBDaGVjayB2YWxpZCBzdHVmZiB3YXMgcmV0dXJuZWRcbiAgICB2YXIgZGF0YSA9IHJlc3VsdC5kYXRhO1xuXG4gICAgLy8gSXMgdGhlIGRhdGEgYmVpbmcgcGFnaW5hdGVkIG9uIHRoZSBjbGllbnQgc2lkZT9cbiAgICAvLyBUT0RPOiBXb3JrIG91dCB3aGVuIHdlIHNob3VsZCB3ZSB1c2UgdGhlIGNhY2hlLi4uIGV2ZXI/IElmIGl0J3MgbG9jYWwgZGF0YVxuICAgIGlmICh0aGlzLnBhZ2VhYmxlICYmICF0aGlzLnNlcnZlclBhZ2luZyAmJiAhdGhpcy5zZXJ2ZXJTb3J0aW5nICYmICF0aGlzLnNlcnZlckZpbHRlcmluZykge1xuICAgICAgLy8gQ2FjaGUgdGhlIGRhdGFcbiAgICAgIHRoaXMuY2FjaGUgPSByZXN1bHQuZGF0YTtcbiAgICAgIHRoaXMuZmlsdGVyU29ydFBhZ2UodGhpcy5jYWNoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YSA9IHJlc3VsdC5kYXRhO1xuICAgICAgdGhpcy5maWx0ZXJTb3J0UGFnZSh0aGlzLmRhdGEpO1xuICAgIH1cblxuICAgIHRoaXMuY291bnQgPSByZXN1bHQuY291bnQ7XG5cbiAgICAvLyBVcGRhdGUgdGhlIHBhZ2VyIC0gbWF5YmUgdGhlIGdyaWQgb3B0aW9ucyBzaG91bGQgY29udGFpbiBhbiB1cGRhdGUgY2FsbGJhY2sgaW5zdGVhZCBvZiByZWZmaW5nIHRoZVxuICAgIC8vIHBhZ2VyIGludG8gdGhlIGN1cnJlbnQgVk0/XG4gICAgdGhpcy51cGRhdGVQYWdlcigpO1xuICB9XG5cbiAgd2F0Y2hGb3JDaGFuZ2VzKCkge1xuXG4gICAgdGhpcy5kb250V2F0Y2hGb3JDaGFuZ2VzKCk7XG5cbiAgICAvLyBHdWFyZCBhZ2FpbnN0IGRhdGEgcmVmcmVzaCBldmVudHMgaGl0dGluZyBhZnRlciB0aGUgdXNlciBkb2VzIGFueXRoaW5nIHRoYXQgdW5sb2FkcyB0aGUgZ3JpZFxuICAgIGlmICghdGhpcy51bmJpbmRpbmcpIHtcbiAgICAgIC8vIFdlIGNhbiB1cGRhdGUgdGhlIHBhZ2VyIGF1dG9tYWdpY2FsbHlcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5vYnNlcnZlckxvY2F0b3JcbiAgICAgICAgLmdldEFycmF5T2JzZXJ2ZXIodGhpcy5jYWNoZSlcbiAgICAgICAgLnN1YnNjcmliZSgoc3BsaWNlcykgPT4ge1xuICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkb250V2F0Y2hGb3JDaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24oKTtcbiAgICB9XG4gIH1cblxuICAvKiA9PT0gU2VsZWN0aW9uID09PSAqL1xuXG4gIHNlbGVjdChpdGVtKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0YWJsZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgIH1cbiAgfVxuXG4gIC8qID09PSBDaGFuZ2UgaGFuZGxlcnMgPT09ICovXG4gIG5vUm93c01lc3NhZ2VDaGFuZ2VkKCkge1xuICAgIHRoaXMuc2hvd05vUm93c01lc3NhZ2UgPSB0aGlzLm5vUm93c01lc3NhZ2UgIT09IFwiXCI7XG4gIH1cblxuICBncmlkSGVpZ2h0Q2hhbmdlZCgpIHtcblxuICAgIHZhciBjb250ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZC1jb250ZW50LWNvbnRhaW5lclwiKTtcblxuICAgIGlmICh0aGlzLmdyaWRIZWlnaHQgPiAwKSB7XG4gICAgICBjb250LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiaGVpZ2h0OlwiICsgdGhpcy5ncmlkSGVpZ2h0ICsgXCJweFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICB9XG4gIH1cblxuXG4gIC8qID09PSBNaXNjID09PSAqL1xuICBlbnN1cmVCb29sZWFuQmluZGFibGVWYWx1ZXMoKSB7XG4gICAgbGV0IHZhbHVlcyA9IFtcbiAgICAgIFwiaW5pdGlhbExvYWRcIixcbiAgICAgIFwic2hvd0NvbHVtbkZpbHRlcnNcIixcbiAgICAgIFwic2VydmVyRmlsdGVyaW5nXCIsXG4gICAgICBcInNlcnZlclBhZ2luZ1wiLFxuICAgICAgXCJwYWdlYWJsZVwiLFxuICAgICAgXCJzaG93Rmlyc3RMYXN0QnV0dG9uc1wiLFxuICAgICAgXCJzaG93SnVtcEJ1dHRvbnNcIixcbiAgICAgIFwic2VydmVyU29ydGluZ1wiLFxuICAgICAgXCJzb3J0YWJsZVwiLFxuICAgICAgXCJzZWxlY3RhYmxlXCIsXG4gICAgICBcImF1dG9Mb2FkXCJcbiAgICBdO1xuXG4gICAgdmFsdWVzLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGxldCB2YWwgPSB0aGlzW3Byb3BdO1xuICAgICAgaWYgKHZhbCAhPT0gdHJ1ZSAmJiB2YWwgIT09IGZhbHNlKSB7XG4gICAgICAgIGlmICh2YWwgPT09IFwiZmFsc2VcIikge1xuICAgICAgICAgIHRoaXNbcHJvcF0gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWwgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgdGhpc1twcm9wXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsKSB7XG4gICAgICAgICAgLy8gVE9ETzogc2hvdWxkIHdlIHJlcXVpcmUgdXNlIG9mIGJvb2xlYW4gdmFsdWUgb3IgJ2ZhbHNlJy8ndHJ1ZScgb25seT9cbiAgICAgICAgICB0aGlzW3Byb3BdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzW3Byb3BdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==