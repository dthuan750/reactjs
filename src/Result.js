import React from 'react'

const Result = ({word, phonetics, meanings, setText}) => {
    return (
        <ul>
            <li className='word'>
                <h2>{word}</h2>
                {
                    phonetics.map((phonetic, index) => (
                        <span key={index}>{phonetic.text}</span>
                    ))
                }
            </li>

            {
                meanings.map((meaning, index) => (
                    <li className="contain">
                        <h3>noun</h3>
                        <div className='details meaning'>
                            <h3>Meaning</h3> 
                            {
                                meaning.definitions.map((definition, index) => (
                                    <p key={index}>- {definition.definition}</p>
                                ))
                            }
                        </div>

                        <div className='details synonyms'>
                            <h3>Synonyms</h3>
                            <span>greeting, </span>
                            <span>greeting, </span>
                            <span>greeting, </span>
                        </div>
                    </li>
                ))
            }

        </ul>
    )
}

export default Result