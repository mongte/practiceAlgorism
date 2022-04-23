const fn = (arr) => {
	const counter = arr.reduce((result, n) => {
  	console.log(n)
    result[n] = (result[n] || 0) + 1

    return result
  }, {})

  console.log(counter)

  const minValue = Math.min(...Object.values(counter))

  const key = Object.keys(counter).find(k => counter[k] === minValue)

  console.log('key', key)
}



/* fn([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1]) */

const fn2 = (map) => {


  const a = map.reduce((result, n, i) => {
  	if (result.length === 0) {
    	result.push(n)
    } else {
    	if (result.slice().pop() !== n) {
      	result.push(n)
      }
    }

    return result
  }, [])

  console.log('n', a)

  a.reduce((o1, o2, i) => {
  	console.log('--', i)

    return o2
  })

}


/* fn2([2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5]) */

const fn3 = (citys) => {
	const sArr = Array.from(new Set(citys))

  console.log(sArr)

  let td = []
  const cc = citys.reduce((result, city, idx) => {
  	if (td.length === sArr.length) {
    	return result
    }

  	if (result.includes(city)) {
    	result = [city]
      td = [idx]
    } else {
    	result.push(city)
      td.push(idx)
    }

    return result
  }, [])

  console.log('result', cc, td)

}

/* fn3([7,4,7,3,4,1,7]) */


/*
회문
*/
const fn11 = (str) => {
	const strArr = str.split('')
	const first = strArr[0]
  const last = strArr.slice().pop()

  console.log(first, last)

  const reverseStrArr = [...strArr].reverse()

  if (first !== last && ![first, last].includes('?')) {
  	return 'NO'
  }




  const replaceArr = strArr.reduce((result, str, idx) => {
  	const reverseStr = reverseStrArr[idx]

    const arr = [str, reverseStr]
  	if (!arr.includes('?') && str === reverseStr) {
    	result.push(str)
    } else {
    	console.log(idx, str, reverseStr)
    	if (str === '?' && reverseStr === '?') {
      	result.push('z')
      } else if (str === '?') {
      	result.push(reverseStr)
      } else {
      	result.push(str)
      }
    }

    return result
  }, [])



  console.log(strArr, [...strArr].reverse())
  /* console.log('result', sss.join('')) */

  const result = replaceArr.join('')
    if (result ===  [...replaceArr].reverse().join('')) {
        return result
    } else {
        return 'NO'
    }
}


/* const result = fn11('aaaa???bba') */

/* console.log('r', result) */

/*
  1-100까지 랜덤한 문자열과 랜덤한 상호명 배열을 받아
  문자열 안에서 상호명들을 최대 몇게까지 만들 수 있나
  문자열에서 하나 만들때마다 해당 문자열에서 빼야함
*/


const fn22 = (S, L) => {
	const sArr = S.split('')

  const setS = Array.from(new Set(sArr))

  let countObj = L.reduce((result, key) => {
  	result[key] = result[key] || 0
    return result
  }, {})

  console.log('s', countObj)
  for (let rootstr of L) {
  	const rootstrArr = rootstr.split('')

    const is = rootstrArr.every(x => setS.includes(x))

    if (!is) {
    	console.log('rootstr', rootstr)
    	continue
    }


    sArr.reduce((result, str) => {
    	countObj[rootstr] += 1
      console.log('in result', result)
      const tempList = []
      for (let rs of rootstrArr) {
        const idx = result.findIndex(x => x === rs)
        console.log(idx, rs)
        if (idx > -1) {
        	tempList.push(`${rs}_${idx}`)
          result.splice(idx, 1)
        } else {

          for (let temp of tempList) {
          	const [v, i] = temp.split('_')
            result.splice(i, 0, v)
          }

          countObj[rootstr] -= 1
        	break
        }
      }

      return result
    }, [...sArr])
  }

  console.log('rr', countObj)

  return Math.max(...Object.values(countObj))
}

/* const result = fn22('CAT', ['ILOVEMYDOG', 'CATS']) */



/*
임의 방구조를 인자로 받고 로봇총소기로 몇칸까지 청소 가능한지리턴
장애물을 만다면 시계바향으로 돌며 해당 방향에서 다음 장애물을 만날때 까지 진행
중복된 타일은 진행방향에서 넘어가며 진행
*/
const fn33 = (R) => {

  const map = R.reduce((result, str) => {
  	const row = str.split('')


  	result.push(str.split(''))
  	return result

  }, [])

  console.log(map)

  const saveXY = []
  const direction = {
  	L: () => {
    	x += 1
    },
    D: () => {
    	y += 1
    },
    R: () => {
    	x -= 1
    },
    U: () => {
    	y -= 1
    }
  }

  let w = 'L'
 	let currentXY = ''

  let x = 0
  let y = 0
  for (y; y < map.length; direction[w]()) {

    for (x; x < map[y].length; direction[w]()) {
			const t = map[y][x]
      const xy = x + '_'+ y
      if (t !== 'X' && !saveXY.includes(xy)) {
      	saveXY.push(xy)
        currentXY = xy
      } else if (t !== 'X' && saveXY.includes(xy)) {

      	if (w === 'L') {
        	x += 1
        } else if (w === 'D') {
        	y += 1
        } else if (w === 'R') {
        	x -= 1
        } else {
        	y -= 1
        }
      } else {
      	if (w === 'L') {
        	w = 'D'
        } else if (w === 'D') {
        	w = 'R'
        } else if (w === 'R') {
        	w = 'U'
        } else {
        	w = 'L'
        }
      	break;
      }
    }
  }
}


fn33(['....X..', 'X......', '.....X.', '.......'])