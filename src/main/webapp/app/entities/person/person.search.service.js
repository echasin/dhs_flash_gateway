(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .factory('PersonSearch', PersonSearch);

    PersonSearch.$inject = ['$resource'];

    function PersonSearch($resource) {
        var resourceUrl =  'microservice1/' + 'api/_search/people/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();