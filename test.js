var wavFileInfo= require('./wav-file-info.js');

wavFileInfo.infoByFilename('./test.wav', function(err, info){
    console.log(err, info);
  if (err) throw err ;

})
