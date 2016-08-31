// //browsify in order to work

// var ig = require('instagram-node').instagram();
// var accessToken = '811228545.52f3bcb.62b9ef70ea6e458fb1b85eabf15563e9'
// ig.use({ access_token: accessToken});
// ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
//   var times = 1
//   for (var i=0; i<times; i++){
//     if(medias[i]['captions'] == null){
//       $('#social').preappend(
//         '<div class="tile"><a href="'+ medias[i]['link'] + '"target="_blank" data-clicked="0"><img src="'+ medias[i]['images']['standard_resolution']['url'] + '" alt="Instagram Image"><p> See Image </p></a></div>'
//       )
//     } else{
//       $('#social').preappend(
//         '<div class="tile"><a href="'+ medias[i]['link'] + '"target="_blank" data-clicked="0"><img src="'+ medias[i]['images']['standard_resolution']['url'] + '" alt="'+ medias[i]['captions']['text'] +'"><p>'+ medias[i]['captions']['text'] +'</p></a></div>'
//       )
//     }
//   }
// });