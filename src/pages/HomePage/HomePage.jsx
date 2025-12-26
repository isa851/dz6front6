import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";
import { categoryStore } from "../../store/store";

const HomePage = () => {
    const categories = categoryStore(s => s.categories);
    console.log(categories);
    
    return (
        <div>
            {
                categories.map(item =>{
                    return <CategoryComponent category={item} limit={4} key={item} />
                })
            }

        </div>
    );
}

export default HomePage;
