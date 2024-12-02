import { useState, useEffect } from "react";
import { db } from "./../firebase";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

const useFirestore = (collectionName, id = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const docRef = doc(db, collectionName, id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setData(docSnap.data());
          } else {
            console.error("Document not found");
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false); // No need to fetch data if no ID is provided
      }
    };

    fetchData();
  }, [collectionName, id]);

  const saveData = async (newData) => {
    try {
      setLoading(true);
      const docRef = id ? doc(db, collectionName, id) : doc(collection(db, collectionName));
      await setDoc(docRef, newData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, saveData };
};

export default useFirestore;
