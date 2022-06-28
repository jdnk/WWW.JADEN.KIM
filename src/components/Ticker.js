import * as React from 'react'
import Marquee from 'react-fast-marquee'
import { Colors, Spacing, Text } from '../styles'

const Ticker = () => (
  <div style={styles.container}>
    <Marquee gradient={false} speed={30} pauseOnHover={true}>
      <div
        style={styles.ticker}
      >
        <p style={styles.text}>
          {tickerText}
        </p>
      </div>
    </Marquee>
  </div>
)

const styles = {
  container: {
    position: 'fixed',
  },
  ticker: {
    ...Spacing.spacing.horMd,
    display: 'flex',
    backgroundColor: Colors.colors.light.banner,
    justifyContent: 'center',
  },
  text: {
    ...Text.text.item,
    margin: 0,
    marginTop: 5,
  },
}

const tickerList = [
  'Hallo',
  'Mirë dita',
  'ታዲያስ',
  'مرحبا',
  'Салам',
  'Kaixo',
  'নমস্কার',
  'Zdravo',
  'Oi',
  'Demat',
  'Здравейте',
  'Hola',
  'Moni',
  'Bonghjornu',
  'Bok',
  'Ahoj',
  'Hej',
  'Hello',
  'Saluton',
  'Tere',
  'سلام',
  'Bula',
  'Kamusta',
  'Hei',
  'Bonjour',
  'მიესალმები',
  'Χαίρε',
  'Aloha',
  'שלום',
  'नमस्ते',
  'Sziasztok',
  'Halo',
  'Dia dhuit',
  'Ciao',
  'こんにちは',
  'ನಮಸ್ಕಾರ',
  'ជំរាបសួរ',
  '안녕',
  'ສະບາຍດີ',
  'Salve',
  'Sveiki',
  'Hallau',
  'Sveiki',
  'Добар ден',
  'Selamat tengahari',
  'Ħelow',
  '你好',
  'Kia ora',
  'ନମସ୍କାର',
  'Cześć',
  'Buna',
  'Привет',
  'Talofa',
  'Здраво',
  '侬好',
  'Mhoro',
  'Ahoj',
  'Grüss Gott',
  'Hodi',
  'வனக்கம்',
  'Xin chào',
  'Womenjeka',
  'నమస్కారం',
  'สวัสดีครับ',
  'Merhaba',
  'Chào bạn',
  'Helo',
  'העלא',
  'Sawubona',
]

const tickerText = tickerList.join(' ')

export default Ticker
