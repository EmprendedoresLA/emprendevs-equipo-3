// Restangular service that uses setFullResponse
angular.module('anyandgoApp')
.factory('RestFulResponse', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setFullResponse(true);
    console.log("configurado");
  });
});
