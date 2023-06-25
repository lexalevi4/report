

import './dist/output.css'
import './dist/style.css'

import { Outlet, Route, Routes } from 'react-router-dom';
import Settings from './pages/Settings';
import Report from './pages/Report';


function App() {

  return (
    <>
      <Routes>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/report' element={<Report />}></Route>
      </Routes>

      <Outlet />

    </>
  )


}

export default App;
