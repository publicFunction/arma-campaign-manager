application.directive('currentCampaign', ['CampaignService', 'CommunityService', function(CampaignService, CommunityService) {
    return {
        restrict: 'A',
        scope: {
            community: '=community',
        },
        transclude: true,
        templateUrl : 'templates/partials/current_campaign.html',
        link: function(scope, elem, attr) {
            scope.$watch('community',
                function (community_id) {
                    CampaignService.getLatestCampaign(community_id,
                        function (success) {
                            console.log(success);
                            scope.campaign = success;
                        },
                        function (error) {

                        }
                    );
                }
            );
        }
    }
}]);