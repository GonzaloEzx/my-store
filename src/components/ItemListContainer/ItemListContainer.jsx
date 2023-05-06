import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const useProducts = (categoryId) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");
    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return { products, loading, error };
};

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const { products, loading, error } = useProducts(categoryId);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Ha ocurrido un error al cargar los productos.</div>;
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

// LO MIO
//
//
// import { useState, useEffect } from "react";
// // import { getProducts, getProductsByCategory } from "../../asyncMock";
// import ItemList from "../ItemList/ItemList";
// import { useParams } from "react-router-dom";
// import { getDocs, collection, query, where } from "firebase/firestore";
// import { db } from "../../services/firebase/firebaseConfig";

// const ItemListContainer = ({ greeting }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { categoryId } = useParams();

//   useEffect(() => {
//     setLoading(true);
//     const collectionRef = categoryId
//       ? query(collection(db, "products"), where("category", "==", categoryId))
//       : collection(db, "products");
//     getDocs(collectionRef)
//       .then((response) => {
//         const productsAdapted = response.docs.map((doc) => {
//           const data = doc.data();
//           return { id: doc.id, ...data };
//         });
//         setProducts(productsAdapted);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [categoryId]);

//   return (
//     <div>
//       <h1>{greeting}</h1>
//       <ItemList products={products} />
//     </div>
//   );
// };

// export default ItemListContainer;
