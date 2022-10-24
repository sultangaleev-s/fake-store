import React, {useState} from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Modal from '../Modal'
import Account from './Account'
import Login from './Login'
import Registration from './Registration'

export default function Auth() {
  const [state, setState] = useState(true)
  const { closeAuth } = useActions()
  const { isAuth } = useTypedSelector(state => state.auth)

  if (isAuth) {
    return (
      <Modal onClose={closeAuth} title='Account'>
          <Account />
      </Modal>
    )
  } else if (state) {
    return (
      <Modal onClose={closeAuth} title='Login'>
          <Login onToggle={() => {setState(false)}}></Login>
      </Modal>
    )
  } else {
    return (
      <Modal onClose={closeAuth} title='Registration'>
          <Registration onClick={() => {setState(true)}}/>
      </Modal>
    )
  }
}
