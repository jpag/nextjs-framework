import ReactGA from 'react-ga'

export const initGA = () => {
  // console.log(' ---- GA init')
  if (window.location.host.search('localhost') >= 0) {
    ReactGA.initialize('UA-000000-00')
  } else {
    // could also be stored in the data config
    ReactGA.initialize('UA-PROD-ID')
  }
}

export const logPageView = () => {
  if (!window.GA_INITIALIZED) {
    initGA()
    window.GA_INITIALIZED = true
  }
  console.log('Logging pageview for ${window.location.pathname}', window.location.pathname)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '') => {
  if (!window.GA_INITIALIZED) {
    initGA()
    window.GA_INITIALIZED = true
  }
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}