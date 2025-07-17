import { useState } from "react";
import Button from "../Button/index.jsx";

const Modal = ({title, btnTxt='Open modal', content='Modal content'}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(prev => !prev);
    };

    const closeModal = () => {
        if (isModalOpen) setIsModalOpen(false);
    };

    return (
        <div>
            <Button type="primary" size="medium" onClick={toggleModal}>
                {btnTxt}
            </Button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-1">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">{title}</h2>
                        <p className="mb-4">{content}</p>

                        <div className="flex justify-end gap-2">
                            <button
                                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                                onClick={closeModal}
                            >
                                Cancle
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                onClick={closeModal}
                            >
                                ОК
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
