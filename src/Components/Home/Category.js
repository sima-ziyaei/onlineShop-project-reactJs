import { useParams,  useNavigate , Outlet} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


function Category() {
    const URL = "http://localhost:3001/";
    const [categories, setCategories]= useState([]);
    const [products, setProducts]=useState([]);
    const { category } = useParams()
    
    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
        axios
        .get(`${URL}category`)
        .then((res) => {
          setCategories(res.data);
        })
        .catch((err) => console.log("error:" + err));
        axios
        .get(`${URL}products`)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => console.log("error:" + err));
    }


    return ( <div className='my-64'> 
       {categories.map((el)=>{
        if(el.name == category){
            return(<>
            <div> {category}</div>
                <div className='grid grid-cols-4 gap-6 mx-10'>
                        
                        {products.map((pro)=>{
                            if(pro.category == el.id){
                                return(
                                   <Card name={pro.name} cate={el.name} id={pro.id} photo={pro.thumbnail} price={pro.Price} off={pro.off} />
                                )
                            }
                        })}
                       <Outlet />
                    </div>
           </> )
        }
       })}
                
                    
                    
         
     </div>
     );
}

export default Category;