import React from 'react'
import {Box} from '@mui/material' 
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
  const [bodyPart, setbodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setbodyPart={setbodyPart}/>
      <Exercises
      setExercises={setExercises}
      bodyPart={bodyPart}
      setbodyPart={setbodyPart}
      />
    </Box>
  )
}

export default Home