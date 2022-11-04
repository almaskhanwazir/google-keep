import axios from 'axios';
import { ApiUrls } from './apiUrls';


export const getAllNotes = () => {
    return axios
        .get(ApiUrls.Notes.GETALL)
        .then(({ data }) => data)
        .catch(response => response);
};
export const addNote = (model) => {
    return axios
        .post(ApiUrls.Notes.POST, model)
        .then(({ data }) => data)
        .catch(response => response);
};


export const updateNote = (model) => {debugger
    return axios
        .put(ApiUrls.Notes.Put(model.id), model)
        .then(({ data }) => data)
        .catch(response => response);
};

export const DeleteNote = (id) => {debugger
    return axios
        .delete(ApiUrls.Notes.Delete(id))
        .then(({ data }) => data)
        .catch(response => response);
};