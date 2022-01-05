/* ---------------------------------------------

            </> with 💛 by Vishwa Gaurav
    GitHub : https://github.com/VishwaGauravIn
              Website : https://itsvg.in

------------------------------------------------ */

module.exports = getTweetId = (url) => {
  if (url != "" && url.includes("/status/")) {
    var re = new RegExp(/[/status/][0-9]+/g);
    id = url.match(re);
    return(id[0].replace("/", ""));
  } else {
      return 'Invalid URL'
  }
};

// // Uncomment this for test
// console.log(getTweetId(
//   "https://twitter.com/VishwaGauravIn/status/1472126167167627265"
// ));
