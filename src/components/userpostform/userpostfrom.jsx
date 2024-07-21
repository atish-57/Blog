"use client";

import React, { useEffect } from 'react';
import { addPost } from "@/lib/action";
import { useFormState } from "react-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./userpostform.module.css";
import toastStyles from './toastStyles.module.css';

const UserPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  function generateUniqueValue() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message || "Post added successfully!", {
        className: toastStyles.toastSuccess,
        bodyClassName: toastStyles.toastMessage,
        position: "top-right", // Use direct string value
        autoClose: 5000,
      });
    } else if (state?.error) {
      toast.error(state.error || "Something went wrong!", {
        className: toastStyles.toastError,
        bodyClassName: toastStyles.toastMessage,
        position: "top-right", // Use direct string value
        autoClose: 5000,
      });
    }
  }, [state]);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="hidden" name="slug" placeholder="slug" value={generateUniqueValue()} />
      <input type="text" name="img" placeholder="image url" />
      <textarea type="text" name="desc" placeholder="desc" rows={10} />
      <button type="submit">Add</button>
      <ToastContainer className={toastStyles.toastContainer} />
    </form>
  );
};

export default UserPostForm;
