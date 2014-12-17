jQuery.fn.jsprepos = function(){
    var words = ['bez', 'cez', 'do', 'k', 'medzi', 'na', 'nad', 'o', 'od', 'okrem', 'po', 'pod', 'pre', 'pred', 'pri', 'proti', 'naproti', 'oproti', 's', 'skrz',
        'u', 'v', 'z', 'za', 'k', 'zo', 'so', 'vo','a','i','že'];
    var shortcuts = ['sl\.','č\.','ž\.', 'š\.' ];
    return this.each(function(){
        var text =$(this).text();

        for (var key in words){ //prepositions
            var regex = new RegExp('(^\|\\s+)('+words[key]+'\\b)\\s+', 'gim');
            text = text.replace(regex,'$1$2&nbsp;');
        }
        for (var key in shortcuts){ //shortcuts
            var regex = new RegExp("(&nbsp;|\\s+)("+shortcuts[key]+")(\\s+|$)", "gim");
            text = text.replace(regex,'$1$2&nbsp;');
            text = text.replace(regex,'$1$2&nbsp;'); //must run twice, because of system do not evaluate 2 expressions beside
        }

        text = text.replace(/(&nbsp;|\s+)([A-Za-z]\.)\s+/gim, '$1$2&nbsp;'); //one-character shortcuts
        text = text.replace(/(&nbsp;|\s+)([A-Za-z]\.)\s+/gim, '$1$2&nbsp;'); //one-character shortcuts, must run twice, because of system do not evaluate 2 expressions beside
        text = text.replace(/(\b\-?[0-9]+\.?[0-9]*\b)\s+/gm, '$1&nbsp;'); //numbers
        text = text.replace(/(\b[0-9]{1,2}\.)\s+/gm, '$1&nbsp;'); //dates

        $(this).html(text);
    });
};
