const advice = document.querySelector('.advice')
const adviceId = document.querySelector('.advice-id')
const next = document.querySelector('.next-advice')

function nextAdvice() {
    const url = `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`
    fetch(url)
        .then(r => {
            if (!r.ok) throw new Error('Server response error.')
            return r.json()
        })
        .then(json => {
            advice.innerText = `"${json.slip.advice}"`
            adviceId.innerText = json.slip.id
        })
        .catch(() => {
            advice.innerText = 'Advice search error.'
            adviceId.innerText = ''
        })
}

next.addEventListener('click', nextAdvice)
nextAdvice()