

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
 * @param {Array} data 
 * @returns Array
 */
function getUniqeTags(data) {
  let $tags = extractTagsfrom(data)
  // search for like tags
  $tags = $tags.filter((tag, index) => $tags.indexOf(tag) === index) ;

  return $tags;
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

