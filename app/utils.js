export const flattenCollection = snapshot => {
  const data = [];

  snapshot.forEach(doc => {
    data.push({
      id: doc.id,
      ...doc.data()
    })
  });

  return {
    data,
    size: snapshot.size
  };
};