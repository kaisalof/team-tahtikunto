import React, { useState } from 'react'
import '../styles/yhteydenottostyles.css'
//import { TextField, Button } from "@material-ui/core"
//import { makeStyles } from '@material-ui/core/styles'
import emailjs from 'emailjs-com'
import {Form, Input, TextArea, Button} from 'semantic-ui-react'
import Swal from 'sweetalert2'

// nämä emailjs:stä ja salaisina, ei saa näkyä muille
const SERVICE_ID = ''
const TEMPLATE_ID = ''
const USER_ID = '' 

const Lomake = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                icon: 'success',
                title: 'Message Sent Succesfully'
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                icon: 'error',
                title: 'Ooops, something went wrong',
                text: error.text
            })
        });
        e.target.reset()
    }


    return(
        <div className='lomake'>
            <Form onSubmit={handleOnSubmit}>
                <Form.Field 
                    id='form-input-control-email'
                    control={Input}
                    label='Email'
                    name='user_email'
                    placeholder='Email'
                    required
                    icon='mail'
                    iconPosition='left'
                />
                <Form.Field 
                    id='form-input-control-last-name'
                    control={Input}
                    label='Nimi'
                    name='user_name'
                    placeholder='Nimi'
                    required
                    icon='user circle'
                    iconPosition='left'
                />
                <Form.Field 
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Viesti'
                    name='user_message'
                    placeholder='Viesti'
                    required
                />
                <Button type='submit' color='#FF8501'>Lähetä</Button>
            </Form>
        </div>
    )
}


export default Lomake
/*
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));*/
/*
const Lomake = () => {
const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
 });

 const onSubmit = (e) => {
     e.preventDefault();
 };

 const handleChange = (e) =>{
     setToSend
 }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='from_name'
                    placeholder='from name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='to_name'
                    placeholder='to name'
                    value={toSend.to_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <button type='submit'>Submit<button />
            </form>
</div>
            )
   }
*/
            

/*const [nimi, setNimi] = useState('')
 const [email, setEmail] = useState('')
 const [puhelin, setPuhelin] = useState(0)
 const [viesti, setViesti] = useState('')

 const classes = useStyles();

 const formValidation = () => {

         }
         return (
         <>
             <form className={classes.root}>
                 <TextField
                     label='Nimi'
                     type='text'
                     variant="filled"
                     onChange={e => setNimi({ nimi: e.target.value })}
                 />
                 <TextField
                     label='Email'
                     type='email'
                     variant="outlined"
                     onChange={e => setEmail({ email: e.target.value })}
                 />
                 <TextField
                     label='Puhelinnumero'
                     type='text'
                     onChange={e => setPuhelin({ puhelin: e.target.value })}
                 />
                 <TextField
                     label='Viesti'
                     type='text'
                     onChange={e => setViesti({ viesti: e.target.value })}
                 />
                 <Button
                     type='button'
                     onClick={formValidation}
                 >
                     Lähetä
                 </Button>
             </form>
         </>
         )*/
