import format from 'date-fns/format'
import pl from "date-fns/locale/pl"

const stamp = format(new Date(2023, 7, 14), "LLLL yyyy", {
    locale: pl
})

let lastUpdate = document.querySelector('.footer__date--js')
lastUpdate.innerHTML = `Ostatnia aktualizacja: ${stamp}`
