import { useParams,  useNavigate , Outlet, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


function Category() {
    const URL = "http://localhost:3001/";
    const [categories, setCategories]= useState([]);
    const [products, setProducts]=useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const { category } = useParams();
    const navigate= useNavigate();
    
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
        axios
      .get(`${URL}subcategory`)
      .then((res) => {
        setSubCategories(res.data);
      })
      .catch((err) => console.log("error:" + err));
    }


    return ( <div className='mb-36 mt-64' > 
       {categories.map((el)=>{
        if(el.name == category){
            return(<>
            <div className='flex'>
                <div className='w-[25%] bg-[#FFCAAA] rounded-[50px] h-[800px] mt-5'>

                    {categories.map((cate)=>{
                        return(
                        <div className='m-9 text-[#013662]'>
                           <span onClick={()=> navigate(`/${cate.name}`)} className='font-bold text-2xl cursor-pointer'> {cate.name}</span>
                            {subCategories.map((sub)=>{
                                if(cate.id == sub.category){
                                    return(
                                        <div className='text-md'>
                                            {sub.name}
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    )})}

                </div>
                <div className='grid grid-cols-3 gap-8 mx-10 w-[75%]'>
                        
                        {products.map((pro)=>{
                            if(pro.category == el.id){
                                return(
                                   <Card name={pro.name} cate={el.name} id={pro.id} photo={pro.thumbnail} price={pro.Price} off={pro.off} />
                                )
                            }
                        })}
                       <Outlet />
                    </div>
                    </div>
           </> )
        }
       })}
                
                    
                    
         
     </div>
     );
}

export default Category;