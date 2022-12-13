import React from 'react';
import { Link } from "react-router-dom"
import styled from 'styled-components';

const Login = () =>
{
    return (
        <Background>
            <CardForm>
                <Title>Login</Title>
                <Form>
                    <div>
                        <label for="email">email</label>
                        <input id='email' />
                    </div>
                    <div>
                        <label for="password">password</label>
                        <input id='password' />
                    </div>
                </Form>
                <Link to='/signup'>
                    <SignUpText>registro</SignUpText>
                </Link>
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
    height: 40vh;
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

const SignUpText = styled.p`
    color: #8181d6;
    text-align: center;
    cursor: pointer;
`

export default Login;
