import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFirestore from "../../hooks/useFirestore";


const AddEditBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    const {data, saveData, loading, error} = useFirestore("books", id);

    useEffect(() => {
        if (data) {
            setTitle(data.title);
            setAuthor(data.author);
            setPrice(data.price);
            setCoverImage(data.coverImage);
        }
    }, [data]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        await saveData({ title, author, price, coverImage });
        navigate("/books");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    {id ? "Edit Book" : "Add Book"}
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Book Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            placeholder="Enter book title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="author"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Author
                        </label>
                        <input
                            id="author"
                            type="text"
                            placeholder="Enter author name"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="price"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Price
                        </label>
                        <input
                            id="price"
                            type="number"
                            placeholder="Enter book price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="coverImage"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Cover Image
                        </label>
                        <input
                            id="coverImage"
                            type="text"
                            placeholder="Enter cover image url"
                            value={coverImage}
                            onChange={(e) => setCoverImage(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddEditBook;