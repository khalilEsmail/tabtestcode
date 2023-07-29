
/**
 * 
 * @param {Array} data 
 * @returns Array
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

  return $tags;
}


/**
 * 
 * @param {Array} entries 
 * @returns Array
 */
function extractTagsfrom(entries) {
  let tags = [];
  entries.forEach(item => tags = [...tags, ...item.tags]);
  return tags;
}
/**
 * 
 * @param {Array} dataset 
 * @returns Array
 * caching this On+1 complexity 
 * const tags = extractTagsfrom(dataset) ; 
 * const $tags = new Set(tags) ; 
 * return [...$tags]
 */

function _getUniqeTags(dataset) {

  // Direct inject Olog(n) complexity
  return Array.from(new Set(extractTagsfrom(dataset)))

}



export { _getUniqeTags, getUniqeTags };

