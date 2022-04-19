function printNumbers(n, timeDelayBetween) {
  for (let i of [...Array(n).keys()]) {
    const fn = (index) => {
      setTimeout(() => {
        console.log(index)
      }, (i + 1) * timeDelayBetween);
    }

    fn(i)
  }
}


function printPromiseChaing (n, timeDelayBetween) {
  for (let i=0, w=Promise.resolve(); i<n; i++) {
    w = w.then(() => new Promise(r => {
      setTimeout(() => {
        resolve(i)
      }, timeDelayBetween);
    }).then((index) => {
      console.log(index)
    }))
  }
}

async function printAsyncAwait (n, timeDelayBetween) {
  const s = (ms) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      }, timeDelayBetween)
    })
  }

  for (let i of [...Array(n).keys()]) {
    await s(timeDelayBetween)
    console.log(i)
  }
}