import { Modal, useMantineTheme } from '@mantine/core'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { uploadImage } from '../../Action/UploadAction'
import { updateUser } from '../../api/UserRequest'
import './ProfileModal.css'

function ProfileModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme()
  const { password, ...other } = data
  const [formData, setFormData] = useState(other)
  const [profileImage, setProfileImage] = useState(null)
  const [coverImage, setCoverImage] = useState(null)
  const dispatch = useDispatch()
  const param = useParams()

  const { user } = useSelector((state) => state.authReducer.authData)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      event.target.name === 'profileImage'
        ? setProfileImage(img)
        : setCoverImage(img)
    }
  }

  // form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    let UserData = formData
    if (profileImage) {
      const data = new FormData()
      const fileName = Date.now() + profileImage.name
      data.append('name', fileName)
      data.append('file', profileImage)
      UserData.profilePicture = fileName
      try {
        dispatch(uploadImage(data))
      } catch (err) {
        console.log(err)
      }
    }
    if (coverImage) {
      const data = new FormData()
      const fileName = Date.now() + coverImage.name
      data.append('name', fileName)
      data.append('file', coverImage)
      UserData.coverPicture = fileName
      try {
        dispatch(uploadImage(data))
      } catch (err) {
        console.log(err)
      }
    }
    dispatch(updateUser(param.id, UserData))
    setModalOpened(false)
  }

  return (
    <Modal
      overlayColor={
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstname}
          ></input>
          <input
            type="text"
            className="infoInput"
            name="lasttName"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastname}
          ></input>
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAt"
            placeholder="Works at"
            onChange={handleChange}
            value={formData.worksAt}
          ></input>
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="livesin"
            placeholder="Lives in"
            onChange={handleChange}
            value={formData.livesIn}
          ></input>
          <input
            type="text"
            className="infoInput"
            name="country"
            placeholder="Country"
            onChange={handleChange}
            value={formData.country}
          ></input>
        </div>
        <input
          type="text"
          className="infoInput"
          placeholder="RelationShip Status"
          name="relationship"
          onChange={handleChange}
          value={formData.relationship}
        ></input>
        <div>
          Profile Image
          <input type="file" name="profileImage" onChange={onImageChange} />
          Cover Image
          <input type="file" name="coverImage" onChange={onImageChange} />
        </div>
        <button className="button info-button" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </Modal>
  )
}
export default ProfileModal
