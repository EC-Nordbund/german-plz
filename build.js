const fs = require('fs')
const fetch = require('node-fetch')

const PATH = './data/'

const charMap = { '/': '\\/' }

function plz() {
  if (!fs.existsSync(PATH)) {
    fs.mkdirSync(PATH)
  }

  fs.readdirSync(PATH)
    .filter((v) => v[0] !== '.')
    .map((v) => PATH + v)
    .forEach(fs.unlinkSync)

  fetch(
    'https://www.suche-postleitzahl.org/download_files/public/zuordnung_plz_ort.csv'
  )
    .then((v) => v.text())
    .then((content) => {
      const plzData = {}
      const ortData = {}

      content.split('\n').forEach((eintrag, id) => {
        if (id === 0 || eintrag === '') {
          return
        }

        const data = eintrag.split(',')
        const plz = data[2]
        const ort = data[1]

        if (!plzData[plz]) {
          plzData[plz] = []
        }

        plzData[plz].push(ort)


        if (!ortData[ort.replace('/', '\\/')]) {
          ortData[ort.replace('/', '\\/')] = []
        }

        ortData[ort.replace('/', '\\/')].push(plz)
      })

      const plzListe = Object.keys(plzData).sort()

      plzListe.forEach((plz) => {
        fs.writeFileSync(PATH + plz + '.json', JSON.stringify(plzData[plz]))
      })

      fs.writeFileSync(PATH + 'plz.json', JSON.stringify(plzListe.filter(v => ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(v[0]) !== -1)))
      fs.writeFileSync(PATH + 'plz.full.json', JSON.stringify(plzData))
      fs.writeFileSync(PATH + 'ort.json', JSON.stringify(ortData))
    })
}

plz()
