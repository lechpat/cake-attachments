App.Components.AttachmentsComponent = Frontend.Component.extend({
    startup: function() {
        if(!$.fn.fileupload) {
            return;
        }

        var config = {
            uploadUrl: App.Main.Router.url({plugin: 'Attachments',controller: 'attachments', action: 'upload',pass:[]})
        };
        this.Controller.$('.fileupload').each(function(i, el) {
            var widget = new App.Lib.AttachmentsWidget($(el), config);
        }.bind(this));
    }
});
