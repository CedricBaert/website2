import React from 'react'
import { useForm } from 'react-hook-form';
import { useState, useCallback } from 'react';

export default function Avatar() {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [imgLink, setImg] = useState("https://avatars.dicebear.com/api/micah/:Cedric.svg");
    const [username, setUsername] = useState("Cedric");
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(false);

    const downloadAvatar = useCallback((url, name="avatar") => {
        setFetching(true);
        fetch(url)
          .then(response => response.blob())
          .then(blob => {
            setFetching(false);
            const blobURL = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = blobURL;
            a.style = "display: none";
  
            if (name && name.length) a.download = name;
            document.body.appendChild(a);
            a.click();  
          })
          .catch(() => setError(true));
        },[])

    const onSubmit = useCallback((data) => {
        setImg(`https://avatars.dicebear.com/api/micah/:${data.username}.svg`);
        setUsername(data.username);
    }, [])


    return (
        <div>
            <img src={imgLink} alt="Avatar" className='avatar'/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Username'{...register('username', { required: <p className='error-message'>Username is empty</p> })} />  
                {errors.username && errors.username.message} 
                <input type="submit" value="Generate avatar" />
            </form>
            <button disabled={fetching} onClick={()=> downloadAvatar(imgLink)}>
                Download avatar
            </button>
            {error ? <p className='error-message'>Something went wrong</p> : ""}
        </div>
    )
}