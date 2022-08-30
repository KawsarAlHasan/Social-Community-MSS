import { UilLocationPoint, UilPlayCircle, UilScenery, UilSchedule, UilTimes } from '@iconscout/react-unicons'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage, uploadPost } from '../../Action/UploadAction'
import './PostShare.css'

function PostShare() {
  const port = 'https://enigmatic-ocean-28315.herokuapp.com/images/'
  const loading = useSelector((state) => state.postReducer.uploading)
  const [image, setImage] = useState(null)
  const imageRef = useRef()
  const dispatch = useDispatch()
  const desc = useRef()
  const { user } = useSelector((state) => state.authReducer.authData)
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage(img)
    }
  }
  const reset = () => {
    setImage(null)
    desc.current.value = ''
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    }
    if (image) {
      const data = new FormData()
      const filename = Date.now() + image.name
      data.append('name', filename)
      data.append('file', image)
      newPost.image = filename
      console.log(newPost)
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }
    dispatch(uploadPost(newPost))
    reset()
  }
  return (
    <div className="PostShare">
      <img
        src={
          user.coverPicture
            ? port + user.profilePicture
            : port + 'defaultProfile.png'
        }
        alt="you are ofline🙄"
      />
      <div>
        <input ref={desc} required type="text" placeholder="What's Happening" />
        {/* postOptions */}
        <div className="postOptions">
          <div
            className="option"
            style={{ color: 'var(--photo)' }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: 'var(--video)' }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: 'var(--location)' }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: 'var(--shedule)' }}>
            <UilSchedule />
            Shedule
          </div>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="button ps-button"
          >
            {loading ? 'Uploading' : 'Share'}
          </button>
          <div style={{ display: 'none' }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="Ohh no wrong image😥" />
          </div>
        )}
      </div>
    </div>
  )
}

export default PostShare
