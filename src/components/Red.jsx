import React from 'react';
import { ReactComponent as Whatsapp } from "../media/whatsapp.svg";
import { ReactComponent as Instagram} from "../media/instagram.svg"
import { ReactComponent as Gmail } from "../media/gmail.svg"
import styled from 'styled-components';

const Red = () => {
    return (
        <AllRed>
            <Via>
                <Whatsapp/>
                <a href='' target="_blank">
                <Text>+569 22222222</Text>
                </a>
            </Via>
            <Via>
                <Instagram />
                <a href='' target="_blank">
                <Text>valemiranda.cosmetologa</Text>
                </a>
            </Via>
            <Via>
                <Gmail/>
                <a href='' target="_blank">
                <Text>vale@gmail.com</Text>
                </a>
            </Via>
        </AllRed>
    );
}

const AllRed = styled.div`
    display: flex;
    background-color: pink;
`

const Via = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    fill: #fff;
    & a{
        text-decoration: none;
        color: #fff
    }
`

const Text = styled.h3`
  margin: 1rem;
`

export default Red;
