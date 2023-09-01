
import { useEffect, useState } from 'react'
<<<<<<< HEAD
import { multiChoiceUrl } from '../common/constants'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Chip, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

const MultipleChoice = (props) => {

    const [choices, setChoices] = useState([])
    const [answer, setAnswer] = useState(undefined)
    const [counter, setCounter] = useState(undefined)



    const mainGame= ()=>{
        // if(!answer){
        //     // data()
            pickAnswer()
        // }else{
        //     // regenQuestions()
        // }
    }

    async function data() {

        try {
            const response = await fetch(`${multiChoiceUrl}?tag=${props.activeDictionary.tags[0]}`)
            const data = await response.json();
            setChoices(data)
            return
        } catch (error) {
            console.log(error)
            return
        }

    }

    function pickAnswer() {
        let rand = Math.floor(Math.random() * 3)
        setAnswer(choices[rand])
    }



    function regenQuestions() {
        data()
        pickAnswer()
        
    }


    function checkAnswer(e) {
        const selected = e.target.getAttribute('id')
        console.log(selected)
        if (selected == answer._id) {
            !counter ? setCounter(1) : counterUP() 
            setChoices([])
            console.log('correct')
            // data()
        }else{
            console.log('niet')
        }
        
    }


    function counterUP() {
        const set = counter + 1
        setCounter(set)
    }
    useEffect(() => {
        data()
        // pickAnswer()


    }, [props.activeDictionary])

    return (
        <div>
            <Button variant="contained" sx={{ background: 'green' }} onClick={() => {
                // pickAnswer()
                mainGame()
            }} >NEW GAME </Button>

            {/* debug */}
            <Button variant="contained" sx={{ background: 'green' }} onClick={() => {
                console.log(answer)
            }} >test </Button>
            {/* <Button variant="contained" sx={{ background: 'green' }} onClick={() => {
                regenQuestions()
            }} >GEN </Button> */}
            <Typography>{answer && answer.word}</Typography>

            <div id='area'>
                <Stack>
                    {answer && choices.map((choice, index) => {
                        return (
                            <Button
                                color={choice._id === answer._id ? 'primary' : 'success'}
                                sx={{ color: 'black' }} key={choice._id}
                                onClick={(e) => checkAnswer(e) }
                                id={choice._id}
                                
                                >{choice.definition}</Button>

                        )

                    })}
                </Stack>

                <div>{counter}</div>
            </div>
        </div>
    )
=======
import ChipStack from './ChipStack'



const MultipleChoice = () => {
    // const [activeDictionary, setActiveDictionary] = useState(undefined);

    return (
        <h1>Hi</h1>
    // <ChipStack setActiveDictionary={setActiveDictionary} />
        )
>>>>>>> 3c308df64e8e315b956f061212767b4686d3a7b9
}


export default MultipleChoice