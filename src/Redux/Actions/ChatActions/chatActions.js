import { axiosInstance } from '../../axiosInstance';
import Cookies from 'js-cookie';
const token = Cookies.get('token');
const headers = {
  Authorization: `Bearer ${token}`,
};
//?------------------------------------------USER
export const GET_ALL_CHAT_PENDING = 'GET_ALL_CHAT_PENDING';
export const GET_ALL_CHAT_SUCCESS = 'GET_ALL_CHAT_SUCCESS';
export const GET_ALL_CHAT_FAILURE = 'GET_ALL_CHAT_FAILURE';

export const GET_ALL_MESSAGES_PENDING = 'GET_ALL_MESSAGES_PENDING';
export const GET_ALL_MESSAGES_SUCCESS = 'GET_ALL_MESSAGES_SUCCESS';
export const GET_ALL_MESSAGES_FAILURE = 'GET_ALL_MESSAGES_FAILURE';

export const GET_LAST_MESSAGE_PENDING = 'GET_LAST_MESSAGE_PENDING';
export const GET_LAST_MESSAGE_SUCCESS = 'GET_LAST_MESSAGE_SUCCESS';
export const GET_LAST_MESSAGE_FAILURE = 'GET_LAST_MESSAGE_FAILURE';

export const POST_CHAT_PENDING = 'POST_CHAT_PENDING';
export const POST_CHAT_SUCCESS = 'POST_CHAT_SUCCESS';
export const POST_CHAT_FAILURE = 'POST_CHAT_FAILURE';

export const CREATE_MESSAGE_PENDING = 'CREATE_MESSAGE_PENDING';
export const CREATE_MESSAGE_SUCCESS = 'CREATE_MESSAGE_SUCCESS';
export const CREATE_MESSAGE_FAILURE = 'CREATE_MESSAGE_FAILURE';




export const getAllChats = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_CHAT_PENDING });
    try {
      const allMessages = await axiosInstance.get('/chat/getAll',{headers});
      return dispatch({
        type: GET_ALL_CHAT_SUCCESS,
        payload: allMessages.data,
      });
    } catch (error) {
      dispatch({ type: GET_ALL_CHAT_FAILURE, error: error.message });
    }
  };
};
export const getAllMessages = (chatID) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_MESSAGES_PENDING });
    try {
    
      const allMessages = await axiosInstance.get('/message/getAll/'+chatID,{headers});
      return dispatch({
        type: GET_ALL_MESSAGES_SUCCESS,
        payload: allMessages.data,
      });
    } catch (error) {
      dispatch({ type: GET_ALL_MESSAGES_FAILURE, error: error.message });
    }
  };
};
export const createMessage = (chatID, message)=>{
  return async(dispatch) =>{
    dispatch({ type: CREATE_MESSAGE_PENDING });

    try{
      if(!chatID){
        dispatch({ type: CREATE_MESSAGE_FAILURE, error: "Debe enviar el id del chat" });
      }else if (!message){
        dispatch({ type: CREATE_MESSAGE_FAILURE, error: "Debe enviar el mensaje" });
      }
      await axiosInstance.post('/message/create',{chatID,message},{headers})
    }catch(e){
      dispatch({ type: CREATE_MESSAGE_FAILURE, error: e.message });

    }
  }
};


