import { IoSearchOutline } from "react-icons/io5";
import IssueCard from "../components/IssueCard";
import { issuesData } from "../constants/issuesData";
import { issuesUtils } from "../utils/issuesUtils.js";
import IssueForm from "../components/IssueForm.jsx";
import { labelsData } from "../constants/lables.js";
import { useState } from "react";
import LabelManager from "../components/LabelManager.jsx";

const IssueContainer = () => {
    const [issues, setIssues] = useState(issuesData);
    const [labels, setLabels] = useState(labelsData);
    const [editingIssue, setEditingIssue] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const { deleteIssue, editIssue, addIssue } = issuesUtils;
    console.log(issues);
    const handleCreateIssue = (newIssue) => {
        console.log("newIssue", newIssue);
        setIssues(addIssue(issues, newIssue));
        setShowForm(false);
    };

    const handleSave = (updatedIssue) => {
        console.log("updatedIssue", updatedIssue);
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

    return (
        <div className="flex flex-col mx-auto max-w-[1280px] w-full h-screen gap-5">
            <div className="flex w-full justify-between mt-10 gap-3">
                <div className="flex justify-between items-stretch w-full">
                    <input
                        type="text"
                        className="border-[1px] border-r-0 rounded-l-[5px] rounded-r-none border-gray-500 p-1 w-full"
                    />
                    <button className="border-1  rounded-r-[5px] rounded-l-none p-1 cursor-pointer">
                        <IoSearchOutline />
                    </button>
                </div>
                <button
                    className="bg-emerald-600 w-[100px] rounded-[5px] text-white cursor-pointer"
                    onClick={() => setShowForm(true)}
                >
                    New Issue
                </button>
                <LabelManager  labels={labels} setLabels={setLabels}/>
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
                {issues.map((issue) => (
                    <IssueCard
                        key={issue.id}
                        issue={issue}
                        onEdit={() => handleEdit(issue)}
                        onDelete={() => setIssues(deleteIssue(issues, issue.id))}
                    />
                ))}
            </div>
        </div>
    );
};

export default IssueContainer;