$(function() {

    var imagesContainer = $("#reddit-images");
    var textContainer = $("#reddit-text");
    var inputBox = $("#reddit-query");
    var redditURL = "http://www.reddit.com";

    var onInputKeyPress = function(event) {
        if (event.keyCode === 13) {
            populateRedditWithQuery(this.value);
        }
    };

    var makeRedditTextBox = function(data) {
        return [
            '<div class="reddit-text-box">',
                '<a href="' + redditURL + data.permalink+ '">',data.title,'</a>',
            '</div>'
        ].join('');
    };

    var makeRedditPicBox = function(data) {
        return [
            '<div class="reddit-pic-box">',
                '<a href="' + redditURL + data.permalink+ '">',
                    '<img src='+data.url+'/>',
                '</a>',
            '</div>'
        ].join('');
    };

    var isImage = function(imageURL) {
        return imageURL.slice(imageURL.length-4) === '.jpg';
    }
    /**
     * Returns HTML for div containing reddit image
     * @param   {string} permalink - URL to reddit page
     * @param   {string} imageURL - URL for image
     * @return  {String}           [description]
     */
    var makeRedditBox = function(data) {
        return isImage(data.url) ? makeRedditPicBox(data) : makeRedditTextBox(data);
    };

    var addChildTo = function(box, child) {
        box.html(box.html() + makeRedditBox(child.data))
    };

    var populateRedditWithQuery = function(query, box) {
        imagesContainer.html('Loading...');
        textContainer.html('Loading...');
        $.get(redditURL+'/r/'+query+'/.json')
            .success(function(res) {
                imagesContainer.html('');
                textContainer.html('');
                res.data.children.forEach(function(child) {
                    if (isImage(child.data.url)) {
                        addChildTo(imagesContainer, child);
                    } else {
                        addChildTo(textContainer, child);
                    }
                });
            })
            .error(function(res) {
                
            });
    };

    inputBox.on('keyup', onInputKeyPress);

});