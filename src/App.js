
import { Button } from './components/Button.js'
import { Counter } from './components/Counter.js'
import { useState } from 'react';
import {Header} from './components/Header.js'
import {Content} from './components/Content.js'
import {Total} from './components/Total.js'

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  const course = 'Half Slack application development'
  const part1 = 'Fundmentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
    <Counter counter={counter} />
    <Button onClick={increaseByOne} btnText="Plus one" />
    <Button onClick={decreaseByOne} btnText="Minus one" />
    <Button onClick={setToZero} btnText="To Zero" />

    <Header course = {course} />
    <Content part1 = {part1} exercises1 = {exercises1} />
    <Content part2 = {part2} exercises2 = {exercises2} />
    <Content part3 = {part3} exercises3 = {exercises3} />
    <Total exercises = {exercises1 + exercises2 + exercises3} />
    </div>        
  )
}

export default App;
