import { Chip, Stack} from '@mui/material';
import { useEffect, useState } from 'react'
import { dictionariesApiUrl} from '../common/constants'


const ChipStack = (props) => {
    const [dictionaries, setDictionaries] = useState([]);
    const [selectedDictionary, setSelectedDictionary] = useState(undefined);


    async function data() {

        try {
            const response = await fetch(dictionariesApiUrl);
            const dictionaryData = await response.json();
            setDictionaries(dictionaryData)
            setSelectedDictionary(dictionaryData[0])
            props.setActiveDictionary(dictionaryData[0])
            return
            
        } catch (error) {
            console.log(error)
            return
        }

    }

    useEffect(() => {
        data()
    }, [])

    return (
        <Stack direction='column' spacing={1} margin={1}>
            {dictionaries && dictionaries.map((book, index) => {
                return <Chip
                    color={book.title === selectedDictionary.title ? 'primary' : 'success'}
                    label={book.title} key={index} onClick={() => {
                        setSelectedDictionary(book)
                        props.setActiveDictionary(book)
                        
                    }} />
            })}
        </Stack>
    )



}


export default ChipStack