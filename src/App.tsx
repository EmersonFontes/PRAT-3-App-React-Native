import { registerRootComponent } from 'expo';
import { Text } from './App.style';
import { Modal } from './cp/modal/modal';
import React, {useState} from 'react';
import { Button } from './cp/button';
import { Label } from './cp/label';
import { SplitBoard } from './cp/split/split';
function App() {
  
  const [open, setOpen] = useState(false);

  return (
    <>
    
        <SplitBoard direcao='linha' size='50%' zona1={ 
          <Button onPress={()=>setOpen(true)}>Abrir</Button>
            
        } zona2={
          <>
            <Label bgColor='#00ff' color='#ffffff' texto='Emerson Gabriel'/>
          </>
        } />
        <Modal isOpen={open} setModal={()=>setOpen(!open)} title={'teste'} children={ <Text>Emerson Teste</Text> }/>
    </>
   
  );
}

export default registerRootComponent(App);

