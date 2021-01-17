const asciichart = require('asciichart')

var s2 = new Array (120)
s2[0] = Math.round (Math.random () * 15)
for (i = 1; i < s2.length; i++)
    s2[i] = s2[i - 1] + Math.round (Math.random () * (Math.random () > 0.5 ? 2 : -2))
 
var s3 = new Array (120)
s3[0] = Math.round (Math.random () * 15)
for (i = 1; i < s3.length; i++)
    s3[i] = s3[i - 1] + Math.round (Math.random () * (Math.random () > 0.5 ? 2 : -2))
 
console.log (asciichart.plot ([ s2, s3 ]))