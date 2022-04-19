var longestCommonPrefix = function(strs) {
	const sss = strs.reduce((_set, str) => {
		const chars = str.split('')
    let addIndex = null
    
    for (let i = 0, len = chars.length; i < len; i += 1) {
      if (strs.every(x => x.indexOf(chars[i]) > -1) && (addIndex === null || (addIndex + 1) === i)) {
      	_set.add(chars[i])
        addIndex = i
      }
    }
    
    return _set
    
	}, new Set())
  	
	return [...sss].join('')
};
