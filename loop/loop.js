/* For loop */
const handlebars = require('handlebars');

handlebars.registerHelper('for',(from,to,incr,block)=>{
  var accum = '';
  for(var i = from; i < to; i += incr){
    accum += block.fn(i);
  }
  return accum;
});
