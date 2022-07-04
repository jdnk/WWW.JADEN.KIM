import * as React from 'react'
import { useMediaQuery } from '../hooks'

const Image = ({ image }) => {
  const md = useMediaQuery('md')
  const lg = useMediaQuery('lg')
  const xl = useMediaQuery('xl')

  return (
    <div>
      {xl
        ? <img src={image} alt={'It ain\'t here.'} style={styles.imageXL} />
        : (lg
        ? <img src={image} alt={'It ain\'t here.'} style={styles.imageLg} />
        : (md
        ? <img src={image} alt={'It ain\'t here.'} style={styles.imageMd} />
        : <img src={image} alt={'It ain\'t here.'} style={styles.image} />
        ))
      }
    </div>
  )
}

const styles = {
  image: {
    margin: 0,
    backgroundSize: 'cover',
    maxWidth: '100%'
  },
  imageMd: {
    margin: 0,
    backgroundSize: 'cover',
    maxHeight: '400px',
    maxWidth: '100%'
  },
  imageLg: {
    margin: 0,
    backgroundSize: 'cover',
    maxHeight: '500px',
    maxWidth: '100%'
  },
  imageXL: {
    margin: 0,
    backgroundSize: 'cover',
    maxHeight: '600px',
    maxWidth: '100%'
  },
}

export default Image
