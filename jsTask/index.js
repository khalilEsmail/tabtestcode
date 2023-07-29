// const data = require('./data.json'); 
// for broswe use comment the up requuire and un comment the bellow import :


/**
 * 
 * Expected output: 
  ["supernatural", "horror", "drama","fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]


 */
function getUniqeTags(data) {
    let $tags = [];
    // first we loop to get the tags and ad them to new tags array
    data.forEach((item) => {
        // we can use tags array var becuase of clouser rouls of javascript and function scopes 
        $tags = [...$tags, ...item.tags]; // mearg all tags in order to perform filter operation on them for latter use 
        
    });

    // search for like tags
    $tags = $tags.filter((tag, index) => {
       return $tags.indexOf(tag) === index // get dublicates you neeed to remove it 
    })

  return $tags ;
}



function extractTagsfrom(entries) {
  let tags = [] ; 
  entries.forEach(item => tags =  [...tags ,...item.tags]);
  return tags ; 
}

function _getUniqeTags(dataset){
  //# caching this On+1 complisty 

  // const tags = extractTagsfrom(dataset) ; 
  // const $tags = new Set(tags) ; 
  // return [...$tags]

  // Direct inject Olog(n) complisty
  return Array.from(new Set(extractTagsfrom(dataset)))

}



export  {_getUniqeTags,getUniqeTags};

// console.log(getUniqeTags(data))