import { faCommentSlash } from "@fortawesome/free-solid-svg-icons"

export default function TripComments() {

    //dummy data
    const comments = [
        {
            commenter: 'Anthony',
            text: 'Some words go into here'
        },
        {
            commenter: 'Anthony',
            text: 'Some words go into here'
        },
        {
            commenter: 'Anthony',
            text: 'Some words go into here'
        },
        {
            commenter: 'Anthony',
            text: 'Some words go into here'
        },
        {
            commenter: 'Anthony',
            text: 'Some words go into here'
        }
    ]


    return (
        <div className="comments">
            {
                comments.map((comment) => {
                    return (
                        <div className="comment-card">
                            <div>
                                {comment.commenter}
                            </div>
                            <div>
                                {comment.text}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}