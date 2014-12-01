'use strict';
describe('App Component', function() {

  var component,
    React = require('react/addons'),
    TestUtils = React.addons.TestUtils,
    App = require('../../src/app/main.jsx');

  afterEach(function() {
    if (component && component.isMounted()) {
      // Only components with a parent will be unmounted
      React.unmountComponentAtNode(component.getDOMNode().parent);
    }
  });

  describe('state', function() {
    it('should set correct state', function() {
      component = TestUtils.renderIntoDocument(App());
      expect(component.state.stories).toEqual([]);
    });
  });

  describe('.onSubmit()', function() {
    it('should call service.search', function() {
      var $ = require('jquery');
      var promise = (new $.Deferred()).promise();
      var service = require('../../src/app/service');
      spyOn(service, 'search').and.returnValue(promise);
      component = TestUtils.renderIntoDocument(App());
      component.onSubmit({
        preventDefault:function() {},
        target: {
          query: { value: '' }
        }
      });
      expect(service.search).toHaveBeenCalled();
    });
  });

  describe('.onSearchSuccess()', function() {
    it('should set state of component', function() {
      var response = {
        data: {
          children: [
            { data: { id: 'foo' } },
            { data: { id: 'bar' } }
          ]
        }
      };
      component = TestUtils.renderIntoDocument(App());
      spyOn(component, 'setState').and.callThrough();
      component.onSearchSuccess(response);
      expect(component.setState).toHaveBeenCalled();
      expect(component.state.stories).toEqual([
        { id: 'foo' },
        { id: 'bar' }
      ]);
    });
  });

});
