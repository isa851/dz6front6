import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
    const params = useParams();
    return (
        <div>
            <CategoryComponent category={params.category} />
            
        </div>
    );
}

export default CategoryPage;
