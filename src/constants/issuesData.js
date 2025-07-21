export const issuesData = [
    {
        id: 1,
        title: 'Login error',
        description: 'User cannot log in with correct credentials.',
        labels: [
            { id: `${Date.now()}-bug`, name: "bug", color: "#c22e2e" },
            { id: `${Date.now()}-feature`, name: "feature", color: "#f44336" },
        ],
    },
    {
        id: 2,
        title: 'Add search feature',
        description: 'Need to add the ability to search across projects.',
        labels: [
            { id: `${Date.now()}-feature2`, name: "feature", color: "#0e8a16" },
            { id: `${Date.now()}-enhancement`, name: "enhancement", color: "#a2eeef" },
        ],
    },
    {
        id: 3,
        title: 'API question',
        description: 'How to fetch user data through the API?',
        labels: [
            { id: `${Date.now()}-question`, name: "question", color: "#d876e3" },
        ],
    },
    {
        id: 4,
        title: 'Update documentation',
        description: 'Installation documentation is outdated and needs updating.',
        labels: [
            { id: `${Date.now()}-documentation`, name: "documentation", color: "#0075ca" },
        ],
    },
    {
        id: 5,
        title: 'Performance optimization',
        description: 'Page load slows down with a large amount of data.',
        labels: [
            { id: `${Date.now()}-performance`, name: "performance", color: "#fbca04" },
        ],
    },
];
