import * as React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Store } from 'redux'
import { History } from 'history'
import { ThemeProvider } from 'styled-components'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Routes from './routes'
import { ApplicationState } from './store'
import LayoutContainer from './containers/LayoutContainer'
import * as themes from './styles/themes'
import { BroadcastDataProvider } from './contexts/BroadcastContext'
//import FontStyles from './styles/fonts'

// Any additional component props go here.
interface MainProps {
  store: Store<ApplicationState>
  history: History
}

// Created an intersection type of the component props and our Redux props.
const Main: React.FC<MainProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <ConnectedRouter history={history}>
          <LayoutContainer>
            {({ theme }) => (
              <ThemeProvider theme={themes[theme]}>
                <BroadcastDataProvider>
                  <Routes />
                </BroadcastDataProvider>
              </ThemeProvider>
            )}
          </LayoutContainer>
        </ConnectedRouter>
      </DndProvider>
    </Provider>
  )
}

// Normally you wouldn't need any generics here (since types infer from the passed functions).
// But since we pass some props from the `index.js` file, we have to include them.
// For an example of a `connect` function without generics, see `./containers/LayoutContainer`.
export default Main