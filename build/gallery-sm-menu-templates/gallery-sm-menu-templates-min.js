YUI.add("gallery-sm-menu-templates",function(e,t){var n=e.Template.Micro;e.namespace("Menu").Templates={children:n.compile('<ul class="<%= data.classNames.children %>"></ul>'),item:n.compile('<% switch (data.item.type) { %><% case "item": %><li id="<%= data.item.id %>" class="<%= data.classNames.item %>"><a href="<%= data.item.url %>" class="<%= data.classNames.label %>" data-item-id="<%= data.item.id %>"></a></li><% break; %><% case "heading": %><li class="<%= data.classNames.heading %>"><span class="<%= data.classNames.label %>"></span></li><% break; %><% case "separator": %><li class="<%= data.classNames.separator %>"></li><% break; %><% } %>')}},"gallery-2013.02.07-15-27",{requires:["template-micro"]});
