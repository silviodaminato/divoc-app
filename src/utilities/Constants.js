const urls = {
    NATIONAL: 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json',
    REGIONAL: 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json',
    PROVINCIAL: 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json',
    REVERSE_GEOCODING_URL: 'https://nominatim.openstreetmap.org/reverse',
}

const colors = {
    BLACK: 'black',
    WHITE: 'white',
    GREEN: '#2ECAA7',
    PINK: '#FC28D9',
    YELLOW: '#F8E100',
    GREY: 'rgba(255,255,255,0.7)'
}

const gradients = {
    BACKGROUND: {
        colors: ['#000000', '#01062E'],
        start: { x: 0, y: 0.2 },
        end: { x: 1, y: 1 }
    },
}

const fonts = {
    potra: {
        light: "Potra"
    },
    rubik: {
        italic: 'Rubik-Italic',
        regular: 'Rubik-Regular',
        bold: 'Rubik-Bold',
        medium: 'Rubik-Medium',
        black: 'Rubik-Black',
        light: 'Rubik-Light'
    }
}

export default {
    urls,
    colors,
    gradients,
    fonts
}