import '../styles/yhteydenottostyles.css'

import emailjs from 'emailjs-com'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import Swal from 'sweetalert2'

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const USER_ID = process.env.REACT_APP_USER_ID

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

    return (
        <div className='yhteydenottoLomake'>
            <Form onSubmit={handleOnSubmit} className='lomake'>
                <Form.Field
                    id='form-input-control-last-name'
                    className="lomakeOsio"
                    control={Input}
                    label='Nimi'
                    name='user_name'
                    required
                    icon='user circle'
                    iconPosition='left'
                />
                <Form.Field
                    id='form-input-control-email'
                    className="lomakeOsio"
                    control={Input}
                    label='Email'
                    name='user_email'
                    required
                    icon='mail'
                    iconPosition='left'
                />
                <Form.Field
                    className="lomakeOsio"
                    control={Input}
                    label='Puhelinnumero'
                    name='user_phone'
                    icon='phone'
                    iconPosition='left'
                />
                <Form.Field
                    id='form-textarea-control-opinion'
                    className="lomakeOsio"
                    control={TextArea}
                    label='Viesti'
                    name='user_message'
                    required
                />
                
                <Button type='submit' className="laheta">Lähetä</Button>
            </Form>
        </div>
    )
}

export default Lomake