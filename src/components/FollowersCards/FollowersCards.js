import React, { useEffect, useState } from 'react'
import './FollowersCards.css'
import { Followers } from '../Data/FollowersData'
import { useSelector } from 'react-redux/es/exports'
import User from '../User/User'
import { getAllUser } from '../../api/UserRequest.js'

const FollowersCards = () => {
  // const [modalOpened, setModalOpened] = useState(false);
  const [persons, setPersons] = useState([])
  const { user } = useSelector((state) => state.authReducer.authData)

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser()
      setPersons(data)
      console.log(data)
    }
    fetchPersons()
  }, [])

  return (
    <div className="FollowersCards">
      <h3>People you may Know</h3>
      {persons.map((person, id) => {
        if (person._id !== user._id) {
          return <User person={person} key={id} />
        }
      })}
    </div>
  )
}

export default FollowersCards
