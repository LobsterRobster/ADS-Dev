angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put("app/admin/admin.html","<section class=mainbar><section class=matter><div class=container><div class=row><div class=\"widget wred\"><div ht-widget-header title={{vm.title}}></div><div class=\"widget-content user\"><h3>TODO: Implement Your Features</h3></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>");
$templateCache.put("app/layout/ht-top-nav.html","<nav class=\"navbar navbar-fixed-top navbar-inverse\"><div class=navbar-header><a href=\"/\" class=navbar-brand><span class=brand-title>{{vm.navline.title}}</span></a> <a class=\"btn navbar-btn navbar-toggle\" data-toggle=collapse data-target=.navbar-collapse><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></a></div><div class=\"navbar-collapse collapse\"><div class=\"pull-right navbar-logo\"><ul class=\"nav navbar-nav pull-right\"><li><a ng-href={{vm.navline.link}} target=_blank>{{vm.navline.text}}</a></li></ul></div></div></nav>");
$templateCache.put("app/layout/shell.html","<div ng-controller=\"ShellController as vm\"><header class=clearfix><ht-top-nav navline=vm.navline></ht-top-nav></header><section id=content class=content><div ng-include=\"\'app/layout/sidebar.html\'\"></div><div ui-view class=shuffle-animation></div><div ngplus-overlay ngplus-overlay-delay-in=50 ngplus-overlay-delay-out=700 ngplus-overlay-animation=dissolve-animation><div class=\"page-spinner-message overlay-message\">{{vm.busyMessage}}</div></div></section></div>");
$templateCache.put("app/layout/sidebar.html","<div ng-controller=\"SidebarController as vm\"><ht-sidebar when-done-animating=vm.sidebarReady()><div class=sidebar-filler></div><div class=sidebar-dropdown><a href=#>Menu</a></div><div class=sidebar-inner><div class=sidebar-widget></div><ul class=navi><li class=\"nlightblue fade-selection-animation\" ng-class=vm.isCurrent(r) ng-repeat=\"r in vm.navRoutes\"><a ui-sref={{r.name}} ng-bind-html=r.settings.content></a></li></ul></div></ht-sidebar></div>");
$templateCache.put("app/core/404.html","<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=bred><div class=pull-left><i class=\"fa fa-warning\"></i></div><div class=\"datas-text pull-right\"><a><span class=bold>404</span></a>Page Not Found</div><div class=clearfix></div></li></ul></div></div><div class=row><div class=\"widget wblue\"><div ht-widget-header title=\"Page Not Found\" allow-collapse=true></div><div class=\"widget-content text-center text-info\"><div class=container>No soup for you!</div></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>");
$templateCache.put("app/dashboard/dashboard.html","<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=blightblue><div class=pull-left><i class=\"fa fa-plane\"></i></div><div class=\"datas-text pull-right\"><span class=bold>Placerholder</span> This can be a placeholder</div><div class=clearfix></div></li><li class=borange><div class=pull-left><i class=\"fa fa-envelope\"></i></div><div class=\"datas-text pull-right\"><span class=bold>{{vm.messageCount}}</span> This can be a placeholder</div><div class=clearfix></div></li><li class=bblue><div class=pull-left><i class=\"fa fa-medkit\"></i></div><div class=\"datas-text pull-right\"><span class=bold>{{vm.messageCount}}</span> This can be a placeholder</div><div class=clearfix></div></li><li><div class=pull-left><i class=\"fa fa-paw\"></i></div><div class=\"datas-text pull-right\"><span class=bold>{{vm.messageCount}}</span> This can be a placeholder</div><div class=clearfix></div></li></ul></div></div><div class=row><div class=col-md-6><div class=\"widget wviolet\"><div ht-widget-header title=People allow-collapse=true></div><div class=\"widget-content text-center text-info\"><table class=\"table table-condensed table-striped\"><thead><tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Location</th></tr></thead><tbody><tr ng-repeat=\"p in vm.people\"><td>{{p.firstName}}</td><td>{{p.lastName}}</td><td>{{p.age}}</td><td>{{p.location}}</td></tr></tbody></table></div><div class=widget-foot><div class=clearfix></div></div></div></div><div class=col-md-6><div class=\"widget wgreen\"><div ht-widget-header title={{vm.news.title}} allow-collapse=true></div><div class=\"widget-content text-center text-info\"><small>{{vm.news.description}}</small></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></div></section></section>");
$templateCache.put("app/products/product.html","<section class=mainbar><section class=matter><div class=container><div class=row-fluid><div class=col-md-12>Search: <input ng-model=query><table><tr><th>Key</th><th>Value</th></tr><tr ng-repeat=\"key in result.openfda | filter:query\"><td>{{ key[0] }}</td><td>{{ result[key][0] }}</td></tr></table></div></div></div></section></section>");
$templateCache.put("app/products/productsearch.html","<section class=mainbar><section class=matter><div class=container><div class=row-fluid><div class=col-md-12>Product Name: <input ng-model=productName ng-keyup=doSearch($event);><br>Search: <input ng-model=query><table style=border:><tr><th>Brand Name</th></tr><tr ng-repeat=\"x in names | filter:query\"><td><a href=/product/{{x.id}}>{{ x.brand_name }}</a></td></tr></table></div></div></div></section></section>");
$templateCache.put("app/search/search.html","<section class=mainbar><section class=matter><div class=container><div class=row-fluid><div class=col-md-6><div class=\"widget wgreen\"><div ht-widget-header title=\"Find Term and Count\" allow-collapse=true></div><div class=\"widget-content text-left text-info\"><div class=form-group><input class=form-control ng-model=vm.filterOptions.filterText placeholder=\"Search a product...\"></div><div class=row><div class=\"col-sm-12 gridStyle\" ng-grid=vm.gridOptions></div></div><div class=widget-foot><div class=clearfix></div></div></div></div><div class=col-md-6><div class=\"widget worange\"><div ht-widget-header title=\"Find ingredients\" allow-collapse=true></div><div class=\"widget-content text-left text-info\"><div class=row><div class=\"col-md-12 col-sm-12 form-group\"><input class=form-control ng-model=vm.ingredient ng-keypress=vm.doSearch($event); placeholder=\"Search here...\"></div><div class=\"col-md-12 col-sm-12 form-group\"><input class=form-control ng-model=containing placeholder=Filter...></div></div><div class=row><h5 class=col-md-6>Manufacturer Name</h5><h5 class=col-md-6>Brand Name</h5></div><div class=row ng-repeat=\"x in vm.drugsContaining | filter:containing\"><label class=col-md-6>{{ x.openfda.manufacturer_name[0] }}</label> <label class=col-md-6>{{ x.openfda.brand_name[0] }}</label></div></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></div></div></section></section>");
$templateCache.put("app/widgets/widget-header.html","<div class=widget-head><div class=\"page-title pull-left\">{{title}}</div><small class=page-title-subtle ng-show=subtitle>({{subtitle}})</small><div class=\"widget-icons pull-right\"></div><small class=\"pull-right page-title-subtle\" ng-show=rightText>{{rightText}}</small><div class=clearfix></div></div>");}]);