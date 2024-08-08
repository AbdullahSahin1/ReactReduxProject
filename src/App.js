import Navbar from './components/Navbar'
import CourseList from './components/CourseList'
import { useEffect } from 'react';
import { calculateTotal } from './control/cardSlice';
import { useSelector,useDispatch } from 'react-redux';
import './App.css';
function App() {
  const {cartItems} = useSelector((store)=> store.cart)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(calculateTotal())
  },[cartItems])
  return (
    <div className="App">
      <Navbar></Navbar>
      <CourseList></CourseList>
    </div>
  );
}

export default App;
