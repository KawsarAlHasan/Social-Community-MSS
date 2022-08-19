import * as UploadApi from "../api/UploadRequest";
export const uploadingImage = (data) => async (dispatch) => {
  try {
    await UploadApi.uploadImage(data);
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = (data) => async (dispatch) => {
  try {
  } catch (error) {}
};
