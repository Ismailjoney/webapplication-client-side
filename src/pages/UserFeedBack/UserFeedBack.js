import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/ContextProvider';
import Loading from '../../Shared/Loading/Loading';
import FeedBackCard from './FeedBackCard';
 

const UserFeedBack = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    
    const data = new Date()
    const date = format(data, 'PP')
     
    //get user
    const { data:  users = [] } = useQuery({
        queryKey: ['userpost', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://webapplication-server-side.vercel.app/userpost?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })
    console.log(users)

    
    const handdleSubmitComment = event => {
        event.preventDefault()

        const cmntmsg = event.target.text.value;

        const commentmessage = {
            cmntmsg,
            date,
            email: user?.email,
            name: user?.displayName,
            img: users?.image
        }
        event.target.reset()

        fetch(`https://webapplication-server-side.vercel.app/comment`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentmessage)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast('comment successfull')
                    refetch()
                }
            })
            .catch(error => console.log(error))
    }

    //get Comments
    const { data:   comments = [],isLoading,refetch } = useQuery({
        queryKey: ['comment', ],
        queryFn: async () => {
            const res = await fetch('https://webapplication-server-side.vercel.app/comments')
            const data = await res.json()
            return data;
        }
    })
  

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-6'>
            <div className='grid grid-cols-1 gap-6'>
                 {
                   comments?.map(cmnt => <FeedBackCard
                   key={cmnt._id}
                   cmnt={cmnt}
                   ></FeedBackCard>) 
                 }
            </div>
            {
                user?.email &&
                <div className='mx-4'>
                <form onSubmit={handdleSubmitComment}  >
                        <textarea name="text" className="textarea textarea-info w-full lg:w-96 mt-2  " placeholder="add comment" required></textarea><br />
                        <button className="btn  btn-sm btn-primary justify-items-start px-7 ">send</button>
                   
                </form>
            </div>
            }
        </div>
    );
};

export default UserFeedBack;