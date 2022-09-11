import { createContext ,useReducer} from "react";
import axios from 'axios';
import kidReducer from "./KidReducer";

const KidContext = createContext();
const BACK_TOKEN = process.env.REACT_APP_BACK_TOKEN;


export const KidProvider =  ({children}) => {
    const initialState = {
        kids: [],
        isLoading: false
    }
    const [state , dispatch] = useReducer(kidReducer , initialState)
    //const [kids , setKids] = useState([])
   // const [isLoading , setIsLoading] = useState(true);
  
   const setIsLoading = ()=>dispatch({type:'SET_LOADING'})

    const getKids =async () => {
        setIsLoading();
        const res = await axios.get(`/kindergarten/1/kid/all`,{
          headers: {
            Authorization: `Bearer ${BACK_TOKEN}`
          }})
        //setIsLoading(false)
        const data = await res.data;
        dispatch({

            type:'GET_KIDS',
            payload:data,
        }    
        )
        //setKids(data)
    }
    return <KidContext.Provider value={
        {
            kids:state.kids,
        isLoading:state.isLoading,
        getKids
    }
    }>
        {children}
    </KidContext.Provider>
} 

export default KidContext