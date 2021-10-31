import React, {useState, useContext} from 'react'
import { Container, TextField, Button, Grid, Avatar } from '@material-ui/core'
import SendRounded from '@material-ui/icons/SendRounded';
import { Context } from '../index'
import { useAuthState } from 'react-firebase-hooks/auth'
import Loader from '../components/Loader'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from 'firebase/compat/app'


const Chat = () => {

    const [value, setValue] = useState('')
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if (loading) {
        return <Loader />
    }

    return (
        <Container>
            <Grid container justifyContent={'center'}>
                <div style={{ background: '#dbdbdb52', width: '75%', height: '70vh', border: '1px solid gray', overflowY: 'auto', margin: '20px 0 20px 0'}}>
                    {messages.map(message => 
                        <div key ={user.uid} style={{
                            width: 'fit-content',
                            margin: 10,
                            padding: 10,
                            backgroundColor: user.uid === message.uid ? '#3f51b5' : '#a6a8b3',
                            border: user.uid === message.uid ? '0.5px solid #3f51b5' : '0.5px solid #a6a8b3',
                            borderRadius: '25px',
                            marginLeft: user.uid === message.uid ? 'auto' : '10px',
                        }}>
                            <Grid container>
                                <Avatar src={user.photoURL} />
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    )}
                </div>
                <Grid container
                    direction={'column'}
                    alignItems={'flex-end'}
                    style={{width: '75%'}}
                >
                    <TextField style={{ background: '#dbdbdb52' }} value={value} onChange={e => setValue(e.target.value)} fullWidth rowsMax={2} variant={'outlined'}/>
                    <Button style={{marginTop: 10}} onClick={sendMessage} variant={'contained'} endIcon={<SendRounded />}>
                        send
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;