module.exports = {
    blocks: {
        asciinema: {
            process: function(blk) {
                var castId = blk.body;
                var url = 'https://asciinema.org/a/';

                if (this.generator != "website") {
                    return '<img src="' + url + castId + '.png" alt="Asciinema screencast thumbnail" /><p><a href="' + url + castId + '">Screencast link</a></p>';
                }

                return '<div style="comments-section">'
                +'<script type="text/javascript" src="' + url + castId + '.js" id="asciicast-' + castId + '" async></script>'
                +'</div>';
            }
        }
    }
};
