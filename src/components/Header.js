import React from 'react'
import ReactSwitch  from 'react-switch'
import { Text } from '../styles'
import { useMediaQuery } from '../hooks'
import { SpacerHMd, SpacerHLg } from './spacers'
import { useTheme, useThemeUpdate } from '../contexts/ThemeContext'
// import { sun, moon } from '../assets/images/icons'

const Header = ({ setSelected }) => {
  const theme = useTheme()
  // const toggleTheme = useThemeUpdate()
  const matches = useMediaQuery('md')

  return (
    <div>
    <SpacerHMd />
      <div style={styles.container}>
        {matches
          ? <button onClick={() => setSelected(null)} id={theme} style={styles.text}>
              Jaden Kim
            </button>
          : <a id={theme} href={'/'} style={styles.text}>
              Jaden Kim
            </a>
        }
        {/*<div style={styles.switch}>
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === 'dark'}
            offColor={'#000'}
            offHandleColor={'#FFF'}
            onColor={'#FFF'}
            onHandleColor={'#000'}
            uncheckedIcon={sun}
            checkedIcon={moon}
            height={20}
            width={40}
            handleDiameter={18}
            borderRadius={20}
          />
        </div>*/}
      </div>
    <SpacerHLg />
    </div>
  )
}

const styles = {
  container: {
    margin: 0,
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
  },
  text: {
    ...Text.text.title,
    margin: 0,
  },
  switch: {
    zIndex: -1,
    margin: 0,
  },
}

export default Header