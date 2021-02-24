import React from 'react';
import emailjs from 'emailjs-com';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Axios from 'axios';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target);

        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            disabled: true,
            emailSent: true
        });

    emailjs.sendForm('gmail', 'email_template', event.target, 'user_6miu1oAFeP2LZTyDTyDFJ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
            this.setState({
            })
        });
        event.target.reset()
    }


    render() {
        return(
            <div>
                <Hero title={this.props.title} />

                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="subject">Subject</Form.Label>
                            <Form.Control id="subject" name="subject" type="text" value={this.state.subject} onChange={this.handleChange} required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>


                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>


                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </Form>
                </Content>
            </div>
        );
    }

}

export default Contact;

// import emailjs from "emailjs-com";
// import React from 'react';

// export default function ContactUs() {

//     function sendEmail(e) {
//         e.preventDefault();

//     emailjs.sendForm('gmail', 'email_template', e.target, 'user_6miu1oAFeP2LZTyDTyDFJ')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//         e.target.reset()
//     }

//     return(
//         <div>
//             <div className="container">
//             <form onSubmit={sendEmail}>
//                     <div className="row pt-5 mx-auto">
//                         <div className="col-8 form-group mx-auto">
//                             <input type="text" className="form-control" placeholder="Name" name="name"/>
//                         </div>
//                         <div className="col-8 form-group pt-2 mx-auto">
//                             <input type="email" className="form-control" placeholder="Email Address" name="email"/>
//                         </div>
//                         <div className="col-8 form-group pt-2 mx-auto">
//                             <input type="text" className="form-control" placeholder="Subject" name="subject"/>
//                         </div>
//                         <div className="col-8 form-group pt-2 mx-auto">
//                             <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
//                         </div>
//                         <div className="col-8 pt-3 mx-auto">
//                             <input type="submit" className="btn btn-info" value="Send Message"></input>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }