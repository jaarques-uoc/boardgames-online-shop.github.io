import {doGet} from "../../common/helperDAO";

const URLS = {
    CUSTOMERS_WS: 'https://api-gateway-ws.herokuapp.com/customers-ws'
};

const fetchUsers = () => doGet(`${URLS.CUSTOMERS_WS}/customers/`)
    .catch(e => console.log(`Error when retrieving users: ${e}`));

const getUser = id => doGet(`${URLS.CUSTOMERS_WS}/customers/${id}`)
    .catch(e => console.log(`Error when retrieving user ${id}: ${e}`));

export {fetchUsers, getUser};