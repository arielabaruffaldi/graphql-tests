import React from 'react';
import { useGetPhotos } from "./useGetPhotos";
import {useMutationToggleLike} from "./useMutationToggleLike";

const Test = (props) => {
    const { loading, data, error } = useGetPhotos(2);
    const { mutation, mutationLoading, mutationError } = useMutationToggleLike();
    console.log(data)
    const handleClick = (id) => {
        console.log(id)
        mutation({
            variables: {
              input: { id }
            }
          })
    }
    return (
        <>
            {loading && <h1>loading..</h1>}
            {data && data.photos.map((photo) => (
                <li key={photo.id}>
                    <img src={photo.src} alt={"test"} />
                    <span onClick={()=>handleClick(photo.id)}>{photo.likes} likes</span>
                </li>
            ))}
        </>
    )
}

export default Test;