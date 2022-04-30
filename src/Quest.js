import { Stack, Radio, RadioGroup, ButtonGroup, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Quest = () => {
  const [num, setNum] = useState(0)
  const [score, setScore] = useState(0)
  const [walue, setWalue] = useState([
    {
      id: 1,
      question: 'Most populated country in Africa is?',
      options: ['Nigeria', 'Ghana', 'Libya', 'Togo'],
      answer: 'A',
      value: '',
      checker: false,
    },
    {
      id: 2,
      question: 'Most populated state in Nigeria is?',
      options: ['Ogun', 'Rivers', 'Lagos', 'Enugu'],
      answer: 'C',
      value: '',
      checker: false,
    },
    {
      id: 3,
      question: 'Name of the president of federal republic of Nigeria?',
      options: ['Amosun', 'Buhari', 'Tinubu', 'Obasanjo'],
      answer: 'B',
      value: '',
      checker: false,
    }
  ])
  const val = walue[num]
  function scoreChecker() {
    if(val.answer == val.value){
      setScore(prev => prev += 1)
      setWalue(prev => [...prev, val.checker = true])
    } else if (val.checker){
      setScore(prev => prev -= 1)
      setWalue(prev => [...prev, val.checker = false])
    }
  }
  // useEffect(() => {

  // }, [])
  return ( 
    <>
      <h1>Global Score: {score}</h1>
      <p>{`${val.id}. ${val.question}`}</p>
      <RadioGroup onChange={(e) => {
        setWalue(prev => [...prev, val.value = e])
        scoreChecker()
        }} value={val.value}>
        <Stack>
          <Radio value='A'>{val.options[0]}</Radio>
          <Radio value='B'>{val.options[1]}</Radio>
          <Radio value='C'>{val.options[2]}</Radio>
          <Radio value='D'>{val.options[3]}</Radio>
        </Stack>
      </RadioGroup>
      <ButtonGroup>
        <Button onClick={() => setNum(num - 1)}>prev</Button>
        <Button onClick={() => setNum(num + 1)}>next</Button>
      </ButtonGroup>
    </>
   )
}
 
export default Quest;