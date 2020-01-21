/* Math */

const handlebars = require('handlebars');

handlebars.registerHelper('math',(from,operator,second,options)=>{
  first = parseFloat(first);
  second = parseFloat(second);
  return{
    "+": first + second
  }[operator];
});
