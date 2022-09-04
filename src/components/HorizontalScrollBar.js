import { Box } from '@mui/material'
import React, { useState } from 'react'
import BodyPart from './BodyPart'

const HorizontalScrollBar = ({ data }) => {
  const [bodyPart, setbodyPart] = useState('all')
  const [exercise, setExercises] = useState([])
  return (
    <div>
      {data?.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item}
          bodyPart={bodyPart}
          setbodyPart={setbodyPart}/>
        </Box>
      ))}
    </div>
  )
}

export default HorizontalScrollBar