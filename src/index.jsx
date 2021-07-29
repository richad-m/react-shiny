import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/index'
import Survey from './pages/Survey/index'
import Header from './components/Header/index'
import Error from './components/Error/index'
import Results from './pages/Results/index'
import Freelances from './pages/Freelances/index'
import Footer from './components/Footer/index'
import { ThemeProvider, SurveyProvider } from './utils/context'
import GlobalStyle from './utils/style/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    {/* Router for all paths accessibles from within the website */}
    <Router>
      {/* Global style for all the app */}
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          {/* Switch to enable first path found */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* Parametric Route to get questions in the survey */}
            <Route path="/survey/:questionNumber">
              <Survey />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
            <Route path="/freelances">
              <Freelances />
            </Route>
            <Route>
              {/* Error route in cas no routes matches any path */}
              <Error />
            </Route>
          </Switch>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
