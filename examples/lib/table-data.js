function getDataFrom (selector)
{
    var RE_NOT_BLANK = /^\S+$/;
    
    var columns = [];
    var ykeys   = [];
    var data    = [];
    
    $("thead th", selector).each(function ()
    {
        var key = $(this).text();
        
        if (key.match(RE_NOT_BLANK)) {
            columns.push(key);
            ykeys.push("col" + (columns.length - 1));
        }
    });
    
    
    $("tbody tr", selector).each(function (i, row)
    {
        var colData = { "tick": $("th", row).text() };
        
        $("td", row).each(function (j, col)
        {
            colData["col" + j] = parseFloat( $(col).text() );
        });
        
        data.push(colData);
    });
    
    return {
        "data"   : data,
        "xkey"   : "tick",
        "ykeys"  : ykeys,
        "labels" : columns
    };
}
