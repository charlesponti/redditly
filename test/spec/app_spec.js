'use strict';
describe('App Component', function() {

  var component,
    React = require('react/addons'),
    TestUtils = React.addons.TestUtils,
    App = React.createFactory(require('../../src/app/main.jsx'));

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
      var service = require('../../src/app/service');
      spyOn(service, 'search').and.returnValue((new $.Deferred()).promise());
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

});
