import { Box,Stack, Typography,Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {exerciseOptions, fetchData} from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises, setExercises, bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisePerPage=9;

  const indexofLastExercise = currentPage * exercisePerPage;
  const indexofFirstExercise = indexofLastExercise- exercisePerPage;
  const currentExercises = exercises.slice(indexofLastExercise,indexofFirstExercise)

  const Paginate=(e, value)=> {
    setCurrentPage(value);
    window.scrollTo({top:1800, behavior:'smooth'})
  }

  useEffect(() => {
    const fetchExercisesData= async() => {
      let exercisesData = []

      if(bodyPart === 'all')
      {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      }else{
        exercisesData= await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData)
    }
    fetchExercisesData()
  }, [bodyPart])
  
  return (
    <Box id="exercises"
      sx={{mt:{lg:'110px'}}}
      mt="50px"
      p="20px"
    >
      <Typography variant='h4' mb="46px">
        Showing Results
      </Typography>

      <Stack direction="row" sx={{gap:{lg:'110px', xs:'50px'}}}
        flexWrap="wrap" justifyContent="center">
          {exercises.map((exercise, index)=> (
             <ExerciseCard key={index} exercise={exercise}/>
          ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
            {exercises.length> 9 &&(
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length/exercisePerPage)}
                page={currentPage}
                onChange={Paginate}
                size="large"
                onChangeCapture={Paginate}
              />
            )}
      </Stack>
    </Box>
  )
}

export default Exercises