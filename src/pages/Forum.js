import React from 'react';
import Sidebar from '../components/Sidebar';
import PostList from '../components/PostList';
import NewPostForm from '../components/NewPostForm';
import useFirestore from '../hooks/useFirestore';

function Forum() {
  const { docs: posts } = useFirestore('posts');

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar className="w-full md:w-64 mb-8 md:mb-0" />
      <div className="flex-grow md:ml-8">
        <h1 className="text-3xl font-bold mb-6">Eczema Forum</h1>
        <NewPostForm />
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default Forum;
