import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Home from './Pages/Home'
import CreateElection from './Pages/CreateElection'
import UserVoting from './Pages/UserVoting'
import AdminPanel from './Components/admin/AdminPanel'
import Results from './Pages/Results'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-election' element={<CreateElection />} />
        <Route path='/vote' element={<UserVoting />} />
        <Route path='/admin' element={<AdminPanel/>}/>
        <Route path='/election' element={<CreateElection/>}/>
        <Route path='/results' element={<Results/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
