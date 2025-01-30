import React, { useState, useEffect } from 'react';

const UninitializedStateSolution = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!userData) {
    return <Text>No user data available.</Text>;
  }

  return (
    <View>
      <Text>User Name: {userData.name}</Text>
      {/* Render other user data here */}
    </View>
  );
};

export default UninitializedStateSolution;