var rc=require('redis').createClient();
var _=require('underscore');
 
rc.zincrby('myset', 1, 'usera');
rc.zincrby('myset', 5, 'userb');
rc.zincrby('myset', 3, 'userc');
rc.zrevrange('myset', 0, -1, 'withscores', function(err, members) {
        // the resulting members would be something like
        // ['userb', '5', 'userc', '3', 'usera', '1']
        // use the following trick to convert to
        // [ [ 'userb', '5' ], [ 'userc', '3' ], [ 'usera', '1' ] ]
        // learned the trick from
        // http://stackoverflow.com/questions/8566667/split-javascript-array-in-chunks-using-underscore-js
    var lists=_.groupBy(members, function(a,b) {
        return Math.floor(b/2);
    });
    console.log( _.toArray(lists) );
});
rc.quit();
