const BASE_URL = 'http://localhost:5000';

const Route = {
    GET_DATA: '/tasks',
    SEND_DATA: '/tasks'
};

const Method = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE'
};

const ErrorText = {
    GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
    SEND_DATA: 'Не удалось отправить данные для создания новой задачи. Попробуйте ещё раз',
    DELETE_DATA: 'Не удалось удалить данные'
};

const load = async (route, errorText, method = Method.GET, body = null)=>{
    try{
        const response = await fetch(`${BASE_URL}${route}`,{method,body})
        if (!response.ok){
            throw new Error();
        }
        return response.json();
    }
    catch (err){
        throw new Error(errorText);
    }
};
const send = async (route, errorText, method = Method.POST, body = null)=>{
    try{
        const response = await fetch(`${BASE_URL}${route}`,{
            "method":method,
            "body":body,
            "headers": {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok){
            throw new Error();
        }
        return response.json();
    }
    catch{
        throw new Error(errorText);
    }
}

const del = async (route, errorText, method = Method.DELETE, body = null)=>{
    try{
        const response = await fetch(`${BASE_URL}${route}`,{
            "method":method,
            "body":body,
            "headers": {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok){
            throw new Error();
        }
        return response.json();
    }
    catch{
        throw new Error(errorText);
    }
}

const sendData = (body)=> send(Route.SEND_DATA,ErrorText.SEND_DATA,Method.POST,body);
const getData = ()=> load(Route.GET_DATA, ErrorText.GET_DATA);

export {getData,sendData};