import React from 'react';
import styled from 'styled-components';
import img from "../media/floral.jpg"
import Citation from './Citation';
import Navbar from './Navbar';


const Profile = () =>
{
    return (
        //content
        <TheProfile>
            <Navbar />
            {/* effect */}
            <ColorOne>
                {/*img*/}
                <TheImg>
                    <img src={img} />
                    <ColorTwo>
                    </ColorTwo>
                </TheImg>
            </ColorOne>
            <ContentInformation>
                <h3>Mis Citas</h3>
                <AllCitation>
                    <CategoryCitation>
                        <p>En curso</p>
                        <GroupCitation>
                            <Citation />
                            <Citation />
                            <Citation />
                            <Citation />
                        </GroupCitation>
                    </CategoryCitation>
                    <CategoryCitation>
                        <p>Fuera de curso</p>
                        <GroupCitation>
                            <Citation />
                            <Citation />
                            <Citation />
                            <Citation />
                        </GroupCitation>
                    </CategoryCitation>
                </AllCitation>
            </ContentInformation>
        </TheProfile>
    );

}

//recuerda exportar los componentes de estilo

const GroupCitation = styled.div`
    width: 100%;
    height: 75%;
    overflow-y: scroll;
    margin: 0;
`

const AllCitation = styled.div`
    width: 80%;
    height: 60vh;
    margin-top: -8rem;
`

const CategoryCitation = styled.div`
    width: 100%;
    height: 29vh;
    margin: 1rem;
    & p{
        color: #fff;
        margin: 2rem 0 0 0;
        font-family: 'Great Vibes', cursive;
        font-size: 1.5rem;
    }
`


const TheProfile = styled.div`
        background-color: #dfb6e0;
        width: 100%;
        height: 100vh;
        overflow-y: hidden;
    `

const ColorOne = styled.div`
    background-color: #f7deea;
    margin: 0 auto;
    width: 62%;
    height: 130vh;
    transform: rotate(45deg) translateY(-300px) translateX(-300px);
    `

const ColorTwo = styled.div`
    background-color: #eecce4;
    margin: 0 auto;
    width: 90%;
    height: 100vh;
    transform: translateY(-700px) translateX(-40px);
`

const TheImg = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 1400vh;
    transform: translateY(20px) translateX(-10px);
    & img{
        width: 100%;
        object-fit: cover;
        height: 110vh;
        object-position: 45% 45%;
        transform: rotate(180deg);
        filter: brightness(85%);
    }
`

const ContentInformation = styled.div`
    transform: translateY(-890px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & h3{
        color: pink;
        text-shadow: 2px 2px 2px purple;
        font-size: 6rem;
        font-family: 'Great Vibes', cursive;
        &:Hover{
            transition: 2500ms all ease;
            transform: skew(-15deg) scale(1.1);
    }
    }
`

export default Profile;
