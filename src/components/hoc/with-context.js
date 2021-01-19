import React from 'react';
import { BSConsumer } from '../context';

const withContext = Wrapper => p =>{
    return <BSConsumer>
        {bss => <Wrapper bss={bss} {...p}/>}
    </BSConsumer>
}

export default withContext