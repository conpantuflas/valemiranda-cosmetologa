import React from 'react';
import styled from 'styled-components';

const SignUp = () => 
{
    return (
        <Background>
            <CardForm>
                <Title>SignUp</Title>
                <Form>
                    <div>
                        <label for="name">name</label>
                        <input id='name' />
                    </div>
                    <div>
                        <label for="lastname">lastname</label>
                        <input id='lastname' />
                    </div>
                    <div>
                        <label for="age">age</label>
                        <input id='age' />
                    </div>
                    <div>
                        <label for="telephone">telephone</label>
                        <input id='telephone' />
                    </div>
                    <div>
                        <label for="rut">rut</label>
                        <input id='rut' />
                    </div>
                    <div>
                        <label for="email">email</label>
                        <input id='email' />
                    </div>
                    <div>
                        <label for="password">password</label>
                        <input id='password' />
                    </div>
                </Form>
                <Button>click</Button>
            </CardForm>
        </Background>
    );
}

const Background = styled.div`
    background-color: #d5fff1;
    height: 100vh;
    width: 100%;
    position: absolute;
`

const Title = styled.p`
    margin: 0 auto;
    text-align: center;
    padding: 2rem;
    font-size: 1.7rem;
`

const CardForm = styled.div`
    background-color: #fff;
    width: 40%;
    min-height: 40vh;
    margin: 10rem  auto;
`
const Form = styled.form`
    & div{
        display: flex;
        justify-content: center;
        margin: 1rem;
    }
`

const Button = styled.button`
    border: none;
    border-radius: 16px;
    background-color: rgb(12,255,0);
    color: #fff;
    width: 8rem;
    height: 4vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.1rem;
`


export default SignUp;
