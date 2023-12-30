/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable indent */
/* eslint-disable react/prop-types */
// libraries
import axios from 'axios'
import styled from 'styled-components'

const SignupComponent = ({ setSignupUser, signupID, signupPWD, signupNickname, signupPhoneNumber }) => {
    const Signup = () => {
        try {
            const response = axios.post('/Signup', {
                signupID,
                signupPWD,
                signupNickname,
                signupPhoneNumber
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <div className='Text'>아이디</div>
            <div className='row'>
                <Inputbox
                    name='signupID'
                    value={signupID}
                    onChange={setSignupUser}
                    placeholder='ID  / Email'
                    required />
            </div>
            <div className='Text'>비밀번호</div>
            <div className='row'>
                <Inputbox
                    name='signupPWD'
                    type='password'
                    value={signupPWD}
                    onChange={setSignupUser}
                    placeholder='*********'
                    required />
            </div>
            <div className='Text'>닉네임</div>
            <div className='row'>
                <Inputbox
                    name='signupNickname'
                    value={signupNickname}
                    onChange={setSignupUser}
                    placeholder='Nickname'
                    required />
            </div>
            <div className='Text'>전화번호</div>
            <div className='row'>
                <Inputbox
                    name='signupPhoneNumber'
                    value={signupPhoneNumber}
                    onChange={setSignupUser}
                    placeholder='010-****-****'
                    required />
            </div>
            <SignupButton onClick={Signup}>회원가입</SignupButton>
        </Container>
    )
}

export default SignupComponent

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: black;
    .row{
        display: flex;
        flex-direction: row;
        margin-top: 1em;
        margin-right: 2em;
        width: 90%;
        align-items: center;
        border: 2px solid gray; 
    }
    .Text{
        align-self: flex-start;
        font-size: 1.2em;
        font-weight: 400;
        margin-top: 1rem;
        margin-left: 0.8rem;
    }
`

const Inputbox = styled.input`
    padding-left: 1rem;
    width: 90%;
    height: 5vh;
    border: none;
    background-color: white;
    color: black;
    &:focus{
        outline: none;
    }
    font-size: 1em;
`

const SignupButton = styled.button`
    margin-left: 1em;
    margin-top: 1em;
    background-color: #E6E6E6;
    color: black;
    font-size: 1.2em;
`
