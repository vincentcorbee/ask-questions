import { askQuestions } from './src'

askQuestions([{
  question: 'What is your name?',
  name: 'name',
  required: true
}, {
  question: 'What is your age?',
  name: 'age',
}], { title: 'Questions' }).then(console.log).catch(console.error)