const blogs = [
    {
        id: 1,
        title: 'this is a blog title',
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nostrum delectus vitae, saepe hic numquam ipsa consectetur! Veniam dicta, eligendi nam magni alias eaque laborum dolores aperiam rerum, ipsum adipisci!"
    },
    {
        id: 2,
        title: 'this is a blog title',
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nostrum delectus vitae, saepe hic numquam ipsa consectetur! Veniam dicta, eligendi nam magni alias eaque laborum dolores aperiam rerum, ipsum adipisci!"
    },
    {
        id: 3,
        title: 'this is a blog title',
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nostrum delectus vitae, saepe hic numquam ipsa consectetur! Veniam dicta, eligendi nam magni alias eaque laborum dolores aperiam rerum, ipsum adipisci!"
    },
    {
        id: 3,
        title: 'this is a blog title',
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nostrum delectus vitae, saepe hic numquam ipsa consectetur! Veniam dicta, eligendi nam magni alias eaque laborum dolores aperiam rerum, ipsum adipisci!"
    },
];
const comments = [
    {
        id: 0,
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nostrum delectus vitae, saepe hic numquam ipsa consectetur! Veniam dicta, eligendi nam magni alias eaque laborum dolores aperiam rerum, ipsum adipisci!",
        commentedBy: 1
    },
    {
        id: 1,
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nostrum delectus vitae, saepe hic numquam ipsa consectetur! Veniam dicta, eligendi nam magni alias eaque laborum dolores aperiam rerum, ipsum adipisci!",
        commentedBy: 2
    },
    {
        id: 2,
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nostrum delectus vitae, saepe hic numquam ipsa consectetur! Veniam dicta, eligendi nam magni alias eaque laborum dolores aperiam rerum, ipsum adipisci!",
        commentedBy: 3
    },
    {
        id: 3,
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nostrum delectus vitae, saepe hic numquam ipsa consectetur! Veniam dicta, eligendi nam magni alias eaque laborum dolores aperiam rerum, ipsum adipisci!",
        commentedBy: 1
    },
]

exports.getComments = () => comments

exports.getBlogPost = (id) => (
    blogs.find((blog) => (
        blog.id === id
    ))
)

exports.addChangeListener = (handleChange) => {
    console.log("addChangeListener");
    handleChange()
}
exports.removeChangeListener = (handleChange) => {
    handleChange()
    console.log("removeChangeListener");
}