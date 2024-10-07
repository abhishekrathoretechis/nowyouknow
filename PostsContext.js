import React, {createContext, useState} from 'react';

export const PostsContext = createContext();

export const PostsProvider = ({children}) => {
  const [posts, setPosts] = useState([
    // Existing posts array
    {
      id: 1,
      userName: 'Mike',
      date: '3/03/2024',
      profilePic: require('./assets/Images/joker.png'),
      postImages: [
        require('./assets/Images/natureImage1.png'),
        require('./assets/Images/natureImage2.png'),
        require('./assets/Images/natureImage3.png'),
      ],
      title: 'Nature Pictures',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ...more',
    },
    {
      id: 2,
      userName: 'Henry',
      date: '22/01/2024',
      profilePic: require('./assets/Images/henry.png'),
      postImages: [
        require('./assets/Images/postImage4.png'),
        require('./assets/Images/postImage3.png'),
      ],
      title: 'Car Pictures',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ...more',
    },
    {
      id: 3,
      userName: 'Peter',
      date: '28/07/2024',
      profilePic: require('./assets/Images/peter.png'),
      postImages: [
        require('./assets/Images/city1.png'),
        require('./assets/Images/city2.png'),
        require('./assets/Images/city3.png'),
      ],
      title: 'Cities Pictures',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ...more',
    },
    // Other posts
  ]);

  const [user, setUser] = useState({
    userName: 'Alex',
    bio: 'Photographer | Student | Wonderer',
    profilePic: require('./assets/Images/joker.png'), // Adjusted to match naming
  });

  const addPost = newPost => {
    const updatedPosts = [
      ...posts,
      {
        ...newPost,
        userName: user.userName,
        profilePic: user.profilePic,
        date: new Date().toLocaleDateString('en-GB'), // Format date as DD/MM/YYYY
        isNew: true,
      },
    ];
    setPosts(updatedPosts);
  };

  const updateUser = updatedUser => {
    setUser(prevUser => ({
      ...prevUser,
      ...updatedUser,
    }));
  };

  return (
    <PostsContext.Provider value={{posts, addPost, user, updateUser}}>
      {children}
    </PostsContext.Provider>
  );
};
