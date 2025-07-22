import {IoSearchOutline} from "react-icons/io5";
import IssueCard from "../components/issuesComponents/IssueCard.jsx";
import {issuesData} from "../constants/issuesData";
import {issuesUtils} from "../utils/issuesUtils.js";
import IssueForm from "../components/issuesComponents/IssueForm.jsx";
import {labelsData} from "../constants/lables.js";
import {useState} from "react";
import LabelManager from "../components/issuesComponents/LabelManager.jsx";

const IssueContainer = () => {
    const [issues, setIssues] = useState(issuesData);
    const [labels, setLabels] = useState(labelsData);
    const [editingIssue, setEditingIssue] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [createdBy] = useState("u1");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [issuesPerPage] = useState(1);

    const {deleteIssue, editIssue, addIssue, searchIssues} = issuesUtils;

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleCreateIssue = (newIssue) => {
        const issueWithCreator = {...newIssue, createdBy};
        setIssues(addIssue(issues, issueWithCreator));
        setShowForm(false);
    };

    const handleSave = (updatedIssue) => {
        setIssues(prev => editIssue(prev, updatedIssue));
        setEditingIssue(null);
    };

    const handleCancel = () => {
        setEditingIssue(null);
        setShowForm(false);
    };

    const handleEdit = (issue) => {
        setEditingIssue(issue);
    };

    const filteredIssues = searchIssues(issues, searchTerm);

    const indexOfLastIssue = currentPage * issuesPerPage;
    const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
    const currentIssues = filteredIssues.slice(indexOfFirstIssue, indexOfLastIssue);

    const totalPages = Math.ceil(filteredIssues.length / issuesPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const pages = Array.from({length: totalPages}, (_, i) => i + 1);

    return (
        <div className="flex flex-col mx-auto max-w-[1280px] w-full h-screen gap-5">
            <div className="flex w-full justify-between mt-10 gap-3">
                <div className="flex justify-between items-stretch w-full">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleChange}
                        className="border-[1px] border-r-0 rounded-l-[5px] rounded-r-none border-gray-500 p-1 w-full"
                    />
                    <button className="border-1  rounded-r-[5px] rounded-l-none p-1 cursor-pointer">
                        <IoSearchOutline/>
                    </button>
                </div>
                <button
                    className="bg-emerald-600 w-[100px] rounded-[5px] text-white cursor-pointer"
                    onClick={() => setShowForm(true)}
                >
                    New Issue
                </button>
                <LabelManager labels={labels} setLabels={setLabels}/>
            </div>

            {showForm && !editingIssue && (
                <IssueForm
                    labels={labels}
                    onCreate={handleCreateIssue}
                    onCancel={handleCancel}
                />
            )}

            {editingIssue && (
                <IssueForm
                    labels={labels}
                    initialData={editingIssue}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            )}

            <div>
                {currentIssues.map((issue) => (
                    <IssueCard
                        key={issue.id}
                        issue={issue}
                        createdBy={createdBy}
                        onEdit={() => handleEdit(issue)}
                        onDelete={() => setIssues(deleteIssue(issues, issue.id))}
                    />
                ))}
            </div>

            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex justify-center gap-3 mt-5">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="bg-gray-300 p-2 rounded disabled:opacity-50 cursor-pointer"
                >
                    Previous
                </button>
                <div className="flex items-center gap-3">
                    {pages.map((page) => (
                        <button
                            key={`page-${page}`}
                            onClick={() => goToPage(page)}
                            className={`px-3 py-1 rounded ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-200 cursor-pointer '}`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className="bg-gray-300 p-2 rounded disabled:opacity-50 cursor-pointer"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default IssueContainer;