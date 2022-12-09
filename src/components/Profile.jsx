import React from 'react';
import styled from 'styled-components';
import img from "../media/floral.jpg"


const Profile = () =>
{
    return (
        //content
        <TheProfile>
            {/* effect */}
            <ColorOne>
                <ColorTwo>
                    {/*img*/}
                    <TheImg>
                        <img src={img} />
                    </TheImg>
                </ColorTwo>
            </ColorOne>
            <ContentInformation>
                <h3>Mis Citas</h3>
                <p>En curso</p>
                <div></div>
                <p>Fuera de curso</p>
                <div></div>
            </ContentInformation>
        </TheProfile>
    );

}

//recuerda exportar los componentes de estilo

const TheProfile = styled.div`
        background-color: #dfb6e0;
        width: 100%;
        height: 100vh;
    `

const ColorOne = styled.div`
    background-color: #eecce4;
    margin: 0 auto;
    width: 62%;
    height: 130vh;
    transform: rotate(45deg) translateY(-300px) translateX(-300px);
`

const ColorTwo = styled.div`
    background-color: #f7deea;
    margin: 0 auto;
    width: 84%;
    height: 120vh;
`

const TheImg = styled.div`
    margin: 0 auto;
    width: 82%;
    height: 110vh;
    & img{
        width: 100%;
        object-fit: cover;
        height: 110vh;
        object-position: 45% 45%;
        transform: rotate(180deg);
    }
`

const ContentInformation = styled.div`
    transform: translateY(-800px);
    display: flex;
    justify-content: center;
`

export default Profile;
