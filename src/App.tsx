import { registerRootComponent } from 'expo';
import { Text } from './App.style';
import { Modal } from './cp/modal/modal';
import React, {useState} from 'react';
import { Button } from './cp/button';
import { Label } from './cp/label';
import { TextField } from './cp/textField/textField';
import { SplitBoard } from './cp/split/split';
function App() {
  
  const [open, setOpen] = useState(false);
  const [value, onChangeText] = React.useState('Vitoria MAIOR DO NORDESTE');
  return (
    <>
    
        <SplitBoard onTouchStart={()=>setOpen(false)} direcao='linha' size='50%' bgColorZona1='#ff0000' bgColorZona2='#000000'
        zona1={ 
          <Button onPress={()=>setOpen(true)}>~(FECHAR)</Button>
          
        } zona2={
          <>
              <TextField maxLength={100} numberLines={2} onChangeText={(text)=>onChangeText(text)} value={value} styles={{background:'#00ff00',color:'#ffffff'}}></TextField>
            <Label bgColor='#ffffff' color='#000000' fontSize='26px' texto='Emerson Gabriel'/>
          </>
        } />
        <Modal bgColor='#ffff' isOpen={open} setModal={()=>setOpen(!open)} title={'teste'} children={ <Text>{value}</Text> }/>
    </>
   
  );
}

export default registerRootComponent(App);

