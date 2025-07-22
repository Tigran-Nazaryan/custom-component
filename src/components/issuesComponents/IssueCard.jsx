export default function IssueCard({issue, onEdit, onDelete, createdBy}) {
    return (
        <div
            className="border border-gray-300 rounded-md p-4 mb-4 shadow-sm grid grid-cols-3 gap-3 items-center">
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-2">{issue.title}</h3>
                <p className="text-gray-700 mb-4">{issue.description}</p>
            </div>
            {issue.labels && issue.labels.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2" key={issue.id}>
                    {issue.labels.map(label=> (
                        <span
                            key={label.id}
                            className="text-white text-sm px-2 py-1 rounded"
                            style={{
                                backgroundColor: label.color,
                            }}
                        >
                            {label.name}
                        </span>
                    ))}
                </div>
            )}
            {
                createdBy === issue.createdBy && (
                    <div>
                        <button
                            onClick={onEdit}
                            className="mr-3 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
                        >
                            Edit
                        </button>
                        <button
                            onClick={onDelete}
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
                        >
                            Delete
                        </button>
                    </div>
                )
            }
        </div>
    );
}
