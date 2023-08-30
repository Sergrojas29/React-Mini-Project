import { useEffect, useState } from 'react'
import { Chip, Stack, Grid, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import axios from 'axios';
import { randomWordUrl } from './common/constants'
import TopDrawer from './components/TopDrawer'
// import ChipStack from './components/ChipStack'

function Home(props) {
    
    const [wordAndDefinition, setWordAndDefinition] = useState(undefined);

    async function getRandomWord() {
        try {
            const response = await fetch(`${randomWordUrl}?tag=${props.activeDictionary.tags[0]}`);
            const data = await response.json();
            console.log(data)
            setWordAndDefinition(data)
        } catch (error) {
            console.log(error)
        }

        return
    }


    return (
        <div>
            <TopDrawer />
            <Grid container
                justifyContent='space-around'
                alignItems='flex-start'
                sx={{ border: 'solid 1pt red' }}
            >
                <Grid item>
                    {/* <ChipStack/> */}
                </Grid>
                <Grid item
                    flexGrow={1}
                    sx={{ border: 'solid 1pt blue' }}>
                    {props.activeDictionary && (
                        <Typography variant='h4'> {props.activeDictionary.title} </Typography>
                    )}
                    <Grid item sx={{ border: 'solid 1pt black' }}>
                        <Button variant='contained' onClick={() => { getRandomWord() }}>Get Random Word</Button>
                    </Grid>
                    <Grid item sx={{ border: 'solid 1pt red' }}>
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
                </Grid>


            </Grid >
        </div>
    )

}

export default Home