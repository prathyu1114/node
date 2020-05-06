var interval = setInterval(function(){ 
    console.log('Hello world!'); 
  }, 1000);
  setTimeout(function() { 
    clearInterval(interval); 
    console.log("Done!");
  }, 6000);