$(function() {

    var  redditBox = $('#reddit-results');
    var inputBox = $('#reddit-query');
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

    /**
     * Returns HTML for div containing reddit image
     * @param   {string} permalink - URL to reddit page
     * @param   {string} imageURL - URL for image
     * @return  {String}           [description]
     */
    var makeRedditBox = function(data) {
        var isImage = data.url.slice(data.url.length-4) === '.jpg';
        return isImage ? makeRedditPicBox(data) : makeRedditTextBox(data);
    };

    var populateRedditWithQuery = function(query) {
        redditBox.html('');
        $.get(redditURL+'/r/'+query+'/.json')
            .success(function(res) {
                res.data.children.forEach(function(child) {
                    redditBox.html(redditBox.html() + makeRedditBox(child.data) );
                });
            })
            .error(function(res) {
                console.log('meow');
            });
    }

    inputBox.on('keyup', onInputKeyPress);

});