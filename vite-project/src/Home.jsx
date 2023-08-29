import { useEffect, useState } from 'react'
import { Chip, Stack, Grid, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import axios from 'axios';
import { dictionariesApiUrl, randomWordUrl } from './common/constants'


function Home() {
    const [dictionaries, setDictionaries] = useState([]);
    const [activeDictionary, setActiveDictionary] = useState(undefined);
    const [wordAndDefinition, setWordAndDefinition] = useState(undefined);


    async function data() {
        const response = await fetch(dictionariesApiUrl);
        const dictionaryData = await response.json();
        setDictionaries(dictionaryData)
        setActiveDictionary(dictionaryData[0])
        return
    }
    async function getRandomWord() {
        const response = await fetch(`${randomWordUrl}?tag=${activeDictionary.tags[0]}`);
        const data = await response.json();
        console.log(data)
        setWordAndDefinition(data)
        return
    }

    useEffect(() => {
        data()
    }, [])

    return (
        <Grid container
            justifyContent='flex-start'
            alignItems='flex-start'
            sx={{height: '95vh', border: 'solid 1pt red' }}
        >
            <Grid item>
                {activeDictionary && (
                    <Typography variant='h4'> {activeDictionary.title} </Typography>
                )}
            </Grid>
            <Grid item >

                <Stack direction='vertical' spacing={1} margin={1}>
                    {dictionaries && dictionaries.map((book, index) => {
                        return <Chip label={book.title} key={index} onClick={() => { setActiveDictionary(book) }} />
                    })}
                </Stack>
            </Grid>

            <Grid item>
                <Button variant='contained' onClick={() => { getRandomWord() }}>Get Random Word</Button>
            </Grid>
            <Grid item>
                {wordAndDefinition && (
                    < Accordion >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ color: 'black' }}>{wordAndDefinition.word}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: 'black' }}>
                                {wordAndDefinition.definition}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )}
            </Grid>
        </Grid >
    )

}

export default Home