/**
 * @param {string} s
 * @return {boolean}
 */
 
var mapping = {
  '(': ')',
  '[': ']',
  '{': '}'
 }
 
 var isValid = function(s) {
  var mapping = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  const sList = s.split('')
	
  const temp = []
  let a = sList.reduce((current, next) => {
  	console.log(current, next, temp)
    
    
    if (current === undefined) {
    
    	const cc = temp.pop()
      if (mapping[cc] === next) {
      
      } else {
      	temp.push(next)
      }
    	return next
    }
    
    if (mapping[current]) {
    	if (mapping[current] === next) {
    		return undefined
      } else {
        temp.push(current)
      }
    } else {
    	
      const ccc = temp.pop()
      console.log('eles', 'next->',next, 'ccc->', ccc)
    	if (mapping[ccc] === next) {
      	console.log('out',temp)
      } else {
      	const cccc = temp.pop()
        if (mapping[cccc] === next) {
        
        } else {
        	temp.push(next)
        }
      	
      }
    }
    
    
    return next
  })
  console.log(temp)
  return temp.length === 0
 };